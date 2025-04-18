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

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/work' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    date: z.string(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, projects, work };
