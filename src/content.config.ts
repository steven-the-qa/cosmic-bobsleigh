import { defineCollection, z } from 'astro:content';
import { object, string } from 'astro:schema';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
    schema: object({
        title: string(),
        date: string().optional(),
        description: string().optional(),
        experienceId: string()
    }),
});

export const collections = {
    'blog': blogCollection,
}; 