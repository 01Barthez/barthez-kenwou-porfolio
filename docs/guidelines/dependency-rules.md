# Dependency rules

- `shared/` can be imported by any folder.
- `features/` should not import other features directly — use `shared` or `entities` for cross-cutting contracts.
- Avoid importing UI components from `pages` into `shared`.
- Keep third-party libraries listed in `package.json` minimal and audited.
