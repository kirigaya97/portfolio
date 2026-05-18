---
title: SADA — Aplicación Web de Gestión del Padrón Electoral
publishDate: 2026-03-26 00:00:00
img: /assets/sada/1.png
img_alt: Captura del dashboard principal del sistema electoral SADA.
description: |
  Una aplicación web interna full-stack para gestionar el padrón político-electoral de un partido en San Antonio de Areco — construida con Next.js 14 y Google Sheets como único backend.
tags:
  - Dev
  - Frontend
  - Backend
screenshots: [
  /assets/sada/2.png,
  /assets/sada/3.png,
  /assets/sada/4.png,
  /assets/sada/5.png
]
---

### Descripción del Proyecto
SADA es una aplicación web CRUD interna diseñada a medida para gestionar el padrón político-electoral de un partido de San Antonio de Areco, provincia de Buenos Aires. Reemplaza flujos de trabajo manuales en planillas con un dashboard seguro y multiusuario que lee y escribe directamente sobre un backend de Google Sheets, sin base de datos tradicional. El sistema administra registros de electores con 34 campos de datos, admite clasificación política (MDF vs. OTRO), registra afiliación partidaria, y ofrece herramientas de analítica, exportación y revisión masiva de domicilios.

##### Objetivos
- <b>Gestión centralizada del padrón:</b> Proveer una única fuente de verdad con control de acceso, reemplazando operaciones fragmentadas en planillas.
- <b>Clasificación política:</b> Exponer y gestionar el campo clave AFINIDAD (MDF | OTRO) en todas las vistas para apoyar decisiones internas de campaña.
- <b>Calidad del dato:</b> Implementar un flujo estructurado de revisión de domicilios (VALIDA / REVISION / ERROR) para limpiar y verificar las direcciones del padrón existente.
- <b>Exportación e informes:</b> Habilitar exportaciones con un clic del padrón completo, listas de cumpleaños, informes de domicilios, fichas individuales y analíticas — tanto en XLSX como en PDF.
- <b>Acceso seguro multiusuario:</b> Autenticar usuarios vía Google SSO con una whitelist mantenida en la misma planilla, registrando qué contacto interno aportó cada registro.

##### Flujo de Trabajo
- <b>Identidad visual primero:</b> Se definió el sistema de diseño desde el inicio con un lenguaje editorial inspirado en la gráfica política peronista argentina — tipografía de alto impacto (Space Grotesk + Inter), azul primario de alto contraste (#0253cd) y una regla estricta de "sin bordes" basada en capas de color y espacio negativo.
- <b>Diseño del esquema:</b> Se diseñó y versionó un esquema de 34 columnas en Google Sheets (pestaña BASE, v2 → v2.1) con una capa de abstracción del mapa de columnas en el código para evitar drift de índices en migraciones.
- <b>Arquitectura App Router de Next.js:</b> Todas las rutas protegidas viven bajo un único layout autenticado. Los Server Components manejan el fetching inicial; los URL Search Params persisten el estado de los filtros entre navegaciones.
- <b>Capa de API:</b> Route handlers al estilo REST gestionan el ciclo CRUD completo: listado con filtros y paginación, alta, actualización completa, baja lógica (ESTADO → INACTIVO) y un endpoint específico de corrección de domicilio que escribe solo columnas puntuales sin tocar campos de solo lectura.
- <b>Panel de analíticas:</b> Una vista dedicada /analytics agrega totales y desgloses por circuito, rango etario, género y año de afiliación, reutilizando el mismo dataset filtrado y alimentando la generación de reportes PDF.
- <b>Responsive mobile:</b> Correcciones iterativas resolvieron overflow, recorte de la navegación inferior y quiebres de layout en toda el área protegida.
- <b>Log de auditoría:</b> Las ediciones se registran en una hoja LOGS con timestamp y email del usuario, proveyendo trazabilidad de quién modificó qué.

##### Tecnologías Utilizadas
>Next.js 14 (App Router): Framework elegido por su modelo de React Server Components, API routes integradas y capacidad full-stack en un único deploy.
###
>TypeScript 5 (modo estricto): Aplicado en todo el proyecto sin `any`, con flags strict completas y tipos de dominio derivados del esquema.
###
>Google Sheets API (googleapis): Único backend — lee y escribe en una planilla compartida mediante una Service Account, con una capa de abstracción del mapa de columnas para evitar índices hardcodeados.
###
>NextAuth v5 (beta): Maneja Google OAuth SSO con un callback de sign-in personalizado que valida usuarios contra la whitelist de la hoja Usuarios.
###
>Zod + React Hook Form: Formularios con validación de esquema en cliente y servidor, detección en vivo de DNI duplicado y dropdowns dependientes (barrio condicionado por localidad).
###
>Tailwind CSS + shadcn/ui + Radix UI: Biblioteca de componentes y estilos utilitarios que implementan el sistema de diseño "Manifiesto Digital" personalizado.
###
>Recharts: Alimenta los gráficos del dashboard de analíticas (desglose por circuito, rangos etarios, donut de género, afiliaciones por año).
###
>ExcelJS + @react-pdf/renderer: Genera exportaciones XLSX y PDF del padrón, cumpleaños, domicilios, fichas individuales de afiliados e informes de analíticas.

##### Resultados e Impacto
- <b>Herramienta interna funcional:</b> La aplicación fue desarrollada de cero hasta una herramienta interna con todas las funcionalidades en un único día de iteración intensa, alcanzando 39 commits que cubren CRUD, autenticación, analíticas, exportaciones, revisión de domicilios y correcciones mobile.
- <b>Integridad del dato:</b> El versionado del esquema y la abstracción del mapa de columnas eliminaron bugs de drift de índices que habrían corrompido silenciosamente registros en una implementación con índices directos.
- <b>Trazabilidad:</b> Cada edición es atribuible a un usuario interno específico, dando a la organización partidaria visibilidad sobre la procedencia de los datos.
- <b>Flexibilidad de exportación:</b> El personal puede exportar cualquier vista filtrada del padrón a XLSX o PDF sin asistencia técnica, reduciendo cuellos de botella operativos.
