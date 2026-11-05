import Synopsis from "./Synopsis.jsx";

export default function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <div className="poster-wrap">
        <img src={movie.image} alt={movie.title} width="300" height="450" loading="lazy" />
        <span className="classification">{movie.classification ?? "Sin clasificar"}</span>
      </div>
      <div className="movie-info">
        <p className="movie-genre">{movie.genre ?? "Cine"}</p>
        <h3>{movie.title}</h3>
        <p className="rating">★ {movie.rating}</p>
        <Synopsis text={movie.synopsis} />
        <div id={`horarios-${movie.id}`} className="card-schedule">
          <p className="schedule-label">Funciones de hoy</p>
          {movie.showtimes.length === 0 ? <p className="empty-showtimes">Sin funciones hoy</p> : (
            <p className="time-chips">{movie.showtimes.map((time) => <span key={time}>{time}</span>)}</p>
          )}
        </div>
      </div>
    </article>
  );
}
