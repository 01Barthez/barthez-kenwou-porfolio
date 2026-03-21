# =============================================================================
# Barthez Kenwou - Enterprise Dockerfile (Bun + React + Nginx)
# Multi-stage build: staging + production
# Ultra fast, reproducible, zero dependency conflicts
# =============================================================================

# -----------------------------
# Base (dependencies cache)
# -----------------------------
FROM oven/bun:1.1.12 AS base

WORKDIR /app

# Copy only dependency files for caching
COPY package.json bun.lock ./

# Install dependencies (STRICT & reproducible)
RUN bun install --frozen-lockfile

# -----------------------------
# Build stage
# -----------------------------
FROM oven/bun:1.1.12 AS builder

WORKDIR /app

# Reuse dependencies
COPY --from=base /app/node_modules ./node_modules
COPY . .

# Build app (Vite / React)
RUN bun run build

# -----------------------------
# Staging (Node-like runtime via Bun)
# -----------------------------
FROM oven/bun:1.1.12 AS staging

ENV NODE_ENV=staging

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

# Bun runs scripts faster than Node
CMD ["bun", "run", "start"]

# -----------------------------
# Production (Nginx static)
# -----------------------------
FROM nginx:1.27-alpine AS production

# Remove default config
RUN rm -rf /etc/nginx/conf.d/*

# Copy custom nginx config
COPY infra/docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files
COPY --from=builder /app/dist /usr/share/nginx/html

# Security hardening
RUN addgroup -S app && adduser -S app -G app \
    && chown -R app:app /usr/share/nginx/html \
    && chown -R app:app /var/cache/nginx \
    && chown -R app:app /var/run \
    && chown -R app:app /etc/nginx

USER app

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:80 || exit 1

CMD ["nginx", "-g", "daemon off;"]

# =============================================================================
# Usage
# =============================================================================
# Staging:
# docker build -t portfolio:staging --target staging .
# docker run -p 3000:3000 portfolio:staging
#
# Production:
# docker build -t portfolio:prod --target production .
# docker run -p 80:80 portfolio:prod
# =============================================================================