#!/usr/bin/env bash
# set -euo pipefail

echo "[scripts] ci: format check, lint, typecheck, build"

# Prefer bun when available for consistency with local dev, otherwise npm
if command -v bun >/dev/null 2>&1; then
  bun run format:check
  bun run lint
  bun run typecheck
  bun run build
else
  npm run format:check
  npm run lint
  npm run typecheck
  npm run build
fi

echo "[scripts] ci: all steps completed"
