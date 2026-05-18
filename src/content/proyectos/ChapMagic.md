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
technologies:
  - name: Astro v5
    note: Modelo híbrido SSG + SSR — páginas estáticas con ruta API del lado del servidor para el formulario de contacto.
  - name: Tailwind CSS v4
    note: Motor basado en Vite con tokens @theme para un sistema de diseño consistente y mantenible.
  - name: GSAP (ScrollTrigger + Timeline)
    note: Potencia todas las animaciones cinematográficas, desde reveals del hero hasta parallax por sección.
  - name: Lenis
    note: Scroll ultra fluido que eleva la sensación premium del sitio.
  - name: Resend
    note: Entrega de correo transaccional desde el formulario de contacto con alta confiabilidad.
  - name: Vercel
    note: Plataforma de despliegue que habilita el modo SSR híbrido para la API de contacto.
  - name: TypeScript
    note: Props de componentes, handlers de API y configuración del sitio con tipado seguro.
screenshots:
  - /assets/chapmagic/2.png
  - /assets/chapmagic/3.png
  - /assets/chapmagic/4.png
  - /assets/chapmagic/5.png
---

### Resumen del Proyecto

ChapMagic es una landing page premium para Chap, mago y mentalista profesional que actuó en más de 14 países, acumuló más de 2.000 shows y más de 40.000 espectadores — incluyendo participaciones en Got Talent España, donde los jueces lo elogiaron en vivo. El sitio funciona como un escaparate orientado a la conversión para sus espectáculos corporativos, magia de recepción, shows teatrales y experiencias íntimas en sala Speak Easy, impulsando reservas a través de una interfaz bilingüe de alto nivel.

#### Objetivos

- **Elevación de Marca** — Trasladar la personalidad premium y misteriosa de ChapMagic a una identidad digital coherente en oro y obsidiana.
- **Alcance Bilingüe** — Atender a mercados de habla hispana e inglesa mediante el enrutamiento i18n nativo de Astro.
- **Generación de Leads** — Ofrecer un formulario de contacto seguro y listo para producción que filtre spam mientras convierte visitas en consultas de reserva.
- **Rendimiento y Animación** — Entregar experiencias cinematográficas basadas en scroll sin sacrificar la velocidad de carga.

#### Flujo de Trabajo del Proyecto

- **Sistema de Diseño** — Se estableció una paleta oscura de lujo — Oro (`#D4AF37`), Obsidiana (`#0A0A0A`), Marfil (`#F5F0E8`) — con tipografía Playfair Display en títulos e Inter en cuerpo de texto, definidas como tokens `@theme` de Tailwind 4.
- **Arquitectura de Animaciones** — Se implementaron timelines personalizados de GSAP para la sección Hero, parallax y reveals escalonados basados en ScrollTrigger, y un cursor dorado "magnético" a medida para escritorio.
- **UX Híbrida en Mobile** — Las cards de espectáculos se diseñaron con auto-reveal en mobile (vía ScrollTrigger) e interacciones hover en escritorio, adaptándose fluidamente a cada contexto.
- **Implementación de i18n** — Se construyeron versiones completamente localizadas en español e inglés usando el enrutamiento dinámico `[lang]` de Astro, con un `site-config.json` centralizado como única fuente de verdad para todas las traducciones y contenidos.
- **Formulario de Contacto y Anti-Spam** — Se desarrolló un endpoint API del lado del servidor (SSR vía Vercel) que integra Resend para entrega de correo confiable, protegido por un campo honeypot invisible y una guardia de detección de bots basada en timestamp.
- **Navegación Fluida** — Se integró Lenis smooth scrolling y un menú mobile "Liquid" personalizado para una sensación premium en toda la experiencia.

#### Resultados e Impacto

- **Sitio Bilingüe Completo** — Experiencia ES/EN completamente localizada entregada vía i18n de Astro, ampliando el alcance de ChapMagic a mercados de habla inglesa.
- **Sistema de Animaciones Cinematográfico** — El hero potenciado por GSAP, los reveals de secciones activados por scroll y el cursor magnético crean una experiencia de usuario distintiva y de alta gama, coherente con la presencia escénica del artista.
- **Formulario de Contacto Resistente al Spam** — La protección de doble capa (honeypot + guardia de timestamp) garantiza que las consultas genuinas lleguen al cliente sin filtrado manual.
- **Arquitectura Orientada al Rendimiento** — Build estático de Astro con SSR solo donde se necesita, minimizando el tamaño del bundle y el tiempo de interactividad.
- **Gestión de Contenido Centralizada** — Todas las traducciones, descripciones de shows, estadísticas y enlaces viven en un único `site-config.json`, haciendo que las actualizaciones de contenido futuras sean directas sin tocar el código de los componentes.
