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
  readonly mainNav: Locator;
  readonly logoLink: Locator;
  readonly docsLink: Locator;
  readonly apiLink: Locator;
  readonly communityLink: Locator;
  readonly languageButton: Locator;
  readonly themeToggleButton: Locator;
  readonly searchButton: Locator;
  readonly searchBox: Locator;
  readonly sidebar: Locator;
  readonly tocLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
    this.mainNav = page.getByRole('navigation', { name: 'Main' });
    this.logoLink = this.mainNav.getByRole('link', { name: /Playwright/ }).first();
    this.docsLink = this.mainNav.getByRole('link', { name: 'Docs', exact: true });
    this.apiLink = this.mainNav.getByRole('link', { name: 'API', exact: true });
    this.communityLink = this.mainNav.getByRole('link', { name: 'Community', exact: true });
    this.languageButton = this.mainNav.getByRole('button', { name: 'Node.js', exact: true });
    this.themeToggleButton = this.mainNav.getByRole('button', {
      name: /Switch between dark and light mode/,
    });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.searchBox = page.getByRole('searchbox', { name: 'Search' });
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

  async openSearch() {
    await this.searchButton.click();
  }

  async openSearchWithShortcut() {
    await this.page.keyboard.press('ControlOrMeta+k');
  }

  async closeSearchWithEscape() {
    await this.page.keyboard.press('Escape');
  }

  async searchFor(query: string) {
    await this.openSearch();
    await this.searchBox.fill(query);
  }

  async clickDocsLink() {
    await this.docsLink.click();
  }

  async clickApiLink() {
    await this.apiLink.click();
  }

  async clickCommunityLink() {
    await this.communityLink.click();
  }

  async clickLogoLink() {
    await this.logoLink.click();
  }
}
