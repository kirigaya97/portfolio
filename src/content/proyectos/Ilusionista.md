---
title: Guillermo Flores — Ilusionista, Rediseño Web
publishDate: 2026-04-27 00:00:00
img: /assets/ilusionista/1.png
img_alt: Captura de pantalla del sitio de Guillermo Flores, ilusionista.
description: |
  Una landing de scroll único pensada para sentirse como un objeto teatral — atmósfera primero, sin plantillas genéricas.
tags:
  - Design
  - Dev
  - Frontend
technologies:
  - name: Astro 6
    note: Framework estático-first; solo las islas interactivas envían código en runtime.
  - name: Tailwind CSS v4
    note: Tema de design tokens completamente personalizado para colores, fuentes y espaciado — sin defaults de stock.
  - name: Motion (Motion One)
    note: Librería de animación ligera para las secuencias de stagger del reveal de palabras en el hero con easing spring.
  - name: Lenis
    note: Motor de scroll suave que alimenta con la posición de scroll a los motores de services-scroll y paralaje.
  - name: Bodoni Moda + Cormorant Garamond + Inter (Fontsource)
    note: Fuentes variables self-hosted — sin dependencia de CDN externo, sin layout shift.
  - name: Adapter de Vercel
    note: Deploy en edge sin configuración via `@astrojs/vercel`.
screenshots:
  - /assets/ilusionista/2.png
  - /assets/ilusionista/3.png
  - /assets/ilusionista/4.png
  - /assets/ilusionista/5.png
---

### Resumen del Proyecto

Rediseño completo de ilusionista.com.ar para Guillermo Flores, ilusionista y mentalista argentino con base en Buenos Aires. El sitio es una landing de scroll único que reemplaza una web genérica con algo que se siente como una pieza curada de espectáculo: cargada de atmósfera, con movimiento cinematográfico y tipografía que evocan un show en vivo. La dirección estética fusiona de forma deliberada carteles woodtype del Old West, el claroscuro gótico de Edgar Allan Poe, la tipografía sobredimensionada de Tarantino y el ornamentalismo del Art Nouveau.

#### Objetivos

- **Declaración de marca** — Reemplazar una presencia web genérica con una landing distintiva y cargada de personalidad que espeje el drama de una actuación en vivo.
- **Conversión** — Impulsar contrataciones mediante una sección de contacto directo por WhatsApp y email, orientada a eventos corporativos, privados, magia de cerca y temporadas de teatro.
- **Presupuesto de performance** — Entregar la experiencia con LCP < 2,5 s, CLS < 0,1 y menos de 100 KB de JavaScript en la primera carga — la atmósfera no puede costar velocidad de página.
- **Accesibilidad** — Mantener contraste WCAG AA sobre fondos oscuros texturados y respetar `prefers-reduced-motion` en cada animación.

#### Flujo de Trabajo del Proyecto

- **Dirección y especificación** — Se definió la dirección estética a partir de 14 imágenes de referencia antes de escribir un solo componente, estableciendo una paleta de cuatro mundos (ink, bone, blood, brass) y un sistema tipográfico construido sobre Bodoni Moda, Cormorant Garamond e Inter — todas self-hosted.
- **Arquitectura de componentes** — Sitio estático en Astro con islas React solo donde la interactividad es real; cada sección de la página (Hero, Bio, Services, Testimonios, Contacto) es su propio componente `.astro` con estilos con scope.
- **Sección de espectáculos cinematográfica** — Se implementó un slider de pantalla completa anclado al scroll para cuatro categorías de servicio (Mentalismo Corporativo, Eventos Privados, Magia de Cerca, Teatro), impulsado por un motor de scroll personalizado en TypeScript vanilla — sin necesidad de licencia de GSAP.
- **Sistema de movimiento** — Todas las animaciones (stagger de palabras en el hero, Ken Burns en la foto, dibujo del filete brass, pop del sello, fade-up de secciones, numerales de capítulo con paralaje, reveal cortina de la foto) respetan `prefers-reduced-motion` y usan anotaciones `will-change` para mantenerse en el compositor.
- **Coreografía de transiciones** — Una transición personalizada de punto brass a punto ink conecta la sección de espectáculos con Testimonios — el punto del numeral marca crece desde un ornamento tipográfico hasta cubrir el viewport en tinta, eliminando los cortes abruptos entre secciones.

#### Resultados e Impacto

- **Secciones completamente entregadas** — Hero, Bio, Espectáculos (4 categorías con scroll cinematográfico), Testimonios y Contacto están implementados y listos para producción; el recorrido completo del usuario desde la llegada hasta el CTA de contratación es funcional.
- **Movimiento sin excesos** — Cada transición opera solo en opacidad y transform en el compositor, respeta las preferencias de movimiento reducido y se mantiene dentro del presupuesto de menos de 100 KB de JS — la riqueza visual no tiene costo de performance.
- **Identidad visual distintiva** — La dirección estética de cuatro mundos (gótico, western, teatral, art nouveau) se expresa de forma consistente en la paleta de color, los componentes ornamentales (DoubleFrame, CornerFlourish, SectionDivider, ChapterNumeral, DropCap) y la jerarquía tipográfica — una ruptura clara con las plantillas genéricas de la era de la IA.
- **Sistema de componentes escalable** — Los componentes de ornamento son parametrizables y reutilizables, lo que facilita extender el sitio con nuevas secciones (video de demos, galería de prensa) sin inconsistencia visual.
