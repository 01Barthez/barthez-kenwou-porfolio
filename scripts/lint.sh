#!/usr/bin/env bash
# set -euo pipefail

echo "[scripts] lint: running eslint"
# Run ESLint directly to avoid calling npm/bun scripts that may recurse
if command -v npx >/dev/null 2>&1; then
  npx eslint . --ext .ts,.tsx,.js,.jsx
elif command -v bunx >/dev/null 2>&1; then
  bunx eslint . --ext .ts,.tsx,.js,.jsx
else
  ./node_modules/.bin/eslint . --ext .ts,.tsx,.js,.jsx || echo "eslint not found"
fi
