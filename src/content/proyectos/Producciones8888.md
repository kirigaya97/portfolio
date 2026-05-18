---
title: Landing Page de 8888 Producciones
publishDate: 2026-05-05 00:00:00
img: /assets/producciones8888/1.png
img_alt: Captura de pantalla de la landing page de 8888 Producciones con el diseño brutalista en verde ácido.
description: |
  Una landing de alto impacto construida para una productora audiovisual, estudio de grabación y casa de management de artistas en Buenos Aires — fusionando Brutalismo Multimodal con estética Future-Pop.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/producciones8888/2.png,
  /assets/producciones8888/3.png,
  /assets/producciones8888/4.png,
  /assets/producciones8888/5.png
]
---

### Descripción del Proyecto
8888 Producciones es una productora audiovisual, estudio de grabación y casa de management de artistas con base en Buenos Aires, que opera en la intersección entre tecnología y expresión creativa pura. La landing fue construida para presentar cuatro verticales de servicio — Producción Audiovisual, Estudio de Grabación, Roster de Artistas y Eventos & Live — bajo una identidad visual propia y opinionada, definida por los lineamientos de la marca: Brutalismo Multimodal con estética Future-Pop. El sitio se despliega como una MPA estática con Astro 6 en Vercel, con un índice público "en construcción" que dirige a los prospectos a reservar sesiones, y una ruta `/preview` que contiene la experiencia completa.

##### Objetivos
- <b>Traducción de Marca:</b> Implementar fielmente la identidad visual documentada por el cliente — Verde Ácido (`#B6F700`), Negro Profundo, radios cero (brutalismo) y un sistema tipográfico de tres fuentes editoriales (Newsreader, Space Grotesk, Inter).
- <b>Primera Impresión Animada:</b> Crear una secuencia de carga cinematográfica que cuente `0000 → 8888`, haga crecer una barra de progreso ácida, flashee la pantalla y luego se vaya con un barrido — ejecutándose solo una vez por sesión del navegador mediante `sessionStorage`.
- <b>Arquitectura de Secciones:</b> Entregar las cinco secciones de contenido (Manifiesto, Servicios, Roster, Reel, Estudio) con navegación editorial numerada y un formulario de contacto completamente funcional con checkboxes por tipo de proyecto.
- <b>Pulido de Interacción:</b> Incorporar scroll-reveals con Motion One, stagger palabra por palabra en el hero, un marquee CSS infinito y un cursor personalizado en verde ácido con `mix-blend-mode: difference` que escala al hacer hover.

##### Flujo de Trabajo
- <b>Sistema de Diseño Primero:</b> Los lineamientos de marca del cliente se tradujeron a tokens de diseño en Tailwind CSS v4 (`@theme`) — paleta, espaciado, radios y utilidades tipográficas nombradas — antes de escribir un solo componente.
- <b>Descomposición en Componentes:</b> La página se dividió en 13 componentes Astro enfocados (Loader, Hero, Manifiesto, Servicios, Roster, Reel, Estudio, Contacto, Marquee, Header, Footer, Cursor, GrainOverlay), cada uno responsable de una sola preocupación visual.
- <b>Estrategia de Animación:</b> Se usó el hook `inView` de Motion One para los elementos `[data-reveal]` y `[data-stagger]`, manteniendo toda la animación orientada al scroll por debajo de ~3.8 KB; los `@keyframes` de CSS manejan de forma independiente el contador del loader, el marquee y el overlay de grano.
- <b>Performance y Accesibilidad:</b> Salida estática con el modo SSG por defecto de Astro, imágenes con carga diferida, guarda `prefers-reduced-motion` en todas las animaciones y `aria-hidden` en cada elemento decorativo.
- <b>Integración de Smooth Scroll:</b> Lenis se integró a nivel de layout para proporcionar scroll con inercia, sincronizado con una barra de progreso verde ácido en el header.

##### Tecnologías Utilizadas
>Astro 6: Framework MPA estático elegido por su salida sin JavaScript por defecto, aislamiento de componentes y despliegue rápido en Vercel.
###
>Tailwind CSS v4: Usado mediante el plugin de Vite con tokens `@theme` para aplicar el sistema de marca sin archivo de configuración.
###
>Motion One: Librería ligera de scroll-reveal y micro-animaciones (~3.8 KB) para efectos de stagger activados con `inView`.
###
>Lenis: Librería de smooth-scroll que provee desplazamiento con inercia sincronizado con el indicador de progreso del header.

##### Resultados e Impacto
- <b>Implementación Completa de Marca:</b> La paleta Verde Ácido / Negro Profundo, los radios brutalistas en cero y el trío de tipografías editoriales se aplican de forma consistente en cada componente, directamente desde el archivo `lineamientos.html` del cliente.
- <b>Experiencia de Carga Cinematográfica:</b> El loader `0000 → 8888` con contador suavizado, barra ácida en crecimiento y salida con flash-barrido se ejecuta una vez por sesión, estableciendo una impresión de marca inmediata y memorable.
- <b>Cuatro Verticales de Servicio Entregadas:</b> Producción Audiovisual, Estudio de Grabación (con specs de Genelec 8351B / SSL Origin 32 / Neve · API · UA), Roster de Artistas (6 artistas en grilla de hover escala de grises a color) y Eventos & Live, todas completamente estructuradas y navegables.
- <b>Profundidad de Interacción:</b> Cursor personalizado, overlay de grano, barra de progreso sincronizada al scroll, reveal del hero con stagger por palabra y strip de marquee CSS combinan para producir una UI pulida y lista para producción sin overhead de ningún framework JavaScript.
- <b>Responsive Mobile-First:</b> Layout adaptativo con tipografía fluida basada en `clamp()`, SVGs de barras de sonido ocultos en pantallas pequeñas y menú móvil a pantalla completa activado desde un botón brutalista "MENU".
