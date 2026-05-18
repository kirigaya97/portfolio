---
title: Vázquez Ilusionista — Desarrollo de Landing Page
publishDate: 2026-02-11 00:00:00
img: /assets/vazquez/1.png
img_alt: Captura de pantalla de la sección hero del sitio Vázquez Ilusionista.
description: |
  Una landing page cinematográfica premium para Fernando Vázquez, mago y mentalista argentino, diseñada para convertir tráfico de redes en reservas de shows.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/vazquez/2.png,
  /assets/vazquez/3.png,
  /assets/vazquez/4.png,
  /assets/vazquez/5.png
]
---

### Descripción del Proyecto
Vázquez Ilusionista es el sitio promocional oficial de Fernando Vázquez, mago y mentalista profesional radicado en Argentina. El sitio funciona como una landing page de alta conversión orientada a organizadores de eventos corporativos, fiestas privadas y espectáculos teatrales. Cada decisión de diseño e ingeniería fue tomada para reflejar el prestigio y el misterio de la experiencia en vivo.

##### Objetivos
- <b>Experiencia de Marca:</b> Crear una presencia digital premium y cinematográfica que replique la atmósfera de los shows en vivo de Fernando.
- <b>Foco en Conversión:</b> Generar consultas y reservas para tres formatos de show diferenciados: magia de cerca, eventos privados y eventos corporativos.
- <b>Arquitectura Performante:</b> Desarrollar con la generación estática de Astro para lograr tiempos de carga rápidos, manteniendo soporte para el envío de formularios vía endpoints serverless.
- <b>Experiencia Mobile:</b> Proveer una experiencia mobile adaptada con scroll vertical estilo TikTok, independiente del tríptico de escritorio.

##### Flujo de Trabajo
- <b>Definición de Marca:</b> Se estableció un sistema de diseño oscuro y refinado con una paleta de acento en violeta profundo (`#9582D9`), tipografía Playfair Display para títulos e Inter para cuerpo de texto, alineado con la identidad visual preexistente.
- <b>Arquitectura de Componentes:</b> Se construyó un layout de página única con secciones animadas de forma independiente — Hero, Espectáculos, VideoTríptico, JuryFeedback, Reseñas JuryVIP, Sobre Fer y Contacto — cada una accionada por GSAP ScrollTrigger.
- <b>Animaciones Cinematográficas:</b> Se implementó un hero con grilla de crossfade de 105 imágenes, fondo de ruido procedural con filtro SVG, elemento de estrella mágica en órbita 3D y una cortina de intro persistida por sesión con desbloqueo de audio.
- <b>Experiencia de Video Adaptativa:</b> En escritorio se renderiza un tríptico interactivo de tres columnas con transiciones B&N-a-color y desactivación espacial del mute; en mobile se presenta un feed vertical con scroll por snap y superposición de UI de redes sociales.
- <b>Contacto Serverless:</b> Se integró la API de Resend mediante un endpoint de servidor de Astro (`/api/send-email`) para la entrega confiable del formulario sin necesidad de un backend dedicado.

##### Tecnologías Utilizadas
>Astro v5: Elegido por su salida estática con SSR opcional, lo que permite entregas de página rápidas y rutas de API serverless limpias.
###
>Tailwind CSS v4: Motor basado en Vite utilizado con un bloque `@theme` personalizado para centralizar los tokens de diseño en todo el proyecto.
###
>GSAP + ScrollTrigger: Motor principal de animación que impulsa la grilla de presentación del hero, la sección de reseñas con pin de scroll, el cursor magnético y todas las transiciones de reveal.
###
>Lenis: Librería de scroll suave que provee la base de inercia necesaria para el correcto funcionamiento de GSAP ScrollTrigger.
###
>Resend: Proveedor de email transaccional conectado al endpoint serverless del formulario de contacto para garantizar la entrega en el inbox del cliente.
###
>Sharp: Utilizado a través del pipeline de optimización de imágenes incorporado en Astro para servir assets en WebP con el tamaño correcto.

##### Resultados e Impacto
- <b>Entrega Cinematográfica:</b> El sitio se despliega con una experiencia completamente animada y lista para producción — cortina de intro, grilla de crossfade en el hero, reseñas con pin de scroll y reels de video adaptativos — sin dependencias de CMS de terceros.
- <b>Cobertura de Segmentos:</b> Los tres segmentos de reserva (magia de recepción, eventos privados, marketing corporativo) están representados con tarjetas de show dedicadas y copy optimizado en español rioplatense.
- <b>Deploy en Vercel:</b> El proyecto está desplegado y disponible en `vazquez-v2.vercel.app`, aprovechando el adaptador de Vercel de Astro para una entrega optimizada en el edge.
- <b>Contenido Mantenible:</b> Todo el copy del sitio, los datos de shows, colores y etiquetas de navegación están centralizados en un único `site-config.json`, lo que simplifica futuras actualizaciones de contenido sin tocar el código de los componentes.
