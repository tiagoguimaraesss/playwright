// spec: specs/playwright-docs-test-plan.md  
// seed: tests/seed.spec.ts

import { test, expect } from '../fixtures';

test.describe('Navegação Principal e Layout', () => {
  test('Deve funcionar corretamente o botão de busca', async ({ docsPage }) => {
    await docsPage.goto();

    // 1. Clicar no botão de busca
    await docsPage.openSearch();
    
    // Deve abrir o modal ou interface de busca
    await expect(docsPage.searchBox).toBeVisible();
    
    // Fechar modal de busca com Escape
    await docsPage.closeSearchWithEscape();
    
    // 2. Pressionar Ctrl+K (Linux/Windows) ou Cmd+K (Mac)
    await docsPage.openSearchWithShortcut();
    
    // Deve abrir a interface de busca via teclado
    await expect(docsPage.searchBox).toBeVisible();
  });

  test('Deve permitir pesquisar na documentação', async ({ docsPage }) => {
    await docsPage.goto();

    await docsPage.searchFor('fixtures');

    await expect(docsPage.searchBox).toHaveValue('fixtures');
  });
});