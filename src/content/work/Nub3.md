---
title: Nub3 Landing Page Development
publishDate: 2026-04-14 00:00:00
img: /assets/nub3/1.webp
img_alt: Screenshot of the Nub3 landing page hero section with animated node graph.
description: |
  A conversion-focused landing page for Nub3, an Argentine software engineering studio specializing in AI, data analytics, automation, and integrations.
tags:
  - Design
  - Dev
  - Frontend
technologies:
  - name: Astro 5
    note: Zero-JS static output by default with opt-in interactivity.
  - name: TypeScript
    note: Type-safe canvas and DOM manipulation across six interactive behaviors.
  - name: CSS Custom Properties
    note: Powers the entire design system — palette, typography scale, and layout tokens.
  - name: Canvas 2D API
    note: Drives the hero node-graph animation with hub nodes, data packets, and mouse-reactive physics.
  - name: Google Fonts (Fraunces, JetBrains Mono, Inter Tight)
    note: Balances editorial serif display headlines with clean body copy and monospaced UI labels.
screenshots:
  - /assets/nub3/2.webp
  - /assets/nub3/3.webp
  - /assets/nub3/4.webp
  - /assets/nub3/5.webp
  - /assets/nub3/6.webp
  - /assets/nub3/7.webp
---

### Project Overview

Nub3 (nub3.com.ar) is a Buenos Aires-based software engineering studio that builds AI, data, automation, and integration solutions for Argentine and Latin American companies. The landing page needed to communicate technical depth and credibility while remaining approachable — a single-page site covering services, a company manifesto, a four-step engagement process, and a direct contact section.

#### Objectives

- **Brand positioning** — Establish Nub3 as a focused engineering studio, not a generic technology vendor, through intentional editorial copy and a distinctive visual language.
- **Service clarity** — Present four core capabilities (AI, Data Analytics, Process Automation, Integrations & APIs) in a scannable, structured format that helps prospects self-qualify.
- **Conversion path** — Drive visitors toward a direct email or calendar booking with a minimal, friction-free CTA section.
- **Technical credibility** — Reinforce competence with a live-updating system status strip and an animated node-graph visualization in the hero.

#### Project Workflow

- **Architecture & stack selection** — Chose Astro 5 for its zero-JavaScript-by-default output and first-class static performance, with TypeScript for the interactive effects layer.
- **Design system** — Built a custom CSS design system using CSS custom properties — dark warm-neutral palette (--ink, --bone), acid-green accent (--acid: #d4ff3a), and a variable type scale mixing Fraunces serif display, Inter Tight body, and JetBrains Mono for code/labels.
- **Interactive effects** — Implemented six canvas/DOM effects in a single TypeScript module: custom magnetic cursor, IntersectionObserver scroll reveals, cycling hero word-swap, animated counter strip, WebGL-free node-graph canvas animation with hub nodes and traveling data packets, and a scroll-driven section index indicator.
- **Responsive refinement** — Iterated mobile layout across multiple commits, tightening typography spacing, ticker loop continuity, and canvas boundary constraints.
- **Performance considerations** — All animations respect `prefers-reduced-motion` and pause via `IntersectionObserver` and `visibilitychange` when off-screen, preventing unnecessary computation.

#### Results and Impact

- **Complete, deployed product** — The site shipped to production on Vercel at nub3-landing.vercel.app with a custom domain configured to nub3.com.ar within a single day of development.
- **Polished interactive experience** — Six distinct animated effects create a premium, technically expressive feel that aligns with the studio's engineering positioning without sacrificing accessibility.
- **Lean codebase** — The entire site lives in a single page component, one layout, one CSS file, and one TypeScript effects module — deliberately minimal for long-term maintainability.
