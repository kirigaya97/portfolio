---
title: Desarrollo de Landing Page para Nub3
publishDate: 2026-04-14 00:00:00
img: /assets/nub3/1.webp
img_alt: Captura del hero de la landing page de Nub3 con el grafo de nodos animado.
description: |
  Una landing page orientada a la conversión para Nub3, un estudio de ingeniería de software argentino especializado en IA, análisis de datos, automatización e integraciones.
tags:
  - Design
  - Dev
  - Frontend
technologies:
  - name: Astro 5
    note: Salida estática zero-JS por defecto con interactividad opt-in donde se necesita.
  - name: TypeScript
    note: Manipulación type-safe del canvas y el DOM en seis comportamientos interactivos.
  - name: CSS Custom Properties
    note: Sostiene todo el sistema de diseño — paleta, escala tipográfica y tokens de layout.
  - name: Canvas 2D API
    note: Maneja la animación del grafo de nodos con nodos hub, paquetes de datos y física reactiva al mouse.
  - name: Google Fonts (Fraunces, JetBrains Mono, Inter Tight)
    note: Equilibra títulos editoriales en serif con cuerpo de texto limpio y etiquetas monoespaciadas.
screenshots:
  - /assets/nub3/2.webp
  - /assets/nub3/3.webp
  - /assets/nub3/4.webp
  - /assets/nub3/5.webp
  - /assets/nub3/6.webp
  - /assets/nub3/7.webp
---

### Resumen del Proyecto

Nub3 (nub3.com.ar) es un estudio de ingeniería de software con sede en Buenos Aires que construye soluciones de IA, datos, automatización e integraciones para empresas de Argentina y LATAM. La landing page debía comunicar profundidad técnica y credibilidad sin perder accesibilidad — un sitio de página única que cubre servicios, un manifiesto de la empresa, un proceso de cuatro pasos y una sección de contacto directo.

#### Objetivos

- **Posicionamiento de marca** — Establecer a Nub3 como un estudio de ingeniería enfocado, no como un proveedor tecnológico genérico, mediante una redacción editorial cuidada y un lenguaje visual distintivo.
- **Claridad de servicios** — Presentar las cuatro capacidades principales (IA, Análisis de Datos, Automatización de Procesos, Integraciones & APIs) en un formato escaneable y estructurado que ayude a los potenciales clientes a autoclasificarse.
- **Embudo de conversión** — Llevar a los visitantes hacia un mail directo o una reserva de llamada con una sección de CTA mínima y sin fricción.
- **Credibilidad técnica** — Reforzar la competencia del estudio con una franja de estado del sistema actualizada en tiempo real y una visualización animada de grafo de nodos en el hero.

#### Flujo de Trabajo del Proyecto

- **Arquitectura y selección de stack** — Se eligió Astro 5 por su salida zero-JavaScript por defecto y su rendimiento estático de primer nivel, con TypeScript para la capa de efectos interactivos.
- **Sistema de diseño** — Se construyó un sistema de diseño CSS personalizado usando propiedades CSS — paleta cálida oscura (--ink, --bone), acento verde ácido (--acid: #d4ff3a) y una escala tipográfica variable que combina Fraunces serif para títulos, Inter Tight para el cuerpo y JetBrains Mono para código y etiquetas.
- **Efectos interactivos** — Se implementaron seis efectos de canvas/DOM en un único módulo TypeScript: cursor magnético personalizado, scroll reveals con IntersectionObserver, word-swap cíclico en el hero, franja de contadores animados, animación de grafo de nodos en canvas (sin WebGL) con nodos hub y paquetes de datos en tránsito, e indicador de sección con seguimiento de scroll.
- **Refinamiento responsive** — Se iteró el layout mobile en varios commits, ajustando el espaciado tipográfico, la continuidad del ticker y las restricciones de bordes del canvas.
- **Consideraciones de rendimiento** — Todas las animaciones respetan `prefers-reduced-motion` y se pausan mediante `IntersectionObserver` y `visibilitychange` cuando están fuera de pantalla, evitando cómputo innecesario.

#### Resultados e Impacto

- **Producto completo y deployado** — El sitio se publicó en producción en Vercel (nub3-landing.vercel.app) con dominio personalizado apuntando a nub3.com.ar en el mismo día de desarrollo.
- **Experiencia interactiva pulida** — Seis efectos animados distintos generan una sensación premium y técnicamente expresiva que alinea con el posicionamiento de ingeniería del estudio sin sacrificar accesibilidad.
- **Codebase minimalista** — El sitio completo vive en un único componente de página, un layout, un archivo CSS y un módulo TypeScript de efectos — deliberadamente simple para facilitar el mantenimiento a largo plazo.
