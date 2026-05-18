---
title: Vázquez Ilusionista — Landing Page Development
publishDate: 2026-02-11 00:00:00
img: /assets/vazquez/1.png
img_alt: Screenshot of Vázquez Ilusionista website hero section.
description: |
  A premium cinematic landing page for Fernando Vázquez, Argentine magician and mentalist, built to convert social traffic into show bookings.
tags:
  - Design
  - Dev
  - Frontend
technologies:
  - name: Astro v5
    note: Static-site output with optional SSR for fast page delivery and clean serverless API routes.
  - name: Tailwind CSS v4
    note: Vite-based engine with a custom `@theme` block for centralized design tokens across the project.
  - name: GSAP + ScrollTrigger
    note: Core animation engine driving the hero grid, scroll-pinned reviews, cursor magnetism, and reveal transitions.
  - name: Lenis
    note: Smooth-scroll library providing the inertia foundation for GSAP ScrollTrigger to perform correctly.
  - name: Resend
    note: Transactional email provider wired to the contact form's serverless endpoint for reliable delivery.
  - name: Sharp
    note: Astro's built-in image optimization pipeline serving correctly sized WebP assets.
screenshots:
  - /assets/vazquez/2.png
  - /assets/vazquez/3.png
  - /assets/vazquez/4.png
  - /assets/vazquez/5.png
---

### Project Overview

Vázquez Ilusionista is the official promotional site for Fernando Vázquez, a professional magician and mentalist based in Argentina. The site functions as a high-conversion landing page targeting corporate event planners, private party organizers, and theater audiences. Every design and engineering decision was made to match the prestige and mystery of the live performance experience.

#### Objectives

- **Brand Experience** — Deliver a premium, cinematic digital presence that mirrors the atmosphere of Fernando's live shows.
- **Conversion Focus** — Drive inquiries and bookings across three distinct show formats — close-up magic, private events, and corporate engagements.
- **Performance Architecture** — Build with Astro's static generation to achieve fast load times while supporting serverless contact-form delivery.
- **Mobile-First Engagement** — Provide a tailored mobile experience with TikTok-style vertical video snap-scroll separate from the desktop triptych layout.

#### Project Workflow

- **Discovery & Brand Alignment** — Established a dark, refined design system with a deep purple accent palette (`#9582D9`), Playfair Display headings, and Inter body type, all grounded in the existing brand identity.
- **Component Architecture** — Built a flat single-page layout with independently animated sections — Hero, Shows, VideoTriptych, JuryFeedback, JuryVIP Reviews, AboutMe, and Contact — each driven by GSAP ScrollTrigger.
- **Cinematic Animations** — Implemented a GSAP-powered hero with a 105-image crossfade grid, procedural SVG noise background, 3D-orbiting magic-star element, and a session-persisted intro reveal overlay with audio unlock.
- **Responsive Video Experience** — Desktop renders an interactive three-column triptych with B&W-to-color hover transitions and spatial audio unmuting; mobile delivers a snap-scrolling vertical reel feed with a social-overlay UI.
- **Serverless Contact** — Integrated the Resend API via an Astro server endpoint (`/api/send-email`) for reliable form delivery without a backend.

#### Results and Impact

- **Cinematic Delivery** — The site ships with a fully animated, production-ready experience — intro overlay, hero crossfade grid, scroll-pinned reviews, and adaptive video reels — with zero third-party CMS dependencies.
- **Segment Coverage** — All three booking segments (close-up reception, private events, corporate marketing) are represented with dedicated show cards and optimized copy in Argentine Spanish.
- **Vercel Deployment** — The project is deployed and live at `vazquez-v2.vercel.app`, taking advantage of Astro's Vercel adapter for edge-optimized delivery.
- **Maintainable Content** — All site copy, show data, colors, and navigation labels are centralized in a single `site-config.json`, making future content updates straightforward without touching component code.
