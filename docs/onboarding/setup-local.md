# 🚀 Setup Local Development

Follow these steps to get the **Barthez Kenwou Portfolio** running on your machine.

## 1. Prerequisites

- **Bun** (version >= 1.3): Recommended for install, scripts, and runtime.
- **Node.js** (version >= 18): Fallback for specific CI scripts.
- **Git**: For version control.

## 2. Installation

We use **Bun** for ultra-fast dependency management.

```bash
bun install
```

## 3. Environment Configuration

Copy the example environment file and adjust the values as needed.

```bash
cp .env.example .env
```

Key variables:
- `VITE_SITE_URL`: Your local or production URL.
- `VITE_ENABLE_PWA`: Set to `true` to test Progressive Web App features.

## 4. Run Development Server

```bash
bun run dev
```

The application will be accessible at `http://localhost:5173`.

## 5. Daily Workflow Commands

| Action | Command |
| :--- | :--- |
| **Build** | `bun run build` |
| **Lint** | `bun run lint` |
| **Typecheck** | `bun run typecheck` |
| **Test** | `bun run test` |
| **Storybook** | `bun run storybook` |
| **CI Simulation** | `bun run validate` |
