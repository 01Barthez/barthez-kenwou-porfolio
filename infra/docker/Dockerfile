# syntax=docker/dockerfile:1
# =============================================================================
# Barthez Kenwou Portfolio - Production image (multi-stage)
#
# Prefer CI + Dockerfile.runtime when the registry is flaky inside BuildKit.
# This file remains for full in-image builds:
#   docker build -f infra/docker/Dockerfile -t barthez-kenwou-portfolio:local .
# =============================================================================

FROM oven/bun:1.2-debian AS builder

WORKDIR /app

ENV NODE_ENV=production \
    CI=true \
    VITE_SKIP_IMAGEMIN=true \
    NODE_OPTIONS=--max-old-space-size=4096

ARG VITE_SITE_URL=https://barthez-kenwou.dev
ARG VITE_APP_URL=https://barthez-kenwou.dev
ARG VITE_ENVIRONMENT=production
ARG VITE_ENABLE_PWA=true
ARG VITE_APP_TITLE="Barthez Kenwou Portfolio"
ARG VITE_API_BASE_URL=

ENV VITE_SITE_URL=$VITE_SITE_URL \
    VITE_APP_URL=$VITE_APP_URL \
    VITE_ENVIRONMENT=$VITE_ENVIRONMENT \
    VITE_ENABLE_PWA=$VITE_ENABLE_PWA \
    VITE_APP_TITLE=$VITE_APP_TITLE \
    VITE_API_BASE_URL=$VITE_API_BASE_URL

COPY package.json bun.lock ./

RUN --mount=type=cache,target=/root/.bun/install/cache \
    bun install --frozen-lockfile --ignore-scripts

COPY . .

RUN cp .env.example .env \
    && bunx vite build

FROM nginx:stable-alpine AS production

ARG BUILD_DATE
ARG VCS_REF
ARG VERSION=latest

LABEL org.opencontainers.image.created="${BUILD_DATE}" \
      org.opencontainers.image.title="Barthez Kenwou Portfolio" \
      org.opencontainers.image.description="Portfolio DevOps & Full-Stack JS - barthez-kenwou.dev" \
      org.opencontainers.image.url="https://barthez-kenwou.dev" \
      org.opencontainers.image.source="https://github.com/barthez-kenwou/barthez-kenwou-porfolio" \
      org.opencontainers.image.revision="${VCS_REF}" \
      org.opencontainers.image.version="${VERSION}" \
      org.opencontainers.image.vendor="Barthez Kenwou" \
      org.opencontainers.image.licenses="UNLICENSED" \
      com.barthez.service="portfolio-web"

# Refresh Alpine packages (nginx tags lag apk security advisories).
RUN set -eux; \
    i=0; \
    until apk upgrade --no-cache; do \
      i=$((i + 1)); \
      [ "$i" -ge 5 ] && exit 1; \
      sleep $((i * 2)); \
    done; \
    addgroup -g 1001 -S appgroup; \
    adduser -u 1001 -S appuser -G appgroup; \
    mkdir -p /tmp/nginx; \
    chown -R appuser:appgroup /tmp/nginx; \
    rm -f /etc/nginx/conf.d/default.conf; \
    rm -rf /usr/share/nginx/html/*

COPY infra/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder --chown=appuser:appgroup /app/dist /usr/share/nginx/html

RUN chown -R appuser:appgroup /var/cache/nginx /var/log/nginx \
    && touch /var/run/nginx.pid \
    && chown appuser:appgroup /var/run/nginx.pid

USER appuser

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:8080/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
