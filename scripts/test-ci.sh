#!/usr/bin/env bash
# set -euo pipefail

echo "[scripts] test-ci: running tests in CI mode"
# Run Vitest in CI mode (headless)
if command -v npx >/dev/null 2>&1; then
  npx vitest run --reporter dot --run
elif command -v bunx >/dev/null 2>&1; then
  bunx vitest run --reporter dot --run
else
  ./node_modules/.bin/vitest run --reporter dot --run || echo "vitest not found"
fi
