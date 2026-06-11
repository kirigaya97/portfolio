---
title: HCA Argentina — Professional Training Website
publishDate: 2026-05-14 00:00:00
img: /assets/hubbard/1.webp
img_alt: Screenshot of the HCA Argentina demo website homepage.
description: |
  A full-featured demo site built to pitch a complete digital remake for HCA Argentina — a Hubbard-methodology business training institute.
tags:
  - Dev
  - Design
  - Frontend
technologies:
  - name: Astro 6
    note: Hybrid output — static pages plus server endpoints, zero client-side JS overhead.
  - name: Tailwind CSS v4
    note: Vite plugin with `@theme` tokens as single source of truth for palette and spacing.
  - name: TypeScript (strict)
    note: Applied throughout layouts, components, and Zod schemas to catch integration errors at build time.
  - name: Zod
    note: Runtime validation of all form submissions on client and server before email dispatch.
  - name: Vercel (with @astrojs/vercel adapter)
    note: "Deployment target with custom vercel.json for security headers and immutable asset cache."
screenshots:
  - /assets/hubbard/2.webp
  - /assets/hubbard/3.webp
  - /assets/hubbard/4.webp
  - /assets/hubbard/5.webp
  - /assets/hubbard/6.webp
  - /assets/hubbard/7.webp
  - /assets/hubbard/8.webp
---

### Project Overview

HCA Argentina is the local branch of the global Hubbard College of Administration network, offering professional business training based on the Hubbard management methodology — a system applied by over 270,000 companies worldwide across 50+ campuses. The existing website was built on an aging WordPress theme that limited the institute's ability to present its catalog and convert visitors. This project is a complete end-to-end demo site built from scratch to showcase a modern alternative: eight public-facing routes, a free business diagnostic tool, three detailed workshop pages, a 27-course catalog with filterable browsing, and a testimonials section — all built in a single focused sprint and ready for Vercel deployment.

#### Objectives

- **Modern Remake Pitch** — Deliver a fully navigable demo that replaces the original WordPress site, giving the client a concrete vision of the redesigned experience before committing to production.
- **Lead Generation** — Convert visitors through a guided "Test Empresarial" (free business diagnostic) that recommends training programs based on user answers, with server-side form handling and email notification via Resend.
- **Catalog Accessibility** — Present the full course and workshop catalog with client-side area filtering, individual detail pages per course, and structured content collections managed through Markdown files.
- **Performance and SEO** — Serve a statically generated site with structured JSON-LD data, Open Graph tags, sitemap, security headers, and immutable asset caching — all configured for Vercel deployment out of the box.

#### Project Workflow

- **Discovery and Architecture** — Audited the original hcaargentina.com.ar site to map existing routes, content, and visual identity. Defined a component-driven architecture in Astro 6 with a server output mode and Vercel adapter to support both static pages and server API endpoints.
- **Content Scraping and Migration** — Extracted course descriptions, objectives, and program structures from the original WordPress site (which hides content in CSS/JS-controlled accordions) using custom Python scripts, then migrated them into typed Astro content collections with Zod-validated frontmatter.
- **UI Design and Implementation** — Built a full design system from scratch using Tailwind v4 — navy/gold/off-white palette, Geist Variable typography, dual-layer card shadows, and a complete set of reusable UI primitives (Button, Badge, Section, Heading, Eyebrow, Icon, Container).
- **Polish and Interactions** — Added a branded site loader (navy with radial gold gradient, progress bar, sessionStorage gating), scroll-triggered reveal animations via a single IntersectionObserver, and a WhatsApp floating action button. All motion respects `prefers-reduced-motion`.
- **Forms and API** — Implemented three server-side API endpoints (workshop lead, contact, business test) with Zod validation, honeypot + timing-based anti-spam, and `escapeHtml` sanitization in email templates.

#### Results and Impact

- **Complete Demo Delivered** — Eight public routes (home, three workshops, course index, course detail pages, testimonials, contact, business test) plus three API endpoints, all building cleanly with no warnings.
- **Content Fidelity** — 27 courses and 3 workshops migrated from the original site with structured descriptions, objectives, program breakdowns, and pricing — ready for client review and final approval.
- **Production-Ready Foundation** — One environment variable (`RESEND_API_KEY`) away from live email delivery; the rest of the infrastructure — hosting, CDN caching, SEO metadata, and redirects from legacy URLs — is already configured.
