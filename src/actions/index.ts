import { defineAction, ActionError } from 'astro:actions';
import { Resend } from 'resend';
import { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } from 'astro:env/server';
import { contactSchema } from './schema';

/**
 * In-memory per-IP throttle. Resets whenever the serverless instance recycles —
 * good enough as a light abuse brake for a portfolio contact form.
 */
const lastSubmit = new Map<string, number>();
const THROTTLE_MS = 30_000;

export const server = {
  contact: defineAction({
    accept: 'form',
    input: contactSchema,
    handler: async (input, ctx) => {
      // Honeypot: a filled `company` field means a bot. Report success, send nothing.
      if (input.company) return { ok: true };

      const ip =
        ctx.request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
      const now = Date.now();
      const previous = lastSubmit.get(ip);
      if (previous !== undefined && now - previous < THROTTLE_MS) {
        throw new ActionError({
          code: 'TOO_MANY_REQUESTS',
          message: 'Please wait a moment before sending another message.',
        });
      }

      const resend = new Resend(RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_TO_EMAIL,
        replyTo: input.email,
        subject: `Portfolio contact — ${input.name}`,
        text: `From: ${input.name} <${input.email}>\n\n${input.message}`,
      });

      if (error) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to send the message.',
        });
      }

      lastSubmit.set(ip, now);
      return { ok: true };
    },
  }),
};
