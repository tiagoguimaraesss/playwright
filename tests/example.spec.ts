import { test, expect } from './fixtures';

test.describe('Playwright.dev - Página Inicial', () => {
  test('deve exibir o título correto da página', async ({ homePage }) => {
    await homePage.goto();

    await expect(homePage.page).toHaveTitle(/Playwright/);
  });

  test('deve navegar para a documentação ao clicar em "Get started"', async ({ homePage }) => {
    await homePage.goto();

    await homePage.clickGetStarted();

    await expect(homePage.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test('deve exibir o link "Get started" visível', async ({ homePage }) => {
    await homePage.goto();

    await expect(homePage.getStartedLink).toBeVisible();
  });
});
