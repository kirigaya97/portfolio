# Phase 3 — Features Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
>
> **Orchestration hub:** `docs/superpowers/ROADMAP.md` holds the live status across all 4 phases. After completing each task below, check its boxes here **and** update the Live status table + Task progress log in the roadmap, then commit. At the end of this plan, stop — Phase 4 is content work, blocked on material from Rodrigo.
>
> **Execution model (same as Phase 2):** Every task below carries the **complete final file content(s)**. Subagents transcribe them faithfully — they do **not** redesign and do **not** run git, builds, `astro check`, or tests. The orchestrator runs all checks, dispatches reviewers, and commits, sequentially, after each wave. There is **no browser-based verification** — verification is static only (`pnpm astro check`, `pnpm build`, `pnpm test`, `grep`).

**Goal:** Add the three Phase 3 features to the redesigned portfolio — a tag-filtering island on the work index, a working contact form (Astro Actions + Resend), and a blog (collection + index + post pages) — wired into the existing "Sleight of hand" shell.

**Architecture:** Work continues on the `redesign` branch. Three independent feature slices are built bottom-up: (1) **config** — register a `blog` content collection, an `astro:env` schema for Resend, and `blog`/`contact` route keys; (2) **pure logic** — `src/lib/tags.ts`, `src/lib/blog.ts`, and the contact `src/actions/` slice, each kept free of `astro:*` virtual imports so `vitest` can unit-test them with no config changes; (3) **components & pages** — leaf components (`WorkFilter`, `BlogCard`, `ContactForm`), page-content components, and thin route-page wrappers. Tag filtering is **server-rendered first** (the work index reads `?tag=`) and **progressively enhanced** by a vanilla custom element — no UI framework, matching the existing `menu-button` / `Reveal` pattern. The contact form posts to an Astro Action via a native HTML `<form>`, so it works with JavaScript disabled.

**Tech Stack:** Astro 6.3.x, Astro Actions, `astro:env`, Resend, Tailwind CSS 4 (`@tailwindcss/vite`), scoped Astro `<style>`, CSS custom properties, custom elements / `IntersectionObserver`, Content Layer `glob()` loaders, Vitest, pnpm.

**Source references:**
- Spec: `docs/superpowers/specs/2026-05-15-portfolio-redesign-design.md` (§3 — contact form, work filtering, blog collection)
- Phase 2 plan (finished interfaces): `docs/superpowers/plans/2026-05-16-phase-2-redesign.md`
- i18n keys: `src/i18n/en.ts`, `src/i18n/es.ts`

