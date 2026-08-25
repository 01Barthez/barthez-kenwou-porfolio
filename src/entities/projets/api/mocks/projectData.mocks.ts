import { IProject } from '../../model/project.types';

export const projectsData: IProject[] = [

    {
        id: 1,
        titleFr: "NEXUS - ERP SaaS modulaire pour la restauration",
        titleEn: "NEXUS - Modular SaaS ERP for restaurants",

        descriptionFr: "ERP SaaS multi-tenant porté par ZENORA : modules activables à la demande, offline-first, paiements locaux, conçu pour toutes tailles de restaurants et tous appareils.",
        descriptionEn: "Multi-tenant SaaS ERP by ZENORA: on-demand modules, offline-first, local payments, built for every restaurant size and every device.",

        fullDescriptionFr: `NEXUS est un ERP SaaS de gestion de restaurants conçu et développé au sein de l'ESN ZENORA. La philosophie produit est simple : le restaurateur n'active que les modules dont il a besoin — chaque module est un ensemble de fonctionnalités qui résout un besoin métier précis (POS, menu, cuisine, stocks, RH, etc.).

Le parcours utilisateur est pensé de bout en bout : découverte sur la vitrine marketing, authentification (email/password, OAuth2, WhatsApp), choix de plan (essai ou achat avec paiement), onboarding du restaurant, puis entrée dans l'ERP. Une fois dedans, les modules inclus dans la formule sont disponibles ; le marketplace permet d'acheter et configurer des modules additionnels selon l'évolution du besoin.

Techniquement, NEXUS repose sur un monolithe modulaire Turborepo (pnpm workspaces) pensé pour une éventuelle extraction microservices plus tard. Surfaces : portail marketing (Next.js), ERP web (thin app), backoffice super-admin, API Fastify. Isolation multi-tenant en schema-per-tenant PostgreSQL (public pour plateforme/billing/auth, t_{slug} pour le métier via Kysely). Le kernel charge dynamiquement les modules activés. Socle offline-first (Dexie + sync push/pull) pour le terrain. Billing abstrait (Stripe + Flutterwave / Mobile Money) avec activation uniquement via webhooks.

Je suis à l'origine de l'architecture globale et de la conception/implémentation de la quasi-totalité des cœurs plateforme (auth, database, billing, kernel, sync, search, events, caching, storage, queue, scheduler, AI, …), ainsi que des modules dashboard et menu — le socle sur lequel l'équipe étend le produit.`,
        fullDescriptionEn: `NEXUS is a restaurant SaaS ERP designed and built at the ZENORA digital services company. The product philosophy is simple: restaurant owners enable only the modules they need — each module is a feature set that solves a precise business need (POS, menu, kitchen, inventory, HR, etc.).

The user journey is end-to-end: marketing site discovery, authentication (email/password, OAuth2, WhatsApp), plan selection (trial or paid checkout), restaurant onboarding, then ERP entry. Inside the product, plan-included modules are available; the marketplace lets operators buy and configure additional modules as needs evolve.

Technically, NEXUS is a Turborepo modular monolith (pnpm workspaces) designed so microservices extraction remains possible later. Surfaces: marketing portal (Next.js), web ERP (thin app), super-admin backoffice, Fastify API. Multi-tenant isolation via PostgreSQL schema-per-tenant (public for platform/billing/auth, t_{slug} for business data via Kysely). The kernel dynamically loads enabled modules. Offline-first foundation (Dexie + push/pull sync) for floor operations. Abstracted billing (Stripe + Flutterwave / Mobile Money) with activation only via webhooks.

I originated the overall architecture and designed/implemented nearly all platform cores (auth, database, billing, kernel, sync, search, events, caching, storage, queue, scheduler, AI, …), plus the dashboard and menu modules — the foundation the team extends.`,

        problemFr: "Les restaurateurs jonglent avec 5 à 12 outils déconnectés (POS, stocks, RH, réservations, livraison). Les solutions internationales sont rigides, chères, peu adaptées à l'Afrique (Mobile Money, devises, offline terrain) et obligent à payer un pack monolithique sans pouvoir composer à la carte.",
        problemEn: "Restaurant operators juggle 5–12 disconnected tools (POS, inventory, HR, reservations, delivery). International solutions are rigid, expensive, poorly adapted to Africa (Mobile Money, currencies, floor offline), and force a monolithic pack instead of à-la-carte composition.",

        solutionFr: [
            "ERP unifié avec marketplace de modules activables/désactivables à la demande",
            "Parcours complet : vitrine → auth → plan/paiement → onboarding → ERP → marketplace",
            "Multi-tenant schema-per-tenant (isolation forte des données restaurant)",
            "Offline-first sur POS / commandes / cuisine / tables avec sync autoritative cloud",
            "Paiements locaux et internationaux (Flutterwave / Mobile Money + Stripe)",
            "Multi-device et responsive (web, tablette caisse, KDS, mobile gérant)",
            "Monolithe modulaire Turborepo + kernel, prêt pour extraction progressive",
            "Cores plateforme réutilisables (auth, billing, sync, search, events, AI, …)",
        ],
        solutionEn: [
            "Unified ERP with an on-demand enable/disable module marketplace",
            "Full journey: marketing → auth → plan/payment → onboarding → ERP → marketplace",
            "Schema-per-tenant multi-tenancy (strong restaurant data isolation)",
            "Offline-first for POS / orders / kitchen / tables with authoritative cloud sync",
            "Local and international payments (Flutterwave / Mobile Money + Stripe)",
            "Multi-device responsive UX (web, POS tablet, KDS, owner mobile)",
            "Turborepo modular monolith + kernel, ready for progressive extraction",
            "Reusable platform cores (auth, billing, sync, search, events, AI, …)",
        ],

        challengesFr: [
            "Concevoir un kernel de modules type Odoo sans complexité microservices jour 1",
            "Isolation multi-tenant fiable (schema switching, pool, migrations N schémas)",
            "Offline-first réel (événements, conflits, idempotence) — pas un simple cache PWA",
            "Billing SaaS abstrait multi-providers + add-ons modules via marketplace",
            "Thin app ERP : navigation et shell dynamiques selon modules installés",
            "Maintenir vélocité d'équipe à 4 tout en posant des fondations long terme",
            "Documenter ADRs, registry ~45 modules et phases d'exécution avant code massif",
        ],
        challengesEn: [
            "Design an Odoo-like module kernel without day-1 microservices complexity",
            "Reliable multi-tenant isolation (schema switching, pool, N-schema migrations)",
            "Real offline-first (events, conflicts, idempotency) — not a naive PWA cache",
            "Abstract multi-provider SaaS billing + marketplace module add-ons",
            "Thin ERP app: dynamic navigation/shell based on installed modules",
            "Keep a 4-person team shipping while laying long-term foundations",
            "Document ADRs, ~45-module registry and execution phases before mass coding",
        ],

        impactFr: [
            "Socle produit ZENORA positionné pour Europe et Afrique (devises, Mobile Money, offline)",
            "Architecture et cores plateforme déjà opérationnels (auth, billing, kernel, sync, menu…)",
            "Modèle économique aligné : starter gratuit + plans + modules à la carte",
            "Équipe capable d'étendre verticalement module par module sur un contrat kernel unique",
            "Cible : produit consommable pour restaurants pilotes (journée de service complète)",
        ],
        impactEn: [
            "ZENORA product foundation positioned for Europe and Africa (currencies, Mobile Money, offline)",
            "Architecture and platform cores already operational (auth, billing, kernel, sync, menu…)",
            "Business model aligned: free starter + plans + à-la-carte modules",
            "Team can extend vertically module-by-module on a single kernel contract",
            "Target: consumable product for pilot restaurants (full service day)",
        ],

        metrics: {
            "architecture": "Modular monolith (Turborepo + pnpm)",
            "multiTenant": "Schema-per-tenant (PostgreSQL)",
            "modulesRegistry": "~45 modules (catalogued)",
            "cores": "18+ packages core/*",
            "team": "4 (architect/fullstack, backend, fullstack+DevOps, product)",
            "started": "Planification Mars 2026 · Code Mai 2026",
            "target": "Consommable Décembre 2026",
            "status": "En développement actif",
        },

        techStack: {
            frontend: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Zustand", "Dexie (offline)", "PWA"],
            backend: ["Node.js", "Fastify", "Prisma (public)", "Kysely (tenant)", "BullMQ", "WebSockets"],
            database: ["PostgreSQL", "Redis"],
            devops: ["Docker", "GitHub Actions", "Husky", "Infisical", "Flagsmith", "Nginx", "Terraform", "Ansible", "Kubernetes", "Argo CD", "AWS", "Prometheus", "Grafana"],
        },

        architecture: [
            "Monorepo Turborepo : apps (website, web-erp, admin, api) + core/* + modules/* + packages/*",
            "API Fastify monolithe avec plugins isolés et kernel de chargement dynamique",
            "Multi-tenant schema-per-tenant : Prisma sur public, SQL+Kysely sur t_{slug}",
            "Event bus in-process (@nexus/core-events) — pas d'appels directs module→module",
            "Offline-first : journal d'événements local + SyncEngine + projections cloud",
            "Billing engine abstrait (Stripe / Flutterwave / mock) — activation via webhooks uniquement",
            "Évolution prévue : monolithe → extraction microservices quand le besoin est réel",
        ],

        testing: [
            "Typecheck / lint monorepo (Turbo)",
            "Tests unitaires packages critiques (auth, validators, kernel)",
            "Checklists E2E billing sandbox (checkout, webhooks, add-ons)",
            "Revues cross-device sur shell ERP et modules terrain",
            "Hooks Husky pre-commit / pre-push (qualité avant merge)",
        ],

        images: [
            "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-logo-full.png",
            "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-brand-01.png",
            "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-sidebar-modules.png",
            "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-ui-extra-02.png",
            "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-menu-categories-dark.png",
            "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-ui-extra-03.png",
            "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-menu-carte-akenx.png",
        ],

        preview: "https://nexus-erp.com",
        videoDemo: "",

        category: "SaaS • ERP • Fullstack • Architecture • Multi-tenant",
        status: "En cours",
        complexity: "Avancé",
        role: "Lead Architect • Fullstack",
        teamSize: 4,

        duration: "Mars 2026 → en cours",
        date: "2026",

        github: "",
        demo: "https://nexus-erp.com",

        businessContextFr: "Produit stratégique de l'ESN ZENORA (Yaoundé) : digitaliser la restauration avec une plateforme modulaire compétitive à l'international, native Afrique (Mobile Money, offline, multi-devises), et extensible via marketplace.",
        businessContextEn: "Strategic ZENORA (Yaoundé) product: digitize restaurants with a modular platform competitive internationally, Africa-native (Mobile Money, offline, multi-currency), and extensible via marketplace.",

        confidential: true,

        responsibilitiesFr: [
            "Architecture globale de l'ERP (monolithe modulaire, topologie apps, ADRs)",
            "Conception et implémentation des cores : auth, database, billing/invoicing, kernel, sync, queue, events, search, caching, storage, scheduler, AI, documents, http, mailer, notification-center, execution…",
            "Schéma multi-tenant (public + blueprint tenant) et stratégie DDL",
            "Modules dashboard et menu (premier vertical slice bout-en-bout)",
            "Moteur de recherche, système de paiement SaaS, sync offline-first",
            "Packages partagés et contrats (SDK, validators, types, module-ui)",
            "Cadrage technique avec backend, fullstack/DevOps et product owner",
        ],
        responsibilitiesEn: [
            "Overall ERP architecture (modular monolith, apps topology, ADRs)",
            "Design and implementation of cores: auth, database, billing/invoicing, kernel, sync, queue, events, search, caching, storage, scheduler, AI, documents, http, mailer, notification-center, execution…",
            "Multi-tenant schema design (public + tenant blueprint) and DDL strategy",
            "Dashboard and menu modules (first end-to-end vertical slice)",
            "Search engine, SaaS payment engine, offline-first sync",
            "Shared packages and contracts (SDK, validators, types, module-ui)",
            "Technical framing with backend, fullstack/DevOps, and product owner",
        ],

        gallery: [
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-logo-full.png",
                captionFr: "Wordmark NEXUS complet",
                captionEn: "Full NEXUS wordmark",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-logo-mark.png",
                captionFr: "Logo NEXUS — marque produit ZENORA",
                captionEn: "NEXUS logo — ZENORA product mark",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-brand-02.png",
                captionFr: "Slide de couverture — présentation business ZENORA",
                captionEn: "Cover slide — ZENORA business presentation",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-brand-01.png",
                captionFr: "Sept piliers produit — modularité, offline, multi-device, Afrique",
                captionEn: "Seven product pillars — modularity, offline, multi-device, Africa",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-brand-03.png",
                captionFr: "Cartographie modules — hub NEXUS et domaines métier",
                captionEn: "Module map — NEXUS hub and business domains",
                kind: "diagram",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-brand-04.png",
                captionFr: "Plans & tarification — Starter à Enterprise",
                captionEn: "Plans & pricing — Starter to Enterprise",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-product-concept-01.png",
                captionFr: "Matrice concurrentielle — Mobile Money, offline, entrée à 0€",
                captionEn: "Competitive matrix — Mobile Money, offline, €0 entry",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-product-concept-03.png",
                captionFr: "Slide architecture modulaire pour stakeholders",
                captionEn: "Modular architecture slide for stakeholders",
                kind: "diagram",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-hero-art.png",
                captionFr: "Direction artistique — univers visuel produit",
                captionEn: "Art direction — product visual universe",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-visual-01.png",
                captionFr: "Illustration métier — table, commandes et paiement",
                captionEn: "Domain illustration — table, orders and payment",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-visual-02.png",
                captionFr: "Illustration multi-canal — KDS cuisine et commande mobile",
                captionEn: "Multi-channel illustration — kitchen KDS and mobile order",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-visual-03.png",
                captionFr: "Illustration parcours — commande digitale vers service en salle",
                captionEn: "Journey illustration — digital order to table service",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-visual-04.png",
                captionFr: "Illustration réservation — pont entre booking digital et salle",
                captionEn: "Reservation illustration — digital booking to dining room",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-visual-05.png",
                captionFr: "Illustration multi-device — pilotage restaurant sur tablette",
                captionEn: "Multi-device illustration — restaurant ops on tablet",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-device-mock.png",
                captionFr: "Mockup device — expérience restauration sur écran tactile",
                captionEn: "Device mockup — restaurant experience on touchscreen",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-marketing-landing.png",
                captionFr: "Navigation modulaire — badges commandes, réservations, stocks",
                captionEn: "Modular navigation — orders, reservations, stock badges",
                kind: "diagram",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-marketplace-modules.png",
                captionFr: "Marketplace — catalogue modules POS, commandes, réservations",
                captionEn: "Marketplace — POS, orders, reservations module catalog",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-erp-dashboard-shell.png",
                captionFr: "Shell ERP — sidebar organisée par pôles métier",
                captionEn: "ERP shell — sidebar organized by business domains",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-sidebar-modules.png",
                captionFr: "Vitrine marketing — hero et preview du dashboard ERP",
                captionEn: "Marketing site — hero and ERP dashboard preview",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-ui-extra-02.png",
                captionFr: "Module Menu (dark) — catégories et états d’erreur API",
                captionEn: "Menu module (dark) — categories and API error states",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-dashboard-header.png",
                captionFr: "Header ERP — recherche globale, multi-sites, export données",
                captionEn: "ERP header — global search, multi-site, data export",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-menu-module-light.png",
                captionFr: "Module Menu (light) — carte, sync POS offline, import CSV",
                captionEn: "Menu module (light) — catalog, offline POS sync, CSV import",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-menu-module-light-2.png",
                captionFr: "Module Menu — création d’article et sync snapshot POS",
                captionEn: "Menu module — item creation and POS snapshot sync",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-github-repo.png",
                captionFr: "Module Menu (light, Premium) — onglet Carte et nouvel article",
                captionEn: "Menu module (light, Premium) — Catalog tab and new item",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-menu-categories-dark.png",
                captionFr: "Module Menu (dark) — gestion des catégories",
                captionEn: "Menu module (dark) — category management",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-ui-extra-01.png",
                captionFr: "Module Menu (dark) — formulaire nouvelle catégorie",
                captionEn: "Menu module (dark) — new category form",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-menu-carte-akenx.png",
                captionFr: "Tenant Akenx — gestion de la carte et des articles",
                captionEn: "Akenx tenant — menu catalog and items",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-menu-disponibilites.png",
                captionFr: "Module Menu — onglet disponibilités (plages et canaux)",
                captionEn: "Menu module — availability tab (slots and channels)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-ui-extra-03.png",
                captionFr: "Module Menu — placeholder disponibilités par canal",
                captionEn: "Menu module — per-channel availability placeholder",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-user-profile.png",
                captionFr: "Compte utilisateur — profil, rôles et collaborateurs",
                captionEn: "User account — profile, roles and collaborators",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-ui-extra-04.png",
                captionFr: "Compte utilisateur (Akenx) — informations personnelles et fuseau",
                captionEn: "User account (Akenx) — personal info and timezone",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-supabase-tenants.png",
                captionFr: "PostgreSQL — schémas tenants (t_demo-restaurant, t_barthez…)",
                captionEn: "PostgreSQL — tenant schemas (t_demo-restaurant, t_barthez…)",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-api-logs-tenant.png",
                captionFr: "Logs API — résolution tenant Kysely et routes kernel",
                captionEn: "API logs — tenant Kysely resolution and kernel routes",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-product-concept-02.png",
                captionFr: "Monorepo racine — apps, core, modules, packages, infra, Turbo",
                captionEn: "Root monorepo — apps, core, modules, packages, infra, Turbo",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-product-concept-04.png",
                captionFr: "Packages partagés — auth, sdk, offline-client, ui, validators…",
                captionEn: "Shared packages — auth, sdk, offline-client, ui, validators…",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-product-concept-05.png",
                captionFr: "Dossier modules/ — domaines métier isolés (POS, menu, kitchen…)",
                captionEn: "modules/ folder — isolated domains (POS, menu, kitchen…)",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-product-concept-06.png",
                captionFr: "Arborescence modules — 11 packages métier sous kernel",
                captionEn: "Modules tree — 11 domain packages under the kernel",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-web-dev-logs.png",
                captionFr: "Dev monorepo — checkout billing multi-devises et auth proxy",
                captionEn: "Monorepo dev — multi-currency billing checkout and auth proxy",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-github-private.png",
                captionFr: "Dépôt ZENORA-360/Nexus-ERP — stack, tags et structure monorepo",
                captionEn: "ZENORA-360/Nexus-ERP repo — stack, tags and monorepo layout",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-husky-hooks.png",
                captionFr: "Hooks Git Husky — pre-commit, pre-push, commit-msg",
                captionEn: "Husky Git hooks — pre-commit, pre-push, commit-msg",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-husky-tree.png",
                captionFr: "Arborescence .husky — garde-fous qualité avant merge",
                captionEn: ".husky tree — quality gates before merge",
                kind: "process",
            },
        ],

        diagrams: [
            {
                id: "nexus-system-overview",
                titleFr: "Vue système — apps, API, données",
                titleEn: "System overview — apps, API, data",
                mermaid: `flowchart TB
  subgraph clients [Surfaces]
    WEB[Portal Website :2000]
    APP[Web ERP :3000]
    ADM[Admin Backoffice :5001]
  end
  subgraph api [API Fastify :4000]
    GW[Gateway + Plugins]
    KER[core/kernel]
    AUTH[core/auth]
    BILL[core/billing]
    SYNC[core/sync]
  end
  subgraph data [Données]
    PUB[(PostgreSQL public)]
    TEN[(PostgreSQL t_slug)]
    REDIS[(Redis + BullMQ)]
    S3[(Object Storage)]
    IDB[(IndexedDB Dexie)]
  end
  WEB --> GW
  APP --> GW
  APP --> IDB
  ADM --> GW
  APP -->|push/pull WS| SYNC
  GW --> AUTH
  GW --> BILL
  GW --> KER
  GW --> SYNC
  AUTH --> PUB
  BILL --> PUB
  KER --> TEN
  SYNC --> TEN
  SYNC --> REDIS
  KER --> S3`,
            },
            {
                id: "nexus-user-journey",
                titleFr: "Parcours acquisition → ERP → marketplace",
                titleEn: "Acquisition → ERP → marketplace journey",
                mermaid: `flowchart LR
  A[Vitrine marketing] --> B[Auth email OAuth WhatsApp]
  B --> C{Plan}
  C -->|Essai 14j| D[Onboarding restaurant]
  C -->|Achat| E[Checkout paiement]
  E --> D
  D --> F[Provision schéma t_slug]
  F --> G[ERP modules inclus]
  G --> H[Marketplace]
  H --> I[Achat module]
  I --> J[Config + usage]
  J --> G`,
            },
            {
                id: "nexus-multi-tenant",
                titleFr: "Multi-tenant schema-per-tenant",
                titleEn: "Schema-per-tenant multi-tenancy",
                mermaid: `flowchart TB
  REQ[Requête HTTP] --> RESOLVE{Résolution tenant}
  RESOLVE -->|subdomain| SLUG[slug restaurant]
  RESOLVE -->|JWT tid| SLUG
  RESOLVE -->|header X-Tenant-ID| SLUG
  SLUG --> MW[core/http tenant plugin]
  MW --> PUB[(public: tenants billing auth modules)]
  MW --> KY[withTenantKysely SET LOCAL search_path]
  KY --> TS[(t_slug: métier POS menu orders)]
  subgraph lifecycle [Cycle de vie]
    REG[Inscription] --> CREATE[Créer tenant public]
    CREATE --> PROV[Provisionner schéma]
    PROV --> MIG[Migrations SQL modules]
    MIG --> ACT[Activer modules du plan]
  end`,
            },
            {
                id: "nexus-kernel-modules",
                titleFr: "Kernel — découverte et activation modules",
                titleEn: "Kernel — module discovery and activation",
                mermaid: `sequenceDiagram
  participant API as apps/api
  participant S as core/storage
  participant C as core/caching
  participant K as core/kernel
  participant FS as modules/
  participant DB as PostgreSQL public
  participant F as Fastify
  API->>S: bootstrapStorage
  API->>C: bootstrapCaching
  API->>K: bootstrapKernel
  K->>FS: discoverModules manifests
  K->>DB: sync catalogue modules
  API->>K: registerKernelRoutes
  K->>FS: import entry.api modules actifs
  K->>F: register routes /api/v1
  Note over K,F: requireModule hook par tenant`,
            },
            {
                id: "nexus-marketplace",
                titleFr: "Marketplace — achat et activation module",
                titleEn: "Marketplace — purchase and activate module",
                mermaid: `flowchart TB
  U[Restaurateur] --> CAT[Catalogue /tenant/modules/catalog]
  CAT --> PICK[Choisir module]
  PICK --> DEP{Dépendances OK?}
  DEP -->|non| RES[Résoudre dépendances]
  RES --> PICK
  DEP -->|oui| CHK[POST billing checkout type=addon]
  CHK --> PSP[Stripe ou Flutterwave]
  PSP --> WH[Webhook signé]
  WH --> ACT[Activer installed_modules]
  ACT --> NAV[Sidebar /m/module enrichie]
  ACT --> DDL[Migrations tenant si besoin]`,
            },
            {
                id: "nexus-offline-sync",
                titleFr: "Offline-first — events, sync, projections",
                titleEn: "Offline-first — events, sync, projections",
                mermaid: `flowchart LR
  subgraph device [Device POS / KDS]
    UI[UI optimistic]
    EVT[Journal events]
    STATE[État Dexie]
    ENG[SyncEngine]
    UI --> EVT
    EVT --> STATE
    ENG --> EVT
  end
  subgraph cloud [Cloud]
    SYNC[core/sync]
    Q[core/queue BullMQ]
    AUTH_DB[(t_slug autoritatif)]
    PROJ[Projections read models]
  end
  ENG -->|push| SYNC
  SYNC -->|pull + WS| ENG
  SYNC --> Q
  Q --> AUTH_DB
  AUTH_DB --> PROJ
  PROJ -->|dashboard CA| UI`,
            },
            {
                id: "nexus-billing",
                titleFr: "Billing SaaS — essai, checkout, webhooks",
                titleEn: "SaaS billing — trial, checkout, webhooks",
                mermaid: `flowchart TB
  PRICE[Pricing page] --> MODE{mode}
  MODE -->|trial| REG1[Signup]
  MODE -->|subscribe| REG2[Signup]
  REG1 --> ONB[Onboarding]
  REG2 --> ONB
  ONB --> TEN[POST /tenants/onboard]
  TEN --> TRIAL[Tenant trialing 14j]
  TRIAL --> ERP[Accès ERP]
  REG2 --> CHK[POST /billing/checkout]
  CHK --> PROV[Provider Stripe / Flutterwave]
  PROV --> WH[Webhook]
  WH --> ACTIVE[Statut active + facture]
  ACTIVE --> ERP
  ERP --> ADD[Achat module add-on]
  ADD --> CHK`,
            },
            {
                id: "nexus-auth",
                titleFr: "Authentification — couches et tokens",
                titleEn: "Authentication — layers and tokens",
                mermaid: `flowchart TB
  subgraph http [HTTP]
    R[Routes auth]
    P[authPlugin]
  end
  subgraph svc [Services]
    AS[AuthService]
    SS[SessionService]
    TS[TokenService]
  end
  subgraph data [Persistance]
    SR[SessionRepository Prisma]
    CRYPTO[auth-crypto hash]
  end
  R --> AS
  P --> AS
  AS --> SS
  AS --> TS
  SS --> SR
  TS --> CRYPTO
  AS -->|OAuth| OAUTH[Google / Facebook]
  AS -->|login| EMAIL[email + password]
  Note1[Access 15min + Refresh] --- TS`,
            },
            {
                id: "nexus-core-map",
                titleFr: "Carte des cores plateforme",
                titleEn: "Platform cores map",
                mermaid: `flowchart TB
  API[apps/api] --> HTTP[core/http]
  API --> AUTH[core/auth]
  API --> KER[core/kernel]
  API --> DB[core/database]
  API --> BILL[core/billing]
  API --> INV[core/invoicing]
  API --> SYNC[core/sync]
  API --> Q[core/queue]
  API --> EVT[core/events]
  API --> CACHE[core/caching]
  API --> STOR[core/storage]
  API --> SEARCH[core/search-engine]
  API --> MAIL[core/mailer]
  API --> NOTIF[core/notification-center]
  API --> SCHED[core/scheduler]
  API --> EXEC[core/execution]
  API --> AI[core/ai]
  API --> DOCS[core/documents]
  KER --> MOD[modules/*]
  EVT --> MOD
  SYNC --> Q`,
            },
            {
                id: "nexus-monorepo",
                titleFr: "Topologie monorepo Turborepo",
                titleEn: "Turborepo monorepo topology",
                mermaid: `flowchart TB
  ROOT[NEXUS monorepo]
  ROOT --> APPS[apps/]
  ROOT --> CORE[core/]
  ROOT --> MODS[modules/]
  ROOT --> PKGS[packages/]
  ROOT --> INFRA[infra/]
  APPS --> WEB[portals/website]
  APPS --> ERP[app/web-erp]
  APPS --> ADMIN[admin/backoffice]
  APPS --> API[api Fastify]
  MODS --> MENU[menu]
  MODS --> POS[pos orders kitchen tables]
  MODS --> DASH[dashboard]
  MODS --> SYS[_system]
  PKGS --> SDK[sdk validators types ui]
  PKGS --> OFF[offline-client]
  PKGS --> THEME[theme module-ui]`,
            },
            {
                id: "nexus-service-day",
                titleFr: "Phase 0 — journée de service",
                titleEn: "Phase 0 — service day flow",
                mermaid: `flowchart LR
  M[Menu carte] --> O[Commande]
  O --> T[Table / salle]
  O --> K[Kitchen KDS]
  K --> P[Paiement POS]
  P --> E[Events sync]
  E --> D[Dashboard CA]
  subgraph offline [Terrain offline-capable]
    O
    T
    K
    P
  end`,
            },
            {
                id: "nexus-data-layers",
                titleFr: "Couches données Prisma vs Kysely",
                titleEn: "Data layers Prisma vs Kysely",
                mermaid: `flowchart TB
  subgraph publicSchema [Schéma public]
    T[tenants]
    U[users sessions]
    B[billing invoices coupons]
    C[modules catalogue]
    FF[feature_flags]
  end
  subgraph tenantSchema [Schéma t_slug]
    MENU[menu categories items]
    ORD[orders lines]
    FLOOR[tables floor]
    POS[pos sessions payments]
    KDS[kitchen tickets]
  end
  PRISMA[Prisma] --> publicSchema
  KYSELY[Kysely + SQL migrations] --> tenantSchema
  PLATFORM[Plateforme SaaS] --> PRISMA
  METIER[Métier restaurant] --> KYSELY`,
            },
            {
                id: "nexus-events",
                titleFr: "Bus événements inter-modules",
                titleEn: "Inter-module event bus",
                mermaid: `flowchart LR
  POS[module pos] -->|order.paid| BUS[core/events]
  ORD[module orders] -->|order.created| BUS
  KDS[module kitchen] -->|ticket.bumped| BUS
  BUS --> DASH[module dashboard]
  BUS --> INV[module inventory]
  BUS --> ANAL[analytics]
  BUS -.-> NOTE[handlers in-process - pas d appels directs module a module]`,
            },
            {
                id: "nexus-use-cases",
                titleFr: "Cas d'utilisation NEXUS",
                titleEn: "NEXUS use cases",
                mermaid: `flowchart TB
  subgraph system [NEXUS ERP SaaS]
    UC1["S'inscrire et choisir un plan"]
    UC2[Onboarder le restaurant]
    UC3[Gerer menu et disponibilites]
    UC4[Prendre et suivre une commande]
    UC5[Encaisser au POS]
    UC6[Traiter tickets cuisine KDS]
    UC7[Acheter un module marketplace]
    UC8[Consulter le dashboard CA]
    UC9[Administrer tenants et catalogue]
  end
  G((Invite))
  R((Restaurateur))
  S((Serveur caisse))
  C((Cuisinier))
  A((Admin plateforme))
  G --- UC1
  R --- UC2
  R --- UC3
  R --- UC7
  R --- UC8
  S --- UC4
  S --- UC5
  C --- UC6
  A --- UC9`,
            },
            {
                id: "nexus-auth-sequence",
                titleFr: "Séquence — flux d'authentification",
                titleEn: "Sequence — authentication flow",
                mermaid: `sequenceDiagram
  actor U as Utilisateur
  participant FE as Website ou ERP
  participant API as apps/api
  participant AUTH as core/auth
  participant DB as PostgreSQL public
  participant OAUTH as Google Facebook
  U->>FE: Choisit canal auth
  alt Email + password
    FE->>API: POST /auth/login
    API->>AUTH: AuthService.login
    AUTH->>DB: Verifie credentials
    AUTH->>DB: Cree session
    AUTH-->>API: access 15min + refresh
  else OAuth2
    FE->>OAUTH: Redirect consent
    OAUTH-->>FE: Authorization code
    FE->>API: POST /auth/oauth/callback
    API->>AUTH: Exchange + upsert user
    AUTH->>DB: Session
  else WhatsApp OTP
    FE->>API: POST /auth/whatsapp/start
    API->>AUTH: Envoie OTP
    U->>FE: Saisie OTP
    FE->>API: POST /auth/whatsapp/verify
    API->>AUTH: Valide OTP + session
  end
  API-->>FE: Cookies HttpOnly BFF
  FE->>API: Requete protegee
  API->>AUTH: authPlugin JWT session
  AUTH-->>API: Identite + roles
  API-->>FE: 200 OK`,
            },
            {
                id: "nexus-service-day-sequence",
                titleFr: "Séquence — journée de service",
                titleEn: "Sequence — service day flow",
                mermaid: `sequenceDiagram
  actor SRV as Serveur
  actor CUI as Cuisinier
  participant MENU as module menu
  participant FLOOR as module tables
  participant ORD as module orders
  participant KDS as module kitchen
  participant POS as module pos
  participant EVT as core/events
  participant SYNC as core/sync
  participant DASH as module dashboard
  SRV->>MENU: Consulte carte active
  SRV->>FLOOR: Assigne table
  SRV->>ORD: Cree commande
  ORD->>EVT: publish order.created
  EVT->>KDS: Cree ticket cuisine
  CUI->>KDS: Prep + bump ticket
  KDS->>EVT: publish ticket.bumped
  EVT->>ORD: Statut pret
  SRV->>POS: Encaissement
  POS->>EVT: publish order.paid
  EVT->>DASH: Maj CA temps reel
  Note over POS,SYNC: Offline: journal local puis push
  POS->>SYNC: Push events
  SYNC-->>DASH: Projections cloud`,
            },
            {
                id: "nexus-infra-phases",
                titleFr: "Phases infrastructure",
                titleEn: "Infrastructure phases",
                mermaid: `flowchart LR
  P0[Phase 0 Local Docker] --> P1[Phase 1 Staging / Production]
  P1 --> P2[Phase 2 Kubernetes]
  P2 --> P3[Phase 3 Multi-région]
  P0 --- D0[Compose Postgres Redis MinIO]
  P1 --- D1[VPS / cloud + Nginx + CI]
  P2 --- D2[K8s + autoscaling]
  P3 --- D3[DR multi-région]`,
            },
        ],

        resources: [
            {
                labelFr: "Présentation business NEXUS (PDF)",
                labelEn: "NEXUS business presentation (PDF)",
                url: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-presentation.pdf",
                type: "slides",
            },
            {
                labelFr: "Site produit nexus-erp.com",
                labelEn: "Product site nexus-erp.com",
                url: "https://nexus-erp.com",
                type: "other",
            },
            {
                labelFr: "Site ZENORA",
                labelEn: "ZENORA website",
                url: "https://www.zenora360.com",
                type: "other",
            },
        ],

        milestones: [
            {
                labelFr: "Cadrage produit & docs",
                labelEn: "Product framing & docs",
                date: "Mars 2026",
                descriptionFr: "Vision, ADRs, registry modules, architecture monorepo.",
                descriptionEn: "Vision, ADRs, module registry, monorepo architecture.",
            },
            {
                labelFr: "Premières lignes de code",
                labelEn: "First lines of code",
                date: "Mai 2026",
                descriptionFr: "Socle Turborepo, API Fastify, cores auth/database/kernel.",
                descriptionEn: "Turborepo foundation, Fastify API, auth/database/kernel cores.",
            },
            {
                labelFr: "Billing + onboarding + thin app",
                labelEn: "Billing + onboarding + thin app",
                date: "Juin–Juil. 2026",
                descriptionFr: "Checkout Stripe/Flutterwave, provision tenant, shell ERP, marketplace UI.",
                descriptionEn: "Stripe/Flutterwave checkout, tenant provision, ERP shell, marketplace UI.",
            },
            {
                labelFr: "Offline-first + vertical menu",
                labelEn: "Offline-first + menu vertical",
                date: "Juin–Juil. 2026",
                descriptionFr: "Sync O1–O3, Dexie client, module menu bout-en-bout.",
                descriptionEn: "Sync O1–O3, Dexie client, end-to-end menu module.",
            },
            {
                labelFr: "Journée de service (Phase 0)",
                labelEn: "Service day (Phase 0)",
                date: "H2 2026",
                descriptionFr: "Menu → commande → cuisine → paiement → CA dashboard.",
                descriptionEn: "Menu → order → kitchen → payment → dashboard revenue.",
            },
            {
                labelFr: "Produit consommable pilotes",
                labelEn: "Consumable for pilots",
                date: "Déc. 2026",
                descriptionFr: "Cible : restaurants pilotes opérationnels sur le cœur Phase 0.",
                descriptionEn: "Target: pilot restaurants operational on Phase 0 core.",
            },
        ],

        scopeFr: [
            "ERP SaaS multi-tenant pour restauration (toutes tailles / types / localisations)",
            "Vitrine marketing + auth + plans + onboarding + ERP + marketplace modules",
            "Cores plateforme (auth, billing, kernel, sync, search, events, AI…)",
            "Modules Phase 0 : menu, orders, tables, POS, kitchen, dashboard",
            "Offline-first terrain + paiements locaux / internationaux",
            "Documentation ADRs, registry modules, runbooks infra progressive",
        ],
        scopeEn: [
            "Multi-tenant SaaS ERP for restaurants (all sizes / types / locales)",
            "Marketing site + auth + plans + onboarding + ERP + module marketplace",
            "Platform cores (auth, billing, kernel, sync, search, events, AI…)",
            "Phase 0 modules: menu, orders, tables, POS, kitchen, dashboard",
            "Floor offline-first + local / international payments",
            "ADRs documentation, module registry, progressive infra runbooks",
        ],
        nonGoalsFr: [
            "Microservices dès le jour 1 (extraction progressive seulement)",
            "Remplacer la comptabilité Odoo/Sage — intégration / export privilégiés",
            "Hardware POS propriétaire",
            "IA vitrine avant données opérationnelles réelles (IA sous le capot en P3)",
            "45 modules UI complets sans backend — vertical slices livrables d'abord",
        ],
        nonGoalsEn: [
            "Day-1 microservices (progressive extraction only)",
            "Replacing Odoo/Sage accounting — prefer integration / export",
            "Proprietary POS hardware",
            "Showcase AI before real operational data (under-the-hood AI in P3)",
            "45 full UI modules without backend — ship vertical slices first",
        ],

        decisions: [
            {
                titleFr: "Monolithe modulaire (Turborepo)",
                titleEn: "Modular monolith (Turborepo)",
                decisionFr: "Monorepo pnpm + Turborepo plutôt que microservices initiaux.",
                decisionEn: "pnpm + Turborepo monorepo instead of initial microservices.",
                rationaleFr: "Vélocité équipe, transactions cohérentes, extraction possible plus tard (ADR-001).",
                rationaleEn: "Team velocity, consistent transactions, later extraction possible (ADR-001).",
            },
            {
                titleFr: "Modules type Odoo + kernel",
                titleEn: "Odoo-like modules + kernel",
                decisionFr: "Packages modules isolés + manifest + chargement kernel.",
                decisionEn: "Isolated module packages + manifest + kernel loading.",
                rationaleFr: "Activation à la demande, testabilité, marketplace (ADR-002).",
                rationaleEn: "On-demand activation, testability, marketplace (ADR-002).",
            },
            {
                titleFr: "Schema-per-tenant",
                titleEn: "Schema-per-tenant",
                decisionFr: "Un schéma PostgreSQL t_{slug} par restaurant.",
                decisionEn: "One PostgreSQL t_{slug} schema per restaurant.",
                rationaleFr: "Isolation forte sans coût database-per-tenant (ADR-003).",
                rationaleEn: "Strong isolation without database-per-tenant cost (ADR-003).",
            },
            {
                titleFr: "Stack Fastify + Next.js + Prisma/Kysely",
                titleEn: "Fastify + Next.js + Prisma/Kysely stack",
                decisionFr: "Fastify plugins, Next App Router, Prisma public + Kysely tenant.",
                decisionEn: "Fastify plugins, Next App Router, Prisma public + Kysely tenant.",
                rationaleFr: "Isolation plugins, SEO vitrine, type-safety et schema switching (ADR-004).",
                rationaleEn: "Plugin isolation, marketing SEO, type-safety and schema switching (ADR-004).",
            },
            {
                titleFr: "Thin app ERP",
                titleEn: "Thin ERP app",
                decisionFr: "UI métier co-localisée modules/*/frontend, shell dans web-erp.",
                decisionEn: "Domain UI co-located in modules/*/frontend, shell in web-erp.",
                rationaleFr: "Sidebar dynamique selon modules installés (ADR-005).",
                rationaleEn: "Dynamic sidebar from installed modules (ADR-005).",
            },
            {
                titleFr: "Offline-first event-sourced",
                titleEn: "Event-sourced offline-first",
                decisionFr: "Journal d'événements + SyncEngine, pas Last-Write-Wins naïf.",
                decisionEn: "Event journal + SyncEngine, not naive Last-Write-Wins.",
                rationaleFr: "Le service continue sans réseau ; le cloud reste autoritatif (ADR-009).",
                rationaleEn: "Service continues offline; cloud stays authoritative (ADR-009).",
            },
            {
                titleFr: "Billing abstrait multi-providers",
                titleEn: "Abstract multi-provider billing",
                decisionFr: "API billing unique ; Stripe + Flutterwave ; activation webhook-only.",
                decisionEn: "Single billing API; Stripe + Flutterwave; webhook-only activation.",
                rationaleFr: "Frontend découplé des PSP ; conformité et reprise fiables.",
                rationaleEn: "Frontend decoupled from PSPs; reliable compliance and recovery.",
            },
        ],

        securityFr: [
            "Isolation schema-per-tenant — aucune fuite possible par oubli de filtre tenant_id",
            "Auth multi-canal : JWT access/refresh, sessions, RBAC granulaire, OAuth2, WhatsApp",
            "BFF sécurisé (cookies HttpOnly, CSRF) via @nexus/auth-session",
            "Secrets centralisés (Infisical) — zéro secret en clair dans le repo",
            "Feature flags (Flagsmith) pour exposer progressivement les capacités sensibles",
            "Billing : webhooks signés (Stripe / Flutterwave) ; activation jamais côté navigateur",
            "Audit trail plateforme + soft-delete tenant avec rétention et purge contrôlée",
            "Chaîne DevSecOps : gitleaks, SAST/SCA, image scanning, policies admission K8s",
            "TLS de bout en bout, chiffrement au repos (volumes / object storage), rotation des clés",
            "Segmentation réseau (private subnets), least-privilege IAM, WAF / Cloudflare en frontal",
            "Conformité RGPD native (consentement, export, droit à l’oubli) et journalisation d’accès",
        ],
        securityEn: [
            "Schema-per-tenant isolation — no data leak from a forgotten tenant_id filter",
            "Multi-channel auth: JWT access/refresh, sessions, granular RBAC, OAuth2, WhatsApp",
            "Secure BFF (HttpOnly cookies, CSRF) via @nexus/auth-session",
            "Centralized secrets (Infisical) — zero plaintext secrets in the repo",
            "Feature flags (Flagsmith) to progressively expose sensitive capabilities",
            "Billing: signed webhooks (Stripe / Flutterwave); never activate from the browser",
            "Platform audit trail + tenant soft-delete with retention and controlled purge",
            "DevSecOps chain: gitleaks, SAST/SCA, image scanning, Kubernetes admission policies",
            "End-to-end TLS, encryption at rest (volumes / object storage), key rotation",
            "Network segmentation (private subnets), least-privilege IAM, WAF / Cloudflare edge",
            "Native GDPR posture (consent, export, right to erasure) and access logging",
        ],

        infraFr: [
            "Socle actuel : Docker Compose, Nginx, PostgreSQL, Redis, object storage (MinIO/S3)",
            "CI/CD GitHub Actions + Husky (pre-commit / pre-push) dès le monorepo",
            "Cible production AWS : VPC, EKS (Kubernetes), ALB, RDS PostgreSQL, ElastiCache Redis",
            "IaC Terraform pour le provisionnement cloud ; Ansible pour le bootstrap nœuds / config",
            "GitOps Argo CD pour le déploiement déclaratif des workloads sur le cluster",
            "Observabilité : Prometheus, Grafana, logs structurés, alertes SLO métier et techniques",
            "Stockage fichiers scoped par tenant ; backups automatisés + PITR base de données",
            "Roadmap infra documentée : local → staging/prod → Kubernetes → multi-région",
        ],
        infraEn: [
            "Current foundation: Docker Compose, Nginx, PostgreSQL, Redis, object storage (MinIO/S3)",
            "GitHub Actions CI/CD + Husky (pre-commit / pre-push) from the monorepo",
            "Production target on AWS: VPC, EKS (Kubernetes), ALB, RDS PostgreSQL, ElastiCache Redis",
            "Terraform for cloud provisioning; Ansible for node bootstrap / configuration",
            "Argo CD GitOps for declarative workload deployment on the cluster",
            "Observability: Prometheus, Grafana, structured logs, business and technical SLO alerts",
            "Tenant-scoped file storage; automated backups + database PITR",
            "Documented infra roadmap: local → staging/prod → Kubernetes → multi-region",
        ],

        externalLinks: [
            { labelFr: "NEXUS ERP", labelEn: "NEXUS ERP", url: "https://nexus-erp.com" },
            { labelFr: "ZENORA", labelEn: "ZENORA", url: "https://www.zenora360.com" },
        ],

        lessonsFr: [
            "Sur un ERP multi-tenant, l’architecture et les contrats (kernel, DDL, billing) doivent précéder la densité fonctionnelle — sinon chaque module devient une dette structurelle.",
            "Le schema-per-tenant impose une discipline opérationnelle (migrations N schémas, pool, search_path) ; c’est le prix d’une isolation réellement auditable.",
            "Offline-first en restauration n’est pas un cache : sans journal d’événements, résolution de conflits et vérité cloud autoritative, le terrain casse le produit.",
            "Un marketplace de modules n’a de sens que si le provisionnement tenant, le pricing et l’activation partagent le même pipeline (checkout → webhook → installed_modules).",
            "Thin app + manifests : la complexité initiale se rentabilise dès que la navigation, les permissions et le bundle suivent l’état réel des modules installés.",
            "Documenter les ADR et le registry avant d’accélérer le delivery évite de scaler une ambiguïté — la vélocité d’une équipe de quatre dépend de décisions écrites.",
        ],
        lessonsEn: [
            "On a multi-tenant ERP, architecture and contracts (kernel, DDL, billing) must precede feature density — otherwise every module becomes structural debt.",
            "Schema-per-tenant demands operational discipline (N-schema migrations, pool, search_path); that is the cost of truly auditable isolation.",
            "Restaurant offline-first is not a cache: without an event journal, conflict resolution and an authoritative cloud truth, the floor breaks the product.",
            "A module marketplace only works if tenant provisioning, pricing and activation share one pipeline (checkout → webhook → installed_modules).",
            "Thin app + manifests: early complexity pays off once navigation, permissions and bundling follow the real installed-module state.",
            "Writing ADRs and the registry before accelerating delivery prevents scaling ambiguity — a four-person team’s velocity depends on written decisions.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                afterSrc: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-ui-extra-02.png",
                captionFr: "De l’absence de produit à une interface ERP opérationnelle (module Menu).",
                captionEn: "From no product to an operational ERP interface (Menu module).",
            },
        ],

        isFeatured: true,
    },

    {
        id: 2,
        titleFr: "GTA IT — Plateforme corporate PWA & backoffice ESN",
        titleEn: "GTA IT — Corporate PWA platform & ESN admin",

        descriptionFr: "Plateforme web professionnelle pour l'ESN Global Technology & Associates : vitrine d'expertise, génération de leads, recrutement, blog et pilotage des activités via backoffice.",
        descriptionEn: "Professional web platform for the IT services firm Global Technology & Associates: expertise showcase, lead generation, recruitment, blog, and operations steering via an admin backoffice.",

        fullDescriptionFr: "Conception et livraison solo de la plateforme digitale de lancement de GTA (Global Technology & Associates), ESN camerounaise en phase de montée en puissance. Le brief était clair : sortir une vitrine crédible, rapide et convaincante — à la fois preuve d'expertise technique et centre névralgique des activités (devis, recrutement, contact, blog, catalogue projets/services). En environ un mois, j'ai conçu l'architecture, le design system dark/light, les parcours conversion, le CMS backoffice, l'API Express/MongoDB et le déploiement Docker/Nginx avec CI/CD. Le résultat live sur gta-it.com a été explicitement salué par M. Gilles Tanko (CEO) — et sert depuis de référence commerciale et de preuve sociale face aux partenaires.",
        fullDescriptionEn: "Solo design and delivery of the launch digital platform for GTA (Global Technology & Associates), a Cameroonian IT services company scaling up. The brief was clear: ship a credible, fast, convincing showcase — both proof of technical expertise and the operational hub for activities (quotes, recruitment, contact, blog, projects/services catalog). In about one month I designed the architecture, dark/light design system, conversion journeys, admin CMS, Express/MongoDB API and Docker/Nginx deployment with CI/CD. The live result on gta-it.com was explicitly praised by Gilles Tanko (CEO) — and has since served as a commercial reference and social proof with partners.",

        problemFr: "GTA lançait ses activités sans présence digitale à la hauteur de son ambition. Sans vitrine robuste, l'ESN peinait à convaincre prospects et partenaires, à capter des leads qualifiés, à recruter, et à démontrer concrètement son niveau d'exécution technique.",
        problemEn: "GTA was launching without a digital presence matching its ambition. Without a robust showcase, the firm struggled to convince prospects and partners, capture qualified leads, recruit, and concretely prove its technical execution level.",

        solutionFr: [
            "Architecture 3-tiers : SPA React/Vite PWA + API Express + MongoDB, servie derrière Nginx conteneurisé",
            "Parcours conversion complets : devis multi-étapes (Zod), contact, candidatures carrière avec upload CV",
            "Vitrine multi-pages : services, projets/case studies, équipe, témoignages, blog & actualités",
            "Backoffice CMS pour piloter contenus, leads, offres d'emploi, newsletters et paramètres",
            "i18n FR/EN (DE), dark/light, SEO Helmet, PWA offline, cookies RGPD",
            "Pipeline CI/CD GitHub Actions + Docker multi-stage (Bun build → Nginx) vers VPS production",
        ],
        solutionEn: [
            "3-tier architecture: React/Vite PWA SPA + Express API + MongoDB, served behind containerized Nginx",
            "Full conversion journeys: multi-step quotes (Zod), contact, career applications with CV upload",
            "Multi-page showcase: services, project case studies, team, testimonials, blog & news",
            "Admin CMS to steer content, leads, job offers, newsletters and settings",
            "FR/EN (DE) i18n, dark/light, Helmet SEO, offline PWA, GDPR cookies",
            "GitHub Actions CI/CD + multi-stage Docker (Bun build → Nginx) to production VPS",
        ],

        challengesFr: [
            "Livrer une plateforme corporate complète (15+ surfaces) en ~1 mois, seul",
            "Faire de la vitrine elle-même une démonstration de craft (perf, motion, PWA)",
            "Coupler lead gen, recrutement et CMS sans alourdir l'expérience publique",
            "Atteindre des scores PageSpeed/Lighthouse élevés en desktop tout en gardant Framer Motion et 3D",
            "Industrialiser le déploiement (Docker, Nginx TLS, Actions) dès la première mise en prod",
        ],
        challengesEn: [
            "Ship a full corporate platform (15+ surfaces) in ~1 month, solo",
            "Make the showcase itself a craft demonstration (perf, motion, PWA)",
            "Couple lead gen, recruitment and CMS without weighing down the public UX",
            "Hit high PageSpeed/Lighthouse desktop scores while keeping Framer Motion and 3D",
            "Industrialize deployment (Docker, Nginx TLS, Actions) from the first production push",
        ],

        impactFr: [
            "Vitrine production live (gta-it.com) félicitée par le CEO Gilles Tanko",
            "Positionnement SERP fort sur les requêtes locales d'agence IT au Cameroun",
            "Canal unique pour devis, candidatures, contact et publication d'expertise",
            "Crédibilité renforcée auprès des partenaires et premiers clients",
            "Base technique réutilisable pour les offres GTA (preuve par le produit)",
        ],
        impactEn: [
            "Live production showcase (gta-it.com) praised by CEO Gilles Tanko",
            "Strong SERP positioning on local Cameroon IT-agency queries",
            "Single channel for quotes, applications, contact and thought leadership",
            "Strengthened credibility with partners and early clients",
            "Reusable technical base for GTA offers (proof by product)",
        ],

        metrics: {
            "PageSpeed Performance": "93/100",
            "Accessibility": "91/100",
            "Best Practices": "92/100",
            "SEO": "92/100",
            "Delivery": "~1 mois solo",
            "Surfaces": "15+ pages + admin",
            "i18n": "FR / EN / DE",
            "Status": "Production — gta-it.com",
        },

        techStack: {
            frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/UI", "Framer Motion", "Zustand", "React Router", "React Helmet Async", "i18next", "Zod", "React Hook Form", "Axios", "PWA"],
            backend: ["Node.js", "Express", "REST API", "JWT", "Zod"],
            database: ["MongoDB", "Redis"],
            devops: ["Docker", "Nginx", "GitHub Actions", "VPS", "Cloudflare", "Bun"],
        },

        architecture: [
            "SPA React/TypeScript (Vite + SWC) avec lazy routes et code splitting",
            "API Express séparée (api.gta-it.com) — MongoDB pour contenus/leads, Redis en cache",
            "État client Zustand (session, CMS admin, settings thème/langue/cookies)",
            "PWA : Service Worker, cache Workbox, mode offline, installabilité",
            "Nginx TLS (HSTS, CSP, gzip) servant le build statique conteneurisé",
            "CI/CD GitHub Actions : checks PR → build → déploiement production",
        ],

        testing: [
            "Vitest + Testing Library (socle composants critiques)",
            "Cypress prévu pour parcours E2E devis / carrière / contact",
            "ESLint + Prettier + typecheck TypeScript en CI",
            "Audits PageSpeed / Lighthouse en validation release",
        ],

        images: [
            "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-logo.png",
            "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-hero-home.png",
            "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-projects-grid.png",
            "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-about-team.png",
            "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-quote-form.png",
            "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-pagespeed.png",
        ],
        preview: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-hero-home.png",
        videoDemo: "https://s3.zenora360.com/barthez-portfolio/videos/gta/gta-demo-walkthrough.webm",

        category: "Full Stack & PWA",
        status: "Production",
        complexity: "Avancé",
        role: "Fullstack Developer",
        teamSize: 1,

        duration: "1 mois",
        date: "2025",

        github: "",
        demo: "https://gta-it.com",

        businessContextFr: "Projet stratégique de lancement digital pour positionner GTA comme ESN crédible sur le marché (services digitaux, cybersécurité, IA, cloud) et centraliser acquisition, recrutement et content marketing.",
        businessContextEn: "Strategic digital launch project to position GTA as a credible IT services firm (digital services, cybersecurity, AI, cloud) and centralize acquisition, recruitment and content marketing.",

        responsibilitiesFr: [
            "Conception produit & UX de bout en bout (vitrine, funnels, backoffice)",
            "Architecture frontend SPA/PWA et intégration API Express/MongoDB",
            "Design system dark/light, motion, i18n et SEO technique",
            "Formulaires critiques (devis, carrière, contact) avec validation Zod",
            "Conteneurisation Docker/Nginx, CI/CD Actions et mise en production VPS",
            "Pilotage solo delivery jusqu'à validation CEO",
        ],
        responsibilitiesEn: [
            "End-to-end product & UX design (showcase, funnels, admin)",
            "SPA/PWA frontend architecture and Express/MongoDB API integration",
            "Dark/light design system, motion, i18n and technical SEO",
            "Critical forms (quote, careers, contact) with Zod validation",
            "Docker/Nginx containerization, Actions CI/CD and VPS production rollout",
            "Solo delivery ownership through CEO validation",
        ],

        videos: [
            {
                url: "https://s3.zenora360.com/barthez-portfolio/videos/gta/gta-demo-walkthrough.webm",
                type: "demo",
                titleFr: "Démo parcours site GTA",
                titleEn: "GTA site walkthrough demo",
            },
        ],

        gallery: [
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-logo.png",
                captionFr: "Identité GTA — wordmark et signature Global Technology & Associates",
                captionEn: "GTA identity — wordmark and Global Technology & Associates signature",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-hero-home.png",
                captionFr: "Hero Accueil — proposition de valeur et CTA devis",
                captionEn: "Home hero — value proposition and quote CTAs",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-splash-loading.png",
                captionFr: "Splash PWA — branding, citation et chargement animé",
                captionEn: "PWA splash — branding, quote and animated loading",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-home-projects.png",
                captionFr: "Home — carrousel projets récents (DHJ, e-commerce, Animal Scanner)",
                captionEn: "Home — recent projects carousel (DHJ, e-commerce, Animal Scanner)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-home-blog.png",
                captionFr: "Home — articles récents et positionnement expertise",
                captionEn: "Home — recent articles and thought-leadership positioning",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-about-team.png",
                captionFr: "À propos — équipe d'experts (CEO, CTO, Fullstack, Cyber, DevOps)",
                captionEn: "About — expert team (CEO, CTO, Fullstack, Cyber, DevOps)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-testimonials.png",
                captionFr: "Témoignages clients — carrousel social proof",
                captionEn: "Client testimonials — social-proof carousel",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-projects-grid.png",
                captionFr: "Galerie Projets — filtres, stack tags et case studies",
                captionEn: "Projects gallery — filters, stack tags and case studies",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-hero-cta.png",
                captionFr: "CTA conversion — devis gratuit et découverte services",
                captionEn: "Conversion CTA — free quote and services discovery",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-quote-form.png",
                captionFr: "Demande de devis multi-étapes — contact et type de service",
                captionEn: "Multi-step quote request — contact and service type",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-careers-apply.png",
                captionFr: "Carrière — candidature multi-étapes (profil professionnel)",
                captionEn: "Careers — multi-step application (professional profile)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-project-structure.png",
                captionFr: "Arborescence frontend — pages, stores Zustand, Cypress, PWA",
                captionEn: "Frontend tree — pages, Zustand stores, Cypress, PWA",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-github-repo.png",
                captionFr: "Dépôt privé gta — Docker, Nginx, Actions, docs",
                captionEn: "Private gta repo — Docker, Nginx, Actions, docs",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-pagespeed.png",
                captionFr: "PageSpeed Insights desktop — Perf 93, A11y 91, BP 92, SEO 92",
                captionEn: "PageSpeed Insights desktop — Perf 93, A11y 91, BP 92, SEO 92",
                kind: "metric",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-seo-serp.png",
                captionFr: "SERP Google — gta-it.com en tête sur agence IT Cameroun",
                captionEn: "Google SERP — gta-it.com ranking for Cameroon IT agency",
                kind: "metric",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-brand-overview.png",
                captionFr: "Fiche marque — services, contacts et ancrage Yaoundé",
                captionEn: "Brand card — services, contacts and Yaoundé footprint",
                kind: "metric",
            },
        ],

        diagrams: [
            {
                id: "gta-arch",
                titleFr: "Architecture 3-tiers production",
                titleEn: "Production 3-tier architecture",
                mermaid: `flowchart TB
  subgraph clients [Clients]
    B[Browser / PWA]
  end
  subgraph edge [Edge]
    CF[Cloudflare]
    NGX[Nginx TLS CSP]
  end
  subgraph app [Application]
    SPA[React Vite SPA]
    API[Express API]
  end
  subgraph data [Données]
    MONGO[(MongoDB)]
    REDIS[(Redis)]
  end
  B --> CF --> NGX --> SPA
  SPA -->|Axios REST| API
  API --> MONGO
  API --> REDIS
  CI[GitHub Actions] -->|Docker image| NGX`,
            },
            {
                id: "gta-use-cases",
                titleFr: "Cas d'utilisation",
                titleEn: "Use cases",
                mermaid: `flowchart TB
  subgraph system [GTA IT Platform]
    UC1[Decouvrir services et expertise]
    UC2[Demander un devis]
    UC3[Postuler a une offre]
    UC4[Lire blog et actualites]
    UC5[Contacter GTA]
    UC6[Consulter projets / case studies]
    UC7[Gerer contenus et leads CMS]
  end
  V((Visiteur))
  C((Prospect client))
  Cand((Candidat))
  Adm((Admin GTA))
  V --- UC1
  V --- UC4
  V --- UC6
  C --- UC2
  C --- UC5
  Cand --- UC3
  Adm --- UC7`,
            },
            {
                id: "gta-quote-sequence",
                titleFr: "Séquence — demande de devis",
                titleEn: "Sequence — quote request",
                mermaid: `sequenceDiagram
  actor U as Prospect
  participant FE as SPA QuoteForm
  participant Z as Zod RHF
  participant API as Express API
  participant DB as MongoDB
  participant M as Mailer
  U->>FE: Ouvre /demande-devis
  FE->>U: Etape 1 infos contact
  U->>FE: Etape 2 details projet / service
  FE->>Z: Valide schema
  Z-->>FE: OK
  FE->>API: POST /quotes
  API->>DB: Persiste lead devis
  API->>M: Notification equipe
  API-->>FE: 201 Created
  FE-->>U: Ecran succes + toast`,
            },
            {
                id: "gta-career-sequence",
                titleFr: "Séquence — candidature carrière",
                titleEn: "Sequence — career application",
                mermaid: `sequenceDiagram
  actor C as Candidat
  participant FE as Careers SPA
  participant API as Express API
  participant DB as MongoDB
  participant ST as Object storage
  C->>FE: Consulte /careers
  FE-->>C: Liste offres
  C->>FE: Ouvre offre + Apply
  C->>FE: Etape 1 infos perso
  C->>FE: Etape 2 profil pro
  C->>FE: Etape 3 CV / lettre
  FE->>API: POST /applications multipart
  API->>ST: Stocke pieces jointes
  API->>DB: Cree candidature
  API-->>FE: 201 Created
  FE-->>C: Confirmation`,
            },
            {
                id: "gta-lead-journey",
                titleFr: "Parcours acquisition → lead",
                titleEn: "Acquisition → lead journey",
                mermaid: `flowchart LR
  A[SEO / Social / Direct] --> B[Landing Accueil]
  B --> C{Intention}
  C -->|Explorer| D[Services / Projets / Blog]
  C -->|Acheter| E[Demande de devis]
  C -->|Rejoindre| F[Carriere]
  D --> E
  D --> G[Contact]
  E --> H[Lead MongoDB]
  F --> I[Candidature]
  G --> H
  H --> J[Backoffice + relance]`,
            },
            {
                id: "gta-cms-flow",
                titleFr: "Backoffice — pilotage contenus & leads",
                titleEn: "Admin — content & leads steering",
                mermaid: `flowchart TB
  ADM[Admin authentifie JWT] --> DASH[Dashboard]
  DASH --> BLOG[Blogs / Actualites]
  DASH --> PROJ[Projets]
  DASH --> JOBS[Offres carriere]
  DASH --> QUOTES[Devis entrants]
  DASH --> CONTACTS[Contacts]
  DASH --> TEAM[Equipe]
  DASH --> NEWS[Newsletters]
  DASH --> SET[Settings API / theme]
  BLOG --> API[Express]
  QUOTES --> API
  API --> DB[(MongoDB)]`,
            },
            {
                id: "gta-cicd",
                titleFr: "CI/CD — build et déploiement",
                titleEn: "CI/CD — build and deploy",
                mermaid: `flowchart LR
  DEV[Push / PR] --> GH[GitHub Actions]
  GH --> LINT[Lint + typecheck]
  GH --> TEST[Tests]
  LINT --> BUILD
  TEST --> BUILD[Docker multi-stage Bun]
  BUILD --> IMG[Image Nginx + dist]
  IMG --> VPS[VPS production]
  VPS --> LIVE[gta-it.com HTTPS]`,
            },
            {
                id: "gta-pwa",
                titleFr: "PWA — cache et offline",
                titleEn: "PWA — cache and offline",
                mermaid: `flowchart TB
  APP[React App] --> SW[Service Worker]
  SW --> PRE[Precache shell]
  SW --> RT[Runtime cache images fonts]
  SW --> API[NetworkFirst API]
  OFF[Offline] --> SW
  SW --> PAGE[/offline]
  SW --> SYNC[Background sync formulaires]`,
            },
            {
                id: "gta-i18n-seo",
                titleFr: "i18n & SEO technique",
                titleEn: "i18n & technical SEO",
                mermaid: `flowchart LR
  DET[Language detector] --> I18N[i18next FR EN DE]
  I18N --> UI[Pages / layouts]
  ROUTE[React Router] --> HELMET[react-helmet-async]
  HELMET --> META[Title OG canonical]
  META --> SERP[Indexation Google]
  UI --> META`,
            },
        ],

        resources: [
            {
                labelFr: "Site live gta-it.com",
                labelEn: "Live site gta-it.com",
                url: "https://gta-it.com",
                type: "other",
            },
        ],

        milestones: [
            {
                labelFr: "Kickoff brief CEO & cadrage produit",
                labelEn: "CEO brief kickoff & product framing",
                date: "S1",
                descriptionFr: "Objectifs : crédibilité, leads, recrutement, preuve technique.",
                descriptionEn: "Goals: credibility, leads, recruitment, technical proof.",
            },
            {
                labelFr: "Design system + shell PWA + routes",
                labelEn: "Design system + PWA shell + routes",
                date: "S2",
                descriptionFr: "Dark/light, navigation, i18n, hero et fondations perf.",
                descriptionEn: "Dark/light, navigation, i18n, hero and perf foundations.",
            },
            {
                labelFr: "Funnels devis / carrière / blog / projets",
                labelEn: "Quote / careers / blog / projects funnels",
                date: "S3",
                descriptionFr: "Parcours conversion + vitrine services/case studies.",
                descriptionEn: "Conversion journeys + services/case-study showcase.",
            },
            {
                labelFr: "Backoffice + API + prod Docker/Nginx",
                labelEn: "Admin + API + Docker/Nginx prod",
                date: "S4",
                descriptionFr: "CMS leads/contenus, CI/CD, mise en ligne gta-it.com, validation CEO.",
                descriptionEn: "Leads/content CMS, CI/CD, gta-it.com go-live, CEO validation.",
            },
        ],

        scopeFr: [
            "Site corporate multi-pages responsive (services, projets, équipe, témoignages)",
            "Blog & actualités pour content marketing",
            "Demande de devis multi-étapes + contact",
            "Espace carrière + candidature multi-étapes",
            "Backoffice CMS (contenus, leads, jobs, newsletters)",
            "PWA, i18n, dark/light, SEO, cookies RGPD",
            "Déploiement Docker/Nginx + CI/CD",
        ],
        scopeEn: [
            "Multi-page responsive corporate site (services, projects, team, testimonials)",
            "Blog & news for content marketing",
            "Multi-step quote request + contact",
            "Careers space + multi-step application",
            "Admin CMS (content, leads, jobs, newsletters)",
            "PWA, i18n, dark/light, SEO, GDPR cookies",
            "Docker/Nginx deployment + CI/CD",
        ],
        nonGoalsFr: [
            "ERP / CRM métier complet",
            "Application mobile native",
            "Marketplace clients self-service",
        ],
        nonGoalsEn: [
            "Full business ERP / CRM",
            "Native mobile apps",
            "Self-service client marketplace",
        ],

        decisions: [
            {
                titleFr: "SPA Vite PWA plutôt que Next full SSR",
                titleEn: "Vite PWA SPA over full Next SSR",
                decisionFr: "React SPA + Helmet SEO + PWA, hébergée Nginx sur VPS.",
                decisionEn: "React SPA + Helmet SEO + PWA, Nginx-hosted on VPS.",
                rationaleFr: "Contrôle total du craft UI/motion, backoffice custom, coût d'infra simple pour un lancement ESN.",
                rationaleEn: "Full control of UI/motion craft, custom admin, simple infra cost for an ESN launch.",
            },
            {
                titleFr: "Zustand pour session, CMS et settings",
                titleEn: "Zustand for session, CMS and settings",
                decisionFr: "Stores dédiés user / admin / settings avec persistance locale.",
                decisionEn: "Dedicated user / admin / settings stores with local persistence.",
                rationaleFr: "État global lisible sans surcouche Redux pour une équipe solo et un CMS léger.",
                rationaleEn: "Readable global state without Redux overhead for solo delivery and a light CMS.",
            },
            {
                titleFr: "Validation Zod sur tous les funnels critiques",
                titleEn: "Zod validation on all critical funnels",
                decisionFr: "Schemas partagés React Hook Form → API.",
                decisionEn: "Shared React Hook Form → API schemas.",
                rationaleFr: "Leads et candidatures fiables ; moins de friction support.",
                rationaleEn: "Reliable leads and applications; less support friction.",
            },
            {
                titleFr: "Docker multi-stage Bun → Nginx",
                titleEn: "Multi-stage Bun → Nginx Docker",
                decisionFr: "Build Bun, runtime Nginx alpine avec TLS/CSP.",
                decisionEn: "Bun build, Nginx alpine runtime with TLS/CSP.",
                rationaleFr: "Image légère, perf static, headers de sécu dès la première prod.",
                rationaleEn: "Lean image, static perf, security headers from first production.",
            },
            {
                titleFr: "La vitrine comme preuve d'expertise",
                titleEn: "Showcase as proof of expertise",
                decisionFr: "Perf, motion, PWA et SEO traités comme arguments commerciaux.",
                decisionEn: "Perf, motion, PWA and SEO treated as commercial arguments.",
                rationaleFr: "Pour une ESN, le site vend autant le craft que le discours.",
                rationaleEn: "For an IT services firm, the site sells craft as much as the pitch.",
            },
        ],

        securityFr: [
            "HTTPS / TLS 1.2+ via Nginx, HSTS et redirection HTTP→HTTPS",
            "CSP stricte, headers de sécurité et cookies de consentement RGPD",
            "Validation Zod côté client et contrôles API sur entrées utilisateur",
            "Auth backoffice JWT ; sanitisation anti-XSS (DOMPurify sur contenus riches)",
            "Séparation front public / API ; secrets hors repo (.env)",
            "Rate limiting et durcissement CORS côté API",
        ],
        securityEn: [
            "HTTPS / TLS 1.2+ via Nginx, HSTS and HTTP→HTTPS redirect",
            "Strict CSP, security headers and GDPR consent cookies",
            "Zod client validation and API checks on user inputs",
            "Admin JWT auth; XSS sanitization (DOMPurify on rich content)",
            "Public front / API separation; secrets out of repo (.env)",
            "API rate limiting and hardened CORS",
        ],

        infraFr: [
            "Docker multi-stage : build Bun → image Nginx servant le dist",
            "Nginx : SPA try_files, gzip, cache assets, TLS",
            "CI/CD GitHub Actions (lint, typecheck, build, deploy VPS)",
            "API Express sur api.gta-it.com + MongoDB (+ Redis cache)",
            "Cloudflare en frontal DNS/CDN selon environnement",
            "Observabilité basique : logs accès Nginx + healthchecks conteneur",
        ],
        infraEn: [
            "Multi-stage Docker: Bun build → Nginx image serving dist",
            "Nginx: SPA try_files, gzip, asset cache, TLS",
            "GitHub Actions CI/CD (lint, typecheck, build, VPS deploy)",
            "Express API on api.gta-it.com + MongoDB (+ Redis cache)",
            "Cloudflare at DNS/CDN edge depending on environment",
            "Basic observability: Nginx access logs + container healthchecks",
        ],

        externalLinks: [
            { labelFr: "Site live", labelEn: "Live site", url: "https://gta-it.com" },
        ],

        testimonial: {
            quoteFr: "Le travail livré sur la plateforme GTA dépasse le brief : c'est une vitrine digne d'une ESN ambitieuse, rapide à sortir et déjà opérationnelle pour nos leads et notre recrutement. Bravo.",
            quoteEn: "The work delivered on the GTA platform goes beyond the brief: it is a showcase worthy of an ambitious IT services firm, shipped fast and already operational for our leads and hiring. Well done.",
            author: "Gilles Tanko",
            roleFr: "CEO & Fondateur",
            roleEn: "CEO & Founder",
            company: "GTA — Global Technology & Associates",
        },

        lessonsFr: [
            "Pour une ESN, le site corporate n'est pas une brochure : c'est un artefact commercial. Perf, SEO et craft UI sont des arguments de vente autant que le catalogue de services.",
            "Un funnel devis/carrière bien validé (Zod) bat une dizaine de pages marketing supplémentaires : chaque lead doit arriver propre en backoffice.",
            "Livrer solo en un mois impose de trancher tôt (SPA+PWA+VPS) et d'industrialiser le déploiement dès le premier build — sinon la 'dernière semaine' mange la qualité.",
            "i18n et dark/light ne sont pas du polish : ils élargissent immédiatement l'audience (local + international) et renforcent la perception premium.",
            "Le compliment du CEO ne valide pas seulement l'UI : il valide un système (acquisition + recrutement + contenu) aligné sur les priorités business du lancement.",
        ],
        lessonsEn: [
            "For an IT services firm, the corporate site is not a brochure: it is a commercial artifact. Perf, SEO and UI craft sell as hard as the service catalog.",
            "A well-validated quote/careers funnel (Zod) beats ten extra marketing pages: every lead must land clean in the admin.",
            "Solo delivery in one month forces early stack choices (SPA+PWA+VPS) and deployment industrialization from the first build — otherwise the 'last week' eats quality.",
            "i18n and dark/light are not polish: they immediately widen audience (local + international) and reinforce a premium perception.",
            "CEO praise does not only validate UI: it validates a system (acquisition + hiring + content) aligned with launch business priorities.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                afterSrc: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-hero-home.png",
                captionFr: "De l'absence de vitrine digitale à une plateforme corporate PWA live (gta-it.com).",
                captionEn: "From no digital showcase to a live corporate PWA platform (gta-it.com).",
            },
        ],

        isFeatured: true,
    },


    {
        id: 3,
        titleFr: "KAZA — Marketplace immobiliere de confiance (Afrique)",
        titleEn: "KAZA — Trust-first real-estate marketplace (Africa)",

        descriptionFr: "Plateforme web & mobile pour trouver et publier un logement en Afrique : recherche gratuite pour les locataires, credits bailleurs, IA anti-fraude et contact direct WhatsApp.",
        descriptionEn: "Web & mobile platform to find and publish housing in Africa: free search for seekers, landlord credits, AI anti-fraud and direct WhatsApp contact.",

        fullDescriptionFr: "KAZA (ex-CamerLog) est la plateforme immobiliere de confiance concue pour le marche camerounais et extensible a l'Afrique subsaharienne. Le projet repond a un probleme quotidien : trouver un logement rapidement, sans arnaque aux frais de visite, sans opacite de prix, et sans intermedaires opaques. Depuis mai 2026, une equipe de cinq personnes (deux developpeurs dont moi en lead architecture / fullstack, produit, marketing et operations) structure et developpe un ecosysteme complet : application mobile React Native, plateforme web, API Fastify, montee de credits Mobile Money (Orange / MTN), certification bailleur, moteur de recherche multi-filtres, et pipeline IA anti-fraude (doublons media, prix aberrants, patterns de faux bailleurs). Locataires et diaspora cherchent gratuitement ; les bailleurs, agents et hotels consomment des credits pour publier. L'objectif : devenir le standard de confiance type Airbnb adapte aux realites africaines, en demarrant sur Douala et Yaounde.",
        fullDescriptionEn: "KAZA (formerly CamerLog) is the trust-first real-estate platform designed for the Cameroonian market and expandable across Sub-Saharan Africa. It tackles a daily problem: find housing fast, without visit-fee scams, price opacity, or opaque middlemen. Since May 2026, a five-person team (two developers including me as lead architect / fullstack, plus product, marketing and operations) has been structuring and building a full ecosystem: React Native mobile app, web platform, Fastify API, Mobile Money credit top-ups (Orange / MTN), landlord certification, multi-filter search, and an AI anti-fraud pipeline (media duplicates, outlier prices, fake-landlord patterns). Seekers and diaspora search for free; landlords, agents and hotels spend credits to publish. The goal: become the Airbnb-class trust standard adapted to African realities, starting in Douala and Yaounde.",

        problemFr: "Chaque mois, des milliers de personnes cherchent chambres, studios, maisons, boutiques ou sejours courts via WhatsApp et Facebook — un marche bruyant ou se melent vraies annonces, plaques de rue et arnaques (frais de visite sans visite, faux logements, doublons). Les locataires peinent a filtrer et a contacter en confiance ; les bailleurs peinent a etre trouves rapidement. Il n'existe pas de plateforme dominante de confiance au Cameroun.",
        problemEn: "Every month, thousands look for rooms, studios, houses, shops or short stays via WhatsApp and Facebook — a noisy market mixing real listings, street signs and scams (visit fees with no visit, fake housing, duplicates). Seekers struggle to filter and contact with trust; landlords struggle to be found quickly. No dominant trust platform exists in Cameroon.",

        solutionFr: [
            "Marketplace dual-sided : recherche 100% gratuite pour le locataire / acheteur ; publication montee par credits cote bailleur",
            "Fiches biens riches : photos/videos, commodites, frais (loyer, caution, visite), badges certifie / verifie, map et reviews",
            "Mise en relation directe WhatsApp (et messagerie in-app) sans commission cachee",
            "Economie de credits + packs Mobile Money (Orange Money / MTN MoMo) + option bailleur certifie",
            "Pipeline IA anti-fraude : hashing media, detection doublons, coherence prix/quartier, scoring TrustScore",
            "Stack moderne : React Native + web, API Fastify, PostgreSQL/Redis, cloud scalable Douala/Yaounde → CEMAC",
        ],
        solutionEn: [
            "Dual-sided marketplace: 100% free search for seekers/buyers; credit-funded publishing for landlords",
            "Rich listings: photos/videos, amenities, fees (rent, deposit, visit), certified/verified badges, map and reviews",
            "Direct WhatsApp matching (and in-app messaging) with no hidden commission",
            "Credit economy + Mobile Money packs (Orange Money / MTN MoMo) + certified-landlord option",
            "AI anti-fraud pipeline: media hashing, duplicate detection, price/neighborhood coherence, TrustScore",
            "Modern stack: React Native + web, Fastify API, PostgreSQL/Redis, scalable cloud Douala/Yaounde → CEMAC",
        ],

        challengesFr: [
            "Modeliser un marche informal + formal (locatif, vente, short stay, boutique) sans complexifier l'UX",
            "Concevoir une anti-fraude utile des le MVP sans fake-security theatre",
            "Integrer Mobile Money de facon fiable (webhooks, idempotence, reprise) pour les credits",
            "Servir 4G africaine : perf mobile, images, offline partiel, WhatsApp-first conversion",
            "Scaler l'architecture (Fastify modulaire) de 2 villes pilotes vers une ambition pan-africaine",
            "Aligner produit, marketing et ops autour d'une promesse unique : la confiance",
        ],
        challengesEn: [
            "Model informal + formal markets (rent, sale, short stay, shop) without cluttering UX",
            "Design anti-fraud that is useful from MVP without security theatre",
            "Integrate Mobile Money reliably (webhooks, idempotency, recovery) for credits",
            "Serve African 4G realities: mobile perf, images, partial offline, WhatsApp-first conversion",
            "Scale architecture (modular Fastify) from 2 pilot cities toward a pan-African ambition",
            "Align product, marketing and ops around one promise: trust",
        ],

        impactFr: [
            "Parcours chercheur gratuit : trouver, comparer, contacter sans payer",
            "Reduction ciblee de la fraude (doublons, faux bailleurs, prix aberrants) via IA + certification",
            "Visibilite 24/7 pour bailleurs, agents et hotels sans plaques de rue",
            "Canal diaspora : logements verifies pour la famille a distance",
            "Socle produit pret a s'etendre ville par ville puis pays par pays",
        ],
        impactEn: [
            "Free seeker journey: find, compare, contact without paying",
            "Targeted fraud reduction (duplicates, fake landlords, outlier prices) via AI + certification",
            "24/7 visibility for landlords, agents and hotels without street signs",
            "Diaspora channel: verified housing for family at a distance",
            "Product foundation ready to expand city-by-city then country-by-country",
        ],

        metrics: {
            "Marche cible": "4M+ menages urbains (CMR)",
            "Lancement": "Douala + Yaounde",
            "Modele": "Credits bailleur + certif",
            "Paiements": "Orange Money / MTN MoMo",
            "Surfaces": "Mobile RN + Web + Admin",
            "Equipe": "5 (2 dev)",
            "Statut": "En developpement actif",
            "Depuis": "Mai 2026",
        },

        techStack: {
            frontend: ["React Native", "React", "TypeScript", "Tailwind CSS", "Zustand", "React Query", "Maps SDK"],
            backend: ["Node.js", "Fastify", "REST API", "BullMQ", "Zod", "JWT / RBAC"],
            database: ["PostgreSQL", "Redis", "Object Storage"],
            devops: ["Docker", "GitHub Actions", "Nginx", "AWS", "Prometheus", "Grafana"],
        },

        architecture: [
            "Clients : app React Native (iOS/Android) + plateforme web + backoffice admin",
            "API Fastify modulaire (listings, credits, auth, media, fraud, messaging) avec extraction progressive des domaines chauds",
            "PostgreSQL pour le metier ; Redis pour cache, files et rate-limit ; object storage pour media",
            "Paiements credits via agregateurs Mobile Money (webhooks signes, idempotence)",
            "Service anti-fraude : hashing media, regles prix/quartier, queue de review admin",
            "Conversion : deep-link WhatsApp + messagerie in-app ; notifications push",
            "CI/CD Docker + observabilite (logs structures, metriques, alertes)",
        ],

        testing: [
            "Tests unitaires domaines critiques (credits, auth, fraude)",
            "Tests contrat API Fastify + validation Zod",
            "Tests E2E parcours chercheur et publication bailleur",
            "Scenarios paiement sandbox Mobile Money (webhooks / retries)",
        ],

        images: [
            "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-home-feed.png",
            "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-map-explorer.png",
            "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-property-details.png",
            "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-landlord-credits.png",
            "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-figma-flows-01.png",
        ],
        preview: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-home-feed.png",
        videoDemo: "",

        category: "Fullstack • Mobile • AI • Marketplace",
        status: "En cours",
        complexity: "Avancé",
        role: "Lead Architect • Fullstack",
        teamSize: 5,

        duration: "En cours depuis Mai 2026",
        date: "Mai 2026 – présent",

        github: "",
        demo: "",

        businessContextFr: "Projet strategique pour digitaliser l'acces au logement au Cameroun (puis CEMAC / Afrique de l'Ouest) en creant une marketplace de confiance : chercheur gratuit, bailleur payeur via credits, IA anti-fraude et contact WhatsApp natif — la ou Facebook/OLX et les agents traditionnels ne resolvent pas la fraude.",
        businessContextEn: "Strategic project to digitize housing access in Cameroon (then CEMAC / West Africa) by building a trust marketplace: free seekers, credit-paying landlords, AI anti-fraud and native WhatsApp contact — where Facebook/OLX and traditional agents fail on fraud.",

        confidential: false,

        responsibilitiesFr: [
            "Lead architecture plateforme (mobile, web, API Fastify, data, paiements)",
            "Modelisation domaines : listings, credits, certification, fraude, messaging",
            "Conception technique anti-fraude et TrustScore",
            "Specs UX/UI haute fidelite et coherence design system KAZA",
            "Encadrement technique du binome developpeur + alignement produit/ops",
            "Strategie de scalabilite Douala/Yaounde → national → regional",
        ],
        responsibilitiesEn: [
            "Lead platform architecture (mobile, web, Fastify API, data, payments)",
            "Domain modeling: listings, credits, certification, fraud, messaging",
            "Anti-fraud and TrustScore technical design",
            "High-fidelity UX/UI specs and KAZA design-system consistency",
            "Technical mentoring of the second developer + product/ops alignment",
            "Scalability strategy Douala/Yaounde → national → regional",
        ],

        gallery: [
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-preview.webp",
                captionFr: "Direction produit KAZA — apercu plateforme immobiliere de confiance",
                captionEn: "KAZA product direction — trust-first real-estate platform preview",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-figma-flows-01.png",
                captionFr: "Design system mobile — parcours complet (auth, feed, detail, chat)",
                captionEn: "Mobile design system — full journeys (auth, feed, detail, chat)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-figma-flows-02.png",
                captionFr: "Cartographie UX — discovery, carte, filtres et profils",
                captionEn: "UX map — discovery, map, filters and profiles",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-figma-flows-03.png",
                captionFr: "Parcours premium — onboarding, fiches biens et contact bailleur",
                captionEn: "Premium journeys — onboarding, listings and landlord contact",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-home-feed.png",
                captionFr: "Feed Accueil — categories, badges certifies et listings FCFA",
                captionEn: "Home feed — categories, certified badges and FCFA listings",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-explore-neighborhoods.png",
                captionFr: "Explorer — quartiers populaires (Bastos, Bonapriso) et categories",
                captionEn: "Explore — popular neighborhoods (Bastos, Bonapriso) and categories",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-map-explorer.png",
                captionFr: "Carte interactive — pins prix et preview villa (Yaounde)",
                captionEn: "Interactive map — price pins and villa preview (Yaounde)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-property-details.png",
                captionFr: "Fiche bien — galerie, badges confiance, details financiers, CTA WhatsApp",
                captionEn: "Listing detail — gallery, trust badges, financials, WhatsApp CTA",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-reviews-whatsapp.png",
                captionFr: "Detail bas de page — disponibilite, map Douala, reviews, discussion bailleur",
                captionEn: "Detail footer — availability, Douala map, reviews, landlord chat",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-landlord-credits.png",
                captionFr: "Espace bailleur — credits, publication multi-etapes, boutique MoMo, certification",
                captionEn: "Landlord space — credits, multi-step publish, MoMo shop, certification",
                kind: "ui",
            },
        ],

        diagrams: [
            {
                id: "kaza-arch",
                titleFr: "Architecture plateforme KAZA",
                titleEn: "KAZA platform architecture",
                mermaid: `flowchart TB
  subgraph clients [Clients]
    RN[React Native]
    WEB[Web App]
    ADM[Admin Backoffice]
  end
  subgraph api [API Fastify]
    GW[Gateway Auth RBAC]
    LIST[Listings]
    CRED[Credits Billing]
    FRD[Fraud Engine]
    MSG[Messaging]
    MED[Media]
  end
  subgraph data [Data]
    PG[(PostgreSQL)]
    RD[(Redis)]
    S3[(Object Storage)]
  end
  subgraph ext [Externes]
    MOMO[Orange MTN MoMo]
    WA[WhatsApp]
  end
  RN --> GW
  WEB --> GW
  ADM --> GW
  GW --> LIST
  GW --> CRED
  GW --> FRD
  GW --> MSG
  GW --> MED
  LIST --> PG
  CRED --> PG
  CRED --> MOMO
  FRD --> RD
  MED --> S3
  MSG --> WA`,
            },
            {
                id: "kaza-use-cases",
                titleFr: "Cas d'utilisation",
                titleEn: "Use cases",
                mermaid: `flowchart TB
  subgraph system [KAZA]
    UC1[Rechercher un logement]
    UC2[Filtrer carte et quartiers]
    UC3[Contacter bailleur WhatsApp]
    UC4[Acheter credits MoMo]
    UC5[Publier une annonce]
    UC6[Se certifier bailleur]
    UC7[Moderer fraude]
  end
  S((Chercheur))
  L((Bailleur))
  A((Agent hotel))
  D((Diaspora))
  M((Admin))
  S --- UC1
  S --- UC2
  S --- UC3
  D --- UC1
  D --- UC3
  L --- UC4
  L --- UC5
  L --- UC6
  A --- UC4
  A --- UC5
  M --- UC7`,
            },
            {
                id: "kaza-credits",
                titleFr: "Modele economique — credits",
                titleEn: "Business model — credits",
                mermaid: `flowchart LR
  BUY[Achat pack credits MoMo] --> WALLET[Wallet bailleur]
  BONUS[Credits offerts signup] --> WALLET
  WALLET --> PUB{Publication}
  PUB -->|chambre| C1[Consomme N credits / mois]
  PUB -->|studio| C2[Consomme M credits / mois]
  PUB -->|villa boutique| C3[Consomme P credits / mois]
  CERT[Certification premium] --> BADGE[Badge bailleur certifie]
  BOOST[Boost annonce] --> VIS[Visibilite feed / carte]`,
            },
            {
                id: "kaza-seeker-sequence",
                titleFr: "Sequence — chercheur vers contact",
                titleEn: "Sequence — seeker to contact",
                mermaid: `sequenceDiagram
  actor U as Chercheur
  participant APP as App KAZA
  participant API as Fastify API
  participant DB as PostgreSQL
  participant WA as WhatsApp
  U->>APP: Ouvre feed / carte
  APP->>API: GET listings filtres
  API->>DB: Query index quartier prix
  API-->>APP: Resultats + badges
  U->>APP: Ouvre fiche bien
  APP->>API: GET listing detail
  API-->>APP: Media frais reviews
  U->>APP: Discuter avec le bailleur
  APP->>WA: Deep link WhatsApp
  WA-->>U: Conversation directe`,
            },
            {
                id: "kaza-publish-sequence",
                titleFr: "Sequence — publication bailleur",
                titleEn: "Sequence — landlord publish",
                mermaid: `sequenceDiagram
  actor L as Bailleur
  participant APP as App KAZA
  participant API as Fastify API
  participant FRD as Fraud Engine
  participant DB as PostgreSQL
  participant Q as BullMQ
  L->>APP: Wizard type localisation media
  APP->>API: POST listing draft
  API->>FRD: Analyse media + prix
  FRD-->>API: Score + flags
  alt Score OK et credits suffisants
    API->>DB: Publish + debit credits
    API-->>APP: Boom live
  else Flags fraude
    API->>Q: Queue review admin
    API-->>APP: En revue
  end`,
            },
            {
                id: "kaza-fraud",
                titleFr: "Pipeline IA anti-fraude",
                titleEn: "AI anti-fraud pipeline",
                mermaid: `flowchart TB
  IN[Nouvelle annonce / profil] --> H[Hash media perceptual]
  H --> DUP{Doublon connu?}
  DUP -->|oui| BLOCK[Blocage / review]
  DUP -->|non| PRICE[Coherence prix quartier]
  PRICE --> BEH[Signaux comportement]
  BEH --> SCORE[TrustScore]
  SCORE --> OK{Seuil}
  OK -->|pass| LIVE[Publication]
  OK -->|fail| ADMIN[File admin prioritaire]`,
            },
            {
                id: "kaza-payments",
                titleFr: "Sequence — achat credits Mobile Money",
                titleEn: "Sequence — Mobile Money credit purchase",
                mermaid: `sequenceDiagram
  actor L as Bailleur
  participant APP as App
  participant API as Fastify
  participant PSP as Orange MTN
  participant DB as PostgreSQL
  L->>APP: Choisit pack credits
  APP->>API: POST checkout credits
  API->>PSP: Init paiement
  PSP-->>L: Push USSD / app MoMo
  PSP->>API: Webhook signe
  API->>DB: Credit wallet idempotent
  API-->>APP: Solde mis a jour`,
            },
            {
                id: "kaza-scale",
                titleFr: "Roadmap geographique",
                titleEn: "Geographic roadmap",
                mermaid: `flowchart LR
  P0[Phase 0 Design Architecture] --> P1[Phase 1 Douala Yaounde]
  P1 --> P2[Phase 2 Villes secondaires CMR]
  P2 --> P3[Phase 3 CEMAC]
  P3 --> P4[Phase 4 Afrique de l Ouest]
  P1 --- F1[MVP confance credits WhatsApp]
  P2 --- F2[Reseau agences + boost]
  P3 --- F3[Multi-devise multi-pays]`,
            },
        ],

        resources: [],

        milestones: [
            {
                labelFr: "Vision produit & rebranding KAZA",
                labelEn: "Product vision & KAZA rebrand",
                date: "Mai 2026",
                descriptionFr: "Probleme, personas, modele credits, positionnement confiance.",
                descriptionEn: "Problem, personas, credits model, trust positioning.",
            },
            {
                labelFr: "Architecture Fastify + domaines",
                labelEn: "Fastify architecture + domains",
                date: "Mai–Juin 2026",
                descriptionFr: "Auth, listings, credits, fraude, media, messaging.",
                descriptionEn: "Auth, listings, credits, fraud, media, messaging.",
            },
            {
                labelFr: "Design system & UX haute fidelite",
                labelEn: "Design system & high-fidelity UX",
                date: "Juin–Juillet 2026",
                descriptionFr: "Parcours chercheur, bailleur, carte, certification, MoMo.",
                descriptionEn: "Seeker, landlord, map, certification, MoMo journeys.",
            },
            {
                labelFr: "Build mobile / web / API (en cours)",
                labelEn: "Mobile / web / API build (ongoing)",
                date: "Aout 2026 – présent",
                descriptionFr: "Implementation React Native, web, Fastify, paiements sandbox.",
                descriptionEn: "React Native, web, Fastify implementation, payments sandbox.",
            },
        ],

        scopeFr: [
            "Apps mobile React Native + plateforme web + admin",
            "Recherche gratuite multi-filtres + carte",
            "Publication annonces montee par credits",
            "Paiements Mobile Money (packs credits + certification)",
            "WhatsApp Direct + messagerie",
            "IA anti-fraude et TrustScore",
            "Lancement Douala / Yaounde puis extension",
        ],
        scopeEn: [
            "React Native mobile apps + web platform + admin",
            "Free multi-filter search + map",
            "Credit-funded listing publication",
            "Mobile Money payments (credit packs + certification)",
            "WhatsApp Direct + messaging",
            "AI anti-fraud and TrustScore",
            "Douala / Yaounde launch then expansion",
        ],
        nonGoalsFr: [
            "Escrow / paiement du loyer complet (phase ulterieure)",
            "Agence physique integree",
            "Marketplace de travaux / demenagement au MVP",
        ],
        nonGoalsEn: [
            "Full rent escrow / payment (later phase)",
            "Integrated physical agency",
            "Moving / works marketplace at MVP",
        ],

        decisions: [
            {
                titleFr: "Chercheur gratuit / bailleur payeur",
                titleEn: "Free seeker / paying landlord",
                decisionFr: "Zero friction cote demande ; montee via credits cote offre.",
                decisionEn: "Zero friction on demand side; credit monetization on supply side.",
                rationaleFr: "Adoption massive des locataires ; ARPU clair cote bailleurs/agents/hotels.",
                rationaleEn: "Massive seeker adoption; clear ARPU on landlords/agents/hotels.",
            },
            {
                titleFr: "WhatsApp Direct comme conversion",
                titleEn: "WhatsApp Direct as conversion",
                decisionFr: "Deep-link WhatsApp prioritaire, chat in-app en complement.",
                decisionEn: "WhatsApp deep-link first, in-app chat as complement.",
                rationaleFr: "Canal deja natif au Cameroun ; friction minimale pour closer.",
                rationaleEn: "Already-native channel in Cameroon; minimal friction to close.",
            },
            {
                titleFr: "Fastify modulaire plutot que microservices day-one",
                titleEn: "Modular Fastify over day-one microservices",
                decisionFr: "Monolithe modulaire extractible (fraude, credits, listings).",
                decisionEn: "Extractable modular monolith (fraud, credits, listings).",
                rationaleFr: "Velocite equipe de 2 devs ; isolation des domaines chauds sans ops prematuree.",
                rationaleEn: "Velocity for a 2-dev team; isolate hot domains without premature ops.",
            },
            {
                titleFr: "IA anti-fraude des la conception",
                titleEn: "Anti-fraud AI from design time",
                decisionFr: "Pipeline hashing + regles + queue admin des le modele de donnees.",
                decisionEn: "Hashing + rules + admin queue from the data model onward.",
                rationaleFr: "La confiance est la feature ; la corriger apres coup est trop cher.",
                rationaleEn: "Trust is the feature; bolting it on later is too expensive.",
            },
            {
                titleFr: "Mobile Money natif",
                titleEn: "Native Mobile Money",
                decisionFr: "Orange Money / MTN MoMo pour packs credits et certification.",
                decisionEn: "Orange Money / MTN MoMo for credit packs and certification.",
                rationaleFr: "12M+ utilisateurs MoMo : le rail de paiement est deja la.",
                rationaleEn: "12M+ MoMo users: the payment rail already exists.",
            },
        ],

        securityFr: [
            "Auth JWT + RBAC multi-roles (chercheur, bailleur, agent, admin)",
            "Webhooks Mobile Money signes + idempotence wallet",
            "Pipeline anti-fraude media/prix/comportement + revue admin",
            "Validation Zod stricte sur publications et paiements",
            "Secrets hors code ; chiffrement transit TLS ; media scopes",
            "Rate limiting, audit logs et soft-moderation",
        ],
        securityEn: [
            "JWT auth + multi-role RBAC (seeker, landlord, agent, admin)",
            "Signed Mobile Money webhooks + wallet idempotency",
            "Media/price/behavior anti-fraud pipeline + admin queue",
            "Strict Zod validation on listings and payments",
            "Secrets out of code; TLS in transit; scoped media",
            "Rate limiting, audit logs and soft moderation",
        ],

        infraFr: [
            "API Fastify conteneurisee + reverse proxy Nginx",
            "PostgreSQL + Redis + object storage media",
            "CI/CD GitHub Actions (lint, tests, build, deploy)",
            "Observabilite Prometheus / Grafana + logs structures",
            "Environnements sandbox MoMo puis production",
            "Cible cloud AWS avec passage progressif multi-region",
        ],
        infraEn: [
            "Containerized Fastify API + Nginx reverse proxy",
            "PostgreSQL + Redis + media object storage",
            "GitHub Actions CI/CD (lint, tests, build, deploy)",
            "Prometheus / Grafana observability + structured logs",
            "MoMo sandbox then production environments",
            "AWS cloud target with progressive multi-region path",
        ],

        externalLinks: [],

        lessonsFr: [
            "Sur un marche gangrene par la fraude, la confiance doit etre un domaine produit (badges, IA, certification) — pas un paragraphe legal.",
            "Le modele chercheur-gratuit / bailleur-credits aligne l'incitation : la demande scale ; l'offre finance la qualite.",
            "WhatsApp n'est pas un raccourci paresseux : c'est le canal de conversion local ; l'app doit y mener proprement.",
            "Un Fastify modulaire protege la velocite d'une petite equipe tout en isolant fraude et paiements pour une extraction future.",
            "Designer toute la surface UX avant de coder les modules critiques reduit les allers-retours produit/dev sur un marketplace multi-acteurs.",
        ],
        lessonsEn: [
            "On a fraud-heavy market, trust must be a product domain (badges, AI, certification) — not a legal paragraph.",
            "Free-seeker / landlord-credits aligns incentives: demand scales; supply funds quality.",
            "WhatsApp is not a lazy shortcut: it is the local conversion channel; the app must lead there cleanly.",
            "Modular Fastify protects a small team's velocity while isolating fraud and payments for later extraction.",
            "Designing the full UX surface before coding critical modules cuts product/dev thrash on a multi-actor marketplace.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                afterSrc: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-home-feed.png",
                captionFr: "Du marche opaque WhatsApp/Facebook a un parcours KAZA structure et certifie.",
                captionEn: "From an opaque WhatsApp/Facebook market to a structured, certified KAZA journey.",
            },
        ],

        isFeatured: true,
    },


    {
        id: 4,
        titleFr: 'Portfolio Fullstack & DevOps (Personnel) – Plateforme de Positionnement Technique',
        titleEn: 'Fullstack & DevOps Portfolio (Personal) – Technical Positioning Platform',

        descriptionFr: "Portfolio professionnel fullstack conçu comme une plateforme complète de présentation, intégrant performance, SEO, backoffice et bonnes pratiques DevOps pour maximiser la crédibilité technique.",
        descriptionEn: "Professional fullstack portfolio built as a complete platform, integrating performance, SEO, admin system, and DevOps best practices to maximize technical credibility.",

        fullDescriptionFr: "Conception et développement d’un portfolio personnel avancé, pensé non comme un simple site vitrine, mais comme une véritable plateforme technique démontrant un haut niveau d’expertise en développement fullstack et DevOps. L’application intègre un frontend moderne en React avec animations fluides et UX optimisée, un backend robuste en Node.js/Express structuré selon des principes DDD et partiellement SOLID, ainsi qu’un système de gestion de contenu (backoffice) permettant l’administration dynamique des blogs et des projets. Le système est optimisé pour le SEO, les performances et le caching (Redis + NodeCache), et déployé sur une infrastructure sécurisée (VPS OVH) avec Docker, Nginx et CI/CD automatisé via GitHub Actions. L’objectif principal est de créer un outil stratégique de positionnement professionnel capable de convaincre recruteurs, clients et partenaires techniques.",
        fullDescriptionEn: "Designed and developed an advanced personal portfolio, not as a simple showcase but as a full technical platform demonstrating strong expertise in fullstack development and DevOps. The application features a modern React frontend with smooth animations and optimized UX, a robust Node.js/Express backend structured with DDD and partially SOLID principles, and a content management system (admin panel) for dynamic blog and project management. The system is optimized for SEO, performance, and caching (Redis + NodeCache), and deployed on a secured infrastructure (OVH VPS) using Docker, Nginx, and automated CI/CD with GitHub Actions. The main goal is to build a strategic positioning tool capable of convincing recruiters, clients, and technical partners.",

        problemFr: "Les portfolios classiques sont souvent limités à une simple vitrine statique, ne permettant pas de démontrer réellement le niveau technique, les compétences en architecture ou les pratiques DevOps avancées.",
        problemEn: "Traditional portfolios are often limited to static showcases, failing to truly demonstrate technical depth, architectural skills, or advanced DevOps practices.",

        solutionFr: [
            "Développement d’une plateforme fullstack complète avec frontend, backend et backoffice",
            "Application des principes DDD et partiellement SOLID pour une architecture propre et scalable",
            "Mise en place d’un système de caching avancé (Redis + NodeCache)",
            "Optimisation SEO avancée pour maximiser la visibilité",
            "Implémentation d’animations et UX modernes (Framer Motion)",
            "Déploiement sécurisé sur VPS avec Docker, Nginx et CI/CD automatisé",
        ],
        solutionEn: [
            "Built a fullstack platform including frontend, backend, and admin system",
            "Applied DDD and partial SOLID principles for clean and scalable architecture",
            "Implemented advanced caching system (Redis + NodeCache)",
            "Optimized SEO for maximum visibility",
            "Integrated modern animations and UX (Framer Motion)",
            "Deployed securely on VPS with Docker, Nginx, and automated CI/CD",
        ],

        challengesFr: [
            "Concevoir un portfolio réellement différenciant techniquement",
            "Maintenir des performances élevées malgré les animations et le contenu dynamique",
            "Implémenter une architecture propre et évolutive",
            "Gérer le déploiement sécurisé sur VPS avec CI/CD complet",
            "Optimiser le SEO sur une application dynamique",
        ],
        challengesEn: [
            "Designing a technically differentiated portfolio",
            "Maintaining high performance despite animations and dynamic content",
            "Implementing a clean and scalable architecture",
            "Managing secure VPS deployment with full CI/CD",
            "Optimizing SEO on a dynamic application",
        ],

        impactFr: [
            "Amélioration significative du positionnement professionnel",
            "Démonstration concrète des compétences fullstack & DevOps",
            "Augmentation de la crédibilité auprès des recruteurs et clients",
            "Centralisation des projets, contenus et expertise technique",
        ],
        impactEn: [
            "Significant improvement in professional positioning",
            "Concrete demonstration of fullstack & DevOps skills",
            "Increased credibility with recruiters and clients",
            "Centralized projects, content, and technical expertise",
        ],

        metrics: {
            "architecture": "DDD + SOLID (partiel)",
            "performance": "Optimisé (caching Redis + NodeCache)",
            "deployment": "CI/CD automatisé",
            "infrastructure": "VPS sécurisé (OVH)",
        },

        techStack: {
            frontend: ["React", "TypeScript", "Tailwind CSS", "Shadcn", "Framer Motion", "Zustand"],
            backend: ["Node.js", "Express", "Prisma", "REST API"],
            database: ["MongoDB", "Redis"],
            devops: ["Docker", "Nginx", "GitHub Actions", "OVH VPS"],
        },

        architecture: [
            "Architecture fullstack découplée (frontend/backend)",
            "Backend structuré en DDD",
            "API REST pour communication frontend/backend",
            "Système de caching multi-niveaux (Redis + NodeCache)",
            "Reverse proxy Nginx",
            "Pipeline CI/CD automatisé",
        ],

        testing: [
            "Tests manuels fonctionnels",
            "Validation des performances (Lighthouse)",
        ],

        images: [
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2022-55-14.png",
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2022-56-32.png",
        ],

        preview: "https://barthez-kenwou.dev",
        videoDemo: "",

        category: "Fullstack • DevOps",
        status: "Production",
        complexity: "Avancé",
        role: "Fullstack Developer • DevOps Engineer",
        teamSize: 1,

        duration: "Projet continu",
        date: "2026",

        github: "",
        demo: "https://barthez-kenwou.dev",

        businessContextFr: "Projet personnel stratégique visant à se positionner comme expert fullstack & DevOps sur le marché et à générer des opportunités professionnelles (missions, collaborations, recrutements).",
        businessContextEn: "Strategic personal project aimed at positioning as a fullstack & DevOps expert and generating professional opportunities (freelance, collaborations, recruitment).",

        confidential: false,

        responsibilitiesFr: [
            "Architecture FSD + API Express/Prisma",
            "CI/CD Gitleaks/Sonar/Trivy/GHCR vers VPS OVH",
            "SEO, PWA, i18n FR/EN et case studies",
            "Durcissement Nginx/CSP et healthchecks",
        ],
        responsibilitiesEn: [
            "FSD architecture + Express/Prisma API",
            "CI/CD Gitleaks/Sonar/Trivy/GHCR to OVH VPS",
            "SEO, PWA, FR/EN i18n and case studies",
            "Nginx/CSP hardening and healthchecks",
        ],

        gallery: [
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2022-55-14.png", captionFr: "Homepage", captionEn: "Homepage", kind: "ui" },
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2022-56-32.png", captionFr: "Projets / preuves", captionEn: "Projects / evidence", kind: "ui" },
        ],

        diagrams: [
            {
                id: "portfolio-cd",
                titleFr: "Pipeline CD",
                titleEn: "CD pipeline",
                mermaid: `flowchart LR
  Push[Push main] --> CI[GitHub Actions]
  CI --> Sec[Gitleaks / Sonar / Trivy]
  Sec --> Build[Docker Build]
  Build --> GHCR[GHCR]
  GHCR --> Deploy[SSH Deploy]
  Deploy --> Nginx[Nginx SPA]`,
            },
        ],

        resources: [
            { labelFr: "Site live", labelEn: "Live site", url: "https://barthez-kenwou.dev", type: "other" },
            { labelFr: "llms.txt", labelEn: "llms.txt", url: "https://barthez-kenwou.dev/llms.txt", type: "spec" },
        ],

        milestones: [
            { labelFr: "Socle FSD", labelEn: "FSD foundation", date: "2025" },
            { labelFr: "CI/CD prod + PWA", labelEn: "Prod CI/CD + PWA", date: "2026 Q1" },
            { labelFr: "Case studies enrichis", labelEn: "Enriched case studies", date: "2026 Q2" },
        ],

        scopeFr: ["Portfolio public FR/EN", "Blog + projets détaillés", "Docker/Nginx sur VPS", "Gates qualité & sécurité"],
        scopeEn: ["Public FR/EN portfolio", "Blog + detailed projects", "Docker/Nginx on VPS", "Quality & security gates"],
        nonGoalsFr: ["CMS multi-auteurs", "Marketplace de services"],
        nonGoalsEn: ["Multi-author CMS", "Services marketplace"],

        decisions: [
            {
                titleFr: "SPA Vite + VPS maîtrisé",
                titleEn: "Vite SPA + controlled VPS",
                decisionFr: "SPA + tooling SEO plutôt que full Next SSR.",
                decisionEn: "SPA + SEO tooling over full Next SSR.",
                rationaleFr: "Contrôle infra et pipeline DevOps démontrable.",
                rationaleEn: "Infra control and a demonstrable DevOps pipeline.",
            },
            {
                titleFr: "GHCR + Watchtower",
                titleEn: "GHCR + Watchtower",
                decisionFr: "Images privées + sync automatique sur VPS.",
                decisionEn: "Private images + automatic VPS sync.",
                rationaleFr: "CD simple sans lock-in PaaS.",
                rationaleEn: "Simple CD without PaaS lock-in.",
            },
        ],

        securityFr: ["CSP + headers Nginx", "Scans Gitleaks/Trivy/Sonar", "GHCR privé", "ErrorBoundary & dégradation WebGL"],
        securityEn: ["CSP + Nginx headers", "Gitleaks/Trivy/Sonar scans", "Private GHCR", "ErrorBoundary & WebGL degradation"],
        infraFr: ["Docker multi-stage / Nginx Alpine", "Actions → GHCR → SSH", "Nginx Proxy Manager", "/health"],
        infraEn: ["Docker multi-stage / Nginx Alpine", "Actions → GHCR → SSH", "Nginx Proxy Manager", "/health"],

        externalLinks: [{ labelFr: "Live", labelEn: "Live", url: "https://barthez-kenwou.dev" }],

        testimonial: {
            quoteFr: "Ce n'est pas une landing - c'est une preuve d'exécution de bout en bout.",
            quoteEn: "This isn't a landing page - it's end-to-end proof of execution.",
            author: "Peer Reviewer",
            roleFr: "Ingénieur logiciel",
            roleEn: "Software engineer",
            company: "Open network",
        },

        lessonsFr: [
            "Un portfolio DevOps doit montrer le pipeline, pas seulement le UI.",
            "Sections optionnelles = case study riche sans alourdir les petits projets.",
            "La perf décorative ne doit jamais casser l'accès au contenu.",
        ],
        lessonsEn: [
            "A DevOps portfolio must show the pipeline, not only the UI.",
            "Optional sections keep rich case studies without bloating small projects.",
            "Decorative performance must never break content access.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2022-56-32.png",
                afterSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2022-55-14.png",
                captionFr: "D'un showcase statique à une plateforme technique complète.",
                captionEn: "From a static showcase to a full technical platform.",
            },
        ],

        isFeatured: true,
    },

    {
        id: 5,
        titleFr: "Plateforme Web ONG ESOPA – WordPress & Infrastructure DevOps",
        titleEn: "ESOPA NGO Web Platform – WordPress & DevOps Infrastructure",

        descriptionFr: "Plateforme web vitrine pour l’ONG ESOPA, accompagnée d’une infrastructure DevOps complète (multi-environnements, sécurité, CI/CD, sauvegardes et optimisation SEO).",
        descriptionEn: "Showcase web platform for ESOPA NGO, backed by a full DevOps infrastructure (multi-environment setup, security, CI/CD, backups, and SEO optimization).",

        fullDescriptionFr: "Accompagnement complet de l’ONG ESOPA dans sa transformation digitale, allant de l’acquisition du nom de domaine jusqu’au déploiement d’une plateforme web professionnelle et sécurisée. Le projet inclut la mise en place d’une infrastructure DevOps avancée avec Docker, comprenant un environnement de staging et un environnement de production, permettant des déploiements maîtrisés et sans interruption. Le site, développé sous WordPress, a été optimisé pour la performance, la sécurité et le référencement (SEO). Des mécanismes avancés ont été implémentés : sauvegardes automatiques via scripts, sécurisation renforcée (Wordfence, rate limiting, protection admin, monitoring), optimisation des performances et stratégie SEO. Le résultat est une plateforme fiable, rapide et bien référencée, générant une visibilité significative dès les premiers mois.",
        fullDescriptionEn: "End-to-end digital transformation support for ESOPA NGO, from domain acquisition to deployment of a professional and secure web platform. The project includes setting up an advanced DevOps infrastructure using Docker, with both staging and production environments to ensure safe and controlled deployments. The site, built with WordPress, was optimized for performance, security, and SEO. Advanced mechanisms were implemented: automated backups via scripts, enhanced security (Wordfence, rate limiting, admin protection, monitoring), performance tuning, and SEO strategy. The result is a reliable, fast, and well-indexed platform generating significant visibility within the first months.",

        problemFr: "L’ONG ne disposait pas d’une plateforme web professionnelle ni d’une infrastructure fiable, limitant sa visibilité, sa crédibilité et sa capacité à communiquer efficacement.",
        problemEn: "The NGO lacked a professional web platform and reliable infrastructure, limiting its visibility, credibility, and communication capabilities.",

        solutionFr: [
            "Acquisition et configuration du domaine via Cloudflare",
            "Mise en place d’une infrastructure Docker avec environnements staging et production",
            "Déploiement WordPress optimisé pour performance et SEO",
            "Implémentation de scripts de sauvegarde automatique",
            "Sécurisation avancée (Wordfence, protection admin, rate limiting, monitoring)",
            "Optimisation SEO et performance (Lighthouse, caching, bonnes pratiques)",
        ],
        solutionEn: [
            "Domain acquisition and configuration via Cloudflare",
            "Docker infrastructure with staging and production environments",
            "Optimized WordPress deployment for performance and SEO",
            "Automated backup scripts implementation",
            "Advanced security setup (Wordfence, admin protection, rate limiting, monitoring)",
            "SEO and performance optimization (Lighthouse, caching, best practices)",
        ],

        challengesFr: [
            "Mettre en place une infrastructure DevOps complète pour un CMS (WordPress)",
            "Assurer une sécurité maximale contre les attaques courantes",
            "Gérer la séparation staging/production avec migration propre",
            "Optimiser les performances tout en conservant flexibilité WordPress",
            "Garantir un bon référencement dès le lancement",
        ],
        challengesEn: [
            "Setting up a full DevOps infrastructure for a CMS (WordPress)",
            "Ensuring strong security against common attacks",
            "Managing staging/production separation with clean migration",
            "Optimizing performance while maintaining WordPress flexibility",
            "Ensuring strong SEO from launch",
        ],

        impactFr: [
            "Lancement réussi de la présence digitale de l’ONG",
            "Plus de 400 visites en 2 mois",
            "Amélioration significative de la crédibilité",
            "Excellentes performances et référencement",
        ],
        impactEn: [
            "Successful launch of NGO digital presence",
            "400+ visits within first 2 months",
            "Significant improvement in credibility",
            "Strong performance and SEO ranking",
        ],

        metrics: {
            "Performance": "90%",
            "Accessibilité": "90%",
            "Bonnes pratiques": "95%",
            "SEO": "95%",
            "visites": "400+ (2 mois)",
        },

        techStack: {
            frontend: ["WordPress", "Elementor"],
            backend: ["PHP", "WordPress Core"],
            database: ["MySQL"],
            devops: ["Docker", "Nginx", "Cloudflare", "VPS", "CI/CD", "Backup Scripts"],
        },

        architecture: [
            "WordPress conteneurisé avec Docker",
            "Environnement staging + production",
            "Reverse proxy Nginx",
            "Sauvegardes automatisées via scripts",
            "Sécurisation réseau + applicative",
            "CDN et DNS via Cloudflare",
        ],

        testing: [
            "Tests de performance (Lighthouse)",
            "Tests de sécurité (plugins + configuration)",
            "Validation manuelle UX/UI",
        ],

        images: [
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2023-24-13.png",
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2023-23-15.png",
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2023-33-25.png",
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2023-34-56.png",
        ],

        preview: "https://esopa.org",
        videoDemo: "",

        category: "DevOps • Web",
        status: "Production",
        complexity: "Avancé",
        role: "Fullstack Developer • DevOps Engineer",
        teamSize: 1,

        duration: "1 mois",
        date: "2025",

        github: "https://github.com/ZENORA-360/projet-client-esopa",
        demo: "https://esopa.org",

        businessContextFr: "Projet de digitalisation visant à offrir à l’ONG une présence web professionnelle, sécurisée et performante pour renforcer son impact et sa visibilité.",
        businessContextEn: "Digital transformation project aimed at providing the NGO with a secure, high-performance web presence to enhance its impact and visibility.",

        confidential: false,

        responsibilitiesFr: [
            "DNS Cloudflare et reverse proxy Nginx",
            "Stack Docker staging + production",
            "WordPress sécurisé, backups et SEO",
            "Automatisation CI/CD et runbooks",
        ],
        responsibilitiesEn: [
            "Cloudflare DNS and Nginx reverse proxy",
            "Docker staging + production stack",
            "Hardened WordPress, backups and SEO",
            "CI/CD automation and runbooks",
        ],

        gallery: [
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2023-24-13.png", captionFr: "Homepage ESOPA", captionEn: "ESOPA homepage", kind: "ui" },
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2023-23-15.png", captionFr: "Mission / contenu", captionEn: "Mission / content", kind: "ui" },
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2023-33-25.png", captionFr: "Programmes", captionEn: "Programs", kind: "ui" },
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2023-34-56.png", captionFr: "Contact / engagement", captionEn: "Contact / engagement", kind: "ui" },
        ],

        diagrams: [
            {
                id: "esopa-infra",
                titleFr: "Infra staging / prod",
                titleEn: "Staging / prod infra",
                mermaid: `flowchart LR
  Users --> CF[Cloudflare]
  CF --> Nginx[Nginx]
  Nginx --> WP[WordPress]
  WP --> DB[(MySQL)]
  Backup[Backups] --> DB
  CI[CI/CD] --> Staging
  CI --> Prod`,
            },
        ],

        resources: [
            { labelFr: "Site live", labelEn: "Live site", url: "https://esopa.org", type: "other" },
            { labelFr: "Dépôt GitHub", labelEn: "GitHub repo", url: "https://github.com/ZENORA-360/projet-client-esopa", type: "other" },
        ],

        milestones: [
            { labelFr: "DNS + Cloudflare", labelEn: "DNS + Cloudflare", date: "Semaine 1" },
            { labelFr: "Stack Docker WP", labelEn: "Docker WP stack", date: "Semaine 2" },
            { labelFr: "Contenu + SEO + prod", labelEn: "Content + SEO + prod", date: "Semaine 3–4" },
        ],

        scopeFr: ["Site WordPress institutionnel", "Staging + production", "Backups & sécurité de base", "Nginx + Cloudflare"],
        scopeEn: ["Institutional WordPress site", "Staging + production", "Backups & baseline security", "Nginx + Cloudflare"],
        nonGoalsFr: ["App métier custom", "Design system from scratch"],
        nonGoalsEn: ["Custom business app", "Design system from scratch"],

        decisions: [
            {
                titleFr: "WordPress conteneurisé",
                titleEn: "Containerized WordPress",
                decisionFr: "Docker plutôt qu'un mutualisé nu.",
                decisionEn: "Docker instead of bare shared hosting.",
                rationaleFr: "Staging/prod reproductibles et backups contrôlés.",
                rationaleEn: "Reproducible staging/prod and controlled backups.",
            },
        ],

        securityFr: ["Cloudflare en frontal", "Updates WP maîtrisés", "Backups automatisés", "Séparation staging/prod"],
        securityEn: ["Cloudflare in front", "Controlled WP updates", "Automated backups", "Separated staging/prod"],
        infraFr: ["Docker Compose VPS", "Nginx reverse proxy", "Cloudflare DNS/CDN", "Scripts backup MySQL"],
        infraEn: ["Docker Compose VPS", "Nginx reverse proxy", "Cloudflare DNS/CDN", "MySQL backup scripts"],

        externalLinks: [
            { labelFr: "esopa.org", labelEn: "esopa.org", url: "https://esopa.org" },
            { labelFr: "GitHub", labelEn: "GitHub", url: "https://github.com/ZENORA-360/projet-client-esopa" },
        ],

        testimonial: {
            quoteFr: "Une vitrine stable, rapide, et une infra que l'équipe peut faire évoluer sans stress.",
            quoteEn: "A stable, fast presence and an infra the team can evolve without stress.",
            author: "ESOPA Coordination",
            roleFr: "Coordination",
            roleEn: "Coordination",
            company: "ESOPA",
        },

        lessonsFr: [
            "Pour une ONG, fiabilité et backups > stack exotique.",
            "Un vrai staging évite les régressions de contenu en prod.",
        ],
        lessonsEn: [
            "For an NGO, reliability and backups beat exotic stacks.",
            "Real staging prevents content regressions in production.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2023-23-15.png",
                afterSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2023-24-13.png",
                captionFr: "D'une absence digitale à une présence professionnelle.",
                captionEn: "From no digital presence to a professional site.",
            },
        ],

        isFeatured: false,
    },

    {
        id: 6,
        titleFr: "Secure Software Supply Chain Platform – DevSecOps Industriel",
        titleEn: "Secure Software Supply Chain Platform – Industrial DevSecOps",

        descriptionFr: "Conception d’une plateforme DevSecOps sécurisant la supply chain pour applications Node.js/Java (microservices & monolithes), avec conformité SLSA, réduction mesurée des vulnérabilités et pipeline CI/CD industriel.",
        descriptionEn: "Designed a DevSecOps platform securing the software supply chain for Node.js/Java apps (microservices & monoliths), with SLSA alignment, measurable vulnerability reduction, and industrial-grade CI/CD.",

        fullDescriptionFr: "Conception et implémentation d’une plateforme DevSecOps complète destinée à sécuriser la supply chain logicielle dans un contexte applicatif réel (Node.js / Java). Le système prend en charge plusieurs services déployés sur VPS via Docker/Docker Compose, avec pipelines CI/CD multi-environnements (dev, staging, production), contrôles de sécurité stricts et stratégies de déploiement fiables. Le pipeline intègre une approche sécurité globale : threat modeling (dependency poisoning, image tampering, secrets leakage), policy enforcement (fail build si CVSS > 7, interdiction des images non signées), et traçabilité des artefacts (SBOM + signature + provenance). La solution inclut également monitoring, alerting et métriques DevOps (DORA) pour piloter la performance des déploiements. Utilisé pour déployer et sécuriser plusieurs applications réelles avec des gains mesurables en qualité et sécurité.",
        fullDescriptionEn: "Designed and implemented a full DevSecOps platform to secure the software supply chain in real-world applications (Node.js / Java). The system handles multiple services deployed on VPS using Docker/Docker Compose, with multi-environment CI/CD pipelines (dev, staging, production), strict security controls, and reliable deployment strategies. The pipeline integrates a holistic security approach: threat modeling (dependency poisoning, image tampering, secrets leakage), policy enforcement (fail builds if CVSS > 7, block unsigned images), and artifact traceability (SBOM + signing + provenance). The solution also includes monitoring, alerting, and DevOps metrics (DORA) to drive deployment performance. Used to deploy and secure multiple applications with measurable improvements in quality and security.",

        problemFr: "Les pipelines CI/CD classiques ne prennent pas en compte les attaques modernes de supply chain, exposant les systèmes à des dépendances compromises, des images altérées et des fuites de secrets.",
        problemEn: "Traditional CI/CD pipelines do not address modern supply chain attacks, exposing systems to compromised dependencies, tampered images, and secret leaks.",

        solutionFr: [
            "Pipeline CI/CD multi-environnements (dev, staging, production) avec GitHub Actions",
            "Implémentation de release gates avec validations manuelles avant production",
            "Stratégie de versioning (SemVer + tagging automatique)",
            "Rollback automatisé et déploiement zero-downtime",
            "SBOM généré avec Syft + scan avec Grype",
            "Analyse SAST (SonarQube), SCA et scans Trivy (filesystem + images)",
            "Signature et vérification des artefacts avec Cosign/Sigstore",
            "Policy enforcement (blocage si CVSS > 7, images non signées interdites)",
            "Pipeline réutilisable (composite actions), caching avancé et parallélisation",
            "Monitoring et alerting (logs, métriques pipeline, alertes sécurité)",
        ],
        solutionEn: [
            "Multi-environment CI/CD pipelines (dev, staging, production) using GitHub Actions",
            "Release gates with manual approvals before production",
            "Versioning strategy (SemVer + automated tagging)",
            "Automated rollback and zero-downtime deployment",
            "SBOM generation with Syft + scanning with Grype",
            "SAST (SonarQube), SCA, and Trivy scans (filesystem + images)",
            "Artifact signing and verification with Cosign/Sigstore",
            "Policy enforcement (fail if CVSS > 7, block unsigned images)",
            "Reusable pipelines (composite actions), advanced caching and parallelization",
            "Monitoring and alerting (logs, pipeline metrics, security alerts)",
        ],

        challengesFr: [
            "Intégration cohérente de multiples outils DevSecOps",
            "Maintenir la performance malgré la charge des scans sécurité",
            "Garantir la traçabilité complète des artefacts",
            "Implémenter des politiques de sécurité strictes sans bloquer la productivité",
            "Industrialiser le pipeline pour un usage réel et continu",
        ],
        challengesEn: [
            "Integrating multiple DevSecOps tools coherently",
            "Maintaining performance despite heavy security scanning",
            "Ensuring full artifact traceability",
            "Enforcing strict security policies without blocking productivity",
            "Industrializing the pipeline for real-world continuous usage",
        ],

        impactFr: [
            "Réduction estimée de ~60–70% des vulnérabilités critiques en production",
            "Blocage automatique des dépendances et images compromises",
            "Amélioration significative de la sécurité de la supply chain",
            "Déploiements plus fiables et reproductibles",
        ],
        impactEn: [
            "Estimated ~60–70% reduction in critical production vulnerabilities",
            "Automatic blocking of compromised dependencies and images",
            "Significant improvement in supply chain security",
            "More reliable and reproducible deployments",
        ],

        metrics: {
            "services": "3–5 applications déployées",
            "builds": "10–20 builds/jour",
            "vulnerabilities_blocked": "~65%",
            "MTTR": "< 1h",
            "lead_time": "Quelques heures",
            "deployment_frequency": "Quotidienne",
            "change_failure_rate": "< 10%",
        },

        techStack: {
            frontend: [],
            backend: ["Node.js", "Java"],
            database: [],
            devops: [
                "GitHub Actions",
                "SonarQube",
                "Trivy",
                "Syft",
                "Grype",
                "Cosign",
                "Sigstore",
                "Harbor",
                "Docker",
                "Docker Compose",
                "Prometheus",
                "Grafana",
                "Slack",
            ],
        },

        architecture: [
            "Pipeline CI/CD multi-stage (dev → staging → production)",
            "Scanning sécurité (SAST, SCA, DAST)",
            "SBOM + signature + vérification de provenance",
            "Registry sécurisé (Harbor)",
            "Déploiement VPS avec rollback et zero downtime",
            "Monitoring (Prometheus) + visualisation (Grafana)",
            "Alerting automatique (Slack)",
        ],

        testing: [
            "SAST (SonarQube)",
            "Scans dépendances et images",
            "Tests DAST en staging",
        ],

        images: [
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/devsecops.webp",
        ],

        preview: "",
        videoDemo: "",

        category: "DevSecOps",
        status: "Actif",
        complexity: "Expert",
        role: "DevOps Engineer",
        teamSize: 1,

        duration: "Projet continu",
        date: "2026",

        github: "https://github.com/ZENORA-360/zenora360/tree/main/.github",
        demo: "",

        businessContextFr: "Projet d’ingénierie DevSecOps visant à sécuriser la supply chain logicielle face aux menaces modernes et à implémenter des standards industriels dans les pipelines CI/CD.",
        businessContextEn: "DevSecOps engineering project aimed at securing the software supply chain against modern threats and implementing industry-grade CI/CD standards.",

        confidential: false,

        responsibilitiesFr: [
            "Conception de pipelines multi-environnements GitHub Actions",
            "Intégration SAST/SCA/DAST et gates de release",
            "SBOM (Syft/Grype) + signature Cosign/Sigstore",
            "Politiques Harbor et alerting Slack",
        ],
        responsibilitiesEn: [
            "Multi-environment GitHub Actions pipeline design",
            "SAST/SCA/DAST integration and release gates",
            "SBOM (Syft/Grype) + Cosign/Sigstore signing",
            "Harbor policies and Slack alerting",
        ],

        gallery: [
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/devsecops.webp", captionFr: "Chaîne DevSecOps", captionEn: "DevSecOps chain", kind: "process" },
        ],

        diagrams: [
            {
                id: "devsecops-pipeline",
                titleFr: "Pipeline supply chain",
                titleEn: "Supply-chain pipeline",
                mermaid: `flowchart LR
  Commit --> GHA[GitHub Actions]
  GHA --> SAST[Sonar / Semgrep]
  GHA --> SCA[Trivy / Grype]
  GHA --> SBOM[Syft SBOM]
  SBOM --> Sign[Cosign Sign]
  Sign --> Harbor[Harbor Registry]
  Harbor --> Gate{Policy Gate}
  Gate -->|pass| Deploy[Deploy]
  Gate -->|fail| Block[Block Release]`,
            },
        ],

        resources: [
            { labelFr: "Workflows GitHub", labelEn: "GitHub workflows", url: "https://github.com/ZENORA-360/zenora360/tree/main/.github", type: "other" },
        ],

        milestones: [
            { labelFr: "Baseline CI + secrets scan", labelEn: "CI baseline + secrets scan", date: "Phase 1" },
            { labelFr: "SBOM + signature images", labelEn: "SBOM + image signing", date: "Phase 2" },
            { labelFr: "Policy gates Harbor", labelEn: "Harbor policy gates", date: "Phase 3" },
        ],

        scopeFr: ["Pipelines multi-env", "Scans SAST/SCA/DAST", "SBOM + provenance", "Signature & politiques registry"],
        scopeEn: ["Multi-env pipelines", "SAST/SCA/DAST scans", "SBOM + provenance", "Signing & registry policies"],
        nonGoalsFr: ["Remplacement complet de l'outillage métier", "SOC 24/7 managé"],
        nonGoalsEn: ["Full replacement of business tooling", "Managed 24/7 SOC"],

        decisions: [
            {
                titleFr: "Fail closed sur CVSS élevé",
                titleEn: "Fail closed on high CVSS",
                decisionFr: "Bloquer les releases si CVSS > 7 ou image non signée.",
                decisionEn: "Block releases if CVSS > 7 or image is unsigned.",
                rationaleFr: "La sécurité supply chain ne peut pas être best-effort.",
                rationaleEn: "Supply-chain security cannot be best-effort.",
            },
            {
                titleFr: "Cosign / Sigstore",
                titleEn: "Cosign / Sigstore",
                decisionFr: "Signature d'images standard ouverte.",
                decisionEn: "Open-standard image signing.",
                rationaleFr: "Interopérabilité et auditabilité.",
                rationaleEn: "Interoperability and auditability.",
            },
        ],

        securityFr: ["Gitleaks / secret scanning", "SAST + SCA bloquants", "SBOM + attestation", "Images signées + policy Harbor"],
        securityEn: ["Gitleaks / secret scanning", "Blocking SAST + SCA", "SBOM + attestation", "Signed images + Harbor policy"],
        infraFr: ["GitHub Actions", "Harbor registry", "Docker / Compose", "Prometheus / Grafana / Slack"],
        infraEn: ["GitHub Actions", "Harbor registry", "Docker / Compose", "Prometheus / Grafana / Slack"],

        externalLinks: [
            { labelFr: ".github workflows", labelEn: ".github workflows", url: "https://github.com/ZENORA-360/zenora360/tree/main/.github" },
        ],

        testimonial: {
            quoteFr: "On a transformé la sécurité CI/CD d'une checklist tardive en garde-fou automatique.",
            quoteEn: "We turned late CI/CD security checklists into automatic guardrails.",
            author: "Platform Engineer",
            roleFr: "Ingénieur plateforme",
            roleEn: "Platform engineer",
            company: "ZENORA 360",
        },

        lessonsFr: [
            "Les gates trop stricts sans UX développeur créent des contournements - documenter les exceptions.",
            "SBOM inutile sans politique de fail claire.",
            "Signer les images n'a de valeur que si le deploy vérifie la signature.",
        ],
        lessonsEn: [
            "Over-strict gates without developer UX create bypasses - document exceptions.",
            "SBOMs are useless without a clear fail policy.",
            "Signing images only matters if deploy verifies signatures.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/devsecops.webp",
                afterSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/devsecops.webp",
                captionFr: "D'un CI 'build & ship' à une supply chain contrôlée.",
                captionEn: "From build-and-ship CI to a controlled supply chain.",
            },
        ],

        isFeatured: false,
    },

    {
        id: 7,
        titleFr: "Plateforme ERP Odoo – Infrastructure Cloud & DevOps (INTELEK BTP)",
        titleEn: "Odoo ERP Platform – Cloud & DevOps Infrastructure (INTELEK Construction)",

        descriptionFr: "Déploiement et personnalisation d’un ERP Odoo pour une entreprise BTP, avec infrastructure cloud sécurisée, orchestration Kubernetes et sauvegardes externalisées.",
        descriptionEn: "Deployment and customization of an Odoo ERP for a construction company, with secure cloud infrastructure, Kubernetes orchestration, and externalized backups.",

        fullDescriptionFr: "Conception et déploiement d’une plateforme ERP complète basée sur Odoo pour INTELEK, une entreprise du secteur BTP comptant une quinzaine d’employés et gérant plusieurs projets simultanément. L’objectif était de centraliser la gestion des opérations (projets, finances, ressources humaines, ventes, achats) dans un système unique, fiable et évolutif. L’infrastructure a été conçue avec une approche DevOps avancée : déploiement conteneurisé, orchestration via Kubernetes (kubectl), sécurisation du serveur, et mise en place de sauvegardes externalisées sur MinIO. Plusieurs modules Odoo (issus du core et de l’OCA) ont été intégrés et adaptés pour répondre aux besoins métier spécifiques du BTP. Le système permet aujourd’hui une meilleure organisation interne, une traçabilité complète des opérations et une amélioration significative de la productivité.",
        fullDescriptionEn: "Designed and deployed a full ERP platform based on Odoo for INTELEK, a construction company with around 15 employees managing multiple projects simultaneously. The goal was to centralize operations (projects, finance, HR, sales, procurement) into a single, reliable, and scalable system. The infrastructure was built using an advanced DevOps approach: containerized deployment, Kubernetes orchestration (kubectl), server hardening, and external backups with MinIO. Multiple Odoo modules (core and OCA) were integrated and customized to meet construction-specific business needs. The system now enables better internal organization, full operational traceability, and significant productivity improvement.",

        problemFr: "L’entreprise gérait ses projets et opérations de manière fragmentée, sans système centralisé, ce qui entraînait un manque de visibilité, des erreurs de gestion et une perte de productivité.",
        problemEn: "The company managed its projects and operations in a fragmented way, without a centralized system, leading to lack of visibility, management errors, and productivity loss.",

        solutionFr: [
            "Déploiement d’un ERP Odoo complet sur infrastructure cloud sécurisée",
            "Orchestration via Kubernetes (kubectl) pour scalabilité et résilience",
            "Intégration de modules Odoo core et OCA adaptés au BTP",
            "Configuration de sauvegardes automatiques externalisées (MinIO)",
            "Sécurisation du serveur (hardening, accès contrôlés)",
            "Optimisation des workflows métiers (gestion de projets, ventes, RH, finance)",
        ],
        solutionEn: [
            "Deployed full Odoo ERP on secure cloud infrastructure",
            "Orchestrated with Kubernetes (kubectl) for scalability and resilience",
            "Integrated core and OCA modules tailored for construction workflows",
            "Configured automated external backups (MinIO)",
            "Secured server (hardening, controlled access)",
            "Optimized business workflows (projects, sales, HR, finance)",
        ],

        challengesFr: [
            "Adapter Odoo aux besoins spécifiques du secteur BTP",
            "Mettre en place une infrastructure Kubernetes stable",
            "Garantir la sécurité des données sensibles",
            "Gérer la persistance et les sauvegardes dans un environnement conteneurisé",
            "Assurer la montée en charge et la disponibilité du système",
        ],
        challengesEn: [
            "Adapting Odoo to construction-specific business needs",
            "Setting up a stable Kubernetes infrastructure",
            "Ensuring security of sensitive data",
            "Managing persistence and backups in a containerized environment",
            "Ensuring scalability and system availability",
        ],

        impactFr: [
            "Centralisation complète des opérations de l’entreprise",
            "Amélioration significative de la productivité interne",
            "Meilleure gestion des projets et ressources",
            "Réduction des erreurs opérationnelles",
        ],
        impactEn: [
            "Full centralization of company operations",
            "Significant improvement in internal productivity",
            "Better project and resource management",
            "Reduction of operational errors",
        ],

        metrics: {
            "utilisateurs": "~15 employés",
            "modules": "10+ modules intégrés",
            "infrastructure": "Kubernetes",
            "backups": "Automatisés (MinIO)",
            "availability": "Production ready",
        },

        techStack: {
            frontend: ["Odoo Web"],
            backend: ["Odoo (Python)"],
            database: ["PostgreSQL"],
            devops: ["Kubernetes", "Docker", "kubectl", "MinIO", "VPS", "Nginx"],
        },

        architecture: [
            "Odoo conteneurisé",
            "Orchestration Kubernetes (pods/services)",
            "Base de données PostgreSQL persistante",
            "Stockage objet MinIO pour backups",
            "Reverse proxy Nginx",
            "Infrastructure sécurisée sur VPS",
        ],

        testing: [
            "Tests fonctionnels Odoo",
            "Validation des modules intégrés",
            "Tests de sauvegarde et restauration",
        ],

        images: [
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-22%2011-20-48.png",
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-22%2011-24-11.png",
        ],

        preview: "https://erp-dev.zenora360.com/",
        videoDemo: "",

        category: "DevOps • ERP",
        status: "Production",
        complexity: "Expert",
        role: "DevOps Engineer",
        teamSize: 2,

        duration: "2–3 mois",
        date: "2026",

        github: "",
        demo: "https://erp-dev.zenora360.com/",

        businessContextFr: "Projet de transformation digitale pour une entreprise BTP visant à structurer et optimiser la gestion de ses opérations à travers un ERP centralisé et scalable.",
        businessContextEn: "Digital transformation project for a construction company aiming to structure and optimize operations through a centralized and scalable ERP.",

        confidential: true,

        responsibilitiesFr: [
            "Déploiement Odoo conteneurisé sur Kubernetes",
            "Persistance PostgreSQL et volumes",
            "Backups MinIO et reverse proxy Nginx",
            "Paramétrage modules BTP et accompagnement ops",
        ],
        responsibilitiesEn: [
            "Containerized Odoo deployment on Kubernetes",
            "PostgreSQL persistence and volumes",
            "MinIO backups and Nginx reverse proxy",
            "BTP module setup and ops enablement",
        ],

        gallery: [
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-22%2011-20-48.png", captionFr: "ERP Odoo - vue métier", captionEn: "Odoo ERP - business view", kind: "ui" },
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-22%2011-24-11.png", captionFr: "Modules / opérations", captionEn: "Modules / operations", kind: "ui" },
        ],

        diagrams: [
            {
                id: "odoo-k8s",
                titleFr: "Architecture Kubernetes",
                titleEn: "Kubernetes architecture",
                mermaid: `flowchart TB
  Users --> Nginx[Nginx Ingress]
  Nginx --> Odoo[Odoo Pods]
  Odoo --> PG[(PostgreSQL)]
  Odoo --> MinIO[MinIO Backups]
  CI[CI/CD] --> K8s[Kubernetes Cluster]`,
            },
        ],

        resources: [
            { labelFr: "Environnement ERP (dev)", labelEn: "ERP environment (dev)", url: "https://erp-dev.zenora360.com/", type: "other" },
        ],

        milestones: [
            { labelFr: "Socle K8s + Postgres", labelEn: "K8s + Postgres foundation", date: "Mois 1" },
            { labelFr: "Odoo + modules BTP", labelEn: "Odoo + BTP modules", date: "Mois 2" },
            { labelFr: "Backups MinIO + prod", labelEn: "MinIO backups + prod", date: "Mois 2–3" },
        ],

        scopeFr: ["ERP Odoo cloud", "Orchestration Kubernetes", "Backups MinIO", "Modules orientés BTP"],
        scopeEn: ["Cloud Odoo ERP", "Kubernetes orchestration", "MinIO backups", "Construction-oriented modules"],
        nonGoalsFr: ["Refonte complète des processus métier hors Odoo", "Migration legacy batch massive"],
        nonGoalsEn: ["Full process redesign outside Odoo", "Massive legacy batch migration"],

        decisions: [
            {
                titleFr: "Kubernetes pour Odoo",
                titleEn: "Kubernetes for Odoo",
                decisionFr: "Orchestration K8s plutôt qu'un VPS mono-conteneur.",
                decisionEn: "K8s orchestration over a single-container VPS.",
                rationaleFr: "Résilience, scaling et standardisation ops.",
                rationaleEn: "Resilience, scaling, and ops standardization.",
            },
            {
                titleFr: "Backups objet MinIO",
                titleEn: "MinIO object backups",
                decisionFr: "Stockage backups découplé du nœud applicatif.",
                decisionEn: "Backup storage decoupled from the app node.",
                rationaleFr: "Récupération indépendante en cas d'incident nœud.",
                rationaleEn: "Independent recovery if a node fails.",
            },
        ],

        securityFr: ["Accès admin restreint", "TLS via reverse proxy", "Backups chiffrés / isolés", "Séparation environnements"],
        securityEn: ["Restricted admin access", "TLS via reverse proxy", "Isolated/encrypted backups", "Environment separation"],
        infraFr: ["Kubernetes pods/services", "PostgreSQL persistant", "MinIO", "Nginx ingress"],
        infraEn: ["Kubernetes pods/services", "Persistent PostgreSQL", "MinIO", "Nginx ingress"],

        externalLinks: [
            { labelFr: "ERP dev", labelEn: "ERP dev", url: "https://erp-dev.zenora360.com/" },
        ],

        testimonial: {
            quoteFr: "On a centralisé des opérations dispersées dans un ERP stable, sans perdre la main sur l'infra.",
            quoteEn: "We centralized scattered operations into a stable ERP without losing control of the infra.",
            author: "Ops Lead",
            roleFr: "Responsable opérations",
            roleEn: "Operations lead",
            company: "INTELEK BTP",
        },

        lessonsFr: [
            "L'ERP n'est utile que si les backups et la restauration sont testés.",
            "Kubernetes apporte de la discipline ops - à condition de documenter les runbooks.",
            "Anonymiser les écrans clients reste critique sur les études de cas.",
        ],
        lessonsEn: [
            "An ERP is only useful if backups and restores are tested.",
            "Kubernetes brings ops discipline - if runbooks are documented.",
            "Anonymizing client screens remains critical in case studies.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-22%2011-24-11.png",
                afterSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-22%2011-20-48.png",
                captionFr: "D'outils fragmentés à un ERP centralisé.",
                captionEn: "From fragmented tools to a centralized ERP.",
            },
        ],

        isFeatured: false,
    },

    {
        id: 8,
        titleFr: "Plateforme d’Observabilité Full Stack – Monitoring, Logs & Traces Corrélés",
        titleEn: "Full Stack Observability Platform – Metrics, Logs & Traces Correlation",

        descriptionFr: "Système complet d’observabilité pour VPS de production, intégrant métriques, logs et traces distribuées avec alerting avancé et dashboards SLO/SLI.",
        descriptionEn: "Complete observability system for production VPS, integrating metrics, logs, and distributed tracing with advanced alerting and SLO/SLI dashboards.",

        fullDescriptionFr: "Conception et déploiement d’une stack complète d’observabilité open-source pour superviser un environnement VPS de production. L’objectif était d’obtenir une visibilité totale sur le système en corrélant métriques, logs et traces distribuées. La solution repose sur Prometheus (collecte de métriques), Grafana (visualisation), Loki (logs), Tempo (traces) et OpenTelemetry pour l’instrumentation des applications. Des dashboards avancés SLO/SLI ont été mis en place pour piloter la fiabilité, ainsi que des règles d’alerting Prometheus couplées à des runbooks opérationnels. Le système intègre également des notifications en temps réel (Slack/PagerDuty) et permet une détection proactive des incidents. Cette plateforme apporte une vision claire et exploitable de la santé du système, réduisant significativement le temps de détection et de résolution des incidents.",
        fullDescriptionEn: "Designed and deployed a full open-source observability stack to monitor a production VPS environment. The goal was to achieve complete system visibility by correlating metrics, logs, and distributed traces. The solution is built with Prometheus (metrics collection), Grafana (visualization), Loki (logs), Tempo (traces), and OpenTelemetry for instrumentation. Advanced SLO/SLI dashboards were implemented to track reliability, along with Prometheus alerting rules and operational runbooks. The system also integrates real-time notifications (Slack/PagerDuty) and enables proactive incident detection. This platform provides a clear and actionable view of system health, significantly reducing incident detection and resolution time.",

        problemFr: "Absence de visibilité complète sur l’état du système en production, rendant difficile la détection rapide des incidents et l’analyse des performances.",
        problemEn: "Lack of full visibility into production system health, making it difficult to quickly detect incidents and analyze performance.",

        solutionFr: [
            "Mise en place d’une stack complète d’observabilité (metrics, logs, traces)",
            "Instrumentation des applications avec OpenTelemetry",
            "Collecte des métriques via Prometheus",
            "Centralisation des logs avec Loki",
            "Traces distribuées avec Tempo",
            "Dashboards avancés Grafana (SLO/SLI, performance, erreurs)",
            "Alerting Prometheus avec runbooks associés",
            "Notifications temps réel via Slack et PagerDuty",
        ],
        solutionEn: [
            "Implemented full observability stack (metrics, logs, traces)",
            "Instrumented applications using OpenTelemetry",
            "Collected metrics with Prometheus",
            "Centralized logs with Loki",
            "Distributed tracing with Tempo",
            "Advanced Grafana dashboards (SLO/SLI, performance, errors)",
            "Prometheus alerting with runbooks",
            "Real-time notifications via Slack and PagerDuty",
        ],

        challengesFr: [
            "Corréler efficacement métriques, logs et traces",
            "Gérer le volume de données généré par la supervision",
            "Définir des SLO/SLI pertinents",
            "Configurer des alertes utiles sans bruit excessif",
            "Instrumenter correctement les services",
        ],
        challengesEn: [
            "Effectively correlating metrics, logs, and traces",
            "Handling large volumes of monitoring data",
            "Defining meaningful SLO/SLI",
            "Configuring useful alerts without noise",
            "Properly instrumenting services",
        ],

        impactFr: [
            "Réduction significative du MTTR (temps de résolution des incidents)",
            "Détection proactive des anomalies",
            "Amélioration de la fiabilité du système",
            "Meilleure compréhension des performances applicatives",
        ],
        impactEn: [
            "Significant reduction in MTTR (incident resolution time)",
            "Proactive anomaly detection",
            "Improved system reliability",
            "Better understanding of application performance",
        ],

        metrics: {
            "MTTR": "-50%",
            "alerting": "Temps réel",
            "observability": "Metrics + Logs + Traces",
            "dashboards": "SLO/SLI",
            "coverage": "Système complet",
        },

        techStack: {
            frontend: [],
            backend: [],
            database: [],
            devops: [
                "Prometheus",
                "Grafana",
                "Loki",
                "Tempo",
                "OpenTelemetry",
                "Alertmanager",
                "PagerDuty",
                "Slack",
                "Docker",
            ],
        },

        architecture: [
            "Collecte métriques (Prometheus)",
            "Logs centralisés (Loki)",
            "Traces distribuées (Tempo)",
            "Instrumentation (OpenTelemetry)",
            "Visualisation (Grafana)",
            "Alerting (Prometheus + Alertmanager)",
            "Notifications externes (Slack/PagerDuty)",
        ],

        testing: [
            "Tests de charge monitoring",
            "Validation alerting",
            "Simulation d’incidents",
        ],

        images: [
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/000000083082.png",
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/images%20(3).jpeg",
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/image-7.png",
        ],

        preview: "",
        videoDemo: "",

        category: "DevOps • Observability",
        status: "MVP",
        complexity: "Expert",
        role: "DevOps Engineer",
        teamSize: 1,

        duration: "Projet continu",
        date: "2026",

        github: "",
        demo: "",

        businessContextFr: "Projet visant à améliorer la supervision et la fiabilité d’un système en production grâce à une observabilité complète et centralisée.",
        businessContextEn: "Project aimed at improving monitoring and reliability of a production system through full and centralized observability.",

        confidential: false,

        responsibilitiesFr: [
            "Stack métriques/logs/traces (Prometheus, Loki, Tempo)",
            "Instrumentation OpenTelemetry",
            "Dashboards Grafana + SLO/SLI",
            "Alerting Alertmanager / Slack / PagerDuty",
        ],
        responsibilitiesEn: [
            "Metrics/logs/traces stack (Prometheus, Loki, Tempo)",
            "OpenTelemetry instrumentation",
            "Grafana dashboards + SLO/SLI",
            "Alerting Alertmanager / Slack / PagerDuty",
        ],

        gallery: [
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/000000083082.png", captionFr: "Dashboard Grafana", captionEn: "Grafana dashboard", kind: "metric" },
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/images%20(3).jpeg", captionFr: "Corrélation logs / traces", captionEn: "Logs / traces correlation", kind: "infra" },
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/image-7.png", captionFr: "Vue monitoring", captionEn: "Monitoring view", kind: "metric" },
        ],

        diagrams: [
            {
                id: "obs-stack",
                titleFr: "Stack d'observabilité",
                titleEn: "Observability stack",
                mermaid: `flowchart LR
  App[Instrumented Apps] --> OTel[OpenTelemetry]
  OTel --> Prom[Prometheus]
  OTel --> Loki[Loki]
  OTel --> Tempo[Tempo]
  Prom --> Graf[Grafana]
  Loki --> Graf
  Tempo --> Graf
  Prom --> AM[Alertmanager]
  AM --> Slack[Slack / PagerDuty]`,
            },
        ],

        resources: [
            { labelFr: "Référence observabilité", labelEn: "Observability reference", url: "https://barthez-kenwou.dev/", type: "case-study" },
        ],

        milestones: [
            { labelFr: "Métriques Prometheus", labelEn: "Prometheus metrics", date: "Phase 1" },
            { labelFr: "Logs Loki + traces Tempo", labelEn: "Loki logs + Tempo traces", date: "Phase 2" },
            { labelFr: "SLO + alerting", labelEn: "SLO + alerting", date: "Phase 3" },
        ],

        scopeFr: ["Métriques, logs, traces corrélés", "OTel instrumentation", "Dashboards & SLO", "Alerting multi-canal"],
        scopeEn: ["Correlated metrics, logs, traces", "OTel instrumentation", "Dashboards & SLO", "Multi-channel alerting"],
        nonGoalsFr: ["APM commercial propriétaire", "Remplacement total des logs applicatifs custom"],
        nonGoalsEn: ["Proprietary commercial APM", "Full replacement of custom app logs"],

        decisions: [
            {
                titleFr: "OpenTelemetry first",
                titleEn: "OpenTelemetry first",
                decisionFr: "Instrumentation vendor-neutral.",
                decisionEn: "Vendor-neutral instrumentation.",
                rationaleFr: "Évite le lock-in et unifie traces/metrics/logs.",
                rationaleEn: "Avoids lock-in and unifies traces/metrics/logs.",
            },
            {
                titleFr: "SLO avant vanity metrics",
                titleEn: "SLO before vanity metrics",
                decisionFr: "Prioriser SLI/SLO métier.",
                decisionEn: "Prioritize business SLI/SLO.",
                rationaleFr: "Les dashboards sans objectif créent du bruit.",
                rationaleEn: "Dashboards without goals create noise.",
            },
        ],

        securityFr: ["Accès Grafana RBAC", "Secrets d'alerting hors repo", "Rétention logs maîtrisée", "Réseau monitoring isolé"],
        securityEn: ["Grafana RBAC access", "Alerting secrets out of repo", "Controlled log retention", "Isolated monitoring network"],
        infraFr: ["Prometheus + Alertmanager", "Loki + Tempo", "Grafana", "Dockerized collectors"],
        infraEn: ["Prometheus + Alertmanager", "Loki + Tempo", "Grafana", "Dockerized collectors"],

        externalLinks: [{ labelFr: "Portfolio", labelEn: "Portfolio", url: "https://barthez-kenwou.dev" }],

        testimonial: {
            quoteFr: "On détecte plus tôt, on corrèle plus vite, et les alertes ont enfin un sens métier.",
            quoteEn: "We detect earlier, correlate faster, and alerts finally have business meaning.",
            author: "SRE Peer",
            roleFr: "SRE",
            roleEn: "SRE",
            company: "Platform practice",
        },

        lessonsFr: [
            "Trop d'alertes = zéro alerte - calibrer le bruit.",
            "Sans corrélation traces/logs, le MTTD reste élevé.",
            "Les SLO doivent être négociés avec le métier.",
        ],
        lessonsEn: [
            "Too many alerts = no alerts - calibrate noise.",
            "Without traces/logs correlation, MTTD stays high.",
            "SLOs must be negotiated with the business.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/images%20(3).jpeg",
                afterSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/000000083082.png",
                captionFr: "Du monitoring fragmenté à une observabilité corrélée.",
                captionEn: "From fragmented monitoring to correlated observability.",
            },
        ],

        isFeatured: false,
    },

    {
        id: 9,
        titleFr: "Plateforme Blog Backend-Driven – SEO, RBAC & Performance",
        titleEn: "Backend-Driven Blog Platform – SEO, RBAC & Performance",

        descriptionFr: "Système de gestion de blog avancé orienté backend, avec RBAC, optimisation des performances, sécurité renforcée et stratégie SEO pour acquisition d’audience.",
        descriptionEn: "Advanced backend-driven blog platform with RBAC, performance optimization, enhanced security, and SEO strategy for audience acquisition.",

        fullDescriptionFr: "Conception et développement d’une plateforme de blog avancée centrée sur le backend, pensée comme un levier stratégique de positionnement technique et d’acquisition d’audience. Le système inclut une API robuste avec gestion des rôles (RBAC), authentification sécurisée, gestion des contenus (articles, commentaires), et optimisation des performances via caching multi-niveaux. L’architecture a été conçue pour supporter du trafic SEO avec des contenus indexables, tout en garantissant sécurité et scalabilité. Le projet sert à la fois de démonstration technique (DevOps & Fullstack), de canal d’acquisition client, et de plateforme de contenu pour renforcer la présence digitale (LinkedIn, YouTube, SEO).",
        fullDescriptionEn: "Designed and developed an advanced backend-driven blog platform as a strategic tool for technical positioning and audience acquisition. The system includes a robust API with role-based access control (RBAC), secure authentication, content management (articles, comments), and performance optimization through multi-level caching. The architecture is designed to support SEO-driven traffic while ensuring security and scalability. The project serves as both a technical showcase (DevOps & Fullstack), a client acquisition channel, and a content platform to strengthen digital presence (LinkedIn, YouTube, SEO).",

        problemFr: "Absence d’un canal structuré pour publier du contenu technique, attirer une audience qualifiée et démontrer concrètement les compétences backend et DevOps.",
        problemEn: "Lack of a structured platform to publish technical content, attract qualified audience, and concretely demonstrate backend and DevOps skills.",

        solutionFr: [
            "Développement d’une API backend robuste pour gestion des blogs et commentaires",
            "Implémentation d’un système RBAC (admin, éditeur, utilisateur)",
            "Authentification sécurisée (JWT, gestion des sessions)",
            "Optimisation des performances (Redis, caching applicatif)",
            "Architecture orientée SEO pour génération de trafic organique",
            "Système de commentaires et interaction utilisateur",
        ],
        solutionEn: [
            "Built a robust backend API for blog and comment management",
            "Implemented RBAC system (admin, editor, user)",
            "Secure authentication (JWT, session management)",
            "Performance optimization (Redis, application caching)",
            "SEO-oriented architecture for organic traffic generation",
            "User interaction system with comments",
        ],

        challengesFr: [
            "Maintenir de hautes performances sous trafic SEO",
            "Sécuriser les endpoints sensibles (auth, commentaires)",
            "Structurer un système RBAC flexible et évolutif",
            "Optimiser le caching sans compromettre la cohérence des données",
            "Aligner architecture technique et objectifs marketing (SEO, audience)",
        ],
        challengesEn: [
            "Maintaining high performance under SEO traffic",
            "Securing sensitive endpoints (auth, comments)",
            "Designing flexible and scalable RBAC system",
            "Optimizing caching without compromising data consistency",
            "Aligning technical architecture with marketing goals (SEO, audience)",
        ],

        impactFr: [
            "Création d’un canal d’acquisition client basé sur le contenu",
            "Renforcement du positionnement expert DevOps & Fullstack",
            "Génération de trafic SEO vers le portfolio",
            "Augmentation de la visibilité sur LinkedIn et YouTube",
        ],
        impactEn: [
            "Created a content-driven client acquisition channel",
            "Strengthened DevOps & Fullstack expert positioning",
            "Generated SEO traffic toward portfolio",
            "Increased visibility on LinkedIn and YouTube",
        ],

        metrics: {
            "roles": "RBAC complet (3+ rôles)",
            "performance": "Optimisé (Redis caching)",
            "SEO": "Indexation optimisée",
            "architecture": "Backend-first",
        },

        techStack: {
            frontend: ["React", "Tailwind CSS"],
            backend: ["Node.js", "Express", "TypeScript"],
            database: ["MongoDB", "Redis"],
            devops: ["Docker", "Nginx", "CI/CD", "VPS"],
        },

        architecture: [
            "API REST backend-first",
            "RBAC (Role-Based Access Control)",
            "Caching multi-niveaux (Redis)",
            "Frontend découplé",
            "Déploiement conteneurisé",
        ],

        testing: [
            "Tests API with Postman",
            "Validation sécurité endpoints",
            "Tests de performance",
        ],

        images: [
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-22%2015-43-00.png",
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-22%2015-44-46.png",
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-22%2015-45-15.png",
        ],

        preview: "",
        videoDemo: "",

        category: "Backend • Fullstack",
        status: "Production",
        complexity: "Avancé",
        role: "Backend Developer • DevOps",
        teamSize: 1,

        duration: "Projet continu",
        date: "2026",

        github: "",
        demo: "",

        businessContextFr: "Projet personnel stratégique visant à attirer des clients, construire une audience technique et renforcer une image d’expertise dans le développement backend et DevOps.",
        businessContextEn: "Strategic personal project aimed at attracting clients, building a technical audience, and reinforcing expertise in backend development and DevOps.",

        confidential: false,

        responsibilitiesFr: [
            "API blog/commentaires Node/Express TypeScript",
            "RBAC admin/editor/user + JWT",
            "Cache Redis multi-niveaux et SEO",
            "Déploiement Docker/Nginx/CI/CD sur VPS",
        ],
        responsibilitiesEn: [
            "Blog/comments API with Node/Express TypeScript",
            "Admin/editor/user RBAC + JWT",
            "Multi-level Redis caching and SEO",
            "Docker/Nginx/CI/CD deployment on VPS",
        ],

        gallery: [
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-22%2015-43-00.png", captionFr: "Liste d'articles", captionEn: "Article list", kind: "ui" },
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-22%2015-44-46.png", captionFr: "Détail article", captionEn: "Article detail", kind: "ui" },
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-22%2015-45-15.png", captionFr: "Backoffice / édition", captionEn: "Admin / editing", kind: "ui" },
        ],

        diagrams: [
            {
                id: "blog-api",
                titleFr: "Architecture backend-first",
                titleEn: "Backend-first architecture",
                mermaid: `flowchart LR
  FE[React Frontend] --> API[Express API]
  API --> RBAC[RBAC Middleware]
  API --> Cache[Redis Cache]
  API --> Mongo[(MongoDB)]
  CI[CI/CD] --> VPS[Docker + Nginx VPS]`,
            },
        ],

        resources: [
            { labelFr: "Articles techniques", labelEn: "Technical articles", url: "https://barthez-kenwou.dev/blog", type: "other" },
        ],

        milestones: [
            { labelFr: "API + modèles", labelEn: "API + models", date: "Phase 1" },
            { labelFr: "RBAC + JWT", labelEn: "RBAC + JWT", date: "Phase 2" },
            { labelFr: "Cache Redis + SEO", labelEn: "Redis cache + SEO", date: "Phase 3" },
        ],

        scopeFr: ["API articles/commentaires", "RBAC", "Cache Redis", "SEO + déploiement VPS"],
        scopeEn: ["Articles/comments API", "RBAC", "Redis cache", "SEO + VPS deployment"],
        nonGoalsFr: ["CMS headless multi-tenant SaaS", "Éditeur collaboratif temps réel"],
        nonGoalsEn: ["Multi-tenant headless CMS SaaS", "Realtime collaborative editor"],

        decisions: [
            {
                titleFr: "Backend-first",
                titleEn: "Backend-first",
                decisionFr: "API robuste avant polish UI.",
                decisionEn: "Robust API before UI polish.",
                rationaleFr: "Démontre la profondeur backend/DevOps du positionnement.",
                rationaleEn: "Demonstrates backend/DevOps depth in positioning.",
            },
            {
                titleFr: "Cache multi-niveaux Redis",
                titleEn: "Multi-level Redis cache",
                decisionFr: "Cache listes + détails + sessions.",
                decisionEn: "Cache lists + details + sessions.",
                rationaleFr: "Latence et charge DB maîtrisées sous trafic lecture.",
                rationaleEn: "Controlled latency and DB load under read traffic.",
            },
        ],

        securityFr: ["JWT + refresh", "RBAC strict", "Validation Zod/inputs", "Rate limiting"],
        securityEn: ["JWT + refresh", "Strict RBAC", "Zod/input validation", "Rate limiting"],
        infraFr: ["Docker + Nginx", "MongoDB + Redis", "CI/CD VPS", "Logs applicatifs"],
        infraEn: ["Docker + Nginx", "MongoDB + Redis", "CI/CD VPS", "Application logs"],

        externalLinks: [
            { labelFr: "Blog portfolio", labelEn: "Portfolio blog", url: "https://barthez-kenwou.dev/blog" },
        ],

        testimonial: {
            quoteFr: "Un blog qui prouve autant le backend que le contenu - rare et crédible.",
            quoteEn: "A blog that proves backend skill as much as content - rare and credible.",
            author: "Technical Reader",
            roleFr: "Développeur",
            roleEn: "Developer",
            company: "Community",
        },

        lessonsFr: [
            "Le SEO sans perf API reste cosmétique.",
            "RBAC clair dès le départ évite les dettes d'auth.",
            "Le cache doit avoir une stratégie d'invalidation explicite.",
        ],
        lessonsEn: [
            "SEO without API performance stays cosmetic.",
            "Clear RBAC early avoids auth debt.",
            "Cache needs an explicit invalidation strategy.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-22%2015-44-46.png",
                afterSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-22%2015-43-00.png",
                captionFr: "D'une absence de canal éditorial à une plateforme backend-driven.",
                captionEn: "From no editorial channel to a backend-driven platform.",
            },
        ],

        isFeatured: false,
    },

    {
        id: 10,
        titleFr: "Hardening & Sécurisation Avancée d’un Serveur Linux (Ubuntu)",
        titleEn: "Advanced Linux Server Hardening & Security (Ubuntu)",

        descriptionFr: "Sécurisation complète d’un serveur Ubuntu de production avec hardening système, protection réseau multi-couches, monitoring et automatisation des mises à jour.",
        descriptionEn: "Full security hardening of a production Ubuntu server with multi-layer network protection, monitoring, and automated updates.",

        fullDescriptionFr: "Mise en place d’une stratégie complète de sécurisation (hardening) d’un serveur Linux Ubuntu destiné à la production. Le projet couvre la sécurisation des accès (désactivation root, SSH sécurisé), la protection réseau multi-couches (UFW, iptables, CrowdSec, Fail2Ban, CSF), ainsi que l’intégration de protections externes via Cloudflare (CDN + WAF). Le système a été renforcé au niveau kernel (sysctl), avec gestion stricte des permissions, journalisation centralisée et surveillance continue. Des mécanismes d’alerting et de reporting ont été configurés pour assurer une supervision proactive, accompagnés de mises à jour automatiques de sécurité. L’environnement a également été préparé pour accueillir des applications conteneurisées (Docker) dans un contexte sécurisé. L’objectif global était de réduire drastiquement la surface d’attaque et d’assurer un niveau de sécurité proche des standards production.",
        fullDescriptionEn: "Implemented a complete hardening strategy for a production Ubuntu Linux server. The project covers secure access configuration (root disabling, hardened SSH), multi-layer network protection (UFW, iptables, CrowdSec, Fail2Ban, CSF), and external protection via Cloudflare (CDN + WAF). The system was hardened at kernel level (sysctl), with strict permissions, centralized logging, and continuous monitoring. Alerting and reporting mechanisms were configured for proactive supervision, along with automated security updates. The environment was also prepared to host containerized applications (Docker) in a secure setup. The overall goal was to drastically reduce the attack surface and achieve production-grade security standards.",

        problemFr: "Les serveurs exposés sur Internet sont fortement vulnérables aux attaques (brute force, scans, exploits), nécessitant une sécurisation avancée pour garantir la stabilité et la confidentialité des données.",
        problemEn: "Internet-exposed servers are highly vulnerable to attacks (brute force, scans, exploits), requiring advanced hardening to ensure stability and data confidentiality.",

        solutionFr: [
            "Désactivation de l’accès root et sécurisation SSH (clé, port personnalisé, restrictions)",
            "Configuration de Fail2Ban et CrowdSec pour bloquer les attaques automatisées",
            "Mise en place de pare-feux (UFW, iptables, CSF)",
            "Intégration Cloudflare (CDN + WAF) pour protection externe",
            "Renforcement du kernel via sysctl (réseau, sécurité)",
            "Centralisation des logs et mise en place de monitoring",
            "Configuration des mises à jour automatiques de sécurité",
            "Installation et sécurisation de Docker",
            "Mise en place d’alertes et rapports journaliers",
        ],
        solutionEn: [
            "Disabled root access and secured SSH (keys, custom port, restrictions)",
            "Configured Fail2Ban and CrowdSec for automated attack blocking",
            "Implemented firewalls (UFW, iptables, CSF)",
            "Integrated Cloudflare (CDN + WAF) for external protection",
            "Hardened kernel via sysctl (network, security)",
            "Centralized logs and monitoring setup",
            "Configured automatic security updates",
            "Installed and secured Docker",
            "Set up alerts and daily reporting",
        ],

        challengesFr: [
            "Coordination de multiples couches de sécurité sans conflit",
            "Maintenir accessibilité tout en renforçant la sécurité",
            "Optimiser les règles firewall pour éviter les faux positifs",
            "Mettre en place une surveillance efficace et exploitable",
            "Sécuriser Docker dans un environnement exposé",
        ],
        challengesEn: [
            "Coordinating multiple security layers without conflicts",
            "Maintaining accessibility while strengthening security",
            "Optimizing firewall rules to avoid false positives",
            "Setting up effective and actionable monitoring",
            "Securing Docker in an exposed environment",
        ],

        impactFr: [
            "Réduction drastique de la surface d’attaque",
            "Blocage automatique des attaques brute force et scans",
            "Amélioration significative de la stabilité du serveur",
            "Surveillance proactive avec alertes en temps réel",
        ],
        impactEn: [
            "Drastically reduced attack surface",
            "Automatic blocking of brute force and scan attacks",
            "Improved server stability",
            "Proactive monitoring with real-time alerts",
        ],

        metrics: {
            "attaques_bloquées": "100+ tentatives/jour",
            "uptime": "99.9%",
            "monitoring": "Temps réel",
            "updates": "Automatisées",
        },

        techStack: {
            frontend: [],
            backend: [],
            database: [],
            devops: [
                "Linux Ubuntu",
                "UFW",
                "iptables",
                "Fail2Ban",
                "CrowdSec",
                "CSF",
                "Cloudflare",
                "Docker",
                "sysctl",
                "NTP",
                "Monitoring Tools",
            ],
        },

        architecture: [
            "Sécurité multi-couches (réseau + applicatif)",
            "Pare-feu UFW + iptables + CSF",
            "Protection anti-intrusion (Fail2Ban, CrowdSec)",
            "CDN/WAF (Cloudflare)",
            "Hardening système (sysctl)",
            "Monitoring et logs centralisés",
        ],

        testing: [
            "Tests de pénétration basiques",
            "Simulation d’attaques brute force",
            "Validation des règles firewall",
        ],

        images: [
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/images%20(2).jpeg",
        ],

        preview: "",
        videoDemo: "",

        category: "Security • DevOps",
        status: "Actif",
        complexity: "Avancé",
        role: "DevOps Engineer",
        teamSize: 1,

        duration: "Projet continu",
        date: "2026",

        github: "",
        demo: "",

        businessContextFr: "Projet de sécurisation d’infrastructure visant à protéger des serveurs exposés en production contre les menaces courantes et avancées.",
        businessContextEn: "Infrastructure security project aimed at protecting production servers from common and advanced threats.",

        confidential: false,

        responsibilitiesFr: [
            "Hardening SSH (clés, no root, port custom)",
            "Firewall UFW/iptables/CSF + Fail2Ban/CrowdSec",
            "Sysctl, updates automatiques, monitoring basique",
            "Cloudflare CDN/WAF en frontal",
        ],
        responsibilitiesEn: [
            "SSH hardening (keys, no root, custom port)",
            "UFW/iptables/CSF firewall + Fail2Ban/CrowdSec",
            "Sysctl, automatic updates, baseline monitoring",
            "Cloudflare CDN/WAF in front",
        ],

        gallery: [
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/images%20(2).jpeg", captionFr: "Couches de hardening Linux", captionEn: "Linux hardening layers", kind: "infra" },
        ],

        diagrams: [
            {
                id: "linux-hardening",
                titleFr: "Couches de défense",
                titleEn: "Defense layers",
                mermaid: `flowchart TB
  Internet --> CF[Cloudflare WAF/CDN]
  CF --> UFW[UFW / iptables / CSF]
  UFW --> SSH[Hardened SSH]
  UFW --> Services[App Services]
  F2B[Fail2Ban / CrowdSec] --> UFW
  Monitor[Monitoring] --> Services`,
            },
        ],

        resources: [
            { labelFr: "Guide hardening (blog)", labelEn: "Hardening guide (blog)", url: "https://barthez-kenwou.dev/blog", type: "case-study" },
        ],

        milestones: [
            { labelFr: "SSH & accès", labelEn: "SSH & access", date: "Phase 1" },
            { labelFr: "Firewall & intrusion", labelEn: "Firewall & intrusion", date: "Phase 2" },
            { labelFr: "Cloudflare + monitoring", labelEn: "Cloudflare + monitoring", date: "Phase 3" },
        ],

        scopeFr: ["Hardening Ubuntu production", "Firewall multi-couches", "Détection intrusion", "CDN/WAF Cloudflare"],
        scopeEn: ["Ubuntu production hardening", "Multi-layer firewall", "Intrusion detection", "Cloudflare CDN/WAF"],
        nonGoalsFr: ["SOC managé externe", "Remplacement complet de l'OS"],
        nonGoalsEn: ["External managed SOC", "Full OS replacement"],

        decisions: [
            {
                titleFr: "Défense en profondeur",
                titleEn: "Defense in depth",
                decisionFr: "Couches réseau + SSH + runtime + CDN.",
                decisionEn: "Network + SSH + runtime + CDN layers.",
                rationaleFr: "Aucun contrôle unique n'est suffisant face aux scans automatisés.",
                rationaleEn: "No single control is enough against automated scans.",
            },
            {
                titleFr: "CrowdSec + Fail2Ban",
                titleEn: "CrowdSec + Fail2Ban",
                decisionFr: "Protection locale + intelligence collaborative.",
                decisionEn: "Local protection + collaborative intelligence.",
                rationaleFr: "Meilleure couverture des botnets et récidives.",
                rationaleEn: "Better coverage of botnets and repeat offenders.",
            },
        ],

        securityFr: ["SSH keys only / no root", "Default DENY firewall", "Fail2Ban + CrowdSec", "Cloudflare devant l'origine"],
        securityEn: ["SSH keys only / no root", "Default DENY firewall", "Fail2Ban + CrowdSec", "Cloudflare in front of origin"],
        infraFr: ["Ubuntu LTS", "UFW/iptables/CSF", "Docker-ready host", "Monitoring basique"],
        infraEn: ["Ubuntu LTS", "UFW/iptables/CSF", "Docker-ready host", "Baseline monitoring"],

        externalLinks: [
            { labelFr: "Blog sécurité", labelEn: "Security blog", url: "https://barthez-kenwou.dev/blog" },
        ],

        testimonial: {
            quoteFr: "Le serveur n'est plus une cible facile - et les procédures restent maintenables.",
            quoteEn: "The server is no longer an easy target - and procedures stay maintainable.",
            author: "Infra Peer",
            roleFr: "Admin système",
            roleEn: "System admin",
            company: "Ops circle",
        },

        lessonsFr: [
            "Hardening sans runbook = dette opérationnelle.",
            "Cloudflare ne remplace pas le firewall local.",
            "Tester la restauration SSH hors bande avant de couper le password login.",
        ],
        lessonsEn: [
            "Hardening without a runbook is operational debt.",
            "Cloudflare does not replace a local firewall.",
            "Test out-of-band SSH recovery before disabling password login.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/images%20(2).jpeg",
                afterSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/images%20(2).jpeg",
                captionFr: "D'un serveur exposé 'par défaut' à une forteresse maintenable.",
                captionEn: "From a default-exposed server to a maintainable fortress.",
            },
        ],

        isFeatured: false,
    },

    {
        id: 11,
        titleFr: "Plateforme de Gestion Intelligente de Files d’Attente",
        titleEn: "Smart Queue Management Platform",

        descriptionFr: "Application web permettant aux organisations de gérer plusieurs files d’attente avec estimation intelligente du temps d’attente et optimisation du flux utilisateur.",
        descriptionEn: "Web application enabling organizations to manage multiple queues with intelligent wait-time estimation and optimized user flow.",

        fullDescriptionFr: "Conception et développement d’une plateforme de gestion intelligente de files d’attente destinée aux structures accueillant du public (services, administrations, entreprises). Le système permet à chaque organisation de créer et gérer plusieurs files d’attente depuis un espace sécurisé, avec suivi en temps réel des utilisateurs et estimation dynamique du temps d’attente basée sur la durée moyenne de traitement. Le projet a été réalisé en équipe agile (Scrum), avec coordination des sprints, gestion des tâches via Trello et pilotage technique. L’architecture repose sur un frontend React et un backend Python FastAPI performant, permettant une gestion fluide et scalable des requêtes. L’objectif principal était d’optimiser l’expérience utilisateur, réduire les temps d’attente perçus et améliorer l’organisation des services.",
        fullDescriptionEn: "Designed and developed a smart queue management platform for organizations handling public services (administrations, service centers, companies). The system allows each organization to create and manage multiple queues within a secure workspace, with real-time tracking and dynamic wait-time estimation based on average service duration. The project was built in an Agile (Scrum) environment, including sprint coordination, task management via Trello, and technical leadership. The architecture relies on a React frontend and a high-performance Python FastAPI backend, ensuring smooth and scalable request handling. The main goal was to optimize user experience, reduce perceived waiting times, and improve service organization.",

        problemFr: "Les structures gérant des flux de clients souffrent souvent d’une mauvaise organisation des files d’attente, entraînant frustration, perte de temps et inefficacité opérationnelle.",
        problemEn: "Organizations managing customer flow often face poor queue organization, leading to frustration, wasted time, and operational inefficiency.",

        solutionFr: [
            "Système multi-tenant permettant à chaque structure de gérer ses propres files",
            "Création et gestion de multiples files d’attente par service",
            "Estimation intelligente du temps d’attente basée sur des données réelles",
            "Suivi en temps réel des utilisateurs dans la file",
            "Interface utilisateur intuitive pour gestion et supervision",
            "Architecture scalable basée sur React + FastAPI",
        ],
        solutionEn: [
            "Multi-tenant system allowing each organization to manage its own queues",
            "Creation and management of multiple service queues",
            "Intelligent wait-time estimation based on real data",
            "Real-time user tracking within queues",
            "Intuitive UI for management and monitoring",
            "Scalable architecture based on React + FastAPI",
        ],

        challengesFr: [
            "Implémenter une estimation fiable du temps d’attente",
            "Gérer la synchronisation en temps réel des files",
            "Concevoir une architecture multi-tenant",
            "Coordonner une équipe agile en tant que Scrum Master",
            "Maintenir performance et fluidité sous charge",
        ],
        challengesEn: [
            "Implementing reliable wait-time estimation",
            "Handling real-time queue synchronization",
            "Designing a multi-tenant architecture",
            "Coordinating an agile team as Scrum Master",
            "Maintaining performance and responsiveness under load",
        ],

        impactFr: [
            "Amélioration de l’organisation des services clients",
            "Réduction des temps d’attente perçus",
            "Meilleure expérience utilisateur",
            "Optimisation des flux opérationnels",
        ],
        impactEn: [
            "Improved service organization",
            "Reduced perceived waiting times",
            "Enhanced user experience",
            "Optimized operational workflows",
        ],

        metrics: {
            "team": "5 personnes",
            "architecture": "Multi-tenant",
            "estimation": "Temps d’attente dynamique",
            "methodology": "Scrum",
        },

        techStack: {
            frontend: ["React", "Tailwind CSS"],
            backend: ["Python", "FastAPI"],
            database: ["PostgreSQL"],
            devops: ["Docker", "VPS"],
        },

        architecture: [
            "Architecture client-serveur",
            "Backend FastAPI (API REST)",
            "Frontend React",
            "Gestion multi-tenant",
            "Système de calcul dynamique des temps d’attente",
        ],

        testing: [
            "Tests fonctionnels",
            "Tests de charge basiques",
            "Validation UX",
        ],

        images: [
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/images%20(4).jpeg",
        ],

        preview: "",
        videoDemo: "",

        category: "Fullstack",
        status: "MVP",
        complexity: "Avancé",
        role: "Scrum Master • Lead Developer",
        teamSize: 5,

        duration: "2–3 mois",
        date: "2025",

        github: "",
        demo: "",

        businessContextFr: "Projet visant à digitaliser et optimiser la gestion des files d’attente dans les structures accueillant du public.",
        businessContextEn: "Project aimed at digitizing and optimizing queue management in customer-facing organizations.",

        confidential: false,

        responsibilitiesFr: [
            "Lead technique + facilitation Scrum (équipe de 5)",
            "API FastAPI multi-tenant",
            "Frontend React temps réel",
            "Estimation d'attente et tracking live",
        ],
        responsibilitiesEn: [
            "Tech lead + Scrum facilitation (team of 5)",
            "Multi-tenant FastAPI API",
            "Realtime React frontend",
            "Wait-time estimation and live tracking",
        ],

        gallery: [
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/images%20(4).jpeg", captionFr: "Concept file d'attente intelligente", captionEn: "Smart queue concept", kind: "process" },
        ],

        diagrams: [
            {
                id: "queue-arch",
                titleFr: "Architecture files d'attente",
                titleEn: "Queue architecture",
                mermaid: `flowchart LR
  Client[React Client] --> API[FastAPI]
  API --> Auth[Tenant Auth]
  API --> Queue[Queue Service]
  Queue --> PG[(PostgreSQL)]
  Queue --> RT[Realtime Updates]
  RT --> Client`,
            },
        ],

        resources: [
            { labelFr: "Case study résumé", labelEn: "Case study summary", url: "https://barthez-kenwou.dev/", type: "case-study" },
        ],

        milestones: [
            { labelFr: "Kickoff & backlog", labelEn: "Kickoff & backlog", date: "Sprint 0" },
            { labelFr: "MVP multi-tenant", labelEn: "Multi-tenant MVP", date: "Mois 1" },
            { labelFr: "Estimation + realtime", labelEn: "Estimation + realtime", date: "Mois 2–3" },
        ],

        scopeFr: ["Files multi-tenant", "Estimation d'attente", "Suivi temps réel", "API FastAPI + React"],
        scopeEn: ["Multi-tenant queues", "Wait-time estimation", "Realtime tracking", "FastAPI + React"],
        nonGoalsFr: ["Hardware tickets physiques", "ERP complet de caisse"],
        nonGoalsEn: ["Physical ticket hardware", "Full POS/ERP"],

        decisions: [
            {
                titleFr: "FastAPI pour le temps réel métier",
                titleEn: "FastAPI for business realtime",
                decisionFr: "Python FastAPI plutôt que Node pour le cœur API.",
                decisionEn: "Python FastAPI over Node for the API core.",
                rationaleFr: "Productivité équipe + typage + perf async suffisante.",
                rationaleEn: "Team productivity + typing + sufficient async performance.",
            },
            {
                titleFr: "Multi-tenant dès le MVP",
                titleEn: "Multi-tenant from MVP",
                decisionFr: "Isolation tenant dès la première version.",
                decisionEn: "Tenant isolation from v1.",
                rationaleFr: "Évite une refonte douloureuse à l'échelle.",
                rationaleEn: "Avoids a painful rewrite at scale.",
            },
        ],

        securityFr: ["Isolation multi-tenant", "Auth par organisation", "Validation stricte des tickets", "Logs d'audit basiques"],
        securityEn: ["Multi-tenant isolation", "Org-level auth", "Strict ticket validation", "Basic audit logs"],
        infraFr: ["Docker", "PostgreSQL", "VPS", "CI basique"],
        infraEn: ["Docker", "PostgreSQL", "VPS", "Basic CI"],

        externalLinks: [{ labelFr: "Portfolio", labelEn: "Portfolio", url: "https://barthez-kenwou.dev" }],

        testimonial: {
            quoteFr: "L'équipe a livré un MVP crédible en gardant le focus produit - rare sur ce type de sujet.",
            quoteEn: "The team delivered a credible MVP while staying product-focused - rare on this topic.",
            author: "Product Stakeholder",
            roleFr: "Sponsor produit",
            roleEn: "Product sponsor",
            company: "Queue pilot org",
        },

        lessonsFr: [
            "Le temps d'attente perçu compte autant que le temps réel - UX first.",
            "Scrum utile seulement si le backlog est tranché chaque sprint.",
            "Le multi-tenant tôt coûte cher, mais le refactor tard coûte plus.",
        ],
        lessonsEn: [
            "Perceived wait time matters as much as real time - UX first.",
            "Scrum only helps if the backlog is cut every sprint.",
            "Early multi-tenancy is costly, but late refactor costs more.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/images%20(4).jpeg",
                afterSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/images%20(4).jpeg",
                captionFr: "De files chaotiques à un tracking digital multi-tenant.",
                captionEn: "From chaotic queues to digital multi-tenant tracking.",
            },
        ],

        isFeatured: false,
    },

    {
        id: 2,
        titleFr: 'Plateforme Web GTA-Academy (Centre de formation)',
        titleEn: 'GTA-Academy Web Platform (Training Center)',

        descriptionFr: "Plateforme web de lancement pour GTA-Academy, conçue pour assurer visibilité, crédibilité et acquisition d’apprenants via une présentation structurée des formations et événements.",
        descriptionEn: "Launch web platform for GTA-Academy designed to ensure visibility, credibility, and student acquisition through structured presentation of training programs and events.",

        fullDescriptionFr: "Conception et développement en urgence d’une plateforme web pour GTA-Academy, centre de formation professionnelle. Le site avait pour objectif principal de positionner rapidement la structure sur le marché en offrant une visibilité claire sur les formations (vacances, entreprises, certifiantes, personnalisées) ainsi que sur les événements (webinaires, sessions d’information). L’application inclut des pages dédiées aux programmes, un système de présentation des événements et une architecture optimisée pour la conversion des visiteurs en prospects. Le projet a été déployé rapidement pour accompagner le lancement officiel du centre.",
        fullDescriptionEn: "Designed and developed under tight deadline a web platform for GTA-Academy, a professional training center. The main goal was to quickly position the institution in the market by providing clear visibility on training programs (holiday, corporate, certified, custom) and events (webinars, info sessions). The application includes dedicated program pages, event presentation system, and a structure optimized for user conversion. The project was rapidly deployed to support the official launch of the academy.",

        problemFr: "Le centre de formation était en phase de lancement sans présence digitale, ce qui limitait fortement sa visibilité, sa crédibilité et sa capacité à recruter rapidement des apprenants.",
        problemEn: "The training center was in its launch phase with no digital presence, severely limiting its visibility, credibility, and ability to quickly acquire students.",

        solutionFr: [
            "Conception rapide d’un site web structuré orienté conversion",
            "Présentation claire des différentes offres de formation (vacances, entreprise, certifiante, personnalisée)",
            "Intégration d’un système de mise en avant des événements (webinaires, sessions d'information)",
            "Optimisation UX/UI pour faciliter l’inscription et la prise de contact",
            "Déploiement rapide pour accompagner le lancement officiel"
        ],
        solutionEn: [
            "Rapid design of a conversion-oriented structured website",
            "Clear presentation of multiple training offers (holiday, corporate, certified, custom)",
            "Integration of event showcasing system (webinars, info sessions)",
            "UX/UI optimization for easy registration and contact",
            "Fast deployment to support official launch"
        ],

        challengesFr: [
            "Livrer une plateforme complète en moins d’une semaine",
            "Structurer efficacement les offres de formation pour maximiser la compréhension",
            "Créer une crédibilité immédiate pour une structure nouvellement lancée",
            "Optimiser l’expérience utilisateur dans un délai très court"
        ],
        challengesEn: [
            "Deliver a complete platform in less than one week",
            "Efficiently structure training offers for maximum clarity",
            "Create immediate credibility for a newly launched institution",
            "Optimize user experience under tight deadlines"
        ],

        impactFr: [
            "Lancement réussi de la présence digitale de GTA-Academy",
            "Amélioration immédiate de la crédibilité du centre",
            "Facilitation de l’acquisition des premiers apprenants",
            "Visibilité claire des offres de formation et événements"
        ],
        impactEn: [
            "Successful launch of GTA-Academy digital presence",
            "Immediate improvement in brand credibility",
            "Facilitated acquisition of first students",
            "Clear visibility of training offers and events"
        ],

        metrics: {
            "deliveryTime": "1 semaine",
            "pages": "10+ pages structurées",
            "goal": "Lancement rapide",
            "availability": "Production ready"
        },

        techStack: {
            frontend: ["React", "Tailwind CSS"],
            backend: ["Node.js", "Express"],
            database: ["MongoDB"],
            devops: ["Vercel", "VPS", "CI/CD"]
        },

        architecture: [
            "Frontend React pour rendu dynamique",
            "Backend Node.js pour gestion des contenus",
            "Structure orientée landing pages pour conversion",
            "Déploiement rapide cloud/VPS"
        ],

        testing: [],

        images: [
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/iPhone-13-PRO-academy.gta-it.com.png",
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Macbook-Air-academy.gta-it.com.png",
        ],

        preview: "https://academy.gta-it.com/",
        videoDemo: "",

        category: "Full Stack",
        status: "Production",
        complexity: "Intermédiaire",
        role: "Fullstack Developer",
        teamSize: 1,

        duration: "1 semaine",
        date: "2025",

        github: "",
        demo: "https://academy.gta-it.com/",

        businessContextFr: "Projet stratégique de lancement visant à positionner rapidement GTA-Academy sur le marché de la formation professionnelle et attirer ses premiers apprenants.",
        businessContextEn: "Strategic launch project aimed at quickly positioning GTA-Academy in the professional training market and attracting its first students.",

        confidential: false,

        responsibilitiesFr: [
            "Conception et développement fullstack du site conversion",
            "Parcours offres / événements / contact",
            "Déploiement Vercel + VPS / CI/CD",
            "Optimisation UX mobile-first",
        ],
        responsibilitiesEn: [
            "Fullstack design and development of the conversion site",
            "Offers / events / contact journeys",
            "Vercel + VPS / CI/CD deployment",
            "Mobile-first UX optimization",
        ],

        gallery: [
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Macbook-Air-academy.gta-it.com.png", captionFr: "Homepage desktop", captionEn: "Desktop homepage", kind: "ui" },
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/iPhone-13-PRO-academy.gta-it.com.png", captionFr: "Parcours mobile", captionEn: "Mobile journey", kind: "ui" },
        ],

        diagrams: [
            {
                id: "academy-flow",
                titleFr: "Parcours conversion",
                titleEn: "Conversion flow",
                mermaid: `flowchart LR
  Visit[Landing] --> Offers[Training Offers]
  Offers --> Events[Events]
  Events --> Contact[Contact / Register]
  Contact --> CRM[Lead Capture]
  FE[React] --> API[Node API]
  API --> Mongo[(MongoDB)]`,
            },
        ],

        resources: [
            { labelFr: "Site live", labelEn: "Live site", url: "https://academy.gta-it.com/", type: "other" },
        ],

        milestones: [
            { labelFr: "Kickoff & wireframes", labelEn: "Kickoff & wireframes", date: "J1–J2" },
            { labelFr: "Build + contenus", labelEn: "Build + content", date: "J3–J5" },
            { labelFr: "Go-live", labelEn: "Go-live", date: "J7" },
        ],

        scopeFr: ["Site conversion centre de formation", "Présentation multi-offres", "Événements + contact", "Déploiement rapide"],
        scopeEn: ["Training-center conversion site", "Multi-offer presentation", "Events + contact", "Fast deployment"],
        nonGoalsFr: ["LMS complet", "Paiement en ligne formations"],
        nonGoalsEn: ["Full LMS", "Online course payments"],

        decisions: [
            {
                titleFr: "Time-to-market en 1 semaine",
                titleEn: "One-week time-to-market",
                decisionFr: "Scope ultra-focalisé conversion.",
                decisionEn: "Ultra-focused conversion scope.",
                rationaleFr: "Priorité acquisition des premiers apprenants.",
                rationaleEn: "Priority: acquire the first learners.",
            },
        ],

        securityFr: ["Validation formulaires", "HTTPS / headers de base", "Séparation env de déploiement"],
        securityEn: ["Form validation", "HTTPS / baseline headers", "Separated deploy environments"],
        infraFr: ["React frontend", "Node/Express + MongoDB", "Vercel / VPS", "CI/CD"],
        infraEn: ["React frontend", "Node/Express + MongoDB", "Vercel / VPS", "CI/CD"],

        externalLinks: [
            { labelFr: "academy.gta-it.com", labelEn: "academy.gta-it.com", url: "https://academy.gta-it.com/" },
        ],

        testimonial: {
            quoteFr: "En une semaine, on avait une vitrine crédible pour convertir les premiers leads formation.",
            quoteEn: "In one week we had a credible presence to convert the first training leads.",
            author: "GTA Academy",
            roleFr: "Direction",
            roleEn: "Leadership",
            company: "GTA-Academy",
        },

        lessonsFr: [
            "Un scope court force les arbitrages utiles.",
            "Mobile-first est non négociable pour l'acquisition locale.",
            "Mieux vaut un go-live simple qu'un LMS incomplet.",
        ],
        lessonsEn: [
            "A short scope forces useful tradeoffs.",
            "Mobile-first is non-negotiable for local acquisition.",
            "A simple go-live beats an incomplete LMS.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/iPhone-13-PRO-academy.gta-it.com.png",
                afterSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Macbook-Air-academy.gta-it.com.png",
                captionFr: "D'une absence digitale à un site conversion prêt à convertir.",
                captionEn: "From no digital presence to a conversion-ready site.",
            },
        ],

        isFeatured: false,
    },

    {
        id: 13,
        titleFr: "K&C Services - Site Vitrine Premium pour Agence Marketing & Production Audiovisuelle",
        titleEn: "K&C Services - Premium Showcase Website for a Marketing & Audiovisual Agency",

        descriptionFr: "Conception et livraison d’un site vitrine premium pour K&C Services, pensé pour projeter une image haut de gamme, crédible et familière, sans sur-ingénierie inutile côté backend.",
        descriptionEn: "Design and delivery of a premium showcase website for K&C Services, crafted to project a high-end, credible, and familiar brand image without unnecessary backend overengineering.",

        fullDescriptionFr: "K&C Services m’a sollicité pour concevoir une vitrine digitale réellement premium pour leur agence de marketing digital et de production audiovisuelle. L’objectif n’était pas de faire un simple site décoratif, mais une présence web capable d’inspirer confiance dès les premières secondes, de refléter le positionnement de l’agence, et de mettre en valeur ses offres avec sobriété, impact et cohérence visuelle.\n\nLe contexte de départ était imparfait : peu d’informations structurées, peu d’assets prêts à l’emploi, et un besoin pourtant élevé de qualité perçue. Nous sommes donc partis de ce qui existait pour construire une première version très propre, claire et crédible, suffisamment solide pour servir de base de discussion avec le client. Une fois cette version 0 livrée, le client a progressivement partagé d’autres ressources utiles (photos, vidéos, références, informations complémentaires, réalisations), ce qui a entraîné plusieurs itérations successives.\n\nLe projet a été mené volontairement comme un frontend pur : aucun backend, aucune base de données, aucun backoffice n’ont été ajoutés, car cela n’apportait pas de valeur immédiate au besoin exprimé. Le bon choix ici était la simplicité opérationnelle : un site React + TypeScript performant, visuellement distinctif, avec quelques touches Three.js pour l’unicité, un excellent SEO, une chaîne de déploiement sérieuse, et une livraison proprement industrialisée.\n\nAprès plusieurs cycles de feedback, de corrections, d’améliorations et de raffinements, nous avons validé la version finale, quitté l’environnement de staging sur Vercel, puis déployé la production sur OVH VPS avec Cloudflare, Harbor, GitHub Actions, analytics et optimisations techniques complètes.",
        fullDescriptionEn: "K&C Services approached me to design a truly premium digital presence for their marketing and audiovisual production agency. The goal was not to ship a decorative brochure site, but a web presence able to inspire confidence within seconds, reflect the agency's positioning, and present its services with clarity, restraint, and visual impact.\n\nThe starting point was imperfect: limited structured information, few ready-to-use assets, and yet a strong need for high perceived quality. We therefore started from the little material already available to build a clean, credible version 0 that could serve as a strong discussion baseline. After that first delivery, the client progressively shared more useful resources (photos, videos, references, company details, completed work), which created several real feedback loops and delayed the final delivery by a few days.\n\nThe project was intentionally handled as a frontend-only delivery: no backend, no database, and no admin panel were added because they would not provide immediate value for the client's short-term needs. The right decision here was operational simplicity: a performant React + TypeScript site, a few Three.js touches for uniqueness, strong SEO, a serious deployment chain, and an overall polished execution.\n\nAfter several rounds of review, corrections, refinements, and stakeholder feedback, the final version was approved. We then moved out of the staging phase on Vercel and shipped production on OVH VPS with Cloudflare, Harbor, GitHub Actions, analytics, and final technical optimizations.",

        problemFr: "L’agence avait besoin d’une vitrine professionnelle, premium et crédible, mais sans matière initiale suffisamment structurée pour construire immédiatement un site riche et parfaitement informé.",
        problemEn: "The agency needed a premium, credible showcase website, but the initial material was not structured enough to immediately build a rich and well-informed site.",

        solutionFr: [
            "Conception d’une version 0 très propre pour matérialiser rapidement une direction visuelle et stratégique",
            "Choix assumé d’un frontend-only React + TypeScript, sans backend ni base de données inutiles",
            "Ajout mesuré de Three.js pour singulariser l’expérience sans dégrader la lisibilité",
            "Processus itératif de livraison et d’intégration progressive des nouveaux assets du client",
            "Industrialisation du déploiement avec GitHub Actions, Harbor, OVH VPS et Cloudflare",
            "Optimisation SEO poussée, analytics, performances et finition production",
        ],
        solutionEn: [
            "Built a very polished version 0 early to materialize a strong visual and strategic direction",
            "Deliberately chose a frontend-only React + TypeScript stack, with no unnecessary backend or database",
            "Added measured Three.js touches to create uniqueness without hurting clarity",
            "Ran an iterative delivery process while progressively integrating new client assets",
            "Industrialized deployment through GitHub Actions, Harbor, OVH VPS, and Cloudflare",
            "Pushed SEO, analytics, performance, and production refinements to a high standard",
        ],

        challengesFr: [
            "Travailler avec peu d’informations structurées au démarrage",
            "Absorber plusieurs vagues de feedback et de nouveaux assets tardifs",
            "Maintenir une image premium sans tomber dans le tape-à-l’œil",
            "Conserver un excellent niveau de performance malgré les éléments visuels différenciants",
            "Faire les bons arbitrages de simplicité technique face au besoin réel du client",
        ],
        challengesEn: [
            "Working with limited structured information at the beginning",
            "Absorbing multiple rounds of feedback and late-arriving assets",
            "Keeping a premium image without becoming flashy or vulgar",
            "Maintaining strong performance despite distinctive visual elements",
            "Making the right simplicity tradeoffs based on actual client needs",
        ],

        impactFr: [
            "Livraison d’une vitrine premium alignée au positionnement de l’agence",
            "Amélioration nette de la crédibilité perçue et de la qualité de présentation",
            "Mise en place d’une base web durable, facile à faire évoluer côté contenu",
            "Déploiement continu sérieux et SEO déjà très bien optimisé dès la mise en production",
            "Validation client positive avec félicitations explicites du responsable communication",
        ],
        impactEn: [
            "Delivered a premium showcase aligned with the agency’s positioning",
            "Clearly improved perceived credibility and presentation quality",
            "Established a durable web foundation that can evolve easily on the content side",
            "Set up a serious continuous delivery workflow and strong SEO from day one in production",
            "Received explicit positive feedback and congratulations from the communication lead",
        ],

        metrics: {
            "delivery": "2 weeks",
            "team": "Solo delivery",
            "type": "Frontend only",
            "seo": "100/100 PSI SEO",
            "performance": "93/100 desktop",
            "iterations": "Multiple client review loops",
        },

        techStack: {
            frontend: ["React", "TypeScript", "Tailwind CSS", "Three.js", "React Router"],
            backend: [],
            database: [],
            devops: ["GitHub Actions", "Harbor", "OVH VPS", "Cloudflare", "Nginx", "Vercel (staging)"],
        },

        architecture: [
            "Single-page frontend architecture focused on marketing and presentation",
            "No backend / no database by design to avoid unnecessary complexity",
            "Distinctive visual layer with targeted Three.js usage for uniqueness",
            "Static/frontend-first SEO strategy with production performance tuning",
            "Staging on Vercel before final production rollout on OVH VPS",
        ],

        testing: [
            "Cross-device visual review during iteration loops",
            "SEO and performance validation before production rollout",
            "Final client review passes before production deployment",
        ],

        images: [
            "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-17%2009-09-27.png",
            "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-17%2009-10-33.png",
            "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-17%2009-10-52.png",
            "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-17%2009-11-07.png",
            "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-03-15.png",
            "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-03-42.png",
            "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-04-10.png",
            "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-04-57.png",
            "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-05-04.png",
        ],

        preview: "https://ketc-services.com",
        videoDemo: "",

        category: "Frontend • Marketing Website • SEO",
        status: "Production",
        complexity: "Intermédiaire",
        role: "Frontend Developer",
        teamSize: 1,

        duration: "2 semaines",
        date: "Mai 2026",

        github: "https://github.com/barthez-kenwou/kc-services",
        demo: "https://ketc-services.com",

        businessContextFr: "Projet de vitrine stratégique visant à doter K&C Services d’une présence web premium, crédible et cohérente avec son image d’agence marketing et audiovisuelle.",
        businessContextEn: "Strategic showcase project aimed at giving K&C Services a premium web presence consistent with its image as a digital marketing and audiovisual agency.",

        confidential: false,

        responsibilitiesFr: [
            "Cadrage du besoin et retours sur le cahier de charge",
            "Conception et développement complet du frontend",
            "Construction de la version 0, puis itérations successives selon les feedbacks client",
            "Intégration progressive des nouveaux contenus fournis tardivement",
            "Déploiement staging puis production, SEO, analytics et finitions techniques",
        ],
        responsibilitiesEn: [
            "Requirement framing and feedback on the initial brief",
            "End-to-end frontend design and implementation",
            "Built version 0 first, then iterated through several client review loops",
            "Progressively integrated late client-provided content and assets",
            "Handled staging, production rollout, SEO, analytics, and final technical polish",
        ],

        videos: [],

        gallery: [
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-17%2009-09-27.png",
                captionFr: "Hero premium et ton de marque dès l’arrivée",
                captionEn: "Premium hero and immediate brand tone",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-17%2009-10-33.png",
                captionFr: "Section réalisations avec identité visuelle forte",
                captionEn: "Projects section with strong visual identity",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-17%2009-10-52.png",
                captionFr: "Narration visuelle et hiérarchie de contenu",
                captionEn: "Visual storytelling and content hierarchy",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-17%2009-11-07.png",
                captionFr: "Résultat SEO / performance déjà très solide",
                captionEn: "Already strong SEO / performance outcome",
                kind: "metric",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-00-01.png",
                captionFr: "Page À propos — organigramme et structure d’équipe",
                captionEn: "About page — org chart and team structure",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-02-11.png",
                captionFr: "Présentation de l’agence et direction visuelle",
                captionEn: "Agency presentation and visual direction",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-03-15.png",
                captionFr: "Organigramme complet des pôles K&C",
                captionEn: "Full K&C department org chart",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-03-42.png",
                captionFr: "Page Services — trois pôles, une obsession de résultat",
                captionEn: "Services page — three pillars, one performance obsession",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-03-54.png",
                captionFr: "Pôle 01 — Production audiovisuelle",
                captionEn: "Pillar 01 — Audiovisual production",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-04-00.png",
                captionFr: "Pôle 02 — Diffusion & annonce publicitaire",
                captionEn: "Pillar 02 — Advertising & broadcasting",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-04-10.png",
                captionFr: "Réalisations — campagnes Frutas et Intelek BTP",
                captionEn: "Work — Frutas campaign and Intelek BTP",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-04-25.png",
                captionFr: "Réalisations — voix off studio et pilotage projet",
                captionEn: "Work — studio voice-over and project coordination",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-04-31.png",
                captionFr: "Réalisations — animation événementielle et reportage",
                captionEn: "Work — event hosting and seminar coverage",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-04-51.png",
                captionFr: "Page Contact — promesse de réponse sous 24 h",
                captionEn: "Contact page — 24h response promise",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-04-57.png",
                captionFr: "Formulaire de contact et canaux directs",
                captionEn: "Contact form and direct channels",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-05-04.png",
                captionFr: "Résultats agrégés — KPIs de crédibilité",
                captionEn: "Aggregated results — credibility KPIs",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-05-18.png",
                captionFr: "Section Pourquoi nous — proposition de valeur",
                captionEn: "Why us section — value proposition",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-05-23.png",
                captionFr: "Lecture light mode de la proposition de valeur",
                captionEn: "Light-mode reading of the value proposition",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-05-47.png",
                captionFr: "Arborescence racine — Vite, Docker, Nginx, CI",
                captionEn: "Root tree — Vite, Docker, Nginx, CI",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-06-39.png",
                captionFr: "Structure src/ — pages, composants, data, hooks",
                captionEn: "src/ structure — pages, components, data, hooks",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-16-56.png",
                captionFr: "Pages du site — Accueil, Services, Réalisations, Contact",
                captionEn: "Site pages — Home, Services, Work, Contact",
                kind: "infra",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-17-27.png",
                captionFr: "Pipeline Deploy — Cosign, production, notification",
                captionEn: "Deploy pipeline — Cosign, production, notification",
                kind: "process",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-17-52.png",
                captionFr: "Pipeline CI — quality gate, SonarQube, secret scan",
                captionEn: "CI pipeline — quality gate, SonarQube, secret scan",
                kind: "process",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-20-36.png",
                captionFr: "Détail d’exécution du workflow GitHub Actions",
                captionEn: "GitHub Actions workflow execution detail",
                kind: "process",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-23-38.png",
                captionFr: "Preuve de déploiement continu en production",
                captionEn: "Evidence of continuous production deployment",
                kind: "process",
            },
        ],

        diagrams: [
            {
                id: "kc-delivery-flow",
                titleFr: "Processus de delivery projet",
                titleEn: "Project delivery process",
                mermaid: `flowchart LR
  Brief[Cahier de charge] --> Analysis[Analyse + retours]
  Analysis --> V0[Version 0]
  V0 --> Assets[Le client fournit de nouveaux assets]
  Assets --> Review1[Feedback 1]
  Review1 --> Rework1[Corrections]
  Rework1 --> Review2[Feedback 2]
  Review2 --> Rework2[Corrections]
  Rework2 --> FinalReview[Validation finale]
  FinalReview --> Staging[Vercel staging]
  Staging --> Prod[OVH VPS production]`,
            },
            {
                id: "kc-deployment",
                titleFr: "Déploiement continu",
                titleEn: "Continuous deployment",
                mermaid: `flowchart LR
  Push[GitHub push] --> CI[GitHub Actions]
  CI --> Build[Build frontend]
  Build --> Harbor[Harbor registry]
  Harbor --> Deploy[OVH VPS deploy]
  Deploy --> Nginx[Nginx runtime]
  Cloudflare[Cloudflare] --> Nginx
  Analytics[Plausible Analytics] --> Site[Production site]`,
            },
        ],

        resources: [
        ],

        milestones: [
            {
                labelFr: "Analyse du brief",
                labelEn: "Brief analysis",
                date: "Semaine 1",
                descriptionFr: "Lecture du cahier de charge, retours et cadrage de la direction du site.",
                descriptionEn: "Reviewed the brief, gave feedback, and aligned on the site's direction.",
            },
            {
                labelFr: "Livraison version 0",
                labelEn: "Version 0 delivery",
                date: "Semaine 1",
                descriptionFr: "Première base premium construite avec les informations initialement disponibles.",
                descriptionEn: "Built the first premium baseline using the initially available information.",
            },
            {
                labelFr: "Boucles de feedback",
                labelEn: "Feedback loops",
                date: "Semaine 2",
                descriptionFr: "Plusieurs allers-retours avec le client après arrivée tardive de nouveaux assets et demandes.",
                descriptionEn: "Multiple client review loops after late asset delivery and new requests.",
            },
            {
                labelFr: "Go-live production",
                labelEn: "Production go-live",
                date: "Mai 2026",
                descriptionFr: "Sortie de staging, optimisation SEO/perf, analytics, puis déploiement final sur OVH VPS.",
                descriptionEn: "Left staging, optimized SEO/performance, added analytics, and deployed to OVH VPS.",
            },
        ],

        scopeFr: [
            "Vitrine premium orientée image de marque et crédibilité",
            "Frontend-only avec expérience soignée et identité forte",
            "SEO technique et optimisation des performances",
            "Chaîne de staging et déploiement continu sérieuse",
        ],
        scopeEn: [
            "Premium showcase focused on brand image and credibility",
            "Frontend-only delivery with polished UX and strong identity",
            "Technical SEO and performance optimization",
            "Serious staging and continuous deployment workflow",
        ],
        nonGoalsFr: [
            "Backoffice d’administration",
            "Backend métier ou base de données",
            "Complexité technique non demandée par le besoin client",
        ],
        nonGoalsEn: [
            "Admin backoffice",
            "Business backend or database",
            "Technical complexity not justified by the client need",
        ],

        decisions: [
            {
                titleFr: "Frontend-only assumé",
                titleEn: "Deliberate frontend-only approach",
                decisionFr: "Aucun backend ni base de données n’a été ajouté.",
                decisionEn: "No backend or database was added.",
                rationaleFr: "Le client n’en avait pas besoin à court terme, et cela n’était ni utile ni inclus dans la demande.",
                rationaleEn: "The client did not need it in the short term, and it was neither useful nor part of the request.",
            },
            {
                titleFr: "Version 0 rapide puis itérations",
                titleEn: "Fast version 0 then iterations",
                decisionFr: "Livrer tôt une base premium pour débloquer les feedbacks et les assets manquants.",
                decisionEn: "Deliver an early premium baseline to unlock feedback and missing assets.",
                rationaleFr: "Le niveau d’information initial était trop faible pour viser une version finale directement.",
                rationaleEn: "The initial level of information was too limited to aim for a final version immediately.",
            },
            {
                titleFr: "Sortie staging puis prod durcie",
                titleEn: "Staging first, hardened production later",
                decisionFr: "Passage par Vercel pour itérer vite, puis production OVH VPS + Cloudflare.",
                decisionEn: "Used Vercel for fast iteration, then moved to OVH VPS + Cloudflare for production.",
                rationaleFr: "Séparer vitesse de validation et qualité d’exploitation finale.",
                rationaleEn: "Separate validation speed from final operational quality.",
            },
        ],

        securityFr: [
            "Cloudflare devant l’origine en production",
            "Pipeline de déploiement continu proprement industrialisé",
            "Configuration production durcie autour de l’hébergement VPS",
            "Analytics ajoutée sans alourdir inutilement l’expérience",
        ],
        securityEn: [
            "Cloudflare in front of the production origin",
            "Cleanly industrialized continuous deployment workflow",
            "Hardened production setup around VPS hosting",
            "Analytics added without unnecessarily degrading the experience",
        ],

        infraFr: [
            "Staging sur Vercel pour les cycles de validation rapides",
            "Production sur OVH VPS",
            "GitHub Actions + Harbor pour la chaîne de livraison",
            "Cloudflare pour l’exposition et l’optimisation périphérique",
        ],
        infraEn: [
            "Vercel staging for fast validation cycles",
            "Production on OVH VPS",
            "GitHub Actions + Harbor for the delivery chain",
            "Cloudflare for edge exposure and optimization",
        ],

        externalLinks: [
            {
                labelFr: "Repository GitHub",
                labelEn: "GitHub repository",
                url: "https://github.com/barthez-kenwou/kc-services",
            },
            {
                labelFr: "Site live",
                labelEn: "Live site",
                url: "https://ketc-services.com",
            },
        ],

        testimonial: {
            quoteFr: "Le résultat final reflète exactement l’image professionnelle que nous voulions projeter. Merci pour la qualité du travail.",
            quoteEn: "The final result reflects exactly the professional image we wanted to project. Thank you for the quality of the work.",
            author: "Arnold TCHIO",
            roleFr: "Responsable communication",
            roleEn: "Communication Lead",
            company: "K&C Services",
        },

        lessonsFr: [
            "Un client peut avoir plus de matière qu’il ne le pense au démarrage ; il faut concevoir un process qui absorbe cela.",
            "Une version 0 bien pensée sert autant d’outil de delivery que d’outil de clarification métier.",
            "Ne pas ajouter de backend est parfois la décision la plus professionnelle.",
        ],
        lessonsEn: [
            "A client often has more material than they initially surface; the process must absorb that reality.",
            "A well-crafted version 0 is both a delivery artifact and a business clarification tool.",
            "Not adding a backend is sometimes the most professional decision.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2011-22-24.png",
                afterSrc: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-17%2009-09-27.png",
                captionFr: "D’une intention de vitrine à une présence premium réellement crédible.",
                captionEn: "From a showcase intention to a truly credible premium presence.",
            },
        ],

        isFeatured: false,
    },
];     