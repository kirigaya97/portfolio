---
title: "Diez sitios en producción y lo que no se ve"
description: "Los portfolios muestran lanzamientos. El trabajo real es DNS, SSL, backups, y el martes en que hackean un sitio."
publishDate: 2026-06-16
tags: ["Operaciones", "Hosting", "WordPress"]
---

Un portfolio es un registro de lanzamientos. Muestra el día en que un sitio salió a producción y nada de los años posteriores, que es donde ocurre casi todo el trabajo real.

Mantengo más de diez propiedades en vivo. Hosting, SSL, backups, seguridad, actualizaciones mensuales, entre DigitalOcean, WP Engine, Hostinger y servidores cPanel comunes. Nada de eso aparece en una página de caso y todo eso es lo que el cliente realmente está pagando.

## Lanzar es la parte fácil

Construir un sitio es un problema acotado. Sabés cuándo terminó. Mantener uno vivo es un problema abierto, y falla de maneras que nadie agendó.

Los certificados vencen. Una actualización de plugin voltea un checkout un sábado. Un registrador manda el aviso de renovación a una casilla que alguien dejó de leer en 2021. Un hosting deprecia una versión de PHP. Ninguna de esas cosas es interesante, todas son urgentes, y cada una es la diferencia entre que un negocio venda o no venda.

La habilidad no es heroica. Es darte cuenta antes que el cliente.

## Para qué sirven realmente las herramientas

Uso Cloudflare para DNS, CDN, caché y SSL, cPanel y WHM para administración a nivel de servidor, WP-CLI para cualquier cosa que prefiera no hacer por navegador, y configuración de NGINX y Apache cuando el problema está por debajo de WordPress. Linux por SSH.

WP-CLI merece mención aparte. Un conflicto de plugins en un sitio que no podés abrir en el navegador es irresoluble desde wp-admin, por definición. Por SSH desactivás plugins de a uno, mirás cómo vuelve el sitio, y sabés exactamente cuál era. Diez minutos en lugar de una tarde adivinando.

## La falla que más enseña

Recuperar una instalación de WordPress hackeada enseña más que construir diez limpias.

Aprendés rápido que limpiar el daño visible no es el trabajo. El trabajo es encontrar por dónde entraron, porque un sitio limpiado sin cerrar la puerta de entrada es un sitio que se reinfecta en la semana, y ahora el cliente te vio fallar dos veces. El orden es: contener, encontrar el vector, cerrarlo, limpiar, verificar, y después endurecer para que ese tipo de cosa no vuelva a funcionar.

Es poco glamoroso y es trabajo de diagnóstico genuino. Leer logs, aislar conflictos de plugins y temas, rastrear errores fatales de PHP, deducir qué cambió y cuándo.

## En las migraciones muerden los detalles

Mudar un sitio de un hosting a otro no es copiar archivos. Es archivos, base de datos, usuarios, correo, corte de DNS, reemisión de SSL, y después verificar que cada una de esas cosas efectivamente haya quedado.

El correo es el que se olvida. El sitio se muda bien, el DNS actualiza bien, y tres días después el cliente comenta que nadie recibió un mensaje del formulario de contacto desde el martes. Nada parecía roto. Por eso existe el checklist y por eso la verificación es un paso y no una sensación.

## Por qué pongo esto en un portfolio

Porque "construí esto" y "vengo manteniendo esto hace cuatro años" son afirmaciones distintas, y la segunda es más difícil.

Cualquiera puede entregar un sitio que funciona el día que se lanza. Mucha menos gente sigue atendiendo el teléfono por ese sitio tres años después, y eso es lo que un cliente está comprando de verdad cuando contrata a alguien.
