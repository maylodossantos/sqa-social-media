import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button", () => {
  test("mostra carregando quando isLoading=true", () => {
    render(<Button isLoading>Salvar</Button>);

    expect(
      screen.getByText("Carregando...")
    ).toBeInTheDocument();
  });
});