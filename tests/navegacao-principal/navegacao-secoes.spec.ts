// spec: specs/playwright-docs-test-plan.md  
// seed: tests/seed.spec.ts

import { test, expect } from '../fixtures';

test.describe('Navegação Principal e Layout', () => {
  test('Deve navegar corretamente entre as seções principais', async ({ page }) => {
    // Usar caminho relativo para respeitar a baseURL definida em playwright.config.ts.
    await page.goto('/docs/intro');
    const mainNav = page.getByRole('navigation', { name: 'Main' });

    // 1. Clicar no link 'Docs' no menu principal
    await mainNav.getByRole('link', { name: 'Docs', exact: true }).click();
    
    // Deve permanecer na página de docs ou navegar para a página principal de docs
    await expect(page).toHaveURL(/\/docs/);
    
    // 2. Clicar no link 'API' no menu principal
    await mainNav.getByRole('link', { name: 'API', exact: true }).click();
    
    // Deve navegar para a página da API (docs/api/class-playwright)
    await expect(page).toHaveURL(/\/docs\/api\/class-playwright/);
    
    // 3. Clicar no link 'Community' no menu principal
    await mainNav.getByRole('link', { name: 'Community', exact: true }).click();
    
    // Deve navegar para a página de community
    await expect(page).toHaveURL(/\/community/);
    
    // 4. Clicar no logo do Playwright
    await mainNav.getByRole('link', { name: /Playwright/ }).first().click();
    
    // Deve navegar para a página inicial do site
    await expect(page).toHaveURL('https://playwright.dev/');
  });
});