import type { Page, Locator } from '@playwright/test';

/**
 * HomePage - Page Object para a página inicial do Playwright.dev
 *
 * Segue o padrão Page Object Model (POM) recomendado pelo Playwright:
 * https://playwright.dev/docs/pom
 */
export class HomePage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly heading: Locator;
  readonly heroDescription: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    // Locators de role/text são preferíveis a seletores de classe CSS.
    // https://playwright.dev/docs/locators#locate-by-role
    this.heading = page.getByRole('heading', { level: 1 });
    this.heroDescription = page.getByText(/Any browser/i);
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickGetStarted() {
    await this.getStartedLink.click();
  }
}
