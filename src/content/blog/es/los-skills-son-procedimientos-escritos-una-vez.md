---
title: "Los skills son procedimientos escritos una vez"
description: "Cómo llevo el trabajo repetible con clientes a través de skills de Claude Code: el modelo decide lo que requiere criterio, los scripts hacen lo determinístico y nada sale sin un GO."
publishDate: 2026-09-09
tags: ["IA", "Claude Code", "Flujo de trabajo"]
---

Hace unos meses escribí sobre mantener la IA dentro de un loop local, útil donde puedo juzgar la respuesta y en ningún otro lado. Esa sigue siendo la regla. Lo que cambió es la unidad de trabajo. Dejé de pedir tareas y empecé a escribir procedimientos.

En Claude Code ese procedimiento es un **skill**: una carpeta con un `SKILL.md`, los scripts que llama y los archivos de referencia que lee. El frontmatter dice cuándo aplica. El cuerpo dice qué hacer, en qué orden y dónde frenar.

## Por qué un procedimiento le gana a un buen prompt

Un buen prompt resuelve hoy. Un skill resuelve la décima vez.

Casi todo mi trabajo se repite con pequeñas variaciones. Revisar un sitio WordPress terminado contra el relevamiento del cliente. Decidir los colores y tipografías globales. Corregir textos que se alejaron del brief. Reemplazar imágenes que no encajan con la marca. Cada una tiene un orden correcto, un conjunto de trampas en las que ya caí y una definición de terminado. Escribir eso una vez hace que la próxima corrida arranque con todo lo que aprendieron las diez anteriores, y no con mi memoria en una tarde cansada.

En uno de mis proyectos actuales eso terminó siendo una cadena de siete skills: un orquestador que secuencia el armado completo de un sitio, cuatro skills de etapa (revisión del sitio, decisiones de marca, edición de contenido, generación de imágenes), una herramienta compartida que convierte los globales decididos en un kit de Elementor importable, y un skill de investigación aparte que el armado nunca llama.

## Determinístico donde se pueda

La regla de diseño más útil que encontré: **que el modelo decida solo lo que hace falta decidir.**

Lintear una plantilla, armar un payload de cambios, verificar una relectura, generar un reporte: eso son scripts. Dan la misma respuesta siempre y se pueden testear. El trabajo del modelo es la parte que requiere criterio: qué slot es realmente un título, cómo debería llamarse un placeholder, si una sección es un bloque de reseñas que no se debe generar.

Un skill que le pide al modelo una cuenta que podía delegar en Python es un skill que en algún momento se va a equivocar de una forma difícil de ver.

## Un solo freno

Todo skill que escribe sobre algo real tiene exactamente un freno: una tabla de aprobación y la palabra GO de mi parte. Un GO cubre un sitio. Antes de eso, planes, dry runs y lints corren libres. Después, nada toca un sitio en vivo sin pasar por el push y la verificación del propio skill.

No es desconfianza en la herramienta. Es la misma regla que le daría a un desarrollador junior: prepará todo, mostrámelo y después publicamos.

## El mapa antes que el territorio

La otra mitad es el contexto. Cada directorio del proyecto tiene un `_context.md` corto: qué hay, por qué, cuál es la fuente de verdad, qué cuidar. Un índice en la raíz apunta a todos, y un script lo regenera para que no se desactualice en silencio.

El agente lee el mapa antes de abrir archivos. Eso solo eliminó la mayoría de los errores seguros de sí mismos, esos en los que encontraba un archivo que parecía autoritativo y en realidad era un borrador viejo.

Las reglas del proyecto viven en `CLAUDE.md`. Las preferencias que repito van a archivos de memoria. Los subagentes siguen una directiva escrita: el output largo va a un archivo de log y la respuesta es una ruta y cinco viñetas. La conversación principal queda chica y los tokens caros quedan para las decisiones.

## Lo que cuesta

Escribir un skill lleva más que hacer la tarea una vez. Mantenerlo fiel lleva disciplina: cuando encuentro una trampa nueva, el arreglo entra al skill ese mismo día, no a una nota que me voy a olvidar.

La ganancia es que el trabajo deja de depender de qué tan bien me lo acuerdo. El procedimiento se acuerda, y yo reviso.
