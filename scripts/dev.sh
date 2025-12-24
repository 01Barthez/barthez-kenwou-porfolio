#!/usr/bin/env bash
# set -euo pipefail

echo "[scripts] dev: checking environment..."

if command -v bun >/dev/null 2>&1; then
  bun ./scripts/check-env.js || exit 1
elif command -v node >/dev/null 2>&1; then
  node ./scripts/check-env.js || exit 1
else
  echo "[scripts] warning: neither bun nor node found — skipping env check"
fi

echo "[scripts] dev: starting dev server"
if command -v bun >/dev/null 2>&1; then
  vite
else
  vite
fi
