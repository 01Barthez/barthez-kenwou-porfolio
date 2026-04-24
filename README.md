# 🚀 Barthez Kenwou Portfolio

> **Full Stack Developer & DevOps Engineer | AWS Cloud Specialist**

Welcome to the source code of my professional portfolio. This project is a showcase of modern web engineering, featuring high-performance rendering, sophisticated animations, and a robust architectural foundation.

---

[![Build Status](https://img.shields.io/github/actions/workflow/status/org/barthez-kenwou-portfolio/ci.yml?branch=main)](https://github.com/org/barthez-kenwou-portfolio/actions/workflows/ci.yml)
[![Version](https://img.shields.io/badge/version-1.4.0-blue.svg)](./package.json)
[![License](https://img.shields.io/badge/license-UNLICENSED-red.svg)](./LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

---

## ✨ Key Features

- **💎 Premium UX/UI**: Sophisticated Dark/Light modes, Aurora backgrounds, interactive Cobe 3D Globe, and smooth Framer Motion transitions.
- **🏗 FSD Architecture**: Strictly follows **Feature-Sliced Design** for maximum modularity and maintainability.
- **📝 Markdown Blog**: Dynamic blog engine powered by **Velite** and **Shiki** for beautiful syntax highlighting.
- **🌐 Multilingual**: Full internationalization (I18n) support via `i18next`.
- **⚡ Performance First**: Powered by **Vite (Rolldown)** and **Bun**, achieving near-perfect Lighthouse scores.
- **📱 PWA Ready**: Installable application with offline support and optimized assets.
- **🧪 Quality Orchestration**: Vitest for units, Cypress for E2E, and Lighthouse CI for performance monitoring.

---

## 🛠 Tech Stack

| Layer | Tools |
| :--- | :--- |
| **Foundation** | React 18, TypeScript, Vite (Rolldown Engine) |
| **Styling** | Tailwind CSS 4, Framer Motion, Motion |
| **Content** | Velite, React Markdown, Shiki |
| **State** | Zustand |
| **Forms** | React Hook Form, Zod |
| **QA** | Vitest, Cypress, Storybook, Lighthouse CI |
| **Environment** | Bun, Husky, Commitlint |

---

## 🏗 Project Structure

The project follows the **Feature-Sliced Design** methodology:

```bash
src/
├── app/       # Bootstrap (providers, routes, global styles)
├── pages/     # Page composition (Home, Blog, Projects, etc.)
├── widgets/   # Complex UI blocks (Navbar, Footer, Sidebar)
├── features/  # Interactive user scenarios (ThemeToggle, I18n)
├── entities/  # Domain models (Article, Project, Skill)
└── shared/    # Infrastructure (UI Kit, Hooks, API, Utils)
```

For more details, see the [**Documentation Folder**](./docs/).

---

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (version >= 1.3)
- Node.js (version >= 18)

### Installation
1. **Clone & Enter:**
   ```bash
   git clone https://github.com/org/barthez-kenwou-portfolio.git
   cd barthez-kenwou-portfolio
   ```
2. **Install Dependencies:**
   ```bash
   bun install
   ```
3. **Environment Setup:**
   ```bash
   cp .env.example .env
   ```

### Development
```bash
bun dev
```
Open `http://localhost:5173` to see the magic.

---

## 🛠 Scripts

| Command | Description |
| :--- | :--- |
| `bun run build` | Production build (via `scripts/build.sh`) |
| `bun run lint` | Run ESLint checks |
| `bun run test` | Execute unit tests with Vitest |
| `bun run storybook` | Launch component documentation |
| `bun run e2e:open` | Open Cypress for integration testing |

---

## 📄 License
This project is `UNLICENSED`. Self-hosted and managed by **Barthez Kenwou**.
