import type { Page, Locator } from '@playwright/test';

/**
 * DocsPage - Page Object para a seção de documentação do Playwright.dev
 *
 * Segue o padrão Page Object Model (POM) recomendado pelo Playwright:
 * https://playwright.dev/docs/pom
 */
export class DocsPage {
  readonly page: Page;
  readonly installationHeading: Locator;
  readonly searchButton: Locator;
  readonly sidebar: Locator;
  readonly tocLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.sidebar = page.getByRole('navigation', { name: 'Docs sidebar' });
    // O sumário (TOC) do Docusaurus é renderizado como uma <ul> simples sem papel ARIA
    // ou nome acessível. A classe CSS .table-of-contents__link é o seletor mais
    // estável disponível neste caso.
    // https://playwright.dev/docs/locators#locate-by-css-or-xpath
    this.tocLinks = page.locator('.table-of-contents__link');
  }

  async goto() {
    await this.page.goto('/docs/intro');
  }

  async searchFor(query: string) {
    await this.searchButton.click();
    await this.page.getByPlaceholder('Search docs').fill(query);
  }
}
