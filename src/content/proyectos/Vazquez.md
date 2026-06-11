---
title: Vázquez Ilusionista — Desarrollo de Landing Page
publishDate: 2026-02-11 00:00:00
img: /assets/vazquez/1.webp
img_alt: Captura de pantalla de la sección hero del sitio Vázquez Ilusionista.
description: |
  Una landing page cinematográfica premium para Fernando Vázquez, mago y mentalista argentino, diseñada para convertir tráfico de redes en reservas de shows.
tags:
  - Design
  - Dev
  - Frontend
technologies:
  - name: Astro v5
    note: Salida estática con SSR opcional para entregas rápidas y rutas de API serverless limpias.
  - name: Tailwind CSS v4
    note: Motor basado en Vite con bloque `@theme` personalizado para centralizar los tokens de diseño en todo el proyecto.
  - name: GSAP + ScrollTrigger
    note: Motor principal de animación para la grilla del hero, reseñas con pin de scroll, cursor magnético y transiciones de reveal.
  - name: Lenis
    note: Librería de scroll suave que provee la base de inercia necesaria para el correcto funcionamiento de GSAP ScrollTrigger.
  - name: Resend
    note: Proveedor de email transaccional conectado al endpoint serverless del formulario para garantizar la entrega al cliente.
  - name: Sharp
    note: Pipeline de optimización de imágenes de Astro para servir assets en WebP con el tamaño correcto.
screenshots:
  - /assets/vazquez/2.webp
  - /assets/vazquez/3.webp
  - /assets/vazquez/4.webp
  - /assets/vazquez/5.webp
  - /assets/vazquez/6.webp
---

### Resumen del Proyecto

Vázquez Ilusionista es el sitio promocional oficial de Fernando Vázquez, mago y mentalista profesional radicado en Argentina. El sitio funciona como una landing page de alta conversión orientada a organizadores de eventos corporativos, fiestas privadas y espectáculos teatrales. Cada decisión de diseño e ingeniería fue tomada para reflejar el prestigio y el misterio de la experiencia en vivo.

#### Objetivos

- **Experiencia de Marca** — Crear una presencia digital premium y cinematográfica que replique la atmósfera de los shows en vivo de Fernando.
- **Foco en Conversión** — Generar consultas y reservas para tres formatos de show diferenciados: magia de cerca, eventos privados y eventos corporativos.
- **Arquitectura Performante** — Desarrollar con la generación estática de Astro para lograr tiempos de carga rápidos, manteniendo soporte para el envío de formularios vía endpoints serverless.
- **Experiencia Mobile** — Proveer una experiencia mobile adaptada con scroll vertical estilo TikTok, independiente del tríptico de escritorio.

#### Flujo de Trabajo del Proyecto

- **Definición de Marca** — Se estableció un sistema de diseño oscuro y refinado con una paleta de acento en violeta profundo (`#9582D9`), tipografía Playfair Display para títulos e Inter para cuerpo de texto, alineado con la identidad visual preexistente.
- **Arquitectura de Componentes** — Se construyó un layout de página única con secciones animadas de forma independiente — Hero, Espectáculos, VideoTríptico, JuryFeedback, Reseñas JuryVIP, Sobre Fer y Contacto — cada una accionada por GSAP ScrollTrigger.
- **Animaciones Cinematográficas** — Se implementó un hero con grilla de crossfade de 105 imágenes, fondo de ruido procedural con filtro SVG, elemento de estrella mágica en órbita 3D y una cortina de intro persistida por sesión con desbloqueo de audio.
- **Experiencia de Video Adaptativa** — En escritorio se renderiza un tríptico interactivo de tres columnas con transiciones B&N-a-color y desactivación espacial del mute; en mobile se presenta un feed vertical con scroll por snap y superposición de UI de redes sociales.
- **Contacto Serverless** — Se integró la API de Resend mediante un endpoint de servidor de Astro (`/api/send-email`) para la entrega confiable del formulario sin necesidad de un backend dedicado.

#### Resultados e Impacto

- **Entrega Cinematográfica** — El sitio se despliega con una experiencia completamente animada y lista para producción — cortina de intro, grilla de crossfade en el hero, reseñas con pin de scroll y reels de video adaptativos — sin dependencias de CMS de terceros.
- **Cobertura de Segmentos** — Los tres segmentos de reserva (magia de recepción, eventos privados, marketing corporativo) están representados con tarjetas de show dedicadas y copy optimizado en español rioplatense.
- **Deploy en Vercel** — El proyecto está desplegado y disponible en `vazquez-v2.vercel.app`, aprovechando el adaptador de Vercel de Astro para una entrega optimizada en el edge.
- **Contenido Mantenible** — Todo el copy del sitio, los datos de shows, colores y etiquetas de navegación están centralizados en un único `site-config.json`, lo que simplifica futuras actualizaciones de contenido sin tocar el código de los componentes.
