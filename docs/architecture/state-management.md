# State management

Principles

- Prefer local component state for ephemeral UI state.
- Use `zustand` for lightweight global stores (theme, cart, persisted small stores).
- For complex remote data, prefer query libraries (React Query) or centralized caching in feature models.

Examples

- `src/shared/state/useThemeStore.ts` — persistent theme store using `zustand`.
- `widgets/CartWidget` — uses local store and keeps side effects in model/service files.

When to introduce more complex solutions

- If your application needs background syncing, offline-first, or complex caching semantics, evaluate React Query or a dedicated state machine.
