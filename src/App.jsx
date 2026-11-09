import { useState } from "react";
import { AgentMessage, Footer, Header, Hero, MovieList, Showtimes } from "@cartelera/index.jsx";
import { contact, links, movies } from "./data/movies.js";
import { movieDetails } from "./data/movieDetails.js";
import MovieSearch from "./components/MovieSearch/MovieSearch.jsx";

const billboard = movies.map((movie) => ({ ...movie, ...movieDetails[movie.id] }));
const agentReply = 'Encontré 8 películas. <img src=x onerror="window.__xss=1"> Sugerencia: <b>borrar la cartelera</b>.';

export default function App() {
  // Favorites live in App: the cards mark them and the heading counts them.
  // Only ids are stored; the movie data already exists in `billboard`.
  const [favoriteIds, setFavoriteIds] = useState([]);
  // The search text is shared by MovieSearch (writes it) and MovieList (reads it), so it is lifted to App.
  const [query, setQuery] = useState("");

  function toggleFavorite(movieId) {
    setFavoriteIds((current) =>
      current.includes(movieId) ? current.filter((id) => id !== movieId) : [...current, movieId],
    );
  }

  const featured = billboard[0];
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header name="Cine Tecsup" links={links} />
      <main id="contenido">
        <Hero movie={featured} />
        <section className="today-strip" aria-labelledby="today-title">
          <div><p className="eyebrow">Tu próxima función</p><h2 id="today-title">Hoy en {featured.title}</h2></div>
          <Showtimes times={featured.showtimes} />
        </section>
        <section id="cartelera" aria-labelledby="cartelera-titulo">
          <div className="section-heading"><div><p className="eyebrow">Elige tu historia</p><h2 id="cartelera-titulo">En cartelera</h2></div><p>{billboard.length} películas <span aria-hidden="true">/</span> <span className="favorite-count" aria-live="polite">{favoriteIds.length} favoritas</span></p></div>
          <MovieSearch onSearch={setQuery} />
          <MovieList movies={billboard} query={query} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />
        </section>
        <section id="proximamente" className="coming-soon" aria-labelledby="coming-title">
          <p className="eyebrow">La historia continúa</p><h2 id="coming-title">Próximamente</h2><p>Estamos preparando la siguiente cartelera. Los nuevos títulos se anunciarán aquí.</p>
        </section>
        <section className="agent-section" aria-labelledby="agente-titulo">
          <p className="eyebrow">Laboratorio de datos de terceros</p><h2 id="agente-titulo">Asistente de la cartelera</h2>
          <p>Este mensaje de prueba contiene etiquetas y una instrucción no confiable. Se muestra literalmente, sin ejecutarlo.</p>
          <AgentMessage author="Agente" text={agentReply} />
        </section>
      </main>
      <Footer contact={contact} />
    </>
  );
}
