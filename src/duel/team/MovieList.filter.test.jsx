import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { movies } from "../../data/movies.js";
import MovieList from "./MovieList.jsx";

describe("MovieList filter", () => {
  test("filters by title ignoring case and accents", () => {
    render(<MovieList movies={movies} query="CODIGO" />);
    expect(screen.getAllByRole("article")).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 3, name: "Código Fantasma" })).toBeInTheDocument();
  });

  test("shows an empty state when nothing matches", () => {
    render(<MovieList movies={movies} query="zzz" />);
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Ninguna película coincide con «zzz».");
  });
});
