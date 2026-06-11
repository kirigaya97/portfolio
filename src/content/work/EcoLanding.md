---
title: EcoExport Landing Page
publishDate: 2026-05-11 00:00:00
img: /assets/ecolanding/1.webp
img_alt: Screenshot of the EcoExport landing page showing the hero section with a green-toned design and scrap metal export messaging.
description: |
  A conversion-focused landing page for an Argentine scrap metal export company, built with Astro and Tailwind CSS v4.
tags:
  - Dev
  - Design
  - Frontend
technologies:
  - name: Astro 6
    note: Zero-JS-by-default static output — minimal JavaScript for fast load times on variable mobile connections.
  - name: Tailwind CSS v4 (Vite plugin)
    note: "@tailwindcss/vite integration with @theme block for a fully custom palette and font scale."
  - name: Inter + Fraunces (Google Fonts)
    note: Inter for body readability; Fraunces optical-size serif for display headings matching the environmental brand.
  - name: Vanilla JavaScript (IntersectionObserver + mobile nav)
    note: Lightweight scroll-reveal and hamburger nav with no framework dependency.
  - name: Vercel
    note: Static hosting with automatic preview deployments on every push.
screenshots:
  - /assets/ecolanding/2.webp
  - /assets/ecolanding/3.webp
  - /assets/ecolanding/4.webp
  - /assets/ecolanding/5.webp
  - /assets/ecolanding/6.webp
---

### Project Overview

EcoExport is a landing page built for an Argentine company that purchases and exports non-ferrous and ferrous scrap metal — copper, bronze, aluminum, and stainless steel — to industrial buyers across Asia, Europe, and the Americas. The page positions EcoExport as a full-service export partner: from on-site pickup and classification through customs documentation and final shipment. The site is live at [eco-landing-pearl.vercel.app](https://eco-landing-pearl.vercel.app).

#### Objectives

- **Present the Service Clearly** — Communicate a complex logistics chain (pickup → classification → export) in a way that non-technical sellers — industry owners, demolition contractors, and individuals — can immediately understand and trust.
- **Drive Quote Requests** — Funnel visitors toward a contact form with material type pre-selection, reducing friction for first-time inquiries.
- **Reinforce Environmental Credibility** — Surface sustainability messaging (circular economy, CO₂ avoided) alongside the commercial pitch, supporting both regulatory positioning and brand differentiation.

#### Project Workflow

- **Single-Page Architecture** — All content lives on one scrollable page (`index.astro`) composed of eight purpose-built components — Header, Hero, Marquee, Service, Materials, Process, About, Contact, and Footer — each corresponding to a distinct conversion step.
- **Component-Driven Build** — Each section is an isolated `.astro` component, keeping markup and logic co-located and making future content updates straightforward.
- **Custom Design System** — A `leaf` color palette (11 steps, from `leaf-50` to `leaf-950`) and a `bark` accent were defined as CSS custom properties via Tailwind v4's `@theme` block, eliminating the need for a separate config file.
- **Reveal-on-Scroll UX** — An `IntersectionObserver` in the layout script progressively reveals sections as the user scrolls, adding perceived polish without a JavaScript framework.
- **Deployed to Vercel** — Static output via `astro build`, deployed on Vercel's edge network with no server-side runtime.

#### Results and Impact

- **Full Single-Page Coverage** — The landing covers the complete conversion funnel — value proposition, service detail, materials catalog, four-step process, company background, and contact form — in a single cohesive scroll.
- **No External Runtime Dependencies** — The final build ships zero frontend framework JavaScript; all interactivity is handled by ~30 lines of vanilla JS in the layout.
- **Accessible and Mobile-Ready** — Responsive grid layouts, a collapsible mobile nav, and `aria-hidden` decorative SVGs are built in from the start.
