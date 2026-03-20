import { test, expect } from '../fixtures';

test.describe('Playwright.dev - Documentação', () => {
  test.beforeEach(async ({ docsPage }) => {
    await docsPage.goto();
  });
  // Valida o carregamento direto da página de docs (acesso via URL).
  // Diferente de example.spec.ts que testa o fluxo via botão "Get started".
  test('deve exibir a página de instalação corretamente', async ({ docsPage }) => {
    await expect(docsPage.installationHeading).toBeVisible();
  });

  test('deve ter a barra lateral de navegação visível', async ({ docsPage }) => {
    await expect(docsPage.sidebar).toBeVisible();
  });

  test('deve ter links na tabela de conteúdo', async ({ docsPage }) => {
    await expect(docsPage.tocLinks.first()).toBeVisible();
  });
});
