// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };
