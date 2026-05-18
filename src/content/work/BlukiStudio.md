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
technologies:
  - name: Next.js 16 (App Router)
    note: Server/client component model with safe Three.js SSR exclusion.
  - name: React Three Fiber v9
    note: React binding for Three.js — scene composition with hooks.
  - name: "@react-three/drei"
    note: Provides useGLTF for model loading and Preload for asset prefetching.
  - name: Three.js r183
    note: Core 3D engine for math utilities, color construction, and renderer configuration.
  - name: GSAP + ScrollTrigger
    note: Animation library synchronized with Lenis via the GSAP ticker for frame-accurate scroll.
  - name: Lenis
    note: Smooth scroll with exponential-decay easing driving the shared scroll progress value.
  - name: Tailwind CSS v4
    note: Utility-first styles for the minimal DOM overlay.
screenshots:
  - /assets/blukistudio/2.png
  - /assets/blukistudio/3.png
  - /assets/blukistudio/4.png
  - /assets/blukistudio/5.png
---

### Project Overview

Bluki Studio is a creative digital agency portfolio built as a technical proof-of-concept for immersive 3D web experiences. The site centers on a single abstract 3D model — a petal-and-core sculpture — that reacts to scroll position in real time, rotating through three full turns and shifting across the screen as the user scrolls. The project explores a dual-layer rendering architecture where a fixed WebGL canvas sits behind a standard scrollable DOM layer, with both layers communicating through a shared mutable scroll state.

#### Objectives

- **3D Scroll Experience** — Demonstrate a scroll-driven 3D animation where object position, rotation, tilt, and scale all interpolate smoothly across three keyframe sections.
- **Performance-First Rendering** — Keep the WebGL canvas at a stable 60 FPS using ACES filmic tone mapping, a capped pixel ratio of 2x, and ACESFilmic tone mapping configured directly on the renderer.
- **Clean Architecture** — Separate canvas and DOM concerns into distinct layers so future content sections can be added without touching 3D code.
- **SSR Safety** — Load all Three.js components via `next/dynamic` with `ssr: false` to prevent hydration errors in the Next.js App Router.

#### Project Workflow

- **Scaffold and Config** — Started from `create-next-app` with TypeScript and Tailwind CSS, then added `raw-loader` webpack rules for GLSL shader imports and configured `next.config.ts` accordingly.
- **Lenis + GSAP Sync** — Integrated Lenis smooth scroll with GSAP's ticker to ensure `ScrollTrigger.update()` fires on every animation frame, preventing scroll-driven animations from drifting.
- **Shared Scroll State** — Created a lightweight mutable object (`scrollState`) updated by both the Lenis callback and a native scroll fallback, readable inside `useFrame` without causing React re-renders.
- **3D Scene Assembly** — Loaded a custom Draco-compressed GLB model (`abstract_core.glb`), auto-scaled it to a normalized bounding box, and remapped its materials by name — dark matte blue-grey petals and a glowing emissive core.
- **Camera Rig** — Added a `CameraRig` component that pans the camera on the X axis opposite to the model's lateral movement, doubling the perceived depth shift per section.
- **Lighting** — Used a multi-directional soft light setup (hemisphere + three directional lights) to avoid specular hot spots on the metallic materials.
- **Error Boundary** — Wrapped the entire canvas in a React `CanvasErrorBoundary` so WebGL failures degrade silently rather than crashing the page.

#### Results and Impact

- **Technical Foundation** — Establishes a proven architecture pattern — fixed canvas + scrollable DOM + shared mutable state — that can be extended with additional sections, shaders, or post-processing effects.
- **Smooth Animation** — Scroll progress is independently lerped in both the model and the camera rig at different lag rates, producing a parallax-like depth effect without any additional geometry.
- **Cross-Browser Stability** — ACES filmic tone mapping and Intel/ANGLE-specific renderer flags resolve white blowout and color flickering observed on integrated GPU hardware.
