---
title: Landing Page EcoExport
publishDate: 2026-05-11 00:00:00
img: /assets/ecolanding/1.webp
img_alt: Captura de pantalla de la landing page de EcoExport mostrando la sección hero con diseño en tonos verdes y mensajes sobre exportación de chatarra metálica.
description: |
  Una landing page orientada a la conversión para una empresa argentina de compra y exportación de chatarra metálica, construida con Astro y Tailwind CSS v4.
tags:
  - Dev
  - Design
  - Frontend
technologies:
  - name: Astro 6
    note: Salida estática con cero JS por defecto — JavaScript mínimo para carga rápida en conexiones móviles variables.
  - name: Tailwind CSS v4 (plugin de Vite)
    note: "Integración @tailwindcss/vite con bloque @theme para paleta y escala tipográfica totalmente personalizadas."
  - name: Inter + Fraunces (Google Fonts)
    note: Inter para legibilidad del cuerpo; Fraunces serif óptica para títulos de display alineados con la marca ambiental.
  - name: JavaScript Vanilla (IntersectionObserver + nav mobile)
    note: Reveal al scroll y menú hamburguesa sin ninguna dependencia de framework.
  - name: Vercel
    note: Hosting estático con previews automáticos en cada push.
screenshots:
  - /assets/ecolanding/2.webp
  - /assets/ecolanding/3.webp
  - /assets/ecolanding/4.webp
  - /assets/ecolanding/5.webp
  - /assets/ecolanding/6.webp
---

### Resumen del Proyecto

EcoExport es una landing page desarrollada para una empresa argentina que compra y exporta chatarra metálica no ferrosa y ferrosa — cobre, bronce, aluminio y acero inoxidable — a compradores industriales en Asia, Europa y América. La página posiciona a EcoExport como un socio integral de exportación: desde el retiro en planta y la clasificación del material hasta la documentación aduanera y el embarque final. El sitio está disponible en [eco-landing-pearl.vercel.app](https://eco-landing-pearl.vercel.app).

#### Objetivos

- **Comunicar el Servicio con Claridad** — Transmitir una cadena logística compleja (retiro → clasificación → exportación) de forma que vendedores no técnicos — dueños de industrias, demoledores y particulares — puedan entenderla y confiar en ella de inmediato.
- **Generar Consultas de Cotización** — Dirigir a los visitantes hacia un formulario de contacto con selección previa del tipo de material, reduciendo la fricción para quienes consultan por primera vez.
- **Reforzar la Credibilidad Ambiental** — Integrar mensajes de sustentabilidad (economía circular, CO₂ evitado) junto al argumento comercial, apoyando el posicionamiento regulatorio y la diferenciación de marca.

#### Flujo de Trabajo del Proyecto

- **Arquitectura de Página Única** — Todo el contenido vive en una sola página scrolleable (`index.astro`) compuesta por ocho componentes — Header, Hero, Marquee, Service, Materials, Process, About, Contact y Footer — cada uno correspondiente a un paso distinto del embudo de conversión.
- **Build Orientado a Componentes** — Cada sección es un componente `.astro` aislado, con markup y lógica ubicados juntos, facilitando las actualizaciones de contenido a futuro.
- **Sistema de Diseño Propio** — Una paleta de color `leaf` (11 pasos, de `leaf-50` a `leaf-950`) y un acento `bark` se definieron como propiedades CSS personalizadas mediante el bloque `@theme` de Tailwind v4, eliminando la necesidad de un archivo de configuración separado.
- **Reveal al Scroll** — Un `IntersectionObserver` en el layout revela progresivamente cada sección a medida que el usuario baja la página, aportando prolijidad visual sin necesidad de un framework JavaScript.
- **Deploy en Vercel** — Salida estática generada con `astro build`, desplegada en la red edge de Vercel sin runtime del lado del servidor.

#### Resultados e Impacto

- **Embudo Completo en una Sola Página** — La landing cubre todo el flujo de conversión — propuesta de valor, detalle del servicio, catálogo de materiales, proceso en cuatro pasos, presentación de la empresa y formulario de contacto — en un único scroll cohesivo.
- **Sin Dependencias de Runtime Externas** — El build final no envía JavaScript de ningún framework frontend; toda la interactividad está resuelta en aproximadamente 30 líneas de JS vanilla en el layout.
- **Accesible y Optimizada para Mobile** — Grillas responsivas, nav colapsable para móvil y SVGs decorativos con `aria-hidden` están incorporados desde el inicio.
