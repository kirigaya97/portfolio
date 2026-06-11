---
title: Bluki Studio — Portfolio 3D para Agencia Creativa
publishDate: 2026-03-20 00:00:00
img: /assets/blukistudio/1.webp
img_alt: Captura de pantalla del portfolio 3D de Bluki Studio — modelo abstracto rotando sobre fondo oscuro.
description: |
  Un portfolio 3D impulsado por scroll para una agencia creativa digital, construido con React Three Fiber y Lenis smooth scroll.
tags:
  - Dev
  - Design
  - Frontend
technologies:
  - name: Next.js 16 (App Router)
    note: Modelo de componentes servidor/cliente con exclusión segura de Three.js del SSR.
  - name: React Three Fiber v9
    note: Binding de React para Three.js — composición de escena con hooks.
  - name: "@react-three/drei"
    note: Provee useGLTF para carga de modelos y Preload para prefetch de assets.
  - name: Three.js r183
    note: Motor 3D principal para utilidades matemáticas, colores y configuración del renderer.
  - name: GSAP + ScrollTrigger
    note: Biblioteca de animación sincronizada con Lenis para scroll con precisión de frame.
  - name: Lenis
    note: Smooth scroll con easing de decaimiento exponencial que alimenta el progreso de scroll compartido.
  - name: Tailwind CSS v4
    note: Estilos utilitarios para el overlay DOM mínimo.
screenshots:
  - /assets/blukistudio/2.webp
  - /assets/blukistudio/3.webp
  - /assets/blukistudio/4.webp
  - /assets/blukistudio/5.webp
  - /assets/blukistudio/6.webp
  - /assets/blukistudio/7.webp
---

### Resumen del Proyecto

Bluki Studio es un portfolio para agencia creativa digital construido como prueba de concepto técnica para experiencias web 3D inmersivas. El sitio está centrado en un único modelo 3D abstracto — una escultura de pétalos y núcleo — que reacciona a la posición del scroll en tiempo real: rota tres vueltas completas y se desplaza lateralmente por la pantalla mientras el usuario hace scroll. El proyecto explora una arquitectura de doble capa donde un canvas WebGL fijo se ubica detrás de una capa DOM estándar desplazable, comunicándose a través de un estado de scroll compartido.

#### Objetivos

- **Experiencia 3D por Scroll** — Demostrar una animación 3D impulsada por scroll donde la posición, rotación, inclinación y escala del objeto se interpolan suavemente a través de tres secciones con keyframes definidos.
- **Renderizado Orientado al Rendimiento** — Mantener el canvas WebGL a 60 FPS estables utilizando tone mapping ACES filmic, una proporción de píxeles limitada a 2x y configuración directa del renderer.
- **Arquitectura Limpia** — Separar las responsabilidades del canvas y del DOM en capas independientes para que futuras secciones de contenido puedan agregarse sin tocar el código 3D.
- **Seguridad en SSR** — Cargar todos los componentes de Three.js mediante `next/dynamic` con `ssr: false` para prevenir errores de hidratación en el App Router de Next.js.

#### Flujo de Trabajo del Proyecto

- **Scaffold y Configuración** — Se partió de `create-next-app` con TypeScript y Tailwind CSS, luego se agregaron reglas webpack con `raw-loader` para importar shaders GLSL y se configuró `next.config.ts` en consecuencia.
- **Sincronización Lenis + GSAP** — Se integró Lenis smooth scroll con el ticker de GSAP para asegurar que `ScrollTrigger.update()` se ejecute en cada frame de animación, evitando que las animaciones basadas en scroll pierdan sincronía.
- **Estado de Scroll Compartido** — Se creó un objeto mutable liviano (`scrollState`) actualizado tanto por el callback de Lenis como por un listener nativo de scroll como fallback, legible dentro de `useFrame` sin generar re-renders en React.
- **Armado de la Escena 3D** — Se cargó un modelo GLB personalizado comprimido con Draco (`abstract_core.glb`), se autoescaló a un bounding box normalizado y se remapearon sus materiales por nombre — pétalos mate azul-gris oscuro y un núcleo emisivo brillante.
- **Camera Rig** — Se agregó un componente `CameraRig` que desplaza la cámara en el eje X en sentido opuesto al movimiento lateral del modelo, duplicando el efecto de profundidad percibido por sección.
- **Iluminación** — Se usó un esquema de iluminación suave multidireccional (hemisferio + tres luces direccionales) para evitar puntos especulares en los materiales metálicos.
- **Error Boundary** — Se envolvió el canvas completo en un `CanvasErrorBoundary` de React para que los fallos de WebGL degraden silenciosamente en lugar de romper la página.

#### Resultados e Impacto

- **Base Técnica Sólida** — Establece un patrón de arquitectura comprobado — canvas fijo + DOM desplazable + estado mutable compartido — que puede extenderse con secciones adicionales, shaders o efectos de post-procesamiento.
- **Animación Fluida** — El progreso del scroll se interpola de forma independiente en el modelo y en el camera rig con diferentes tasas de lag, generando un efecto de paralaje sin geometría adicional.
- **Estabilidad Cross-Browser** — El tone mapping ACES filmic y los flags específicos para Intel/ANGLE resuelven el blowout blanco y el flickering de colores observados en hardware de GPU integrada.