**Locked decisions (made for this plan; appended to the roadmap decision log by Task 18):**
- **Contact CTA stays WhatsApp.** The site-wide `ContactCTA` component keeps its direct `wa.me` link (Rodrigo's choice, 2026-05-16). The new `/contact` page is reached via the nav, not via `ContactCTA`. `ContactCTA.astro` is therefore **not modified** in this plan.
- **Contact delivery:** Astro Actions + Resend, configured through `astro:env`. Spam defence is a hidden honeypot field plus a 30-second in-memory per-IP throttle (resets when the serverless instance recycles — acceptable for a portfolio).
- **Work filtering:** server-side `?tag=` filtering with a vanilla custom-element progressive enhancement. No UI framework is added.
- **Blog:** a single `blog` content collection with `en/` and `es/` subfolders (ids like `en/welcome`). Phase 3 ships **placeholder posts** (two per locale); Phase 4 replaces them with real writing.
- **Blog index / contact pages** are server-rendered (no `prerender` export), like `work.astro` and `about.astro`. Blog **post** pages are prerendered via `getStaticPaths`, like `work/[...slug].astro`.

**Model tags:** Each task is tagged `haiku` (mechanical transcription) or `sonnet` (design/logic transcription with judgement on layout).

**Shared-file note:** Tasks 3 (i18n) and 2 (config) touch files no other task touches. All component/page tasks touch distinct files. The only cross-task contract is the DOM id pair `#work-grid` / `#work-empty`, produced by Task 14 (`WorkIndexContent`) and consumed by Task 9 (`WorkFilter`)'s script — both tasks state it explicitly.

---

## Task 1: Phase 3 kickoff — install Resend, confirm baseline

**Model:** haiku — **orchestrator runs this directly.**

**Files:**
- Modify: `package.json`, `pnpm-lock.yaml` (via `pnpm add`)

- [ ] **Step 1: Confirm the branch**

Run: `git branch --show-current`
Expected: `redesign`. If not, run `git checkout redesign`.

- [ ] **Step 2: Install the Resend SDK**

Run: `pnpm add resend`
Expected: `resend` added to `dependencies` in `package.json`, lockfile updated.

- [ ] **Step 3: Confirm a green baseline**

Run: `pnpm astro check && pnpm test && pnpm build`
Expected: 0 type errors, 14 tests pass, build succeeds. This is the finished Phase 2 state. If anything fails, stop — Phase 3 assumes a green Phase 2.

- [ ] **Step 4: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: add resend dependency for the contact form"
```

---

## Task 2: Register the blog collection, contact env schema, and routes

**Model:** haiku

**Files:**
- Modify (full rewrite): `astro.config.mjs`
- Modify (full rewrite): `src/content.config.ts`
- Modify (full rewrite): `src/i18n/ui.ts`
- Create: `.env.example`

**Context:** `astro.config.mjs` gains an `env.schema` block (`astro:env`) for the three contact variables. `content.config.ts` gains a `blog` collection whose `glob()` loader reads `src/content/blog/` — files in `en/` and `es/` subfolders produce ids like `en/welcome`. `ui.ts` gains `blog` and `contact` route keys. The `RESEND_API_KEY` secret has no default and is **not** validated at build time, so `pnpm build` stays green without it being set.

- [ ] **Step 1: Replace the entire contents of `astro.config.mjs`**

```js
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
```

- [ ] **Step 2: Replace the entire contents of `src/content.config.ts`**

```ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  tags: z.array(z.string()),
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
```

- [ ] **Step 3: Replace the entire contents of `src/i18n/ui.ts`**

```ts
export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang: Lang = 'en';

export type Lang = keyof typeof languages;

/**
 * Route slugs per locale. The slug for a logical page differs per language
 * (e.g. the work index is /work in EN but /proyectos in ES).
 */
export const routes = {
  home: { en: '', es: '' },
  work: { en: 'work', es: 'proyectos' },
  about: { en: 'about', es: 'about' },
  blog: { en: 'blog', es: 'blog' },
  contact: { en: 'contact', es: 'contact' },
} as const;

export type RouteKey = keyof typeof routes;
```

- [ ] **Step 4: Create `.env.example`**

```
# Resend — required for the /contact form. Create a key at https://resend.com
RESEND_API_KEY=

# Optional overrides — sensible defaults are set in astro.config.mjs.
# CONTACT_TO_EMAIL=rodrigo.camino97@gmail.com
# CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
```

- [ ] **Step 5: Commit** (orchestrator, after the wave)

```bash
git add astro.config.mjs src/content.config.ts src/i18n/ui.ts .env.example
git commit -m "feat: register blog collection, contact env schema, and routes"
```

---

## Task 3: Add Phase 3 i18n keys

**Model:** haiku

**Files:**
- Modify (full rewrite): `src/i18n/en.ts`
- Modify (full rewrite): `src/i18n/es.ts`

**Context:** Both dictionaries gain the same set of new keys (nav, home blog teaser, work filter, blog, contact page, contact form). `en.ts` is the source of the `UIKey` type; `es.ts` is typed `Record<UIKey, string>`, so the two key sets must stay identical. Existing keys are unchanged — only new keys are appended before the closing brace.

- [ ] **Step 1: Replace the entire contents of `src/i18n/en.ts`**

```ts
export const en = {
  // Nav (audit §2 Nav.astro)
  'nav.home': 'Home',
  'nav.work': 'Work',
  'nav.about': 'About',
  'nav.menu': 'Menu',
  'nav.blog': 'Blog',
  'nav.contact': 'Contact',

  // Footer (audit §2 Footer.astro)
  'footer.creditPrefix': 'Designed & Developed in Buenos Aires with ',

  // Skills (audit §2 Skills.astro — 3 cards, h2 + p each)
  'skills.card1.title': 'Wordpress development',
  'skills.card1.body': 'With 3+ years of experience, I develop unique Wordpress online experiences.',
  'skills.card2.title': 'Design and Marketing',
  'skills.card2.body':
    'Having a keen eye for desing and out of the box marketing strategies have led many of my projects to success.',
  'skills.card3.title': 'Strategy-Minded',
  'skills.card3.body':
    'Driven by a strategic vision, I excel in aligning short-term actions with long-term objectives.',

  // Contact CTA (audit §2 ContactCTA.astro)
  'contactCta.heading': 'Interested in working together?',
  'contactCta.button': 'Shoot Me a Message',
  'contactCta.kicker': "Let's talk",

  // Default meta (audit §2 MainHead.astro)
  'meta.defaultTitle': 'Rodrigo Camino: Web developer',
  'meta.defaultDescription':
    '3+ years of experience in web design and development. I develop unique Web experiences.',

  // Home page (audit §2 index.astro)
  'home.hero.title': 'Hello! my name is Rodrigo Camino :)',
  'home.hero.tagline': "I'm a Creative Web Developer, now based in Buenos Aires, Argentina.",
  'home.hero.kicker': 'Creative Web Developer',
  'home.pill.developer': 'Developer',
  'home.pill.creative': 'Creative',
  'home.pill.illusionist': 'Ilusionist',
  'home.portrait.alt': 'Rodrigo Camino smiling against a blue and purple gradient background.',
  'home.work.heading': 'Selected Work',
  'home.work.body':
    'Take a look below at some of my featured work for clients from the past few years.',
  'home.work.viewAll': 'View All',

  // Home page — blog teaser (Phase 3)
  'home.blog.heading': 'From the Blog',
  'home.blog.body': 'Occasional notes on web development, design, and the craft behind the work.',
  'home.blog.viewAll': 'All posts',

  // About page (audit §2 about.astro)
  'about.meta.title': 'About | Rodrigo Camino',
  'about.meta.description': 'About Rodrigo Camino: I develop unique Web experiences.',
  'about.hero.title': 'About',
  'about.hero.tagline':
    'Thanks for stopping by. Read below to learn more about myself and my background.',
  'about.background.heading': 'Background',
  'about.background.p1':
    'Rodrigo Camino is a seasoned web designer and developer specializing in creating visually impactful, user-centered websites and digital platforms. With expertise in branding, digital marketing strategies, and UX/UI design, Rodrigo combines a creative approach with data-driven insights to deliver functional, engaging digital experiences.',
  'about.background.p2':
    'His background spans a range of sectors, providing tailored solutions that align with client needs and business goals. Rodrigo is also experienced in business strategy, especially for bar consulting, and has a strong command of technology in both design and backend processes.',
  'about.education.heading': 'Education',
  'about.education.item1': 'System analist specialist - ORT Argentina (2023 - present)',
  'about.education.item2': 'Wordpress development - Udemy (2021 - 2022)',
  'about.education.item3': 'Back-end developer - CoderHouse (2020 - 2021)',
  'about.education.item4': 'Front-end developer - EducacionIT (2019 - 2020)',
  'about.skills.heading': 'Skills',
  'about.skills.item1': 'Web Development - WordPress, HTML, CSS, JavaScript, PHP',
  'about.skills.item2':
    'Design - Photoshop (Advanced), Adobe Premiere (Intermediate), Illustrator (Basic)',
  'about.skills.item3': 'Marketing - Email Marketing (MailChimp), Social Media Strategies, SEO',
  'about.skills.item4':
    'Project Management - Business Strategy, Client Collaboration, Process Automation',
  'about.skills.item5': 'Soft Skills - Proactive, Teamwork, Adaptable, Client-Oriented',

  // Work index page (audit §2 work.astro)
  'work.meta.title': 'My Work | Rodrigo Camino',
  'work.meta.description': "Learn about Rodrigo Camino's most recent projects",
  'work.hero.title': 'My Work',
  'work.hero.tagline':
    'See my most recent projects below to get an idea of my past experience.',

  // Work index — tag filter (Phase 3)
  'work.filter.label': 'Filter projects by tag',
  'work.filter.all': 'All',
  'work.filter.empty': 'No projects match this tag yet.',

  // Project detail back-link (audit §2 work/[...slug].astro)
  'project.back': 'Work',

  // Blog (Phase 3)
  'blog.meta.title': 'Blog | Rodrigo Camino',
  'blog.meta.description': 'Writing on web development, design, and craft by Rodrigo Camino.',
  'blog.hero.kicker': 'Writing',
  'blog.hero.title': 'Notes & Articles',
  'blog.hero.tagline':
    'Occasional writing on web development, design, and the craft behind the work.',
  'blog.empty': 'No posts yet — check back soon.',
  'blog.readMore': 'Read post',
  'blog.back': 'Blog',

  // Contact page (Phase 3)
  'contact.meta.title': 'Contact | Rodrigo Camino',
  'contact.meta.description':
    'Get in touch with Rodrigo Camino about web development work and collaborations.',
  'contact.hero.kicker': "Let's talk",
  'contact.hero.title': 'Get in touch',
  'contact.hero.tagline':
    'Have a project in mind, or just want to say hello? Send a message and I will get back to you.',
  'contact.aside.heading': 'Other ways to reach me',
  'contact.aside.body': 'Prefer something quicker? Reach out directly.',
  'contact.aside.whatsapp': 'Message on WhatsApp',
  'contact.aside.email': 'Send an email',

  // Contact form (Phase 3)
  'contact.form.name': 'Name',
  'contact.form.email': 'Email',
  'contact.form.message': 'Message',
  'contact.form.submit': 'Send message',
  'contact.form.sending': 'Sending…',
  'contact.form.success': 'Thanks — your message is on its way. I will reply soon.',
  'contact.form.error':
    'Something went wrong sending your message. Please try again, or reach me on WhatsApp.',
  'contact.form.errorRate':
    'You just sent a message — please wait a moment before sending another.',
  'contact.form.errorName': 'Please enter your name.',
  'contact.form.errorEmail': 'Please enter a valid email address.',
  'contact.form.errorMessage': 'Please enter a message of at least 10 characters.',

  // 404 page (audit §2 NotFoundContent.astro)
  'notFound.title': 'Page Not Found',
  'notFound.tagline': 'Not found',
  'notFound.home': 'Back to home',

  // Language toggle (audit §2 LangToggle.astro)
  'lang.switch': 'Switch Language',
} as const;

export type UIDict = typeof en;
export type UIKey = keyof UIDict;
```

- [ ] **Step 2: Replace the entire contents of `src/i18n/es.ts`**

```ts
import type { UIKey } from './en';

export const es: Record<UIKey, string> = {
  // Nav (audit §2 Nav.astro)
  'nav.home': 'Inicio',
  'nav.work': 'Proyectos',
  'nav.about': 'Sobre mí',
  'nav.menu': 'Menú',
  'nav.blog': 'Blog',
  'nav.contact': 'Contacto',

  // Footer (audit §2 Footer.astro)
  'footer.creditPrefix': 'Diseñado y Desarrollado en Buenos Aires con ',

  // Skills (audit §2 Skills.astro — 3 cards, h2 + p each)
  'skills.card1.title': 'Desarrollo Wordpress',
  'skills.card1.body': 'Con más de 3 años de experiencia, desarrollo experiencias Web únicas',
  'skills.card2.title': 'Marketing y Diseño',
  'skills.card2.body':
    'Con un ojo audáz para el diseño y pensamiento tangencial para Marketing, he hecho triunfar muchos de mis proyectos.',
  'skills.card3.title': 'Enfoque Estratégico',
  'skills.card3.body':
    'Guiado por una visión estratégica, sobresalgo en alinear acciones a corto plazo con objetivos a largo plazo...',

  // Contact CTA (audit §2 ContactCTA.astro)
  'contactCta.heading': 'Querés que trabajemos juntos?',
  'contactCta.button': 'Enviame un mensaje',
  'contactCta.kicker': 'Conversemos',

  // Default meta (audit §2 MainHead.astro)
  'meta.defaultTitle': 'Rodrigo Camino: Desarrollador web',
  'meta.defaultDescription':
    '3+ Años de experiencia en el desarrollo de la Web. Desarrollador web creativo.',

  // Home page (audit §2 es/index.astro)
  'home.hero.title': '¡Hola! Mi nombre es Rodrigo Camino :)',
  'home.hero.tagline': 'Soy un Desarrollador Web Creativo, actualmente en Buenos Aires, Argentina.',
  'home.hero.kicker': 'Desarrollador Web Creativo',
  'home.pill.developer': 'Desarrollador',
  'home.pill.creative': 'Creativo',
  'home.pill.illusionist': 'Ilusionista',
  'home.portrait.alt': 'Rodrigo Camino sonriendo con un fondo degradado celeste y púrpura.',
  'home.work.heading': 'Trabajos Seleccionados',
  'home.work.body':
    'Descubre algunos de mis proyectos destacados realizados para clientes en los últimos años.',
  'home.work.viewAll': 'Ver Todo',

  // Home page — blog teaser (Phase 3)
  'home.blog.heading': 'Del Blog',
  'home.blog.body':
    'Notas ocasionales sobre desarrollo web, diseño y el oficio detrás del trabajo.',
  'home.blog.viewAll': 'Todos los artículos',

  // About page (audit §2 es/about.astro)
  'about.meta.title': 'Sobre mí | Rodrigo Camino',
  'about.meta.description': 'Sobre Rodrigo Camino: Desarrollo experiencias web únicas.',
  'about.hero.title': 'Sobre mi',
  'about.hero.tagline':
    'Gracias por pasar por acá. Pasá, ponete cómodo y veamos un poco de mis experiencias pasadas.',
  'about.background.heading': 'Background',
  'about.background.p1':
    'Rodrigo Camino es un experimentado diseñador y desarrollador web especializado en la creación de sitios web y plataformas digitales visualmente impactantes y centradas en el usuario. Con experiencia en branding, estrategias de marketing digital y diseño UX/UI, Rodrigo combina un enfoque creativo con análisis de datos para ofrecer experiencias digitales funcionales y atractivas.',
  'about.background.p2':
    'Su experiencia abarca diversos sectores, brindando soluciones personalizadas que se alinean con las necesidades y objetivos comerciales de los clientes. Rodrigo también tiene experiencia en estrategia empresarial, especialmente en consultoría para bares, y posee un sólido dominio tecnológico tanto en diseño como en procesos de backend.',
  'about.education.heading': 'Educación',
  'about.education.item1': 'Especialista en Análisis de Sistemas - ORT Argentina (2023 - presente)',
  'about.education.item2': 'Desarrollo en WordPress - Udemy (2021 - 2022)',
  'about.education.item3': 'Desarrollador Backend - CoderHouse (2020 - 2021)',
  'about.education.item4': 'Desarrollador Frontend - EducacionIT (2019 - 2020)',
  'about.skills.heading': 'Habilidades',
  'about.skills.item1': 'Desarrollo Web - WordPress, HTML, CSS, JavaScript, PHP',
  'about.skills.item2':
    'Diseño - Photoshop (Avanzado), Adobe Premiere (Intermedio), Illustrator (Básico)',
  'about.skills.item3': 'Marketing - Email Marketing (MailChimp), Estrategias en Redes Sociales, SEO',
  'about.skills.item4':
    'Gestión de Proyectos - Estrategia Empresarial, Colaboración con Clientes, Automatización de Procesos',
  'about.skills.item5':
    'Habilidades Blandas - Proactividad, Trabajo en Equipo, Adaptabilidad, Orientación al Cliente',

  // Work index page (audit §2 es/proyectos.astro)
  'work.meta.title': 'Mi Trabajo | Rodrigo Camino',
  'work.meta.description': 'Mis proyectos más recientes.',
  'work.hero.title': 'Mi Trabajo',
  'work.hero.tagline':
    'Mira mis proyectos recientes para darte una idea de mi experiencia.',

  // Work index — tag filter (Phase 3)
  'work.filter.label': 'Filtrar proyectos por etiqueta',
  'work.filter.all': 'Todos',
  'work.filter.empty': 'Aún no hay proyectos con esta etiqueta.',

  // Project detail back-link (audit §2 es/proyectos/[...slug].astro)
  'project.back': 'Proyectos',

  // Blog (Phase 3)
  'blog.meta.title': 'Blog | Rodrigo Camino',
  'blog.meta.description': 'Artículos sobre desarrollo web, diseño y oficio, por Rodrigo Camino.',
  'blog.hero.kicker': 'Artículos',
  'blog.hero.title': 'Notas y Artículos',
  'blog.hero.tagline':
    'Artículos ocasionales sobre desarrollo web, diseño y el oficio detrás del trabajo.',
  'blog.empty': 'Aún no hay artículos — vuelve pronto.',
  'blog.readMore': 'Leer artículo',
  'blog.back': 'Blog',

  // Contact page (Phase 3)
  'contact.meta.title': 'Contacto | Rodrigo Camino',
  'contact.meta.description':
    'Ponte en contacto con Rodrigo Camino sobre proyectos de desarrollo web y colaboraciones.',
  'contact.hero.kicker': 'Conversemos',
  'contact.hero.title': 'Ponte en contacto',
  'contact.hero.tagline':
    '¿Tienes un proyecto en mente o solo quieres saludar? Envía un mensaje y te responderé.',
  'contact.aside.heading': 'Otras formas de contactarme',
  'contact.aside.body': '¿Prefieres algo más rápido? Escríbeme directamente.',
  'contact.aside.whatsapp': 'Escribir por WhatsApp',
  'contact.aside.email': 'Enviar un correo',

  // Contact form (Phase 3)
  'contact.form.name': 'Nombre',
  'contact.form.email': 'Correo electrónico',
  'contact.form.message': 'Mensaje',
  'contact.form.submit': 'Enviar mensaje',
  'contact.form.sending': 'Enviando…',
  'contact.form.success': 'Gracias — tu mensaje está en camino. Te responderé pronto.',
  'contact.form.error':
    'Algo salió mal al enviar tu mensaje. Inténtalo de nuevo o escríbeme por WhatsApp.',
  'contact.form.errorRate':
    'Acabas de enviar un mensaje — espera un momento antes de enviar otro.',
  'contact.form.errorName': 'Por favor, ingresa tu nombre.',
  'contact.form.errorEmail': 'Por favor, ingresa un correo electrónico válido.',
  'contact.form.errorMessage': 'Por favor, escribe un mensaje de al menos 10 caracteres.',

  // 404 page (audit §2 NotFoundContent.astro)
  'notFound.title': 'Página no encontrada',
  'notFound.tagline': 'No encontrado',
  'notFound.home': 'Volver al inicio',

  // Language toggle (audit §2 LangToggle.astro)
  'lang.switch': 'Switch Language',
};
```

- [ ] **Step 3: Commit** (orchestrator, after the wave)

```bash
git add src/i18n/en.ts src/i18n/es.ts
git commit -m "feat: add Phase 3 i18n keys (blog, contact, work filter)"
```

---

## Task 4: Add placeholder blog posts

**Model:** haiku

**Files:**
- Create: `src/content/blog/en/why-i-started-writing.md`
- Create: `src/content/blog/en/rebuilding-this-site.md`
- Create: `src/content/blog/es/por-que-empece-a-escribir.md`
- Create: `src/content/blog/es/reconstruir-este-sitio.md`

**Context:** Two posts per locale so the `/blog` index, the home teaser, and post pages all have real content to render. These are deliberate placeholders — Phase 4 may replace or extend them. `publishDate` is `YYYY-MM-DD` (coerced to a `Date` by the schema). No `img` (the schema field is optional).

- [ ] **Step 1: Create `src/content/blog/en/why-i-started-writing.md`**

```md
---
title: "Why I started writing here"
description: "A short note on why this blog exists and the kind of thing I plan to write about."
publishDate: 2026-03-18
tags: ["Notes"]
---

I have spent years building websites for other people and rarely stopped to write down what I learned along the way. This is where that changes.

Expect short, practical posts: a technique that saved me an afternoon, a design decision I had to defend, the occasional detour into the craft of illusion that quietly shapes how I think about interfaces.

Nothing here is meant to be the final word. It is a working notebook, kept in public.
```

- [ ] **Step 2: Create `src/content/blog/en/rebuilding-this-site.md`**

```md
---
title: "Rebuilding this site from a template"
description: "Notes on turning a stock Astro template into something that feels deliberate."
publishDate: 2026-04-27
tags: ["Astro", "Design"]
---

This portfolio began life as a stock Astro template. It worked, but it looked like exactly what it was.

The rebuild took it in four passes: modernise the toolchain, settle on a design language, rebuild every component against that language, and finally add the features a portfolio actually needs — filtering, a contact form, and the page you are reading now.

The guiding idea was "sleight of hand": a dark editorial canvas, one warm accent, and motion that reveals content the way a card turn does. Deliberate, never flashy.
```

- [ ] **Step 3: Create `src/content/blog/es/por-que-empece-a-escribir.md`**

```md
---
title: "Por qué empecé a escribir acá"
description: "Una nota breve sobre por qué existe este blog y sobre qué pienso escribir."
publishDate: 2026-03-18
tags: ["Notas"]
---

Pasé años construyendo sitios web para otras personas y casi nunca me detuve a anotar lo que aprendía en el camino. Acá eso cambia.

Esperá publicaciones cortas y prácticas: una técnica que me ahorró una tarde, una decisión de diseño que tuve que defender, y alguna que otra desviación hacia el oficio de la ilusión que, en silencio, moldea cómo pienso las interfaces.

Nada de lo que está acá pretende ser la última palabra. Es un cuaderno de trabajo, hecho en público.
```

- [ ] **Step 4: Create `src/content/blog/es/reconstruir-este-sitio.md`**

```md
---
title: "Reconstruir este sitio desde una plantilla"
description: "Notas sobre convertir una plantilla de Astro en algo que se sienta deliberado."
publishDate: 2026-04-27
tags: ["Astro", "Diseño"]
---

Este portfolio empezó como una plantilla estándar de Astro. Funcionaba, pero se veía exactamente como lo que era.

La reconstrucción se hizo en cuatro etapas: modernizar las herramientas, definir un lenguaje de diseño, reconstruir cada componente sobre ese lenguaje y, por último, agregar las funciones que un portfolio realmente necesita — filtros, un formulario de contacto y la página que estás leyendo.

La idea guía fue "juego de manos": un lienzo editorial oscuro, un único acento cálido y movimiento que revela el contenido como el giro de una carta. Deliberado, nunca estridente.
```

- [ ] **Step 5: Commit** (orchestrator, after the wave)

```bash
git add src/content/blog
git commit -m "content: add placeholder blog posts (EN/ES)"
```

---

## Task 5: Project tag utilities

**Model:** sonnet

**Files:**
- Create: `src/lib/tags.ts`
- Create: `src/lib/tags.test.ts`

**Context:** Pure helpers for the work tag filter. They are generic over a minimal `{ data: { tags: string[] } }` shape (not `CollectionEntry`) so the test can pass plain objects and so the file imports **no** `astro:*` virtual module — `vitest` (plain node config) resolves it directly.

- [ ] **Step 1: Write the failing test — create `src/lib/tags.test.ts`**

```ts
import { describe, it, expect } from 'vitest';
import { collectTags, filterByTag, normalizeTag } from './tags';

const make = (...tags: string[]) => ({ data: { tags } });

describe('collectTags', () => {
  it('returns unique tags sorted case-insensitively', () => {
    const items = [make('Web', 'design'), make('Web', 'Branding')];
    expect(collectTags(items)).toEqual(['Branding', 'design', 'Web']);
  });
  it('returns an empty array for no items', () => {
    expect(collectTags([])).toEqual([]);
  });
});

describe('filterByTag', () => {
  const items = [make('Web'), make('Branding'), make('Web', 'Branding')];
  it('returns all items when the tag is null', () => {
    expect(filterByTag(items, null)).toHaveLength(3);
  });
  it('returns only items carrying the tag', () => {
    expect(filterByTag(items, 'Branding')).toHaveLength(2);
  });
  it('returns an empty array when nothing matches', () => {
    expect(filterByTag(items, 'Nope')).toEqual([]);
  });
});

describe('normalizeTag', () => {
  it('returns null for null', () => {
    expect(normalizeTag(null)).toBeNull();
  });
  it('returns null for a blank/whitespace value', () => {
    expect(normalizeTag('  ')).toBeNull();
  });
  it('trims a real value', () => {
    expect(normalizeTag(' Web ')).toBe('Web');
  });
});
```

- [ ] **Step 2: Write the implementation — create `src/lib/tags.ts`**

```ts
/**
 * Pure tag helpers for the work index filter. Generic over a minimal taggable
 * shape so they unit-test without importing any `astro:*` virtual module.
 */

interface Taggable {
  data: { tags: string[] };
}

/** Unique tags across all items, sorted alphabetically (case-insensitive). */
export function collectTags<T extends Taggable>(items: T[]): string[] {
  const seen = new Set<string>();
  for (const item of items) {
    for (const tag of item.data.tags) seen.add(tag);
  }
  return [...seen].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

/** Items carrying `tag`. A null tag returns the list unchanged. */
export function filterByTag<T extends Taggable>(items: T[], tag: string | null): T[] {
  if (!tag) return items;
  return items.filter((item) => item.data.tags.includes(tag));
}

/** Normalize a raw `?tag=` query value: trim, and treat blank as null. */
export function normalizeTag(raw: string | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  return trimmed === '' ? null : trimmed;
}
```

- [ ] **Step 3: Verification** (orchestrator, post-wave) — `pnpm test` runs `src/lib/tags.test.ts`; expect 8 passing tests in that file.

- [ ] **Step 4: Commit** (orchestrator, after the wave)

```bash
git add src/lib/tags.ts src/lib/tags.test.ts
git commit -m "feat: add project tag utilities"
```

---

## Task 6: Blog collection helpers

**Model:** sonnet

**Files:**
- Create: `src/lib/blog.ts`
- Create: `src/lib/blog.test.ts`

**Context:** Blog entry ids carry a locale prefix (`en/welcome`, `es/bienvenida`). `localeOf` / `slugOf` split that; `localizedPosts` filters a fetched `blog` collection to one locale and sorts newest-first. `localizedPosts` is **pure** — it takes the array already returned by `getCollection('blog')`, so this file imports no `astro:*` virtual and stays unit-testable. Callers do `localizedPosts(await getCollection('blog'), lang)`.

- [ ] **Step 1: Write the failing test — create `src/lib/blog.test.ts`**

```ts
import { describe, it, expect } from 'vitest';
import { localeOf, slugOf, localizedPosts } from './blog';

describe('localeOf', () => {
  it('extracts the locale prefix from an id', () => {
    expect(localeOf('en/welcome')).toBe('en');
    expect(localeOf('es/bienvenida')).toBe('es');
  });
});

describe('slugOf', () => {
  it('strips the locale prefix', () => {
    expect(slugOf('en/welcome')).toBe('welcome');
  });
  it('keeps nested path segments', () => {
    expect(slugOf('en/2026/welcome')).toBe('2026/welcome');
  });
});

describe('localizedPosts', () => {
  const all = [
    { id: 'en/old', data: { publishDate: new Date('2026-01-01') } },
    { id: 'es/uno', data: { publishDate: new Date('2026-02-01') } },
    { id: 'en/new', data: { publishDate: new Date('2026-03-01') } },
  ];
  it('keeps only the requested locale, newest first', () => {
    expect(localizedPosts(all, 'en').map((p) => p.id)).toEqual(['en/new', 'en/old']);
  });
  it('returns an empty array when no post matches the locale', () => {
    expect(localizedPosts(all, 'fr')).toEqual([]);
  });
});
```

- [ ] **Step 2: Write the implementation — create `src/lib/blog.ts`**

```ts
/**
 * Pure helpers for the `blog` collection. Blog entry ids carry a locale prefix
 * (e.g. "en/welcome"). These functions take plain data, so the file imports no
 * `astro:*` virtual module and unit-tests directly under vitest.
 */

/** Locale prefix of a blog entry id: "en/welcome" -> "en". */
export function localeOf(id: string): string {
  return id.split('/')[0];
}

/** Slug of a blog entry id without its locale prefix: "en/welcome" -> "welcome". */
export function slugOf(id: string): string {
  return id.split('/').slice(1).join('/');
}

interface DatedEntry {
  id: string;
  data: { publishDate: Date };
}

/**
 * Filter a blog collection to one locale and sort newest-first.
 * Pass the array returned by `getCollection('blog')`.
 */
export function localizedPosts<T extends DatedEntry>(all: T[], lang: string): T[] {
  return all
    .filter((post) => localeOf(post.id) === lang)
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}
```

- [ ] **Step 3: Verification** (orchestrator, post-wave) — `pnpm test` runs `src/lib/blog.test.ts`; expect 5 passing tests in that file.

- [ ] **Step 4: Commit** (orchestrator, after the wave)

```bash
git add src/lib/blog.ts src/lib/blog.test.ts
git commit -m "feat: add blog collection helpers"
```

---

## Task 7: Contact form server action

**Model:** sonnet

**Files:**
- Create: `src/actions/schema.ts`
- Create: `src/actions/index.ts`
- Create: `src/actions/contact.test.ts`

**Context:** The validation schema lives in its own file importing `z` from `astro/zod` (a real package subpath, vitest-resolvable) so it can be unit-tested without pulling in `astro:actions`. `index.ts` defines the `contact` action: honeypot short-circuit, a 30-second in-memory per-IP throttle, then a Resend send. Env values come from `astro:env/server` (Task 2's schema).

- [ ] **Step 1: Write the failing test — create `src/actions/contact.test.ts`**

```ts
import { describe, it, expect } from 'vitest';
import { contactSchema } from './schema';

const valid = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  message: 'Hello, I have a project I would like to discuss with you.',
};

describe('contactSchema', () => {
  it('accepts a well-formed submission', () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });
  it('rejects a missing name', () => {
    expect(contactSchema.safeParse({ ...valid, name: '' }).success).toBe(false);
  });
  it('rejects an invalid email', () => {
    expect(contactSchema.safeParse({ ...valid, email: 'not-an-email' }).success).toBe(false);
  });
  it('rejects a too-short message', () => {
    expect(contactSchema.safeParse({ ...valid, message: 'hi' }).success).toBe(false);
  });
  it('accepts an optional honeypot value', () => {
    expect(contactSchema.safeParse({ ...valid, company: 'bot' }).success).toBe(true);
  });
});
```

- [ ] **Step 2: Write the schema — create `src/actions/schema.ts`**

```ts
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
```

- [ ] **Step 3: Write the action — create `src/actions/index.ts`**

```ts
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
```

- [ ] **Step 4: Verification** (orchestrator, post-wave) — `pnpm test` runs `src/actions/contact.test.ts`; expect 5 passing tests in that file.

- [ ] **Step 5: Commit** (orchestrator, after the wave)

```bash
git add src/actions/schema.ts src/actions/index.ts src/actions/contact.test.ts
git commit -m "feat: add contact form server action"
```

---

## Task 8: ContactForm component

**Model:** sonnet

**Files:**
- Create: `src/components/ContactForm.astro`

**Context:** A native HTML `<form>` posting to the `contact` action. Works with JavaScript disabled — the browser POSTs, Astro runs the action and re-renders the page; `Astro.getActionResult` then yields the outcome. Field-level errors come from `isInputError`; the rate-limit and send-failure cases come from the action's `ActionError` codes. A tiny progressive script swaps the button to a "sending" state. The honeypot input is visually hidden off-screen.

- [ ] **Step 1: Create `src/components/ContactForm.astro`**

```astro
---
import { actions, isInputError } from 'astro:actions';
import type { Lang } from '../i18n/ui';
import { useTranslations } from '../i18n/utils';

