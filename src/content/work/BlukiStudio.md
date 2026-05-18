---
title: Bluki Studio — 3D Creative Agency Portfolio
publishDate: 2026-03-20 00:00:00
img: /assets/blukistudio/1.png
img_alt: Screenshot of Bluki Studio 3D portfolio — abstract core model rotating on a dark background.
description: |
  A scroll-driven 3D portfolio for a creative digital agency, built with React Three Fiber and Lenis smooth scroll.
tags:
  - Dev
  - Design
  - Frontend
screenshots: [
  /assets/blukistudio/2.png,
  /assets/blukistudio/3.png,
  /assets/blukistudio/4.png,
  /assets/blukistudio/5.png
]
---

### Project Overview
Bluki Studio is a creative digital agency portfolio built as a technical proof-of-concept for immersive 3D web experiences. The site centers on a single abstract 3D model — a petal-and-core sculpture — that reacts to scroll position in real time, rotating through three full turns and shifting across the screen as the user scrolls. The project explores a dual-layer rendering architecture where a fixed WebGL canvas sits behind a standard scrollable DOM layer, with both layers communicating through a shared mutable scroll state.

##### Objectives
- <b>3D Scroll Experience:</b> Demonstrate a scroll-driven 3D animation where object position, rotation, tilt, and scale all interpolate smoothly across three keyframe sections.
- <b>Performance-First Rendering:</b> Keep the WebGL canvas at a stable 60 FPS using ACES filmic tone mapping, a capped pixel ratio of 2x, and ACESFilmic tone mapping configured directly on the renderer.
- <b>Clean Architecture:</b> Separate canvas and DOM concerns into distinct layers so future content sections can be added without touching 3D code.
- <b>SSR Safety:</b> Load all Three.js components via `next/dynamic` with `ssr: false` to prevent hydration errors in the Next.js App Router.

##### Project Workflow
- <b>Scaffold and Config:</b> Started from `create-next-app` with TypeScript and Tailwind CSS, then added `raw-loader` webpack rules for GLSL shader imports and configured `next.config.ts` accordingly.
- <b>Lenis + GSAP Sync:</b> Integrated Lenis smooth scroll with GSAP's ticker to ensure `ScrollTrigger.update()` fires on every animation frame, preventing scroll-driven animations from drifting.
- <b>Shared Scroll State:</b> Created a lightweight mutable object (`scrollState`) updated by both the Lenis callback and a native scroll fallback, readable inside `useFrame` without causing React re-renders.
- <b>3D Scene Assembly:</b> Loaded a custom Draco-compressed GLB model (`abstract_core.glb`), auto-scaled it to a normalized bounding box, and remapped its materials by name — dark matte blue-grey petals and a glowing emissive core.
- <b>Camera Rig:</b> Added a `CameraRig` component that pans the camera on the X axis opposite to the model's lateral movement, doubling the perceived depth shift per section.
- <b>Lighting:</b> Used a multi-directional soft light setup (hemisphere + three directional lights) to avoid specular hot spots on the metallic materials.
- <b>Error Boundary:</b> Wrapped the entire canvas in a React `CanvasErrorBoundary` so WebGL failures degrade silently rather than crashing the page.

##### Technologies Used
>Next.js 16 (App Router): Framework chosen for its server/client component model and `next/dynamic` for safe Three.js SSR exclusion.
###
>React Three Fiber v9: React binding for Three.js; enables scene composition with hooks and integrates naturally with the React lifecycle.
###
>@react-three/drei: Provides `useGLTF` for model loading and `Preload` for asset prefetching.
###
>Three.js r183: Core 3D engine; used directly for math utilities, color construction, and renderer configuration.
###
>GSAP + ScrollTrigger: Animation library synchronized with Lenis via the GSAP ticker for frame-accurate scroll animations.
###
>Lenis: Smooth scroll library with a custom easing curve (exponential decay) that drives the shared scroll progress value.
###
>Tailwind CSS v4: Utility-first styles for the minimal DOM overlay (wordmark, tagline, scroll hint).

##### Results and Impact
- <b>Technical Foundation:</b> Establishes a proven architecture pattern — fixed canvas + scrollable DOM + shared mutable state — that can be extended with additional sections, shaders, or post-processing effects.
- <b>Smooth Animation:</b> Scroll progress is independently lerped in both the model and the camera rig at different lag rates, producing a parallax-like depth effect without any additional geometry.
- <b>Cross-Browser Stability:</b> ACES filmic tone mapping and Intel/ANGLE-specific renderer flags resolve white blowout and color flickering observed on integrated GPU hardware.
