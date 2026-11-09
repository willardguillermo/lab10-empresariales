import MovieCard from "./MovieCard.jsx";

export default function MovieList({ movies, favoriteIds = [], onToggleFavorite }) {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} isFavorite={favoriteIds.includes(movie.id)} onToggleFavorite={onToggleFavorite} />
        </li>
      ))}
    </ul>
  );
}
