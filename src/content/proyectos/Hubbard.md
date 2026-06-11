---
title: HCA Argentina — Sitio Web de Formación Profesional
publishDate: 2026-05-14 00:00:00
img: /assets/hubbard/1.webp
img_alt: Captura de pantalla de la página de inicio del sitio demo de HCA Argentina.
description: |
  Un sitio demo completo construido para presentar la renovación digital de HCA Argentina, un instituto de formación empresarial basado en la metodología Hubbard.
tags:
  - Dev
  - Design
  - Frontend
technologies:
  - name: Astro 6
    note: Modelo de salida híbrido — pre-renderizado estático más endpoints de servidor, sin overhead de JS en el cliente.
  - name: Tailwind CSS v4
    note: Plugin de Vite con tokens `@theme` como única fuente de verdad para paleta, tipografía y espaciado.
  - name: TypeScript (strict)
    note: Aplicado en layouts, componentes y schemas de Zod para detectar errores de integración en tiempo de compilación.
  - name: Zod
    note: Validación en tiempo de ejecución de todos los formularios en cliente y servidor antes del envío de emails.
  - name: Vercel (con adaptador @astrojs/vercel)
    note: "Destino de despliegue con vercel.json personalizado para cabeceras de seguridad y caché inmutable de assets."
screenshots:
  - /assets/hubbard/2.webp
  - /assets/hubbard/3.webp
  - /assets/hubbard/4.webp
  - /assets/hubbard/5.webp
  - /assets/hubbard/6.webp
  - /assets/hubbard/7.webp
  - /assets/hubbard/8.webp
---

### Resumen del Proyecto

HCA Argentina es la sede local de la red global Hubbard College of Administration, dedicada a la formación profesional en administración y dirección de empresas basada en la metodología Hubbard — un sistema aplicado por más de 270.000 empresas en más de 50 sedes en el mundo. El sitio web existente estaba construido sobre un tema de WordPress desactualizado que limitaba la presentación del catálogo y la conversión de visitantes. Este proyecto es un sitio demo completo construido desde cero para mostrar una alternativa moderna: ocho rutas públicas, una herramienta gratuita de diagnóstico empresarial, tres páginas de talleres detalladas, un catálogo de 27 cursos con filtrado, y una sección de testimonios — todo desarrollado en un sprint enfocado y listo para desplegar en Vercel.

#### Objetivos

- **Pitch de renovación digital** — Entregar un demo navegable de punta a punta que reemplace el sitio WordPress original, dándole al cliente una visión concreta de la experiencia rediseñada antes de comprometerse con producción.
- **Generación de leads** — Convertir visitantes mediante un "Test Empresarial" gratuito que recomienda programas de formación según las respuestas del usuario, con manejo de formularios en servidor y notificación por email a través de Resend.
- **Accesibilidad del catálogo** — Presentar el catálogo completo de cursos y talleres con filtrado por área en el cliente, páginas de detalle individuales por curso, y colecciones de contenido estructuradas y gestionadas mediante archivos Markdown.
- **Performance y SEO** — Servir un sitio generado estáticamente con datos JSON-LD estructurados, etiquetas Open Graph, sitemap, cabeceras de seguridad y caché inmutable de assets — todo configurado para despliegue en Vercel sin trabajo adicional.

#### Flujo de Trabajo del Proyecto

- **Relevamiento y arquitectura** — Auditoría del sitio original hcaargentina.com.ar para mapear rutas existentes, contenidos e identidad visual. Definición de una arquitectura orientada a componentes en Astro 6 con modo de salida servidor y adaptador de Vercel para soportar tanto páginas estáticas como endpoints API en el servidor.
- **Scraping y migración de contenido** — Extracción de descripciones de cursos, objetivos y estructuras de programa del sitio WordPress original (que oculta el contenido en acordeones controlados por CSS/JS) mediante scripts Python personalizados, y posterior migración a colecciones de contenido de Astro con frontmatter validado por Zod.
- **Diseño de interfaz e implementación** — Construcción de un sistema de diseño completo desde cero con Tailwind v4 — paleta navy/dorado/off-white, tipografía Geist Variable, sombras de card de doble capa, y un conjunto completo de primitivas de interfaz reutilizables (Button, Badge, Section, Heading, Eyebrow, Icon, Container).
- **Polish e interacciones** — Incorporación de un loader de marca (navy con gradiente radial dorado, barra de progreso, control con sessionStorage), animaciones de reveal al hacer scroll mediante un único IntersectionObserver, y un botón flotante de WhatsApp. Todo el movimiento respeta `prefers-reduced-motion`.
- **Formularios y API** — Implementación de tres endpoints API en el servidor (lead de talleres, contacto, test empresarial) con validación Zod, anti-spam mediante honeypot y control de tiempo, y sanitización con `escapeHtml` en los templates de email.

#### Resultados e Impacto

- **Demo completo entregado** — Ocho rutas públicas (home, tres talleres, índice de cursos, páginas de detalle de cursos, testimonios, contacto, test empresarial) más tres endpoints API, todo compilando limpiamente sin warnings.
- **Fidelidad de contenido** — 27 cursos y 3 talleres migrados desde el sitio original con descripciones estructuradas, objetivos, desglose de programa y precios — listos para revisión y aprobación del cliente.
- **Base lista para producción** — A una variable de entorno (`RESEND_API_KEY`) de tener envío de emails en vivo; el resto de la infraestructura — hosting, caché CDN, metadata SEO y redirecciones desde URLs anteriores — ya está configurada.
