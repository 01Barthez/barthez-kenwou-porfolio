#!/usr/bin/env bash
# Bootstrap / refresh the OVH VPS app directory for GHCR + Watchtower.
set -euo pipefail

APP_DIR="${APP_DIR:-/srv/apps/barthez-kenwou-portfolio}"
GHCR_IMAGE="${GHCR_IMAGE:-ghcr.io/barthez-kenwou/barthez-kenwou-porfolio}"
IMAGE_TAG="${IMAGE_TAG:-latest}"
WEB_HOST_PORT="${WEB_HOST_PORT:-}"  # unused in prod (NPM via web-proxy); kept for local docs
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCKER_DIR="$(cd "$SCRIPT_DIR/../docker" && pwd)"

echo "==> App dir: $APP_DIR"
mkdir -p "$APP_DIR"

# Ensure NPM network exists
if ! docker network inspect web-proxy >/dev/null 2>&1; then
  echo "ERROR: external network 'web-proxy' missing (Nginx Proxy Manager)."
  echo "Create it or start nginx-proxy-manager first: docker network create web-proxy"
  exit 1
fi

cp "$DOCKER_DIR/docker-compose.prod.yml" "$APP_DIR/docker-compose.yml"

if [ ! -f "$APP_DIR/.env" ]; then
  cp "$DOCKER_DIR/.env.example" "$APP_DIR/.env"
  sed -i "s|^GHCR_IMAGE=.*|GHCR_IMAGE=$GHCR_IMAGE|" "$APP_DIR/.env"
  sed -i "s|^IMAGE_TAG=.*|IMAGE_TAG=$IMAGE_TAG|" "$APP_DIR/.env"
  echo "Wrote $APP_DIR/.env - review image name"
fi

cd "$APP_DIR"
echo "==> GHCR login required (private package - PAT read:packages):"
echo "    echo \$GHCR_TOKEN | docker login ghcr.io -u barthez-kenwou --password-stdin"

docker compose pull web
docker compose up -d web
docker compose --profile watchtower up -d

echo "==> Health (via container network):"
sleep 2
docker compose exec -T web wget -qO- http://127.0.0.1:8080/health || true
echo
echo "Done. In Nginx Proxy Manager add a Proxy Host:"
echo "  Domain: barthez-kenwou.dev"
echo "  Forward hostname: barthez-portfolio-web"
echo "  Forward port: 8080"
echo "  (container must be on network web-proxy - already configured)"
