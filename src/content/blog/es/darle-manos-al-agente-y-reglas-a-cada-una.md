---
title: "Darle manos al agente, y reglas a cada una"
description: "Skills, servidores MCP para GitHub, Vercel, Hostinger y Apify, un navegador, documentación al día y un plugin que defiende escribir menos código. Lo que conecto a Claude y el límite que le pongo a cada cosa."
publishDate: 2026-09-22
tags: ["IA", "Claude Code", "Herramientas"]
---

Un modelo por sí solo puede leer y escribir archivos. Eso ya es útil, y también es donde la mayoría se queda. El aprovechamiento real empieza cuando el agente puede llegar a los sistemas donde vive el trabajo: el repositorio, el hosting, el deploy, el navegador, la documentación.

Cada conexión es también una nueva forma de romper algo. Por eso cada herramienta que sumo viene con una regla sobre qué tiene permitido hacer.

## Skills: el procedimiento

Sobre esto escribí la semana pasada. Un skill es un procedimiento escrito que el agente sigue: el orden, las trampas, el freno. Todo lo que sigue son herramientas que un skill puede usar. El skill decide cuándo.

## Servidores MCP: las manos

MCP, el Model Context Protocol, es la forma estándar de conectar un sistema externo a un agente como un conjunto de herramientas. Estos son los que se ganan su lugar en mi semana.

**GitHub.** Issues, pull requests, ramas, estado de CI. El agente puede preparar un PR y leer por qué falló un check. **Regla:** commitear o pushear solo cuando lo pido, y nunca directo en `main`.

**Vercel.** Deploys, variables de entorno, logs de build. La mayor parte de mi trabajo en Astro y Next.js sale por ahí, así que poder preguntar "¿por qué falló este preview?" y recibir el log en lugar de una suposición ahorra tiempo de verdad. **Regla:** previews libres, producción a pedido.

**Hostinger.** Varios clientes WordPress viven ahí, y el acceso por SSH le permite al agente mirar logs, disco, versiones de PHP y lo que un plugin realmente escribió en la base de datos. **Regla:** solo diagnóstico. Nunca modifica producción por SSH. Los arreglos se hacen en local y se despliegan por el camino normal.

**Apify.** Scrapers y crawlers ya hechos, así que cuando un proyecto necesita datos públicos corro un actor existente en lugar de escribir y mantener un scraper propio. **Regla:** datos públicos, para el proyecto en cuestión, nada más.

**Documentación al día.** Un servidor de docs que devuelve la API actual de una librería en lugar de lo que el modelo recuerda. Los frameworks que uso cambian lo bastante rápido como para que "recordado" muchas veces signifique "una versión atrás". **Regla:** revisar la documentación antes de escribir contra una API que importa.

## Un navegador, con un solo perfil

Algunos sistemas solo existen detrás de un login en el navegador. Claude in Chrome le permite al agente manejar una pestaña real: abrir el panel, revisar una configuración, sacar una captura del resultado.

**Regla:** un perfil de navegador dedicado por cliente, seleccionado de forma explícita antes de cada tarea. Si el agente cae en una pantalla de login, eligió el navegador equivocado, y frena en lugar de intentar iniciar sesión. Esa regla salió de la experiencia.

## Ponytail: un argumento a favor de menos

Ponytail es un plugin de Claude Code que hace que el agente se comporte como un desarrollador senior vago. Antes de escribir algo tiene que preguntarse si hace falta que exista, si el código ya lo tiene, si la plataforma ya lo resuelve. Gana el cambio completo más chico.

Además cierra cada respuesta con lo que se salteó y lo que no revisó. Esa última línea es lo más útil. Un agente que te dice dónde no miró es mucho más fácil de confiar que uno que suena seguro de todo.

## Memoria y archivos de contexto

Dos piezas más silenciosas sostienen todo. `CLAUDE.md` guarda las reglas duras del proyecto, y los archivos de memoria guardan las preferencias que si no repetiría en cada sesión. Ninguna de las dos es ingeniosa. Las dos hacen que el agente arranque cada sesión sabiendo ya lo que no debe hacer.

## El patrón

El acceso de lectura es barato y lo reparto con generosidad. El de escritura es acotado, explícito y atado a un único destino. Todo lo que toca producción pasa por un GO humano.

No es una regla que inventé para la IA. Es como incorporás a cualquier desarrollador nuevo a la infraestructura de un cliente. La diferencia es que este lee el documento de incorporación cada vez.
