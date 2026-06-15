import { test, expect, request as pwRequest } from "@playwright/test";

const API_BASE = "http://localhost:8080";

test.describe("Like Post API", () => {
    test("POST /{postId}/like", async () => {
    const api = await pwRequest.newContext({
      baseURL: API_BASE,
      extraHTTPHeaders: { "Content-Type": "application/json" },
    });

    const userId = 1;
    const postId = 1;

    const resp1 = await api.post(`/posts/${postId}/like?userId=${userId}`);

    const body1 = await resp1.json();

    const resp2 = await api.post(`/posts/${postId}/like?userId=${userId}`);

    const body2 = await resp2.json();

    expect(resp1.status()).toBe(200);
    expect(resp2.status()).toBe(200);

    expect(body1.liked).not.toBe(body2.liked);
    });
});