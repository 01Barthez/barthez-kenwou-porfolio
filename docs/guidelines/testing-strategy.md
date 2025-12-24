# Testing strategy

Levels:

- Unit tests: small pure functions and UI components using `vitest` + `@testing-library/react`.
- Integration tests: small flows (form submission) mocking network.
- E2E: optional, use Playwright or Cypress for critical flows.

Rules:

- Tests must be fast and deterministic. Use `msw` or similar to mock network in unit/integration tests.
- CI should run `vitest --run` and publish coverage if needed.
