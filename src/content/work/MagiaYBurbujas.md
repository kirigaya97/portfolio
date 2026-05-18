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
screenshots: [
  /assets/magiayburbujas/2.png,
  /assets/magiayburbujas/3.png,
  /assets/magiayburbujas/4.png,
  /assets/magiayburbujas/5.png
]
---

### Project Overview
Magia y Burbujas is the promotional website for Gonza Martini, an Argentine street magician and bubble-show artist based in Barcelona. The site is a single-scroll landing designed to function as both a portfolio and a booking conversion tool — communicating the warmth and spectacle of his shows in a tone that feels like a conversation rather than a brochure. The aesthetic is inspired by ornate fairground signage: dark ink backgrounds, gold typographic foil, violet accents, and iridescent bubbles throughout.

##### Objectives
- <b>Booking conversion:</b> Drive inquiries via WhatsApp CTA with warm, inviting copy in Argentine Spanish.
- <b>Showcase shows:</b> Present Gonza's four distinct show formats (close-up magic, main stage, corporate, and the signature bubble experience) with full-bleed visual treatment.
- <b>Immersive first impression:</b> Deliver a cinematic entrance sequence — a custom loader, portrait fade-in, animated title, and a bubble mascot that grows from the hero portrait and persists throughout the page as a scroll companion.
- <b>Mobile-first reach:</b> Optimized for the 390px viewport, since the site is primarily shared via WhatsApp.

##### Project Workflow
- <b>Foundation:</b> Scaffolded Astro 6 with Tailwind v4 custom design tokens (`@theme` palette of ink, gold, violet, cream), four self-hosted font families (Cinzel Decorative, Pinyon Script, Cormorant Garamond, Young Heart), and Lenis smooth scroll — all established in the first session.
- <b>Hero construction:</b> Built a symmetric "living poster" hero with a dual-layer portrait (lit/dark crossfade driven by scroll progress), a canvas-based bubble particle system (~80–150 bubbles on desktop, 40–60 on mobile) with sinusoidal drift and iridescent rim rendering, and a marquee bottom band looping the show's taglines.
- <b>Scroll choreography:</b> Designed and implemented a 706-line GSAP ScrollTrigger orchestration — pinned Shows section (4 slides × 100vh), a Bézier-path bubble mascot that follows the scroll through every section, a horizontal pinned Gallery strip, and a free-scroll phase with keyframe-sampled mascot scale changes across Bio → Media → Contacto.
- <b>Content sections:</b> Built Gallery (8 real client photos processed via Sharp to webp at q82, displayed with duotone-gold hover treatment), Reviews (4 testimonial cards with SectionReveal fade-in), and a rebuilt Contacto section with a 2-column layout and the mascot parked as a visual companion.
- <b>Performance gating:</b> Replaced a fixed-duration loader with a hybrid progress bar — synthetic ramp + real asset load tracking on critical images and the mascot video — so the CTA only appears once essential content is ready.
- <b>Testing:</b> 21 Vitest unit tests covering bubble physics, Catmull-Rom mascot path interpolation, gallery strip translation, and free-path scale curve sampling — all green.

##### Technologies Used
>Astro 6: Static-site framework enabling component-based architecture with zero client-side JS by default — ideal for a performance-sensitive marketing landing.
###
>Tailwind CSS v4: Custom design token system via `@theme` for the full ink/gold/violet/cream palette, eliminating the need for a separate CSS variables layer.
###
>GSAP + ScrollTrigger: Powers the pinned Shows section, slide transitions, and the scroll-driven bubble mascot choreography — chosen for its precise scrub control and robust pin behavior.
###
>Lenis: Smooth scroll with 1.6s cubic easing, integrated into a single RAF loop shared with GSAP; respects `prefers-reduced-motion`.
###
>Canvas API (vanilla): Custom bubble particle system and twinkling star particles — kept dependency-free to avoid bundle overhead from particle libraries.
###
>Fontsource (self-hosted): Cinzel Decorative, Pinyon Script, Cormorant Garamond Variable, and a custom Young Heart woff2 — no Google Fonts CDN in production.
###
>Vercel + @astrojs/vercel: Adapter-based deployment with edge caching; DNS routed through Cloudflare.
###
>Vitest + jsdom: Unit testing for all client-side animation logic, ensuring math correctness without a browser.

##### Results and Impact
- <b>Animation system delivered:</b> A multi-phase scroll choreography spanning entrance, pinned shows, horizontal gallery, and free-scroll sections — with a persistent scroll-companion mascot interpolating Bézier waypoints across the entire page.
- <b>Real gallery assets:</b> Eight show photos processed and delivered via the Astro image pipeline with responsive srcsets and duotone-gold hover effects.
- <b>Performance-conscious build:</b> Hero JS bundle at ~116KB raw (~35KB gzip estimated); critical asset gating on loader prevents CTA from appearing before portrait and mascot video are loaded.
- <b>Accessibility baseline:</b> Skip-link, `prefers-reduced-motion` respected globally (Lenis disabled, all canvas hidden, pinned sections unpinned, animations set to 0.001ms), and focus-visible gold outline throughout.
- <b>Architecture readiness:</b> Placeholder-ready sections (Bio copy, Media reel, WhatsApp number, real testimonials) with clearly documented pending items — the site structure is complete and awaiting final client content to go live.
