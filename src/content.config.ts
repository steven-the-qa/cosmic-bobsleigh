import { defineCollection, z } from 'astro:content';
import { object, string } from 'astro:schema';

const blogCollection = defineCollection({
    type: 'content',
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