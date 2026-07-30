# Contributing

Rules for contributing to this portfolio while keeping quality and architecture intact.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/) (enforced by Commitlint + Husky).

Examples: `feat: …`, `fix: …`, `docs: …`, `chore: …`.

## Branches & PRs

- Branch from `main` (or the active integration branch for your workflow).
- Open a PR with a clear summary and test notes.
- CI runs on PRs (`ci.yml`: format, lint, typecheck, tests, build).

## Review

- Respect [`.github/CODEOWNERS`](./.github/CODEOWNERS).
- Prefer small, reviewable diffs.
- Update docs under `docs/` when behavior, architecture, or deploy paths change.

## Local checks before PR

```bash
bun install
bun run format:check
bun run lint
bun run typecheck
bun run test:ci
bun run build
```

Or: `bun run validate` then `bun run build`.

## Documentation

See [docs/README.md](./docs/README.md) and [docs/guidelines/documentation-rules.md](./docs/guidelines/documentation-rules.md).
