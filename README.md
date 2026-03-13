# 🎭 Playwright E2E Tests

![Playwright E2E Tests](https://github.com/tiagoguimaraesss/playwright/actions/workflows/ci.yml/badge.svg)

Projeto de testes end-to-end (E2E) utilizando o framework [Playwright](https://playwright.dev/) com TypeScript, seguindo as melhores práticas recomendadas pela Microsoft.

## 📁 Estrutura do Projeto

```
playwright/
├── .github/
│   └── workflows/
│       └── ci.yml                # Pipeline CI/CD (GitHub Actions)
├── .mcp.json                     # Configuração do Playwright MCP Server
├── playwright.config.ts          # Configuração principal do Playwright
├── package.json                  # Dependências e scripts do projeto
├── tests/
│   ├── fixtures/                 # Fixtures customizados (reutilização de objetos)
│   │   ├── base.fixture.ts       # Fixture base com Page Objects
│   │   └── index.ts              # Barrel export dos fixtures
│   ├── pages/                    # Page Objects (POM)
│   │   ├── home.page.ts          # Page Object - Página inicial
│   │   ├── docs.page.ts          # Page Object - Documentação
│   │   └── index.ts              # Barrel export dos Page Objects
│   ├── docs/
│   │   └── docs.spec.ts          # Testes da seção de documentação
│   └── example.spec.ts           # Testes da página inicial
└── README.md
```

## 🚀 Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm ou yarn

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Instalar navegadores do Playwright
npx playwright install
```

## 🧪 Executando os Testes

```bash
# Executar todos os testes
npm test

# Executar em modo headed (com navegador visível)
npm run test:headed

# Executar com UI interativa do Playwright
npm run test:ui

# Executar em modo debug
npm run test:debug

# Executar apenas no Chromium
npm run test:chromium

# Executar apenas no Firefox
npm run test:firefox

# Executar apenas no WebKit
npm run test:webkit

# Abrir o relatório HTML
npm run test:report

# Gerar testes com Codegen
npm run test:codegen
```

## 🏗️ Padrões e Boas Práticas

### Page Object Model (POM)
Os Page Objects estão em `tests/pages/` e encapsulam a interação com cada página, seguindo o [padrão recomendado pelo Playwright](https://playwright.dev/docs/pom).

### Fixtures
Fixtures customizados em `tests/fixtures/` permitem reutilizar Page Objects de forma isolada entre os testes, seguindo a [documentação oficial](https://playwright.dev/docs/test-fixtures).

### Locators
Utilizamos os [locators recomendados pelo Playwright](https://playwright.dev/docs/locators), priorizando:
1. `getByRole()` - Acessibilidade
2. `getByText()` - Texto visível
3. `getByTestId()` - Atributos data-testid
4. `getByLabel()` - Labels de formulários

### Web-first Assertions
Todas as asserções utilizam `expect()` com [auto-waiting](https://playwright.dev/docs/test-assertions), garantindo estabilidade nos testes.

## 🤖 Playwright MCP

Este projeto inclui o arquivo `.mcp.json` para integração com o [Playwright MCP Server](https://github.com/microsoft/playwright-mcp), que permite a automação de navegador por LLMs via Model Context Protocol.

## 📊 Relatórios

Após a execução dos testes, o relatório HTML é gerado em `playwright-report/`. Para visualizá-lo:

```bash
npm run test:report
```

## � CI/CD Pipeline (GitHub Actions)

O projeto possui uma pipeline automatizada que roda a cada push ou pull request na branch `main`.

### Etapas da Pipeline

```
┌─────────────┐     ┌─────────────────────┐     ┌──────────────────────┐
│  🏗️ Build   │────▶│    🧪 Test (shards)  │────▶│  📊 Report & Deploy  │
│             │     │  ┌───────────────┐   │     │                      │
│ • Checkout  │     │  │ Shard 1/3     │   │     │ • Merge blob reports │
│ • Node.js   │     │  │ Shard 2/3     │   │     │ • Gerar HTML report  │
│ • npm ci    │     │  │ Shard 3/3     │   │     │ • Deploy Pages       │
│ • Browsers  │     │  └───────────────┘   │     │                      │
└─────────────┘     └─────────────────────┘     └──────────────────────┘
```

| Etapa | Descrição |
|-------|-----------|
| **🏗️ Build** | Instala dependências do Node.js e os navegadores do Playwright com cache |
| **🧪 Test** | Executa os testes em paralelo usando 3 shards para performance |
| **📊 Report** | Faz merge dos relatórios e publica no GitHub Pages |

### Relatório Online

Após cada execução da pipeline, o relatório HTML do Playwright é publicado automaticamente no **GitHub Pages**:

🔗 **[Ver Relatório](https://tiagoguimaraesss.github.io/playwright/)**

### Executar Pipeline Manualmente

A pipeline também pode ser disparada manualmente pela aba **Actions** do repositório (`workflow_dispatch`).

## �📚 Referências

- [Documentação do Playwright](https://playwright.dev/docs/intro)
- [Playwright MCP](https://github.com/microsoft/playwright-mcp)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Playwright Test Fixtures](https://playwright.dev/docs/test-fixtures)
- [Page Object Model](https://playwright.dev/docs/pom)
