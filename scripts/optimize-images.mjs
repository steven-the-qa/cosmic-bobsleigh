#!/usr/bin/env node
/**
 * Optimize the photos in public/ so the site stays light without paid image hosting.
 *
 * For every .png/.jpg/.jpeg under public/ (favicon excluded) this:
 *   1. downscales it so its long edge is at most MAX_EDGE px (never upscales),
 *   2. re-encodes it as WebP at quality QUALITY, stripping camera metadata,
 *   3. writes <name>.webp next to the original and deletes the original raster,
 *   4. rewrites the matching `imageUrl` strings in src/data/collections/*.ts
 *      to point at the new .webp file.
 *
 * It is safe to re-run: already-converted files are skipped. Run it again after
 * dropping new photos into public/.
 *
 *   node scripts/optimize-images.mjs          # convert + rewrite references
 *   node scripts/optimize-images.mjs --dry    # report what would change only
 */
import { readdir, readFile, writeFile, stat, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const DATA_DIR = path.join(ROOT, 'src/data/collections');

const MAX_EDGE = 1200; // px on the longest side — cards render <=800px CSS, 2x for retina
const QUALITY = 80;
const SOURCE_EXT = new Set(['.png', '.jpg', '.jpeg']);
const SKIP = new Set(['favicon.ico']);

const DRY_RUN = process.argv.includes('--dry');

async function* walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) yield* walk(full);
        else if (entry.isFile()) yield full;
    }
}

function formatBytes(n) {
    if (n < 1024) return `${n} B`;
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
    return `${(n / 1024 / 1024).toFixed(1)} MB`;
}

async function convertImages() {
    const converted = new Map(); // "/countries/spain.jpg" -> "/countries/spain.webp"
    let beforeTotal = 0;
    let afterTotal = 0;

    for await (const file of walk(PUBLIC_DIR)) {
        const ext = path.extname(file).toLowerCase();
        if (!SOURCE_EXT.has(ext) || SKIP.has(path.basename(file))) continue;

        const webpPath = file.slice(0, -ext.length) + '.webp';
        const publicRelSource = '/' + path.relative(PUBLIC_DIR, file).split(path.sep).join('/');
        const publicRelWebp = '/' + path.relative(PUBLIC_DIR, webpPath).split(path.sep).join('/');
        converted.set(publicRelSource, publicRelWebp);

        const before = (await stat(file)).size;
        beforeTotal += before;

        if (DRY_RUN) {
            console.log(`  would convert ${publicRelSource}  (${formatBytes(before)})`);
            continue;
        }

        const output = await sharp(file)
            .rotate() // bake in EXIF orientation before we strip metadata
            .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
            .webp({ quality: QUALITY })
            .toBuffer();

        await writeFile(webpPath, output);
        await unlink(file);
        afterTotal += output.length;
        console.log(`  ${publicRelWebp}  ${formatBytes(before)} -> ${formatBytes(output.length)}`);
    }

    if (!DRY_RUN && converted.size) {
        console.log(`\n  total: ${formatBytes(beforeTotal)} -> ${formatBytes(afterTotal)}`);
    }
    return converted;
}

async function rewriteReferences(converted) {
    if (!converted.size) return;
    let touched = 0;

    for await (const file of walk(DATA_DIR)) {
        if (path.extname(file) !== '.ts') continue;
        let text = await readFile(file, 'utf8');
        const original = text;

        for (const [source, webp] of converted) {
            // match the exact quoted path so we never touch a still-missing image
            text = text.split(`'${source}'`).join(`'${webp}'`).split(`"${source}"`).join(`"${webp}"`);
        }

        if (text !== original) {
            touched++;
            if (!DRY_RUN) await writeFile(file, text);
            console.log(`  ${DRY_RUN ? 'would update' : 'updated'} ${path.relative(ROOT, file)}`);
        }
    }

    if (!touched) console.log('  no imageUrl references needed updating');
}

console.log(`Optimizing images in public/ (max ${MAX_EDGE}px, WebP q${QUALITY})${DRY_RUN ? ' [dry run]' : ''}\n`);
const converted = await convertImages();
console.log('');
await rewriteReferences(converted);
console.log('\nDone.');
