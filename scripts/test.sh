#!/usr/bin/env bash
# set -euo pipefail

echo "[scripts] test: running unit tests (watch mode)"
# Run Vitest in watch mode directly
if command -v npx >/dev/null 2>&1; then
  npx vitest --watch
elif command -v bunx >/dev/null 2>&1; then
  bunx vitest --watch
else
  ./node_modules/.bin/vitest --watch || echo "vitest not found"
fi
