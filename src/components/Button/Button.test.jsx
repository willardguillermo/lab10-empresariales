import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Button from "./Button.jsx";

describe("Button", () => {
  test("renders its children and the requested variant", () => {
    render(<Button variant="secondary">Comprar</Button>);
    const button = screen.getByRole("button", { name: "Comprar" });
    expect(button).toHaveClass("btn", "btn--secondary");
    expect(button).toHaveAttribute("type", "button");
  });

  test("falls back to primary with an unknown variant", () => {
    render(<Button variant="rainbow">Ok</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn--primary");
  });

  test("renders a link when it receives href", () => {
    render(<Button href="#cartelera">Ver cartelera</Button>);
    expect(screen.getByRole("link", { name: "Ver cartelera" })).toHaveAttribute("href", "#cartelera");
  });

  test("calls onClick", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Clic</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
