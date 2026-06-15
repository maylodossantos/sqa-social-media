import { test, expect } from '@playwright/test';

let email = 'msduarte@gmail.com';
let password = 'Maylo123!@';

test('successfully liked a post', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByText('Entrar').click();

  await page.locator('[type="email"]').fill(email);
  await page.locator('[type="password"]').fill(password);

  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL('http://localhost:3000/');

  await page.getByText('Curtir').first().click();

  await expect(page.getByText('Curtido')).toBeVisible();
});
