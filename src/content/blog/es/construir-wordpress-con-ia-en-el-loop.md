---
title: "Construir WordPress con IA en el loop"
description: "Armo los sitios de cliente en local con herramientas de IA en el loop, para que nada llegue a producción sin probar."
publishDate: 2026-06-05
tags: ["WordPress", "IA", "Flujo de trabajo"]
---

Mucho trabajo de WordPress todavía se hace directamente sobre el sitio en vivo. Alguien edita una plantilla desde el admin, refresca y cruza los dedos. Funciona hasta que no, y cuando no funciona, no funciona delante de los clientes del cliente.

Yo no trabajo así. Cada sitio arranca en un entorno local, y las herramientas de IA para escribir código viven dentro de ese loop, redactando y probando maquetas y código a medida en local antes de que nada toque producción.

## Local primero, por razones aburridas

El argumento a favor del desarrollo local no es la sofisticación. Es que te deja equivocarte gratis.

En local puedo romper un tema por completo, probar tres enfoques para una consulta, instalar un plugin para ver qué hace y sacarlo sin dejar residuo. En producción cada uno de esos experimentos tiene público. La versión mía que se anima a probar la idea riesgosa solo existe cuando el costo de fallar es cero, y esa versión escribe mejor código.

Local también significa un editor de verdad, control de versiones de verdad y depuración de verdad, en lugar de un cuadro de texto en wp-admin sin deshacer.

## Dónde ayuda realmente la IA

No en generar sitios enteros. Eso produce algo que parece terminado y es una pesadilla de mantener, y no tengo ningún interés en heredarlo.

Ayuda en el medio del trabajo, en cosas puntuales:

**Código repetitivo que sé escribir y no tengo ganas de escribir.** Registro de campos, andamiaje de plantillas, la cuarta variante de un loop. Sé exactamente cómo tiene que quedar la salida, lo que significa que detecto una respuesta equivocada al instante. Esa es la condición bajo la cual esto es seguro.

**Una segunda opinión sobre una API que no conozco.** Más rápido que buscar, y lo verifico contra la documentación igual.

**Explicar código que no escribí.** Heredar el tema de un cliente de un desarrollador anterior es buena parte de este trabajo, y que algo lea mil líneas y me diga dónde están los hooks ahorra una tarde real.

El patrón es constante: sirve donde puedo evaluar la respuesta, y es peligroso donde no. Cuando no sé lo suficiente como para juzgar la salida, voy y aprendo el tema en lugar de subir código que no entiendo. Eso no es cautela por deporte. Código sin verificar en el sitio en producción de un cliente es una responsabilidad con mi nombre.

## Qué cambió de verdad

Cambió el flujo de trabajo, más que el código.

Pruebo más enfoques, porque probar ahora es barato. Escribo más PHP a medida y recurro a menos plugins, porque el costo de escribir algo específico bajó lo suficiente como para ganarle al costo de configurar algo genérico. Y pruebo en local por defecto y no como un paso virtuoso adicional, porque el entorno local es donde ya vive el trabajo.

El resultado de cara al cliente es poco glamoroso y es exactamente el punto: se rompen menos cosas en producción, porque llegan menos cosas a producción sin probar.
