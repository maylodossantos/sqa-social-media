import { saveUser, getUser } from "@/lib/localStorage";

describe("BUG - LocalStorage", () => {
  test("usuário salvo deve ser recuperado", () => {
    const user = {
      id: 1,
      email: "teste@email.com",
    };

    saveUser(user);

    expect(getUser()).toEqual(user);
  });
});