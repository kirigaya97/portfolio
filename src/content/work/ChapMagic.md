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
technologies:
  - name: Astro v5
    note: Hybrid SSG + SSR model — static pages with a live server-side API route for the contact form.
  - name: Tailwind CSS v4
    note: Vite-based engine with @theme tokens for a consistent, maintainable design system.
  - name: GSAP (ScrollTrigger + Timeline)
    note: Powers all cinematic animations, from hero reveals to scroll-based parallax on every section.
  - name: Lenis
    note: Butter-smooth scroll behavior elevating the overall premium feel of the site.
  - name: Resend
    note: Transactional email delivery from the contact form with high reliability.
  - name: Vercel
    note: Deployment platform enabling the hybrid SSR mode required for the server-side contact form API.
  - name: TypeScript
    note: Type-safe component props, API handlers, and site config throughout.
screenshots:
  - /assets/chapmagic/2.png
  - /assets/chapmagic/3.png
  - /assets/chapmagic/4.png
  - /assets/chapmagic/5.png
---

### Project Overview

ChapMagic is a premium landing page for Chap, a professional magician and mentalist who has performed across 14+ countries and accumulated 2,000+ shows and 40,000+ spectators — including appearances on Spain's Got Talent where judges praised him live on stage. The site serves as a conversion-focused showcase for his corporate events, reception magic, theatrical shows, and intimate Speak Easy experiences, driving bookings through a polished bilingual interface.

#### Objectives

- **Brand Elevation** — Translate ChapMagic's premium, mysterious stage persona into a cohesive gold-and-obsidian digital identity.
- **Bilingual Reach** — Serve both Spanish and English-speaking markets through Astro's native i18n routing.
- **Lead Generation** — Provide a secure, production-ready contact form that filters spam while converting visitors into booking inquiries.
- **Performance & Animation** — Deliver cinematic, scroll-driven experiences without sacrificing page load speed.

#### Project Workflow

- **Design System** — Established a dark luxury palette — Gold (`#D4AF37`), Obsidian (`#0A0A0A`), Ivory (`#F5F0E8`) — with Playfair Display headings and Inter body text, all defined as Tailwind 4 `@theme` tokens.
- **Animation Architecture** — Implemented custom GSAP timelines for the Hero section, ScrollTrigger-based parallax and staggered reveals, and a bespoke "magnetic" golden cursor for desktop.
- **Hybrid Mobile UX** — Designed show cards with auto-reveal behavior on mobile (via ScrollTrigger) and hover interactions on desktop, adapting seamlessly to each context.
- **i18n Implementation** — Built fully localized Spanish and English versions using Astro's dynamic `[lang]` routing with a centralized `site-config.json` as the single source of truth for all translations and content.
- **Contact Form & Anti-Spam** — Developed a server-side API endpoint (SSR via Vercel) integrating Resend for reliable email delivery, protected by an invisible honeypot field and a timestamp-based bot detection guard.
- **Smooth Navigation** — Integrated Lenis smooth scrolling and a custom "Liquid" mobile menu for a premium feel throughout.

#### Results and Impact

- **Complete Bilingual Site** — Fully localized ES/EN experience delivered via Astro's i18n routing, expanding ChapMagic's reach to English-speaking markets.
- **Cinematic Animation System** — GSAP-powered hero, scroll-triggered section reveals, and a magnetic cursor create a distinctive, high-end user experience consistent with the artist's stage presence.
- **Spam-Resistant Contact Form** — Dual-layer protection (honeypot + timestamp guard) ensures genuine inquiries reach the client without manual filtering.
- **Performance-Oriented Architecture** — Static-first Astro build with SSR only where needed minimizes bundle size and time-to-interactive.
- **Centralized Content Management** — All translations, show descriptions, stats, and links live in a single `site-config.json`, making future content updates straightforward without touching component code.
