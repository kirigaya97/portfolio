# Blog backlog

Ideas evaluadas y no incluidas en la primera tanda de 10 posts (agosto 2026).
Todas tienen material real y verificado detrás. Se dejan acá para implementación futura.

Fuentes de verdad: `~/CV/MASTER_PROFILE.md` y las entradas de `src/content/work/`.

## Suplentes

### 1. ~~Atmósfera con presupuesto de performance~~ → **ESCRITO** (2026-08-28)
**Proyecto:** Ilusionista (`src/content/work/Ilusionista.md`)
**Tesis:** lo visual no tiene por qué costar velocidad.
**Material:** LCP < 2,5 s, CLS < 0,1 y menos de 100 KB de JS en la primera carga, con una dirección de arte de cuatro mundos (gótico, western, teatral, art nouveau). Motor de scroll propio en TypeScript en lugar de GSAP. Transiciones solo en opacidad y transform, sobre el compositor. Respeta `prefers-reduced-motion`.
**Ángulo que refuerza:** front-end craft.

### 2. Canvas fijo + DOM scrolleable con estado mutable compartido
**Proyecto:** Bluki Studio (`src/content/work/BlukiStudio.md`)
**Tesis:** el patrón de doble capa explicado como patrón reutilizable, no como demo.
**Material:** canvas WebGL fijo detrás de una capa DOM estándar desplazable, comunicadas por un estado de scroll mutable compartido. Modelo GLB comprimido con Draco, autoescalado a bounding box normalizado, materiales remapeados por nombre.
**Ángulo que refuerza:** front-end craft, profundidad técnica.
**Nota:** es el más de nicho de los cuatro. Bueno para lectores técnicos, flojo para recruiters no técnicos.

### 3. PrestaShop vs WooCommerce
**Proyectos:** Brooksfield y Dorian Argentina
**Tesis:** dos e-commerce de indumentaria, dos plataformas, decisiones distintas.
**Material:** Brooksfield es PrestaShop con la suite IQIT (iqitelementor, mega menú, búsqueda en vivo) sobre un tema propio. Dorian es WordPress con tema Rey, Elementor Pro y WooCommerce, con variaciones vinculadas, aviso de reposición de stock, gift cards y sincronización de catálogo con Facebook y TikTok. Comparar manejo de variantes, ciclos de campaña y profundidad de catálogo.
**Ángulo que refuerza:** criterio comparativo, e-commerce.
**Nota:** ambos fueron trabajo en equipo. Hay que decirlo explícitamente en el post.

### 4. Trabajar para el Estado
**Proyecto:** INPOSDOM (`src/content/work/Inposdom.md`)
**Tesis:** operar dentro de restricciones ajenas y no negociables.
**Material:** correo nacional de República Dominicana. Requisitos de transparencia institucional, accesibilidad y revisión. Portal de servicios con seguimiento de envíos, búsqueda de código postal y directorio de países disponibles. Trabajo en equipo, no en solitario.
**Ángulo que refuerza:** sector público, trabajo en equipo, restricciones.

## Otras ideas descartadas en esta ronda

- ~~**De Divi a Astro**~~ → **ESCRITO** (2026-08-20) reversionado como *"Cuándo no usar WordPress"*. El arco de carrera quedaba solapado con los posts 2, 7 y 8; el ángulo de criterio arquitectónico (cuándo un CMS no se justifica) no se solapa con nada y dice más.
- ~~**CAPFA, de 45 % a 94 % en Lighthouse**~~ → **ESCRITO** (2026-08-13) como *"De 45 a 94, y qué lo movió de verdad"*, con el puntaje tratado como síntoma y no como objetivo.
- **La arquitectura i18n de este sitio:** EN/ES con slugs independientes por locale. Útil, pero es un post sobre el sitio y no sobre el trabajo. Bajo interés para recruiters.

## Restricciones de honestidad (aplican a todo lo que se escriba)

Salen de `MASTER_PROFILE.md` §8 y §10. No negociables:

- ORT Argentina y el certificado de IBM: siempre **en curso**, nunca terminados, nunca con fecha de fin.
- El 500 % de Tango Magic: siempre con la salvedad de la base chica.
- LatePoint: **no va en el sitio.** Se sacó del listado de skills el 2026-08-06 por decisión de Rodrigo:
  era material para un CV puntual, no para el portfolio. La spec `spec-add-wordpress-client-sites.md`
  pedía surfacearlo; esa instrucción quedó revertida. Si alguna vez vuelve, solo como *experiencia
  limitada* y nunca como especialidad.
- React y Angular: nivel certificado, no producción a escala. No liderar con ellos.
- Redis: solo conocimiento de trabajo. Nunca como experiencia de producción.
- Sin experiencia en Zendesk, Intercom, HelpScout ni Freshdesk.
- Brooksfield, Dorian e INPOSDOM fueron trabajos en equipo. Decirlo siempre.
- Nada inventado por fuera del `MASTER_PROFILE`.
