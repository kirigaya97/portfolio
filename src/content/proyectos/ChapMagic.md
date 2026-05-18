---
title: ChapMagic — Landing Page de Mago y Mentalista
publishDate: 2026-02-11 00:00:00
img: /assets/chapmagic/1.png
img_alt: Captura de pantalla de la sección hero de la landing page de ChapMagic.
description: |
  Una landing page bilingüe premium y de alto rendimiento para ChapMagic — mago y mentalista — construida con animaciones cinematográficas, un formulario de contacto listo para producción y un sistema de diseño en oro y obsidiana.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/chapmagic/2.png,
  /assets/chapmagic/3.png,
  /assets/chapmagic/4.png,
  /assets/chapmagic/5.png
]
---

### Resumen del proyecto
ChapMagic es una landing page premium para Chap, mago y mentalista profesional que actuó en más de 14 países, acumuló más de 2.000 shows y más de 40.000 espectadores — incluyendo participaciones en Got Talent España, donde los jueces lo elogiaron en vivo. El sitio funciona como un escaparate orientado a la conversión para sus espectáculos corporativos, magia de recepción, shows teatrales y experiencias íntimas en sala Speak Easy, impulsando reservas a través de una interfaz bilingüe de alto nivel.

##### Objetivos
- <b>Elevación de marca:</b> Trasladar la personalidad premium y misteriosa de ChapMagic a una identidad digital coherente en oro y obsidiana.
- <b>Alcance bilingüe:</b> Atender a mercados de habla hispana e inglesa mediante el enrutamiento i18n nativo de Astro.
- <b>Generación de leads:</b> Ofrecer un formulario de contacto seguro y listo para producción que filtre spam mientras convierte visitas en consultas de reserva.
- <b>Rendimiento y animación:</b> Entregar experiencias cinematográficas basadas en scroll sin sacrificar la velocidad de carga.
##### Flujo de trabajo del proyecto
- <b>Sistema de diseño:</b> Se estableció una paleta oscura de lujo — Oro (`#D4AF37`), Obsidiana (`#0A0A0A`), Marfil (`#F5F0E8`) — con tipografía Playfair Display en títulos e Inter en cuerpo de texto, definidas como tokens `@theme` de Tailwind 4.
- <b>Arquitectura de animaciones:</b> Se implementaron timelines personalizados de GSAP para la sección Hero, parallax y reveals escalonados basados en ScrollTrigger, y un cursor dorado "magnético" a medida para escritorio.
- <b>UX híbrida en mobile:</b> Las cards de espectáculos se diseñaron con auto-reveal en mobile (vía ScrollTrigger) e interacciones hover en escritorio, adaptándose fluidamente a cada contexto.
- <b>Implementación de i18n:</b> Se construyeron versiones completamente localizadas en español e inglés usando el enrutamiento dinámico `[lang]` de Astro, con un `site-config.json` centralizado como única fuente de verdad para todas las traducciones y contenidos.
- <b>Formulario de contacto y anti-spam:</b> Se desarrolló un endpoint API del lado del servidor (SSR vía Vercel) que integra Resend para entrega de correo confiable, protegido por un campo honeypot invisible y una guardia de detección de bots basada en timestamp.
- <b>Navegación fluida:</b> Se integró Lenis smooth scrolling y un menú mobile "Liquid" personalizado para una sensación premium en toda la experiencia.
##### Tecnologías utilizadas
>Astro v5: Elegido por su modelo híbrido SSG + SSR — páginas estáticas con una ruta API del lado del servidor activa para el formulario de contacto.
###
>Tailwind CSS v4: Se adoptó el nuevo motor basado en Vite con tokens `@theme` para un sistema de diseño consistente y mantenible.
###
>GSAP (ScrollTrigger + Timeline): Potencia todas las animaciones cinematográficas, desde los reveals del hero hasta el parallax basado en scroll en cada sección.
###
>Lenis: Proporciona un comportamiento de scroll ultra fluido que eleva la sensación premium del sitio.
###
>Resend: Gestiona la entrega de correo transaccional desde el formulario de contacto con alta confiabilidad.
###
>Vercel: Plataforma de despliegue que habilita el modo SSR híbrido necesario para la API de contacto del lado del servidor.
###
>TypeScript: Utilizado en todo el proyecto para props de componentes, handlers de API y configuración del sitio con tipado seguro.

##### Resultados e impacto
- <b>Sitio bilingüe completo:</b> Experiencia ES/EN completamente localizada entregada vía i18n de Astro, ampliando el alcance de ChapMagic a mercados de habla inglesa.
- <b>Sistema de animaciones cinematográfico:</b> El hero potenciado por GSAP, los reveals de secciones activados por scroll y el cursor magnético crean una experiencia de usuario distintiva y de alta gama, coherente con la presencia escénica del artista.
- <b>Formulario de contacto resistente al spam:</b> La protección de doble capa (honeypot + guardia de timestamp) garantiza que las consultas genuinas lleguen al cliente sin filtrado manual.
- <b>Arquitectura orientada al rendimiento:</b> Build estático de Astro con SSR solo donde se necesita, minimizando el tamaño del bundle y el tiempo de interactividad.
- <b>Gestión de contenido centralizada:</b> Todas las traducciones, descripciones de shows, estadísticas y enlaces viven en un único `site-config.json`, haciendo que las actualizaciones de contenido futuras sean directas sin tocar el código de los componentes.
