import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
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