# ✨ Features

Features represent user-facing capabilities that provide direct business value. In this portfolio, features focus on engagement and presentation.

## Key Features

- [**Theme Management**](./theme-switching.md) — Dynamic Dark/Light mode engine.
- [**Internationalization (I18n)**](./i18n.md) — Multilingual support.
- [**Blog Engine**](./blog-engine.md) — Dynamic content delivery and rendering.
- [**Portfolio Filtering**](./portfolio-filtering.md) — Browsing projects by category/tech.

## Functional Specs

1. **Isolation**: Every feature should be as isolated as possible from other features.
2. **Coupling**: Features can use **Entities** and **Shared** layers, but should never depend on other **Features** or **Pages**.
3. **Public API**: Only expose what is necessary via the `index.ts` of the feature slice.
