# Workflows

1. **`deploy-vps.yml`** (production CD)  
   Push `main` / `master` or manual dispatch.  
   CI → Gitleaks → Sonar → Trivy FS → GHCR image → Trivy image → SSH deploy.  
   Secrets: see [docs/deployment/DEPLOY_VPS.md](../../docs/deployment/DEPLOY_VPS.md).

2. **`ci.yml`**  
   PRs + `develop` / `development` — format, lint, typecheck, tests, build artifact.

3. **`qa.yml`**  
   PR E2E / Lighthouse (optional).

4. **`deploy-vercel.yml`**  
   Manual fallback only (`workflow_dispatch`). Primary hosting is OVH + GHCR.
