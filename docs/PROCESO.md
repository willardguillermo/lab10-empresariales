# Registro del laboratorio 9

Fecha de trabajo: 4 de noviembre de 2026 (America/Lima).

## Alcance y procedencia

Se integra la cartelera de la guía GLAB-S09-MMONTGOMERY-2026-02 y el extra de la captura. La base es https://github.com/Hellscythe25/dae-s09-react-ia, commit 861176c. Se conserva su historia, sus pruebas, datos y ejemplos de IA. El destino del equipo se añadirá cuando el usuario lo facilite; no se ha publicado nada.

## Preparación y estado inicial

- Node v26.11.1 y npm 11.20.0. Node satisface el mínimo de la captura.
- Dependencias reproducidas mediante `npm ci` y el archivo de bloqueo original. Se usó una caché local por restricciones de escritura de la caché habitual.
- Servidor iniciado con `npm run dev -- --host localhost`.
- `npm run duel`: 43 pruebas fallidas por componentes TODO. Evidencia: `evidencias/01-team-inicial.txt`.
- `npm run duel:ai`: 29 aprobadas y 14 fallidas, distribuidas en seis componentes. Evidencia: `evidencias/02-ia-original.txt`.

## Autoría

Trabajo implementado y verificado por Codex con asistencia de IA a solicitud del usuario. El usuario revisará la entrega y completará nombres de alumnos, grupo y aportes reales. No se atribuye el código generado a una implementación manual del alumno.

## Cartelera implementada

Se escribieron los ocho componentes de `src/duel/team/`, se compusieron en `App` y se separó el CSS en tokens, base y componentes. `movieDetails.js` añade géneros y clasificaciones ficticias sin modificar `movies.js`. Cada tarjeta presenta imagen con texto alternativo, título, valoración, sinopsis literal, clasificación y horarios. El listado usa `movie.id` como clave; los horarios internos se presentan como texto agrupado para conservar una única lista semántica de películas, tal como espera T5. No se añadieron hooks ni estado.

`npm run duel`: **43 de 43 aprobadas**. Evidencia: `evidencias/04-team-final.txt`.

La adaptación móvil usa rejilla de dos columnas, una columna para anchos menores de 350 px, viewport con zoom permitido, foco visible y enlaces con `touch-action: manipulation`. La validación automatizada en un viewport móvil no sustituye la comprobación táctil en un teléfono físico.
