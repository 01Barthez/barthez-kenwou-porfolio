# ===============================
# Build Stage
# ===============================
FROM node:22-bookworm-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    autoconf \
    automake \
    libtool \
    nasm \
    pkg-config \
    git \
    brotli \
    && rm -rf /var/lib/apt/lists/*

COPY package.json bun.lock package-lock.json* ./

RUN npm install --legacy-peer-deps

COPY . .
COPY .env.example .env

ENV NODE_ENV=production

RUN npm run build

RUN find dist -type f \( -name "*.css" -o -name "*.js" -o -name "*.html" -o -name "*.svg" -o -name "*.json" \) -exec brotli -f {} \;

# ===============================
# Production Stage
# ===============================
FROM nginx:1.27-alpine AS production

COPY infra/docker/nginx.main.conf /etc/nginx/nginx.conf
COPY infra/docker/nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s CMD wget -qO- http://localhost/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
