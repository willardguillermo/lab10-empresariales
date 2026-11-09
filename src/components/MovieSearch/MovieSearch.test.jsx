import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import MovieSearch from "./MovieSearch.jsx";

describe("MovieSearch", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(console, "info").mockImplementation(() => {});
    vi.spyOn(console, "debug").mockImplementation(() => {});
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  test("is a controlled input that shows every keystroke", () => {
    render(<MovieSearch onSearch={() => {}} />);
    const input = screen.getByRole("searchbox", { name: "Buscar película" });
    fireEvent.change(input, { target: { value: "rob" } });
    expect(input).toHaveValue("rob");
  });

  test("notifies the parent only after the delay, with the last text", () => {
    const onSearch = vi.fn();
    render(<MovieSearch onSearch={onSearch} delay={400} />);
    onSearch.mockClear();
    const input = screen.getByRole("searchbox");
    fireEvent.change(input, { target: { value: "r" } });
    fireEvent.change(input, { target: { value: "ro" } });
    fireEvent.change(input, { target: { value: "rob" } });
    expect(onSearch).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(400));
    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("rob");
  });
});
