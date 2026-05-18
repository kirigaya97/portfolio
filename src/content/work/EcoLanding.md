---
title: EcoExport Landing Page
publishDate: 2026-05-11 00:00:00
img: /assets/ecolanding/1.png
img_alt: Screenshot of the EcoExport landing page showing the hero section with a green-toned design and scrap metal export messaging.
description: |
  A conversion-focused landing page for an Argentine scrap metal export company, built with Astro and Tailwind CSS v4.
tags:
  - Dev
  - Design
  - Frontend
screenshots: [
  /assets/ecolanding/2.png,
  /assets/ecolanding/3.png,
  /assets/ecolanding/4.png,
  /assets/ecolanding/5.png
]
---

### Project Overview

EcoExport is a landing page built for an Argentine company that purchases and exports non-ferrous and ferrous scrap metal — copper, bronze, aluminum, and stainless steel — to industrial buyers across Asia, Europe, and the Americas. The page positions EcoExport as a full-service export partner: from on-site pickup and classification through customs documentation and final shipment. The site is live at [eco-landing-pearl.vercel.app](https://eco-landing-pearl.vercel.app).

##### Objectives
- <b>Present the service clearly:</b> Communicate a complex logistics chain (pickup → classification → export) in a way that non-technical sellers — industry owners, demolition contractors, and individuals — can immediately understand and trust.
- <b>Drive quote requests:</b> Funnel visitors toward a contact form with material type pre-selection, reducing friction for first-time inquiries.
- <b>Reinforce environmental credibility:</b> Surface sustainability messaging (circular economy, CO₂ avoided) alongside the commercial pitch, supporting both regulatory positioning and brand differentiation.

##### Project Workflow
- <b>Single-page architecture:</b> All content lives on one scrollable page (`index.astro`) composed of eight purpose-built components — Header, Hero, Marquee, Service, Materials, Process, About, Contact, and Footer — each corresponding to a distinct conversion step.
- <b>Component-driven build:</b> Each section is an isolated `.astro` component, keeping markup and logic co-located and making future content updates straightforward.
- <b>Custom design system:</b> A `leaf` color palette (11 steps, from `leaf-50` to `leaf-950`) and a `bark` accent were defined as CSS custom properties via Tailwind v4's `@theme` block, eliminating the need for a separate config file.
- <b>Reveal-on-scroll UX:</b> An `IntersectionObserver` in the layout script progressively reveals sections as the user scrolls, adding perceived polish without a JavaScript framework.
- <b>Deployed to Vercel:</b> Static output via `astro build`, deployed on Vercel's edge network with no server-side runtime.

##### Technologies Used
>Astro 6: Chosen for zero-JS-by-default static output — the page ships minimal JavaScript, keeping load times fast for the target audience on variable mobile connections.
###
>Tailwind CSS v4 (Vite plugin): The `@tailwindcss/vite` integration and the new `@theme` block replaced the traditional `tailwind.config.js`, enabling a fully custom color palette and font scale with no extra config overhead.
###
>Inter + Fraunces (Google Fonts): Inter handles body copy readability; Fraunces (an optical-size serif) provides display headings with a natural, grounded feel that matches the environmental brand direction.
###
>Vanilla JavaScript (IntersectionObserver + mobile nav): A lightweight scroll-reveal system and mobile hamburger nav were implemented without any framework dependency, keeping the bundle size minimal.
###
>Vercel: Static hosting with automatic preview deployments on every push, providing the client a live preview URL for feedback rounds.

##### Results and Impact
- <b>Full single-page coverage:</b> The landing covers the complete conversion funnel — value proposition, service detail, materials catalog, four-step process, company background, and contact form — in a single cohesive scroll.
- <b>No external runtime dependencies:</b> The final build ships zero frontend framework JavaScript; all interactivity is handled by ~30 lines of vanilla JS in the layout.
- <b>Accessible and mobile-ready:</b> Responsive grid layouts, a collapsible mobile nav, and `aria-hidden` decorative SVGs are built in from the start.
