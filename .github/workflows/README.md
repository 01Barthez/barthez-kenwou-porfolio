# Workflows Directory

Each workflow in `.github/workflows` is documented below with triggers, jobs and required secrets.

1) `ci.yml` (CI)

- Triggers: `push` and `pull_request` on `main`, `develop`.
- Jobs: `build` — runs Format check, Lint, Typecheck, Tests (CI) and Build.
- Artifacts: uploads `dist` on success.

2) `deploy-vercel.yml` (Production deploy)

- Triggers: `push` on `main` only.
- Requirements: repository `VERCEL_TOKEN` secret (and optionally `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`).
- Action used: `amondnet/vercel-action@v20`.

How to configure secrets

1. Go to your GitHub repository Settings → Secrets → Actions.
2. Add `VERCEL_TOKEN` (create one in Vercel dashboard under Account Settings → Tokens).
3. Optionally add `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` (found in Vercel project dashboard or via CLI).
