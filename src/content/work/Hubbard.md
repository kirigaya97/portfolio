---
title: HCA Argentina — Professional Training Website
publishDate: 2026-05-14 00:00:00
img: /assets/hubbard/1.png
img_alt: Screenshot of the HCA Argentina demo website homepage.
description: |
  A full-featured demo site built to pitch a complete digital remake for HCA Argentina — a Hubbard-methodology business training institute.
tags:
  - Dev
  - Design
  - Frontend
screenshots: [
  /assets/hubbard/2.png,
  /assets/hubbard/3.png,
  /assets/hubbard/4.png,
  /assets/hubbard/5.png
]
---

### Project Overview
HCA Argentina is the local branch of the global Hubbard College of Administration network, offering professional business training based on the Hubbard management methodology — a system applied by over 270,000 companies worldwide across 50+ campuses. The existing website was built on an aging WordPress theme that limited the institute's ability to present its catalog and convert visitors. This project is a complete end-to-end demo site built from scratch to showcase a modern alternative: eight public-facing routes, a free business diagnostic tool, three detailed workshop pages, a 27-course catalog with filterable browsing, and a testimonials section — all built in a single focused sprint and ready for Vercel deployment.

##### Objectives
- <b>Modern Remake Pitch:</b> Deliver a fully navigable demo that replaces the original WordPress site, giving the client a concrete vision of the redesigned experience before committing to production.
- <b>Lead Generation:</b> Convert visitors through a guided "Test Empresarial" (free business diagnostic) that recommends training programs based on user answers, with server-side form handling and email notification via Resend.
- <b>Catalog Accessibility:</b> Present the full course and workshop catalog with client-side area filtering, individual detail pages per course, and structured content collections managed through Markdown files.
- <b>Performance and SEO:</b> Serve a statically generated site with structured JSON-LD data, Open Graph tags, sitemap, security headers, and immutable asset caching — all configured for Vercel deployment out of the box.
##### Project Workflow
- <b>Discovery and Architecture:</b> Audited the original hcaargentina.com.ar site to map existing routes, content, and visual identity. Defined a component-driven architecture in Astro 6 with a server output mode and Vercel adapter to support both static pages and server API endpoints.
- <b>Content Scraping and Migration:</b> Extracted course descriptions, objectives, and program structures from the original WordPress site (which hides content in CSS/JS-controlled accordions) using custom Python scripts, then migrated them into typed Astro content collections with Zod-validated frontmatter.
- <b>UI Design and Implementation:</b> Built a full design system from scratch using Tailwind v4 — navy/gold/off-white palette, Geist Variable typography, dual-layer card shadows, and a complete set of reusable UI primitives (Button, Badge, Section, Heading, Eyebrow, Icon, Container).
- <b>Polish and Interactions:</b> Added a branded site loader (navy with radial gold gradient, progress bar, sessionStorage gating), scroll-triggered reveal animations via a single IntersectionObserver, and a WhatsApp floating action button. All motion respects `prefers-reduced-motion`.
- <b>Forms and API:</b> Implemented three server-side API endpoints (workshop lead, contact, business test) with Zod validation, honeypot + timing-based anti-spam, and `escapeHtml` sanitization in email templates.
##### Technologies Used
>Astro 6: Chosen for its hybrid output model — static pre-rendering for all content pages plus server endpoints for form handling, with zero client-side JavaScript overhead.
###
>Tailwind CSS v4: Used via the Vite plugin with `@theme` tokens for a single source of truth on palette, typography, and spacing — no config file required.
###
>TypeScript (strict): Applied throughout layouts, components, lib utilities, and Zod schemas to catch integration errors at build time.
###
>Zod: Used for runtime validation of all form submissions on both client (HTML5) and server, ensuring data integrity before email dispatch.
###
>Vercel (with @astrojs/vercel adapter): Deployment target with custom `vercel.json` for security headers and immutable cache on hashed assets. Sitemap and robots.txt generated at build time.

##### Results and Impact
- <b>Complete Demo Delivered:</b> Eight public routes (home, three workshops, course index, course detail pages, testimonials, contact, business test) plus three API endpoints, all building cleanly with no warnings.
- <b>Content Fidelity:</b> 27 courses and 3 workshops migrated from the original site with structured descriptions, objectives, program breakdowns, and pricing — ready for client review and final approval.
- <b>Production-Ready Foundation:</b> One environment variable (`RESEND_API_KEY`) away from live email delivery; the rest of the infrastructure — hosting, CDN caching, SEO metadata, and redirects from legacy URLs — is already configured.
