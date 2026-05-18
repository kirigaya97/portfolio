---
title: SADA — Political Electoral Registry Web App
publishDate: 2026-03-26 00:00:00
img: /assets/sada/1.png
img_alt: Screenshot of the SADA electoral registry dashboard.
description: |
  A full-stack internal web application for managing the political-electoral registry of a party in San Antonio de Areco, Argentina — built on Next.js 14 with Google Sheets as the sole backend.
tags:
  - Dev
  - Frontend
  - Backend
screenshots: [
  /assets/sada/2.png,
  /assets/sada/3.png,
  /assets/sada/4.png,
  /assets/sada/5.png
]
---

### Project Overview
SADA is a purpose-built internal CRUD web application for managing the political-electoral registry (padrón) of a political party in San Antonio de Areco, Buenos Aires province. It replaces manual spreadsheet workflows with a secure, multi-user dashboard that reads and writes directly to a Google Sheets backend — no traditional database required. The system handles voter records across 34 data fields, supports political classification (MDF vs. OTRO), tracks party membership, and provides analytics, export tools, and a bulk address review workflow.

##### Objectives
- <b>Centralized Registry Management:</b> Provide a single, access-controlled source of truth for voter and affiliate data replacing fragmented spreadsheet operations.
- <b>Political Classification:</b> Surface and manage the key AFINIDAD field (MDF | OTRO) across all views to support internal campaign decisions.
- <b>Data Quality:</b> Implement a structured address-review workflow (VALIDA / REVISION / ERROR) to clean and verify existing registry addresses.
- <b>Export & Reporting:</b> Enable one-click exports of the full registry, birthday lists, address reports, individual member profiles, and analytics — in both XLSX and PDF formats.
- <b>Secure Multi-user Access:</b> Authenticate users via Google SSO with a whitelist maintained in the same Google Sheet, tracking which internal contact contributed each record.

##### Project Workflow
- <b>Design System First:</b> Visual identity was defined upfront using an editorial design language inspired by Argentine Peronist political graphics — bold typography (Space Grotesk + Inter), high-contrast primary blue (#0253cd), and a strict no-border rule using color layering and whitespace instead.
- <b>Schema Design:</b> A 34-column Google Sheets schema (BASE tab) was designed and versioned (v2 → v2.1) with column-map abstraction in code to prevent index drift across migrations.
- <b>Next.js App Router Architecture:</b> All protected routes live under a single authenticated layout. Server Components handle initial data fetching; URL Search Params persist filter state across navigation.
- <b>API Layer:</b> REST-style route handlers manage the full CRUD lifecycle — list with filtering and pagination, create, full-record update, logical soft-delete (ESTADO → INACTIVO), and a dedicated address-correction endpoint that writes only specific columns without touching read-only fields.
- <b>Analytics Panel:</b> A dedicated /analytics view aggregates totals and breakdowns by circuit, age range, gender, and affiliation year, reusing the same filtered dataset and powering PDF report generation.
- <b>Mobile Responsiveness:</b> Iterative fixes addressed overflow, bottom navigation clipping, and layout breaks across the entire protected area.
- <b>Audit Logging:</b> Edits are logged to a LOGS sheet with timestamp and user email, providing a traceable record of who changed what.

##### Technologies Used
>Next.js 14 (App Router): Framework of choice for its React Server Components model, built-in API routes, and full-stack capability within a single deployment.
###
>TypeScript 5 (strict mode): Enforced throughout with no `any`, full strict flags, and domain types derived from the schema.
###
>Google Sheets API (googleapis): Sole backend — reads and writes to a shared spreadsheet using a Service Account, with a column-map abstraction layer to avoid hardcoded indices.
###
>NextAuth v5 (beta): Handles Google OAuth SSO with a custom sign-in callback that validates users against the Usuarios sheet whitelist.
###
>Zod + React Hook Form: Schema-validated forms on both client and server, with live duplicate-DNI detection and dependent dropdowns (barrio dependent on localidad).
###
>Tailwind CSS + shadcn/ui + Radix UI: Component library and utility-first styling implementing the custom "Digital Manifesto" design system.
###
>Recharts: Powers the analytics dashboard charts (circuit breakdown, age ranges, gender donut, affiliation by year).
###
>ExcelJS + @react-pdf/renderer: Generates XLSX and PDF exports for registry, birthdays, addresses, individual member profiles, and analytics reports.

##### Results and Impact
- <b>Functional Internal Tool:</b> The application was developed from zero to a feature-complete internal tool in a single day of intense iteration, reaching 39 commits covering CRUD, auth, analytics, exports, address review, and mobile fixes.
- <b>Data Integrity:</b> The schema versioning approach and column-map abstraction eliminated index-drift bugs that would have silently corrupted records in a direct-index implementation.
- <b>Audit Trail:</b> Every edit is attributable to a specific internal user, giving the party organization visibility into data provenance.
- <b>Export Flexibility:</b> Staff can export any filtered view of the registry to XLSX or PDF without technical assistance, reducing operational bottlenecks.
