---
title: Guillermo Flores — Ilusionista Website Redesign
publishDate: 2026-04-27 00:00:00
img: /assets/ilusionista/1.png
img_alt: Screenshot of the Guillermo Flores Ilusionista landing page.
description: |
  A full-bleed, single-scroll landing page crafted to feel like a theatrical object — atmosphere-first, template-free.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/ilusionista/2.png,
  /assets/ilusionista/3.png,
  /assets/ilusionista/4.png,
  /assets/ilusionista/5.png
]
---

### Project Overview
A greenfield redesign of the existing ilusionista.com.ar, built for Guillermo Flores — an Argentine illusionist and mentalist based in Buenos Aires. The site is a single-scroll landing page intended to replace a generic predecessor with something that feels like a curated performance object: loaded with atmosphere, cinematic motion, and typographic character that evoke a live stage show. The aesthetic direction deliberately fuses Old West / woodtype fairground prints, Edgar Allan Poe gothic claroscuro, Tarantino-style oversized type, and Art Nouveau ornamental linework.

##### Objectives
- <b>Brand Statement:</b> Replace a generic web presence with a distinctive, personality-driven landing that mirrors the drama of a live performance.
- <b>Conversion:</b> Drive bookings via a direct WhatsApp and email contact section targeted at corporate events, private events, close-up magic, and theater runs.
- <b>Performance Budget:</b> Deliver the experience within a strict LCP < 2.5s, CLS < 0.1, and < 100KB of first-load JavaScript to keep the atmosphere from costing page speed.
- <b>Accessibility:</b> Maintain WCAG AA contrast on textured dark backgrounds and respect `prefers-reduced-motion` across every animation.
##### Project Workflow
- <b>Direction & Spec:</b> Defined aesthetic direction from 14 curated visual reference images before touching a single component, establishing a four-world hybrid palette (ink, bone, blood, brass) and a typographic system built around Bodoni Moda, Cormorant Garamond, and Inter — all self-hosted.
- <b>Component Architecture:</b> Built as an Astro static site with isolated React islands only where genuinely interactive; each page section (Hero, Bio, Services, Testimonios, Contacto) is its own `.astro` component with scoped styles.
- <b>Cinematic Services Section:</b> Implemented a scroll-pinned, full-viewport cinematic slider for four service categories (Corporate Mentalism, Private Events, Close-Up Magic, Theater) driven entirely by a custom scroll-progress engine in vanilla TypeScript — no GSAP license needed.
- <b>Motion System:</b> All animations (hero word-reveal stagger, Ken Burns photo drift, brass filete draw, stamp pop, section fade-up reveals, parallax chapter numerals, photo curtain reveal) respect `prefers-reduced-motion` and use `will-change` annotations to stay on the compositor thread.
- <b>Transition Choreography:</b> A custom brass-to-ink dot transition connects the Services section to the Testimonios section — the watermark period scales from a typographic ornament into a full-viewport ink wash, eliminating hard section cuts.
##### Technologies Used
>Astro 6: Static-first framework chosen for near-zero JS by default; only interactive islands ship runtime code.
###
>Tailwind CSS v4: Utility-first styling with a fully custom design-token theme (colors, fonts, spacing) rather than stock defaults.
###
>Motion (Motion One): Lightweight animation library used for hero word-reveal stagger sequences with precise spring easing.
###
>Lenis: Smooth-scroll engine that feeds scroll position to the custom services-scroll and parallax engines via a shared event bus.
###
>Bodoni Moda + Cormorant Garamond + Inter (Fontsource): Self-hosted variable fonts — no external CDN dependency, no layout shift from web font load.
###
>Vercel adapter: Zero-config edge deployment via `@astrojs/vercel`.

##### Results and Impact
- <b>Fully Delivered Sections:</b> Hero, Bio, Services (4 categories with cinematic scroll), Testimonios, and Contacto are all implemented and production-ready; the complete user journey from landing to booking CTA is functional.
- <b>Motion Without Excess:</b> Every transition is compositor-thread only (opacity + transform), respects reduced-motion preferences, and stays within the sub-100KB JS budget — visual richness does not come at a performance cost.
- <b>Distinctive Visual Identity:</b> The four-world aesthetic direction (gothic, western, theatrical, art nouveau) is consistently expressed across color palette, ornamental components (DoubleFrame, CornerFlourish, SectionDivider, ChapterNumeral, DropCap), and typographic hierarchy — a clear departure from generic AI-era landing templates.
- <b>Scalable Component System:</b> Ornament components are parameterized and reusable, making it straightforward to extend the site with new sections (demos video, press gallery) without visual inconsistency.
