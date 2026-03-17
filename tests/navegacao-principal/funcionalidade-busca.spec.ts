// spec: specs/playwright-docs-test-plan.md  
// seed: tests/seed.spec.ts

import { test, expect } from '../fixtures';

test.describe('Navegação Principal e Layout', () => {
  test('Deve funcionar corretamente o botão de busca', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/intro');

    // 1. Clicar no botão de busca
    await page.getByRole('button', { name: 'Search' }).click();
    
    // Deve abrir o modal ou interface de busca
    await expect(page.getByRole('searchbox', { name: 'Search' })).toBeVisible();
    
    // Fechar modal de busca com Escape
    await page.keyboard.press('Escape');
    
    // 2. Pressionar Ctrl+K (Linux/Windows) ou Cmd+K (Mac)
    await page.keyboard.press('ControlOrMeta+k');
    
    // Deve abrir a interface de busca via teclado
    await expect(page.getByRole('searchbox', { name: 'Search' })).toBeVisible();
  });
});