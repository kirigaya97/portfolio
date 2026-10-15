---
title: "Bonus+: Landing de una App para Coordinar el Cuidado de Adultos Mayores"
publishDate: 2026-05-29 00:00:00
url: https://bonus.nub3.com.ar
img: /assets/bonusplus/1.webp
img_alt: Hero de la landing de Bonus+ con el título "Todo el cuidado de tus padres, en un solo lugar" junto a un mockup de celular con la pantalla de inicio de la app y su botón de emergencia.
description: |
  La landing pública de Bonus+, un producto de Nub3 que ayuda a las familias a coordinar el cuidado de sus padres mayores: un sitio estático de doce secciones hecho con Astro y Tailwind, con datos estructurados para buscadores y vías de contacto que no necesitan backend.
tags:
  - Design
  - Dev
  - Frontend
  - Marketing
technologies:
  - name: Astro 6
    note: Salida estática con un componente por sección, compuestos en una única página de inicio.
  - name: Tailwind CSS 4
    note: Integrado con el plugin de Vite, junto con una capa de tokens escrita a mano en CSS plano.
  - name: TypeScript
    note: Configuración estricta del proyecto, verificada con @astrojs/check.
  - name: CSS Custom Properties
    note: Paleta, escala tipográfica fluida, espaciados y tokens de movimiento espejados del manual de identidad de Bonus+.
  - name: DM Sans
    note: Una única familia tipográfica en todo el sitio, según lo define la identidad de marca.
  - name: JSON-LD (Organization, FAQPage)
    note: Datos estructurados inyectados en el head para que los buscadores lean la empresa y las preguntas frecuentes.
  - name: "@astrojs/sitemap"
    note: Sitemap generado en el build.
  - name: Vercel
    note: Hosting estático, servido en un subdominio propio de nub3.com.ar.
screenshots:
  - /assets/bonusplus/2.webp
  - /assets/bonusplus/3.webp
  - /assets/bonusplus/4.webp
  - /assets/bonusplus/5.webp
  - /assets/bonusplus/6.webp
---

### Resumen del Proyecto

Bonus+ ([bonus.nub3.com.ar](https://bonus.nub3.com.ar)) es una app para familias que coordinan a distancia el cuidado de sus padres mayores: dashboard familiar, cuidadores, servicios profesionales a domicilio, productos y recetas electrónicas en un solo lugar. Es un producto bajo Nub3, el estudio de software con el que trabajo. Esta entrada cubre su landing pública.

El sitio arrancó como landing de un producto de teleasistencia y a mitad de camino se realineó a un posicionamiento de coordinación, con los socios (Atempo para teleasistencia 24/7, RCTA para recetas e historia clínica) declarados abiertamente en lugar de presentarse como tecnología propia.

#### Objetivos

- **Decir qué es, rápido** - Explicar en el hero que se trata de coordinar todo el cuidado de un padre en un solo lugar, con un mockup de la app real.
- **Dos públicos, dos caminos** - Atender a las familias directamente y ofrecer una entrada aparte para instituciones.
- **Transparencia con los socios** - Darle a Atempo y RCTA su propia sección, más una sección de protección para el seguro de cuidadores y del hogar.
- **Sin backend** - Resolver el contacto con un link `mailto:` y uno de WhatsApp, sin formulario, base de datos ni tracking que mantener.
- **Que se encuentre** - Entregar metadatos y datos estructurados para que el sitio se lea bien en buscadores.

#### Flujo de Trabajo del Proyecto

- **Construcción spec-first** - Escribí el spec de diseño y un plan de implementación tarea por tarea antes de codear, y lo ejecuté con subagents en oleadas. El repo conserva el spec, el plan, los prompts de ejecución y los logs de verificación en `docs/`.
- **Tokens de marca** - Traduje el manual de identidad de Bonus+ a CSS custom properties: primario verde azulado (`#0d7b6b`), neutros cálidos, un naranja reservado para emergencia y una escala tipográfica fluida en DM Sans.
- **Página de doce secciones** - Un componente Astro por sección (hero, problema, cómo funciona, servicios, protección, alianzas, instituciones, cómo empezar, FAQ y CTA final), más nav y footer. Un componente `Reveal` compartido maneja la animación de entrada con `IntersectionObserver` y respeta `prefers-reduced-motion`.
- **El pivote** - Reescribí el copy de hero, seguridad, salud y FAQ al posicionamiento de coordinación, consolidé los socios en una sola sección y saqué los precios.
- **Pasada mobile** - Corregí el radio del marco del mockup del hero y el padding inferior en pantallas chicas, sumé una barra fija de CTA abajo y recorté un 40% el espaciado vertical entre secciones.
- **SEO** - Configuré `lang` en `es-AR`, sumé JSON-LD de Organization y FAQPage, assets de Open Graph y un sitemap generado.

#### Resultados e Impacto

- **Entregado en cuatro días** - El historial del repo va del 2026-05-26 al 2026-05-29 en 49 commits, incluido el pivote de posicionamiento.
- **Contacto sin backend** - Todos los caminos de conversión son links estáticos (email, WhatsApp y un email institucional aparte), así que no hay nada que hostear ni asegurar más allá del propio sitio.
- **Datos estructurados para buscadores** - El JSON-LD de Organization y FAQPage se genera a partir del mismo contenido que renderiza la página.
- **Un código base chico y consistente** - Diez componentes de sección, un layout compartido y un archivo de tokens componen todo el diseño, así que una sección nueva sigue el patrón existente.
- **En vivo en un subdominio de Nub3** - El sitio se sirve en bonus.nub3.com.ar y vincula el producto con el estudio.
