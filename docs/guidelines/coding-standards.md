# Coding standards

Keep code readable and consistent. Main rules:

- Use TypeScript strict mode; prefer explicit types for public APIs.
- Prefer named exports; avoid default exports.
- Small functions: keep functions < 80 lines when possible.
- Always run `npm run format:fix` and `npm run lint:fix` before committing.
- Use `lint-staged` and Husky to enforce pre-commit checks.

Files to update:

- `prettier` and `eslint` configs live at project root. Follow their rules.