interface Props {
	lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);

const result = Astro.getActionResult(actions.contact);
const succeeded = result !== undefined && result.error === undefined;
const fieldErrors =
	result?.error && isInputError(result.error) ? result.error.fields : undefined;
const generalError =
	result?.error !== undefined && !isInputError(result.error) ? result.error : undefined;
const rateLimited = generalError?.code === 'TOO_MANY_REQUESTS';
---

<form id="contact-form" method="POST" action={actions.contact} class="form">
	{
		succeeded && (
			<p class="banner banner-ok" role="status">
				{t('contact.form.success')}
			</p>
		)
	}
	{
		generalError && (
			<p class="banner banner-err" role="alert">
				{rateLimited ? t('contact.form.errorRate') : t('contact.form.error')}
			</p>
		)
	}

	<div class="field">
		<label for="cf-name">{t('contact.form.name')}</label>
		<input id="cf-name" name="name" type="text" required maxlength="120" autocomplete="name" />
		{fieldErrors?.name && <span class="hint">{t('contact.form.errorName')}</span>}
	</div>

	<div class="field">
		<label for="cf-email">{t('contact.form.email')}</label>
		<input
			id="cf-email"
			name="email"
			type="email"
			required
			maxlength="200"
			autocomplete="email"
		/>
		{fieldErrors?.email && <span class="hint">{t('contact.form.errorEmail')}</span>}
	</div>

	<div class="field">
		<label for="cf-message">{t('contact.form.message')}</label>
		<textarea id="cf-message" name="message" required minlength="10" maxlength="4000" rows="6"
		></textarea>
		{fieldErrors?.message && <span class="hint">{t('contact.form.errorMessage')}</span>}
	</div>

	{/* Honeypot — hidden from people; a bot fills it and gets a silent no-op. */}
	<div class="honeypot" aria-hidden="true">
		<label for="cf-company">Company</label>
		<input id="cf-company" name="company" type="text" tabindex="-1" autocomplete="off" />
	</div>

	<button type="submit" class="submit" data-sending-label={t('contact.form.sending')}>
		{t('contact.form.submit')}
	</button>
