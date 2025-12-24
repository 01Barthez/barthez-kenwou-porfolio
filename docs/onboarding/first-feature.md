# Ship your first feature

This guide walks you through adding a simple UI piece and shipping it.

1. Create a feature folder inside `src/features/my-feature` with `ui/`, `model/` and `index.ts`.

2. Implement UI in `ui/MyWidget.ui.tsx` using shared components.

3. Add data logic to `model/useMyFeature.ts` and extract API calls to `src/shared/api`.

4. Register a route in `src/app/routes.tsx` and lazy-load the page.

5. Run tests and linters, open a PR with clear description and link to docs.
