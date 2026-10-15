---
title: "RAM Studio: Landing and Portfolio Site for an AI, Data and Software Studio"
publishDate: 2026-08-11 00:00:00
url: https://www.ramstudio.com.ar
img: /assets/ramstudio/1.webp
img_alt: RAM Studio homepage hero on a near-black background with a large violet headline and an animated neural node graph on the right.
description: |
  The marketing site for RAM, a Buenos Aires studio for AI, data and software: an Astro 5 static site with a problem-first narrative, a canvas node-graph hero, a Lenis and GSAP scroll layer, and a content-driven portfolio section.
tags:
  - Design
  - Dev
  - Frontend
  - Branding
technologies:
  - name: Astro 5
    note: Static output deployed on Vercel, with file-based routing and a content collection for the portfolio.
  - name: TypeScript
    note: Vanilla client modules for the interactive effects and the scroll animation layer.
  - name: Plain CSS (custom properties)
    note: A single stylesheet with brand tokens (ink, paper, iris, violet, magenta); no CSS framework.
  - name: Canvas 2D API
    note: Hero node-graph animation, paused when off-screen and disabled under reduced motion.
  - name: Lenis
    note: Smooth scroll running in native-scroll mode, so scroll events keep driving the section index and reveals.
  - name: GSAP + ScrollTrigger
    note: Scroll animation layer synced to Lenis through a single ticker, registered under a reduced-motion media query.
  - name: "@astrojs/sitemap"
    note: Generates the sitemap at build time.
  - name: Geist Sans and Geist Mono
    note: Brand typography loaded from Google Fonts.
  - name: Vercel
    note: Auto-deploys on push, with the domain's DNS managed in Cloudflare.
screenshots:
  - /assets/ramstudio/2.webp
  - /assets/ramstudio/3.webp
  - /assets/ramstudio/4.webp
  - /assets/ramstudio/5.webp
  - /assets/ramstudio/6.webp
---

### Project Overview

RAM ([ramstudio.com.ar](https://www.ramstudio.com.ar)) is a Buenos Aires studio that works on AI, data analysis, process automation, integrations and web development. The site is its public face: a single-page landing that opens with the client's problem instead of a list of services, plus a `/trabajos` section that holds the studio's portfolio.

The build runs on Astro 5 with no CSS framework. The visual language comes from the studio's brand system (a dark surface, a violet accent family and a monospaced label style), and the code keeps those tokens as the single source of truth.

#### Objectives

- **Problem-first narrative** - Lead with the manual work and disconnected systems a prospect already recognises, then map each one to a service.
- **On-brand, accessible UI** - Translate the brand palette and type rules into CSS tokens, keeping text contrast within WCAG AA on the dark surface.
- **Expressive but safe motion** - Add scroll and canvas effects that never get in the way of reading or of users who prefer reduced motion.
- **A portfolio that scales** - Publish projects as Markdown entries, so adding one never means touching page code.

#### Project Workflow

- **Page structure** - Built the home as seven numbered sections (Intro, Diagnóstico, Servicios, Trabajos, Manifiesto, Proceso, Contacto) with a fixed section indicator that tracks the one in view. Services, process steps and diagnosis blocks are plain arrays at the top of the page and rendered from there.
- **Design system** - Mirrored the brand palette in `:root` tokens in one stylesheet. Emphasis text uses the iris tone, and the magenta and violet tones are kept for buttons, glows and the logo mark because they fail contrast as text on the dark background. Geist ships no italic, so emphasis is done with colour rather than a synthesized faux-italic.
- **Interactive effects** - Wrote the effects in one TypeScript module: custom cursor with magnetic buttons, scroll reveals driven by a `data-reveal` attribute, a hero word swap, a live status strip, the canvas node graph, the sticky section index, and the mobile menu (hamburger to overlay).
- **Smooth scroll and GSAP** - Added Lenis in native-scroll mode and a separate GSAP and ScrollTrigger module synced to it, with GSAP's ticker driving Lenis so there is only one animation loop. New animations register inside a reduced-motion media query, so they switch off automatically.
- **Portfolio section** - Ported a content-driven portfolio into the site: a content collection validated by a Zod schema, a filterable index with tag chips, and dynamic detail routes generated from the Markdown files. Brand tokens were retokenized one to one from the original portfolio CSS.
- **Brand assets and styleguide** - Added a scripted pipeline that renders the logo rasters from SVG sources, and a styleguide page with social templates served under `/brand`.
- **SEO and deploy** - Added Open Graph metadata and a generated sitemap, and deployed on Vercel with auto-deploys on push.

#### Results and Impact

- **A complete, deployed site** - The landing, the filterable portfolio index and the per-project detail pages are live at ramstudio.com.ar.
- **Reduced-motion by design** - The canvas graph, the Lenis scroll and the GSAP animations are all disabled when the user prefers reduced motion, and the graph also pauses when it leaves the viewport.
- **A single source of truth for brand** - Palette, type and contrast rules live in documented tokens, so later changes to the brand are made in one place.
- **Low-friction content updates** - New portfolio projects are added as a Markdown file with frontmatter, and the index, filters and detail route are generated from it.
- **Small dependency surface** - The runtime dependencies are Astro, the sitemap integration, GSAP and Lenis; everything else is hand-written TypeScript and CSS.
