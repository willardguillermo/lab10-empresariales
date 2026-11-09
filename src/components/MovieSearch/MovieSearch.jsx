import { useEffect, useState } from "react";
import { useDebouncedValue } from "../../hooks/useDebouncedValue.js";
import "./MovieSearch.css";

/**
 * Controlled search input: the text lives in state and onChange updates it on every keystroke.
 * The parent only receives the text once the user pauses typing (`delay` ms), so filtering
 * does not run for every letter. MovieSearch never filters movies itself.
 */
export default function MovieSearch({ onSearch, delay = 400, label = "Buscar película", placeholder = "Título o género" }) {
  const [text, setText] = useState("");
  const debouncedText = useDebouncedValue(text, delay);

  useEffect(() => {
    console.info(`[MovieSearch] filtro aplicado: "${debouncedText}"`);
    onSearch(debouncedText);
  }, [debouncedText, onSearch]);

  function handleChange(event) {
    console.debug(`[MovieSearch] pulsación: "${event.target.value}"`);
    setText(event.target.value);
  }

  return (
    <form className="movie-search" role="search" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="movie-search-input">{label}</label>
      <input id="movie-search-input" type="search" value={text} onChange={handleChange} placeholder={placeholder} autoComplete="off" />
      <p className="hint">El filtro se aplica al dejar de escribir.</p>
    </form>
  );
}
