---
title: SADA — Political Electoral Registry Web App
publishDate: 2026-03-26 00:00:00
img: /assets/sada/1.webp
img_alt: Screenshot of the SADA electoral registry dashboard.
description: |
  A full-stack internal web application for managing the political-electoral registry of a party in San Antonio de Areco, Argentina — built on Next.js 14 with Google Sheets as the sole backend.
tags:
  - Dev
  - Frontend
  - Backend
technologies:
  - name: Next.js 14 (App Router)
    note: React Server Components model with built-in API routes and full-stack single-deployment capability.
  - name: TypeScript 5 (strict mode)
    note: Enforced throughout with no `any`, full strict flags, and domain types derived from the schema.
  - name: Google Sheets API (googleapis)
    note: Sole backend — reads and writes via Service Account with a column-map abstraction to avoid hardcoded indices.
  - name: NextAuth v5 (beta)
    note: Google OAuth SSO with a custom sign-in callback validating users against the Usuarios sheet whitelist.
  - name: Zod + React Hook Form
    note: Schema-validated forms on client and server, with live duplicate-DNI detection and dependent dropdowns.
  - name: Tailwind CSS + shadcn/ui + Radix UI
    note: Component library and utility-first styling implementing the custom "Digital Manifesto" design system.
  - name: Recharts
    note: Powers the analytics dashboard charts — circuit breakdown, age ranges, gender donut, affiliation by year.
  - name: ExcelJS + @react-pdf/renderer
    note: Generates XLSX and PDF exports for registry, birthdays, addresses, member profiles, and analytics reports.
screenshots:
  - /assets/sada/2.webp
  - /assets/sada/3.webp
  - /assets/sada/4.webp
  - /assets/sada/5.webp
  - /assets/sada/6.webp
---

### Project Overview

SADA is a purpose-built internal CRUD web application for managing the political-electoral registry (padrón) of a political party in San Antonio de Areco, Buenos Aires province. It replaces manual spreadsheet workflows with a secure, multi-user dashboard that reads and writes directly to a Google Sheets backend — no traditional database required. The system handles voter records across 34 data fields, supports political classification (MDF vs. OTRO), tracks party membership, and provides analytics, export tools, and a bulk address review workflow.

#### Objectives

- **Centralized Registry Management** — Provide a single, access-controlled source of truth for voter and affiliate data replacing fragmented spreadsheet operations.
- **Political Classification** — Surface and manage the key AFINIDAD field (MDF | OTRO) across all views to support internal campaign decisions.
- **Data Quality** — Implement a structured address-review workflow (VALIDA / REVISION / ERROR) to clean and verify existing registry addresses.
- **Export & Reporting** — Enable one-click exports of the full registry, birthday lists, address reports, individual member profiles, and analytics — in both XLSX and PDF formats.
- **Secure Multi-user Access** — Authenticate users via Google SSO with a whitelist maintained in the same Google Sheet, tracking which internal contact contributed each record.

#### Project Workflow

- **Design System First** — Visual identity was defined upfront using an editorial design language inspired by Argentine Peronist political graphics — bold typography (Space Grotesk + Inter), high-contrast primary blue (#0253cd), and a strict no-border rule using color layering and whitespace instead.
- **Schema Design** — A 34-column Google Sheets schema (BASE tab) was designed and versioned (v2 → v2.1) with column-map abstraction in code to prevent index drift across migrations.
- **Next.js App Router Architecture** — All protected routes live under a single authenticated layout. Server Components handle initial data fetching; URL Search Params persist filter state across navigation.
- **API Layer** — REST-style route handlers manage the full CRUD lifecycle — list with filtering and pagination, create, full-record update, logical soft-delete (ESTADO → INACTIVO), and a dedicated address-correction endpoint that writes only specific columns without touching read-only fields.
- **Analytics Panel** — A dedicated /analytics view aggregates totals and breakdowns by circuit, age range, gender, and affiliation year, reusing the same filtered dataset and powering PDF report generation.
- **Mobile Responsiveness** — Iterative fixes addressed overflow, bottom navigation clipping, and layout breaks across the entire protected area.
- **Audit Logging** — Edits are logged to a LOGS sheet with timestamp and user email, providing a traceable record of who changed what.

#### Results and Impact

- **Functional Internal Tool** — The application was developed from zero to a feature-complete internal tool in a single day of intense iteration, reaching 39 commits covering CRUD, auth, analytics, exports, address review, and mobile fixes.
- **Data Integrity** — The schema versioning approach and column-map abstraction eliminated index-drift bugs that would have silently corrupted records in a direct-index implementation.
- **Audit Trail** — Every edit is attributable to a specific internal user, giving the party organization visibility into data provenance.
- **Export Flexibility** — Staff can export any filtered view of the registry to XLSX or PDF without technical assistance, reducing operational bottlenecks.
