import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SignIn from "@/app/signin/page";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("@/contexts/AuthContext", () => ({
  useAuth: () => ({
    login: jest.fn(),
  }),
}));

describe("SignIn", () => {
  test("mostra erros ao enviar formulário vazio", () => {
    render(<SignIn />);

    const buttons = screen.getAllByRole("button", {
      name: /^entrar$/i,
    });

    fireEvent.click(buttons[1]);

    expect(
      screen.getByText("Email é obrigatório")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Senha é obrigatória")
    ).toBeInTheDocument();
  });
});