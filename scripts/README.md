Scripts helpers

Usage:

- `./scripts/dev.sh` — starts dev server (runs env check first). Uses `bun` if available, otherwise `npm`.
- `./scripts/build.sh` — validates env and runs build.
- `./scripts/test.sh` — run tests (watch mode).
- `./scripts/test-ci.sh` — run tests in CI (--run).
- `./scripts/lint.sh` — run ESLint.
- `./scripts/format.sh` — run Prettier.
- `./scripts/ci.sh` — run CI pipeline steps (format:check, lint, typecheck, build).

Mark scripts executable: `chmod +x scripts/*.sh` after pulling.
