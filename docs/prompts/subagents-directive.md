# Directiva: Subagents Non-Verbose (Token-Saving)

**Propósito:** Minimizar consumo de tokens Opus al delegar a subagents. El context del principal es caro; el del subagent es desechable; el filesystem es gratis.

**Ámbito:** Proyecto `~/web/portfolio` — sitio Astro (i18n EN/ES, deploy en Vercel).

---

## Regla central — Logging obligatorio

**Cualquier output extenso o medianamente extenso → archivo en `docs/agents-logs/`, NO en la respuesta.**

- Si la respuesta del subagent excedería ~200 palabras → escribir a log y devolver solo el path + resumen ≤5 bullets.
- Formato del nombre: `docs/agents-logs/<YYYY-MM-DD>-<slug-tarea>.md` (o `.txt`, da igual).
- El subagent escribe el archivo él mismo (tiene Write/Edit). No reenvía el contenido por el canal de respuesta.
- Output que SÍ vuelve por el canal: `Log: docs/agents-logs/<archivo>` + bullets clave + decisión/recomendación si aplica.

**Cuándo loguear:**
- Auditorías, revisiones de código, listados largos, dumps de búsqueda.
- Análisis arquitectónico, comparativas, planes detallados.
- Stack traces, logs de build (`astro build`), salidas de tests largas.
- Resultados de investigación con >5 hallazgos.

**Cuándo NO loguear:**
- Lookup puntual (`path:line`) → respuesta directa.
- Sí/no, decisión binaria, número, nombre de componente → respuesta directa.
- Resultado ya cabe en ≤200 palabras útiles → respuesta directa.

---

## Reglas duras

1. **Delega resultado, no proceso.** Prohibido pedir razonamiento explícito ("piensa paso a paso", "explica tu enfoque", "muestra los pasos").

2. **Cap de respuesta obligatorio:**
   - Lookup puntual: `≤50 palabras` o solo `path:line`.
   - Investigación: `≤200 palabras` **o** `log + ≤5 bullets`.
   - Auditoría/revisión: **siempre log** + ≤5 bullets resumen.
   - Nunca omitir el cap.

3. **Formato estructurado, no prosa.** Bullets, tablas, JSON, `archivo:línea`. Sin introducciones ni cierres ("espero que ayude", recapitulación de la pregunta, etc.).

4. **Una tarea = una llamada.** Si el primer prompt no fue suficiente, reescribilo — no iteres con follow-ups al mismo agente.

5. **Paraleliza agresivo.** N tareas independientes → N invocaciones en un solo mensaje. Nunca secuencial salvo dependencia real de datos.

6. **Elegí el agente más barato que sirve:**
   - `Explore` para localizar código (no `general-purpose`).
   - `Plan` para estrategia (no implementación).
   - `feature-dev:code-explorer` / `code-reviewer` cuando aplica el especialista.
   - `general-purpose` solo si ningún especialista aplica.
   - Modelo: `haiku` para lookups/clasificación/trabajo mecánico, `sonnet` por defecto, `opus` solo si lo justificás por escrito.

7. **Prohibido en el prompt al subagent:**
   - "Piensa paso a paso" / "razona en voz alta".
   - "Explica por qué".
   - "Dame contexto adicional".
   - Repetir info que el agente puede leer del filesystem.
   - Ejemplos largos cuando uno breve basta.

8. **Obligatorio en el prompt al subagent:**
   - Objetivo en 1 frase.
   - Output esperado (formato + cap).
   - **Si es extensivo: "Escribir a `docs/agents-logs/<YYYY-MM-DD>-<slug>.md` y devolver solo path + ≤5 bullets".**
   - Paths/símbolos exactos si los conocés (no hagas que los busque dos veces).
   - "Sin preámbulo ni cierre".

9. **No releer lo que el subagent ya leyó.** Si necesitás detalle, leé el log puntualmente con `Read` + offset. No spawnees otro agente para refinar.

10. **No delegar lo trivial.** Un `grep` o `Read` directo es más barato que spawnear un agente. Subagents solo cuando: (a) >3 queries, (b) protege context del principal, (c) paraleliza trabajo independiente.

---

## Plantilla mínima

```
Objetivo: <1 frase>
Output:
  - Si ≤200 palabras útiles: respuesta directa, sin preámbulo.
  - Si más: escribir a docs/agents-logs/<YYYY-MM-DD>-<slug>.md y devolver:
      Log: <path>
      • <bullet 1>
      • <bullet 2>
      ...
      Decisión/Recomendación: <1 frase>
Contexto: <solo paths absolutos indispensables>
```

---

## Anti-patrones

| Mal | Bien |
|---|---|
| Subagent devuelve 2000 palabras de auditoría al canal | Escribe a log; devuelve path + 5 bullets |
| Principal relee log completo "para confirmar" | Lee solo la sección relevante con `Read` + offset |
| Loguear un lookup de 1 línea | Respuesta directa |
| Nombre de log genérico (`output.md`) | `2026-05-15-i18n-refactor-audit.md` |
| "Investiga la i18n y contame qué encontrás" | "Lista componentes con duplicación `es/`. Formato `path:line — propósito`. ≤10 entradas." |
| Lanzar agente, leer respuesta, lanzar otro para profundizar | Un solo prompt con todo lo necesario |
| `general-purpose` para "buscá X" | `Explore` quick |
| Subagent para leer 1 archivo conocido | `Read` directo |

---

**Regla de oro:** el canal de respuesta del subagent es para *señales*, no para *contenido*. El contenido vive en disco. Si el prompt al subagent supera las 150 palabras, probablemente estás pidiendo demasiado o explicando de más — recortá.
