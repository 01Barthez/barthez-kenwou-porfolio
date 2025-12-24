# @org/frontend-app **Frontend platform for customer-facing applications**

---

[![Build Status](https://img.shields.io/github/actions/workflow/status/org/frontend-app/ci.yml?branch=main)](https://github.com/org/frontend-app/actions/workflows/ci.yml)
[![Coverage Status](https://img.shields.io/codecov/c/github/org/frontend-app)](https://codecov.io/gh/org/frontend-app)
[![License](https://img.shields.io/github/license/org/frontend-app)](./LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

This repository contains the source code for the customer-facing frontend platform. It is a production-ready, modular, and scalable React application built with modern web technologies.

**Live Demo:** [www.example.com](https://www.example.com)

## Key Features

- **Modern Tech Stack:** Built with React 19, Vite, and TypeScript.
- **Professional Styling:** Styled with Tailwind CSS for a utility-first workflow.
- **Scalable Architecture:** Follows a modular, Domain-Driven Design (DDD) approach, inspired by Feature-Sliced Design.
- **State Management:** Uses Zustand for simple and scalable global state management.
- **Robust Testing:** Includes unit/integration tests with Vitest, and E2E tests with Cypress.
- **Component Library:** Isolated component development and testing with Storybook.
- **PWA Ready:** Configured as a Progressive Web App for an enhanced user experience.
- **Automated Workflows:** CI/CD pipelines for linting, testing, building, and quality checks (Lighthouse).
- **Developer Experience:** Pre-configured with Husky, commitlint, ESLint, and Prettier for high-quality, consistent code.

## Project Structure

The project follows a modular architecture to separate concerns and improve scalability. High-level directory structure:

```bash
/root
├── docs/          # Project documentation (ADRs, guidelines, etc.)
├── public/        # Static assets
├── scripts/       # Helper scripts for CI/CD and local dev
└── src/
    ├── app/       # App-level setup: routing, providers, global styles
    ├── pages/     # Page components, composed of features and widgets
    ├── widgets/   # Complex UI components (e.g., Navbar, Footer)
    ├── features/  # Business logic features (e.g., auth, checkout)
    ├── entities/  # Core business models and UI representations
    └── shared/    # Reusable code: UI kit, libs, config, helpers
```

For a deeper dive, please see the [**Architecture Documentation**](./docs/architecture/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version >= 18)
- [Bun](https://bun.sh/) (version >= 1.3)

### Installation

1. **Clone the repository:**

```bash
    git clone https://github.com/org/frontend-app.git
    cd frontend-app
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

3.  **Set up environment variables:**

    Copy the example environment file and update it with your local configuration.
    ```bash
    cp .env.example .env
    ```
    See the [`.env.example`](./.env.example) file for a list of all required variables.

### Running the Development Server

To start the local development server, run:

```bash
bun run dev
```

The application will be available at `http://localhost:5173`.

## Available Scripts

This project comes with a set of useful scripts defined in `package.json`:

| Script | Description |
| :--- | :--- |
| `bun run dev` | Starts the development server with Hot Module Replacement. |
| `bun run build` | Compiles the app for production. |
| `bun run preview` | Serves the production build locally for preview. |
| `bun run lint` | Lints all source files using ESLint. |
| `bun run format` | Formats all source files using Prettier. |
| `bun run test` | Runs all unit and integration tests with Vitest. |
| `bun run test:coverage` | Generates a test coverage report. |
| `bun run e2e:open` | Opens the Cypress test runner for E2E testing. |
| `bun run storybook` | Starts the Storybook component explorer. |

## Testing

- **Unit & Integration Tests:** Run `bun test` to execute all tests.
- **End-to-End (E2E) Tests:** Run `bun run e2e:run` to execute Cypress tests in headless mode. Make sure the dev server is running first.

## Contributing

Contributions are welcome! Please read our [**Contributing Guidelines**](./CONTRIBUTING.md) to get started. This document outlines our commit conventions, branch strategy, and PR process.

## Documentation

All project documentation, including architectural decisions and coding guidelines, is located in the [`/docs`](./docs) directory. Start with the [**Docs README**](./docs/README.md) for an overview.

## License

This project is `UNLICENSED`.
