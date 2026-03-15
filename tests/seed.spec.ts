import { test, expect } from './fixtures';

test.describe('Seed - Playwright.dev', () => {
  test('seed', async ({ page, homePage }) => {
    // Navega para a página inicial do Playwright.dev
    await homePage.goto();
    await expect(page).toHaveURL(/playwright\.dev/);
  });
});
