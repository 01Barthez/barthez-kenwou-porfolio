# Multi-stage Dockerfile optimisé pour une application Vite + TypeScript
# - Stage `builder` : installe les dépendances et build statique
# - Stage `runner`  : sert le contenu statique via nginx avec en-têtes sécurisés

# NOTE: this Dockerfile is expected to be built with the repository root as the
# build context (docker build -f docker/Dockerfile .). Paths are relative to the
# build context, not to this Dockerfile location.

## --- Build stage ---------------------------------------------------------
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package manifest first to leverage layer caching
COPY package.json package.json

# Install system dependencies required to build native modules on Alpine
# - python3 + symlink for node-gyp
# - build-base (gcc, g++, make) for compiling native addons
# - git in case some packages are installed from git
RUN apk add --no-cache python3 build-base git libc6-compat && \
  ln -sf /usr/bin/python3 /usr/bin/python || true

# Install Node dependencies. We enable `unsafe-perm` to avoid permission
# issues inside containers when node-gyp runs as root during CI builds.
RUN npm set progress=false && \
  npm config set depth 0 && \
  npm config set unsafe-perm true && \
  npm install --no-audit --no-fund

# Copy source tree
COPY . .

# Build: TypeScript + Vite
# We call the underlying tools to avoid running prebuild hooks that might rely
# on runtimes not present in this image (e.g. Bun). If you add a lockfile,
# replace with `npm ci` for reproducible installs.
RUN npx tsc -b --pretty false && npx vite build --logLevel error


## --- Runner stage --------------------------------------------------------
FROM nginx:stable-alpine AS runner
LABEL maintainer="frontend-starter <dev@localhost>"

USER root

# Copy built artifacts
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the nginx config from the build context (docker/nginx.conf)
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Install curl for healthchecks and lightweight runtime utilities
RUN apk add --no-cache curl

# Expose port and healthcheck
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD curl -fsS --max-time 2 http://localhost/ || exit 1

USER nginx
CMD ["nginx", "-g", "daemon off;"]
