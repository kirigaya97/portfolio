---
title: International Logistics Management System
publishDate: 2026-02-24 00:00:00
img: /assets/logistica/1.png
img_alt: Screenshot of the international logistics management system dashboard.
description: |
  A full-stack web application for managing international shipping containers across three warehouses in Hong Kong, China, and the United States.
tags:
  - Dev
  - Frontend
  - Backend
screenshots: [
  /assets/logistica/2.png,
  /assets/logistica/3.png,
  /assets/logistica/4.png,
  /assets/logistica/5.png
]
---

### Project Overview
This is a full-stack internal tool built to manage international logistics operations across three origin warehouses: Hong Kong, China, and the United States. The system tracks shipping containers through their full lifecycle — from depot storage through customs clearance to finalization — and provides operational tools for cost estimation, volumetric planning, and packing list management. It was built for real-world import operations and deployed on Vercel with Supabase as the backend.

##### Objectives
- <b>Container Lifecycle Tracking:</b> Enable full CRUD management of shipping containers with status progression through four states: depot, transit, customs, and finalized.
- <b>Import Cost Simulation:</b> Provide an accurate, configurable cost calculator covering CIF components, customs duties, taxes, and operational expenses, with multi-exchange-rate support via a live Argentine dollar rates API.
- <b>Volumetric Planning:</b> Allow operators to calculate how many boxes fit in a 40' HC or 40' Standard container by volume and weight capacity before loading.
- <b>Packing List Import:</b> Support Excel file upload with flexible column mapping to import item lists directly into a container's packing list.
- <b>Client Management:</b> Maintain a client directory linked to containers and shipments.
- <b>Data Export:</b> Export container listings and cost reports to Excel for reporting purposes.
##### Project Workflow
- <b>Architecture Planning:</b> Defined the feature roadmap using a JIT Context Assembly system — a directory-based context layer designed to guide AI-assisted development with structured implementation plans per feature.
- <b>Auth & Foundations (F1):</b> Implemented Supabase authentication with SSR cookie handling via `@supabase/ssr` and Next.js middleware redirects to protect all routes.
- <b>Container CRUD (F2.1):</b> Built full create/read/update/delete flows for containers, including origin warehouse selection (HK, China, USA), container type, ETA, and status tracking.
- <b>Packing List Import (F2.2):</b> Developed an Excel parsing pipeline using `xlsx` and `exceljs` with an interactive column mapper for flexible CSV/XLSX ingestion.
- <b>Volumetric Calculator (F3.1):</b> Built a pure calculation engine that computes boxes-per-container by dimension and weight, with utilization percentage output.
- <b>Cost Calculator (F3.2):</b> Implemented a multi-stage cost engine (FOB → CIF → duties → taxes → operational expenses → total landed cost) with configurable cost matrix templates and live exchange rate selection.
- <b>Excel Exports (F7):</b> Added export functionality for containers and simulation results using `exceljs`.
- <b>Mobile Responsiveness (F9):</b> Implemented a responsive sidebar with hamburger menu and mobile-first layout adjustments.
##### Technologies Used
>Next.js 16 (App Router): Server components and server actions used throughout for data fetching and mutations without a separate API layer.
###
>Supabase (PostgreSQL): Provides the relational database, authentication, and real-time-ready infrastructure for containers, clients, packing lists, and cost templates.
###
>Tailwind CSS v4: Used for utility-first styling with a clean, admin-panel aesthetic.
###
>ExcelJS / XLSX: Handles both Excel import (packing lists) and export (container reports, cost simulations).
###
>dolarapi.com: Proxied through a Next.js API route to fetch live Argentine dollar exchange rates for cost calculations.
###
>Zod: Schema validation for form inputs and server action payloads.
###
>TanStack Table: Powers the interactive, sortable packing list table with column visibility controls.
###
>Vercel: Hosting platform with edge middleware for auth-based route protection.

##### Results and Impact
- <b>Operational Coverage:</b> The system covers the full container management workflow end-to-end, from creation to finalization, across three international origin points.
- <b>Cost Accuracy:</b> The configurable cost matrix allows operators to model different import scenarios with live exchange rate inputs, replacing manual spreadsheet calculations.
- <b>Time Savings on Packing Lists:</b> The Excel import flow with dynamic column mapping eliminates manual data entry for item-level logistics data.
- <b>Mobile Access:</b> The responsive layout allows logistics personnel to check container status and transit timelines from mobile devices.
