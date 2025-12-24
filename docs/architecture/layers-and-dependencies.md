# Layers and dependencies

Logical layers

- App bootstrap (`src/app`): providers, routing and app-level composition.
- Features (`src/features`): UI + model + feature-specific API.
- Entities (`src/entities`): domain schemas, types and mappers.
- Shared (`src/shared`): UI primitives, hooks, state stores, API client and utils.

Dependency rules

- Higher-level modules (features) may depend on lower-level shared utilities and entities.
- Shared modules must remain dependency-light and not import features.
- Avoid circular dependencies; prefer explicit small interfaces for cross-cutting concerns.

Third-party libs

- Vite: build/dev server.
- React + React DOM: UI.
- Axios: network client.
- Zustand: local state (persisted stores for theme, cart, etc.).
