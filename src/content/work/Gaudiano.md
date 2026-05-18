---
title: Romina Gaudiano — Trading Mind Landing Page
publishDate: 2026-03-18 00:00:00
img: /assets/gaudiano/1.png
img_alt: Screenshot of Romina Gaudiano's Trading Mind landing page.
description: |
  A high-polish conversion landing page for a mental reprogramming mentor targeting traders and high-risk investors.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/gaudiano/2.png,
  /assets/gaudiano/3.png,
  /assets/gaudiano/4.png,
  /assets/gaudiano/5.png
]
---

### Project Overview
Romina Gaudiano is an Argentine specialist in applied neuroscience-based mental reprogramming for traders and high-risk investors. The project is a single-page conversion landing at [mentoria.rominagaudiano.com](https://mentoria.rominagaudiano.com), promoting her 1:1 mentorship program and CryptoMind Pro Elite offering. The design went through multiple prototyped options before landing on "Option 6" — a dark, editorial aesthetic that reflects the gravity and precision of the trading world.

##### Objectives
- <b>Brand Identity:</b> Communicate premium positioning through a refined navy, cream, and cashmere palette paired with Playfair Display and Lora serif typography.
- <b>Lead Generation:</b> Drive qualified applications via a contact form and a fixed WhatsApp floating button with a pre-filled message.
- <b>Performance-first Build:</b> Deliver fast, responsive pages with zero client-side JavaScript frameworks and self-hosted fonts.
- <b>Spam Protection:</b> Implement a double-honeypot strategy (Web3Forms native + a custom hidden field) to filter bot submissions without CAPTCHA friction.
##### Project Workflow
- <b>Prototyping:</b> Designed and built multiple landing variants (options 1–6) to explore tone, layout, and visual direction before committing to a final.
- <b>Design System:</b> Established a strict CSS custom-property palette (`--navy`, `--cream`, `--cashm`) applied consistently across all sections, interactions, and animations.
- <b>Animation without Libraries:</b> Implemented all entrance reveals using CSS `animation-timeline: view()` scroll-driven animations and `IntersectionObserver` — no GSAP or third-party libraries.
- <b>Interactive Polish:</b> Added a custom two-element cursor (dot + ring), CSS `:has()`-powered section background transitions on the Pilares block, hero image clip-path reveal, and a full-screen hamburger overlay.
- <b>Contact & Comms:</b> Integrated Web3Forms (zero DNS dependency) as the active form backend, with a pre-built Resend serverless endpoint preserved in `src/pages/api/contact.ts` for future migration once DNS leaves Wix.
- <b>Deployment:</b> Auto-deployed to Vercel on every push to `master`, with Vercel Analytics and Speed Insights wired into `BaseLayout.astro`.
##### Technologies Used
>Astro 6: Chosen as the static-site framework with the `@astrojs/vercel` adapter for serverless output and zero-JS-by-default pages.
###
>Tailwind CSS 4: Used via `@tailwindcss/vite` for utility-first styling; all design tokens expressed as CSS custom properties for dynamic theming.
###
>Web3Forms: Selected as the form backend because it requires no DNS configuration, unblocking the contact form while domain DNS is still managed by Wix.
###
>Fontsource (Playfair Display + Lora): Self-hosted editorial serif fonts loaded with latin-only subsets and specific weights to avoid Google Fonts CDN latency.
###
>Vercel Analytics + Speed Insights: Instrumented at the layout level to track performance and visitor behaviour in production.
###
>Resend (inactive fallback): A serverless endpoint is preserved in the codebase and will be activated once the sender domain is verified after DNS migration.
##### Results and Impact
- <b>Multi-option Exploration Delivered:</b> Six distinct landing prototypes were built and evaluated, resulting in a final design that precisely matched the client's premium positioning.
- <b>Zero-dependency Animations:</b> All scroll reveals, cursor effects, and section transitions are achieved with native CSS and the scroll-driven animations API — keeping the bundle lean and rendering smooth.
- <b>Responsive Image Optimization:</b> Hero images served through Astro's `<Image />` with responsive `srcset`, achieving significant file-size reduction (documented as ~512kB → ~40kB at display sizes in project docs).
- <b>Resilient Contact Flow:</b> The Web3Forms integration unblocked form delivery despite DNS constraints, with a Resend fallback ready to activate without a rewrite.
- <b>Production-ready Infrastructure:</b> Continuous deployment on Vercel, auto-generated sitemap, robots.txt, and analytics instrumentation all in place from day one.
