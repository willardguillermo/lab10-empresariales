import { useState } from "react";
import "./MovieSearch.css";

/**
 * Controlled search input: the text lives in state and onChange updates it on every keystroke.
 * The parent receives the text through `onSearch`; MovieSearch never filters movies itself.
 */
export default function MovieSearch({ onSearch, label = "Buscar película", placeholder = "Título o género" }) {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <form className="movie-search" role="search" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="movie-search-input">{label}</label>
      <input id="movie-search-input" type="search" value={text} onChange={handleChange} placeholder={placeholder} autoComplete="off" />
    </form>
  );
}
