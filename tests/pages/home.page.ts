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
    this.heading = page.locator('.hero__title');
    this.heroDescription = page.locator('.hero__subtitle');
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickGetStarted() {
    await this.getStartedLink.click();
  }
}
