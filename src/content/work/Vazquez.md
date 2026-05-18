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
screenshots: [
  /assets/vazquez/2.png,
  /assets/vazquez/3.png,
  /assets/vazquez/4.png,
  /assets/vazquez/5.png
]
---

### Project Overview
Vázquez Ilusionista is the official promotional site for Fernando Vázquez, a professional magician and mentalist based in Argentina. The site functions as a high-conversion landing page targeting corporate event planners, private party organizers, and theater audiences. Every design and engineering decision was made to match the prestige and mystery of the live performance experience.

##### Objectives
- <b>Brand Experience:</b> Deliver a premium, cinematic digital presence that mirrors the atmosphere of Fernando's live shows.
- <b>Conversion Focus:</b> Drive inquiries and bookings across three distinct show formats — close-up magic, private events, and corporate engagements.
- <b>Performance Architecture:</b> Build with Astro's static generation to achieve fast load times while supporting serverless contact-form delivery.
- <b>Mobile-First Engagement:</b> Provide a tailored mobile experience with TikTok-style vertical video snap-scroll separate from the desktop triptych layout.

##### Project Workflow
- <b>Discovery & Brand Alignment:</b> Established a dark, refined design system with a deep purple accent palette (`#9582D9`), Playfair Display headings, and Inter body type, all grounded in the existing brand identity.
- <b>Component Architecture:</b> Built a flat single-page layout with independently animated sections — Hero, Shows, VideoTriptych, JuryFeedback, JuryVIP Reviews, AboutMe, and Contact — each driven by GSAP ScrollTrigger.
- <b>Cinematic Animations:</b> Implemented a GSAP-powered hero with a 105-image crossfade grid, procedural SVG noise background, 3D-orbiting magic-star element, and a session-persisted intro reveal overlay with audio unlock.
- <b>Responsive Video Experience:</b> Desktop renders an interactive three-column triptych with B&W-to-color hover transitions and spatial audio unmuting; mobile delivers a snap-scrolling vertical reel feed with a social-overlay UI.
- <b>Serverless Contact:</b> Integrated the Resend API via an Astro server endpoint (`/api/send-email`) for reliable form delivery without a backend.

##### Technologies Used
>Astro v5: Chosen for its static-site output with optional SSR, enabling fast page delivery and clean serverless API routes.
###
>Tailwind CSS v4: New Vite-based engine used with a custom `@theme` block for centralized design tokens across the entire project.
###
>GSAP + ScrollTrigger: Core animation engine driving the hero presentation grid, scroll-pinned review section, cursor magnetism, and all reveal transitions.
###
>Lenis: Smooth-scroll library providing the inertia foundation required for GSAP ScrollTrigger to perform correctly.
###
>Resend: Transactional email provider wired to the contact form's serverless endpoint for guaranteed delivery to the client's business inbox.
###
>Sharp: Used via Astro's built-in image optimization pipeline to serve correctly sized WebP assets.

##### Results and Impact
- <b>Cinematic Delivery:</b> The site ships with a fully animated, production-ready experience — intro overlay, hero crossfade grid, scroll-pinned reviews, and adaptive video reels — with zero third-party CMS dependencies.
- <b>Segment Coverage:</b> All three booking segments (close-up reception, private events, corporate marketing) are represented with dedicated show cards and optimized copy in Argentine Spanish.
- <b>Vercel Deployment:</b> The project is deployed and live at `vazquez-v2.vercel.app`, taking advantage of Astro's Vercel adapter for edge-optimized delivery.
- <b>Maintainable Content:</b> All site copy, show data, colors, and navigation labels are centralized in a single `site-config.json`, making future content updates straightforward without touching component code.
