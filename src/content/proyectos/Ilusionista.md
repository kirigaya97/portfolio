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
screenshots: [
  /assets/ilusionista/2.png,
  /assets/ilusionista/3.png,
  /assets/ilusionista/4.png,
  /assets/ilusionista/5.png
]
---

### Descripción del proyecto
Rediseño completo de ilusionista.com.ar para Guillermo Flores, ilusionista y mentalista argentino con base en Buenos Aires. El sitio es una landing de scroll único que reemplaza una web genérica con algo que se siente como una pieza curada de espectáculo: cargada de atmósfera, con movimiento cinematográfico y tipografía que evocan un show en vivo. La dirección estética fusiona de forma deliberada carteles woodtype del Old West, el claroscuro gótico de Edgar Allan Poe, la tipografía sobredimensionada de Tarantino y el ornamentalismo del Art Nouveau.

##### Objetivos
- <b>Declaración de marca:</b> Reemplazar una presencia web genérica con una landing distintiva y cargada de personalidad que espeje el drama de una actuación en vivo.
- <b>Conversión:</b> Impulsar contrataciones mediante una sección de contacto directo por WhatsApp y email, orientada a eventos corporativos, privados, magia de cerca y temporadas de teatro.
- <b>Presupuesto de performance:</b> Entregar la experiencia con LCP < 2,5 s, CLS < 0,1 y menos de 100 KB de JavaScript en la primera carga — la atmósfera no puede costar velocidad de página.
- <b>Accesibilidad:</b> Mantener contraste WCAG AA sobre fondos oscuros texturados y respetar `prefers-reduced-motion` en cada animación.
##### Flujo de trabajo
- <b>Dirección y especificación:</b> Se definió la dirección estética a partir de 14 imágenes de referencia antes de escribir un solo componente, estableciendo una paleta de cuatro mundos (ink, bone, blood, brass) y un sistema tipográfico construido sobre Bodoni Moda, Cormorant Garamond e Inter — todas self-hosted.
- <b>Arquitectura de componentes:</b> Sitio estático en Astro con islas React solo donde la interactividad es real; cada sección de la página (Hero, Bio, Services, Testimonios, Contacto) es su propio componente `.astro` con estilos con scope.
- <b>Sección de espectáculos cinematográfica:</b> Se implementó un slider de pantalla completa anclado al scroll para cuatro categorías de servicio (Mentalismo Corporativo, Eventos Privados, Magia de Cerca, Teatro), impulsado por un motor de scroll personalizado en TypeScript vanilla — sin necesidad de licencia de GSAP.
- <b>Sistema de movimiento:</b> Todas las animaciones (stagger de palabras en el hero, Ken Burns en la foto, dibujo del filete brass, pop del sello, fade-up de secciones, numerales de capítulo con paralaje, reveal cortina de la foto) respetan `prefers-reduced-motion` y usan anotaciones `will-change` para mantenerse en el compositor.
- <b>Coreografía de transiciones:</b> Una transición personalizada de punto brass a punto ink conecta la sección de espectáculos con Testimonios — el punto del numeral marca crece desde un ornamento tipográfico hasta cubrir el viewport en tinta, eliminando los cortes abruptos entre secciones.
##### Tecnologías utilizadas
>Astro 6: Framework estático-first elegido por su cero-JS por defecto; solo las islas interactivas envían código en runtime.
###
>Tailwind CSS v4: Estilos utility-first con un tema de design tokens completamente personalizado (colores, fuentes, espaciado) en lugar de los defaults de stock.
###
>Motion (Motion One): Librería de animación ligera usada para las secuencias de stagger del reveal de palabras en el hero con easing spring preciso.
###
>Lenis: Motor de scroll suave que alimenta con la posición de scroll a los motores de services-scroll y paralaje mediante un event bus compartido.
###
>Bodoni Moda + Cormorant Garamond + Inter (Fontsource): Fuentes variables self-hosted — sin dependencia de CDN externo, sin layout shift por carga de web fonts.
###
>Adapter de Vercel: Deploy en edge sin configuración via `@astrojs/vercel`.

##### Resultados e impacto
- <b>Secciones completamente entregadas:</b> Hero, Bio, Espectáculos (4 categorías con scroll cinematográfico), Testimonios y Contacto están implementados y listos para producción; el recorrido completo del usuario desde la llegada hasta el CTA de contratación es funcional.
- <b>Movimiento sin excesos:</b> Cada transición opera solo en opacidad y transform en el compositor, respeta las preferencias de movimiento reducido y se mantiene dentro del presupuesto de menos de 100 KB de JS — la riqueza visual no tiene costo de performance.
- <b>Identidad visual distintiva:</b> La dirección estética de cuatro mundos (gótico, western, teatral, art nouveau) se expresa de forma consistente en la paleta de color, los componentes ornamentales (DoubleFrame, CornerFlourish, SectionDivider, ChapterNumeral, DropCap) y la jerarquía tipográfica — una ruptura clara con las plantillas genéricas de la era de la IA.
- <b>Sistema de componentes escalable:</b> Los componentes de ornamento son parametrizables y reutilizables, lo que facilita extender el sitio con nuevas secciones (video de demos, galería de prensa) sin inconsistencia visual.
