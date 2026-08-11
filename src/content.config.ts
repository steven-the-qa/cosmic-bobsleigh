import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
    schema: z.object({
        title: z.string(),
        date: z.string().optional(),
        description: z.string().optional(),
        experienceId: z.string()
    }),
});

export const collections = {
    'blog': blogCollection,
}; 