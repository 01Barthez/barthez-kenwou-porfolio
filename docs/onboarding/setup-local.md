# Setup local development

1. Prerequisites

- Node 18+ (or Bun if you prefer). This repo supports both but CI expects Node.
- Docker (optional) for running the prod-like container.
- Git and a working editor.

2. Install dependencies

```bash
npm install
# or
bun install
```

3. Environment

- Copy `.env.example` to `.env` and adapt values (SITE_URL, VITE_API_BASE_URL, VITE_ENABLE_PWA).

4. Start dev server

```bash
sh ./scripts/dev.sh
```

5. Useful commands

- `sh ./scripts/build.sh` — build production assets
- `sh ./scripts/test.sh` — run tests (watch)
- `sh ./scripts/ci.sh` — run CI checks locally
