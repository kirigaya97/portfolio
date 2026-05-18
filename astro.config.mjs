import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  env: {
    schema: {
      // Required at runtime by the contact action. Set in Vercel + local .env.
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret' }),
      // Where contact-form messages are delivered.
      CONTACT_TO_EMAIL: envField.string({
        context: 'server',
        access: 'public',
        default: 'rodrigo.camino97@gmail.com',
      }),
      // Verified Resend sender. Defaults to Resend's shared test sender.
      CONTACT_FROM_EMAIL: envField.string({
        context: 'server',
        access: 'public',
        default: 'Portfolio <onboarding@resend.dev>',
      }),
    },
  },
});
