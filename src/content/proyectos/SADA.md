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
technologies:
  - name: Next.js 14 (App Router)
    note: Modelo de React Server Components con API routes integradas y capacidad full-stack en un único deploy.
  - name: TypeScript 5 (modo estricto)
    note: Aplicado en todo el proyecto sin `any`, con flags strict completas y tipos de dominio derivados del esquema.
  - name: Google Sheets API (googleapis)
    note: Único backend — lee y escribe mediante Service Account con abstracción del mapa de columnas para evitar índices hardcodeados.
  - name: NextAuth v5 (beta)
    note: Google OAuth SSO con callback personalizado que valida usuarios contra la whitelist de la hoja Usuarios.
  - name: Zod + React Hook Form
    note: Formularios con validación en cliente y servidor, detección de DNI duplicado y dropdowns dependientes.
  - name: Tailwind CSS + shadcn/ui + Radix UI
    note: Biblioteca de componentes y estilos utilitarios que implementan el sistema de diseño "Manifiesto Digital".
  - name: Recharts
    note: Alimenta los gráficos del dashboard — desglose por circuito, rangos etarios, donut de género y afiliaciones por año.
  - name: ExcelJS + @react-pdf/renderer
    note: Genera exportaciones XLSX y PDF del padrón, cumpleaños, domicilios, fichas individuales e informes de analíticas.
screenshots:
  - /assets/sada/2.png
  - /assets/sada/3.png
  - /assets/sada/4.png
  - /assets/sada/5.png
---

### Resumen del Proyecto

SADA es una aplicación web CRUD interna diseñada a medida para gestionar el padrón político-electoral de un partido de San Antonio de Areco, provincia de Buenos Aires. Reemplaza flujos de trabajo manuales en planillas con un dashboard seguro y multiusuario que lee y escribe directamente sobre un backend de Google Sheets, sin base de datos tradicional. El sistema administra registros de electores con 34 campos de datos, admite clasificación política (MDF vs. OTRO), registra afiliación partidaria, y ofrece herramientas de analítica, exportación y revisión masiva de domicilios.

#### Objetivos

- **Gestión centralizada del padrón** — Proveer una única fuente de verdad con control de acceso, reemplazando operaciones fragmentadas en planillas.
- **Clasificación política** — Exponer y gestionar el campo clave AFINIDAD (MDF | OTRO) en todas las vistas para apoyar decisiones internas de campaña.
- **Calidad del dato** — Implementar un flujo estructurado de revisión de domicilios (VALIDA / REVISION / ERROR) para limpiar y verificar las direcciones del padrón existente.
- **Exportación e informes** — Habilitar exportaciones con un clic del padrón completo, listas de cumpleaños, informes de domicilios, fichas individuales y analíticas — tanto en XLSX como en PDF.
- **Acceso seguro multiusuario** — Autenticar usuarios vía Google SSO con una whitelist mantenida en la misma planilla, registrando qué contacto interno aportó cada registro.

#### Flujo de Trabajo del Proyecto

- **Identidad visual primero** — Se definió el sistema de diseño desde el inicio con un lenguaje editorial inspirado en la gráfica política peronista argentina — tipografía de alto impacto (Space Grotesk + Inter), azul primario de alto contraste (#0253cd) y una regla estricta de "sin bordes" basada en capas de color y espacio negativo.
- **Diseño del esquema** — Se diseñó y versionó un esquema de 34 columnas en Google Sheets (pestaña BASE, v2 → v2.1) con una capa de abstracción del mapa de columnas en el código para evitar drift de índices en migraciones.
- **Arquitectura App Router de Next.js** — Todas las rutas protegidas viven bajo un único layout autenticado. Los Server Components manejan el fetching inicial; los URL Search Params persisten el estado de los filtros entre navegaciones.
- **Capa de API** — Route handlers al estilo REST gestionan el ciclo CRUD completo: listado con filtros y paginación, alta, actualización completa, baja lógica (ESTADO → INACTIVO) y un endpoint específico de corrección de domicilio que escribe solo columnas puntuales sin tocar campos de solo lectura.
- **Panel de analíticas** — Una vista dedicada /analytics agrega totales y desgloses por circuito, rango etario, género y año de afiliación, reutilizando el mismo dataset filtrado y alimentando la generación de reportes PDF.
- **Responsive mobile** — Correcciones iterativas resolvieron overflow, recorte de la navegación inferior y quiebres de layout en toda el área protegida.
- **Log de auditoría** — Las ediciones se registran en una hoja LOGS con timestamp y email del usuario, proveyendo trazabilidad de quién modificó qué.

#### Resultados e Impacto

- **Herramienta interna funcional** — La aplicación fue desarrollada de cero hasta una herramienta interna con todas las funcionalidades en un único día de iteración intensa, alcanzando 39 commits que cubren CRUD, autenticación, analíticas, exportaciones, revisión de domicilios y correcciones mobile.
- **Integridad del dato** — El versionado del esquema y la abstracción del mapa de columnas eliminaron bugs de drift de índices que habrían corrompido silenciosamente registros en una implementación con índices directos.
- **Trazabilidad** — Cada edición es atribuible a un usuario interno específico, dando a la organización partidaria visibilidad sobre la procedencia de los datos.
- **Flexibilidad de exportación** — El personal puede exportar cualquier vista filtrada del padrón a XLSX o PDF sin asistencia técnica, reduciendo cuellos de botella operativos.
