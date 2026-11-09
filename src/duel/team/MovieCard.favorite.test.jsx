import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { movies } from "../../data/movies.js";
import MovieCard from "./MovieCard.jsx";

describe("MovieCard favorite button", () => {
  test("tells the parent which movie was toggled, without owning the state", () => {
    const onToggleFavorite = vi.fn();
    render(<MovieCard movie={movies[1]} onToggleFavorite={onToggleFavorite} />);
    fireEvent.click(screen.getByRole("button", { name: /añadir a favoritas/i }));
    expect(onToggleFavorite).toHaveBeenCalledWith(movies[1].id);
  });

  test("shows the current state received by props", () => {
    render(<MovieCard movie={movies[1]} isFavorite onToggleFavorite={() => {}} />);
    expect(screen.getByRole("button", { name: /en favoritas/i })).toHaveAttribute("aria-pressed", "true");
  });

  test("hides the button when no handler is given", () => {
    render(<MovieCard movie={movies[1]} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
