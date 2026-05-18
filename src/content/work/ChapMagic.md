---
title: ChapMagic — Magician & Mentalist Landing Page
publishDate: 2026-02-11 00:00:00
img: /assets/chapmagic/1.png
img_alt: Screenshot of the ChapMagic landing page hero section.
description: |
  A premium, high-performance bilingual landing page for ChapMagic — magician and mentalist — built with cinematic animations, a production-ready contact form, and a gold-and-obsidian design system.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/chapmagic/2.png,
  /assets/chapmagic/3.png,
  /assets/chapmagic/4.png,
  /assets/chapmagic/5.png
]
---

### Project Overview
ChapMagic is a premium landing page for Chap, a professional magician and mentalist who has performed across 14+ countries and accumulated 2,000+ shows and 40,000+ spectators — including appearances on Spain's Got Talent where judges praised him live on stage. The site serves as a conversion-focused showcase for his corporate events, reception magic, theatrical shows, and intimate Speak Easy experiences, driving bookings through a polished bilingual interface.

##### Objectives
- <b>Brand Elevation:</b> Translate ChapMagic's premium, mysterious stage persona into a cohesive gold-and-obsidian digital identity.
- <b>Bilingual Reach:</b> Serve both Spanish and English-speaking markets through Astro's native i18n routing.
- <b>Lead Generation:</b> Provide a secure, production-ready contact form that filters spam while converting visitors into booking inquiries.
- <b>Performance & Animation:</b> Deliver cinematic, scroll-driven experiences without sacrificing page load speed.
##### Project Workflow
- <b>Design System:</b> Established a dark luxury palette — Gold (`#D4AF37`), Obsidian (`#0A0A0A`), Ivory (`#F5F0E8`) — with Playfair Display headings and Inter body text, all defined as Tailwind 4 `@theme` tokens.
- <b>Animation Architecture:</b> Implemented custom GSAP timelines for the Hero section, ScrollTrigger-based parallax and staggered reveals, and a bespoke "magnetic" golden cursor for desktop.
- <b>Hybrid Mobile UX:</b> Designed show cards with auto-reveal behavior on mobile (via ScrollTrigger) and hover interactions on desktop, adapting seamlessly to each context.
- <b>i18n Implementation:</b> Built fully localized Spanish and English versions using Astro's dynamic `[lang]` routing with a centralized `site-config.json` as the single source of truth for all translations and content.
- <b>Contact Form & Anti-Spam:</b> Developed a server-side API endpoint (SSR via Vercel) integrating Resend for reliable email delivery, protected by an invisible honeypot field and a timestamp-based bot detection guard.
- <b>Smooth Navigation:</b> Integrated Lenis smooth scrolling and a custom "Liquid" mobile menu for a premium feel throughout.
##### Technologies Used
>Astro v5: Chosen for its hybrid SSG + SSR model — static pages with a live server-side API route for the contact form.
###
>Tailwind CSS v4: Adopted the new Vite-based engine with `@theme` tokens for a consistent, maintainable design system.
###
>GSAP (ScrollTrigger + Timeline): Powers all cinematic animations, from hero reveals to scroll-based parallax on every section.
###
>Lenis: Provides butter-smooth scroll behavior that elevates the overall premium feel of the site.
###
>Resend: Handles transactional email delivery from the contact form with high reliability.
###
>Vercel: Deployment platform enabling the hybrid SSR mode required for the server-side contact form API.
###
>TypeScript: Used throughout for type-safe component props, API handlers, and site config.

##### Results and Impact
- <b>Complete Bilingual Site:</b> Fully localized ES/EN experience delivered via Astro's i18n routing, expanding ChapMagic's reach to English-speaking markets.
- <b>Cinematic Animation System:</b> GSAP-powered hero, scroll-triggered section reveals, and a magnetic cursor create a distinctive, high-end user experience consistent with the artist's stage presence.
- <b>Spam-Resistant Contact Form:</b> Dual-layer protection (honeypot + timestamp guard) ensures genuine inquiries reach the client without manual filtering.
- <b>Performance-Oriented Architecture:</b> Static-first Astro build with SSR only where needed minimizes bundle size and time-to-interactive.
- <b>Centralized Content Management:</b> All translations, show descriptions, stats, and links live in a single `site-config.json`, making future content updates straightforward without touching component code.
