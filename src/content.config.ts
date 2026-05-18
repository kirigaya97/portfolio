import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  tags: z.array(z.string()),
  technologies: z.array(
    z.object({
      name: z.string(),
      note: z.string(),
    }),
  ),
  img: z.string(),
  img_alt: z.string().optional(),
  screenshots: z.array(z.string()).optional(),
  video: z.string().optional(),
});

const work = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/work' }),
  schema: projectSchema,
});

const proyectos = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/proyectos' }),
  schema: projectSchema,
});

// Blog posts live in src/content/blog/en/ and src/content/blog/es/ —
// the glob ids carry the locale prefix (e.g. "en/welcome").
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    img: z.string().optional(),
    img_alt: z.string().optional(),
  }),
});

export const collections = { work, proyectos, blog };
