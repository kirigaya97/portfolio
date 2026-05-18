---
title: Romina Gaudiano — Landing Page Trading Mind
publishDate: 2026-03-18 00:00:00
img: /assets/gaudiano/1.png
img_alt: Screenshot de la landing page Trading Mind de Romina Gaudiano.
description: |
  Una landing page de conversión con alto nivel de refinamiento visual para una mentora de reprogramación mental dirigida a traders e inversores de alto riesgo.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/gaudiano/2.png,
  /assets/gaudiano/3.png,
  /assets/gaudiano/4.png,
  /assets/gaudiano/5.png
]
---

### Resumen del Proyecto
Romina Gaudiano es una especialista argentina en reprogramación mental aplicada desde la neurociencia, orientada a traders e inversores de alto riesgo. El proyecto es una landing page de página única en [mentoria.rominagaudiano.com](https://mentoria.rominagaudiano.com), diseñada para promover su mentoría 1:1 y el programa CryptoMind Pro Elite. El diseño pasó por múltiples variantes prototipadas antes de consolidarse en la "Opción 6" — una estética editorial oscura que refleja la gravedad y la precisión del mundo del trading.

##### Objetivos
- <b>Identidad de Marca:</b> Comunicar un posicionamiento premium mediante una paleta de navy, crema y cashmere combinada con tipografía serif Playfair Display y Lora.
- <b>Generación de Leads:</b> Impulsar aplicaciones calificadas a través de un formulario de contacto y un botón flotante de WhatsApp con mensaje prefijado.
- <b>Build Orientado al Rendimiento:</b> Entregar páginas rápidas y responsivas sin frameworks JavaScript del lado del cliente y con fuentes autoalojadas.
- <b>Protección contra Spam:</b> Implementar una estrategia de doble honeypot (nativo de Web3Forms + campo oculto personalizado) para filtrar bots sin fricción de CAPTCHA.
##### Flujo de Trabajo del Proyecto
- <b>Prototipado:</b> Se diseñaron y desarrollaron múltiples variantes de landing (opciones 1–6) para explorar el tono, la composición y la dirección visual antes de comprometerse con una versión final.
- <b>Sistema de Diseño:</b> Se estableció una paleta estricta en propiedades CSS personalizadas (`--navy`, `--cream`, `--cashm`) aplicada de forma consistente en todas las secciones, interacciones y animaciones.
- <b>Animaciones sin Librerías:</b> Todas las revelaciones de entrada se implementaron con animaciones CSS scroll-driven (`animation-timeline: view()`) e `IntersectionObserver` — sin GSAP ni librerías de terceros.
- <b>Pulido Interactivo:</b> Se incorporó un cursor personalizado de dos elementos (punto + anillo), transiciones de fondo de sección basadas en CSS `:has()` en el bloque de Pilares, revelación del hero con `clip-path` y un overlay de menú hamburguesa a pantalla completa.
- <b>Contacto y Comunicación:</b> Se integró Web3Forms (sin dependencia de DNS) como backend de formulario activo, con un endpoint serverless de Resend preservado en `src/pages/api/contact.ts` para migración futura una vez que el DNS salga de Wix.
- <b>Despliegue:</b> Deploy automático en Vercel en cada push a `master`, con Vercel Analytics y Speed Insights integrados en `BaseLayout.astro`.
##### Tecnologías Utilizadas
>Astro 6: Elegido como framework de sitio estático con el adaptador `@astrojs/vercel` para salida serverless y páginas sin JavaScript por defecto.
###
>Tailwind CSS 4: Utilizado vía `@tailwindcss/vite` para estilos utility-first; todos los tokens de diseño expresados como propiedades CSS personalizadas para theming dinámico.
###
>Web3Forms: Seleccionado como backend de formulario por no requerir configuración de DNS, desbloqueando el formulario de contacto mientras el DNS del dominio sigue gestionado por Wix.
###
>Fontsource (Playfair Display + Lora): Fuentes serif editoriales autoalojadas con subconjuntos solo-latin y pesos específicos para evitar la latencia del CDN de Google Fonts.
###
>Vercel Analytics + Speed Insights: Instrumentados a nivel de layout para monitorear rendimiento y comportamiento de visitantes en producción.
###
>Resend (fallback inactivo): Un endpoint serverless está preservado en el código y se activará una vez que el dominio remitente sea verificado tras la migración de DNS.
##### Resultados e Impacto
- <b>Exploración Multi-opción Entregada:</b> Se construyeron y evaluaron seis prototipos de landing distintos, resultando en un diseño final que refleja con precisión el posicionamiento premium de la cliente.
- <b>Animaciones sin Dependencias:</b> Todas las revelaciones en scroll, efectos de cursor y transiciones de sección se logran con CSS nativo y la API de scroll-driven animations, manteniendo el bundle liviano y el renderizado fluido.
- <b>Optimización Responsiva de Imágenes:</b> Las imágenes del hero se sirven a través del componente `<Image />` de Astro con `srcset` responsivo, logrando una reducción significativa de tamaño de archivo (documentada como ~512kB → ~40kB en los tamaños de visualización).
- <b>Flujo de Contacto Resiliente:</b> La integración de Web3Forms desbloqueó la entrega de formularios pese a las restricciones de DNS, con el fallback de Resend listo para activarse sin reescribir el código.
- <b>Infraestructura Lista para Producción:</b> Deploy continuo en Vercel, sitemap autogenerado, robots.txt y analítica instrumentada desde el primer día.
