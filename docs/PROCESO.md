# Registro del laboratorio 9

Fecha de trabajo: 4 de noviembre de 2026 (America/Lima).

## Alcance y procedencia

Se integra la cartelera de la guía GLAB-S09-MMONTGOMERY-2026-02 y el extra de la captura. La base es https://github.com/Hellscythe25/dae-s09-react-ia, commit 861176c. Se conserva su historia, sus pruebas, datos y ejemplos de IA. El destino es https://github.com/willardguillermo/laboratorio-9-empresariales. La etapa inicial se completó localmente y se publicó después de recibir el enlace del alumno.

## Preparación y estado inicial

- Node v26.11.1 y npm 11.20.0. Node satisface el mínimo de la captura.
- Dependencias reproducidas mediante `npm ci` y el archivo de bloqueo original. Se usó una caché local por restricciones de escritura de la caché habitual.
- Servidor iniciado con `npm run dev -- --host localhost`.
- `npm run duel`: 43 pruebas fallidas por componentes TODO. Evidencia: `evidencias/01-team-inicial.txt`.
- `npm run duel:ai`: 29 aprobadas y 14 fallidas, distribuidas en seis componentes. Evidencia: `evidencias/02-ia-original.txt`.

## Autoría

Trabajo implementado y verificado por Codex con asistencia de IA a solicitud del usuario. Guillermo Willard revisará la entrega y validará sus aportes reales. No se atribuye el código generado a una implementación manual del alumno.

## Cartelera implementada

Se escribieron los ocho componentes de `src/duel/team/`, se compusieron en `App` y se separó el CSS en tokens, base y componentes. `movieDetails.js` añade géneros y clasificaciones ficticias sin modificar `movies.js`. Cada tarjeta presenta imagen con texto alternativo, título, valoración, sinopsis literal, clasificación y horarios. El listado usa `movie.id` como clave; los horarios internos se presentan como texto agrupado para conservar una única lista semántica de películas, tal como espera T5. No se añadieron hooks ni estado.

`npm run duel`: **43 de 43 aprobadas**. Evidencia: `evidencias/04-team-final.txt`.

La adaptación móvil usa rejilla de dos columnas, una columna para anchos menores de 350 px, viewport con zoom permitido, foco visible y enlaces con `touch-action: manipulation`. La validación automatizada en un viewport móvil no sustituye la comprobación táctil en un teléfono físico.

## Corrección de la copia de IA

`npm run fixed:init` creó `src/duel/fixed/`. Antes de corregir, `duel:fixed` reprodujo 29 aprobadas y 14 fallidas. Después de corregir seis archivos, **43 de 43 aprobadas**. `Header` y `AgentMessage` eran correctos y se conservaron.

| Tarea | Categoría y causa | Evidencia del original | Arreglo en fixed |
| --- | --- | --- | --- |
| T2 Footer | Propiedad JSX incorrecta | React avisa `Invalid DOM property` por `class` | Usar `className` |
| T3 MovieCard | Accesibilidad | No encuentra imagen con nombre igual al título | Añadir `alt={movie.title}` |
| T4 Showtimes | Condición de lista vacía | `[]` es verdadero y `0 && ...` renderiza `0`; falta el mensaje | Retornar el mensaje si `times.length === 0` |
| T5 MovieList | Identidad de elementos | Al invertir o quitar una película cambia el nodo de las otras | Usar `movie.id` en lugar del índice |
| T6 Synopsis | Inyección de HTML y XSS | Aparecen `img` y `b`; `window.__xss` vale 1 | Renderizar `{text}` como texto |
| T7 Hero | Contrato de props | Se recibe `movie` pero se lee `film.title`, que es undefined | Desestructurar y usar `movie` |

Hay seis causas, no seis pruebas fallidas: varios verificadores detectan efectos de un mismo error. Los registros completos están en `02-ia-original.txt`, `05-fixed-inicial.txt` y `06-fixed-final.txt`.


## Errores deliberados y navegador

Se reprodujeron en una página local aislada `class` en vez de `className` y una lista sin `key`. Los mensajes reales están en `10-avisos-jsx.json`. Se provocaron dos nodos raíz con los analizadores de JSX de Vite/esbuild y Babel; los mensajes están en `12-dos-raices.txt`. La aplicación final conserva `className`, claves por id y un fragmento raíz.

La demostración de XSS montó exclusivamente `ai/Synopsis.jsx` en una página local aislada, con la carga de la plantilla que solo establece `window.__xss=1`. Se observó una imagen inyectada y el indicador 1 (`11-xss-aislado.json`). No fue necesario introducir temporalmente HTML inseguro en `team/`; la misma operación se reprodujo con la implementación insegura original. En la aplicación final no se crean imágenes desde sinopsis/mensajes y el indicador queda undefined (`09-navegador.json`).

La captura inicial muestra una página vacía: React aborta al lanzar el TODO de Header. La excepción está guardada en `03-error-inicial.json`; este entorno no añadió un recuadro rojo. No se atribuye ese recuadro a una ejecución que no lo produjo.

Verificaciones del navegador: ocho tarjetas, ocho clasificaciones, cero imágenes rotas, destinos válidos de navegación, enlace de horarios operativo, enlaces tel y mailto presentes, ids únicos y consola sin errores. Sin desbordamiento horizontal en 1440, 390 y 320 píxeles. Las capturas 07 y 08 muestran el escritorio y la emulación móvil. La captura 15 corresponde al proyecto abierto en Visual Studio Code, recortada solo para excluir la barra de estado ajena al laboratorio.

## Verificación final

- `npm test`: 47 de 47 aprobadas.
- `npm run duel`: 43 de 43 aprobadas.
- `npm run duel:fixed`: 43 de 43 aprobadas.
- `npm run build`: compilación correcta.
- `ai/`, `duel/tests/`, los datos originales y `package-lock.json` sin cambios respecto de 861176c.

Alumno indicado por el usuario: Guillermo Willard. Sin grupo por solicitud expresa. El nombre y correo de autor de los commits proceden de la configuración Git existente del equipo; no se modificó dicha configuración. No se consultó el campus virtual ni un proyecto previo de semana 8 que no fue proporcionado. No se simuló una entrega en GitHub o Canvas.


## Publicación en el repositorio del alumno

El usuario proporcionó https://github.com/willardguillermo/laboratorio-9-empresariales.git y autorizó subir el proyecto e incluir ese enlace en el informe. Se comprobó que el destino estaba vacío y que existía acceso de escritura. Se configuró `origin` y se publicó `main` con los cuatro commits del laboratorio, conservando la historia original de la plantilla y sin forzar ni sobrescribir ramas.

La primera subida se verificó comparando `git ls-remote origin refs/heads/main` con `git rev-parse HEAD`: ambos devolvieron 6c55890abedf8efe2100f82aef8cb96dd78f7e09. Se actualizó el informe en Word y Markdown con un enlace al repositorio y se corrigieron las referencias a una publicación pendiente. El quinto commit documenta esta actualización y se publica también en `main`.