</form>

<script>
	const form = document.getElementById('contact-form');
	if (form) {
		form.addEventListener('submit', () => {
			const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
			if (btn) {
				if (btn.dataset.sendingLabel) btn.textContent = btn.dataset.sendingLabel;
				btn.disabled = true;
			}
		});
	}
</script>

<style>
	.form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.banner {
		margin: 0;
		padding: 0.85rem 1.1rem;
		font-size: var(--text-sm);
		border: 1px solid var(--border);
		border-radius: var(--radius);
	}
	.banner-ok {
		color: var(--text-strong);
		background: var(--accent-soft);
		border-color: var(--accent-line);
	}
	.banner-err {
		color: var(--text-strong);
		background: var(--surface-2);
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--text-dim);
	}

	input,
	textarea {
		width: 100%;
		padding: 0.7rem 0.9rem;
		font-family: var(--font-body);
		font-size: var(--text-base);
		color: var(--text);
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		transition: border-color var(--dur-quick) var(--ease-quick);
	}
	textarea {
		resize: vertical;
		min-height: 8rem;
	}
	input:focus-visible,
	textarea:focus-visible {
		border-color: var(--accent);
	}

	.hint {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--accent);
	}

	/* Honeypot: removed from view and from the a11y tree, still submitted. */
	.honeypot {
		position: absolute;
		left: -9999px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	.submit {
		align-self: flex-start;
		padding: 0.85em 1.6em;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		font-weight: 500;
		letter-spacing: 0.02em;
		color: var(--accent-contrast);
		background: var(--accent);
		border: 0;
		border-radius: 999rem;
		cursor: pointer;
		transition:
			background-color var(--dur-quick) var(--ease-quick),
			transform var(--dur-quick) var(--ease-quick);
	}
	.submit:hover,
	.submit:focus-visible {
		background: var(--accent-hover);
	}
	.submit:disabled {
		opacity: 0.6;
		cursor: progress;
	}

	@media (prefers-reduced-motion: no-preference) {
		.submit:hover,
		.submit:focus-visible {
			transform: translateY(-2px);
		}
	}
</style>
```

- [ ] **Step 2: Commit** (orchestrator, after the wave)

```bash
git add src/components/ContactForm.astro
git commit -m "feat: add ContactForm component"
```

---

## Task 9: WorkFilter tag-filtering island

**Model:** sonnet

**Files:**
- Create: `src/components/WorkFilter.astro`

**Context:** The filter UI plus its progressive-enhancement script. Each filter chip is a real `<a href="?tag=…">`, so with no JavaScript clicking one reloads the work index and the server filters (Task 14). With JavaScript, the `<work-filter>` custom element intercepts clicks, filters the project list in place, updates the URL with `history.pushState`, and toggles the empty-state message.

**DOM contract (with Task 14 — `WorkIndexContent`):** the project list is a `<ul id="work-grid">` whose every `<li>` carries `data-tags` (tag values joined by `|`); the empty-state element is `<p id="work-empty">`. This component's script reads both ids.

- [ ] **Step 1: Create `src/components/WorkFilter.astro`**

```astro
---
import type { Lang } from '../i18n/ui';
import { useTranslations } from '../i18n/utils';

interface Props {
	/** All distinct project tags, already sorted. */
	tags: string[];
	/** The currently active tag, or null for "All". */
	activeTag: string | null;
	/** The work index path for this locale, e.g. "/work" or "/es/proyectos". */
	basePath: string;
	lang: Lang;
}

const { tags, activeTag, basePath, lang } = Astro.props;
const t = useTranslations(lang);

const hrefFor = (tag: string | null) =>
	tag ? `${basePath}?tag=${encodeURIComponent(tag)}` : basePath;
---

<work-filter data-base={basePath}>
	<div class="filter" role="group" aria-label={t('work.filter.label')}>
		<a
			href={hrefFor(null)}
			class:list={['chip', { active: !activeTag }]}
			data-tag=""
			aria-current={!activeTag ? 'true' : undefined}
		>
			{t('work.filter.all')}
		</a>
		{
			tags.map((tag) => (
				<a
					href={hrefFor(tag)}
					class:list={['chip', { active: activeTag === tag }]}
					data-tag={tag}
					aria-current={activeTag === tag ? 'true' : undefined}
				>
					{tag}
				</a>
			))
		}
	</div>
</work-filter>

<script>
	class WorkFilter extends HTMLElement {
		connectedCallback() {
			const base = this.dataset.base || location.pathname;
			const chips = [...this.querySelectorAll<HTMLAnchorElement>('.chip')];
			const grid = document.getElementById('work-grid');
			const empty = document.getElementById('work-empty');
			if (!grid) return;
			const items = [...grid.querySelectorAll<HTMLLIElement>('li')];

			const apply = (tag: string | null) => {
				let shown = 0;
				for (const li of items) {
					const tags = (li.dataset.tags || '').split('|');
					const match = !tag || tags.includes(tag);
					li.hidden = !match;
					if (match) shown += 1;
				}
				for (const chip of chips) {
					const active = (chip.dataset.tag || '') === (tag || '');
					chip.classList.toggle('active', active);
					if (active) chip.setAttribute('aria-current', 'true');
					else chip.removeAttribute('aria-current');
				}
				if (empty) empty.hidden = shown > 0;
			};

			const tagFromUrl = () => new URLSearchParams(location.search).get('tag');

			for (const chip of chips) {
				chip.addEventListener('click', (event) => {
					event.preventDefault();
					const tag = chip.dataset.tag || '';
					history.pushState(
						{ tag },
						'',
						tag ? `${base}?tag=${encodeURIComponent(tag)}` : base,
					);
					apply(tag || null);
				});
			}

			window.addEventListener('popstate', () => apply(tagFromUrl()));
			// Re-sync on load — covers back/forward cache restores.
			apply(tagFromUrl());
		}
	}

	customElements.define('work-filter', WorkFilter);
</script>

<style>
	.filter {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.chip {
		display: inline-flex;
		align-items: center;
		padding: 0.4rem 0.85rem;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		font-weight: 500;
		letter-spacing: 0.04em;
		color: var(--text-dim);
		text-decoration: none;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 999rem;
		cursor: pointer;
		transition:
			color var(--dur-quick) var(--ease-quick),
			border-color var(--dur-quick) var(--ease-quick),
			background-color var(--dur-quick) var(--ease-quick);
	}
	.chip:hover,
	.chip:focus-visible {
		color: var(--text-strong);
		border-color: var(--border-strong);
	}
	.chip.active {
		color: var(--accent-contrast);
		background: var(--accent);
		border-color: var(--accent);
	}
</style>
```

- [ ] **Step 2: Commit** (orchestrator, after the wave)

```bash
git add src/components/WorkFilter.astro
git commit -m "feat: add WorkFilter tag-filtering island"
```

---

## Task 10: BlogCard component

**Model:** sonnet

**Files:**
- Create: `src/components/BlogCard.astro`

**Context:** The card used by the blog index and the home teaser. The post href is built from `getRoutePath('blog', lang)` plus the locale-stripped slug (`slugOf`). The date is formatted with the locale.

- [ ] **Step 1: Create `src/components/BlogCard.astro`**

```astro
---
import type { CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { getRoutePath } from '../i18n/utils';
import { slugOf } from '../lib/blog';

interface Props {
	post: CollectionEntry<'blog'>;
	lang: Lang;
}

const { post, lang } = Astro.props;
const { data } = post;
const href = `${getRoutePath('blog', lang)}/${slugOf(post.id)}`;
const date = data.publishDate.toLocaleDateString(lang, {
	year: 'numeric',
	month: 'short',
	day: 'numeric',
});
---

<a class="card" href={href}>
	<div class="meta">
		<time datetime={data.publishDate.toISOString()}>{date}</time>
		{data.tags.length > 0 && <span class="tag">{data.tags[0]}</span>}
	</div>
	<h3 class="title">{data.title}</h3>
	<p class="excerpt">{data.description}</p>
	<span class="more" aria-hidden="true">→</span>
</a>

<style>
	.card {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		height: 100%;
		padding: 1.75rem;
		text-decoration: none;
		color: inherit;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		transition:
			border-color var(--dur-quick) var(--ease-quick),
			transform var(--dur-quick) var(--ease-quick);
	}

	.meta {
		display: flex;
		gap: 1rem;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--text-dim);
	}
	.tag {
		color: var(--accent);
	}

	.title {
		font-size: var(--text-xl);
		transition: color var(--dur-quick) var(--ease-quick);
	}

	.excerpt {
		max-width: 48ch;
		color: var(--text-dim);
	}

	.more {
		margin-top: auto;
		padding-top: 0.5rem;
		font-family: var(--font-mono);
		color: var(--accent);
	}

	.card:hover,
	.card:focus-visible {
		border-color: var(--border-strong);
	}
	.card:hover .title,
	.card:focus-visible .title {
		color: var(--accent);
	}

	@media (prefers-reduced-motion: no-preference) {
		.card:hover,
		.card:focus-visible {
			transform: translateY(-3px);
		}
	}
</style>
```

- [ ] **Step 2: Commit** (orchestrator, after the wave)

```bash
git add src/components/BlogCard.astro
git commit -m "feat: add BlogCard component"
```

---

## Task 11: Contact page content

**Model:** sonnet

**Files:**
- Create: `src/components/pages/ContactContent.astro`

**Context:** The `/contact` page body — hero, the `ContactForm`, and an aside with direct contact links (WhatsApp + email). It does **not** include `ContactCTA` (the page *is* the contact destination).

- [ ] **Step 1: Create `src/components/pages/ContactContent.astro`**

```astro
---
import type { Lang } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';

import ContactForm from '../ContactForm.astro';
import Hero from '../Hero.astro';
import Icon from '../Icon.astro';
import Reveal from '../Reveal.astro';

interface Props {
	lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
---

<div class="contact-page stack">
	<section class="wrapper">
		<Reveal>
			<Hero
				kicker={t('contact.hero.kicker')}
				title={t('contact.hero.title')}
				tagline={t('contact.hero.tagline')}
			/>
		</Reveal>
	</section>

	<section class="wrapper layout">
		<Reveal class="form-col">
			<ContactForm lang={lang} />
		</Reveal>
		<Reveal class="aside-col" delay={120}>
			<aside class="direct">
				<h2>{t('contact.aside.heading')}</h2>
				<p>{t('contact.aside.body')}</p>
				<ul>
					<li>
						<a href="https://wa.me/+5491132125484" target="_blank" rel="noopener">
							<Icon icon="whatsapp" size="1.2em" />
							{t('contact.aside.whatsapp')}
						</a>
					</li>
					<li>
						<a href="mailto:rodrigo.camino97@gmail.com">
							<Icon icon="paper-plane-tilt" size="1.2em" />
							{t('contact.aside.email')}
						</a>
					</li>
				</ul>
			</aside>
		</Reveal>
	</section>
</div>

<style>
	.contact-page {
		gap: clamp(3rem, 2rem + 5vw, 5rem);
		padding-top: clamp(3rem, 2rem + 4vw, 6rem);
		padding-bottom: clamp(4rem, 3rem + 5vw, 7rem);
	}

	.layout {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.direct {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1.75rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
	}
	.direct h2 {
		font-size: var(--text-lg);
		color: var(--accent);
	}
	.direct p {
		color: var(--text-dim);
	}
	.direct ul {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin: 0.5rem 0 0;
		padding: 0;
		list-style: none;
	}
	.direct a {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--text);
		text-decoration: none;
		transition: color var(--dur-quick) var(--ease-quick);
	}
	.direct a:hover,
	.direct a:focus-visible {
		color: var(--accent);
	}

	@media (min-width: 50em) {
		.layout {
			display: grid;
			grid-template-columns: 7fr 5fr;
			gap: 4rem;
			align-items: start;
		}
	}
</style>
```

- [ ] **Step 2: Commit** (orchestrator, after the wave)

```bash
git add src/components/pages/ContactContent.astro
git commit -m "feat: add contact page content"
```

---

## Task 12: Blog index content

**Model:** sonnet

**Files:**
- Create: `src/components/pages/BlogIndexContent.astro`

**Context:** The `/blog` body — hero, a grid of `BlogCard`s for the locale's posts (newest first via `localizedPosts`), an empty state, and the shared `ContactCTA`.

- [ ] **Step 1: Create `src/components/pages/BlogIndexContent.astro`**

```astro
---
import { getCollection } from 'astro:content';
import type { Lang } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';
import { localizedPosts } from '../../lib/blog';

import BlogCard from '../BlogCard.astro';
import ContactCTA from '../ContactCTA.astro';
import Hero from '../Hero.astro';
import Reveal from '../Reveal.astro';

interface Props {
	lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);

const posts = localizedPosts(await getCollection('blog'), lang);
---

<div class="blog stack">
	<section class="wrapper">
		<Reveal>
			<Hero
				kicker={t('blog.hero.kicker')}
				title={t('blog.hero.title')}
				tagline={t('blog.hero.tagline')}
			/>
		</Reveal>
	</section>

	<section class="wrapper">
		{
			posts.length === 0 ? (
				<Reveal>
					<p class="empty">{t('blog.empty')}</p>
				</Reveal>
			) : (
				<ul class="posts">
					{posts.map((post, i) => (
						<li>
							<Reveal delay={(i % 2) * 90}>
								<BlogCard post={post} lang={lang} />
							</Reveal>
						</li>
					))}
				</ul>
			)
		}
	</section>

	<Reveal as="section">
		<ContactCTA lang={lang} />
	</Reveal>
</div>

<style>
	.blog {
		gap: clamp(4rem, 3rem + 6vw, 8rem);
		padding-top: clamp(3rem, 2rem + 4vw, 6rem);
	}

	.posts {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.posts > li {
		display: flex;
	}

	.empty {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--text-dim);
	}

	@media (min-width: 50em) {
		.posts {
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}
	}
</style>
```

- [ ] **Step 2: Commit** (orchestrator, after the wave)

```bash
git add src/components/pages/BlogIndexContent.astro
git commit -m "feat: add blog index content"
```

---

## Task 13: Blog post content

**Model:** sonnet

**Files:**
- Create: `src/components/pages/BlogPostContent.astro`

**Context:** Renders one blog post — a back-link to `/blog`, a `Hero` (kicker = formatted date), the post's tags as `Pill`s, the description, the rendered markdown body, and `ContactCTA`. The `.article` markdown styles are the same proven block used by `ProjectDetailContent` (Phase 2 Task 16); the scoped-style duplication is intentional and matches the codebase pattern.

- [ ] **Step 1: Create `src/components/pages/BlogPostContent.astro`**

```astro
---
import { type CollectionEntry, render } from 'astro:content';
import type { Lang } from '../../i18n/ui';
import { useTranslations, getRoutePath } from '../../i18n/utils';

import ContactCTA from '../ContactCTA.astro';
import Hero from '../Hero.astro';
import Icon from '../Icon.astro';
import Pill from '../Pill.astro';
import Reveal from '../Reveal.astro';

interface Props {
	lang: Lang;
	entry: CollectionEntry<'blog'>;
}

const { lang, entry } = Astro.props;
const t = useTranslations(lang);
const { Content } = await render(entry);
const date = entry.data.publishDate.toLocaleDateString(lang, {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
});
---

<div class="post stack">
	<header class="wrapper post-header">
		<a class="back-link" href={`${getRoutePath('blog', lang)}/`}>
			<Icon icon="arrow-left" size="1em" /> {t('blog.back')}
		</a>
		<Reveal>
			<Hero kicker={date} title={entry.data.title}>
				<div class="details">
					{
						entry.data.tags.length > 0 && (
							<div class="tags">
								{entry.data.tags.map((tag) => (
									<Pill>{tag}</Pill>
								))}
							</div>
						)
					}
					<p class="description">{entry.data.description}</p>
				</div>
			</Hero>
		</Reveal>
	</header>

	<main class="wrapper post-main">
		{
			entry.data.img && (
				<Reveal>
					<img class="lead" src={entry.data.img} alt={entry.data.img_alt || ''} />
				</Reveal>
			)
		}

		<Reveal class="article">
			<Content />
		</Reveal>
	</main>

	<Reveal as="section">
		<ContactCTA lang={lang} />
	</Reveal>
</div>

<style>
	.post {
		gap: clamp(4rem, 3rem + 6vw, 7rem);
		padding-top: clamp(2rem, 1rem + 3vw, 4rem);
	}

	.post-header {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding-bottom: 3rem;
		border-bottom: 1px solid var(--border);
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--text-dim);
		text-decoration: none;
	}
	.back-link:hover {
		color: var(--accent);
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-top: 0.5rem;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.description {
		max-width: var(--measure);
		font-size: var(--text-lg);
		color: var(--text-dim);
	}

	.post-main {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.lead {
		width: 100%;
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
	}

	/* ---------- Rendered markdown article ---------- */
	.article {
		max-width: var(--measure);
		margin-inline: auto;
		color: var(--text);
	}

	.article :global(> * + *) {
		margin-top: 1.15rem;
	}

	.article :global(h1),
	.article :global(h2),
	.article :global(h3) {
		margin-top: 2.5rem;
		font-size: var(--text-xl);
	}
	.article :global(h4),
	.article :global(h5) {
		margin-top: 2rem;
		font-size: var(--text-md);
		color: var(--accent);
	}

	.article :global(b),
	.article :global(strong) {
		color: var(--text-strong);
		font-weight: 600;
	}

	.article :global(a) {
		color: var(--accent);
		text-underline-offset: 0.2em;
	}

	.article :global(ul),
	.article :global(ol) {
		padding-left: 1.25rem;
	}
	.article :global(li) {
		margin-top: 0.4rem;
	}

	.article :global(img) {
		border: 1px solid var(--border);
		border-radius: var(--radius);
	}

	.article :global(code) {
		font-family: var(--font-mono);
		font-size: 0.9em;
		padding: 0.1em 0.35em;
		background: var(--surface-2);
		border-radius: var(--radius-sm);
	}

	.article :global(blockquote) {
		margin-top: 1.5rem;
		padding: 0.25rem 0 0.25rem 1.5rem;
		border-left: 2px solid var(--accent);
		color: var(--text-strong);
		font-size: var(--text-md);
	}
</style>
```

- [ ] **Step 2: Commit** (orchestrator, after the wave)

```bash
git add src/components/pages/BlogPostContent.astro
git commit -m "feat: add blog post content"
```

---

## Task 14: Wire tag filtering into the work index

**Model:** sonnet

**Files:**
- Modify (full rewrite): `src/components/Grid.astro`
- Modify (full rewrite): `src/components/pages/WorkIndexContent.astro`

**Context:** `Grid` gains an optional `id` prop so the work list can be addressed as `#work-grid`. `WorkIndexContent` reads `?tag=` from the request URL (the page is server-rendered), renders the `WorkFilter`, renders **every** project as a `<li data-tags hidden?>` (server-side filtering for the no-JS path; the JS island toggles `hidden` from there), and renders the `#work-empty` message. This is the consumer side of the DOM contract in Task 9.

- [ ] **Step 1: Replace the entire contents of `src/components/Grid.astro`**

```astro
---
interface Props {
	variant?: 'offset';
	id?: string;
}

const { variant, id } = Astro.props;
---

<ul id={id} class:list={['grid', { offset: variant === 'offset' }]}>
	<slot />
</ul>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	@media (min-width: 50em) {
		.grid {
			grid-template-columns: 1fr 1fr;
			column-gap: clamp(2rem, 1rem + 3vw, 5rem);
			row-gap: 6rem;
		}

		/* Editorial offset: even-indexed cards drop down to break the baseline. */
		.grid.offset > :global(li:nth-child(even)) {
			transform: translateY(4.5rem);
		}
	}
</style>
```

- [ ] **Step 2: Replace the entire contents of `src/components/pages/WorkIndexContent.astro`**

```astro
---
import { getCollection } from 'astro:content';
import type { Lang } from '../../i18n/ui';
import { useTranslations, getRoutePath } from '../../i18n/utils';
import { collectTags, filterByTag, normalizeTag } from '../../lib/tags';

import ContactCTA from '../ContactCTA.astro';
import PortfolioPreview from '../PortfolioPreview.astro';
import Hero from '../Hero.astro';
import Grid from '../Grid.astro';
import Reveal from '../Reveal.astro';
import WorkFilter from '../WorkFilter.astro';

interface Props {
	lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);

const projects = (await getCollection(lang === 'es' ? 'proyectos' : 'work')).sort(
	(a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
);

const activeTag = normalizeTag(Astro.url.searchParams.get('tag'));
const tags = collectTags(projects);
const visibleCount = filterByTag(projects, activeTag).length;
---

<div class="work stack">
	<section class="wrapper">
		<Reveal>
			<Hero
				kicker={t('nav.work')}
				title={t('work.hero.title')}
				tagline={t('work.hero.tagline')}
			/>
		</Reveal>
	</section>

	<section class="wrapper work-list">
		<Reveal>
			<WorkFilter
				tags={tags}
				activeTag={activeTag}
				basePath={getRoutePath('work', lang)}
				lang={lang}
			/>
		</Reveal>

		<Grid variant="offset" id="work-grid">
			{
				projects.map((project, i) => (
					<li
						data-tags={project.data.tags.join('|')}
						hidden={activeTag !== null && !project.data.tags.includes(activeTag)}
					>
						<Reveal delay={(i % 2) * 90}>
							<PortfolioPreview project={project} lang={lang} />
						</Reveal>
					</li>
				))
			}
		</Grid>

		<p id="work-empty" class="empty" aria-live="polite" hidden={visibleCount > 0}>
			{t('work.filter.empty')}
		</p>
	</section>

	<Reveal as="section">
		<ContactCTA lang={lang} />
	</Reveal>
</div>

<style>
	.work {
		gap: clamp(4rem, 3rem + 6vw, 8rem);
		padding-top: clamp(3rem, 2rem + 4vw, 6rem);
	}

	.work-list {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.empty {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--text-dim);
	}
</style>
```

- [ ] **Step 3: Commit** (orchestrator, after the wave)

```bash
git add src/components/Grid.astro src/components/pages/WorkIndexContent.astro
git commit -m "feat: wire tag filtering into the work index"
```

---

## Task 15: Add a blog teaser to the home page

**Model:** sonnet

**Files:**
- Modify (full rewrite): `src/components/pages/HomeContent.astro`

**Context:** Inserts a "From the Blog" section between the selected-work section and the `ContactCTA`, showing the two newest posts for the locale via `BlogCard`. The section renders only when posts exist. The unused `CallToAction` import from the Phase 2 version is dropped. Everything else (hero, skills, work) is unchanged.

- [ ] **Step 1: Replace the entire contents of `src/components/pages/HomeContent.astro`**

```astro
---
import { getCollection } from 'astro:content';
import type { Lang } from '../../i18n/ui';
import { useTranslations, getRoutePath } from '../../i18n/utils';
import { localizedPosts } from '../../lib/blog';

import BlogCard from '../BlogCard.astro';
import Grid from '../Grid.astro';
import Hero from '../Hero.astro';
import Icon from '../Icon.astro';
import Pill from '../Pill.astro';
import PortfolioPreview from '../PortfolioPreview.astro';
import ContactCTA from '../ContactCTA.astro';
import Skills from '../Skills.astro';
import Reveal from '../Reveal.astro';

interface Props {
	lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);

const projects = (await getCollection(lang === 'es' ? 'proyectos' : 'work'))
	.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
	.slice(0, 4);

const posts = localizedPosts(await getCollection('blog'), lang).slice(0, 2);
---

<div class="home stack">
	<section class="wrapper home-hero">
		<Reveal class="hero-text">
			<Hero
				size="display"
				kicker={t('home.hero.kicker')}
				title={t('home.hero.title')}
				tagline={t('home.hero.tagline')}
			>
				<div class="roles">
					<Pill><Icon icon="code" size="1.1em" /> {t('home.pill.developer')}</Pill>
					<Pill><Icon icon="pencil-line" size="1.1em" /> {t('home.pill.creative')}</Pill>
					<Pill><Icon icon="wand" size="1.1em" /> {t('home.pill.illusionist')}</Pill>
				</div>
			</Hero>
		</Reveal>
		<Reveal class="hero-media" delay={120}>
			<img
				class="portrait"
				alt={t('home.portrait.alt')}
				width="480"
				height="600"
				src="/assets/portrait.jpg"
			/>
		</Reveal>
	</section>

	<Reveal as="section" class="wrapper section">
		<Skills lang={lang} />
	</Reveal>

	<section class="wrapper section">
		<Reveal class="section-head">
			<p class="kicker">{t('home.work.heading')}</p>
			<div class="section-head-row">
				<p class="section-lead">{t('home.work.body')}</p>
				<a class="view-all" href={getRoutePath('work', lang)}>
					{t('home.work.viewAll')} <Icon icon="arrow-right" size="1em" />
				</a>
			</div>
		</Reveal>

		<Grid variant="offset">
			{
				projects.map((project, i) => (
					<li>
						<Reveal delay={i * 90}>
							<PortfolioPreview project={project} lang={lang} />
						</Reveal>
					</li>
				))
			}
		</Grid>
	</section>

	{
		posts.length > 0 && (
			<section class="wrapper section">
				<Reveal class="section-head">
					<p class="kicker">{t('home.blog.heading')}</p>
					<div class="section-head-row">
						<p class="section-lead">{t('home.blog.body')}</p>
						<a class="view-all" href={getRoutePath('blog', lang)}>
							{t('home.blog.viewAll')} <Icon icon="arrow-right" size="1em" />
						</a>
					</div>
				</Reveal>

				<ul class="blog-list">
					{posts.map((post, i) => (
						<li>
							<Reveal delay={i * 90}>
								<BlogCard post={post} lang={lang} />
							</Reveal>
						</li>
					))}
				</ul>
			</section>
		)
	}

	<Reveal as="section">
		<ContactCTA lang={lang} />
	</Reveal>
</div>

<style>
	.home {
		gap: clamp(5rem, 3rem + 8vw, 9rem);
		padding-top: clamp(3rem, 2rem + 4vw, 6rem);
	}

	.home-hero {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.roles {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.portrait {
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		object-position: top;
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
	}

	.section-head {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		margin-bottom: 3.5rem;
	}

	.section-head-row {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.section-lead {
		max-width: 42ch;
		font-size: var(--text-lg);
		color: var(--text-dim);
	}

	.view-all {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--text-strong);
		text-decoration: none;
		white-space: nowrap;
	}
	.view-all:hover {
		color: var(--accent);
	}

	.blog-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.blog-list > li {
		display: flex;
	}

	@media (min-width: 50em) {
		.home-hero {
			display: grid;
			grid-template-columns: 7fr 5fr;
			gap: 4rem;
			align-items: center;
		}
		.section-head-row {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-end;
		}
		.blog-list {
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}
	}
</style>
```

- [ ] **Step 2: Commit** (orchestrator, after the wave)

```bash
git add src/components/pages/HomeContent.astro
git commit -m "feat: add blog teaser to the home page"
```

---

## Task 16: Add Blog and Contact links to the nav

**Model:** haiku

**Files:**
- Modify: `src/components/Nav.astro:13-17`

**Context:** Only the `textLinks` array changes — `Blog` (after Work) and `Contact` (last) are added. The script, markup, and styles are untouched. The existing `isActive` helper already handles both new routes correctly.

- [ ] **Step 1: In `src/components/Nav.astro`, replace the `textLinks` array**

Replace exactly this block:

```ts
const textLinks: { label: string; href: string }[] = [
	{ label: t('nav.home'), href: getRoutePath('home', lang) },
	{ label: t('nav.work'), href: getRoutePath('work', lang) },
	{ label: t('nav.about'), href: getRoutePath('about', lang) },
];
```

with:

```ts
const textLinks: { label: string; href: string }[] = [
	{ label: t('nav.home'), href: getRoutePath('home', lang) },
	{ label: t('nav.work'), href: getRoutePath('work', lang) },
	{ label: t('nav.blog'), href: getRoutePath('blog', lang) },
	{ label: t('nav.about'), href: getRoutePath('about', lang) },
	{ label: t('nav.contact'), href: getRoutePath('contact', lang) },
];
```

- [ ] **Step 2: Commit** (orchestrator, after the wave)

```bash
git add src/components/Nav.astro
git commit -m "feat: add Blog and Contact links to the nav"
```

---

## Task 17: Blog and contact route pages

**Model:** haiku

**Files:**
- Create: `src/pages/contact.astro`
- Create: `src/pages/es/contact.astro`
- Create: `src/pages/blog.astro`
- Create: `src/pages/es/blog.astro`
- Create: `src/pages/blog/[...slug].astro`
- Create: `src/pages/es/blog/[...slug].astro`

**Context:** Thin route wrappers, mirroring the existing `work.astro` / `es/proyectos.astro` / `work/[...slug].astro` pattern. The `/contact` and `/blog` index pages are server-rendered (no `prerender` export). The blog **post** pages are prerendered via `getStaticPaths`, filtering the `blog` collection by locale prefix and stripping it for the route slug.

- [ ] **Step 1: Create `src/pages/contact.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import ContactContent from '../components/pages/ContactContent.astro';
import { useTranslations } from '../i18n/utils';
const t = useTranslations('en');
---
<BaseLayout title={t('contact.meta.title')} description={t('contact.meta.description')}>
  <ContactContent lang="en" />
</BaseLayout>
```

- [ ] **Step 2: Create `src/pages/es/contact.astro`**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import ContactContent from '../../components/pages/ContactContent.astro';
import { useTranslations } from '../../i18n/utils';
const t = useTranslations('es');
---
<BaseLayout title={t('contact.meta.title')} description={t('contact.meta.description')}>
  <ContactContent lang="es" />
</BaseLayout>
```

- [ ] **Step 3: Create `src/pages/blog.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import BlogIndexContent from '../components/pages/BlogIndexContent.astro';
import { useTranslations } from '../i18n/utils';
const t = useTranslations('en');
---
<BaseLayout title={t('blog.meta.title')} description={t('blog.meta.description')}>
  <BlogIndexContent lang="en" />
</BaseLayout>
```

- [ ] **Step 4: Create `src/pages/es/blog.astro`**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import BlogIndexContent from '../../components/pages/BlogIndexContent.astro';
import { useTranslations } from '../../i18n/utils';
const t = useTranslations('es');
---
<BaseLayout title={t('blog.meta.title')} description={t('blog.meta.description')}>
  <BlogIndexContent lang="es" />
</BaseLayout>
```

- [ ] **Step 5: Create `src/pages/blog/[...slug].astro`**

```astro
---
import { type CollectionEntry, getCollection } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';
import BlogPostContent from '../../components/pages/BlogPostContent.astro';
import { localeOf, slugOf } from '../../lib/blog';

interface Props {
  entry: CollectionEntry<'blog'>;
}

export const prerender = true;

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts
    .filter((entry) => localeOf(entry.id) === 'en')
    .map((entry) => ({
      params: { slug: slugOf(entry.id) },
      props: { entry },
    }));
}

const { entry } = Astro.props;
if (!entry) {
  throw new Error('Entry not found. Check if the slug is correctly passed in getStaticPaths.');
}
---

<BaseLayout title={entry.data.title} description={entry.data.description}>
  <BlogPostContent lang="en" entry={entry} />
</BaseLayout>
```

- [ ] **Step 6: Create `src/pages/es/blog/[...slug].astro`**

```astro
---
import { type CollectionEntry, getCollection } from 'astro:content';
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BlogPostContent from '../../../components/pages/BlogPostContent.astro';
import { localeOf, slugOf } from '../../../lib/blog';

interface Props {
  entry: CollectionEntry<'blog'>;
}

export const prerender = true;

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts
    .filter((entry) => localeOf(entry.id) === 'es')
    .map((entry) => ({
      params: { slug: slugOf(entry.id) },
      props: { entry },
    }));
}

const { entry } = Astro.props;
if (!entry) {
  throw new Error('Entry not found. Check if the slug is correctly passed in getStaticPaths.');
}
---

<BaseLayout title={entry.data.title} description={entry.data.description}>
  <BlogPostContent lang="es" entry={entry} />
</BaseLayout>
```

- [ ] **Step 7: Commit** (orchestrator, after the wave)

```bash
git add src/pages/contact.astro src/pages/es/contact.astro src/pages/blog.astro src/pages/es/blog.astro src/pages/blog src/pages/es/blog
git commit -m "feat: add blog and contact route pages"
```

---

## Task 18: Final verification and roadmap update

**Model:** haiku — **orchestrator runs this directly.**

**Files:**
- Modify: `docs/superpowers/ROADMAP.md`

- [ ] **Step 1: Static verification**

Run: `pnpm astro check`
Expected: 0 errors, 0 warnings.

Run: `pnpm test`
Expected: 30 tests pass (14 from Phase 1 + 16 new: `tags.test.ts` 8, `blog.test.ts` 5, `contact.test.ts` 5).

Run: `pnpm build`
Expected: build succeeds. The `blog/[...slug]` routes prerender 2 EN + 2 ES posts. The build is green even though `RESEND_API_KEY` is unset — it is a runtime-only secret.

- [ ] **Step 2: Sanity greps**

Run: `grep -rn "astro:content" src/lib/`
Expected: **no output** — the `lib/` helpers must stay free of virtual-module imports so vitest keeps resolving them.

Run: `grep -rn "blog\|contact" src/i18n/ui.ts`
Expected: both route keys present in the `routes` object.

Run: `grep -rln "work-grid" src/components`
Expected: both `WorkFilter.astro` and `pages/WorkIndexContent.astro` — the DOM contract is wired on both sides.

- [ ] **Step 3: Update `docs/superpowers/ROADMAP.md`**

In the **Live status** table: set `Current phase` to `Phase 3 — Features`, `Phase 3 state` to `COMPLETE — 18 tasks done, code-reviewed, verification green (astro check 0 errors, 30 tests, build OK)`, `Next action` to `Phase 4 (content) — blocked on material from Rodrigo`, and `Last updated` to `2026-05-16`.

In **The four phases** table: set the Phase 3 `Plan` cell to `plans/2026-05-16-phase-3-features.md` and its `State` to `COMPLETE`.

Append to the **Task progress log** a new `### Phase 3 — Features` section listing all 18 tasks (1–18) as checked `- [x]`, each with its title and model tag from this plan.

Append these entries to the **Decision log** (newest last):

```
- **2026-05-16** — Contact form: Astro Actions + Resend, configured via `astro:env`. Spam defence is a hidden honeypot field plus a 30s in-memory per-IP throttle. `RESEND_API_KEY` is a Vercel/`.env` secret; `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` have defaults.
- **2026-05-16** — `ContactCTA` keeps its direct WhatsApp link; the new `/contact` page is reached via the nav, not via the CTA (Rodrigo's choice).
- **2026-05-16** — Work tag filtering: server-side `?tag=` filtering plus a vanilla custom-element progressive enhancement (`<work-filter>`). No UI framework was added — consistent with the `menu-button`/`Reveal` pattern.
- **2026-05-16** — Blog: a single `blog` content collection with `en/` and `es/` subfolders (ids carry the locale prefix). Phase 3 ships placeholder posts; Phase 4 replaces them with real writing.
```

- [ ] **Step 4: Commit**

```bash
git add docs/superpowers/ROADMAP.md docs/superpowers/plans/2026-05-16-phase-3-features.md
git commit -m "docs: mark Phase 3 complete in roadmap"
```

---

## Manual steps for Rodrigo (outside this plan)

The code ships complete, but the contact form only **delivers** mail once Resend is wired up:

1. Create a free account at [resend.com](https://resend.com) and generate an API key.
2. Add `RESEND_API_KEY` to the Vercel project (Environment Variables) and to a local `.env` file (see `.env.example`).
3. Optional: verify a domain in Resend and set `CONTACT_FROM_EMAIL` to a branded sender (e.g. `Rodrigo Camino <hello@yourdomain>`). Until then it defaults to Resend's shared `onboarding@resend.dev` test sender, which only delivers to your own account address.

Until step 2 is done, submitting the form returns the inline error state — the rest of the site is unaffected.

---

## Self-review (done while writing this plan)

- **Spec coverage** — work tag-filtering island: Tasks 5, 9, 14. Contact form (Astro Actions + Resend, `zod`, honeypot, rate-limit, `astro:env`): Tasks 2, 7, 8, 11, 17. Blog (collection + `/blog` index + post pages): Tasks 2, 3, 4, 6, 10, 12, 13, 17. Progressive enhancement (filter works without JS; form is a native POST): Tasks 9, 14, 8. Home blog teaser: Task 15. Nav wiring: Task 16. i18n parity: Task 3. All §3 requirements map to a task.
- **Type consistency** — `collectTags` / `filterByTag` / `normalizeTag` (Task 5) used identically in Task 14; `localeOf` / `slugOf` / `localizedPosts` (Task 6) used in Tasks 10, 12, 17; `contactSchema` (Task 7) imported by Task 7's action; `WorkFilter` props (`tags`, `activeTag`, `basePath`, `lang`) match Task 14's call site; `BlogCard` props (`post`, `lang`) match Tasks 12 & 15; `Grid`'s new `id` prop is optional, so the existing `HomeContent` call site stays valid.
- **No placeholders** — every step carries complete file content or an exact find/replace block.
