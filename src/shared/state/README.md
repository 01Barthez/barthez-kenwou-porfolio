State & zustand — conventions

This folder provides helpers and conventions for Zustand usage in this project.

Key files
- `createStore.ts` — factory that composes `devtools` and `persist` middlewares in a consistent way.
- `useThemeStore.ts` — example store using the factory.

Guidelines
- Always prefer the `createAppStore` factory for new stores. It enables devtools in non-production and provides an easy opt-in for persistence.
- Use selective selectors in components to avoid unnecessary re-renders:

```ts
const theme = useThemeStore((s) => s.theme);
```

- For multiple fields, prefer `shallow` equality:

```ts
import { shallow } from 'zustand/shallow';
const { theme, toggleTheme } = useThemeStore((s) => ({ theme: s.theme, toggleTheme: s.toggleTheme }), shallow);
```

DevTools
- Install Redux DevTools browser extension to inspect state when `enableDevtools` is true.
- Devtools are automatically disabled in production builds by default.

Persist
- `createAppStore` uses `localStorage` in the browser. Persist is opt-in per-store using `enablePersist: true`.
- Keep persisted slices small (preferences, auth tokens). Do not persist large UI caches.

Testing
- For unit tests, create ephemeral stores or reset persist state between tests. You can recreate stores by importing the initializer and calling it in `beforeEach`.
