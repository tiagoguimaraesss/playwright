// spec: specs/playwright-docs-test-plan.md  
// seed: tests/seed.spec.ts

import { test, expect } from '../fixtures';

test.describe('Navegação Principal e Layout', () => {
  test('Deve navegar corretamente entre as seções principais', async ({ docsPage }) => {
    await docsPage.goto();

    // 1. Clicar no link 'Docs' no menu principal
    await docsPage.clickDocsLink();
    
    // Deve permanecer na página de docs ou navegar para a página principal de docs
    await expect(docsPage.page).toHaveURL(/\/docs/);
    await expect(docsPage.installationHeading).toBeVisible();
    
    // 2. Clicar no link 'API' no menu principal
    await docsPage.clickApiLink();
    
    // Deve navegar para a página da API (docs/api/class-playwright)
    await expect(docsPage.page).toHaveURL(/\/docs\/api\/class-playwright/);
    await expect(docsPage.page.getByRole('heading', { name: 'Playwright Library' })).toBeVisible();
    
    // 3. Clicar no link 'Community' no menu principal
    await docsPage.clickCommunityLink();
    
    // Deve navegar para a página de community
    await expect(docsPage.page).toHaveURL(/\/community/);
    await expect(docsPage.page.getByRole('heading', { level: 1, name: 'Welcome' })).toBeVisible();
    
    // 4. Clicar no logo do Playwright
    await docsPage.clickLogoLink();
    
    // Deve navegar para a página inicial do site
    await expect(docsPage.page).toHaveURL('/');
  });
});