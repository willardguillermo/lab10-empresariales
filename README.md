# Laboratorio 10 · Componentes y eventos

**Alumno: Guillermo Willard** · Desarrollo de Aplicaciones Empresariales · Semana 10.

Continuación de la cartelera de cine del [laboratorio 9](https://github.com/willardguillermo/laboratorio-9-empresariales). El proyecto no parte de cero: este repositorio conserva el historial del laboratorio 9 y cada paso del laboratorio 10 queda registrado en un commit.

## Ejecutar

Requiere Node 20.19+ o 22.12+.

```sh
npm ci
npm run dev
npm test
```

## Qué se hizo

- `Button` reutilizable con `children` y variantes.
- Favoritas con `useState` en App, comunicadas desde `MovieCard` con `onToggleFavorite`.
- `MovieSearch` controlado, con retardo (`useDebouncedValue`) e integrado en el banner.
- `MovieList` filtra por título o género y muestra un estado vacío.
- Favoritas guardadas en `localStorage` (`useLocalStorageState`).

Informe con observaciones y evidencias: [docs/INFORME-LAB10.md](docs/INFORME-LAB10.md) · [entregable en Word](docs/GuillermoWillard-Lab10.docx).

La documentación del laboratorio 9 se movió a [docs/lab09](docs/lab09/README-lab09.md).
