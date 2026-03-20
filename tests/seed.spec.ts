import { test, expect } from './fixtures';

/**
 * Smoke test — verifica que o site está acessível antes de qualquer suíte.
 * Execute com: playwright test seed.spec.ts
 */
test.describe('Smoke - Playwright.dev', () => {
  test('site deve estar acessível', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.page).toHaveURL(/playwright\.dev/);
  });
});
