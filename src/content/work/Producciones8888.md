---
title: 8888 Producciones Landing Page
publishDate: 2026-05-05 00:00:00
img: /assets/producciones8888/1.webp
img_alt: Screenshot of 8888 Producciones landing page featuring the acid green brutalist design.
description: |
  A high-impact single-page landing built for an audiovisual production company, recording studio, and artist management house in Buenos Aires — fusing Multimodal Brutalism with Future-Pop aesthetics.
tags:
  - Design
  - Dev
  - Frontend
technologies:
  - name: Astro 6
    note: Zero-JS-by-default static MPA with component isolation and fast Vercel deployment.
  - name: Tailwind CSS v4
    note: Vite plugin with `@theme` tokens enforces the brand system without a config file.
  - name: Motion One
    note: Lightweight scroll-reveal library (~3.8 KB) for `inView`-driven stagger effects.
  - name: Lenis
    note: Smooth-scroll library providing momentum scrolling synchronized with the header progress indicator.
screenshots:
  - /assets/producciones8888/2.webp
  - /assets/producciones8888/3.webp
  - /assets/producciones8888/4.webp
  - /assets/producciones8888/5.webp
  - /assets/producciones8888/6.webp
---

### Project Overview

8888 Producciones is a Buenos Aires-based audiovisual production company, recording studio, and artist management house operating at the intersection of technology and pure creative expression. The landing page was built to present four core service verticals — Audiovisual Production, Recording Studio, Artist Roster, and Events & Live — under a single, opinionated visual identity defined by the brand's own design guidelines: Multimodal Brutalism meets Future-Pop. The site is deployed as a fully static Astro 6 MPA on Vercel, with a public "under construction" index that directs prospects to book sessions, and a complete `/preview` route containing the full experience.

#### Objectives

- **Brand Translation** — Faithfully implement the client's documented brand identity — Acid Green (`#B6F700`), Deep Black, zero-radius (brutalist) shapes, and a three-font editorial system (Newsreader, Space Grotesk, Inter).
- **Animated First Impression** — Create a cinematic page-load sequence that counts `0000 → 8888`, grows an acid-green progress bar, flashes the screen, then sweeps away — running only once per browser session via `sessionStorage`.
- **Section Architecture** — Deliver all five content sections (Manifesto, Servicios, Roster, Reel, Estudio) with a numbered editorial navigation and a fully functional contact form with project-type checkboxes.
- **Interaction Polish** — Layer Motion One scroll-reveals, word-by-word hero stagger, an infinite CSS marquee, and a custom acid-green cursor with `mix-blend-mode: difference` that scales on hover.

#### Project Workflow

- **Design System First** — Translated the client's brand guidelines into Tailwind CSS v4 design tokens (`@theme`) — palette, spacing, radii, and named typography utilities — before writing a single component.
- **Component Decomposition** — Split the page into 13 focused Astro components (Loader, Hero, Manifesto, Servicios, Roster, Reel, Estudio, Contacto, Marquee, Header, Footer, Cursor, GrainOverlay), each responsible for a single visual concern.
- **Animation Strategy** — Used Motion One's `inView` hook for `[data-reveal]` and `[data-stagger]` elements, keeping all scroll-driven animation under ~3.8 KB; CSS `@keyframes` handle the loader counter, marquee, and grain overlay independently.
- **Performance & Accessibility** — Static output via Astro's default SSG mode, lazy-loaded images, `prefers-reduced-motion` guard on all animations, and `aria-hidden` on every decorative element.
- **Smooth Scroll Integration** — Lenis was wired at the layout level to provide momentum scrolling alongside a Lenis-synchronized acid-green scroll-progress bar in the header.

#### Results and Impact

- **Complete Brand Implementation** — The Acid Green / Deep Black palette, sharp brutalist radii, and editorial typeface trio are applied consistently across every component, directly from the client's `lineamientos.html` guidelines.
- **Cinematic Load Experience** — The `0000 → 8888` loader with eased counter, growing acid bar, and flash-sweep exit runs once per session, establishing an immediate and memorable brand impression.
- **Four Service Verticals Delivered** — Audiovisual Production, Recording Studio (Genelec 8351B / SSL Origin 32 / Neve · API · UA specs), Artist Roster (6 acts displayed in a grayscale-to-color hover grid), and Events & Live are all fully structured and navigable.
- **Interaction Depth** — Custom cursor, grain overlay, scroll-linked progress bar, word-split hero reveal, and a CSS marquee strip combine to produce a polished, production-grade UI without any JavaScript framework overhead.
- **Mobile-First Responsive** — Adaptive layout with `clamp()`-based fluid type, hidden sound-bar SVGs on small screens, and a full-screen mobile menu triggered from a brutalist "MENU" button.
