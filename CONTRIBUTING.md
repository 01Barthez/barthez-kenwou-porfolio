# Contributing

This repository is a template for production-ready frontend projects. Follow these guidelines to keep the codebase high-quality and maintainable.

## Commit messages

- Use Conventional Commits (see commitlint in the project). Example: `feat: add login form`.

## Branches & PRs

- Create feature branches from `development` or `main` depending on workflow.
- Open PRs with clear descriptions and link design/issue.
- CI runs on each PR: format, lint, typecheck, build.

## PR Review

- Assign reviewers and ensure `CODEOWNERS` is satisfied.
- Add changelog notes where relevant.

## Local checks before PR

Run these locally before opening a PR:

```bash
bun install
bun run format:check
bun run lint
bun run typecheck
bun run build
```

## Architecture & Code Standards

- Follow Domain-Driven Design for features (see `docs/ARCHITECTURE.md`).
- Apply SOLID, KISS, DRY.
- Prefer public feature barrels (`src/features/public.ts`) — avoid deep imports into `ui/` or `model/`.
