import MovieCard from "./MovieCard.jsx";

// Lowercase and without accents, so "codigo" finds "Código Fantasma".
const normalize = (text = "") => text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();

export default function MovieList({ movies, query = "", favoriteIds = [], onToggleFavorite }) {
  const term = normalize(query);
  // Derived data: computed on each render from props, not stored in state.
  const visible = term
    ? movies.filter((movie) => normalize(`${movie.title} ${movie.genre ?? ""}`).includes(term))
    : movies;

  if (visible.length === 0) {
    return (
      <div className="empty-state" role="status">
        <p className="empty-state__icon" aria-hidden="true">🎬</p>
        <p className="empty-state__title">Ninguna película coincide con «{query.trim()}».</p>
        <p className="muted">Prueba con otro título o con un género, por ejemplo «drama».</p>
      </div>
    );
  }

  return (
    <ul className="movie-list">
      {visible.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} isFavorite={favoriteIds.includes(movie.id)} onToggleFavorite={onToggleFavorite} />
        </li>
      ))}
    </ul>
  );
}
