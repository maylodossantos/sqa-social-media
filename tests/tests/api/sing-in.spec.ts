import { test, expect, request as pwRequest } from "@playwright/test";

const API_BASE = "http://localhost:8080";

test.describe("Sign-In API", () => {
    test("POST /auth/signin", async () => {
    const api = await pwRequest.newContext({
      baseURL: API_BASE,
      extraHTTPHeaders: { "Content-Type": "application/json" },
    });

    const email = 'msduarte@minha.fag.edu.br';
    const password = 'Dilminha123!#';

    const loginResp = await api.post("/auth/signin", {
        data: { email, password }
    });

    const loginBody = await loginResp.json();

    expect(loginResp.status()).toBe(200);
    expect(loginBody.email).toBe(email);
    expect(loginBody.password).toBe(password);
    });
});