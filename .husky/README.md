Husky hooks — Developer onboarding

This project uses Husky, lint-staged and Commitlint to enforce code quality and Conventional Commits.

Quickstart (one-time per machine):

1. Install dependencies:

npm ci
or
bun install

2. Install Husky hooks:

npm run prepare
or (if you prefer):
npx husky install

3. Make hooks executable (if your environment strips execute bits):

chmod +x .husky/* || true

What the hooks do:
- pre-commit: runs lint-staged (ESLint --fix + Prettier) to format and lint staged files.
- commit-msg: validates commit message with Commitlint (Conventional Commits).
- pre-push: runs npm run test:ci and blocks push if tests fail.

Developer tips:
- Use git cz or git commit --no-verify only when you have a good reason.
- If CI fails due to missing Husky, run npm run prepare in CI or locally.
