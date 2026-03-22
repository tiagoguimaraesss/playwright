// spec: specs/playwright-docs-test-plan.md  
// seed: tests/seed.spec.ts

import { test, expect } from '../fixtures';

test.describe('Navegação Principal e Layout', () => {
  test('Deve renderizar corretamente o cabeçalho principal', async ({ docsPage }) => {
    await docsPage.goto();

    // O logo do Playwright deve estar visível
    await expect(docsPage.logoLink).toBeVisible();
    
    // Os links principais (Docs, API, Community) devem estar presentes
    await expect(docsPage.docsLink).toBeVisible();
    await expect(docsPage.apiLink).toBeVisible();
    await expect(docsPage.communityLink).toBeVisible();
    
    // O botão de seleção de linguagem 'Node.js' deve estar visível
    await expect(docsPage.languageButton).toBeVisible();
    
    // O botão de busca deve estar presente com placeholder ou ícone
    await expect(docsPage.searchButton).toBeVisible();
    
    // O alternador de tema deve estar presente
    await expect(docsPage.themeToggleButton).toBeVisible();
  });
});