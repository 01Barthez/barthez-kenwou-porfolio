#!/bin/sh
# Simple healthcheck for Nginx/Static server

URL=${1:-"http://localhost:80/healthz"}

if wget -qO- "$URL" > /dev/null; then
  echo "Healthcheck passed"
  exit 0
else
  echo "Healthcheck failed"
  exit 1
fi
