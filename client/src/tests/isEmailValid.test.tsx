import { isEmailValid } from "@/utils/email";

describe("isEmailValid", () => {
  test("retorna true para email válido", () => {
    expect(isEmailValid("teste@email.com")).toBe(true);
  });

  test("retorna false para email inválido", () => {
    expect(isEmailValid("teste")).toBe(false);
  });
});