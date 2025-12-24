#!/usr/bin/env bash

echo "[scripts] build: validating env..."
if command -v bun >/dev/null 2>&1; then
  bun ./scripts/check-env.js || exit 1
elif command -v node >/dev/null 2>&1; then
  node ./scripts/check-env.js || exit 1
else
  echo "[scripts] warning: neither bun nor node found — skipping env check"
fi

echo "[scripts] build: running TypeScript & Vite build"
if command -v bun >/dev/null 2>&1; then
  bun run build
else
  npm run build
fi
