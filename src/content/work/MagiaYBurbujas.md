---
title: Magia y Burbujas — Landing Site for Argentine Street Magician
publishDate: 2026-05-06 00:00:00
img: /assets/magiayburbujas/1.png
img_alt: Screenshot of Magia y Burbujas website — dark background with gold typography and a bubble-driven hero section.
description: |
  A heavily animated single-scroll landing for Gonza Martini, an Argentine street magician performing in Barcelona — built to feel like a living magic poster.
tags:
  - Dev
  - Design
  - Frontend
technologies:
  - name: Astro 6
    note: Static-site framework with zero client-side JS by default — ideal for a performance-sensitive marketing landing.
  - name: Tailwind CSS v4
    note: Custom `@theme` design token system for the full ink/gold/violet/cream palette.
  - name: GSAP + ScrollTrigger
    note: Powers pinned Shows section, slide transitions, and scroll-driven bubble mascot choreography.
  - name: Lenis
    note: Smooth scroll integrated into a single RAF loop shared with GSAP; respects `prefers-reduced-motion`.
  - name: Canvas API (vanilla)
    note: Custom bubble particle system and star particles — dependency-free to avoid bundle overhead.
  - name: Fontsource (self-hosted)
    note: Cinzel Decorative, Pinyon Script, Cormorant Garamond Variable, and Young Heart woff2 — no Google Fonts CDN.
  - name: Vercel + @astrojs/vercel
    note: Adapter-based deployment with edge caching; DNS routed through Cloudflare.
  - name: Vitest + jsdom
    note: Unit testing for all client-side animation logic without a browser.
screenshots:
  - /assets/magiayburbujas/2.png
  - /assets/magiayburbujas/3.png
  - /assets/magiayburbujas/4.png
  - /assets/magiayburbujas/5.png
---

### Project Overview

Magia y Burbujas is the promotional website for Gonza Martini, an Argentine street magician and bubble-show artist based in Barcelona. The site is a single-scroll landing designed to function as both a portfolio and a booking conversion tool — communicating the warmth and spectacle of his shows in a tone that feels like a conversation rather than a brochure. The aesthetic is inspired by ornate fairground signage: dark ink backgrounds, gold typographic foil, violet accents, and iridescent bubbles throughout.

#### Objectives

- **Booking conversion** — Drive inquiries via WhatsApp CTA with warm, inviting copy in Argentine Spanish.
- **Showcase shows** — Present Gonza's four distinct show formats (close-up magic, main stage, corporate, and the signature bubble experience) with full-bleed visual treatment.
- **Immersive first impression** — Deliver a cinematic entrance sequence — a custom loader, portrait fade-in, animated title, and a bubble mascot that grows from the hero portrait and persists throughout the page as a scroll companion.
- **Mobile-first reach** — Optimized for the 390px viewport, since the site is primarily shared via WhatsApp.

#### Project Workflow

- **Foundation** — Scaffolded Astro 6 with Tailwind v4 custom design tokens (`@theme` palette of ink, gold, violet, cream), four self-hosted font families (Cinzel Decorative, Pinyon Script, Cormorant Garamond, Young Heart), and Lenis smooth scroll — all established in the first session.
- **Hero construction** — Built a symmetric "living poster" hero with a dual-layer portrait (lit/dark crossfade driven by scroll progress), a canvas-based bubble particle system (~80–150 bubbles on desktop, 40–60 on mobile) with sinusoidal drift and iridescent rim rendering, and a marquee bottom band looping the show's taglines.
- **Scroll choreography** — Designed and implemented a 706-line GSAP ScrollTrigger orchestration — pinned Shows section (4 slides × 100vh), a Bézier-path bubble mascot that follows the scroll through every section, a horizontal pinned Gallery strip, and a free-scroll phase with keyframe-sampled mascot scale changes across Bio → Media → Contacto.
- **Content sections** — Built Gallery (8 real client photos processed via Sharp to webp at q82, displayed with duotone-gold hover treatment), Reviews (4 testimonial cards with SectionReveal fade-in), and a rebuilt Contacto section with a 2-column layout and the mascot parked as a visual companion.
- **Performance gating** — Replaced a fixed-duration loader with a hybrid progress bar — synthetic ramp + real asset load tracking on critical images and the mascot video — so the CTA only appears once essential content is ready.
- **Testing** — 21 Vitest unit tests covering bubble physics, Catmull-Rom mascot path interpolation, gallery strip translation, and free-path scale curve sampling — all green.

#### Results and Impact

- **Animation system delivered** — A multi-phase scroll choreography spanning entrance, pinned shows, horizontal gallery, and free-scroll sections — with a persistent scroll-companion mascot interpolating Bézier waypoints across the entire page.
- **Real gallery assets** — Eight show photos processed and delivered via the Astro image pipeline with responsive srcsets and duotone-gold hover effects.
- **Performance-conscious build** — Hero JS bundle at ~116KB raw (~35KB gzip estimated); critical asset gating on loader prevents CTA from appearing before portrait and mascot video are loaded.
- **Accessibility baseline** — Skip-link, `prefers-reduced-motion` respected globally (Lenis disabled, all canvas hidden, pinned sections unpinned, animations set to 0.001ms), and focus-visible gold outline throughout.
- **Architecture readiness** — Placeholder-ready sections (Bio copy, Media reel, WhatsApp number, real testimonials) with clearly documented pending items — the site structure is complete and awaiting final client content to go live.
