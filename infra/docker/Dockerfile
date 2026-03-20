# =============================================================================
# Barthez Kenwou - Enterprise Dockerfile (React + Node + Nginx)
# Multi-stage build: development, staging, production
# Secure, optimized, minimal footprint
# =============================================================================

# -----------------------------
# Base dependencies stage
# -----------------------------
FROM node:20-alpine AS base

# Security: create non-root user
RUN addgroup -S app && adduser -S app -G app

WORKDIR /app

# Install dependencies separately for caching
COPY package.json package-lock.json* ./
RUN npm install --omit=dev && npm cache clean --force

# -----------------------------
# Build stage
# -----------------------------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

# Build React app
RUN npm run build

# -----------------------------
# Staging (with Node for debugging / SSR / logs)
# -----------------------------
FROM node:20-alpine AS staging

ENV NODE_ENV=staging

WORKDIR /app

# Copy built app and node_modules
COPY --from=builder /app ./

# Optional: expose dev port
EXPOSE 3000

# Use non-root user
USER app

# Start with Node (useful if you have SSR / API / logs)
CMD ["npm", "run", "start"]

# -----------------------------
# Production (Nginx static serving)
# -----------------------------
FROM nginx:1.27-alpine AS production

# Security: remove default nginx config
RUN rm -rf /etc/nginx/conf.d/*

# Copy custom nginx config
COPY infra/docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files
COPY --from=builder /app/dist /usr/share/nginx/html

# If using CRA instead of Vite, replace with:
# COPY --from=builder /app/build /usr/share/nginx/html

# Security headers & permissions
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
# Build usage
# =============================================================================
# Staging:
# docker build -t zenora-web:staging --target staging .
# docker run -p 3000:3000 zenora-web:staging

# Production:
# docker build -t zenora-web:prod --target production .
# docker run -p 80:80 zenora-web:prod

# =============================================================================
# Notes
# =============================================================================
# - Supports Vite (dist/) and CRA (build/)
# - Optimized layer caching
# - Non-root execution for security
# - Minimal alpine images
# - Separate staging and production targets
# - Plug & play with CI/CD pipelines
# =============================================================================
