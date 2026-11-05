export default function Hero({ movie }) {
  return (
    <section aria-label="Destacada" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">La recomendada de la semana</p>
        <p className="hero-kicker">Apaga el mundo.<br />Enciende una historia.</p>
        <h2>{movie.title}</h2>
        <p className="hero-meta">{movie.genre ?? "Estreno"} · {movie.classification ?? "Sin clasificar"} · ★ {movie.rating} / 5</p>
        <a className="button" href={`#horarios-${movie.id}`}>Ver horarios <span aria-hidden="true">↗</span></a>
      </div>
      <div className="hero-art" aria-hidden="true"><span className="reel">09</span><div className="frame"><span>EN CARTELERA</span><img src={movie.image} alt="" width="300" height="450" /></div><p>UNA SALA. MIL HISTORIAS.</p></div>
    </section>
  );
}
