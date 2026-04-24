# 🏗 Infrastructure & DevOps

Ce répertoire contient tout ce qui concerne le déploiement, la conteneurisation et la gestion de l'infrastructure du **Portfolio de Barthez Kenwou**.

## 📁 Structure

```bash
infra/
├── docker/          # Configuration Docker (Dockerfile, Nginx)
├── terraform/       # Infrastructure as Code (AWS S3, CloudFront)
└── scripts/         # Scripts d'automatisation et de healthcheck
```

---

## 🐳 Docker (Local & Production)

Nous utilisons un **Dockerfile** multi-stage optimisé pour **Bun** et **Nginx**.

### Production (Reverse Proxy)
Le fichier `docker-compose.yml` à la racine est configuré pour un environnement de production. Il utilise un réseau externe `web-proxy` et inclut les labels nécessaires pour un reverse proxy (type Traefik).

```bash
# Déploiement en production
docker compose up -d --build
```
> [!IMPORTANT]
> Assurez-vous que le réseau `web-proxy` existe (`docker network create web-proxy`) et que votre fichier `.env` est rempli.

### Simulation/Développement Local
Pour le développement local ou simulation sans proxy, utilisez le fichier dédié dans `infra/docker/` :

**Simulation Prod Locale :**
```bash
docker compose -f infra/docker/docker-compose.local.yml up --build app
```
Accès : `http://localhost:8080`

**Développement avec HMR :**
```bash
docker compose -f infra/docker/docker-compose.local.yml up dev
```
Accès : `http://localhost:5173`

---

## ☁️ Cloud Infrastructure (AWS)

Le dossier `terraform/` fournit les plans pour héberger le portfolio sur AWS :
- **Amazon S3** : Hébergement de site statique.
- **Amazon CloudFront** : CDN mondial pour la rapidité et le SSL (via ACM).
- **Route 53** : Gestion DNS.

### Flux de déploiement
1. **Provisionner** : `terraform init && terraform apply`
2. **Build** : `bun run build`
3. **Sync S3** : `aws s3 sync dist/ s3://votre-bucket/`
4. **Invalidation CF** : `aws cloudfront create-invalidation --distribution-id ID --paths "/*"`

---

## 🔒 Posture de Sécurité
- **Nginx** : Durci avec des headers de sécurité (CSP, HSTS, X-Frame-Options).
- **Dockerfile** : Exécution en tant qu'utilisateur non-privilégié (`app`).
- **Build Secrets** : Les variables VITE_* sont injectées via des build args pour éviter les fuites dans les couches d'image.
