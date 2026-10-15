---
title: "Atmósfera con presupuesto de performance"
description: "Una landing que parece un afiche de teatro no tiene por qué cargar como uno. El presupuesto vino primero y el diseño tuvo que entrar adentro."
publishDate: 2026-08-28
tags: ["Performance", "Diseño", "Astro"]
---

El intercambio de siempre se presenta como una ley natural: podés tener un sitio que transmita algo, o un sitio que cargue rápido. Elegí uno.

La landing de Guillermo Flores fue un buen lugar para ponerlo a prueba, porque el brief tiraba fuerte hacia lo primero. Un ilusionista y mentalista, un personaje de escenario y una dirección de arte que mezcla cuatro mundos a la vez: claroscuro gótico, tipografía de madera del Lejano Oeste, teatro y línea Art Nouveau. Ese es justo el tipo de brief que suele terminar en una librería de animación pesada, una pila de efectos y un reporte de Lighthouse que nadie quiere abrir.

## El presupuesto vino antes que el diseño

Antes de escribir un componente anoté tres números: **LCP por debajo de 2,5 segundos, CLS por debajo de 0,1 y menos de 100 KB de JavaScript en la primera carga.**

El orden importa. Un presupuesto que fijás después del diseño es una medición. Uno que fijás antes es una restricción, y las restricciones son las que moldean decisiones. A partir de ahí, cada efecto tuvo que responder la misma pregunta: ¿entra?

## Cómo se vio entrar adentro

**Sin GSAP para la parte difícil.** La sección de servicios es un slider cinemático fijado a pantalla completa con cuatro categorías. El reflejo es ir a GSAP y ScrollTrigger. En cambio escribí un motor chico de progreso de scroll en TypeScript plano, alimentado por Lenis. Hace una sola cosa, no necesita licencia y cuesta una fracción de los bytes.

**Solo opacidad y transform.** Todas las transiciones de la página, el revelado palabra por palabra del hero, el desplazamiento lento de las fotos, la línea de bronce que se dibuja sola, los numerales de capítulo en parallax, animan únicamente esas dos propiedades. Corren en el compositor, así que el navegador no recalcula layout ni repinta en cada frame. Esa sola regla deja afuera muchos efectos tentadores, y esa es la idea.

**Fuentes que no mueven la página.** Bodoni Moda, Cormorant Garamond e Inter están autoalojadas. Sin pedidos a terceros y sin un cambio tardío de fuente que empuje el layout. La tipografía carga con casi toda la atmósfera de este sitio, así que no podía ser además lo que rompiera el CLS.

**Islas solo donde algo es interactivo de verdad.** El sitio es Astro. La mayoría de las secciones se envían como HTML y CSS, y nada más.

## El movimiento reducido no es un agregado

Un sitio construido sobre movimiento tiene una responsabilidad con la gente a la que el movimiento le hace mal. Todas las animaciones respetan `prefers-reduced-motion`. Con esa opción activa, la página sigue siendo la misma: la misma tipografía, la misma paleta, los mismos ornamentos. Solo deja de moverse.

Eso también fue una buena prueba del diseño. Si la atmósfera hubiera desaparecido al frenar la animación, la atmósfera era la animación, y eso habría sido un diseño más débil.

## Lo que me llevo

El presupuesto no hizo el sitio más plano. Lo hizo más deliberado. Efectos que habría sumado porque podía quedaron afuera porque no entraban, y los que se quedaron tuvieron que ganarse sus bytes.

Las Core Web Vitals no son el objetivo de un sitio así. El objetivo es que quien contrata un evento corporativo desde el celular vea el escenario y no un spinner. Los números son solo la forma de saber que no cambiaste una cosa por la otra.
