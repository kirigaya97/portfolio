---
title: "Kovalink: Single-Page Site for a Psychological Illusionist"
publishDate: 2026-10-13 00:00:00
url: https://kovalink.vercel.app
img: /assets/kovalink/1.webp
img_alt: Kovalink homepage hero with a night-blue background, the performer holding up a playing card, FACUNDO KOVALINK in thin white and gold capitals, and a floating WhatsApp button.
description: |
  A single-page site for Facundo Kovalink, a psychological illusionist in Buenos Aires, with pinned-scroll show proposals, a consent-gated analytics layer and a contact form that tells him where each lead came from.
tags:
  - Design
  - Dev
  - Frontend
  - Backend
  - Branding
technologies:
  - name: Astro 5
    note: Static pages with a single server route, the contact endpoint.
  - name: Tailwind CSS v4
    note: Design tokens declared in `@theme` (night blue, one gold accent, warm paper).
  - name: Lenis
    note: Smooth scroll, with carousels opted out so touch dragging keeps working.
  - name: Resend
    note: Delivers contact form enquiries to the client's inbox from the `/api/contact` route.
  - name: Vercel + @astrojs/vercel
    note: Adapter-based deployment; the site URL is taken from the deploy instead of a hard-coded domain.
  - name: Fontsource (self-hosted)
    note: Montserrat Variable for headlines and Inter Variable for body text, no third-party font CDN.
  - name: "@astrojs/sitemap"
    note: Sitemap generated at build, alongside generated `robots.txt` and `llms.txt` routes.
  - name: Playwright
    note: Scripts for section screenshots and scroll tests of the pinned proposals section.
screenshots:
  - /assets/kovalink/2.webp
  - /assets/kovalink/3.webp
  - /assets/kovalink/4.webp
  - /assets/kovalink/5.webp
---

### Project Overview

Facundo Kovalink ([kovalink.vercel.app](https://kovalink.vercel.app)) is a psychological illusionist from Buenos Aires who performs mentalism and close-up magic at private and corporate events. The site is a single page with a clear job: show the work first, then open a conversation. The brief asked for something closer to an *artist's portfolio* than a commercial magician's page.

The foundation is the system I had already built for another magician's site, which the client liked. I reused its structure and rebuilt the identity: a new monogram, a night-blue palette and a restrained look.

#### Objectives

- **Portfolio feel** - Big type, lots of air, colour photography and one accent colour instead of a busy sales page.
- **Soft calls to action** - A single hero action ("Ver propuestas"), with the conversation offered only after the visitor has seen the shows.
- **Three formats, clearly told** - Present Show Central, Close-Up and Corporate Shows with the client's official texts and a video for each.
- **Leads with context** - Know where each enquiry came from, without tracking anyone who did not consent.
- **Client-editable content** - Keep all copy in one data file.

#### Project Workflow

- **Foundation and identity** - Scaffolded Astro 5 with Tailwind v4 tokens: night-blue base, a single gold accent (`#cdb07a`) used in small doses, warm paper for text and the solid button. Montserrat in light weight and capitals for headlines, never italic, as requested by the client.
- **Monogram and brand kit** - Built the FK logo as an Astro component in two variants (a full one with frames, a compact one for small sizes) and a script that renders favicons, the social card and a downloadable logo kit from the component itself. A `/brand` page documents it, set to `noindex`.
- **Pinned proposals section** - The three shows are pinned to the scroll, each sliding in sideways with a video beside it. Only the active slide's video plays, muted, and only while the section is on screen. The section stays pinned even with reduced motion, where only the slide transition becomes a hard cut. On mobile the video becomes a full-screen background with a "Ver video" toggle.
- **Loader, gallery and bio** - A minimum 1.5s preloader that traces the monogram, a mosaic gallery on desktop that turns into a carousel on mobile with a lightbox, and a bio written by the client in third person.
- **Contact** - WhatsApp, email, Instagram and a form handled by a single SSR route. Anti-spam is a honeypot, a timestamp, a same-origin check and shared length limits. A floating WhatsApp button is visible from the hero.
- **Consent-gated analytics** - GA4, Google Ads conversions and the Meta pixel share one queue behind a consent banner. UTM parameters, `gclid` and the referrer travel with the form and arrive in the email as a "Llegó desde" field.
- **Video and image handling** - Videos use `preload="none"` with a poster and are transcoded to 720x1280, 30fps before entering the repo. Photos go through `astro:assets`.
- **Delivery** - Wrote a hand-over document covering the domain, Resend, GA4, Google Ads, Meta and Search Console setup.

#### Results and Impact

- **A reusable system** - Content lives in one typed data file (`site.ts`), so copy, show texts, contact details and nav feed the page, the JSON-LD and the generated `llms.txt` from one place.
- **Only one dynamic route** - Everything is static except `/api/contact`, which keeps the site light and the attack surface small.
- **A guard against publishing internal files** - Astro turns any `.md` under `src/pages/` into a public page, which once leaked internal documentation. A `check:rutas` script now fails if anything internal reaches the build output, and internal docs are named `_README.md`.
- **No hard-coded domain** - Canonical URL, sitemap, `robots.txt`, `llms.txt` and the share card derive from the deploy URL, so connecting the final domain needs no code change.
- **Accessibility and motion** - Viewport units use `svh`, safe-area insets are respected, the hero stacks below 1024px so the headline never covers the face, and reduced-motion preferences are honoured.
- **Pending items documented** - Domain connection, Resend and analytics keys, and client reviews are listed as open items rather than invented.
