# 🚀 Project Analysis: Barthez Kenwou Portfolio

## 📌 Executive Summary
The **Barthez Kenwou Portfolio** is a high-end, modern web application designed to showcase the skills, projects, and professional background of a Full Stack Developer & DevOps Engineer. The project stands out for its sophisticated design, interactive elements, and robust architectural foundations using **Feature-Sliced Design (FSD)**.

---

## 🛠 Tech Stack & Tools

| Category | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite (Custom Rolldown), TypeScript |
| **Styling** | Tailwind CSS 4, Framer Motion, Motion, Radix UI |
| **Architecture** | Feature-Sliced Design (FSD) |
| **State Management** | Zustand |
| **Content** | Velite, React Markdown, Shiki (Syntax Highlighting) |
| **I18n** | i18next, React i18next |
| **Forms** | React Hook Form, Zod |
| **Testing** | Vitest, Cypress |
| **Documentation** | Storybook, JSDoc |
| **CI/CD / Quality** | Husky, Commitlint, Lighthouse CI, PWA |

---

## 🏗 Architecture Overview (FSD)
The project is strictly organized following **Feature-Sliced Design**, which ensures scalability and maintainability:

- **`src/app`**: Root configuration (providers, router, global styles).
- **`src/pages`**: Composition layer for pages. 
    - *Home, About, Blog, Contact, CV, Projects, Services, Skills.*
- **`src/widgets`**: Composition of features and entities into larger UI blocks (e.g., Navbar, Footer).
- **`src/features`**: Implementation of user scenarios (e.g., Theme switching, Language toggle, Contact form).
- **`src/entities`**: Business logic and domain data (e.g., Blog content, Project data).
- **`src/shared`**: Reusable infrastructure (UI components, hooks, utility functions).

---

## ✨ Key Features & User Experience

### 1. **Premium Visual Experience**
- **Dynamic Themes**: Dark and Light modes with complex animations (Aurora backgrounds, interactive blobs).
- **Interactive UI**: Custom cursors, mouse particles, and 3D globes (Cobe/Three.js).
- **Micro-interactions**: Use of Framer Motion for smooth transitions and hover effects.

### 2. **Technical Excellence**
- **I18n Ready**: Full support for multiple languages using `i18next`.
- **Dynamic Blog**: Content is managed via Markdown files, processed by **Velite**, and rendered with high-quality syntax highlighting (Shiki).
- **Performance Optimized**: Uses code splitting, image optimization (Vite Imagemin), and follows PWA best practices.
- **Accessibility**: Integration of Radix UI primitives ensuring ARIA compliance.

### 3. **DevOps & Professional Grade**
- **Quality Gates**: ESLint, Prettier, and Commitlint setup with Husky git hooks.
- **Automated Performance Audit**: Lighthouse CI integration for tracking performance metrics.
- **E2E Testing**: Cypress for critical user path testing.

---

## 📁 Key File Locations
- **Content Config**: `velite.config.ts`
- **Tailwind Config**: `tailwind.config.ts`
- **Global Styles**: `src/index.css` & `src/app/style/`
- **Shared Components**: `src/shared/ui/`
- **Pages**: `src/pages/public/`

---

## 🚀 Getting Started (Fast Track)

### Installation
```bash
bun install
```

### Development
```bash
bun dev
```

### Build & Production
```bash
bun run build
bun run preview
```

### Verification
```bash
bun run lint
bun run typecheck
bun run test
```

---

## 🎨 Design Philosophy
The portfolio follows a "Glassmorphism" and "Dark Modern" aesthetic, prioritizing:
- **Contrast and Readability**
- **Motion-driven UI**
- **Typography-first design**
- **Developer-centric details** (Terminal components, code blocks).
