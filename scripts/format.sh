#!/usr/bin/env bash
# set -euo pipefail

echo "[scripts] format: running prettier"
# Run Prettier directly to avoid calling back into npm scripts which may invoke this script.
if command -v npx >/dev/null 2>&1; then
  npx prettier --write .
elif command -v bun >/dev/null 2>&1; then
  # bunx is available in newer bun; fallback to node_modules bin if present
  if command -v bunx >/dev/null 2>&1; then
    bunx prettier --write .
  else
    ./node_modules/.bin/prettier --write .
  fi
else
  ./node_modules/.bin/prettier --write . || echo "prettier not found"
fi
