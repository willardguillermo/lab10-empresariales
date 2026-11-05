# Laboratorio 9 de ReactJS

**Alumno: Guillermo Willard** · Desarrollo de Aplicaciones Empresariales · 4 de noviembre de 2026.

Cartelera de ocho películas construida con React y Vite, junto al extra de revisión de respuestas de IA por pruebas. Se implementó con asistencia de Codex, declarada en el informe. Está terminada y verificada localmente; falta vincular el repositorio del alumno para publicarla.

## Ejecutar

Requiere Node 20.19+ o 22.12+; se verificó con Node 26.11.1 y npm 11.20.0.

```sh
npm ci
npm run dev
```

Abre la dirección de localhost que indique Vite. Si 5173 está ocupado, Vite elige otro puerto.

```sh
npm test             # 47 pruebas del proyecto
npm run duel         # 43 pruebas de team
npm run duel:fixed   # 43 pruebas de la copia corregida
npm run build        # compilación de producción
npm run duel:ai      # 14 fallos esperados del ejemplo original
```

`duel:ai` debe terminar con código 1: conserva los seis errores del material de enseñanza. `src/duel/fixed/` ya está inicializado; no ejecutes `fixed:init -- --force`, porque restauraría los errores sobre la copia corregida.

## Entrega y evidencias

- [Informe en Word](docs/INFORME-Guillermo-Willard.docx).
- [Informe en Markdown](docs/INFORME.md), con código, resultados y uso de IA.
- [Registro del proceso](docs/PROCESO.md) y [evidencias completas](docs/evidencias/).
- [Guía original de la plantilla](docs/GUIA-PLANTILLA.md).

## Organización

```text
src/
  App.jsx               composición de la página y paso de props
  main.jsx              punto de entrada con StrictMode
  index.css             importa la arquitectura de estilos
  data/
    movies.js           datos originales del duelo, intactos
    movieDetails.js     clasificación y género ficticios por id
  styles/
    tokens.css          colores y variables
    base.css            tipografía, enlaces y accesibilidad
    components.css      composición y adaptación de pantalla
  duel/
    team/               ocho componentes implementados
    ai/                 ejemplos originales con errores, intactos
    fixed/              copia corregida de los ejemplos
    tests/              verificador original, intacto
public/
  posters/              ocho afiches locales de la plantilla
  favicon.svg           icono local de la aplicación
```

La estructura del extra prescribe un archivo por componente en `team/`; se conserva para que funcionen sus importaciones y verificadores. La sinopsis y el mensaje del agente contienen etiquetas de prueba deliberadas. React las presenta como texto y no se interpreta su instrucción como una acción. Las clasificaciones y el contacto son ficticios para la demostración académica.

## Historia y publicación pendiente

La base es [Hellscythe25/dae-s09-react-ia](https://github.com/Hellscythe25/dae-s09-react-ia), commit `861176c`. Se conserva su historia y se añaden cuatro commits del laboratorio por etapas. El remoto de origen queda identificado como `upstream`. No se ha realizado push.

Cuando el alumno facilite su repositorio, se configurará como `origin` y se publicarán los commits sin sobrescribir historia existente. La subida al campus virtual corresponde al alumno.
