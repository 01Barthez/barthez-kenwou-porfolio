# Frontend architecture

Overview

This project follows a feature-first, Domain-Driven-ish structure. Top-level directories are organized by intent: `features/` for product verticals, `entities/` for domain models, `shared/` for reusable UI and libs, and `app/` for global bootstrap and routing.

Key principles

- Single responsibility per file and folder.
- Prefer named exports and avoid default exports for discoverability.
- Keep UI dumb where possible: move side effects and network calls into `model/` or `api/`.
- Barrels are allowed for public surface (`features/index.ts`) but avoid deep cross-feature imports.

Build & deploy

- Build: Vite + TypeScript produce a static `dist/` folder.
- Serve: recommended to serve static files with a simple nginx image (see `docker/`).
- CI should run `format:check`, `lint`, `typecheck`, `test:ci`, and `build`.
