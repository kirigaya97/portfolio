---
title: HCA Argentina — Sitio Web de Formación Profesional
publishDate: 2026-05-14 00:00:00
img: /assets/hubbard/1.png
img_alt: Captura de pantalla de la página de inicio del sitio demo de HCA Argentina.
description: |
  Un sitio demo completo construido para presentar la renovación digital de HCA Argentina, un instituto de formación empresarial basado en la metodología Hubbard.
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

### Descripción del proyecto
HCA Argentina es la sede local de la red global Hubbard College of Administration, dedicada a la formación profesional en administración y dirección de empresas basada en la metodología Hubbard — un sistema aplicado por más de 270.000 empresas en más de 50 sedes en el mundo. El sitio web existente estaba construido sobre un tema de WordPress desactualizado que limitaba la presentación del catálogo y la conversión de visitantes. Este proyecto es un sitio demo completo construido desde cero para mostrar una alternativa moderna: ocho rutas públicas, una herramienta gratuita de diagnóstico empresarial, tres páginas de talleres detalladas, un catálogo de 27 cursos con filtrado, y una sección de testimonios — todo desarrollado en un sprint enfocado y listo para desplegar en Vercel.

##### Objetivos
- <b>Pitch de renovación digital:</b> Entregar un demo navegable de punta a punta que reemplace el sitio WordPress original, dándole al cliente una visión concreta de la experiencia rediseñada antes de comprometerse con producción.
- <b>Generación de leads:</b> Convertir visitantes mediante un "Test Empresarial" gratuito que recomienda programas de formación según las respuestas del usuario, con manejo de formularios en servidor y notificación por email a través de Resend.
- <b>Accesibilidad del catálogo:</b> Presentar el catálogo completo de cursos y talleres con filtrado por área en el cliente, páginas de detalle individuales por curso, y colecciones de contenido estructuradas y gestionadas mediante archivos Markdown.
- <b>Performance y SEO:</b> Servir un sitio generado estáticamente con datos JSON-LD estructurados, etiquetas Open Graph, sitemap, cabeceras de seguridad y caché inmutable de assets — todo configurado para despliegue en Vercel sin trabajo adicional.
##### Flujo de trabajo del proyecto
- <b>Relevamiento y arquitectura:</b> Auditoría del sitio original hcaargentina.com.ar para mapear rutas existentes, contenidos e identidad visual. Definición de una arquitectura orientada a componentes en Astro 6 con modo de salida servidor y adaptador de Vercel para soportar tanto páginas estáticas como endpoints API en el servidor.
- <b>Scraping y migración de contenido:</b> Extracción de descripciones de cursos, objetivos y estructuras de programa del sitio WordPress original (que oculta el contenido en acordeones controlados por CSS/JS) mediante scripts Python personalizados, y posterior migración a colecciones de contenido de Astro con frontmatter validado por Zod.
- <b>Diseño de interfaz e implementación:</b> Construcción de un sistema de diseño completo desde cero con Tailwind v4 — paleta navy/dorado/off-white, tipografía Geist Variable, sombras de card de doble capa, y un conjunto completo de primitivas de interfaz reutilizables (Button, Badge, Section, Heading, Eyebrow, Icon, Container).
- <b>Polish e interacciones:</b> Incorporación de un loader de marca (navy con gradiente radial dorado, barra de progreso, control con sessionStorage), animaciones de reveal al hacer scroll mediante un único IntersectionObserver, y un botón flotante de WhatsApp. Todo el movimiento respeta `prefers-reduced-motion`.
- <b>Formularios y API:</b> Implementación de tres endpoints API en el servidor (lead de talleres, contacto, test empresarial) con validación Zod, anti-spam mediante honeypot y control de tiempo, y sanitización con `escapeHtml` en los templates de email.
##### Tecnologías utilizadas
>Astro 6: Elegido por su modelo de salida híbrido — pre-renderizado estático para todas las páginas de contenido más endpoints de servidor para el manejo de formularios, con cero overhead de JavaScript en el cliente.
###
>Tailwind CSS v4: Utilizado vía el plugin de Vite con tokens `@theme` como única fuente de verdad para paleta, tipografía y espaciado — sin necesidad de archivo de configuración.
###
>TypeScript (strict): Aplicado en layouts, componentes, utilidades de librería y schemas de Zod para detectar errores de integración en tiempo de compilación.
###
>Zod: Utilizado para validación en tiempo de ejecución de todos los envíos de formulario tanto en cliente (HTML5) como en servidor, garantizando integridad de datos antes del envío de emails.
###
>Vercel (con adaptador @astrojs/vercel): Destino de despliegue con `vercel.json` personalizado para cabeceras de seguridad y caché inmutable de assets con hash. Sitemap y robots.txt generados en tiempo de build.

##### Resultados e impacto
- <b>Demo completo entregado:</b> Ocho rutas públicas (home, tres talleres, índice de cursos, páginas de detalle de cursos, testimonios, contacto, test empresarial) más tres endpoints API, todo compilando limpiamente sin warnings.
- <b>Fidelidad de contenido:</b> 27 cursos y 3 talleres migrados desde el sitio original con descripciones estructuradas, objetivos, desglose de programa y precios — listos para revisión y aprobación del cliente.
- <b>Base lista para producción:</b> A una variable de entorno (`RESEND_API_KEY`) de tener envío de emails en vivo; el resto de la infraestructura — hosting, caché CDN, metadata SEO y redirecciones desde URLs anteriores — ya está configurada.
