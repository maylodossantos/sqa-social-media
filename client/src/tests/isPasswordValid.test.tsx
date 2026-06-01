import { isPasswordValid } from "@/utils/password";

describe("isPasswordValid", () => {
  test("retorna true para senha válida", () => {
    expect(isPasswordValid("Senha123!")).toBe(true);
  });

  test("retorna false para senha inválida", () => {
    expect(isPasswordValid("123")).toBe(false);
  });
});