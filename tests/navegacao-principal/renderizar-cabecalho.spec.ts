// spec: specs/playwright-docs-test-plan.md  
// seed: tests/seed.spec.ts

import { test, expect } from '../fixtures';

test.describe('Navegação Principal e Layout', () => {
  test('Deve renderizar corretamente o cabeçalho principal', async ({ page }) => {
    // 1. Navegar para a página de documentação do Playwright
    // Usar caminho relativo para respeitar a baseURL definida em playwright.config.ts.
    await page.goto('/docs/intro');
    const mainNav = page.getByRole('navigation', { name: 'Main' });

    // O logo do Playwright deve estar visível
    await expect(mainNav.getByRole('link', { name: /Playwright logo Playwright/ })).toBeVisible();
    
    // Os links principais (Docs, API, Community) devem estar presentes
    await expect(mainNav.getByRole('link', { name: 'Docs', exact: true })).toBeVisible();
    await expect(mainNav.getByRole('link', { name: 'API', exact: true })).toBeVisible();
    await expect(mainNav.getByRole('link', { name: 'Community', exact: true })).toBeVisible();
    
    // O botão de seleção de linguagem 'Node.js' deve estar visível
    await expect(mainNav.getByRole('button', { name: 'Node.js', exact: true })).toBeVisible();
    
    // O botão de busca deve estar presente com placeholder ou ícone
    await expect(mainNav.getByRole('button', { name: /Search/ })).toBeVisible();
    
    // O alternador de tema deve estar presente
    await expect(mainNav.getByRole('button', { name: /Switch between dark and light mode/ })).toBeVisible();
  });
});