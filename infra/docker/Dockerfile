# =============================================================================
# Barthez Kenwou - Optimized Production Dockerfile (with Brotli support)
# =============================================================================

# Stage 1: Base - Install dependencies
FROM oven/bun:1.1.12-alpine AS base
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Stage 2: Builder - Build and Pre-compress
FROM oven/bun:1.1.12-alpine AS builder
WORKDIR /app

# Arguments for build-time environment variables
ARG VITE_SITE_URL
ARG VITE_APP_URL
ARG VITE_API_BASE_URL
ARG VITE_ENABLE_PWA
ARG VITE_APP_TITLE

ENV VITE_SITE_URL=$VITE_SITE_URL
ENV VITE_APP_URL=$VITE_APP_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_ENABLE_PWA=$VITE_ENABLE_PWA
ENV VITE_APP_TITLE=$VITE_APP_TITLE
ENV NODE_ENV=production

COPY --from=base /app/node_modules ./node_modules
COPY . .
RUN bun run build

# Pre-compress static assets with Brotli for brotli_static nginx module
# This saves CPU in production
RUN apk add --no-cache brotli \
    && find dist -type f -regex '.*\.\(css\|js\|mjs\|html\|svg\|json\)$' -exec brotli -f {} \;

# Stage 3: Production - Serve with Nginx + Brotli
# We use a custom build or an image with brotli module if available
# For this example, we'll use alpine and ensure modules are loaded
FROM nginx:1.27-alpine AS production

# Install brotli module for alpine
RUN apk add --no-cache nginx-mod-http-brotli

# Security hardening and custom main config to load modules
# We overwrite the main nginx.conf to load the brotli module
COPY infra/docker/nginx.main.conf /etc/nginx/nginx.conf
COPY infra/docker/nginx.conf /etc/nginx/conf.d/default.conf

# Clean default static files and copy pre-compressed build
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

# Hardening: Run as non-root user
RUN addgroup -S app && adduser -S app -G app \
    && chown -R app:app /usr/share/nginx/html \
    && chown -R app:app /var/cache/nginx \
    && chown -R app:app /var/run \
    && chown -R app:app /etc/nginx

USER app

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -qO- http://localhost:80/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]