# Routing and composition

Routing approach

- Use `react-router-dom` for route composition.
- Keep route definitions in `src/app/routes.tsx` (or `app/routes.tsx`) and compose per-page providers at the route level.

Composition rules

- Each page component should be a thin composition of feature UI components and data hooks.
- Data fetching should be done in feature `model/` folders with hooks (`useMenuBrowse`, `useLogin`).

Lazy loading

- Code-split routes with dynamic imports to keep initial bundle small.
