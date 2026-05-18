import { z } from 'astro/zod';

/**
 * Validation schema for the contact form. Kept in its own file (importing the
 * real `astro/zod` subpath) so it unit-tests without `astro:actions`.
 * `company` is a honeypot — real users never see or fill it.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(10).max(4000),
  company: z.string().optional(),
});
