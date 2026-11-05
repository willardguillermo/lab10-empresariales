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
