import { test, expect } from '../fixtures';

test.describe('Playwright.dev - Documentação', () => {
  test('deve exibir a página de instalação corretamente', async ({ docsPage }) => {
    await docsPage.goto();

    await expect(docsPage.installationHeading).toBeVisible();
  });

  test('deve ter a barra lateral de navegação visível', async ({ docsPage }) => {
    await docsPage.goto();

    await expect(docsPage.sidebar).toBeVisible();
  });

  test('deve ter links na tabela de conteúdo', async ({ docsPage }) => {
    await docsPage.goto();

    await expect(docsPage.tocLinks.first()).toBeVisible();
  });

  test('deve ter o botão de busca funcional', async ({ docsPage }) => {
    await docsPage.goto();

    await expect(docsPage.searchButton).toBeVisible();
  });
});
