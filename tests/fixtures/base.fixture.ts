import { test as base } from '@playwright/test';
import { HomePage, DocsPage } from '../pages';

/**
 * Custom fixtures que estendem o test base do Playwright.
 *
 * Fixtures são a forma recomendada pelo Playwright para compartilhar
 * objetos entre testes, garantindo isolamento e reutilização.
 * https://playwright.dev/docs/test-fixtures
 */
type TestFixtures = {
  homePage: HomePage;
  docsPage: DocsPage;
};

export const test = base.extend<TestFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  docsPage: async ({ page }, use) => {
    const docsPage = new DocsPage(page);
    await use(docsPage);
  },
});

export { expect } from '@playwright/test';
