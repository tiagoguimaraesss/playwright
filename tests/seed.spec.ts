import { test, expect } from './fixtures';

/**
 * Smoke test independente para validar disponibilidade do site.
 * Execute com: playwright test seed.spec.ts
 */
test.describe('Smoke - Playwright.dev', () => {
  test('site deve estar acessível', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.page).toHaveURL(/playwright\.dev/);
  });
});
