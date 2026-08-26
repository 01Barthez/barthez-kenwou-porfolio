import { IProject } from '../../model/project.types';

export const projectsData: IProject[] = [

    {
        id: 1,
        titleFr: "NEXUS - ERP SaaS modulaire pour la restauration",
        titleEn: "NEXUS - Modular SaaS ERP for restaurants",

        descriptionFr: "ERP SaaS multi-tenant porté par ZENORA : modules activables à la demande, offline-first, paiements locaux, conçu pour toutes tailles de restaurants et tous appareils.",
        descriptionEn: "Multi-tenant SaaS ERP by ZENORA: on-demand modules, offline-first, local payments, built for every restaurant size and every device.",

        fullDescriptionFr: `NEXUS est un ERP SaaS de gestion de restaurants conçu et développé au sein de l'ESN ZENORA. La philosophie produit est simple : le restaurateur n'active que les modules dont il a besoin - chaque module est un ensemble de fonctionnalités qui résout un besoin métier précis (POS, menu, cuisine, stocks, RH, etc.).

Le parcours utilisateur est pensé de bout en bout : découverte sur la vitrine marketing, authentification (email/password, OAuth2, WhatsApp), choix de plan (essai ou achat avec paiement), onboarding du restaurant, puis entrée dans l'ERP. Une fois dedans, les modules inclus dans la formule sont disponibles ; le marketplace permet d'acheter et configurer des modules additionnels selon l'évolution du besoin.

Techniquement, NEXUS repose sur un monolithe modulaire Turborepo (pnpm workspaces) pensé pour une éventuelle extraction microservices plus tard. Surfaces : portail marketing (Next.js), ERP web (thin app), backoffice super-admin, API Fastify. Isolation multi-tenant en schema-per-tenant PostgreSQL (public pour plateforme/billing/auth, t_{slug} pour le métier via Kysely). Le kernel charge dynamiquement les modules activés. Socle offline-first (Dexie + sync push/pull) pour le terrain. Billing abstrait (Stripe + Flutterwave / Mobile Money) avec activation uniquement via webhooks.

Je suis à l'origine de l'architecture globale et de la conception/implémentation de la quasi-totalité des cœurs plateforme (auth, database, billing, kernel, sync, search, events, caching, storage, queue, scheduler, AI, …), ainsi que des modules dashboard et menu - le socle sur lequel l'équipe étend le produit.`,
        fullDescriptionEn: `NEXUS is a restaurant SaaS ERP designed and built at the ZENORA digital services company. The product philosophy is simple: restaurant owners enable only the modules they need - each module is a feature set that solves a precise business need (POS, menu, kitchen, inventory, HR, etc.).

The user journey is end-to-end: marketing site discovery, authentication (email/password, OAuth2, WhatsApp), plan selection (trial or paid checkout), restaurant onboarding, then ERP entry. Inside the product, plan-included modules are available; the marketplace lets operators buy and configure additional modules as needs evolve.

Technically, NEXUS is a Turborepo modular monolith (pnpm workspaces) designed so microservices extraction remains possible later. Surfaces: marketing portal (Next.js), web ERP (thin app), super-admin backoffice, Fastify API. Multi-tenant isolation via PostgreSQL schema-per-tenant (public for platform/billing/auth, t_{slug} for business data via Kysely). The kernel dynamically loads enabled modules. Offline-first foundation (Dexie + push/pull sync) for floor operations. Abstracted billing (Stripe + Flutterwave / Mobile Money) with activation only via webhooks.

I originated the overall architecture and designed/implemented nearly all platform cores (auth, database, billing, kernel, sync, search, events, caching, storage, queue, scheduler, AI, …), plus the dashboard and menu modules - the foundation the team extends.`,

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
            "Offline-first réel (événements, conflits, idempotence) - pas un simple cache PWA",
            "Billing SaaS abstrait multi-providers + add-ons modules via marketplace",
            "Thin app ERP : navigation et shell dynamiques selon modules installés",
            "Maintenir vélocité d'équipe à 4 tout en posant des fondations long terme",
            "Documenter ADRs, registry ~45 modules et phases d'exécution avant code massif",
        ],
        challengesEn: [
            "Design an Odoo-like module kernel without day-1 microservices complexity",
            "Reliable multi-tenant isolation (schema switching, pool, N-schema migrations)",
            "Real offline-first (events, conflicts, idempotency) - not a naive PWA cache",
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
            "Event bus in-process (@nexus/core-events) - pas d'appels directs module→module",
            "Offline-first : journal d'événements local + SyncEngine + projections cloud",
            "Billing engine abstrait (Stripe / Flutterwave / mock) - activation via webhooks uniquement",
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
                captionFr: "Logo NEXUS - marque produit ZENORA",
                captionEn: "NEXUS logo - ZENORA product mark",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-brand-02.png",
                captionFr: "Slide de couverture - présentation business ZENORA",
                captionEn: "Cover slide - ZENORA business presentation",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-brand-01.png",
                captionFr: "Sept piliers produit - modularité, offline, multi-device, Afrique",
                captionEn: "Seven product pillars - modularity, offline, multi-device, Africa",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-brand-03.png",
                captionFr: "Cartographie modules - hub NEXUS et domaines métier",
                captionEn: "Module map - NEXUS hub and business domains",
                kind: "diagram",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-brand-04.png",
                captionFr: "Plans & tarification - Starter à Enterprise",
                captionEn: "Plans & pricing - Starter to Enterprise",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-product-concept-01.png",
                captionFr: "Matrice concurrentielle - Mobile Money, offline, entrée à 0€",
                captionEn: "Competitive matrix - Mobile Money, offline, €0 entry",
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
                captionFr: "Direction artistique - univers visuel produit",
                captionEn: "Art direction - product visual universe",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-visual-01.png",
                captionFr: "Illustration métier - table, commandes et paiement",
                captionEn: "Domain illustration - table, orders and payment",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-visual-02.png",
                captionFr: "Illustration multi-canal - KDS cuisine et commande mobile",
                captionEn: "Multi-channel illustration - kitchen KDS and mobile order",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-visual-03.png",
                captionFr: "Illustration parcours - commande digitale vers service en salle",
                captionEn: "Journey illustration - digital order to table service",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-visual-04.png",
                captionFr: "Illustration réservation - pont entre booking digital et salle",
                captionEn: "Reservation illustration - digital booking to dining room",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-visual-05.png",
                captionFr: "Illustration multi-device - pilotage restaurant sur tablette",
                captionEn: "Multi-device illustration - restaurant ops on tablet",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-device-mock.png",
                captionFr: "Mockup device - expérience restauration sur écran tactile",
                captionEn: "Device mockup - restaurant experience on touchscreen",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-marketing-landing.png",
                captionFr: "Navigation modulaire - badges commandes, réservations, stocks",
                captionEn: "Modular navigation - orders, reservations, stock badges",
                kind: "diagram",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-marketplace-modules.png",
                captionFr: "Marketplace - catalogue modules POS, commandes, réservations",
                captionEn: "Marketplace - POS, orders, reservations module catalog",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-erp-dashboard-shell.png",
                captionFr: "Shell ERP - sidebar organisée par pôles métier",
                captionEn: "ERP shell - sidebar organized by business domains",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-sidebar-modules.png",
                captionFr: "Vitrine marketing - hero et preview du dashboard ERP",
                captionEn: "Marketing site - hero and ERP dashboard preview",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-ui-extra-02.png",
                captionFr: "Module Menu (dark) - catégories et états d’erreur API",
                captionEn: "Menu module (dark) - categories and API error states",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-dashboard-header.png",
                captionFr: "Header ERP - recherche globale, multi-sites, export données",
                captionEn: "ERP header - global search, multi-site, data export",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-menu-module-light.png",
                captionFr: "Module Menu (light) - carte, sync POS offline, import CSV",
                captionEn: "Menu module (light) - catalog, offline POS sync, CSV import",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-menu-module-light-2.png",
                captionFr: "Module Menu - création d’article et sync snapshot POS",
                captionEn: "Menu module - item creation and POS snapshot sync",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-github-repo.png",
                captionFr: "Module Menu (light, Premium) - onglet Carte et nouvel article",
                captionEn: "Menu module (light, Premium) - Catalog tab and new item",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-menu-categories-dark.png",
                captionFr: "Module Menu (dark) - gestion des catégories",
                captionEn: "Menu module (dark) - category management",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-ui-extra-01.png",
                captionFr: "Module Menu (dark) - formulaire nouvelle catégorie",
                captionEn: "Menu module (dark) - new category form",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-menu-carte-akenx.png",
                captionFr: "Tenant Akenx - gestion de la carte et des articles",
                captionEn: "Akenx tenant - menu catalog and items",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-menu-disponibilites.png",
                captionFr: "Module Menu - onglet disponibilités (plages et canaux)",
                captionEn: "Menu module - availability tab (slots and channels)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-ui-extra-03.png",
                captionFr: "Module Menu - placeholder disponibilités par canal",
                captionEn: "Menu module - per-channel availability placeholder",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-user-profile.png",
                captionFr: "Compte utilisateur - profil, rôles et collaborateurs",
                captionEn: "User account - profile, roles and collaborators",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-ui-extra-04.png",
                captionFr: "Compte utilisateur (Akenx) - informations personnelles et fuseau",
                captionEn: "User account (Akenx) - personal info and timezone",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-supabase-tenants.png",
                captionFr: "PostgreSQL - schémas tenants (t_demo-restaurant, t_barthez…)",
                captionEn: "PostgreSQL - tenant schemas (t_demo-restaurant, t_barthez…)",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-api-logs-tenant.png",
                captionFr: "Logs API - résolution tenant Kysely et routes kernel",
                captionEn: "API logs - tenant Kysely resolution and kernel routes",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-product-concept-02.png",
                captionFr: "Monorepo racine - apps, core, modules, packages, infra, Turbo",
                captionEn: "Root monorepo - apps, core, modules, packages, infra, Turbo",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-product-concept-04.png",
                captionFr: "Packages partagés - auth, sdk, offline-client, ui, validators…",
                captionEn: "Shared packages - auth, sdk, offline-client, ui, validators…",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-product-concept-05.png",
                captionFr: "Dossier modules/ - domaines métier isolés (POS, menu, kitchen…)",
                captionEn: "modules/ folder - isolated domains (POS, menu, kitchen…)",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-product-concept-06.png",
                captionFr: "Arborescence modules - 11 packages métier sous kernel",
                captionEn: "Modules tree - 11 domain packages under the kernel",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-web-dev-logs.png",
                captionFr: "Dev monorepo - checkout billing multi-devises et auth proxy",
                captionEn: "Monorepo dev - multi-currency billing checkout and auth proxy",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-github-private.png",
                captionFr: "Dépôt ZENORA-360/Nexus-ERP - stack, tags et structure monorepo",
                captionEn: "ZENORA-360/Nexus-ERP repo - stack, tags and monorepo layout",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-husky-hooks.png",
                captionFr: "Hooks Git Husky - pre-commit, pre-push, commit-msg",
                captionEn: "Husky Git hooks - pre-commit, pre-push, commit-msg",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/nexus/nexus-husky-tree.png",
                captionFr: "Arborescence .husky - garde-fous qualité avant merge",
                captionEn: ".husky tree - quality gates before merge",
                kind: "process",
            },
        ],

        diagrams: [
            {
                id: "nexus-system-overview",
                titleFr: "Vue système - apps, API, données",
                titleEn: "System overview - apps, API, data",
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
                titleFr: "Kernel - découverte et activation modules",
                titleEn: "Kernel - module discovery and activation",
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
                titleFr: "Marketplace - achat et activation module",
                titleEn: "Marketplace - purchase and activate module",
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
                titleFr: "Offline-first - events, sync, projections",
                titleEn: "Offline-first - events, sync, projections",
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
                titleFr: "Billing SaaS - essai, checkout, webhooks",
                titleEn: "SaaS billing - trial, checkout, webhooks",
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
                titleFr: "Authentification - couches et tokens",
                titleEn: "Authentication - layers and tokens",
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
                titleFr: "Phase 0 - journée de service",
                titleEn: "Phase 0 - service day flow",
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
                titleFr: "Séquence - flux d'authentification",
                titleEn: "Sequence - authentication flow",
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
                titleFr: "Séquence - journée de service",
                titleEn: "Sequence - service day flow",
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
            "Remplacer la comptabilité Odoo/Sage - intégration / export privilégiés",
            "Hardware POS propriétaire",
            "IA vitrine avant données opérationnelles réelles (IA sous le capot en P3)",
            "45 modules UI complets sans backend - vertical slices livrables d'abord",
        ],
        nonGoalsEn: [
            "Day-1 microservices (progressive extraction only)",
            "Replacing Odoo/Sage accounting - prefer integration / export",
            "Proprietary POS hardware",
            "Showcase AI before real operational data (under-the-hood AI in P3)",
            "45 full UI modules without backend - ship vertical slices first",
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
            "Isolation schema-per-tenant - aucune fuite possible par oubli de filtre tenant_id",
            "Auth multi-canal : JWT access/refresh, sessions, RBAC granulaire, OAuth2, WhatsApp",
            "BFF sécurisé (cookies HttpOnly, CSRF) via @nexus/auth-session",
            "Secrets centralisés (Infisical) - zéro secret en clair dans le repo",
            "Feature flags (Flagsmith) pour exposer progressivement les capacités sensibles",
            "Billing : webhooks signés (Stripe / Flutterwave) ; activation jamais côté navigateur",
            "Audit trail plateforme + soft-delete tenant avec rétention et purge contrôlée",
            "Chaîne DevSecOps : gitleaks, SAST/SCA, image scanning, policies admission K8s",
            "TLS de bout en bout, chiffrement au repos (volumes / object storage), rotation des clés",
            "Segmentation réseau (private subnets), least-privilege IAM, WAF / Cloudflare en frontal",
            "Conformité RGPD native (consentement, export, droit à l’oubli) et journalisation d’accès",
        ],
        securityEn: [
            "Schema-per-tenant isolation - no data leak from a forgotten tenant_id filter",
            "Multi-channel auth: JWT access/refresh, sessions, granular RBAC, OAuth2, WhatsApp",
            "Secure BFF (HttpOnly cookies, CSRF) via @nexus/auth-session",
            "Centralized secrets (Infisical) - zero plaintext secrets in the repo",
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
            "Sur un ERP multi-tenant, l’architecture et les contrats (kernel, DDL, billing) doivent précéder la densité fonctionnelle - sinon chaque module devient une dette structurelle.",
            "Le schema-per-tenant impose une discipline opérationnelle (migrations N schémas, pool, search_path) ; c’est le prix d’une isolation réellement auditable.",
            "Offline-first en restauration n’est pas un cache : sans journal d’événements, résolution de conflits et vérité cloud autoritative, le terrain casse le produit.",
            "Un marketplace de modules n’a de sens que si le provisionnement tenant, le pricing et l’activation partagent le même pipeline (checkout → webhook → installed_modules).",
            "Thin app + manifests : la complexité initiale se rentabilise dès que la navigation, les permissions et le bundle suivent l’état réel des modules installés.",
            "Documenter les ADR et le registry avant d’accélérer le delivery évite de scaler une ambiguïté - la vélocité d’une équipe de quatre dépend de décisions écrites.",
        ],
        lessonsEn: [
            "On a multi-tenant ERP, architecture and contracts (kernel, DDL, billing) must precede feature density - otherwise every module becomes structural debt.",
            "Schema-per-tenant demands operational discipline (N-schema migrations, pool, search_path); that is the cost of truly auditable isolation.",
            "Restaurant offline-first is not a cache: without an event journal, conflict resolution and an authoritative cloud truth, the floor breaks the product.",
            "A module marketplace only works if tenant provisioning, pricing and activation share one pipeline (checkout → webhook → installed_modules).",
            "Thin app + manifests: early complexity pays off once navigation, permissions and bundling follow the real installed-module state.",
            "Writing ADRs and the registry before accelerating delivery prevents scaling ambiguity - a four-person team’s velocity depends on written decisions.",
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
            titleFr: "GTA IT - Plateforme corporate PWA & backoffice ESN",
        titleEn: "GTA IT - Corporate PWA platform & ESN admin",

        descriptionFr: "Plateforme web professionnelle pour l'ESN Global Technology & Associates : vitrine d'expertise, génération de leads, recrutement, blog et pilotage des activités via backoffice.",
        descriptionEn: "Professional web platform for the IT services firm Global Technology & Associates: expertise showcase, lead generation, recruitment, blog, and operations steering via an admin backoffice.",

        fullDescriptionFr: "Conception et livraison solo de la plateforme digitale de lancement de GTA (Global Technology & Associates), ESN camerounaise en phase de montée en puissance. Le brief était clair : sortir une vitrine crédible, rapide et convaincante - à la fois preuve d'expertise technique et centre névralgique des activités (devis, recrutement, contact, blog, catalogue projets/services). En environ un mois, j'ai conçu l'architecture, le design system dark/light, les parcours conversion, le CMS backoffice, l'API Express/MongoDB et le déploiement Docker/Nginx avec CI/CD. Le résultat live sur gta-it.com a été explicitement salué par M. Gilles Tanko (CEO) - et sert depuis de référence commerciale et de preuve sociale face aux partenaires.",
        fullDescriptionEn: "Solo design and delivery of the launch digital platform for GTA (Global Technology & Associates), a Cameroonian IT services company scaling up. The brief was clear: ship a credible, fast, convincing showcase - both proof of technical expertise and the operational hub for activities (quotes, recruitment, contact, blog, projects/services catalog). In about one month I designed the architecture, dark/light design system, conversion journeys, admin CMS, Express/MongoDB API and Docker/Nginx deployment with CI/CD. The live result on gta-it.com was explicitly praised by Gilles Tanko (CEO) - and has since served as a commercial reference and social proof with partners.",

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
            "Status": "Production - gta-it.com",
        },

        techStack: {
            frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/UI", "Framer Motion", "Zustand", "React Router", "React Helmet Async", "i18next", "Zod", "React Hook Form", "Axios", "PWA"],
            backend: ["Node.js", "Express", "REST API", "JWT", "Zod"],
            database: ["MongoDB", "Redis"],
            devops: ["Docker", "Nginx", "GitHub Actions", "VPS", "Cloudflare", "Bun"],
        },

        architecture: [
            "SPA React/TypeScript (Vite + SWC) avec lazy routes et code splitting",
            "API Express séparée (api.gta-it.com) - MongoDB pour contenus/leads, Redis en cache",
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
                captionFr: "Identité GTA - wordmark et signature Global Technology & Associates",
                captionEn: "GTA identity - wordmark and Global Technology & Associates signature",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-hero-home.png",
                captionFr: "Hero Accueil - proposition de valeur et CTA devis",
                captionEn: "Home hero - value proposition and quote CTAs",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-splash-loading.png",
                captionFr: "Splash PWA - branding, citation et chargement animé",
                captionEn: "PWA splash - branding, quote and animated loading",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-home-projects.png",
                captionFr: "Home - carrousel projets récents (DHJ, e-commerce, Animal Scanner)",
                captionEn: "Home - recent projects carousel (DHJ, e-commerce, Animal Scanner)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-home-blog.png",
                captionFr: "Home - articles récents et positionnement expertise",
                captionEn: "Home - recent articles and thought-leadership positioning",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-about-team.png",
                captionFr: "À propos - équipe d'experts (CEO, CTO, Fullstack, Cyber, DevOps)",
                captionEn: "About - expert team (CEO, CTO, Fullstack, Cyber, DevOps)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-testimonials.png",
                captionFr: "Témoignages clients - carrousel social proof",
                captionEn: "Client testimonials - social-proof carousel",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-projects-grid.png",
                captionFr: "Galerie Projets - filtres, stack tags et case studies",
                captionEn: "Projects gallery - filters, stack tags and case studies",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-hero-cta.png",
                captionFr: "CTA conversion - devis gratuit et découverte services",
                captionEn: "Conversion CTA - free quote and services discovery",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-quote-form.png",
                captionFr: "Demande de devis multi-étapes - contact et type de service",
                captionEn: "Multi-step quote request - contact and service type",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-careers-apply.png",
                captionFr: "Carrière - candidature multi-étapes (profil professionnel)",
                captionEn: "Careers - multi-step application (professional profile)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-project-structure.png",
                captionFr: "Arborescence frontend - pages, stores Zustand, Cypress, PWA",
                captionEn: "Frontend tree - pages, Zustand stores, Cypress, PWA",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-github-repo.png",
                captionFr: "Dépôt privé gta - Docker, Nginx, Actions, docs",
                captionEn: "Private gta repo - Docker, Nginx, Actions, docs",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-pagespeed.png",
                captionFr: "PageSpeed Insights desktop - Perf 93, A11y 91, BP 92, SEO 92",
                captionEn: "PageSpeed Insights desktop - Perf 93, A11y 91, BP 92, SEO 92",
                kind: "metric",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-seo-serp.png",
                captionFr: "SERP Google - gta-it.com en tête sur agence IT Cameroun",
                captionEn: "Google SERP - gta-it.com ranking for Cameroon IT agency",
                kind: "metric",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/gta/gta-brand-overview.png",
                captionFr: "Fiche marque - services, contacts et ancrage Yaoundé",
                captionEn: "Brand card - services, contacts and Yaoundé footprint",
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
                titleFr: "Séquence - demande de devis",
                titleEn: "Sequence - quote request",
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
                titleFr: "Séquence - candidature carrière",
                titleEn: "Sequence - career application",
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
                titleFr: "Backoffice - pilotage contenus & leads",
                titleEn: "Admin - content & leads steering",
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
                titleFr: "CI/CD - build et déploiement",
                titleEn: "CI/CD - build and deploy",
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
                titleFr: "PWA - cache et offline",
                titleEn: "PWA - cache and offline",
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
            company: "GTA - Global Technology & Associates",
        },

        lessonsFr: [
            "Pour une ESN, le site corporate n'est pas une brochure : c'est un artefact commercial. Perf, SEO et craft UI sont des arguments de vente autant que le catalogue de services.",
            "Un funnel devis/carrière bien validé (Zod) bat une dizaine de pages marketing supplémentaires : chaque lead doit arriver propre en backoffice.",
            "Livrer solo en un mois impose de trancher tôt (SPA+PWA+VPS) et d'industrialiser le déploiement dès le premier build - sinon la 'dernière semaine' mange la qualité.",
            "i18n et dark/light ne sont pas du polish : ils élargissent immédiatement l'audience (local + international) et renforcent la perception premium.",
            "Le compliment du CEO ne valide pas seulement l'UI : il valide un système (acquisition + recrutement + contenu) aligné sur les priorités business du lancement.",
        ],
        lessonsEn: [
            "For an IT services firm, the corporate site is not a brochure: it is a commercial artifact. Perf, SEO and UI craft sell as hard as the service catalog.",
            "A well-validated quote/careers funnel (Zod) beats ten extra marketing pages: every lead must land clean in the admin.",
            "Solo delivery in one month forces early stack choices (SPA+PWA+VPS) and deployment industrialization from the first build - otherwise the 'last week' eats quality.",
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
        titleFr: "KAZA - Marketplace immobilière de confiance (Afrique)",
        titleEn: "KAZA - Trust-first real-estate marketplace (Africa)",

        descriptionFr: "Plateforme web & mobile pour trouver et publier un logement en Afrique : recherche gratuite pour les locataires, crédits bailleurs, IA anti-fraude et contact direct WhatsApp.",
        descriptionEn: "Web & mobile platform to find and publish housing in Africa: free search for seekers, landlord credits, AI anti-fraud and direct WhatsApp contact.",

        fullDescriptionFr: "KAZA (ex-CamerLog) est la plateforme immobilière de confiance conçue pour le marché camerounais et extensible à l'Afrique subsaharienne. Le projet répond à un problème quotidien : trouver un logement rapidement, sans arnaque aux frais de visite, sans opacité de prix, et sans intermédiaires opaques. Depuis mai 2026, une équipe de cinq personnes (deux développeurs dont moi en lead architecture / fullstack, produit, marketing et opérations) structure et développe un écosystème complet : application mobile React Native, plateforme web, API Fastify, montée de crédits Mobile Money (Orange / MTN), certification bailleur, moteur de recherche multi-filtres, et pipeline IA anti-fraude (doublons médias, prix aberrants, patterns de faux bailleurs). Locataires et diaspora cherchent gratuitement ; les bailleurs, agents et hôtels consomment des crédits pour publier. L'objectif : devenir le standard de confiance type Airbnb adapté aux réalités africaines, en démarrant sur Douala et Yaoundé.",
        fullDescriptionEn: "KAZA (formerly CamerLog) is the trust-first real-estate platform designed for the Cameroonian market and expandable across Sub-Saharan Africa. It tackles a daily problem: find housing fast, without visit-fee scams, price opacity, or opaque middlemen. Since May 2026, a five-person team (two developers including me as lead architect / fullstack, plus product, marketing and operations) has been structuring and building a full ecosystem: React Native mobile app, web platform, Fastify API, Mobile Money credit top-ups (Orange / MTN), landlord certification, multi-filter search, and an AI anti-fraud pipeline (media duplicates, outlier prices, fake-landlord patterns). Seekers and diaspora search for free; landlords, agents and hotels spend credits to publish. The goal: become the Airbnb-class trust standard adapted to African realities, starting in Douala and Yaounde.",

        problemFr: "Chaque mois, des milliers de personnes cherchent chambres, studios, maisons, boutiques ou séjours courts via WhatsApp et Facebook - un marché bruyant où se mêlent vraies annonces, plaques de rue et arnaques (frais de visite sans visite, faux logements, doublons). Les locataires peinent à filtrer et à contacter en confiance ; les bailleurs peinent à être trouvés rapidement. Il n'existe pas de plateforme dominante de confiance au Cameroun.",
        problemEn: "Every month, thousands look for rooms, studios, houses, shops or short stays via WhatsApp and Facebook - a noisy market mixing real listings, street signs and scams (visit fees with no visit, fake housing, duplicates). Seekers struggle to filter and contact with trust; landlords struggle to be found quickly. No dominant trust platform exists in Cameroon.",

        solutionFr: [
            "Marketplace dual-sided : recherche 100% gratuite pour le locataire / acheteur ; publication montée par crédits côté bailleur",
            "Fiches biens riches : photos/vidéos, commodités, frais (loyer, caution, visite), badges certifié / vérifié, map et reviews",
            "Mise en relation directe WhatsApp (et messagerie in-app) sans commission cachée",
            "Économie de crédits + packs Mobile Money (Orange Money / MTN MoMo) + option bailleur certifié",
            "Pipeline IA anti-fraude : hashing médias, détection doublons, cohérence prix/quartier, scoring TrustScore",
            "Stack moderne : React Native + web, API Fastify, PostgreSQL/Redis, cloud scalable Douala/Yaoundé → CEMAC",
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

        duration: "Mai 2026 – en cours",
        date: "Mai 2026 – présent",

        github: "",
        demo: "",

        businessContextFr: "Projet strategique pour digitaliser l'acces au logement au Cameroun (puis CEMAC / Afrique de l'Ouest) en creant une marketplace de confiance : chercheur gratuit, bailleur payeur via credits, IA anti-fraude et contact WhatsApp natif - la ou Facebook/OLX et les agents traditionnels ne resolvent pas la fraude.",
        businessContextEn: "Strategic project to digitize housing access in Cameroon (then CEMAC / West Africa) by building a trust marketplace: free seekers, credit-paying landlords, AI anti-fraud and native WhatsApp contact - where Facebook/OLX and traditional agents fail on fraud.",

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
                captionFr: "Direction produit KAZA - aperçu plateforme immobilière de confiance",
                captionEn: "KAZA product direction - trust-first real-estate platform preview",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-home-feed.png",
                captionFr: "Feed Accueil - catégories, badges certifiés et listings FCFA",
                captionEn: "Home feed - categories, certified badges and FCFA listings",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-figma-flows-01.png",
                captionFr: "Design system mobile - parcours complet (auth, feed, detail, chat)",
                captionEn: "Mobile design system - full journeys (auth, feed, detail, chat)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-figma-flows-02.png",
                captionFr: "Cartographie UX - discovery, carte, filtres et profils",
                captionEn: "UX map - discovery, map, filters and profiles",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-figma-flows-03.png",
                captionFr: "Parcours premium - onboarding, fiches biens et contact bailleur",
                captionEn: "Premium journeys - onboarding, listings and landlord contact",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-explore-neighborhoods.png",
                captionFr: "Explorer - quartiers populaires (Bastos, Bonapriso) et categories",
                captionEn: "Explore - popular neighborhoods (Bastos, Bonapriso) and categories",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-map-explorer.png",
                captionFr: "Carte interactive - pins prix et preview villa (Yaoundé)",
                captionEn: "Interactive map - price pins and villa preview (Yaounde)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-property-details.png",
                captionFr: "Fiche bien - galerie, badges confiance, détails financiers, CTA WhatsApp",
                captionEn: "Listing detail - gallery, trust badges, financials, WhatsApp CTA",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-reviews-whatsapp.png",
                captionFr: "Détail bas de page - disponibilité, map Douala, reviews, discussion bailleur",
                captionEn: "Detail footer - availability, Douala map, reviews, landlord chat",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/kaza/kaza-landlord-credits.png",
                captionFr: "Espace bailleur - crédits, publication multi-étapes, boutique MoMo, certification",
                captionEn: "Landlord space - credits, multi-step publish, MoMo shop, certification",
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
                titleFr: "Modele economique - credits",
                titleEn: "Business model - credits",
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
                titleFr: "Sequence - chercheur vers contact",
                titleEn: "Sequence - seeker to contact",
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
                titleFr: "Sequence - publication bailleur",
                titleEn: "Sequence - landlord publish",
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
                titleFr: "Sequence - achat credits Mobile Money",
                titleEn: "Sequence - Mobile Money credit purchase",
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
            "Sur un marche gangrene par la fraude, la confiance doit etre un domaine produit (badges, IA, certification) - pas un paragraphe legal.",
            "Le modele chercheur-gratuit / bailleur-credits aligne l'incitation : la demande scale ; l'offre finance la qualite.",
            "WhatsApp n'est pas un raccourci paresseux : c'est le canal de conversion local ; l'app doit y mener proprement.",
            "Un Fastify modulaire protege la velocite d'une petite equipe tout en isolant fraude et paiements pour une extraction future.",
            "Designer toute la surface UX avant de coder les modules critiques reduit les allers-retours produit/dev sur un marketplace multi-acteurs.",
        ],
        lessonsEn: [
            "On a fraud-heavy market, trust must be a product domain (badges, AI, certification) - not a legal paragraph.",
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
        titleFr: "barthez-kenwou.dev - Portfolio de positionnement technique",
        titleEn: "barthez-kenwou.dev - Technical positioning portfolio",

        descriptionFr: "Pas un CV en ligne : une plateforme produit qui prouve, mesure et déploie l'expertise Full Stack & DevOps - case studies, blog, services, CV PDF, analytics et CD DevSecOps jusqu'à la prod OVH.",
        descriptionEn: "Not an online résumé: a product platform that proves, measures and ships Full Stack & DevOps expertise - case studies, blog, services, PDF CV, analytics and DevSecOps CD to OVH production.",

        fullDescriptionFr: `barthez-kenwou.dev n'est pas un CV avec une URL. C'est mon système de preuves - le produit que je vends quand on me demande ce que je sais faire. Dans un marché où générer du code est devenu trivial, la différenciation a changé de place : ce qui compte, c'est la capacité à transformer une intention en système fiable, mesurable, sécurisé et livré en production. Ce site est exactement ça, exposé.

Le parcours est conçu pour une audience technique exigeante. Un recruteur ou un client ne « lit » pas une brochure : il audite. Accueil (positionnement + craft), À propos (bio + timeline), Compétences (atlas filtrable Cloud/DevOps/Frontend…), Projets (case studies à ~20 sections optionnelles : problème, solution, stack, galerie, Mermaid, ADR, sécu/infra, avant/après, leçons), Services tarifés, Blog long format, Contact WhatsApp, CV PDF. Chaque surface a un job unique - prouver une facette de l'exécution, pas décorer.

Sous le capot : SPA Feature-Sliced Design (React / TypeScript / Vite), API REST, i18n FR/EN, thème dark/light, PWA, SEO/JSON-LD, état Zustand, médias case studies sur SeaweedFS S3. La livraison fait partie du pitch commercial : GitHub Actions (CI + Cypress + Lighthouse), Gitleaks → SonarQube → Trivy → image GHCR privée → SSH/Watchtower sur VPS OVH, Nginx Alpine durci (CSP/HSTS), Cloudflare en edge, Plausible self-hosted pour mesurer l'engagement réel (~314 visiteurs / 28j, 4.64 pages/visite, ~4 min, bounce 31% ; PageSpeed A11y 96 / BP 100 / SEO 100).

Je conçois, code, sécurise, déploie et itère seul. Le résultat live n'illustre pas des compétences - il les incarne. Ouvrir barthez-kenwou.dev, c'est déjà commencer l'entretien technique.`,
        fullDescriptionEn: `barthez-kenwou.dev is not a résumé with a URL. It is my proof system - the product I sell when someone asks what I can do. In a market where generating code has become trivial, differentiation moved: what matters is the ability to turn intent into a reliable, measurable, secured system shipped to production. This site is exactly that, exposed.

The journey is built for a demanding technical audience. A recruiter or client does not "read" a brochure - they audit. Home (positioning + craft), About (bio + timeline), Skills (filterable Cloud/DevOps/Frontend atlas…), Projects (case studies with ~20 optional sections: problem, solution, stack, gallery, Mermaid, ADRs, security/infra, before/after, lessons), priced Services, long-form Blog, WhatsApp Contact, PDF CV. Each surface has one job - prove a facet of execution, not decorate.

Under the hood: Feature-Sliced Design SPA (React / TypeScript / Vite), REST API, FR/EN i18n, dark/light theme, PWA, SEO/JSON-LD, Zustand state, case-study media on SeaweedFS S3. Delivery is part of the commercial pitch: GitHub Actions (CI + Cypress + Lighthouse), Gitleaks → SonarQube → Trivy → private GHCR image → SSH/Watchtower on OVH VPS, hardened Nginx Alpine (CSP/HSTS), Cloudflare at the edge, self-hosted Plausible for real engagement (~314 visitors / 28d, 4.64 pages/visit, ~4 min, 31% bounce; PageSpeed A11y 96 / BP 100 / SEO 100).

I design, code, secure, deploy and iterate alone. The live result does not illustrate skills - it embodies them. Opening barthez-kenwou.dev is already starting the technical interview.`,

        problemFr: "Un portfolio classique montre des screenshots et des listes de technologies. Il ne démontre ni l'architecture, ni la discipline de livraison, ni la capacité à produire de la confiance mesurable. Recruteurs et clients techniques ont besoin de preuves - pas de slogans.",
        problemEn: "A classic portfolio shows screenshots and tech lists. It demonstrates neither architecture, nor delivery discipline, nor the ability to produce measurable trust. Recruiters and technical clients need proof - not slogans.",

        solutionFr: [
            "Plateforme produit complète : Accueil, À propos, Compétences, Projets (case studies), Services, Blog, Contact, CV PDF",
            "Case studies structurés (20 sections optionnelles) : problème/solution, vidéos, stack, galerie, Mermaid, ADR, sécu/infra, avant/après, leçons",
            "Architecture FSD React/TS + API REST + état Zustand + i18n + SEO/JSON-LD",
            "Chaîne DevSecOps : CI → Gitleaks → Sonar → Trivy → GHCR → SSH OVH + Watchtower",
            "Runtime production : Docker Nginx Alpine, CSP stricte, Cloudflare DNS/CDN, SeaweedFS pour médias",
            "Preuve d'impact : PageSpeed, Plausible (engagement), Cloudflare (edge), contributions GitHub",
        ],
        solutionEn: [
            "Full product platform: Home, About, Skills, Projects (case studies), Services, Blog, Contact, PDF CV",
            "Structured case studies (20 optional sections): problem/solution, videos, stack, gallery, Mermaid, ADRs, security/infra, before/after, lessons",
            "FSD React/TS architecture + REST API + Zustand state + i18n + SEO/JSON-LD",
            "DevSecOps chain: CI → Gitleaks → Sonar → Trivy → GHCR → SSH OVH + Watchtower",
            "Production runtime: Docker Nginx Alpine, strict CSP, Cloudflare DNS/CDN, SeaweedFS for media",
            "Impact proof: PageSpeed, Plausible (engagement), Cloudflare (edge), GitHub contributions",
        ],

        challengesFr: [
            "Faire d'un portfolio un produit crédible pour une audience technique exigeante",
            "Concilier motion/WebGL premium et accessibilité / reduced-motion / perf",
            "Rendre les case studies exhaustifs sans noyer les petits projets (sections optionnelles)",
            "Industrialiser un CD DevSecOps privé (GHCR) sur VPS sans lock-in PaaS",
            "Mesurer vraiment l'engagement (Plausible) plutôt que vanité analytics",
            "Maintenir FR/EN, SEO et qualité de code en livraison continue solo",
        ],
        challengesEn: [
            "Turn a portfolio into a credible product for a demanding technical audience",
            "Reconcile premium motion/WebGL with accessibility / reduced-motion / perf",
            "Make case studies exhaustive without drowning small projects (optional sections)",
            "Industrialize private DevSecOps CD (GHCR) on a VPS without PaaS lock-in",
            "Actually measure engagement (Plausible) instead of vanity analytics",
            "Maintain FR/EN, SEO and code quality under continuous solo delivery",
        ],

        impactFr: [
            "Positionnement clair Full Stack JS + DevOps + Cloud - prouvé par le runtime lui-même",
            "Engagement réel : ~314 visiteurs uniques / 28j, 4.64 pages/visite, ~4 min de durée, bounce 31%",
            "Qualité web : PageSpeed A11y 96, Best Practices 100, SEO 100 (desktop)",
            "Canal d'acquisition pour missions, collaborations et recrutement technique",
            "Standard interne de case study réutilisé pour NEXUS, GTA, KAZA et les suivants",
        ],
        impactEn: [
            "Clear Full Stack JS + DevOps + Cloud positioning - proven by the runtime itself",
            "Real engagement: ~314 unique visitors / 28d, 4.64 pages/visit, ~4 min duration, 31% bounce",
            "Web quality: PageSpeed A11y 96, Best Practices 100, SEO 100 (desktop)",
            "Acquisition channel for missions, collaborations and technical hiring",
            "Internal case-study standard reused for NEXUS, GTA, KAZA and beyond",
        ],

        metrics: {
            "PageSpeed Perf": "87/100",
            "Accessibility": "96/100",
            "Best Practices": "100/100",
            "SEO": "100/100",
            "Visiteurs 28j": "314",
            "Pages / visite": "4.64",
            "Durée moyenne": "3m 57s",
            "Bounce": "31%",
            "CD": "GHCR → OVH VPS",
            "Version": "1.4.0",
        },

        techStack: {
            frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Zustand", "i18next", "Mermaid", "React PDF", "PWA"],
            backend: ["Node.js", "Express", "REST API", "Zod", "JWT"],
            database: ["MongoDB", "Redis", "SeaweedFS S3"],
            devops: ["Docker", "Nginx", "GitHub Actions", "GHCR", "OVH VPS", "Cloudflare", "Gitleaks", "SonarQube", "Trivy", "Watchtower", "Plausible"],
        },

        architecture: [
            "SPA Feature-Sliced Design : app / pages / widgets / features / entities / shared",
            "API REST découplée (projets, blog, services, contact) derrière VITE_API_BASE_URL",
            "Case study engine : 20 sections optionnelles rendues seulement si données présentes",
            "Médias case studies sur SeaweedFS S3 ; edge Cloudflare (DNS, proxy, cache)",
            "Runtime prod : image Nginx Alpine (port 8080) derrière Nginx Proxy Manager",
            "CD : Actions → scans sécu → GHCR privé → SSH/Watchtower sur VPS OVH",
            "Observabilité produit : Plausible CE + Cloudflare analytics + Lighthouse CI",
        ],

        testing: [
            "Vitest + Testing Library (unit / composants)",
            "Cypress E2E (+ axe a11y) dans le workflow QA",
            "Lighthouse CI (lhci) sur preview",
            "ESLint, Prettier, typecheck, commitlint, Husky hooks",
            "SAST SonarQube + Trivy FS/image + Gitleaks secrets",
        ],

        images: [
            "https://s3.zenora360.com/barthez-portfolio/images/portfolio/logo-mark.png",
            "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-home-hero.png",
            "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-projects-grid.png",
            "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-diagrams.png",
            "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-actions-deploy-vps.png",
            "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-pagespeed-desktop.png",
            "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-plausible-overview.png",
        ],
        preview: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-home-hero.png",
        videoDemo: "",

        category: "Fullstack • DevOps • Platform",
        status: "Production",
        complexity: "Avancé",
        role: "Fullstack Developer • DevOps Engineer",
        teamSize: 1,

        duration: "Mars 2026 - en cours",
        date: "2026",

        github: "https://github.com/barthez-kenwou/barthez-kenwou-porfolio",
        demo: "https://barthez-kenwou.dev",

        businessContextFr: "Outil stratégique de positionnement professionnel : convaincre recruteurs, clients et partenaires techniques en leur donnant un produit à évaluer - pas une brochure. Chaque visite est à la fois un pitch et une preuve d'exécution.",
        businessContextEn: "Strategic professional positioning tool: convince recruiters, clients and technical partners by giving them a product to evaluate - not a brochure. Every visit is both a pitch and proof of execution.",

        confidential: false,

        responsibilitiesFr: [
            "Conception produit & UX de la plateforme de positionnement",
            "Architecture FSD frontend + contrat API REST + modèle case study",
            "Implémentation des surfaces (projets, blog, services, CV PDF, i18n, SEO)",
            "Pipeline DevSecOps (Actions, GHCR, Trivy, Sonar, Gitleaks) et runtime Nginx",
            "Infra edge Cloudflare + stockage médias SeaweedFS + analytics Plausible",
            "Itération continue du contenu et des preuves (métriques, case studies)",
        ],
        responsibilitiesEn: [
            "Product & UX design of the positioning platform",
            "FSD frontend architecture + REST API contract + case-study model",
            "Implementation of surfaces (projects, blog, services, PDF CV, i18n, SEO)",
            "DevSecOps pipeline (Actions, GHCR, Trivy, Sonar, Gitleaks) and Nginx runtime",
            "Cloudflare edge + SeaweedFS media storage + Plausible analytics",
            "Continuous iteration of content and proof (metrics, case studies)",
        ],

        gallery: [
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-home-hero.png",
                captionFr: "Hero Accueil - positionnement Full Stack JS et CTA projets",
                captionEn: "Home hero - Full Stack JS positioning and projects CTA",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-home-services.png",
                captionFr: "Home - teaser services Cloud/DevOps avec tarifs",
                captionEn: "Home - Cloud/DevOps services teaser with pricing",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-why-terminal.png",
                captionFr: "Pourquoi me choisir - storytelling terminal interactif",
                captionEn: "Why choose me - interactive terminal storytelling",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-linkedin-brand.png",
                captionFr: "Identité LinkedIn - DevSecOps, automation, lien portfolio",
                captionEn: "LinkedIn identity - DevSecOps, automation, portfolio link",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-facebook-brand.png",
                captionFr: "Identité Facebook - bannière DevSecOps et axes d'expertise",
                captionEn: "Facebook identity - DevSecOps banner and expertise axes",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-github-profile.png",
                captionFr: "Profil GitHub - README ingénieur et statut ZENORA",
                captionEn: "GitHub profile - engineer README and ZENORA status",
                kind: "other",
            },          
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-testimonials.png",
                captionFr: "Témoignages clients - preuve sociale technique",
                captionEn: "Client testimonials - technical social proof",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-home-cta.png",
                captionFr: "CTA Accueil - contact et WhatsApp",
                captionEn: "Home CTA - contact and WhatsApp",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-about-bio.png",
                captionFr: "À propos - bio Full Stack & DevOps et photo pro",
                captionEn: "About - Full Stack & DevOps bio and pro portrait",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-about-timeline.png",
                captionFr: "À propos - timeline ZENORA et parcours formateur",
                captionEn: "About - ZENORA timeline and trainer path",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-skills-atlas.png",
                captionFr: "Compétences - atlas 3D et filtres par domaine",
                captionEn: "Skills - 3D atlas and domain filters",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-skills-devops.png",
                captionFr: "Compétences DevOps - Docker à OpenTelemetry",
                captionEn: "DevOps skills - Docker through OpenTelemetry",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-skills-frontend.png",
                captionFr: "Compétences Frontend - React, RN, Tailwind, PWA",
                captionEn: "Frontend skills - React, RN, Tailwind, PWA",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-skills-certs.png",
                captionFr: "Certifications & métriques - CKA, AWS, Docker, stats",
                captionEn: "Certifications & metrics - CKA, AWS, Docker, stats",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-projects-grid.png",
                captionFr: "Projets - grille NEXUS, GTA, KAZA avec filtres",
                captionEn: "Projects - NEXUS, GTA, KAZA grid with filters",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-gallery-filter.png",
                captionFr: "Case study - galerie filtrable (UI / infra / process)",
                captionEn: "Case study - filterable gallery (UI / infra / process)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-diagrams.png",
                captionFr: "Case study - diagrammes Mermaid live (vue système)",
                captionEn: "Case study - live Mermaid diagrams (system view)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-services.png",
                captionFr: "Services - offres AWS, DevOps, Full Stack, audit",
                captionEn: "Services - AWS, DevOps, Full Stack, audit offers",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-process.png",
                captionFr: "Processus de travail - découverte, design, agile",
                captionEn: "Work process - discovery, design, agile",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-blog-grid.png",
                captionFr: "Blog - articles AWS, DevOps, microservices",
                captionEn: "Blog - AWS, DevOps, microservices articles",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-blog-article.png",
                captionFr: "Article long format - Node.js performance + sommaire",
                captionEn: "Long-form article - Node.js performance + TOC",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-contact.png",
                captionFr: "Contact - formulaire, email, localisation Yaoundé",
                captionEn: "Contact - form, email, Yaoundé location",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-contact-whatsapp.png",
                captionFr: "Contact - contribution GitHub et CTA WhatsApp",
                captionEn: "Contact - GitHub contribution graph and WhatsApp CTA",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-cv.png",
                captionFr: "CV digital - aperçu PDF téléchargeable",
                captionEn: "Digital CV - downloadable PDF preview",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-pagespeed-desktop.png",
                captionFr: "PageSpeed desktop - Perf 87, A11y 96, BP 100, SEO 100",
                captionEn: "PageSpeed desktop - Perf 87, A11y 96, BP 100, SEO 100",
                kind: "metric",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-plausible-overview.png",
                captionFr: "Plausible 28j - 314 visiteurs, 4.64 pages/visite, 3m57",
                captionEn: "Plausible 28d - 314 visitors, 4.64 pages/visit, 3m57",
                kind: "metric",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-plausible-top-pages.png",
                captionFr: "Plausible - top pages, bounce et profondeur de scroll",
                captionEn: "Plausible - top pages, bounce and scroll depth",
                kind: "metric",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-cloudflare-analytics.png",
                captionFr: "Cloudflare - trafic edge, cache et requêtes",
                captionEn: "Cloudflare - edge traffic, cache and requests",
                kind: "metric",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-seaweedfs-assets.png",
                captionFr: "SeaweedFS - bucket S3 assets portfolio (média case studies)",
                captionEn: "SeaweedFS - S3 portfolio assets bucket (case-study media)",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-cloudflare-dns.png",
                captionFr: "Cloudflare DNS - proxy, SSL, SPF/DKIM, Google verify",
                captionEn: "Cloudflare DNS - proxy, SSL, SPF/DKIM, Google verify",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ghcr-packages.png",
                captionFr: "GHCR - image privée barthez-kenwou-porfolio",
                captionEn: "GHCR - private barthez-kenwou-porfolio image",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-github-repo.png",
                captionFr: "Repo public - FSD, infra/, Cypress, Husky, docs",
                captionEn: "Public repo - FSD, infra/, Cypress, Husky, docs",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-actions-workflows.png",
                captionFr: "GitHub Actions - CI, Deploy VPS, QA Lighthouse/E2E",
                captionEn: "GitHub Actions - CI, Deploy VPS, QA Lighthouse/E2E",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-actions-deploy-vps.png",
                captionFr: "Pipeline Deploy VPS - Gitleaks → Sonar → Trivy → GHCR → OVH",
                captionEn: "Deploy VPS pipeline - Gitleaks → Sonar → Trivy → GHCR → OVH",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-sonarqube-overview.png",
                captionFr: "SonarQube - SAST intégré au cycle de livraison",
                captionEn: "SonarQube - SAST integrated into the delivery cycle",
                kind: "process",
            },
        ],

        diagrams: [
            {
                id: "pf-fsd",
                titleFr: "Architecture FSD - couches applicatives",
                titleEn: "FSD architecture - application layers",
                mermaid: `flowchart TB
  subgraph app [app]
    ROUTES[Routes lazy]
    PROV[Providers Theme i18n SEO]
  end
  subgraph pages [pages]
    HOME[Home]
    PROJ[Projects Detail]
    BLOG[Blog]
    CV[CV PDF]
  end
  subgraph entities [entities]
    EP[projets]
    EB[blogs]
    ES[services]
    ESK[skills]
  end
  subgraph shared [shared]
    UI[UI Motion]
    API[apiClient Axios]
    ST[Zustand stores]
  end
  ROUTES --> pages
  pages --> entities
  entities --> API
  pages --> shared
  PROV --> pages`,
            },
            {
                id: "pf-casestudy",
                titleFr: "Moteur case study - sections optionnelles",
                titleEn: "Case-study engine - optional sections",
                mermaid: `flowchart LR
  DATA[IProject data] --> HERO[Hero]
  DATA --> OVER[Overview]
  DATA --> PS[Problem Solution]
  DATA --> VID[Videos]
  DATA --> TECH[Tech]
  DATA --> GAL[Gallery]
  DATA --> DIA[Mermaid]
  DATA --> DEC[Decisions]
  DATA --> SEC[Security Infra]
  DATA --> IMP[Impact]
  DATA --> LES[Lessons]
  HERO --> PAGE[Project Detail Page]
  OVER --> PAGE
  PS --> PAGE
  VID --> PAGE
  TECH --> PAGE
  GAL --> PAGE
  DIA --> PAGE
  DEC --> PAGE
  SEC --> PAGE
  IMP --> PAGE
  LES --> PAGE`,
            },
            {
                id: "pf-cd",
                titleFr: "Pipeline DevSecOps → production",
                titleEn: "DevSecOps pipeline → production",
                mermaid: `flowchart LR
  PUSH[Push main] --> CI[CI format lint typecheck test build]
  PUSH --> GL[Gitleaks]
  CI --> SONAR[SonarQube SAST]
  CI --> TRIVYFS[Trivy FS deps]
  GL --> BUILD
  SONAR --> BUILD
  TRIVYFS --> BUILD[Docker build]
  BUILD --> GHCR[GHCR private]
  GHCR --> TRIVYIMG[Trivy image]
  TRIVYIMG --> SSH[SSH Deploy OVH]
  SSH --> WT[Watchtower]
  WT --> NGX[Nginx Alpine :8080]
  NGX --> CF[Cloudflare edge]
  CF --> USER[Visiteur]`,
            },
            {
                id: "pf-runtime",
                titleFr: "Runtime production - edge to origin",
                titleEn: "Production runtime - edge to origin",
                mermaid: `flowchart TB
  V[Visiteur] --> CF[Cloudflare DNS CDN]
  CF --> NPM[Nginx Proxy Manager]
  NPM --> WEB[portfolio-web :8080]
  WEB --> SPA[React SPA]
  SPA --> API[API REST]
  API --> DB[(MongoDB)]
  API --> RD[(Redis)]
  SPA --> S3[SeaweedFS S3 médias]
  SPA --> PL[Plausible analytics]`,
            },
            {
                id: "pf-usecases",
                titleFr: "Cas d'utilisation visiteurs",
                titleEn: "Visitor use cases",
                mermaid: `flowchart TB
  subgraph system [barthez-kenwou.dev]
    UC1[Decouvrir le positionnement]
    UC2[Auditer les case studies]
    UC3[Lire le blog technique]
    UC4[Comparer les services]
    UC5[Telecharger le CV PDF]
    UC6[Contacter WhatsApp email]
  end
  R((Recruteur))
  C((Client technique))
  P((Pair engineer))
  R --- UC1
  R --- UC2
  R --- UC5
  C --- UC2
  C --- UC4
  C --- UC6
  P --- UC3
  P --- UC2`,
            },
            {
                id: "pf-journey",
                titleFr: "Séquence - recruteur vers preuve",
                titleEn: "Sequence - recruiter to proof",
                mermaid: `sequenceDiagram
  actor R as Recruteur
  participant WEB as SPA
  participant API as API
  participant CD as Actions GHCR
  R->>WEB: Ouvre Accueil
  WEB-->>R: Hero + preuve craft
  R->>WEB: Ouvre /projects/case-study
  WEB->>API: GET project detail
  API-->>WEB: Case study complet
  WEB-->>R: Galerie Mermaid ADR sécu
  R->>WEB: Consulte PageSpeed / Blog
  Note over CD: Chaque push main recrée la preuve runtime
  R->>WEB: Download CV PDF / Contact`,
            },
            {
                id: "pf-security",
                titleFr: "Couches sécurité & qualité",
                titleEn: "Security & quality layers",
                mermaid: `flowchart TB
  CODE[Code] --> HOOKS[Husky commitlint]
  HOOKS --> CI[CI lint typecheck tests]
  CI --> SEC[Gitleaks Sonar Trivy]
  SEC --> IMG[Image GHCR non-root]
  IMG --> NGX[Nginx CSP HSTS]
  NGX --> CF[Cloudflare proxy WAF edge]
  CF --> APP[SPA + API]`,
            },
            {
                id: "pf-content",
                titleFr: "Surfaces produit & contenu",
                titleEn: "Product surfaces & content",
                mermaid: `flowchart LR
  HOME[Home] --> ABOUT[About]
  HOME --> SKILLS[Skills]
  HOME --> PROJ[Projects]
  PROJ --> DETAIL[Case Study Detail]
  HOME --> SVC[Services]
  HOME --> BLOG[Blog]
  BLOG --> POST[Article]
  HOME --> CONTACT[Contact]
  HOME --> CV[CV PDF]
  DETAIL --> MEDIA[SeaweedFS]
  POST --> MEDIA`,
            },
        ],

        resources: [
            {
                labelFr: "CV Barthez Kenwou (PDF EN)",
                labelEn: "Barthez Kenwou CV (PDF EN)",
                url: "https://s3.zenora360.com/barthez-portfolio/docs/CV_Barthez_Kenwou_en.pdf",
                type: "report",
            },
            { labelFr: "Site live", labelEn: "Live site", url: "https://barthez-kenwou.dev", type: "other" },
            { labelFr: "Dépôt GitHub", labelEn: "GitHub repository", url: "https://github.com/barthez-kenwou/barthez-kenwou-porfolio", type: "other" },
            { labelFr: "llms.txt", labelEn: "llms.txt", url: "https://barthez-kenwou.dev/llms.txt", type: "spec" },
        ],

        milestones: [
            {
                labelFr: "Socle FSD + design system dark",
                labelEn: "FSD foundation + dark design system",
                date: "2025",
                descriptionFr: "Routing, i18n, thème, surfaces principales.",
                descriptionEn: "Routing, i18n, theme, core surfaces.",
            },
            {
                labelFr: "CD DevSecOps OVH + GHCR",
                labelEn: "DevSecOps CD OVH + GHCR",
                date: "2026 Q1",
                descriptionFr: "Actions, scans, image privée, Nginx Alpine, Cloudflare.",
                descriptionEn: "Actions, scans, private image, Nginx Alpine, Cloudflare.",
            },
            {
                labelFr: "Case studies enrichis + Mermaid",
                labelEn: "Enriched case studies + Mermaid",
                date: "2026 Q2–Q3",
                descriptionFr: "20 sections optionnelles, galeries SeaweedFS, preuves métriques.",
                descriptionEn: "20 optional sections, SeaweedFS galleries, metric proof.",
            },
            {
                labelFr: "Observabilité produit (Plausible + PageSpeed)",
                labelEn: "Product observability (Plausible + PageSpeed)",
                date: "2026",
                descriptionFr: "Mesure d'engagement et qualité web en continu.",
                descriptionEn: "Continuous engagement and web-quality measurement.",
            },
        ],

        scopeFr: [
            "Plateforme publique FR/EN (8+ surfaces)",
            "Case studies projets avec preuves visuelles et diagrammes",
            "Blog technique long format",
            "Services tarifés + processus + témoignages",
            "CV PDF généré + contact WhatsApp",
            "CI/CD DevSecOps + runtime Docker/Nginx VPS",
            "Analytics privacy-friendly + SEO technique",
        ],
        scopeEn: [
            "Public FR/EN platform (8+ surfaces)",
            "Project case studies with visual proof and diagrams",
            "Long-form technical blog",
            "Priced services + process + testimonials",
            "Generated PDF CV + WhatsApp contact",
            "DevSecOps CI/CD + Docker/Nginx VPS runtime",
            "Privacy-friendly analytics + technical SEO",
        ],
        nonGoalsFr: [
            "CMS multi-auteurs grand public",
            "Marketplace de missions",
            "Application mobile native",
        ],
        nonGoalsEn: [
            "Public multi-author CMS",
            "Missions marketplace",
            "Native mobile app",
        ],

        decisions: [
            {
                titleFr: "Le portfolio comme produit, pas comme brochure",
                titleEn: "Portfolio as product, not brochure",
                decisionFr: "Chaque surface doit prouver une compétence runtime (UI, CD, sécu, contenu).",
                decisionEn: "Every surface must prove a runtime skill (UI, CD, security, content).",
                rationaleFr: "Dans un marché saturé de templates, seule la preuve différencie.",
                rationaleEn: "In a market saturated with templates, only proof differentiates.",
            },
            {
                titleFr: "SPA Vite + VPS maîtrisé",
                titleEn: "Vite SPA + controlled VPS",
                decisionFr: "Contrôle total du pipeline et de l'infra plutôt que full PaaS.",
                decisionEn: "Full control of pipeline and infra over full PaaS.",
                rationaleFr: "Le CD DevSecOps devient lui-même un argument commercial.",
                rationaleEn: "The DevSecOps CD itself becomes a commercial argument.",
            },
            {
                titleFr: "Case studies à sections optionnelles",
                titleEn: "Optional-section case studies",
                decisionFr: "Un modèle riche ; l'UI n'affiche que ce qui est renseigné.",
                decisionEn: "A rich model; UI only renders what is filled.",
                rationaleFr: "Flagships exhaustifs sans alourdir les petits projets.",
                rationaleEn: "Exhaustive flagships without bloating small projects.",
            },
            {
                titleFr: "GHCR privé + Watchtower",
                titleEn: "Private GHCR + Watchtower",
                decisionFr: "Images versionnées, déploiement pull-based sur VPS.",
                decisionEn: "Versioned images, pull-based deploy on VPS.",
                rationaleFr: "CD simple, auditable, sans vendor lock-in excessif.",
                rationaleEn: "Simple, auditable CD without excessive vendor lock-in.",
            },
            {
                titleFr: "Plausible self-hosted",
                titleEn: "Self-hosted Plausible",
                decisionFr: "Analytics privacy-first avec métriques d'engagement réelles.",
                decisionEn: "Privacy-first analytics with real engagement metrics.",
                rationaleFr: "Cohérent avec une posture DevOps/éthique et utile pour itérer le produit.",
                rationaleEn: "Consistent with a DevOps/ethical posture and useful to iterate the product.",
            },
        ],

        securityFr: [
            "CSP + headers Nginx (HSTS, nosniff, frame-deny, Permissions-Policy)",
            "Chaîne DevSecOps : Gitleaks, SonarQube SAST, Trivy FS + image",
            "Image GHCR privée, conteneur non-root, read_only / no-new-privileges",
            "Cloudflare proxy (TLS edge) + DNS durci (SPF/DKIM)",
            "Validation Zod / RHF sur formulaires ; ErrorBoundary global",
            "Dégradation WebGL (reduced-motion / no-WebGL) pour ne jamais casser l'accès",
        ],
        securityEn: [
            "CSP + Nginx headers (HSTS, nosniff, frame-deny, Permissions-Policy)",
            "DevSecOps chain: Gitleaks, SonarQube SAST, Trivy FS + image",
            "Private GHCR image, non-root container, read_only / no-new-privileges",
            "Cloudflare proxy (edge TLS) + hardened DNS (SPF/DKIM)",
            "Zod / RHF validation on forms; global ErrorBoundary",
            "WebGL degradation (reduced-motion / no-WebGL) so access never breaks",
        ],

        infraFr: [
            "Docker multi-stage / runtime Nginx Alpine :8080",
            "GitHub Actions : CI, QA (Cypress + LHCI), Deploy VPS",
            "GHCR → SSH OVH + Watchtower + Nginx Proxy Manager",
            "Cloudflare DNS/CDN devant l'origine",
            "SeaweedFS S3 pour médias de case studies",
            "Plausible Community Edition pour l'analytics produit",
            "Healthchecks /health /healthz + limites mémoire conteneur",
        ],
        infraEn: [
            "Docker multi-stage / Nginx Alpine runtime :8080",
            "GitHub Actions: CI, QA (Cypress + LHCI), Deploy VPS",
            "GHCR → SSH OVH + Watchtower + Nginx Proxy Manager",
            "Cloudflare DNS/CDN in front of origin",
            "SeaweedFS S3 for case-study media",
            "Plausible Community Edition for product analytics",
            "Healthchecks /health /healthz + container memory limits",
        ],

        externalLinks: [
            { labelFr: "Live", labelEn: "Live", url: "https://barthez-kenwou.dev" },
            { labelFr: "GitHub", labelEn: "GitHub", url: "https://github.com/barthez-kenwou/barthez-kenwou-porfolio" },
            { labelFr: "LinkedIn", labelEn: "LinkedIn", url: "https://www.linkedin.com/in/barthez-kenwou" },
        ],

        testimonial: {
            quoteFr: "Ce n'est pas une landing comme dans +98% des sites de présentation et portfolios que j'ai parcourus - c'est bien au-delà. Une preuve d'expertise et de maîtrise. Je recommande vivement Barthez Kenwou.",
            quoteEn: "This is not a landing page like 98%+ of the presentation sites and portfolios I've reviewed - it goes far beyond. Proof of expertise and mastery. I strongly recommend Barthez Kenwou.",
            author: "Ateba Ghislain",
            roleFr: "Ingénieur logiciel & Formateur Tech",
            roleEn: "Software engineer & Tech trainer",
            company: "Worketyamo",
        },

        lessonsFr: [
            "Quand le code se génère facilement, la différenciation se déplace vers le système : architecture, preuves, livraison, mesure.",
            "Un portfolio DevOps qui ne montre pas son pipeline se ment à lui-même - le CD fait partie du pitch.",
            "Les sections optionnelles transforment un modèle de données en éditeur de crédibilité : dense pour les flagships, léger pour le reste.",
            "La décoration (WebGL, motion) n'a de valeur que si elle se dégrade proprement ; sinon elle sabote la confiance.",
            "Mesurer l'engagement (pages/visite, durée, bounce) force à écrire pour des humains techniques, pas pour des bots de vanity metrics.",
        ],
        lessonsEn: [
            "When code is easy to generate, differentiation moves to the system: architecture, proof, delivery, measurement.",
            "A DevOps portfolio that hides its pipeline is lying to itself - CD is part of the pitch.",
            "Optional sections turn a data model into a credibility editor: dense for flagships, light elsewhere.",
            "Decoration (WebGL, motion) only has value if it degrades cleanly; otherwise it sabotages trust.",
            "Measuring engagement (pages/visit, duration, bounce) forces writing for technical humans, not vanity bots.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                afterSrc: "https://s3.zenora360.com/barthez-portfolio/images/portfolio/pf-ui-home-hero.png",
                captionFr: "D'une page 'à propos de moi' générique à une plateforme de preuves en production.",
                captionEn: "From a generic 'about me' page to a production proof platform.",
            },
        ],

        isFeatured: true,
    },

    {
        id: 5,
        titleFr: "ESOPA — Présence digitale ONG (CAFCA × ZENORA)",
        titleEn: "ESOPA — NGO digital presence (CAFCA × ZENORA)",

        descriptionFr: "En 2 semaines : site WordPress institutionnel FR/EN, staging + prod, sécurité, SEO et écosystème digital complet (Google Business, réseaux, guide de livraison) pour Étoile Solidarité Panafricaine.",
        descriptionEn: "In 2 weeks: institutional WordPress site FR/EN, staging + prod, security, SEO and full digital ecosystem (Google Business, socials, delivery guide) for Pan-African Solidarity Star.",

        fullDescriptionFr: `ESOPA (Étoile Solidarité Panafricaine) est une organisation humanitaire basée en Suisse avec une antenne opérationnelle à Yaoundé. Elle accompagne personnes âgées, handicapées, orphelins, veuves, démunis et prisonniers. Sans présence digitale crédible, l'ONG peinait à convaincre partenaires, donateurs et bénévoles — alors que transparence et visibilité sont des conditions d'existence pour ce type de structure.

Pour le compte de CAFCA × ZENORA, j'ai conçu et livré en deux semaines (février 2026) le pilier digital de l'organisation : un site WordPress institutionnel bilingue (FR/EN) sur esopa.org, pensé comme un outil de confiance — pas une brochure décorative. Lead conception & design dans une équipe de deux, j'ai porté l'identité visuelle, l'architecture de contenu (~18 pages), les parcours d'engagement (bénévolat, partenariat, contact) et la qualité de livraison jusqu'à la mise en production.

Le périmètre dépasse le « site vitrine ». Environnements staging et production séparés, stack WordPress/Elementor/Blocksy durcie (Wordfence, Limit Login Attempts, UpdraftPlus, LiteSpeed Cache, Asset CleanUp, Rank Math, Plausible, WP Mail SMTP), HTTPS, sauvegardes quotidiennes, pages Transparence / Mentions / Confidentialité. Autour du site : fiche Google My Business, réseaux sociaux configurés, lignes éditoriales 1 mois, et un document de livraison officielle (guide de prise en main + preuves performance/sécurité/SEO). Résultat mesurable : PageSpeed desktop 91/90/92/92, « esopa » en 1ère position Google, audience internationale dès le lancement (Cameroun, Suisse, Canada, USA…), Wordfence bloquant des centaines d'attaques mensuelles. Livraison officielle avril 2026.`,
        fullDescriptionEn: `ESOPA (Pan-African Solidarity Star) is a humanitarian organization based in Switzerland with an operational branch in Yaoundé. It supports the elderly, people with disabilities, orphans, widows, the destitute and prisoners. Without a credible digital presence, the NGO struggled to convince partners, donors and volunteers — while transparency and visibility are existential requirements for this kind of structure.

On behalf of CAFCA × ZENORA, I designed and delivered in two weeks (February 2026) the organization's digital pillar: a bilingual (FR/EN) institutional WordPress site on esopa.org, built as a trust tool — not a decorative brochure. Lead design & product conception in a two-person team, I owned visual identity, content architecture (~18 pages), engagement journeys (volunteering, partnership, contact) and delivery quality through production go-live.

Scope goes beyond a "showcase site". Separated staging and production environments, hardened WordPress/Elementor/Blocksy stack (Wordfence, Limit Login Attempts, UpdraftPlus, LiteSpeed Cache, Asset CleanUp, Rank Math, Plausible, WP Mail SMTP), HTTPS, daily backups, Transparency / Legal / Privacy pages. Around the site: Google Business Profile, configured social networks, 1-month editorial lines, and an official delivery document (handover guide + performance/security/SEO evidence). Measurable outcome: PageSpeed desktop 91/90/92/92, "esopa" ranking #1 on Google, international audience from launch (Cameroon, Switzerland, Canada, USA…), Wordfence blocking hundreds of monthly attacks. Official delivery April 2026.`,

        problemFr: "ESOPA n'avait pas de plateforme web crédible ni d'écosystème digital cohérent. Sans site professionnel, sans SEO local, sans canaux d'engagement structurés, l'organisation limitait sa capacité à mobiliser donateurs, partenaires et bénévoles — en Suisse comme au Cameroun.",
        problemEn: "ESOPA had no credible web platform and no coherent digital ecosystem. Without a professional site, local SEO, or structured engagement channels, the organization limited its ability to mobilize donors, partners and volunteers — in Switzerland and Cameroon alike.",

        solutionFr: [
            "Site WordPress institutionnel bilingue FR/EN (esopa.org) — ~18 pages Elementor",
            "Architecture de contenu : Accueil, À propos, Actions, Projets, Impact, S'impliquer, Actualités, Contact",
            "Parcours conversion : formulaires bénévole / partenariat / contact + WP Mail SMTP",
            "Environnements staging + production séparés pour livrer sans casser le live",
            "Sécurité multi-couches : Wordfence, Limit Login Attempts, SSL, durcissement admin",
            "Performance & SEO : LiteSpeed, Asset CleanUp, Rank Math, PageSpeed 91/90/92/92",
            "Écosystème autour du site : Google My Business, réseaux sociaux, lignes éditoriales",
            "Livraison officielle documentée (PDF) : guides, preuves, maintenance, évolutions",
        ],
        solutionEn: [
            "Bilingual FR/EN institutional WordPress site (esopa.org) — ~18 Elementor pages",
            "Content architecture: Home, About, Actions, Projects, Impact, Get involved, News, Contact",
            "Conversion journeys: volunteer / partnership / contact forms + WP Mail SMTP",
            "Separated staging + production environments to ship without breaking live",
            "Multi-layer security: Wordfence, Limit Login Attempts, SSL, admin hardening",
            "Performance & SEO: LiteSpeed, Asset CleanUp, Rank Math, PageSpeed 91/90/92/92",
            "Ecosystem around the site: Google Business, social networks, editorial lines",
            "Documented official delivery (PDF): guides, evidence, maintenance, roadmap",
        ],

        challengesFr: [
            "Transformer une mission humanitaire en parcours digital clair (donateurs, bénévoles, partenaires)",
            "Livrer un standard production (staging/prod, sécu, SEO, perf) en seulement 2 semaines",
            "Équilibre design émotionnel ONG vs crédibilité institutionnelle / transparence",
            "Durcir WordPress sans sacrifier l'éditabilité pour l'équipe cliente",
            "Couvrir site + GMB + socials + documentation de livraison dans le même sprint",
            "Accessibilité et multilingue FR/EN pour une audience Suisse–Cameroun–diaspora",
        ],
        challengesEn: [
            "Turn a humanitarian mission into a clear digital journey (donors, volunteers, partners)",
            "Ship a production standard (staging/prod, security, SEO, perf) in only 2 weeks",
            "Balance emotional NGO design vs institutional credibility / transparency",
            "Harden WordPress without killing editability for the client team",
            "Cover site + GMB + socials + delivery documentation in the same sprint",
            "Accessibility and FR/EN bilingual for a Switzerland–Cameroon–diaspora audience",
        ],

        impactFr: [
            "Présence digitale professionnelle live sur esopa.org (pilier de confiance ONG)",
            "« esopa » en 1ère position Google + aperçu IA sur le nom complet",
            "PageSpeed desktop : Performance 91 · Accessibilité 90 · Best Practices 92 · SEO 92",
            "Audience internationale dès le lancement (CM, CH, CA, US, BE…)",
            "Wordfence : ~255 attaques complexes bloquées / mois en production",
            "Canaux d'engagement opérationnels : bénévolat, partenariat, contact, GMB",
            "Livraison officielle CAFCA × ZENORA avec guide de prise en main client",
        ],
        impactEn: [
            "Professional digital presence live on esopa.org (NGO trust pillar)",
            '"esopa" ranking #1 on Google + AI Overview on the full organization name',
            "PageSpeed desktop: Performance 91 · Accessibility 90 · Best Practices 92 · SEO 92",
            "International audience from launch (CM, CH, CA, US, BE…)",
            "Wordfence: ~255 complex attacks blocked / month in production",
            "Operational engagement channels: volunteering, partnership, contact, GMB",
            "Official CAFCA × ZENORA delivery with client handover guide",
        ],

        metrics: {
            "PageSpeed Perf": "91/100",
            "Accessibility": "90/100",
            "Best Practices": "92/100",
            "SEO": "92/100",
            "Pages WP": "18",
            "Sprint": "2 semaines",
            "Équipe": "2",
            "Wordfence / mois": "255 attaques bloquées",
            "Plausible 30j": "79 visiteurs · 130 vues",
            "SEO Google": "#1 « esopa »",
        },

        techStack: {
            frontend: ["WordPress", "Elementor", "Blocksy", "Essential Addons", "Essential Blocks", "HTML5", "CSS3", "JavaScript"],
            backend: ["PHP", "WordPress Core", "WPForms", "WP Mail SMTP"],
            database: ["MySQL"],
            devops: ["Docker", "Staging + Production", "Nginx", "Cloudflare", "LiteSpeed Cache", "Asset CleanUp", "UpdraftPlus", "Wordfence", "Limit Login Attempts", "Rank Math SEO", "Plausible", "Google Site Kit", "Let's Encrypt"],
        },

        architecture: [
            "WordPress institutionnel bilingue FR/EN — architecture de pages mission-driven",
            "Environnements staging et production séparés (validation avant go-live)",
            "Reverse proxy / hébergement durci + Cloudflare DNS/CDN + HTTPS Let's Encrypt",
            "Couche perf : LiteSpeed Cache + Asset CleanUp (scripts/styles par page)",
            "Couche sécu : Wordfence WAF + Limit Login Attempts + backups UpdraftPlus",
            "Couche acquisition : Rank Math SEO + Google Business + analytics (Plausible / Site Kit)",
            "Écosystème digital autour du site : socials + lignes éditoriales + doc de livraison",
        ],

        testing: [
            "Google PageSpeed / Lighthouse (perf, a11y, best practices, SEO)",
            "Scan sécurité automatisé (38 tests — risque global LOW, 0 critique/haute/moyenne)",
            "Validation manuelle UX/UI responsive (desktop, tablette, mobile)",
            "Vérification formulaires (contact, bénévole) + notifications SMTP",
            "Contrôle SEO on-page Rank Math + indexation Google (« esopa » #1)",
        ],

        images: [
            "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-logo.png",
            "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-ui-home-hero.png",
            "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-ui-who-we-are.png",
            "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-ui-values.png",
            "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-metric-pagespeed.png",
            "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-process-wordfence.png",
            "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-logo.png",
        ],
        preview: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-ui-home-hero.png",
        videoDemo: "https://s3.zenora360.com/barthez-portfolio/videos/esopa/esopa-demo-walkthrough.webm",

        videos: [
            {
                url: "https://s3.zenora360.com/barthez-portfolio/videos/esopa/esopa-demo-walkthrough.webm",
                type: "walkthrough",
                titleFr: "Démo walkthrough — esopa.org",
                titleEn: "Demo walkthrough — esopa.org",
            },
        ],

        category: "WordPress • Design • Delivery",
        status: "Production",
        complexity: "Intermédiaire",
        role: "Lead Designer • Concepteur produit",
        teamSize: 2,

        duration: "2 semaines",
        date: "Février 2026",

        github: "https://github.com/ZENORA-360/projet-client-esopa",
        demo: "https://esopa.org",

        businessContextFr: "Mission CAFCA × ZENORA : structurer la présence digitale d'ESOPA pour renforcer crédibilité, transparence et capacité de mobilisation (bénévoles, partenaires, donateurs) entre la Suisse et le Cameroun.",
        businessContextEn: "CAFCA × ZENORA mission: structure ESOPA's digital presence to strengthen credibility, transparency and mobilization capacity (volunteers, partners, donors) between Switzerland and Cameroon.",

        confidential: false,

        responsibilitiesFr: [
            "Lead conception produit & design (identité, UX, hiérarchie de contenu)",
            "Architecture des ~18 pages et parcours d'engagement (bénévolat, partenariat, contact)",
            "Implémentation WordPress/Elementor/Blocksy et polish UI responsive",
            "Mise en place staging + production et hardening (sécu, perf, backups)",
            "SEO technique (Rank Math) + Google My Business + analytics",
            "Documentation de livraison officielle et transfert client",
        ],
        responsibilitiesEn: [
            "Lead product conception & design (identity, UX, content hierarchy)",
            "Architecture of ~18 pages and engagement journeys (volunteering, partnership, contact)",
            "WordPress/Elementor/Blocksy implementation and responsive UI polish",
            "Staging + production setup and hardening (security, perf, backups)",
            "Technical SEO (Rank Math) + Google Business + analytics",
            "Official delivery documentation and client handover",
        ],

        gallery: [
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-logo.png",
                captionFr: "Identité ESOPA — Étoile Solidarité Panafricaine / PASOS",
                captionEn: "ESOPA identity — Pan-African Solidarity Star / PASOS",
                kind: "other",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-ui-home-hero.png",
                captionFr: "Hero Accueil — « L'amour qui construit l'avenir » + CTAs",
                captionEn: "Home hero — « Love that builds the future » + CTAs",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-ui-who-we-are.png",
                captionFr: "Qui sommes-nous — stats (06+ projets, 10+ bénévoles, 02 pays)",
                captionEn: "Who we are — stats (06+ projects, 10+ volunteers, 02 countries)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-ui-identity.png",
                captionFr: "Notre identité — Suisse / Cameroun, publics vulnérables",
                captionEn: "Our identity — Switzerland / Cameroon, vulnerable audiences",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-ui-values.png",
                captionFr: "Nos valeurs — amour, solidarité, dignité, inclusion, transparence",
                captionEn: "Our values — love, solidarity, dignity, inclusion, transparency",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-ui-roadmap.png",
                captionFr: "Feuille de route — objectifs stratégiques court / moyen / long terme",
                captionEn: "Roadmap — short / medium / long-term strategic objectives",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-ui-volunteer-form.png",
                captionFr: "Formulaire bénévole — inscription + avantages d'engagement",
                captionEn: "Volunteer form — signup + engagement benefits",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-ui-footer.png",
                captionFr: "Footer — CTA solidarité, contact CH/CM, mentions légales",
                captionEn: "Footer — solidarity CTA, CH/CM contact, legal pages",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-metric-pagespeed.png",
                captionFr: "PageSpeed desktop — Perf 91, A11y 90, BP 92, SEO 92",
                captionEn: "PageSpeed desktop — Perf 91, A11y 90, BP 92, SEO 92",
                kind: "metric",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-metric-plausible.png",
                captionFr: "Plausible 30j — 130 vues, 79 visiteurs (+69% vues)",
                captionEn: "Plausible 30d — 130 views, 79 visitors (+69% views)",
                kind: "metric",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-metric-sitekit.png",
                captionFr: "Google Site Kit — trafic 28j, Direct 41% / Organic 41%",
                captionEn: "Google Site Kit — 28d traffic, Direct 41% / Organic 41%",
                kind: "metric",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-process-pages-seo.png",
                captionFr: "WP Admin — 18 pages Elementor + Rank Math SEO",
                captionEn: "WP Admin — 18 Elementor pages + Rank Math SEO",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-process-wordfence.png",
                captionFr: "Wordfence — 255 attaques complexes bloquées / mois",
                captionEn: "Wordfence — 255 complex attacks blocked / month",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-process-llar.png",
                captionFr: "Limit Login Attempts — protection brute-force admin",
                captionEn: "Limit Login Attempts — admin brute-force protection",
                kind: "process",
            },
        ],

        diagrams: [
            {
                id: "esopa-ecosystem",
                titleFr: "Écosystème digital livré",
                titleEn: "Delivered digital ecosystem",
                mermaid: `flowchart TB
  subgraph core [Pilier central]
    SITE[esopa.org WordPress FR/EN]
  end
  subgraph acquire [Acquisition]
    GMB[Google My Business]
    SEO[Rank Math SEO]
    SOC[Facebook Instagram LinkedIn WhatsApp]
  end
  subgraph ops [Exploitation]
    STG[Staging]
    PROD[Production]
    BK[Backups UpdraftPlus]
    AN[Plausible + Site Kit]
  end
  SITE --> GMB
  SITE --> SEO
  SITE --> SOC
  STG --> PROD
  PROD --> SITE
  BK --> PROD
  AN --> SITE`,
            },
            {
                id: "esopa-envs",
                titleFr: "Staging → Production",
                titleEn: "Staging → Production",
                mermaid: `flowchart LR
  DEV[Conception Design] --> STG[Staging]
  STG --> QA[QA contenu UX sécu]
  QA --> PROD[Production esopa.org]
  PROD --> CF[Cloudflare CDN SSL]
  CF --> USER[Visiteurs partenaires bénévoles]`,
            },
            {
                id: "esopa-ia",
                titleFr: "Architecture informationnelle",
                titleEn: "Information architecture",
                mermaid: `flowchart TB
  HOME[Accueil]
  HOME --> ABOUT[À propos]
  ABOUT --> MV[Mission Vision]
  ABOUT --> GOV[Gouvernance]
  HOME --> ACT[Nos actions]
  ACT --> PH[Personnes handicapées]
  ACT --> PA[Personnes âgées]
  ACT --> PD[Personnes démunies]
  HOME --> PROJ[Projets]
  HOME --> IMP[Impact]
  HOME --> INV[S'impliquer]
  INV --> BEN[Devenir bénévole]
  INV --> PART[Partenariat]
  HOME --> NEWS[Actualités]
  HOME --> CONTACT[Contact]
  HOME --> LEGAL[Transparence Mentions Privacy]`,
            },
            {
                id: "esopa-security",
                titleFr: "Couches sécurité WordPress",
                titleEn: "WordPress security layers",
                mermaid: `flowchart TB
  EDGE[Cloudflare + HTTPS] --> NGX[Hébergement / reverse proxy]
  NGX --> WF[Wordfence WAF]
  WF --> LLAR[Limit Login Attempts]
  LLAR --> WP[WordPress Admin + Front]
  WP --> DB[(MySQL)]
  BK[UpdraftPlus backups] --> DB
  SMTP[WP Mail SMTP] --> WP`,
            },
            {
                id: "esopa-journey",
                titleFr: "Parcours — visiteur vers engagement",
                titleEn: "Journey — visitor to engagement",
                mermaid: `sequenceDiagram
  actor V as Visiteur
  participant WEB as esopa.org
  participant SEO as Google
  participant FORM as WPForms SMTP
  SEO->>V: Résultat #1 esopa / GMB
  V->>WEB: Accueil + mission
  WEB-->>V: Preuves Impact Projets Valeurs
  V->>WEB: S'impliquer / Contact
  WEB->>FORM: Soumission bénévole ou partenaire
  FORM-->>V: Confirmation email
  Note over WEB: Transparence Mentions Privacy toujours accessibles`,
            },
            {
                id: "esopa-delivery",
                titleFr: "Sprint 2 semaines — flux de livraison",
                titleEn: "2-week sprint — delivery flow",
                mermaid: `flowchart LR
  W1[Semaine 1 identité IA design staging] --> W2[Semaine 2 pages sécu SEO socials]
  W2 --> GO[Go-live production]
  GO --> DOC[PDF livraison officielle Avril]
  DOC --> CLIENT[ESOPA CAFCA handover]`,
            },
        ],

        resources: [
            {
                labelFr: "Livraison officielle projet digital (PDF)",
                labelEn: "Official digital project delivery (PDF)",
                url: "https://s3.zenora360.com/barthez-portfolio/docs/ESOPA_Livraison_Projet_Digital_CAFCA_ZENORA_2026.pdf",
                type: "report",
            },
            { labelFr: "Site live esopa.org", labelEn: "Live site esopa.org", url: "https://esopa.org", type: "other" },
            { labelFr: "Google My Business", labelEn: "Google Business Profile", url: "https://share.google/qKdLhrGSv1JRceBR5", type: "other" },
            { labelFr: "Dépôt GitHub", labelEn: "GitHub repository", url: "https://github.com/ZENORA-360/projet-client-esopa", type: "other" },
        ],

        milestones: [
            {
                labelFr: "Cadrage + identité + staging",
                labelEn: "Scoping + identity + staging",
                date: "Semaine 1 — Fév. 2026",
                descriptionFr: "Brief, charte, architecture de contenu, environnement staging.",
                descriptionEn: "Brief, brand, content architecture, staging environment.",
            },
            {
                labelFr: "Build pages + hardening + SEO",
                labelEn: "Page build + hardening + SEO",
                date: "Semaine 2 — Fév. 2026",
                descriptionFr: "18 pages Elementor, sécu, perf, Rank Math, formulaires.",
                descriptionEn: "18 Elementor pages, security, perf, Rank Math, forms.",
            },
            {
                labelFr: "Go-live + écosystème digital",
                labelEn: "Go-live + digital ecosystem",
                date: "Fév. 2026",
                descriptionFr: "Production esopa.org, GMB, socials, analytics.",
                descriptionEn: "Production esopa.org, GMB, socials, analytics.",
            },
            {
                labelFr: "Livraison officielle documentée",
                labelEn: "Documented official delivery",
                date: "Avril 2026",
                descriptionFr: "PDF CAFCA × ZENORA : preuves, guides, maintenance, évolutions.",
                descriptionEn: "CAFCA × ZENORA PDF: evidence, guides, maintenance, roadmap.",
            },
        ],

        scopeFr: [
            "Site WordPress institutionnel bilingue FR/EN",
            "Staging + production",
            "Sécurité, backups, performance, SEO",
            "Formulaires d'engagement (bénévole, partenariat, contact)",
            "Google My Business + réseaux sociaux + lignes éditoriales",
            "Documentation de livraison et transfert client",
        ],
        scopeEn: [
            "Bilingual FR/EN institutional WordPress site",
            "Staging + production",
            "Security, backups, performance, SEO",
            "Engagement forms (volunteer, partnership, contact)",
            "Google Business + social networks + editorial lines",
            "Delivery documentation and client handover",
        ],
        nonGoalsFr: [
            "Application métier custom / CRM donateurs avancé",
            "Plateforme de paiement en ligne (dons) — hors sprint initial",
            "App mobile native",
        ],
        nonGoalsEn: [
            "Custom business app / advanced donor CRM",
            "Online donation payment platform — outside initial sprint",
            "Native mobile app",
        ],

        decisions: [
            {
                titleFr: "WordPress + Elementor pour autonomie cliente",
                titleEn: "WordPress + Elementor for client autonomy",
                decisionFr: "CMS éditable par l'équipe ESOPA plutôt qu'un site figé code-only.",
                decisionEn: "CMS editable by the ESOPA team rather than a code-only frozen site.",
                rationaleFr: "Une ONG doit pouvoir publier actualités et projets sans dépendre d'un développeur à chaque fois.",
                rationaleEn: "An NGO must publish news and projects without depending on a developer every time.",
            },
            {
                titleFr: "Staging et production séparés dès le jour 1",
                titleEn: "Separated staging and production from day 1",
                decisionFr: "Valider contenu et plugins hors live avant promotion.",
                decisionEn: "Validate content and plugins off-live before promotion.",
                rationaleFr: "Évite les régressions publiques sur un site de confiance institutionnelle.",
                rationaleEn: "Avoids public regressions on an institutional trust site.",
            },
            {
                titleFr: "Sécurité multi-plugins dès la livraison",
                titleEn: "Multi-plugin security from delivery",
                decisionFr: "Wordfence + Limit Login Attempts + backups automatiques inclus dans le sprint.",
                decisionEn: "Wordfence + Limit Login Attempts + automated backups included in the sprint.",
                rationaleFr: "WordPress exposé = cible permanente ; la sécu ne peut pas être un afterthought ONG.",
                rationaleEn: "Exposed WordPress = permanent target; security cannot be an NGO afterthought.",
            },
            {
                titleFr: "Livrer un écosystème, pas seulement un site",
                titleEn: "Deliver an ecosystem, not just a site",
                decisionFr: "GMB + socials + lignes éditoriales + PDF de livraison dans le même mandat.",
                decisionEn: "GMB + socials + editorial lines + delivery PDF in the same mandate.",
                rationaleFr: "La crédibilité ONG se joue aussi hors du domaine — Maps, réseaux, process.",
                rationaleEn: "NGO credibility also plays outside the domain — Maps, socials, process.",
            },
            {
                titleFr: "Transparence comme surface produit",
                titleEn: "Transparency as a product surface",
                decisionFr: "Pages Transparence, Mentions légales et Confidentialité dès le go-live.",
                decisionEn: "Transparency, Legal and Privacy pages from go-live.",
                rationaleFr: "Donateurs et partenaires techniques jugent la gouvernance autant que le design.",
                rationaleEn: "Donors and technical partners judge governance as much as design.",
            },
        ],

        securityFr: [
            "HTTPS Let's Encrypt + Cloudflare en frontal",
            "Wordfence WAF — ~255 attaques complexes bloquées / mois",
            "Limit Login Attempts Reloaded (anti brute-force admin)",
            "Scan sécurité livraison : risque LOW, 0 vulnérabilité critique/haute/moyenne",
            "Backups automatiques UpdraftPlus",
            "Séparation staging / production pour limiter le blast radius",
        ],
        securityEn: [
            "HTTPS Let's Encrypt + Cloudflare in front",
            "Wordfence WAF — ~255 complex attacks blocked / month",
            "Limit Login Attempts Reloaded (admin brute-force protection)",
            "Delivery security scan: LOW risk, 0 critical/high/medium vulnerabilities",
            "Automated UpdraftPlus backups",
            "Staging / production separation to limit blast radius",
        ],

        infraFr: [
            "WordPress conteneurisé / hébergement pro avec staging + production",
            "Cloudflare DNS/CDN + certificat SSL",
            "LiteSpeed Cache + Asset CleanUp pour la performance",
            "UpdraftPlus (sauvegardes quotidiennes)",
            "WP Mail SMTP pour la délivrabilité des formulaires",
            "Observabilité : Plausible + Google Site Kit",
        ],
        infraEn: [
            "Containerized WordPress / pro hosting with staging + production",
            "Cloudflare DNS/CDN + SSL certificate",
            "LiteSpeed Cache + Asset CleanUp for performance",
            "UpdraftPlus (daily backups)",
            "WP Mail SMTP for form deliverability",
            "Observability: Plausible + Google Site Kit",
        ],

        externalLinks: [
            { labelFr: "esopa.org", labelEn: "esopa.org", url: "https://esopa.org" },
            { labelFr: "Google Business", labelEn: "Google Business", url: "https://share.google/qKdLhrGSv1JRceBR5" },
            { labelFr: "GitHub", labelEn: "GitHub", url: "https://github.com/ZENORA-360/projet-client-esopa" },
            { labelFr: "ZENORA", labelEn: "ZENORA", url: "https://zenora360.com" },
        ],

        lessonsFr: [
            "Pour une ONG, le site est un outil de confiance : transparence et parcours d'engagement valent plus qu'une landing décorative.",
            "Deux semaines suffisent si le scope est tranché — staging/prod, sécu et SEO inclus dès le sprint, pas « plus tard ».",
            "WordPress reste pertinent quand l'autonomie éditoriale du client est un critère métier réel.",
            "Livrer GMB + socials + doc transforme une prestation web en dispositif digital défendable face aux partenaires.",
            "Les métriques (PageSpeed, attaques bloquées, position Google) doivent figurer dans la livraison — elles vendent la suite.",
        ],
        lessonsEn: [
            "For an NGO, the site is a trust tool: transparency and engagement journeys beat a decorative landing.",
            "Two weeks are enough if scope is sharp — staging/prod, security and SEO included in the sprint, not later.",
            "WordPress remains relevant when client editorial autonomy is a real business requirement.",
            "Shipping GMB + socials + docs turns a web job into a digital system partners can defend.",
            "Metrics (PageSpeed, blocked attacks, Google rank) must be in the delivery — they sell the next phase.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                afterSrc: "https://s3.zenora360.com/barthez-portfolio/images/esopa/esopa-ui-home-hero.png",
                captionFr: "D'une absence digitale à une présence institutionnelle live — esopa.org.",
                captionEn: "From no digital presence to a live institutional presence — esopa.org.",
            },
        ],

        isFeatured: false,
    },

    {
        id: 6,
        titleFr: "Supply Chain Pipeline — Kit DevSecOps fail-closed",
        titleEn: "Supply Chain Pipeline — Fail-closed DevSecOps kit",

        descriptionFr: "Colonne vertébrale CI/CD réutilisable : qualité → sécurité → image Trivy → Harbor → Cosign/SBOM → deploy par digest. Née du lab anti-Megalodon, en prod sur zenora360.com et ketc-services.com.",
        descriptionEn: "Reusable CI/CD backbone: quality → security → Trivy image → Harbor → Cosign/SBOM → digest deploy. Born from the anti-Megalodon lab, live on zenora360.com and ketc-services.com.",

        fullDescriptionFr: `En mai 2026, la campagne Megalodon a infecté plus de 5 500 dépôts GitHub. La même année, des empoisonnements de dépendances ont frappé des paquets TanStack (impact OpenAI, Grafana), le client HTTP Axios sur npm, Trivy lui-même (groupe Team PCP), puis le crate Rust arrayref en août 2026. Le constat est brutal : un seul package compromis peut contaminer des milliers de logiciels en aval — et un pipeline CI classique (build vert → push latest → hope) ne protège de rien.

J'ai d'abord traité le sujet comme un lab : comprendre les vecteurs (dependency poisoning, image tampering, secrets leakage, provenance absente), puis transformer la défense en produit. Le résultat est supply-chain-pipeline — un kit DevSecOps prêt à brancher, documenté, fail-closed là où ça compte. Démo live sur supply-chain-demo.barthez-kenwou.dev : une UI guide (résumé, pipeline, intégration, architectures, décisions, retours terrain) qui prouve la chaîne tout en servant d'artefact déployé par cette même chaîne.

Sous le capot : GitHub Actions (CI, Security, Release Image, Deploy) + workflows réutilisables. CI = quality/health, Gitleaks, Hadolint, SonarQube QG bloquant, dependency-review, résumé fail-closed. Security = Trivy fs+config (HIGH/CRITICAL), CodeQL security-extended (YAML Actions), ZAP baseline planifié. Release = build local → gate Trivy image avant tout push Harbor → Cosign keyless + SBOM SPDX + provenance → metadata. Deploy = refuse latest, Cosign verify avant SSH, pull par digest, health + rollback, smoke sur réseau Docker proxy (Nginx Proxy Manager), Slack sur Deploy. Actions pinnées SHA. Harbor zenora-public héberge supply-chain-web, zenora-web et kc-services-web.

Cette colonne vertébrale déploie déjà zenora360.com et ketc-services.com, et restera le standard de livraison ZENORA. Runtime actuel : Docker Compose sur VPS. Une variante Kubernetes pour les charges haute disponibilité est prévue — même discipline supply chain, autre orchestrateur.`,
        fullDescriptionEn: `In May 2026, the Megalodon campaign infected more than 5,500 GitHub repositories. The same year, dependency poisonings hit TanStack packages (impacting OpenAI, Grafana), the Axios HTTP client on npm, Trivy itself (Team PCP), then the Rust crate arrayref in August 2026. The lesson is brutal: one compromised package can contaminate thousands of downstream systems — and a classic CI pipeline (green build → push latest → hope) protects nothing.

I first treated it as a lab: map the vectors (dependency poisoning, image tampering, secrets leakage, missing provenance), then turn defense into a product. The result is supply-chain-pipeline — a plug-and-play DevSecOps kit, documented, fail-closed where it matters. Live demo at supply-chain-demo.barthez-kenwou.dev: a guided UI (summary, pipeline, integration, architectures, decisions, field notes) that proves the chain while being an artifact deployed by that same chain.

Under the hood: GitHub Actions (CI, Security, Release Image, Deploy) + reusable workflows. CI = quality/health, Gitleaks, Hadolint, blocking SonarQube QG, dependency-review, fail-closed summary. Security = Trivy fs+config (HIGH/CRITICAL), CodeQL security-extended (Actions YAML), scheduled ZAP baseline. Release = local build → Trivy image gate before any Harbor push → Cosign keyless + SPDX SBOM + provenance → metadata. Deploy = refuse latest, Cosign verify before SSH, pull by digest, health + rollback, smoke on Docker proxy network (Nginx Proxy Manager), Slack on Deploy. Actions pinned by SHA. Harbor zenora-public hosts supply-chain-web, zenora-web and kc-services-web.

This backbone already ships zenora360.com and ketc-services.com, and remains ZENORA delivery standard. Current runtime: Docker Compose on VPS. A Kubernetes variant for high-availability workloads is planned — same supply-chain discipline, different orchestrator.`,

        problemFr: "Les pipelines CI/CD classiques valident le code puis poussent une image mutable (souvent latest) sans preuve cryptographique ni gate image. Face à Megalodon, à l'empoisonnement npm/crates et au tampering d'images, ce modèle laisse entrer en production ce qu'un attaquant a injecté en amont.",
        problemEn: "Classic CI/CD pipelines validate code then push a mutable image (often latest) without cryptographic proof or an image gate. Against Megalodon, npm/crates poisoning and image tampering, that model lets into production whatever an attacker injected upstream.",

        solutionFr: [
            "Kit reutilisable (.github/ + deploy/) : copier, renommer IMAGE_NAME, brancher les secrets, livrer",
            "CI fail-closed : Quality, Gitleaks, Hadolint, Sonar QG, dependency-review, CI summary",
            "Security : Trivy fs/config HIGH-CRITICAL, CodeQL security-extended, ZAP baseline cron",
            "Release : build local → Trivy image gate → Harbor sha-* → Cosign + SBOM + provenance",
            "Deploy : refuse latest, Cosign verify avant SSH, pull digest, health/rollback, smoke proxy",
            "Runtime VPS : Compose + Nginx Proxy Manager + Cloudflare, sans bind hote :80",
            "Dependabot + actions pinnees SHA + secrets Harbor/SSH/Sonar/Slack hors repo",
            "Demo UI pedagogique deployee par la chaine elle-meme (dogfooding)",
        ],
        solutionEn: [
            "Reusable kit (.github/ + deploy/): copy, rename IMAGE_NAME, wire secrets, ship",
            "Fail-closed CI: Quality, Gitleaks, Hadolint, Sonar QG, dependency-review, CI summary",
            "Security: Trivy fs/config HIGH-CRITICAL, CodeQL security-extended, ZAP baseline cron",
            "Release: local build → Trivy image gate → Harbor sha-* → Cosign + SBOM + provenance",
            "Deploy: refuse latest, Cosign verify before SSH, digest pull, health/rollback, proxy smoke",
            "VPS runtime: Compose + Nginx Proxy Manager + Cloudflare, no host :80 bind",
            "Dependabot + SHA-pinned actions + Harbor/SSH/Sonar/Slack secrets out of repo",
            "Pedagogical demo UI deployed by the chain itself (dogfooding)",
        ],

        challengesFr: [
            "Transformer un lab threat-model en kit production reutilisable (pas une demo jetable)",
            "Fail-closed sans tuer la productivite : skips explicites (Sonar absent) vs gates dures",
            "Harbor Cosign policy HTTP 412 sur pull VPS — workaround artifact release-image + verify",
            "SSH Deploy sous UFW limit : session unique ControlMaster, known_hosts pines",
            "Smoke HTTPS public vs Bot Fight Cloudflare — smoke reseau Docker prioritaire",
            "CodeQL sur YAML Actions (demo nginx sans sources JS) tout en restant pertinent",
            "Industrialiser pour plusieurs produits ZENORA sans forker la discipline a chaque repo",
        ],
        challengesEn: [
            "Turn a threat-model lab into a reusable production kit (not a throwaway demo)",
            "Fail-closed without killing velocity: explicit skips (Sonar absent) vs hard gates",
            "Harbor Cosign policy HTTP 412 on VPS pull — release-image artifact + verify workaround",
            "SSH Deploy under UFW limit: single ControlMaster session, pinned known_hosts",
            "Public HTTPS smoke vs Cloudflare Bot Fight — Docker-network smoke first",
            "CodeQL on Actions YAML (nginx demo without JS sources) while staying meaningful",
            "Industrialize for multiple ZENORA products without forking discipline per repo",
        ],

        impactFr: [
            "Colonne vertebrale unique pour supply-chain-demo, zenora360.com et ketc-services.com",
            "Aucune image Harbor sans gate Trivy image HIGH/CRITICAL verte",
            "Aucun deploy production sur latest — digest immuable + Cosign verify avant SSH",
            "SonarQube Quality Gate Passed (0 new issues, Security Hotspots A) sur le demo kit",
            "68+ runs Actions documentes : CI, Security schedule, Release, Deploy, Dependabot",
            "Slack #prod-alerts : visibilite temps reel des deploys production",
            "Standard interne ZENORA pret pour une variante Kubernetes HA",
        ],
        impactEn: [
            "Single backbone for supply-chain-demo, zenora360.com and ketc-services.com",
            "No Harbor image without a green Trivy image HIGH/CRITICAL gate",
            "No production deploy on latest — immutable digest + Cosign verify before SSH",
            "SonarQube Quality Gate Passed (0 new issues, Security Hotspots A) on the demo kit",
            "68+ documented Actions runs: CI, Security schedule, Release, Deploy, Dependabot",
            "Slack #prod-alerts: real-time visibility into production deploys",
            "Internal ZENORA standard ready for a Kubernetes HA variant",
        ],

        metrics: {
            "Quality Gate": "Passed",
            "Security Hotspots": "A",
            "New Issues": "0",
            "Actions runs": "68+",
            "Harbor artifacts (demo)": "28",
            "Deploy model": "digest + Cosign",
            "Prod clients": "zenora360 + ketc",
            "Trivy gate": "HIGH/CRITICAL block",
            "Runtime": "Compose VPS",
            "Next": "Kubernetes HA",
        },

        techStack: {
            frontend: ["HTML", "CSS", "JavaScript", "Nginx static demo"],
            backend: [],
            database: [],
            devops: [
                "GitHub Actions",
                "reusable workflows",
                "Gitleaks",
                "Hadolint",
                "SonarQube",
                "Trivy",
                "CodeQL",
                "OWASP ZAP",
                "Dependabot",
                "Docker",
                "Docker Compose",
                "Harbor",
                "Cosign / Sigstore",
                "SBOM SPDX",
                "attestations",
                "Nginx Proxy Manager",
                "Cloudflare",
                "OVH VPS",
                "Slack",
            ],
        },

        architecture: [
            "Quatre workflows : CI | Security | Release Image | Deploy (+ reusable quality/notify)",
            "Fail-closed summaries (CI summary, Security summary) comme checks de branche",
            "Release : buildx load local → Trivy image → push Harbor sha-* → Cosign → SBOM → metadata",
            "Deploy : workflow_run apres Release OK → resolve digest → Cosign verify → SSH mux → Compose",
            "Runtime : conteneur :8080 sur reseau Docker partage avec Nginx Proxy Manager, edge Cloudflare",
            "Registry Harbor zenora-public multi-repos (supply-chain-web, zenora-web, kc-services-web)",
            "Kit greffable : meme discipline sur d autres produits en changeant IMAGE_NAME + secrets",
        ],

        testing: [
            "Quality reusable : asset checks, image build, /health",
            "Gitleaks secrets scan + Hadolint Dockerfile",
            "SonarQube qualitygate.wait bloquant quand SONAR_* present",
            "Trivy filesystem + config + image (HIGH/CRITICAL, exit 1)",
            "CodeQL security-extended (language actions)",
            "ZAP baseline schedule / workflow_dispatch + artefactes",
            "Deploy smoke : conteneur + reseau proxy + digest ; rollback si health KO",
        ],

        images: [
            "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-ci-pipeline.png",
            "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-security-pipeline.png",
            "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-deploy-cosign.png",
            "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-harbor-registry.png",
            "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-sonar-qg.png",
            "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-github-repo.png",
        ],
        preview: "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-ci-pipeline.png",
        videoDemo: "",

        category: "DevSecOps • Supply Chain",
        status: "Production",
        complexity: "Expert",
        role: "DevSecOps Engineer • Platform",
        teamSize: 1,

        duration: "Lab → kit prod (2026)",
        date: "2026",

        github: "https://github.com/barthez-kenwou/supply-chain-pipeline",
        demo: "https://supply-chain-demo.barthez-kenwou.dev/",

        businessContextFr: "Réponse ingénierie aux attaques supply chain 2026 (Megalodon, npm/crates poisoning) : industrialiser une chaîne de livraison ZENORA où rien n'entre en prod sans scan image, signature et deploy par digest — et la rendre réutilisable projet après projet.",
        businessContextEn: "Engineering response to 2026 supply-chain attacks (Megalodon, npm/crates poisoning): industrialize a ZENORA delivery chain where nothing reaches prod without image scan, signature and digest deploy — and make it reusable across projects.",

        confidential: false,

        responsibilitiesFr: [
            "Threat modeling supply chain (poisoning, tampering, secrets, provenance)",
            "Conception et implementation des workflows CI / Security / Release / Deploy",
            "Gates fail-closed (Trivy, Sonar, Cosign verify, refuse latest)",
            "Integration Harbor, SSH VPS, NPM proxy, Cloudflare, Slack",
            "Kit documente + UI demo pedagogique dogfoodée",
            "Deploiement / adoption sur produits ZENORA (zenora360, ketc-services)",
        ],
        responsibilitiesEn: [
            "Supply-chain threat modeling (poisoning, tampering, secrets, provenance)",
            "Design and implementation of CI / Security / Release / Deploy workflows",
            "Fail-closed gates (Trivy, Sonar, Cosign verify, refuse latest)",
            "Harbor, SSH VPS, NPM proxy, Cloudflare, Slack integration",
            "Documented kit + dogfooded pedagogical demo UI",
            "Rollout / adoption on ZENORA products (zenora360, ketc-services)",
        ],

        gallery: [
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-github-repo.png",
                captionFr: "Repo public — kit plug-and-play qualite, securite, Cosign, deploy digest",
                captionEn: "Public repo — plug-and-play kit quality, security, Cosign, digest deploy",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-actions-list.png",
                captionFr: "GitHub Actions — CI, Security, Release, Deploy, Dependabot, attestations",
                captionEn: "GitHub Actions — CI, Security, Release, Deploy, Dependabot, attestations",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-ci-pipeline.png",
                captionFr: "CI #28 — Quality, Gitleaks, Hadolint, SonarQube, CI summary fail-closed",
                captionEn: "CI #28 — Quality, Gitleaks, Hadolint, SonarQube, fail-closed CI summary",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-security-pipeline.png",
                captionFr: "Security #32 — Trivy fs/config, CodeQL actions, ZAP baseline, summary",
                captionEn: "Security #32 — Trivy fs/config, CodeQL actions, ZAP baseline, summary",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-deploy-cosign.png",
                captionFr: "Deploy #17 — resolve tag/digest, Cosign verify, prod SSH, notify",
                captionEn: "Deploy #17 — resolve tag/digest, Cosign verify, prod SSH, notify",
                kind: "process",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-sonar-qg.png",
                captionFr: "SonarQube — Quality Gate Passed, 0 new issues, Security Hotspots A",
                captionEn: "SonarQube — Quality Gate Passed, 0 new issues, Security Hotspots A",
                kind: "metric",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-harbor-registry.png",
                captionFr: "Harbor zenora-public — supply-chain-web, zenora-web, kc-services-web",
                captionEn: "Harbor zenora-public — supply-chain-web, zenora-web, kc-services-web",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-github-secrets.png",
                captionFr: "Secrets Actions — Harbor, SSH deploy, Sonar, Slack (zero secret in repo)",
                captionEn: "Actions secrets — Harbor, SSH deploy, Sonar, Slack (zero secrets in repo)",
                kind: "infra",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-slack-alerts.png",
                captionFr: "Slack #prod-alerts — notifications Deploy production (discipline partagee)",
                captionEn: "Slack #prod-alerts — production Deploy notifications (shared discipline)",
                kind: "other",
            },
        ],

        diagrams: [
            {
                id: "sc-workflows",
                titleFr: "Carte des workflows GitHub Actions",
                titleEn: "GitHub Actions workflow map",
                mermaid: `flowchart TB
  PR[PR / push] --> CI[CI]
  PR --> SEC[Security]
  MAIN[merge main] --> REL[Release Image]
  REL -->|workflow_run + metadata| DEP[Deploy]
  DEP --> HOST[VPS Compose reverse proxy]
  CRON[schedule lundi] --> ZAP[ZAP baseline]
  ZAP --> SEC`,
            },
            {
                id: "sc-release-seq",
                titleFr: "Sequence Release vers production",
                titleEn: "Release to production sequence",
                mermaid: `sequenceDiagram
  participant Dev as Dev
  participant CI as CI Security
  participant Rel as Release
  participant Har as Harbor
  participant Dep as Deploy
  participant VPS as VPS
  Dev->>CI: push / PR
  CI-->>Dev: CI + Security summary
  Dev->>Rel: merge main
  Rel->>Rel: quality + build local
  Rel->>Rel: Trivy image gate
  Note over Rel: Echec = aucun push Harbor
  Rel->>Har: push sha-xxxxxxx
  Rel->>Har: Cosign sign + SBOM
  Rel-->>Dep: workflow_run success
  Dep->>Har: Cosign verify digest
  Dep->>VPS: SSH pull digest + health
  alt health KO
    VPS->>VPS: rollback
  end`,
            },
            {
                id: "sc-runtime",
                titleFr: "Runtime VPS — edge to conteneur",
                titleEn: "VPS runtime — edge to container",
                mermaid: `flowchart LR
  U[Clients] --> CF[Cloudflare]
  CF --> NPM[Nginx Proxy Manager]
  NPM --> NET[docker network web-proxy]
  NET --> WEB[app container :8080]
  HAR[Harbor digest] -.->|deploy pull| WEB`,
            },
            {
                id: "sc-ci-jobs",
                titleFr: "CI — jobs et gate resume",
                titleEn: "CI — jobs and summary gate",
                mermaid: `flowchart LR
  Q[reusable-quality] --> SQ[Sonar QG]
  GL[Gitleaks]
  HD[Hadolint]
  DR[dependency-review]
  Q --> CIS{CI summary}
  GL --> CIS
  HD --> CIS
  DR --> CIS
  SQ --> CIS
  CIS -->|fail| RED[bloque]
  CIS -->|ok| GREEN[vert]`,
            },
            {
                id: "sc-threats",
                titleFr: "Menaces 2026 → controles pipeline",
                titleEn: "2026 threats → pipeline controls",
                mermaid: `flowchart TB
  M[Megalodon / repo malware] --> GL[Gitleaks + CodeQL Actions]
  D[Dependency poisoning npm crates] --> TR[Trivy fs + Dependabot]
  I[Image tampering] --> TI[Trivy image + Cosign]
  L[latest mutable deploy] --> DG[digest only + refuse latest]
  S[Secrets leakage] --> SEC[repo secrets + redact]
  P[Missing provenance] --> SB[SBOM SPDX + attestations]`,
            },
            {
                id: "sc-failclosed",
                titleFr: "Principes fail-closed non negociables",
                titleEn: "Non-negotiable fail-closed principles",
                mermaid: `flowchart TB
  A[Pas d image Harbor sans Trivy OK] --> B[Pas de SSH sans Cosign verify]
  B --> C[Pas de prod sur latest]
  C --> D[Rollback avec preuve health]
  D --> E[Actions critiques pinnees SHA]`,
            },
            {
                id: "sc-reuse",
                titleFr: "Adoption multi-produits ZENORA",
                titleEn: "Multi-product ZENORA adoption",
                mermaid: `flowchart LR
  KIT[supply-chain-pipeline kit] --> DEMO[supply-chain-demo]
  KIT --> Z[zenora360.com]
  KIT --> K[ketc-services.com]
  KIT --> NEXT[futurs services ZENORA]
  NEXT --> K8S[variante Kubernetes HA]`,
            },
        ],

        resources: [
            { labelFr: "Repo GitHub supply-chain-pipeline", labelEn: "GitHub repo supply-chain-pipeline", url: "https://github.com/barthez-kenwou/supply-chain-pipeline", type: "other" },
            { labelFr: "Demo live", labelEn: "Live demo", url: "https://supply-chain-demo.barthez-kenwou.dev/", type: "other" },
            { labelFr: "Doc workflows (.github/README)", labelEn: "Workflows docs (.github/README)", url: "https://github.com/barthez-kenwou/supply-chain-pipeline/tree/main/.github", type: "spec" },
            { labelFr: "zenora360.com (prod)", labelEn: "zenora360.com (prod)", url: "https://zenora360.com/", type: "other" },
            { labelFr: "ketc-services.com (prod)", labelEn: "ketc-services.com (prod)", url: "https://ketc-services.com/", type: "other" },
        ],

        milestones: [
            {
                labelFr: "Lab threat model Megalodon / poisoning",
                labelEn: "Megalodon / poisoning threat-model lab",
                date: "2026",
                descriptionFr: "Cartographie des vecteurs et premieres gates CI/Security.",
                descriptionEn: "Vector mapping and first CI/Security gates.",
            },
            {
                labelFr: "Kit Release + Cosign + Harbor",
                labelEn: "Release + Cosign + Harbor kit",
                date: "2026",
                descriptionFr: "Trivy-before-push, signature keyless, SBOM, metadata.",
                descriptionEn: "Trivy-before-push, keyless signing, SBOM, metadata.",
            },
            {
                labelFr: "Deploy digest + smoke proxy + Slack",
                labelEn: "Digest deploy + proxy smoke + Slack",
                date: "2026",
                descriptionFr: "SSH mux, refuse latest, rollback health, alertes prod.",
                descriptionEn: "SSH mux, refuse latest, health rollback, prod alerts.",
            },
            {
                labelFr: "Adoption zenora360 + ketc-services",
                labelEn: "zenora360 + ketc-services adoption",
                date: "2026",
                descriptionFr: "Meme discipline sur produits reels Harbor zenora-public.",
                descriptionEn: "Same discipline on real products in Harbor zenora-public.",
            },
            {
                labelFr: "Variante Kubernetes HA (roadmap)",
                labelEn: "Kubernetes HA variant (roadmap)",
                date: "Prochaine",
                descriptionFr: "Meme supply chain, orchestrateur pour charges exigeantes.",
                descriptionEn: "Same supply chain, orchestrator for demanding workloads.",
            },
        ],

        scopeFr: [
            "Kit CI/CD DevSecOps reutilisable (workflows + deploy + compose)",
            "Gates qualite / secrets / SAST / SCA / DAST baseline",
            "Registry Harbor + Cosign + SBOM + provenance",
            "Deploy VPS Compose par digest avec rollback",
            "Demo UI + documentation d integration",
            "Adoption multi-produits ZENORA",
        ],
        scopeEn: [
            "Reusable DevSecOps CI/CD kit (workflows + deploy + compose)",
            "Quality / secrets / SAST / SCA / DAST baseline gates",
            "Harbor registry + Cosign + SBOM + provenance",
            "VPS Compose digest deploy with rollback",
            "Demo UI + integration documentation",
            "Multi-product ZENORA adoption",
        ],
        nonGoalsFr: [
            "Remplacer un SOC 24/7 managé",
            "Orchestration Kubernetes (roadmap, hors runtime actuel)",
            "DAST ZAP bloquant sur chaque push (reserve schedule/manuel)",
        ],
        nonGoalsEn: [
            "Replacing a managed 24/7 SOC",
            "Kubernetes orchestration (roadmap, outside current runtime)",
            "Blocking ZAP DAST on every push (schedule/manual only)",
        ],

        decisions: [
            {
                titleFr: "Fail-closed avant tout push registry",
                titleEn: "Fail-closed before any registry push",
                decisionFr: "Build local + Trivy image ; echec = aucun artefact Harbor.",
                decisionEn: "Local build + Trivy image; failure = no Harbor artifact.",
                rationaleFr: "Une image compromise dans le registry est deja trop tard.",
                rationaleEn: "A compromised image in the registry is already too late.",
            },
            {
                titleFr: "Deploy par digest, jamais latest",
                titleEn: "Deploy by digest, never latest",
                decisionFr: "Prod exige sha-* + sha256 ; latest refuse explicitement.",
                decisionEn: "Prod requires sha-* + sha256; latest explicitly refused.",
                rationaleFr: "latest est mutable — incompatible avec une preuve supply chain.",
                rationaleEn: "latest is mutable — incompatible with supply-chain proof.",
            },
            {
                titleFr: "Cosign verify avant SSH",
                titleEn: "Cosign verify before SSH",
                decisionFr: "La signature est verifiee cote Actions avant toute session deploy.",
                decisionEn: "Signature is verified on Actions before any deploy session.",
                rationaleFr: "Signer sans verifier au deploy est du theatre securite.",
                rationaleEn: "Signing without verify at deploy is security theatre.",
            },
            {
                titleFr: "Cosign keyless OIDC GitHub",
                titleEn: "Cosign keyless GitHub OIDC",
                decisionFr: "Pas de cle longue duree a rotater dans les secrets.",
                decisionEn: "No long-lived signing key to rotate in secrets.",
                rationaleFr: "Identite de build = workflow GitHub ; auditabilite Sigstore.",
                rationaleEn: "Build identity = GitHub workflow; Sigstore auditability.",
            },
            {
                titleFr: "Kit greffable plutot que pipeline mono-repo",
                titleEn: "Graftable kit over mono-repo-only pipeline",
                decisionFr: "Copier .github/ + deploy/ et personnaliser IMAGE_NAME.",
                decisionEn: "Copy .github/ + deploy/ and customize IMAGE_NAME.",
                rationaleFr: "ZENORA a plusieurs produits — la discipline doit voyager.",
                rationaleEn: "ZENORA has multiple products — discipline must travel.",
            },
            {
                titleFr: "Compose maintenant, Kubernetes ensuite",
                titleEn: "Compose now, Kubernetes next",
                decisionFr: "Runtime VPS Compose pour le standard actuel ; K8s pour la HA.",
                decisionEn: "Compose VPS runtime for current standard; K8s for HA.",
                rationaleFr: "La supply chain est orthogonale a l orchestrateur — on solidifie d abord les gates.",
                rationaleEn: "Supply chain is orthogonal to the orchestrator — harden gates first.",
            },
        ],

        securityFr: [
            "Gitleaks + secrets GitHub Actions (Harbor, SSH, Sonar, Slack) hors code",
            "Trivy fs/config/image bloquant HIGH/CRITICAL (ignore-unfixed)",
            "SonarQube qualitygate.wait + Security Hotspots A",
            "CodeQL security-extended sur workflows Actions",
            "Cosign sign + verify ; SBOM SPDX ; attestations / provenance",
            "Refuse deploy latest ; known_hosts pines ; SSH ControlMaster",
            "Dependabot + actions pinnees SHA ; paths-ignore docs pour bruit CI",
        ],
        securityEn: [
            "Gitleaks + GitHub Actions secrets (Harbor, SSH, Sonar, Slack) out of code",
            "Blocking Trivy fs/config/image HIGH/CRITICAL (ignore-unfixed)",
            "SonarQube qualitygate.wait + Security Hotspots A",
            "CodeQL security-extended on Actions workflows",
            "Cosign sign + verify; SPDX SBOM; attestations / provenance",
            "Refuse latest deploy; pinned known_hosts; SSH ControlMaster",
            "Dependabot + SHA-pinned actions; docs paths-ignore to cut CI noise",
        ],

        infraFr: [
            "GitHub Actions (CI, Security, Release, Deploy, reusable)",
            "Harbor OCI (projet zenora-public) + Cosign",
            "Docker Compose prod sur reseau proxy externe (NPM)",
            "VPS OVH + Cloudflare edge",
            "Slack webhooks Deploy / Release echec",
            "SonarQube Community (projet supply-chain-demo)",
        ],
        infraEn: [
            "GitHub Actions (CI, Security, Release, Deploy, reusable)",
            "Harbor OCI (zenora-public project) + Cosign",
            "Prod Docker Compose on external proxy network (NPM)",
            "OVH VPS + Cloudflare edge",
            "Slack webhooks for Deploy / failed Release",
            "SonarQube Community (supply-chain-demo project)",
        ],

        externalLinks: [
            { labelFr: "GitHub", labelEn: "GitHub", url: "https://github.com/barthez-kenwou/supply-chain-pipeline" },
            { labelFr: "Demo", labelEn: "Demo", url: "https://supply-chain-demo.barthez-kenwou.dev/" },
            { labelFr: "zenora360.com", labelEn: "zenora360.com", url: "https://zenora360.com/" },
            { labelFr: "ketc-services.com", labelEn: "ketc-services.com", url: "https://ketc-services.com/" },
        ],

        lessonsFr: [
            "Megalodon et le poisoning npm/crates ont change la donne : un CI vert sans gate image ni provenance est une illusion de securite.",
            "Signer une image n a de valeur que si le Deploy verifie la signature avant SSH.",
            "latest en production est un anti-pattern supply chain — le digest est la seule verite.",
            "Un lab devient un actif entreprise quand il est greffable : meme discipline, autres IMAGE_NAME.",
            "Les retours terrain (Harbor 412, UFW SSH, CF 403) valent autant que le schema Mermaid — ils evitent de reconstruire les pieges.",
            "Compose vs Kubernetes n est pas le combat : les gates fail-closed le sont.",
        ],
        lessonsEn: [
            "Megalodon and npm/crates poisoning changed the game: green CI without an image gate or provenance is security theatre.",
            "Signing an image only matters if Deploy verifies the signature before SSH.",
            "latest in production is a supply-chain anti-pattern — the digest is the only truth.",
            "A lab becomes a company asset when it is graftable: same discipline, different IMAGE_NAME.",
            "Field notes (Harbor 412, UFW SSH, CF 403) matter as much as the Mermaid diagram — they prevent rebuilding the traps.",
            "Compose vs Kubernetes is not the fight: fail-closed gates are.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                afterSrc: "https://s3.zenora360.com/barthez-portfolio/images/supply-chain/sc-deploy-cosign.png",
                captionFr: "D un CI build and ship a une supply chain verifiee : Trivy → Harbor → Cosign → digest deploy.",
                captionEn: "From build-and-ship CI to a verified supply chain: Trivy → Harbor → Cosign → digest deploy.",
            },
        ],

        isFeatured: true,
    },

    {
        id: 7,
        titleFr: "Odoo Docker Infra — Lab DevSecOps multi-environnements",
        titleEn: "Odoo Docker Infra — Multi-environment DevSecOps lab",

        descriptionFr: "Lab enterprise-ready : plateforme de déploiement Odoo 100% déclarative (Docker Compose + Terraform + Infisical + CI/CD DevSecOps), staging/prod isolés, secrets rotatifs, supply chain d'images et observabilité — conçue pour être greffée sur de vrais besoins métier.",
        descriptionEn: "Enterprise-ready lab: fully declarative Odoo deployment platform (Docker Compose + Terraform + Infisical + DevSecOps CI/CD), isolated staging/prod, rotating secrets, image supply chain and observability — built to be grafted onto real business needs.",

        fullDescriptionFr: `Ce projet n'est pas « un Odoo client » déguisé. C'est un lab d'ingénierie plateforme que j'ai construit pour transformer des concepts théoriques (IaC, secrets, DevSecOps, HA opérationnelle, DR) en infrastructure réutilisable — sur un besoin réel et pertinent : déployer Odoo comme on le ferait pour une entreprise.

Je connaissais déjà Odoo (usage, configuration, déploiements antérieurs). Ici l'objectif primaire était l'infra : Docker, réseaux segmentés, multi-environnements, Terraform, Infisical self-hosted, pipelines fail-closed, registry, observabilité, backups/restore testés. J'ai consolidé ça via des labs (Killercoda, AWS Skill Builder, Certland), des cours (Udemy, DataCamp, YouTube) et une lecture minutieuse des docs Docker/Terraform/Odoo — puis j'ai couronné par une plateforme documentée, greffable, enterprise-ready.

Architecture 3-tiers : reverse proxy → Odoo → PostgreSQL. Séparation stricte dev / staging / production (réseaux Docker public/privé/database, volumes, bases, domaines, TLS et secrets séparés — aucun secret prod dans staging). Infrastructure entièrement déclarative : Terraform (modules, remote state, locking, tfvars, validate/fmt/plan, TFLint, Checkov, Trivy IaC). Images Odoo/PostgreSQL pinnées (jamais latest), non-root quand possible, healthchecks, resource limits, no-new-privileges, scan Trivy, SBOM, Cosign. Secrets hors Git via Infisical (rotation Postgres/SMTP, audit). CI/CD GitHub Actions : SAST/SCA/secrets/IaC/container, Harbor, gates bloquantes, promotion d'artifact unique staging→prod, smoke + rollback. Observabilité Prometheus/Grafana/Loki/Tempo + alerting. Backups PostgreSQL + filestore (stratégie 3-2-1), RPO/RTO et runbooks DR. Preview fonctionnelle : erp-dev.zenora360.com.

Résultat : quand un besoin Odoo revient, on ne repart plus de zéro — on récupère odoo-docker-infra, on personnalise, on livre. Et quand un projet non-Odoo demande la même discipline (Compose multi-env, secrets, supply chain, DR), les concepts sont déjà maîtrisés.`,
        fullDescriptionEn: `This project is not a disguised “client Odoo”. It is a platform-engineering lab I built to turn theoretical concepts (IaC, secrets, DevSecOps, operational HA, DR) into reusable infrastructure — on a real, relevant need: deploy Odoo the way you would for a company.

I already knew Odoo (usage, configuration, prior deployments). Here the primary goal was infra: Docker, segmented networks, multi-environment, Terraform, self-hosted Infisical, fail-closed pipelines, registry, observability, tested backups/restores. I consolidated that through labs (Killercoda, AWS Skill Builder, Certland), courses (Udemy, DataCamp, YouTube) and careful reading of Docker/Terraform/Odoo docs — then crowned it with a documented, graftable, enterprise-ready platform.

3-tier architecture: reverse proxy → Odoo → PostgreSQL. Strict separation of dev / staging / production (Docker public/private/database networks, volumes, databases, domains, TLS and secrets separated — no prod secrets in staging). Fully declarative infrastructure: Terraform (modules, remote state, locking, tfvars, validate/fmt/plan, TFLint, Checkov, Trivy IaC). Pinned Odoo/PostgreSQL images (never latest), non-root when possible, healthchecks, resource limits, no-new-privileges, Trivy scan, SBOM, Cosign. Secrets out of Git via Infisical (Postgres/SMTP rotation, audit). GitHub Actions CI/CD: SAST/SCA/secrets/IaC/container, Harbor, blocking gates, single-artifact promotion staging→prod, smoke + rollback. Observability Prometheus/Grafana/Loki/Tempo + alerting. PostgreSQL + filestore backups (3-2-1), RPO/RTO and DR runbooks. Functional preview: erp-dev.zenora360.com.

Outcome: when an Odoo need returns, we no longer start from scratch — we take odoo-docker-infra, customize, ship. And when a non-Odoo project needs the same discipline (multi-env Compose, secrets, supply chain, DR), the concepts are already mastered.`,

        problemFr: "Savoir « lancer Odoo » n'équivaut pas à maîtriser une plateforme enterprise-ready : multi-env isolés, secrets rotatifs, supply chain d'images, IaC, observabilité et DR testés. Sans ce socle, chaque nouveau déploiement Odoo (ou stack similaire) redevient un bricolage risqué.",
        problemEn: "Knowing how to “start Odoo” is not the same as mastering an enterprise-ready platform: isolated multi-env, rotating secrets, image supply chain, IaC, observability and tested DR. Without that foundation, every new Odoo (or similar) deployment becomes risky improvisation again.",

        solutionFr: [
            "Plateforme Docker Compose multi-env (dev/staging/prod) 3-tiers, réseaux segmentés",
            "Terraform IaC : modules, remote state, locking, policy-as-code (TFLint/Checkov/Trivy)",
            "Infisical self-hosted : secrets hors Git, rotation, séparation staging/prod",
            "Images pinnées + hardening conteneur + Trivy/SBOM/Cosign + Harbor",
            "CI/CD fail-closed : qualité → sécu → release → promotion staging→prod",
            "Observabilité (Prometheus/Grafana/Loki/Tempo) + alerting + runbooks",
            "Backups PostgreSQL + filestore, restore testé, RPO/RTO documentés",
            "Kit greffable documenté (ADR, diagrammes, runbooks) réutilisable hors Odoo",
        ],
        solutionEn: [
            "Multi-env Docker Compose platform (dev/staging/prod) 3-tier, segmented networks",
            "Terraform IaC: modules, remote state, locking, policy-as-code (TFLint/Checkov/Trivy)",
            "Self-hosted Infisical: secrets out of Git, rotation, staging/prod separation",
            "Pinned images + container hardening + Trivy/SBOM/Cosign + Harbor",
            "Fail-closed CI/CD: quality → security → release → staging→prod promotion",
            "Observability (Prometheus/Grafana/Loki/Tempo) + alerting + runbooks",
            "PostgreSQL + filestore backups, tested restore, documented RPO/RTO",
            "Documented graftable kit (ADRs, diagrams, runbooks) reusable beyond Odoo",
        ],

        challengesFr: [
            "Transformer un lab pédagogique en socle enterprise-ready sans perdre la clarté d'apprentissage",
            "Isoler strictement staging/prod (réseaux, secrets, données) tout en gardant la reproductibilité",
            "Durcir Odoo + Postgres sous Compose (non-root, limits, capabilities) sans casser longpolling",
            "Brancher Infisical self-hosted et rotation sans fuites dans compose/Dockerfile",
            "Industrialiser CI DevSecOps (gates bloquantes) sans rendre le lab inutilisable",
            "Prouver DR : backup/restore PostgreSQL + filestore, pas seulement un dump théorique",
        ],
        challengesEn: [
            "Turn a learning lab into an enterprise-ready foundation without losing learning clarity",
            "Strictly isolate staging/prod (networks, secrets, data) while keeping reproducibility",
            "Harden Odoo + Postgres under Compose (non-root, limits, capabilities) without breaking longpolling",
            "Wire self-hosted Infisical and rotation without leaks in compose/Dockerfile",
            "Industrialize DevSecOps CI (blocking gates) without making the lab unusable",
            "Prove DR: PostgreSQL + filestore backup/restore, not just a theoretical dump",
        ],

        impactFr: [
            "Socle Docker Odoo réutilisable pour futurs clients / besoins internes ZENORA",
            "Maîtrise opérationnelle multi-env, secrets, IaC et supply chain conteneur",
            "Preview live erp-dev.zenora360.com comme preuve runtime",
            "Transfert de compétences vers stacks non-Odoo de même forme (Compose + proxy + DB)",
            "Base de comparaison claire avant la variante Kubernetes HA (lab jumeau)",
        ],
        impactEn: [
            "Reusable Docker Odoo foundation for future clients / internal ZENORA needs",
            "Operational mastery of multi-env, secrets, IaC and container supply chain",
            "Live preview erp-dev.zenora360.com as runtime proof",
            "Skill transfer to non-Odoo stacks of the same shape (Compose + proxy + DB)",
            "Clear baseline before the Kubernetes HA twin lab",
        ],

        metrics: {
            "Envs": "dev / staging / prod",
            "Architecture": "3-tiers",
            "Secrets": "Infisical self-hosted",
            "IaC": "Terraform + policy scan",
            "Images": "pinned + Cosign",
            "Preview": "erp-dev.zenora360.com",
            "Backup": "PG + filestore testés",
            "Kit": "greffable",
        },

        techStack: {
            frontend: ["Odoo Web"],
            backend: ["Odoo", "Python"],
            database: ["PostgreSQL", "PgBouncer"],
            devops: [
                "Docker",
                "Docker Compose",
                "Terraform",
                "TFLint",
                "Checkov",
                "Infisical",
                "Nginx / Traefik",
                "GitHub Actions",
                "Harbor",
                "Trivy",
                "Gitleaks",
                "Syft",
                "Grype",
                "Cosign",
                "Prometheus",
                "Grafana",
                "Loki",
                "Tempo",
                "OpenTelemetry",
                "Cloudflare",
            ],
        },

        architecture: [
            "3-tiers : reverse proxy TLS → Odoo (workers + longpolling) → PostgreSQL dédié",
            "Réseaux Docker segmentés public / privé / database — aucun service interne exposé",
            "Environnements isolés : compose + tfvars + secrets Infisical + domaines/TLS séparés",
            "Filestore persistant + cohérence backup avec PostgreSQL",
            "CI build unique → scan → sign → Harbor → promotion staging→prod",
            "Observabilité metrics/logs/traces + alerting + runbooks incident/DR",
        ],

        testing: [
            "terraform validate / plan + TFLint + Checkov + Trivy IaC",
            "Gitleaks / SAST / SCA / container scan gates CI",
            "Smoke post-deploy + healthchecks Odoo/Postgres/proxy",
            "Tests restore backup PostgreSQL + filestore",
            "DAST baseline (ZAP) sur staging",
            "Simulations : secret en commit bloqué, CVE image bloquée, rollback deploy",
        ],

        images: [
            "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-login.png",
            "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-home.png",
            "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-ui-modules.png",
        ],
        preview: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-login.png",
        videoDemo: "",

        category: "DevSecOps • Docker • Lab",
        status: "Actif",
        complexity: "Expert",
        role: "DevSecOps Engineer • Platform",
        teamSize: 1,

        duration: "Lab multi-phases (2026)",
        date: "2026",

        github: "https://github.com/barthez-kenwou/odoo-docker-infra",
        demo: "https://erp-dev.zenora360.com/",

        businessContextFr: "Investissement plateforme : industrialiser le déploiement Odoo (et toute stack 3-tiers similaire) pour ZENORA et futurs mandats — apprendre en profondeur, documenter, rendre greffable.",
        businessContextEn: "Platform investment: industrialize Odoo deployment (and any similar 3-tier stack) for ZENORA and future mandates — learn in depth, document, make it graftable.",

        confidential: false,

        responsibilitiesFr: [
            "Conception architecture multi-env Docker et menace model associée",
            "IaC Terraform + durcissement Compose/Odoo/Postgres",
            "Infisical : secrets, rotation, séparation environnements",
            "Pipeline DevSecOps + Harbor + signature Cosign",
            "Observabilité, backups/restore, runbooks DR",
            "Documentation ADR + kit de réutilisation",
        ],
        responsibilitiesEn: [
            "Multi-env Docker architecture design and related threat model",
            "Terraform IaC + Compose/Odoo/Postgres hardening",
            "Infisical: secrets, rotation, environment separation",
            "DevSecOps pipeline + Harbor + Cosign signing",
            "Observability, backup/restore, DR runbooks",
            "ADR documentation + reuse kit",
        ],

        gallery: [
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-login.png",
                captionFr: "Odoo login — erp-dev.zenora360.com (environnement de validation)",
                captionEn: "Odoo login — erp-dev.zenora360.com (validation environment)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-home.png",
                captionFr: "Surface Odoo live — preuve runtime de la stack",
                captionEn: "Live Odoo surface — runtime proof of the stack",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-ui-login-or-home.png",
                captionFr: "Espace applicatif Odoo — modules et navigation métier",
                captionEn: "Odoo app space — modules and business navigation",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-ui-modules.png",
                captionFr: "Apps Odoo — catalogue de modules activés",
                captionEn: "Odoo apps — enabled module catalog",
                kind: "ui",
            },
        ],

        diagrams: [
            {
                id: "odoo-docker-3tier",
                titleFr: "Architecture 3-tiers multi-env",
                titleEn: "Multi-env 3-tier architecture",
                mermaid: `flowchart TB
  U[Users] --> CF[Cloudflare]
  CF --> RP[Reverse proxy TLS]
  subgraph staging [Staging]
    OS[Odoo staging]
    PS[(Postgres staging)]
  end
  subgraph prod [Production]
    OP[Odoo prod]
    PP[(Postgres prod)]
  end
  RP --> OS
  RP --> OP
  OS --> PS
  OP --> PP
  INF[Infisical] -.-> OS
  INF -.-> OP`,
            },
            {
                id: "odoo-docker-network",
                titleFr: "Segmentation réseau Docker",
                titleEn: "Docker network segmentation",
                mermaid: `flowchart LR
  PUB[network public] --> RP[Proxy]
  RP --> PRIV[network private]
  PRIV --> ODOO[Odoo]
  ODOO --> DBN[network database]
  DBN --> PG[(PostgreSQL)]`,
            },
            {
                id: "odoo-docker-cicd",
                titleFr: "CI/CD DevSecOps → promotion",
                titleEn: "DevSecOps CI/CD → promotion",
                mermaid: `flowchart LR
  PR[PR] --> CI[Lint SAST secrets IaC]
  CI --> BL[Build image pinned]
  BL --> SC[Trivy SBOM Cosign]
  SC --> HAR[Harbor]
  HAR --> STG[Deploy staging]
  STG --> VAL[Smoke DAST]
  VAL --> PROD[Promote digest prod]`,
            },
            {
                id: "odoo-docker-secrets",
                titleFr: "Secrets Infisical hors Git",
                titleEn: "Infisical secrets out of Git",
                mermaid: `flowchart TB
  GIT[Git no secrets] --> CI[CI/CD]
  INF[Infisical] --> CI
  CI --> STG[Staging secrets]
  CI --> PROD[Prod secrets]
  STG --> APP1[Odoo staging]
  PROD --> APP2[Odoo prod]`,
            },
            {
                id: "odoo-docker-dr",
                titleFr: "Backup / restore PostgreSQL + filestore",
                titleEn: "PostgreSQL + filestore backup / restore",
                mermaid: `flowchart LR
  PG[(PostgreSQL)] --> B1[Backup DB]
  FS[Filestore] --> B2[Backup files]
  B1 --> OBJ[Object storage]
  B2 --> OBJ
  OBJ --> RST[Restore testé]
  RST --> DR[Runbook DR]`,
            },
        ],

        resources: [
            { labelFr: "Repo odoo-docker-infra", labelEn: "odoo-docker-infra repo", url: "https://github.com/barthez-kenwou/odoo-docker-infra", type: "other" },
            { labelFr: "Preview ERP", labelEn: "ERP preview", url: "https://erp-dev.zenora360.com/", type: "other" },
        ],

        milestones: [
            { labelFr: "Socle Compose 3-tiers + réseaux", labelEn: "Compose 3-tier + networks foundation", date: "Phase 1", descriptionFr: "Proxy, Odoo, Postgres, isolation réseaux.", descriptionEn: "Proxy, Odoo, Postgres, network isolation." },
            { labelFr: "Terraform + Infisical + TLS", labelEn: "Terraform + Infisical + TLS", date: "Phase 2", descriptionFr: "IaC, secrets rotatifs, domaines séparés.", descriptionEn: "IaC, rotating secrets, separated domains." },
            { labelFr: "DevSecOps CI + Harbor + Cosign", labelEn: "DevSecOps CI + Harbor + Cosign", date: "Phase 3", descriptionFr: "Gates, SBOM, promotion staging→prod.", descriptionEn: "Gates, SBOM, staging→prod promotion." },
            { labelFr: "Observabilité + DR testé", labelEn: "Observability + tested DR", date: "Phase 4", descriptionFr: "Metrics/logs/traces, backup/restore, runbooks.", descriptionEn: "Metrics/logs/traces, backup/restore, runbooks." },
        ],

        scopeFr: ["Lab plateforme Odoo Docker multi-env", "IaC Terraform + Infisical", "CI/CD DevSecOps + registry", "Observabilité + backups/DR", "Kit documenté greffable"],
        scopeEn: ["Odoo Docker multi-env platform lab", "Terraform IaC + Infisical", "DevSecOps CI/CD + registry", "Observability + backups/DR", "Documented graftable kit"],
        nonGoalsFr: ["Personnalisation métier Odoo pour un client précis (voir projet ZENORA ERP)", "Orchestration Kubernetes HA (lab jumeau dédié)", "SOC 24/7 managé"],
        nonGoalsEn: ["Business Odoo customization for a specific client (see ZENORA ERP project)", "Kubernetes HA orchestration (dedicated twin lab)", "Managed 24/7 SOC"],

        decisions: [
            { titleFr: "Lab sur besoin Odoo réel, pas toy app", titleEn: "Lab on a real Odoo need, not a toy app", decisionFr: "Odoo comme charge utile pour forcer Postgres, filestore, longpolling, proxy.", decisionEn: "Odoo as workload to force Postgres, filestore, longpolling, proxy.", rationaleFr: "Les concepts collent immédiatement aux futurs mandats ERP.", rationaleEn: "Concepts map immediately to future ERP mandates." },
            { titleFr: "Infisical self-hosted", titleEn: "Self-hosted Infisical", decisionFr: "Secret manager déployé et opéré, pas des .env commitées.", decisionEn: "Deployed and operated secret manager, not committed .env files.", rationaleFr: "Prouve rotation, audit et séparation staging/prod.", rationaleEn: "Proves rotation, audit and staging/prod separation." },
            { titleFr: "Jamais latest", titleEn: "Never latest", decisionFr: "Versions Odoo/Postgres/images pinnées + promotion par digest.", decisionEn: "Pinned Odoo/Postgres/image versions + digest promotion.", rationaleFr: "Reproductibilité et supply chain contrôlée.", rationaleEn: "Reproducibility and controlled supply chain." },
            { titleFr: "Compose d abord, Kubernetes ensuite", titleEn: "Compose first, Kubernetes next", decisionFr: "Maîtriser la plateforme Docker avant la variante HA K8s.", decisionEn: "Master the Docker platform before the HA K8s variant.", rationaleFr: "Les gates et le modèle 3-tiers restent valables ; l orchestrateur change.", rationaleEn: "Gates and 3-tier model remain valid; the orchestrator changes." },
        ],

        securityFr: [
            "Aucun secret dans Git / Dockerfile / compose",
            "Infisical + rotation credentials Postgres/SMTP",
            "Réseaux segmentés, DB non exposée",
            "Conteneurs durcis (non-root, caps drop, no-new-privileges, limits)",
            "Trivy + Gitleaks + IaC scan + Cosign + Harbor",
            "TLS 1.2/1.3, HSTS, headers, rate limiting proxy",
        ],
        securityEn: [
            "No secrets in Git / Dockerfile / compose",
            "Infisical + Postgres/SMTP credential rotation",
            "Segmented networks, DB not exposed",
            "Hardened containers (non-root, caps drop, no-new-privileges, limits)",
            "Trivy + Gitleaks + IaC scan + Cosign + Harbor",
            "TLS 1.2/1.3, HSTS, headers, proxy rate limiting",
        ],
        infraFr: [
            "Docker Compose multi-env déclaratif",
            "Terraform modules + remote state",
            "Infisical self-hosted",
            "Harbor registry privé",
            "Prometheus / Grafana / Loki / Tempo",
            "Backups objet distants + restore drills",
        ],
        infraEn: [
            "Declarative multi-env Docker Compose",
            "Terraform modules + remote state",
            "Self-hosted Infisical",
            "Private Harbor registry",
            "Prometheus / Grafana / Loki / Tempo",
            "Remote object backups + restore drills",
        ],

        externalLinks: [
            { labelFr: "GitHub", labelEn: "GitHub", url: "https://github.com/barthez-kenwou/odoo-docker-infra" },
            { labelFr: "Preview", labelEn: "Preview", url: "https://erp-dev.zenora360.com/" },
        ],

        lessonsFr: [
            "Un lab ne vaut que s il est greffable : documentation, conventions, secrets et CI inclus.",
            "Séparer staging et prod au niveau réseaux/secrets/données — pas seulement via un nom de fichier compose.",
            "Odoo force les vrais sujets : filestore, longpolling, migrations, cohérence backup.",
            "La supply chain d images (pin, scan, sign, promote) est le même combat que sur les autres produits ZENORA.",
            "Maîtriser Compose avant K8s évite de masquer les bases derrière un Helm chart magique.",
        ],
        lessonsEn: [
            "A lab only matters if it is graftable: docs, conventions, secrets and CI included.",
            "Separate staging and prod at network/secret/data level — not just via a compose filename.",
            "Odoo forces the real topics: filestore, longpolling, migrations, backup coherence.",
            "Image supply chain (pin, scan, sign, promote) is the same fight as on other ZENORA products.",
            "Mastering Compose before K8s avoids hiding fundamentals behind a magic Helm chart.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                afterSrc: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-login.png",
                captionFr: "D un Odoo lancé à la main à une plateforme Docker multi-env DevSecOps greffable.",
                captionEn: "From a hand-started Odoo to a graftable multi-env DevSecOps Docker platform.",
            },
        ],

        isFeatured: true,
    },

    {
        id: 14,
        titleFr: "Odoo Kubernetes Infra — Lab HA & orchestration",
        titleEn: "Odoo Kubernetes Infra — HA & orchestration lab",

        descriptionFr: "Lab jumeau haute disponibilité : redéploiement d'Odoo sur Kubernetes pour maîtriser namespaces, workloads, stockage, réseau, GitOps, admission policies et DR — sans raccourci Helm magique, avec la même philosophie enterprise-ready que le lab Docker.",
        descriptionEn: "High-availability twin lab: redeploying Odoo on Kubernetes to master namespaces, workloads, storage, networking, GitOps, admission policies and DR — no magic Helm shortcut, with the same enterprise-ready philosophy as the Docker lab.",

        fullDescriptionFr: `Après le lab Docker, j'ai repris le même besoin Odoo avec un challenge différent : haute disponibilité et maîtrise profonde de Kubernetes. Pas pour « voir Odoo tourner sur K8s » rapidement — pour assimiler namespaces, pods, services, ingress, volumes, ConfigMaps/Secrets, NetworkPolicies, probes, HPA, PDB, anti-affinity, puis GitOps, admission control et DR.

Je n'ai pas pris un Helm chart prêt à l'emploi comme raccourci pédagogique. L'objectif était de comprendre chaque ressource, chaque contrainte, chaque failure domain — quitte à suer — pour pouvoir ré-exploiter ces notions sur des projets exigeants, même éloignés d'Odoo. Labs Killercoda / cloud, cours et docs officielles Kubernetes ont nourri la pratique ; le crowning est odoo-kubctl-infra : une plateforme documentée, multi-env (odoo-dev / odoo-staging / odoo-production + monitoring/logging/security/argocd), architecture Ingress → Odoo → PostgreSQL HA (opérateur type CloudNativePG), zero trust réseau, External Secrets / Infisical-Vault, cert-manager, Harbor + Cosign + Kyverno (refuse root/latest/unsigned), Argo CD, Velero, Prometheus/Grafana/Loki/Tempo, Falco, Trivy Operator, et scénarios chaos/DR.

Même philosophie que le lab Docker : greffable, fail-closed, démontrable (secret bloqué, CVE bloquée, policy qui refuse un Pod, failover Postgres, HPA sous charge, rollback canary). La cible métier Odoo reste validée ; l'orchestrateur change pour les charges qui exigent HA et automatisation d'orchestration.`,
        fullDescriptionEn: `After the Docker lab, I revisited the same Odoo need with a different challenge: high availability and deep Kubernetes mastery. Not to “see Odoo run on K8s” quickly — to internalize namespaces, pods, services, ingress, volumes, ConfigMaps/Secrets, NetworkPolicies, probes, HPA, PDB, anti-affinity, then GitOps, admission control and DR.

I did not take a ready-made Helm chart as a learning shortcut. The goal was to understand every resource, every constraint, every failure domain — even if it meant sweating — to reuse these notions on demanding projects, even far from Odoo. Killercoda / cloud labs, courses and official Kubernetes docs fed the practice; the crowning is odoo-kubctl-infra: a documented multi-env platform (odoo-dev / odoo-staging / odoo-production + monitoring/logging/security/argocd), Ingress → Odoo → HA PostgreSQL (CloudNativePG-style operator), network zero trust, External Secrets / Infisical-Vault, cert-manager, Harbor + Cosign + Kyverno (reject root/latest/unsigned), Argo CD, Velero, Prometheus/Grafana/Loki/Tempo, Falco, Trivy Operator, and chaos/DR scenarios.

Same philosophy as the Docker lab: graftable, fail-closed, demonstrable (blocked secret, blocked CVE, policy rejecting a Pod, Postgres failover, HPA under load, canary rollback). The Odoo business target stays validated; the orchestrator changes for workloads that require HA and orchestration automation.`,

        problemFr: "Compose suffit jusqu'à un point. Au-delà, il faut maîtriser l'orchestration : isolation par namespace, résilience multi-nœuds, stockage dynamique, politiques d'admission, GitOps et recovery cluster — sinon la HA reste un slogan.",
        problemEn: "Compose is enough up to a point. Beyond that you must master orchestration: namespace isolation, multi-node resilience, dynamic storage, admission policies, GitOps and cluster recovery — otherwise HA stays a slogan.",

        solutionFr: [
            "Cluster multi-env : namespaces isolés + ResourceQuota/LimitRange/NetworkPolicy",
            "Workloads Odoo durcis (SecurityContext, probes, HPA, PDB, anti-affinity)",
            "PostgreSQL HA via opérateur (failover, WAL, backups, restore)",
            "Ingress TLS (cert-manager) + longpolling/WebSocket correctement routés",
            "GitOps Argo CD + promotion d'image immutable staging→prod",
            "Admission Kyverno/OPA : refuse root, latest, privileged, unsigned",
            "Observabilité + Falco + Trivy Operator + Velero DR",
            "Chaos / failure drills documentés (node, pod, postgres, rollback)",
        ],
        solutionEn: [
            "Multi-env cluster: isolated namespaces + ResourceQuota/LimitRange/NetworkPolicy",
            "Hardened Odoo workloads (SecurityContext, probes, HPA, PDB, anti-affinity)",
            "HA PostgreSQL via operator (failover, WAL, backups, restore)",
            "TLS Ingress (cert-manager) + correctly routed longpolling/WebSocket",
            "Argo CD GitOps + immutable image promotion staging→prod",
            "Kyverno/OPA admission: reject root, latest, privileged, unsigned",
            "Observability + Falco + Trivy Operator + Velero DR",
            "Documented chaos / failure drills (node, pod, postgres, rollback)",
        ],

        challengesFr: [
            "Apprendre K8s en profondeur sans se cacher derrière un chart opaque",
            "HA PostgreSQL réelle (opérateur, failover, PITR) pas un StatefulSet naïf",
            "NetworkPolicies deny-by-default sans casser Odoo ↔ Postgres ↔ Ingress",
            "External Secrets + rotation tout en gardant Git clean",
            "Admission policies strictes compatibles avec un flux de livraison fluide",
            "Démontrer la résilience (chaos, HPA, rollback) avec preuves observables",
        ],
        challengesEn: [
            "Learn K8s in depth without hiding behind an opaque chart",
            "Real HA PostgreSQL (operator, failover, PITR) not a naive StatefulSet",
            "Deny-by-default NetworkPolicies without breaking Odoo ↔ Postgres ↔ Ingress",
            "External Secrets + rotation while keeping Git clean",
            "Strict admission policies compatible with a smooth delivery flow",
            "Demonstrate resilience (chaos, HPA, rollback) with observable proof",
        ],

        impactFr: [
            "Deuxième colonne vertébrale Odoo : orchestration HA pour besoins exigeants",
            "Maîtrise opérationnelle K8s transférable hors Odoo",
            "Politiques d'admission et GitOps alignées sur la discipline supply chain ZENORA",
            "Scénarios DR/chaos prêts pour démonstration client / audit interne",
            "Complément direct du lab Docker — même cible métier, autre failure domain",
        ],
        impactEn: [
            "Second Odoo backbone: HA orchestration for demanding needs",
            "Operational K8s mastery transferable beyond Odoo",
            "Admission policies and GitOps aligned with ZENORA supply-chain discipline",
            "DR/chaos scenarios ready for client demos / internal audit",
            "Direct complement to the Docker lab — same business target, different failure domain",
        ],

        metrics: {
            "Namespaces": "app + platform",
            "Postgres": "HA operator",
            "Delivery": "Argo CD GitOps",
            "Admission": "Kyverno policies",
            "Scale": "HPA + PDB",
            "DR": "Velero + restore drills",
            "Security": "Falco + Trivy Operator",
            "Twin lab": "Docker Compose",
        },

        techStack: {
            frontend: ["Odoo Web"],
            backend: ["Odoo", "Python"],
            database: ["PostgreSQL HA", "PgBouncer"],
            devops: [
                "Kubernetes",
                "kubectl",
                "Helm",
                "Kustomize",
                "Terraform",
                "Argo CD",
                "Argo Rollouts",
                "cert-manager",
                "ExternalDNS",
                "External Secrets",
                "Infisical / Vault",
                "CloudNativePG",
                "Harbor",
                "Cosign",
                "Kyverno",
                "Cilium",
                "Velero",
                "Prometheus",
                "Grafana",
                "Loki",
                "Tempo",
                "Falco",
                "Trivy Operator",
                "k6",
                "Chaos Mesh",
            ],
        },

        architecture: [
            "Namespaces isolés app/platform avec quotas et NetworkPolicies",
            "Ingress Controller + cert-manager → Odoo Deployment → PostgreSQL HA opérateur",
            "GitOps Argo CD : manifests versionnés, drift detection, sync waves",
            "Admission : Pod Security restricted + Kyverno (registry/sign/root/latest)",
            "Observabilité kube-state + apps + Falco runtime",
            "Velero backups cluster/PVC + drills de reconstruction",
        ],

        testing: [
            "kube-bench / Kubescape / policy tests Kyverno",
            "CI image scan + signature verify avant sync prod",
            "E2E staging + smoke post-sync",
            "Failover PostgreSQL et restore Velero testés",
            "HPA sous charge k6",
            "Chaos : kill pod/node, network partition, rollback canary",
        ],

        images: [
            "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-home.png",
            "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-ui-modules.png",
            "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-login.png",
        ],
        preview: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-home.png",
        videoDemo: "",

        category: "DevSecOps • Kubernetes • Lab",
        status: "Actif",
        complexity: "Expert",
        role: "DevSecOps Engineer • Platform",
        teamSize: 1,

        duration: "Lab multi-phases (2026)",
        date: "2026",

        github: "https://github.com/barthez-kenwou/odoo-kubctl-infra",
        demo: "https://erp-dev.zenora360.com/",

        businessContextFr: "Préparer ZENORA aux déploiements Odoo (et assimilés) qui exigent HA, scalabilité et GitOps — en maîtrisant Kubernetes pour de vrai, pas en copiant un chart.",
        businessContextEn: "Prepare ZENORA for Odoo (and similar) deployments that require HA, scalability and GitOps — by mastering Kubernetes for real, not by copying a chart.",

        confidential: false,

        responsibilitiesFr: [
            "Design cluster multi-env et modèle HA Odoo/Postgres",
            "Workloads, stockage, réseau zero-trust, ingress TLS",
            "GitOps Argo CD + policies d'admission",
            "Secrets externalisés et supply chain images",
            "Observabilité, Falco, Velero, chaos/DR drills",
            "Documentation et démonstrations de résilience",
        ],
        responsibilitiesEn: [
            "Multi-env cluster design and Odoo/Postgres HA model",
            "Workloads, storage, zero-trust networking, TLS ingress",
            "Argo CD GitOps + admission policies",
            "Externalized secrets and image supply chain",
            "Observability, Falco, Velero, chaos/DR drills",
            "Documentation and resilience demonstrations",
        ],

        gallery: [
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-home.png",
                captionFr: "Surface Odoo live — preuve runtime de la stack",
                captionEn: "Live Odoo surface — runtime proof of the stack",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-ui-modules.png",
                captionFr: "Apps Odoo — catalogue de modules activés",
                captionEn: "Odoo apps — enabled module catalog",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-login.png",
                captionFr: "Odoo login — erp-dev.zenora360.com (environnement de validation)",
                captionEn: "Odoo login — erp-dev.zenora360.com (validation environment)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-ui-login-or-home.png",
                captionFr: "Espace applicatif Odoo — modules et navigation métier",
                captionEn: "Odoo app space — modules and business navigation",
                kind: "ui",
            },
        ],

        diagrams: [
            {
                id: "odoo-k8s-ns",
                titleFr: "Namespaces multi-env",
                titleEn: "Multi-env namespaces",
                mermaid: `flowchart TB
  subgraph apps [Application]
    D[odoo-dev]
    S[odoo-staging]
    P[odoo-production]
  end
  subgraph plat [Platform]
    M[monitoring]
    L[logging]
    A[argocd]
    I[ingress]
    C[cert-manager]
    SEC[security]
  end
  A --> D
  A --> S
  A --> P`,
            },
            {
                id: "odoo-k8s-path",
                titleFr: "Chemin Ingress → Odoo → Postgres HA",
                titleEn: "Path Ingress → Odoo → Postgres HA",
                mermaid: `flowchart LR
  U[Users] --> ING[Ingress TLS]
  ING --> SVC[Service Odoo]
  SVC --> POD[Odoo pods]
  POD --> PG[CloudNativePG]
  PG --> PRI[(Primary)]
  PG --> REP[(Replica)]`,
            },
            {
                id: "odoo-k8s-gitops",
                titleFr: "GitOps Argo CD promotion",
                titleEn: "Argo CD GitOps promotion",
                mermaid: `flowchart LR
  GIT[Git manifests] --> ARGO[Argo CD]
  ARGO --> STG[Sync staging]
  STG --> TEST[E2E smoke]
  TEST --> APR[Approval]
  APR --> PROD[Sync production]
  PROD --> HEALTH[Health checks]`,
            },
            {
                id: "odoo-k8s-admit",
                titleFr: "Admission policies fail-closed",
                titleEn: "Fail-closed admission policies",
                mermaid: `flowchart TB
  REQ[Admission request] --> KY[Kyverno / PSA]
  KY -->|root / latest / unsigned / privileged| DENY[Deny]
  KY -->|compliant| ALLOW[Allow schedule]`,
            },
            {
                id: "odoo-k8s-ha",
                titleFr: "Résilience HA et autoscaling",
                titleEn: "HA resilience and autoscaling",
                mermaid: `flowchart TB
  HPA[HPA] --> ODOO[Odoo replicas]
  PDB[PDB] --> ODOO
  AA[Anti-affinity] --> ODOO
  PGHA[Postgres failover] --> DB[(Primary/Replica)]
  CHAOS[Chaos drills] --> ODOO
  CHAOS --> DB`,
            },
        ],

        resources: [
            { labelFr: "Repo odoo-kubctl-infra", labelEn: "odoo-kubctl-infra repo", url: "https://github.com/barthez-kenwou/odoo-kubctl-infra", type: "other" },
            { labelFr: "Preview ERP (cible métier)", labelEn: "ERP preview (business target)", url: "https://erp-dev.zenora360.com/", type: "other" },
        ],

        milestones: [
            { labelFr: "Cluster + namespaces + réseau", labelEn: "Cluster + namespaces + networking", date: "Phase 1" },
            { labelFr: "Odoo workloads + Postgres HA", labelEn: "Odoo workloads + Postgres HA", date: "Phase 2" },
            { labelFr: "GitOps + admission + secrets", labelEn: "GitOps + admission + secrets", date: "Phase 3" },
            { labelFr: "Observabilité + Velero + chaos", labelEn: "Observability + Velero + chaos", date: "Phase 4" },
        ],

        scopeFr: ["Lab Kubernetes HA Odoo", "GitOps + policies + secrets", "Postgres HA opérateur", "Observabilité + DR/chaos", "Kit documenté greffable"],
        scopeEn: ["Odoo Kubernetes HA lab", "GitOps + policies + secrets", "Operator Postgres HA", "Observability + DR/chaos", "Documented graftable kit"],
        nonGoalsFr: ["Remplacer le lab Docker pour les cas simples", "Configuration métier modules Odoo client (projet ZENORA ERP)", "Cluster managé cloud exclusif sans compréhension du contrôle plane"],
        nonGoalsEn: ["Replacing the Docker lab for simple cases", "Client Odoo module business configuration (ZENORA ERP project)", "Exclusive managed cloud cluster without control-plane understanding"],

        decisions: [
            { titleFr: "Pas de Helm magique comme raccourci d apprentissage", titleEn: "No magic Helm as a learning shortcut", decisionFr: "Écrire et comprendre les ressources avant d industrialiser le packaging.", decisionEn: "Write and understand resources before industrializing packaging.", rationaleFr: "Sinon on déploie sans maîtriser failure domains et policies.", rationaleEn: "Otherwise you deploy without mastering failure domains and policies." },
            { titleFr: "PostgreSQL via opérateur HA", titleEn: "PostgreSQL via HA operator", decisionFr: "Failover/WAL/backup natifs plutôt qu un Postgres single-pod.", decisionEn: "Native failover/WAL/backup over a single-pod Postgres.", rationaleFr: "La HA DB est le vrai enjeu ERP, pas seulement des replicas Odoo.", rationaleEn: "DB HA is the real ERP stake, not only Odoo replicas." },
            { titleFr: "GitOps pour la vérité désirée", titleEn: "GitOps for desired truth", decisionFr: "Argo CD sync + drift detection, approvals prod.", decisionEn: "Argo CD sync + drift detection, prod approvals.", rationaleFr: "Audit trail et rollback Git alignés enterprise.", rationaleEn: "Audit trail and Git rollback aligned with enterprise practice." },
            { titleFr: "Admission fail-closed", titleEn: "Fail-closed admission", decisionFr: "Kyverno/PSA refusent root, latest, privileged, unsigned.", decisionEn: "Kyverno/PSA reject root, latest, privileged, unsigned.", rationaleFr: "La policy cluster complète la CI — défense en profondeur.", rationaleEn: "Cluster policy completes CI — defense in depth." },
        ],

        securityFr: [
            "NetworkPolicies deny-by-default + isolation namespaces",
            "Pod Security restricted + Kyverno",
            "External Secrets / Vault-Infisical, encryption at rest",
            "Cosign verify + Harbor privé",
            "Falco runtime + audit logs API",
            "RBAC least privilege, pas de cluster-admin inutile",
        ],
        securityEn: [
            "Deny-by-default NetworkPolicies + namespace isolation",
            "Restricted Pod Security + Kyverno",
            "External Secrets / Vault-Infisical, encryption at rest",
            "Cosign verify + private Harbor",
            "Falco runtime + API audit logs",
            "Least-privilege RBAC, no unnecessary cluster-admin",
        ],
        infraFr: [
            "Kubernetes multi-node + ingress + cert-manager",
            "CloudNativePG (ou équivalent) HA",
            "Argo CD / Rollouts",
            "Velero DR",
            "Prometheus stack + Loki + Tempo",
            "Cilium/Hubble (observabilité réseau)",
        ],
        infraEn: [
            "Multi-node Kubernetes + ingress + cert-manager",
            "CloudNativePG (or equivalent) HA",
            "Argo CD / Rollouts",
            "Velero DR",
            "Prometheus stack + Loki + Tempo",
            "Cilium/Hubble (network observability)",
        ],

        externalLinks: [
            { labelFr: "GitHub", labelEn: "GitHub", url: "https://github.com/barthez-kenwou/odoo-kubctl-infra" },
            { labelFr: "Preview", labelEn: "Preview", url: "https://erp-dev.zenora360.com/" },
        ],

        lessonsFr: [
            "Kubernetes s apprend en construisant les ressources — un chart opaque n enseigne pas les failure domains.",
            "La HA Odoo sans HA PostgreSQL est une illusion.",
            "Admission policies + GitOps + Cosign forment la vraie barrière prod.",
            "Chaos et restore drills valent plus qu un diagramme HA sur un slide.",
            "Docker lab + K8s lab = même discipline, deux runtimes — c est ça le transfert de compétences.",
        ],
        lessonsEn: [
            "Kubernetes is learned by building resources — an opaque chart does not teach failure domains.",
            "Odoo HA without PostgreSQL HA is an illusion.",
            "Admission policies + GitOps + Cosign form the real prod barrier.",
            "Chaos and restore drills beat an HA diagram on a slide.",
            "Docker lab + K8s lab = same discipline, two runtimes — that is skill transfer.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                afterSrc: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-home.png",
                captionFr: "D une maîtrise Compose à une plateforme Kubernetes HA GitOps-ready pour Odoo.",
                captionEn: "From Compose mastery to a GitOps-ready Kubernetes HA platform for Odoo.",
            },
        ],

        isFeatured: true,
    },

    {
        id: 15,
        titleFr: "ERP Odoo ZENORA — Configuration & customisation ESN",
        titleEn: "ZENORA Odoo ERP — IT services firm setup & customization",

        descriptionFr: "Déploiement Docker et configuration poussée d'Odoo pour l'ESN ZENORA : modules OCA + addons custom, processus métier (projets, RH, finance, CRM, delivery), toujours en production au quotidien.",
        descriptionEn: "Docker deployment and deep Odoo configuration for the ZENORA IT services firm: OCA modules + custom addons, business processes (projects, HR, finance, CRM, delivery), still in daily production use.",

        fullDescriptionFr: `Au-delà des labs plateforme, j'ai déployé et configuré Odoo pour ZENORA — notre ESN — sur la stack Docker (pas Kubernetes : le profil de charge et le contexte ops appelaient Compose maîtrisé). L'enjeu n'était plus seulement « faire tourner l'infra », mais faire d'Odoo le système nerveux de l'entreprise : projets clients, temps, facturation, RH, CRM, support, achats — avec une UX et des règles alignées sur notre façon de livrer.

Nous avons combiné des modules Odoo Community Association ([OCA](https://github.com/OCA)) éprouvés (project, sale-workflow, account, HR, helpdesk, timesheet…) et des customisations maison : addons ZENORA versionnés, reviewés, testés, avec stratégie de migration/rollback. Paramétrage minutieux : rôles/ACL/record rules, sociétés et multi-company si besoin, séquences documentaires, tableaux de bord, emails, et durcissement applicatif (MFA admin, politiques mots de passe, limitation des droits root métier).

Le runtime s'appuie sur les patterns du lab Docker (environnements, secrets, proxy TLS, backups PG + filestore). Preview : erp-dev.zenora360.com. Aujourd'hui ZENORA s'en sert pour piloter son activité au quotidien — et ce socle configuré devient un argument commercial pour proposer la même transformation à d'autres structures.`,
        fullDescriptionEn: `Beyond the platform labs, I deployed and configured Odoo for ZENORA — our IT services firm — on the Docker stack (not Kubernetes: load profile and ops context called for mastered Compose). The stake was no longer only “make infra run”, but make Odoo the company nervous system: client projects, time, billing, HR, CRM, support, purchasing — with UX and rules aligned to how we deliver.

We combined proven Odoo Community Association ([OCA](https://github.com/OCA)) modules (project, sale-workflow, account, HR, helpdesk, timesheet…) and in-house customizations: versioned, reviewed, tested ZENORA addons with migration/rollback strategy. Careful setup: roles/ACL/record rules, companies and multi-company when needed, document sequences, dashboards, email, and application hardening (admin MFA, password policies, limited business root rights).

Runtime builds on Docker-lab patterns (environments, secrets, TLS proxy, PG + filestore backups). Preview: erp-dev.zenora360.com. Today ZENORA uses it to steer daily operations — and this configured foundation becomes a commercial argument to offer the same transformation to other organizations.`,

        problemFr: "ZENORA gérait une ESN en croissance avec des outils fragmentés (tableurs, threads, outils disparates). Manque de traçabilité projet/temps/facturation, friction RH et CRM, difficulté à industrialiser le delivery.",
        problemEn: "ZENORA ran a growing IT services firm with fragmented tools (spreadsheets, threads, disparate apps). Weak project/time/billing traceability, HR and CRM friction, hard to industrialize delivery.",

        solutionFr: [
            "Déploiement Odoo Docker (patterns lab) pour ZENORA",
            "Activation / réglage modules OCA adaptés ESN (project, HR, account, CRM, helpdesk…)",
            "Addons custom ZENORA (processus delivery & reporting)",
            "RBAC Odoo : rôles, ACL, record rules, moindre privilège",
            "Intégration emails, séquences, tableaux de bord ops",
            "Backups PG + filestore et runbooks d exploitation",
            "Accompagnement utilisateurs et itérations de paramétrage",
        ],
        solutionEn: [
            "Docker Odoo deployment (lab patterns) for ZENORA",
            "Enable/tune OCA modules fit for an IT services firm (project, HR, account, CRM, helpdesk…)",
            "Custom ZENORA addons (delivery processes & reporting)",
            "Odoo RBAC: roles, ACL, record rules, least privilege",
            "Email integration, sequences, ops dashboards",
            "PG + filestore backups and operations runbooks",
            "User enablement and configuration iterations",
        ],

        challengesFr: [
            "Traduire le fonctionnement réel d une ESN en modules et automatismes Odoo",
            "Choisir OCA vs custom sans sur-ingénierie",
            "Préserver upgradeability malgré addons maison",
            "Former les équipes sans bloquer le delivery client",
            "Garder la discipline infra (secrets, backups) pendant la config métier intensive",
        ],
        challengesEn: [
            "Translate real IT-services operations into Odoo modules and automations",
            "Choose OCA vs custom without over-engineering",
            "Preserve upgradeability despite in-house addons",
            "Train teams without blocking client delivery",
            "Keep infra discipline (secrets, backups) during intensive business configuration",
        ],

        impactFr: [
            "ERP central unique pour le pilotage ZENORA au quotidien",
            "Traçabilité projets / temps / facturation améliorée",
            "Socle reproductible pour proposer Odoo à d autres entreprises",
            "Preuve concrète que les labs Docker se transforment en valeur métier",
            "Environnement de validation accessible : erp-dev.zenora360.com",
        ],
        impactEn: [
            "Single central ERP for daily ZENORA steering",
            "Improved project / time / billing traceability",
            "Reproducible foundation to offer Odoo to other companies",
            "Concrete proof that Docker labs turn into business value",
            "Validation environment available: erp-dev.zenora360.com",
        ],

        metrics: {
            "Client": "ZENORA ESN",
            "Runtime": "Docker",
            "Modules": "OCA + custom",
            "Status": "Production quotidienne",
            "Preview": "erp-dev.zenora360.com",
            "Backups": "PG + filestore",
        },

        techStack: {
            frontend: ["Odoo Web"],
            backend: ["Odoo", "Python", "OCA addons", "Custom ZENORA addons"],
            database: ["PostgreSQL"],
            devops: ["Docker", "Docker Compose", "Nginx", "Infisical", "Backups", "Cloudflare"],
        },

        architecture: [
            "Odoo Docker 3-tiers pour ZENORA (proxy → app → Postgres)",
            "Addons core Odoo + modules OCA + addons custom ZENORA",
            "Séparation config métier / secrets infra",
            "Filestore persistant + backups cohérents",
            "Droits métier RBAC/ACL/record rules",
        ],

        testing: [
            "Validation fonctionnelle par processus (projet, timesheet, facture, RH)",
            "Revue sécurité droits Odoo (ACL / record rules)",
            "Tests addons custom + compatibilité versions",
            "Restore backup sur environnement de validation",
            "Recette utilisateurs ZENORA",
        ],

        images: [
            "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-home.png",
            "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-ui-modules.png",
            "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-login.png",
            "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-ui-login-or-home.png",
        ],
        preview: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-home.png",
        videoDemo: "",

        category: "ERP • Odoo • Business",
        status: "Production",
        complexity: "Avancé",
        role: "Odoo Consultant • DevOps",
        teamSize: 2,

        duration: "Déploiement + itérations continues",
        date: "2026",

        github: "https://github.com/barthez-kenwou/odoo-docker-infra",
        demo: "https://erp-dev.zenora360.com/",

        businessContextFr: "Équiper ZENORA d un ERP crédible pour industrialiser le delivery ESN, puis industrialiser l offre « Odoo configuré » auprès d autres organisations.",
        businessContextEn: "Equip ZENORA with a credible ERP to industrialize IT-services delivery, then industrialize the “configured Odoo” offer for other organizations.",

        confidential: false,

        responsibilitiesFr: [
            "Déploiement Docker Odoo pour ZENORA",
            "Sélection et configuration modules OCA",
            "Conception/développement addons custom ZENORA",
            "RBAC, processus métier, dashboards, emails",
            "Backups, exploitation, accompagnement utilisateurs",
        ],
        responsibilitiesEn: [
            "Docker Odoo deployment for ZENORA",
            "OCA module selection and configuration",
            "Design/development of custom ZENORA addons",
            "RBAC, business processes, dashboards, email",
            "Backups, operations, user enablement",
        ],

        gallery: [
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-home.png",
                captionFr: "Surface Odoo live — preuve runtime de la stack",
                captionEn: "Live Odoo surface — runtime proof of the stack",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-ui-modules.png",
                captionFr: "Apps Odoo — catalogue de modules activés",
                captionEn: "Odoo apps — enabled module catalog",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-live-login.png",
                captionFr: "Odoo login — erp-dev.zenora360.com (environnement de validation)",
                captionEn: "Odoo login — erp-dev.zenora360.com (validation environment)",
                kind: "ui",
            },
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-ui-login-or-home.png",
                captionFr: "Espace applicatif Odoo — modules et navigation métier",
                captionEn: "Odoo app space — modules and business navigation",
                kind: "ui",
            },
        ],

        diagrams: [
            {
                id: "zenora-odoo-stack",
                titleFr: "Stack ERP ZENORA",
                titleEn: "ZENORA ERP stack",
                mermaid: `flowchart TB
  U[Équipes ZENORA] --> RP[Proxy TLS]
  RP --> OD[Odoo Docker]
  OD --> PG[(PostgreSQL)]
  OD --> FS[Filestore]
  OD --> OCA[Modules OCA]
  OD --> CUST[Addons custom ZENORA]`,
            },
            {
                id: "zenora-odoo-modules",
                titleFr: "Cartographie modules ESN",
                titleEn: "IT services module map",
                mermaid: `flowchart LR
  CRM[CRM] --> PRJ[Project]
  PRJ --> TS[Timesheet]
  TS --> SAL[Sales]
  SAL --> ACC[Accounting]
  HR[HR] --> PRJ
  HD[Helpdesk] --> PRJ`,
            },
            {
                id: "zenora-odoo-rbac",
                titleFr: "Modèle d accès métier",
                titleEn: "Business access model",
                mermaid: `flowchart TB
  ADM[Admin technique] --> CONF[Configuration]
  PM[Project managers] --> PRJ[Projets / tasks]
  DEV[Consultants] --> TS[Timesheets]
  FIN[Finance] --> INV[Facturation]
  HR[HR] --> EMP[Employés]`,
            },
        ],

        resources: [
            { labelFr: "Preview ERP ZENORA", labelEn: "ZENORA ERP preview", url: "https://erp-dev.zenora360.com/", type: "other" },
            { labelFr: "Odoo Community Association", labelEn: "Odoo Community Association", url: "https://github.com/OCA", type: "other" },
            { labelFr: "Socle infra Docker", labelEn: "Docker infra foundation", url: "https://github.com/barthez-kenwou/odoo-docker-infra", type: "other" },
        ],

        milestones: [
            { labelFr: "Déploiement Docker + socle sécurisé", labelEn: "Docker deploy + secured foundation", date: "Phase 1" },
            { labelFr: "Modules OCA ESN + droits", labelEn: "ESN OCA modules + rights", date: "Phase 2" },
            { labelFr: "Addons custom ZENORA", labelEn: "Custom ZENORA addons", date: "Phase 3" },
            { labelFr: "Adoption prod quotidienne", labelEn: "Daily production adoption", date: "Phase 4" },
        ],

        scopeFr: ["ERP Odoo production ZENORA", "Modules OCA + custom", "RBAC et processus ESN", "Exploitation Docker + backups"],
        scopeEn: ["ZENORA production Odoo ERP", "OCA + custom modules", "RBAC and IT-services processes", "Docker operations + backups"],
        nonGoalsFr: ["Migration Kubernetes HA (lab dédié, hors besoin actuel ZENORA)", "Refonte totale des process hors Odoo", "Marketplace publique d addons"],
        nonGoalsEn: ["Kubernetes HA migration (dedicated lab, outside current ZENORA need)", "Full process redesign outside Odoo", "Public addons marketplace"],

        decisions: [
            { titleFr: "Docker pour ZENORA, K8s pour le lab HA", titleEn: "Docker for ZENORA, K8s for the HA lab", decisionFr: "Prod ESN sur Compose maîtrisé ; Kubernetes réservé au lab / futurs cas HA.", decisionEn: "IT-services prod on mastered Compose; Kubernetes reserved for lab / future HA cases.", rationaleFr: "Adéquation charge/ops — sans surcoût orchestration inutile.", rationaleEn: "Fit load/ops — without unnecessary orchestration cost." },
            { titleFr: "OCA d abord, custom ensuite", titleEn: "OCA first, custom second", decisionFr: "Réutiliser OCA quand le process ESN matche ; custom seulement pour le différenciant ZENORA.", decisionEn: "Reuse OCA when the IT-services process matches; custom only for ZENORA differentiators.", rationaleFr: "Upgradeability et vitesse de livraison.", rationaleEn: "Upgradeability and delivery speed." },
            { titleFr: "RBAC strict dès le début", titleEn: "Strict RBAC from day one", decisionFr: "Record rules et rôles avant l expansion des utilisateurs.", decisionEn: "Record rules and roles before user expansion.", rationaleFr: "Évite le chaos droits une fois l ERP adopté.", rationaleEn: "Avoids rights chaos once the ERP is adopted." },
        ],

        securityFr: [
            "RBAC / ACL / record rules Odoo",
            "Comptes admin limités + MFA",
            "Secrets infra hors Git (Infisical)",
            "TLS reverse proxy",
            "Backups chiffrés / isolés PG + filestore",
            "Revue sécurité addons tiers OCA",
        ],
        securityEn: [
            "Odoo RBAC / ACL / record rules",
            "Limited admin accounts + MFA",
            "Infra secrets out of Git (Infisical)",
            "TLS reverse proxy",
            "Isolated/encrypted PG + filestore backups",
            "Security review of third-party OCA addons",
        ],
        infraFr: [
            "Docker Compose (patterns odoo-docker-infra)",
            "PostgreSQL + filestore persistants",
            "Nginx TLS + Cloudflare",
            "Backups planifiés + restore validation",
        ],
        infraEn: [
            "Docker Compose (odoo-docker-infra patterns)",
            "Persistent PostgreSQL + filestore",
            "Nginx TLS + Cloudflare",
            "Scheduled backups + restore validation",
        ],

        externalLinks: [
            { labelFr: "ERP preview", labelEn: "ERP preview", url: "https://erp-dev.zenora360.com/" },
            { labelFr: "OCA", labelEn: "OCA", url: "https://github.com/OCA" },
            { labelFr: "zenora360.com", labelEn: "zenora360.com", url: "https://zenora360.com/" },
        ],

        lessonsFr: [
            "Les labs plateforme n ont de sens que s ils servent un ERP réel adopté au quotidien.",
            "OCA accélère — le custom doit rester le différenciant, pas le défaut.",
            "Un ERP ESN se vend ensuite : le run ZENORA est la meilleure preuve commerciale.",
            "Upgradeability se décide au premier addon custom.",
        ],
        lessonsEn: [
            "Platform labs only matter if they serve a real ERP adopted daily.",
            "OCA accelerates — custom must stay the differentiator, not the default.",
            "An IT-services ERP can then be sold: ZENORA production is the best commercial proof.",
            "Upgradeability is decided at the first custom addon.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                afterSrc: "https://s3.zenora360.com/barthez-portfolio/images/odoo/odoo-ui-modules.png",
                captionFr: "D outils fragmentés ESN à un ERP Odoo ZENORA centralisé (OCA + custom).",
                captionEn: "From fragmented IT-services tools to a centralized ZENORA Odoo ERP (OCA + custom).",
            },
        ],

        isFeatured: true,
    },

    {
        id: 8,
        titleFr: "Enterprise Observability Platform — Metrics, Logs, Traces & SLO",
        titleEn: "Enterprise Observability Platform — Metrics, Logs, Traces & SLO",

        descriptionFr: "Plateforme d'observabilité réutilisable (produit Platform/SRE) : OpenTelemetry → Prometheus/Loki/Tempo/Pyroscope → Grafana/Alertmanager, corrélation bout-en-bout, SLO/error budgets — forkable pour n'importe quel service.",
        descriptionEn: "Reusable observability platform (Platform/SRE product): OpenTelemetry → Prometheus/Loki/Tempo/Pyroscope → Grafana/Alertmanager, end-to-end correlation, SLO/error budgets — forkable for any service.",

        fullDescriptionFr: `Je n'ai pas « installé Grafana ». J'ai construit une plateforme d'observabilité interne — un produit Platform Engineering / SRE — capable de superviser une infrastructure moderne de bout en bout : monoliths, microservices, APIs, workers, frontend, PostgreSQL, Redis, Ingress, Kubernetes.

Le parcours a d'abord été un lab d'apprentissage intensif : outils isolés, labs Killercoda / cloud, cours (Udemy, DataCamp, Coursera, YouTube) et lecture de docs — puis tests locaux Docker outil par outil. La plateforme arrive en conclusion : quand chaque brique est maîtrisée, on industrialise un produit forkable.

Architecture : Instrumentation (OTel SDK) → Collection (Collector Agent/Gateway) → Processing → Storage (Prometheus/Mimir-Thanos, Loki, Tempo, Pyroscope, object storage) → Query → Visualization (Grafana as-code) → Alerting → Incident → Feedback. Les applications ne parlent pas directement à chaque backend : OpenTelemetry est la couche d'abstraction. Métadonnées normalisées (service.name, version, environment, namespace, tenant…). Corrélation phare : requête → latence Prometheus → exemplar → trace Tempo → span Postgres → logs Loki (Trace ID) → profil Pyroscope → postmortem.

Une application e-commerce fictive (frontend, gateway, auth, product, order, payment, worker, PG, Redis, broker) sert de terrain d'incidents : requête lente, memory leak, mauvaise release/canary, API externe down, détection Falco. Objectif final : un développeur fork le dépôt, déclare un service, obtient metrics + logs + traces + dashboards + alertes + SLO + runbook — sans devenir expert observability.

Message recruteur : je sais construire une plateforme d'observabilité distribuée et industrialiser la fiabilité — pas seulement déployer une stack Grafana.`,
        fullDescriptionEn: `I did not “install Grafana”. I built an internal observability platform — a Platform Engineering / SRE product — able to supervise a modern infrastructure end to end: monoliths, microservices, APIs, workers, frontend, PostgreSQL, Redis, Ingress, Kubernetes.

The journey started as an intensive learning lab: isolated tools, Killercoda / cloud labs, courses (Udemy, DataCamp, Coursera, YouTube) and docs — then local Docker tests tool by tool. The platform comes last: once every brick is mastered, industrialize a forkable product.

Architecture: Instrumentation (OTel SDK) → Collection (Collector Agent/Gateway) → Processing → Storage (Prometheus/Mimir-Thanos, Loki, Tempo, Pyroscope, object storage) → Query → Visualization (Grafana as-code) → Alerting → Incident → Feedback. Applications do not talk directly to every backend: OpenTelemetry is the abstraction layer. Normalized metadata (service.name, version, environment, namespace, tenant…). Flagship correlation: request → Prometheus latency → exemplar → Tempo trace → Postgres span → Loki logs (Trace ID) → Pyroscope profile → postmortem.

A fictional e-commerce application (frontend, gateway, auth, product, order, payment, worker, PG, Redis, broker) is the incident playground: slow query, memory leak, bad release/canary, external API down, Falco detection. End goal: a developer forks the repository, declares a service, and gets metrics + logs + traces + dashboards + alerts + SLO + runbook — without becoming an observability expert.

Recruiter message: I know how to build a distributed observability platform and industrialize reliability — not just deploy a Grafana stack.`,

        problemFr: "Sans plateforme, chaque équipe bricole son monitoring : dashboards orphelins, alertes bruyantes, zéro corrélation, MTTR élevé. Installer des outils n'équivaut pas à industrialiser l'observabilité multi-équipes.",
        problemEn: "Without a platform, every team hacks its monitoring: orphan dashboards, noisy alerts, zero correlation, high MTTR. Installing tools is not industrializing multi-team observability.",

        solutionFr: [
            "OpenTelemetry first : abstraction vendor-neutral metrics/logs/traces/profiles",
            "Pipelines Collector (receivers/processors/exporters) + sampling intelligent (erreurs/lents 100%)",
            "Storage scalable : Prometheus + Mimir/Thanos, Loki, Tempo, Pyroscope, object storage",
            "Grafana as-code : datasources, folders, RBAC, drill-down corrélés",
            "SRE : SLI/SLO/error budgets, burn-rate alerts, runbooks",
            "Synthetics (Blackbox) + RUM optionnel + network (Cilium/Hubble) + Falco",
            "DX : templates services, auto-provision dashboards/alertes/SLO, score observability",
            "Compose local + Kubernetes : même modèle, GitOps staging/prod",
        ],
        solutionEn: [
            "OpenTelemetry first: vendor-neutral metrics/logs/traces/profiles abstraction",
            "Collector pipelines (receivers/processors/exporters) + smart sampling (errors/slow 100%)",
            "Scalable storage: Prometheus + Mimir/Thanos, Loki, Tempo, Pyroscope, object storage",
            "Grafana as-code: datasources, folders, RBAC, correlated drill-downs",
            "SRE: SLI/SLO/error budgets, burn-rate alerts, runbooks",
            "Synthetics (Blackbox) + optional RUM + network (Cilium/Hubble) + Falco",
            "DX: service templates, auto-provision dashboards/alerts/SLO, observability score",
            "Local Compose + Kubernetes: same model, GitOps staging/prod",
        ],

        challengesFr: [
            "Corréler vraiment metrics ↔ logs ↔ traces ↔ profiles (pas quatre silos)",
            "Maîtriser cardinalité, rétention et coût (FinOps télémétrie)",
            "Alertes actionnables basées symptômes/SLO — zéro bruit",
            "Tail sampling et backpressure collectors sans perdre les incidents",
            "Industrialiser l'onboarding service (golden path observabilité)",
            "Démontrer des incidents bout-en-bout recruteur-ready",
        ],
        challengesEn: [
            "Truly correlate metrics ↔ logs ↔ traces ↔ profiles (not four silos)",
            "Master cardinality, retention and cost (telemetry FinOps)",
            "Actionable symptom/SLO-based alerts — zero noise",
            "Tail sampling and collector backpressure without losing incidents",
            "Industrialize service onboarding (observability golden path)",
            "Demonstrate end-to-end recruiter-ready incidents",
        ],

        impactFr: [
            "Plateforme forkable : declare service → télémétrie + dashboards + alertes + SLO",
            "Investigation d'incident reconstruisible de bout en bout",
            "Réduction MTTR via corrélation et runbooks",
            "Culture SRE (error budgets) intégrée au delivery",
            "Socle réutilisable pour toute la suite Enterprise Platform Labs",
        ],
        impactEn: [
            "Forkable platform: declare service → telemetry + dashboards + alerts + SLO",
            "End-to-end reconstructible incident investigation",
            "Lower MTTR via correlation and runbooks",
            "SRE culture (error budgets) baked into delivery",
            "Reusable foundation for the full Enterprise Platform Labs suite",
        ],

        metrics: {
            "Pillars": "Metrics + Logs + Traces + Profiles",
            "Abstraction": "OpenTelemetry",
            "SRE": "SLI / SLO / error budget",
            "Correlation": "exemplars + Trace ID",
            "Runtime": "Compose + Kubernetes",
            "DX": "auto-provision per service",
            "Incidents": "5 scenarios",
            "Product": "forkable platform",
        },

        techStack: {
            frontend: [
                "RUM / Core Web Vitals (optional)",
            ],
            backend: [
                "OpenTelemetry SDK (Node / Python / Go / Java)",
            ],
            database: [
                "PostgreSQL exporter",
                "Redis exporter",
            ],
            devops: [
                "OpenTelemetry Collector",
                "Prometheus",
                "Mimir / Thanos",
                "Grafana",
                "Loki",
                "Tempo",
                "Pyroscope",
                "Alertmanager",
                "Blackbox Exporter",
                "kube-state-metrics",
                "cAdvisor",
                "Cilium / Hubble",
                "Falco",
                "Kubernetes",
                "Helm",
                "Terraform",
                "Argo CD",
                "Docker Compose",
                "MinIO / S3",
                "k6",
                "Chaos Mesh",
            ],
        },

        architecture: [
            "Apps → OTel SDK → Collector Agent/Gateway → specialized backends",
            "Metrics Prometheus (+ long-term Mimir/Thanos) · Logs Loki · Traces Tempo · Profiles Pyroscope",
            "Unified Grafana + Alertmanager + correlation links",
            "Normalized metadata and labels multi-tenant / multi-env",
            "Object storage for long retention · cost-aware sampling",
            "Distributed e-commerce demo for incident drills",
        ],

        testing: [
            "OTel instrumentation + Trace Context propagation tests",
            "promtool / recording & alert rule validation",
            "Log↔trace correlation and exemplar↔trace tests",
            "k6 load + chaos (collector/PG/network failures)",
            "Incident drills 1–5 + postmortems",
            "Telemetry DR (Prometheus/Loki/Tempo/Grafana loss)",
        ],

        images: [
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/000000083082.png",
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/images%20(3).jpeg",
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/image-7.png",
        ],
        preview: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/000000083082.png",
        videoDemo: "",

        category: "SRE • Observability • Platform",
        status: "Actif",
        complexity: "Expert",
        role: "SRE • Platform Engineer",
        teamSize: 1,

        duration: "Lab → plateforme (2026)",
        date: "2026",

        github: "https://github.com/barthez-kenwou/Enterprise-Observability-Platform",
        demo: "",

        businessContextFr: "Pièce maîtresse de la Enterprise Platform Lab Suite : industrialiser l'observabilité comme produit consommable par les équipes — pas comme un stack installé une fois.",
        businessContextEn: "Centerpiece of the Enterprise Platform Lab Suite: industrialize observability as a product teams consume — not as a one-off installed stack.",

        confidential: false,

        responsibilitiesFr: [
            "Threat/capacity model télémétrie et design multi-env",
            "Pipelines OTel Collector + conventions de métadonnées",
            "Stack Prometheus/Loki/Tempo/Pyroscope/Grafana as-code",
            "SLO, alerting qualité, runbooks, incident lifecycle",
            "App demo distribuée + scénarios d'incident",
            "DX onboarding service + documentation forkable",
        ],
        responsibilitiesEn: [
            "Telemetry threat/capacity model and multi-env design",
            "OTel Collector pipelines + metadata conventions",
            "Prometheus/Loki/Tempo/Pyroscope/Grafana as-code stack",
            "SLO, alert quality, runbooks, incident lifecycle",
            "Distributed demo app + incident scenarios",
            "Service onboarding DX + forkable documentation",
        ],

        gallery: [
            {
                src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/000000083082.png",
                captionFr: "Dashboard Grafana — santé plateforme et signaux RED",
                captionEn: "Grafana dashboard — platform health and RED signals", kind: "metric",
            },
            {
                src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/images%20(3).jpeg",
                captionFr: "Corrélation logs / traces — investigation bout-en-bout",
                captionEn: "Logs / traces correlation — end-to-end investigation", kind: "infra",
            },
            {
                src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/image-7.png",
                captionFr: "Vue monitoring — latence, erreurs, saturation",
                captionEn: "Monitoring view — latency, errors, saturation", kind: "metric",
            },
        ],

        diagrams: [
            {
                id: "eop-pipeline",
                titleFr: "Pipeline télémétrie unifié",
                titleEn: "Unified telemetry pipeline",
                mermaid: `flowchart TB
  APP[Applications OTel SDK] --> COL[OTel Collector]
  COL --> M[Prometheus / Mimir]
  COL --> L[Loki]
  COL --> T[Tempo]
  COL --> P[Pyroscope]
  M --> G[Grafana]
  L --> G
  T --> G
  P --> G
  M --> AM[Alertmanager]
  AM --> INC[Incident / Slack]`,
            },
            {
                id: "eop-correlate",
                titleFr: "Corrélation incident phare",
                titleEn: "Flagship incident correlation",
                mermaid: `sequenceDiagram
  participant U as User
  participant API as Services
  participant Prom as Prometheus
  participant Graf as Grafana
  participant Tempo as Tempo
  participant Loki as Loki
  U->>API: Request
  API->>Prom: Latency up
  Prom-->>Graf: SLO burn alert
  Graf->>Tempo: Exemplar to trace
  Tempo->>Loki: Trace ID to logs
  Tempo-->>Graf: Slow Postgres span`,
            },
            {
                id: "eop-red",
                titleFr: "RED par service + SLO",
                titleEn: "Per-service RED + SLO",
                mermaid: `flowchart LR
  SVC[Service] --> R[Rate]
  SVC --> E[Errors]
  SVC --> D[Duration P95/P99]
  R --> SLO[SLO / error budget]
  E --> SLO
  D --> SLO
  SLO --> AL[Burn-rate alerts]`,
            },
            {
                id: "eop-demo",
                titleFr: "App demo distribuée",
                titleEn: "Distributed demo app",
                mermaid: `flowchart TB
  FE[Frontend] --> GW[API Gateway]
  GW --> AUTH[Auth]
  GW --> PROD[Product]
  GW --> ORD[Order]
  ORD --> PAY[Payment]
  ORD --> Q[Broker]
  Q --> WRK[Worker]
  PROD --> RD[(Redis)]
  AUTH --> PG[(PostgreSQL)]
  ORD --> PG`,
            },
            {
                id: "eop-sre",
                titleFr: "Boucle SRE incident",
                titleEn: "SRE incident loop",
                mermaid: `flowchart LR
  DET[Detection] --> TRI[Triage]
  TRI --> INV[Investigation]
  INV --> MIT[Mitigation]
  MIT --> REC[Recovery]
  REC --> PM[Postmortem]
  PM --> IMP[Improve SLO / alerts]`,
            },
        ],

        resources: [
            {
                labelFr: "Repo Enterprise Observability Platform",
                labelEn: "Enterprise Observability Platform repo",
                url: "https://github.com/barthez-kenwou/Enterprise-Observability-Platform",
                type: "other",
            },
        ],

        milestones: [
            {
                labelFr: "Lab outils + OTel local",
                labelEn: "Tooling lab + local OTel",
                date: "Phase 1",
                descriptionFr: "Maîtrise Prometheus/Loki/Tempo/Collector.",
                descriptionEn: "Master Prometheus/Loki/Tempo/Collector.",
            },
            {
                labelFr: "Corrélation + SLO + alerting",
                labelEn: "Correlation + SLO + alerting",
                date: "Phase 2",
                descriptionFr: "Exemplars, Trace ID, burn-rate, runbooks.",
                descriptionEn: "Exemplars, Trace ID, burn-rate, runbooks.",
            },
            {
                labelFr: "Demo distribuée + incidents",
                labelEn: "Distributed demo + incidents",
                date: "Phase 3",
                descriptionFr: "5 scénarios + postmortems.",
                descriptionEn: "5 scenarios + postmortems.",
            },
            {
                labelFr: "Produit forkable multi-env K8s",
                labelEn: "Forkable multi-env K8s product",
                date: "Phase 4",
                descriptionFr: "GitOps, auto-provision, docs Quick Start.",
                descriptionEn: "GitOps, auto-provision, Quick Start docs.",
            },
        ],

        scopeFr: [
            "Plateforme observability produit",
            "OTel + 4 piliers + SLO",
            "Corrélation et DX onboarding",
            "Compose + Kubernetes",
            "Incidents démontrables",
        ],
        scopeEn: [
            "Observability platform product",
            "OTel + 4 pillars + SLO",
            "Correlation and onboarding DX",
            "Compose + Kubernetes",
            "Demonstrable incidents",
        ],
        nonGoalsFr: [
            "APM SaaS propriétaire comme cœur",
            "Remplacer un SIEM entreprise",
            "SOC 24/7 managé",
        ],
        nonGoalsEn: [
            "Proprietary SaaS APM as the core",
            "Replacing an enterprise SIEM",
            "Managed 24/7 SOC",
        ],

        decisions: [
            {
                titleFr: "OpenTelemetry comme contrat plateforme",
                titleEn: "OpenTelemetry as the platform contract",
                decisionFr: "Les apps émettent OTLP ; les backends restent interchangeables.",
                decisionEn: "Apps emit OTLP; backends remain swappable.",
                rationaleFr: "Évite le lock-in et standardise l'onboarding.",
                rationaleEn: "Avoids lock-in and standardizes onboarding.",
            },
            {
                titleFr: "Corrélation avant vanity dashboards",
                titleEn: "Correlation before vanity dashboards",
                decisionFr: "Chaque signal doit ouvrir le suivant (metric→trace→log→profile).",
                decisionEn: "Each signal must open the next (metric→trace→log→profile).",
                rationaleFr: "C'est ce qui réduit réellement le MTTR.",
                rationaleEn: "That is what actually reduces MTTR.",
            },
            {
                titleFr: "SLO et alertes symptômes",
                titleEn: "SLO and symptom alerts",
                decisionFr: "Burn-rate et erreurs utilisateur avant CPU bruyant.",
                decisionEn: "Burn-rate and user errors before noisy CPU.",
                rationaleFr: "Alert quality > alert quantity.",
                rationaleEn: "Alert quality > alert quantity.",
            },
            {
                titleFr: "Lab d'abord, plateforme ensuite",
                titleEn: "Lab first, platform second",
                decisionFr: "Maîtriser chaque outil isolément avant le produit unifié.",
                decisionEn: "Master each tool in isolation before the unified product.",
                rationaleFr: "Sinon on assemble sans comprendre failure modes et coûts.",
                rationaleEn: "Otherwise you assemble without understanding failure modes and costs.",
            },
        ],

        securityFr: [
            "Redaction secrets/PII dans logs",
            "RBAC Grafana + TLS + NetworkPolicies collectors",
            "Secrets alerting hors Git",
            "Falco / audit events corrélés",
            "Rétention et isolation tenants",
        ],
        securityEn: [
            "Secret/PII redaction in logs",
            "Grafana RBAC + TLS + collector NetworkPolicies",
            "Alerting secrets out of Git",
            "Correlated Falco / audit events",
            "Retention and tenant isolation",
        ],
        infraFr: [
            "Docker Compose lab + Kubernetes prod-like",
            "Object storage MinIO/S3",
            "GitOps Argo CD pour dashboards/rules",
            "Terraform/Helm packaging",
            "Capacity & FinOps télémétrie",
        ],
        infraEn: [
            "Docker Compose lab + Kubernetes prod-like",
            "MinIO/S3 object storage",
            "Argo CD GitOps for dashboards/rules",
            "Terraform/Helm packaging",
            "Telemetry capacity & FinOps",
        ],

        externalLinks: [
            {
                labelFr: "GitHub",
                labelEn: "GitHub",
                url: "https://github.com/barthez-kenwou/Enterprise-Observability-Platform",
            },
        ],

        testimonial: {
            quoteFr: "On ne regarde plus quatre outils séparés : on suit une requête jusqu'à la root cause.",
            quoteEn: "We no longer stare at four separate tools: we follow a request to the root cause.",
            author: "Platform peer",
            roleFr: "SRE",
            roleEn: "SRE",
            company: "Enterprise Platform Labs",
        },

        lessonsFr: [
            "Installer Grafana n'est pas construire une plateforme d'observabilité.",
            "Sans corrélation, chaque signal reste un silo ; avec corrélation, c'est un système de preuve.",
            "Les SLO transforment le monitoring en contrat de fiabilité.",
            "La DX (fork → service observé) est le vrai critère produit.",
            "On apprend outil par outil ; on livre une plateforme.",
        ],
        lessonsEn: [
            "Installing Grafana is not building an observability platform.",
            "Without correlation each signal is a silo; with correlation it is a proof system.",
            "SLOs turn monitoring into a reliability contract.",
            "DX (fork → observed service) is the real product criterion.",
            "Learn tool by tool; ship a platform.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                afterSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/000000083082.png",
                captionFr: "Du monitoring fragmenté à une plateforme SRE corrélée et forkable.",
                captionEn: "From fragmented monitoring to a correlated, forkable SRE platform.",
            },
        ],

        isFeatured: true,
    },

    {
        id: 16,
        titleFr: "Enterprise Internal Developer Platform — Golden Paths & Self-Service",
        titleEn: "Enterprise Internal Developer Platform — Golden Paths & Self-Service",

        descriptionFr: "IDP Platform Engineering : Backstage + Golden Paths + GitOps. Un développeur crée un service en self-service — repo, CI, Helm, secrets, observabilité, SLO — sans devenir expert Kubernetes.",
        descriptionEn: "Platform Engineering IDP: Backstage + Golden Paths + GitOps. A developer creates a service self-service — repo, CI, Helm, secrets, observability, SLO — without becoming a Kubernetes expert.",

        fullDescriptionFr: `Je n'administre pas Kubernetes pour les autres : je construis le produit qui leur permet de consommer l'infrastructure. Enterprise Internal Developer Platform est une Internal Developer Platform (IDP) — Backstage comme portail, Golden Paths comme chemins pavés, GitOps comme moteur de vérité.

Le parcours a d'abord été un lab d'apprentissage intensif : outils isolés, labs Killercoda / cloud, cours (Udemy, DataCamp, Coursera, YouTube) et lecture de docs — puis tests locaux Docker outil par outil. La plateforme arrive en conclusion : quand chaque brique est maîtrisée, on industrialise un produit forkable.

Objectif final : ouvrir le portail → Create Service → Node.js / Python / Go → PostgreSQL + Redis → staging → Create. En quelques minutes : repository, CI/CD, Dockerfile, Helm, Application Argo CD, secrets, DNS/TLS, OpenTelemetry, dashboard, alertes, SLO, runbook, entrée catalogue Backstage, déploiement staging.

Piliers : Developer Experience, Self-Service, Golden Paths, Automation, Governance (Kyverno, quotas, naming), Security (non-root, Trivy, Cosign, NetworkPolicy), Observability automatique, Cost (Kubecost), Reliability. Les templates couvrent API Node/Python/Go/Java, worker, frontend, CronJob. Scénarios : nouveau microservice, violation policy image latest, promotion production canary, panne control-plane Argo CD (apps continuent, Git reste SoT).

Message recruteur : je sais construire une plateforme qui permet à d'autres développeurs de consommer l'infrastructure comme un produit.`,
        fullDescriptionEn: `I do not administer Kubernetes for others: I build the product that lets them consume infrastructure. Enterprise Internal Developer Platform is an Internal Developer Platform (IDP) — Backstage as the portal, Golden Paths as paved roads, GitOps as the source of truth.

The journey started as an intensive learning lab: isolated tools, Killercoda / cloud labs, courses (Udemy, DataCamp, Coursera, YouTube) and docs — then local Docker tests tool by tool. The platform comes last: once every brick is mastered, industrialize a forkable product.

End goal: open the portal → Create Service → Node.js / Python / Go → PostgreSQL + Redis → staging → Create. Within minutes: repository, CI/CD, Dockerfile, Helm, Argo CD Application, secrets, DNS/TLS, OpenTelemetry, dashboard, alerts, SLO, runbook, Backstage catalog entry, staging deploy.

Pillars: Developer Experience, Self-Service, Golden Paths, Automation, Governance (Kyverno, quotas, naming), Security (non-root, Trivy, Cosign, NetworkPolicy), automatic Observability, Cost (Kubecost), Reliability. Templates cover Node/Python/Go/Java APIs, worker, frontend, CronJob. Scenarios: new microservice, latest-image policy violation, production canary promotion, Argo CD control-plane outage (apps keep running, Git remains SoT).

Recruiter message: I know how to build a platform that lets other developers consume infrastructure as a product.`,

        problemFr: "Sans IDP, chaque équipe réinvente Dockerfiles, charts, pipelines et sécurité — lenteur, dette, drift. Kubernetes nu n'est pas un produit développeur.",
        problemEn: "Without an IDP, every team reinvents Dockerfiles, charts, pipelines and security — slowdowns, debt, drift. Raw Kubernetes is not a developer product.",

        solutionFr: [
            "Backstage : catalog, ownership, docs, liens dashboards/logs/SLO",
            "Golden Paths templates (API, worker, frontend, CronJob) multi-langages",
            "Scaffold : repo + CI + Dockerfile + Helm + Argo CD + secrets + DNS/TLS",
            "Observabilité et sécurité activées par défaut (OTel, scans, Cosign, Kyverno)",
            "Self-service : DB, Redis, domain, cert, scale, rollback via portail/API",
            "Governance : Policy-as-Code, quotas, approvals production",
            "Cost visibility Kubecost par équipe/service",
            "Platform API + CLI pour automatiser hors UI",
        ],
        solutionEn: [
            "Backstage: catalog, ownership, docs, dashboard/logs/SLO links",
            "Golden Path templates (API, worker, frontend, CronJob) multi-language",
            "Scaffold: repo + CI + Dockerfile + Helm + Argo CD + secrets + DNS/TLS",
            "Observability and security on by default (OTel, scans, Cosign, Kyverno)",
            "Self-service: DB, Redis, domain, cert, scale, rollback via portal/API",
            "Governance: Policy-as-Code, quotas, production approvals",
            "Kubecost cost visibility per team/service",
            "Platform API + CLI to automate beyond the UI",
        ],

        challengesFr: [
            "Masquer Kubernetes sans cacher les failure modes utiles",
            "Templates assez stricts pour la sécurité, assez souples pour le métier",
            "Orchestrer Git + Terraform + secrets + GitOps de façon idempotente",
            "Mesurer le time-to-first-deploy réel (pas un slide marketing)",
            "Rester platform product : score DX, ownership, documentation auto",
        ],
        challengesEn: [
            "Hide Kubernetes without hiding useful failure modes",
            "Templates strict enough for security, flexible enough for business",
            "Orchestrate Git + Terraform + secrets + GitOps idempotently",
            "Measure real time-to-first-deploy (not a marketing slide)",
            "Stay a platform product: DX score, ownership, auto documentation",
        ],

        impactFr: [
            "Time-to-service mesurable : Create → staging déployé",
            "Standards sécurité/observabilité appliqués sans ticket ops",
            "Catalog Backstage = source de vérité ownership",
            "Réduction du toil Platform / SRE sur les demandes répétitives",
            "Produit greffable sur tout cluster GitOps ZENORA / client",
        ],
        impactEn: [
            "Measurable time-to-service: Create → staging deployed",
            "Security/observability standards applied without ops tickets",
            "Backstage catalog = ownership source of truth",
            "Lower Platform / SRE toil on repetitive requests",
            "Graftable product on any ZENORA / client GitOps cluster",
        ],

        metrics: {
            "Portal": "Backstage",
            "Paths": "Golden Paths multi-lang",
            "Delivery": "GitOps Argo CD",
            "Defaults": "OTel + security on",
            "Governance": "Kyverno + quotas",
            "Cost": "Kubecost",
            "DX": "self-service Create Service",
            "Product": "forkable IDP",
        },

        techStack: {
            frontend: [
                "Backstage UI",
            ],
            backend: [
                "Platform API",
                "scaffolder / templates",
            ],
            database: [
                "PostgreSQL (Backstage + app templates)",
                "Redis templates",
            ],
            devops: [
                "Backstage",
                "Argo CD",
                "Terraform",
                "Helm",
                "Kubernetes",
                "External Secrets",
                "cert-manager",
                "ExternalDNS",
                "Vault / Infisical",
                "Harbor",
                "Kyverno",
                "Trivy",
                "Cosign",
                "Prometheus",
                "Grafana",
                "Kubecost",
                "GitHub Actions",
                "Docker",
            ],
        },

        architecture: [
            "Developer → Backstage → Platform API → Git / Terraform / Secrets",
            "GitOps Argo CD → Kubernetes → App + DB + Observability",
            "Policies Kyverno gate images, labels, security context",
            "Catalog ownership + liens dashboards/SLO/runbooks",
            "Identical local kind/Compose path for platform control plane labs",
        ],

        testing: [
            "Template / scaffolder tests",
            "Helm + Kubernetes validation",
            "Policy tests Kyverno",
            "Golden Path E2E developer journey",
            "Security baseline on generated services",
            "Control-plane failure: Argo CD down, apps stay up",
        ],

        images: [
            "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
        ],
        preview: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
        videoDemo: "",

        category: "Platform Engineering • DX",
        status: "Actif",
        complexity: "Expert",
        role: "Platform Engineer",
        teamSize: 1,

        duration: "Lab → plateforme (2026)",
        date: "2026",

        github: "https://github.com/barthez-kenwou/Enterprise-Internal-Developer-Platform",
        demo: "",

        businessContextFr: "Deuxième pilier de la Enterprise Platform Lab Suite : transformer Kubernetes en produit self-service pour accélérer le delivery sans sacrifier standards ni sécurité.",
        businessContextEn: "Second pillar of the Enterprise Platform Lab Suite: turn Kubernetes into a self-service product to accelerate delivery without sacrificing standards or security.",

        confidential: false,

        responsibilitiesFr: [
            "Design IDP et contrats Golden Path",
            "Backstage catalog + scaffolder templates",
            "Chaîne Git → CI → GitOps → runtime",
            "Baseline sécurité et observabilité par défaut",
            "Gouvernance Policy-as-Code et cost visibility",
            "Docs Quick Start + scénarios DX",
        ],
        responsibilitiesEn: [
            "IDP design and Golden Path contracts",
            "Backstage catalog + scaffolder templates",
            "Git → CI → GitOps → runtime chain",
            "Default security and observability baseline",
            "Policy-as-Code governance and cost visibility",
            "Quick Start docs + DX scenarios",
        ],

        gallery: [
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                captionFr: "Captures Backstage / Golden Path à venir",
                captionEn: "Backstage / Golden Path screenshots coming soon", kind: "wip",
            },
        ],

        diagrams: [
            {
                id: "idp-flow",
                titleFr: "Parcours Create Service",
                titleEn: "Create Service journey",
                mermaid: `flowchart TB
  DEV[Developer] --> BS[Backstage]
  BS --> API[Platform API]
  API --> GIT[Git Provider]
  API --> TF[Terraform]
  API --> SEC[Secrets Vault]
  GIT --> AC[Argo CD]
  AC --> K8S[Kubernetes]
  K8S --> APP[App + DB + Obs]`,
            },
            {
                id: "idp-golden",
                titleFr: "Contenu d'un Golden Path",
                titleEn: "Golden Path contents",
                mermaid: `flowchart LR
  T[Template] --> R[Repo + README]
  T --> C[CI/CD]
  T --> H[Helm + Argo]
  T --> O[OTel + Dashboard]
  T --> S[SLO + Runbook]
  T --> SEC[Security baseline]`,
            },
            {
                id: "idp-gov",
                titleFr: "Gouvernance automatique",
                titleEn: "Automatic governance",
                mermaid: `flowchart TB
  PR[Pull Request] --> CI[CI scans]
  CI --> AC[Argo sync]
  AC --> KY[Kyverno admit]
  KY -->|deny latest| NO[Blocked]
  KY -->|signed + limits| OK[Deployed]`,
            },
        ],

        resources: [
            {
                labelFr: "Repo Enterprise Internal Developer Platform",
                labelEn: "Enterprise Internal Developer Platform repo",
                url: "https://github.com/barthez-kenwou/Enterprise-Internal-Developer-Platform",
                type: "other",
            },
        ],

        milestones: [
            {
                labelFr: "Lab K8s/GitOps/Backstage",
                labelEn: "K8s/GitOps/Backstage lab",
                date: "Phase 1",
                descriptionFr: "Maîtrise isolée des briques.",
                descriptionEn: "Isolated mastery of building blocks.",
            },
            {
                labelFr: "Templates Golden Paths",
                labelEn: "Golden Path templates",
                date: "Phase 2",
                descriptionFr: "Scaffold multi-langages.",
                descriptionEn: "Multi-language scaffold.",
            },
            {
                labelFr: "Self-service + policies",
                labelEn: "Self-service + policies",
                date: "Phase 3",
                descriptionFr: "Portal + Kyverno + secrets.",
                descriptionEn: "Portal + Kyverno + secrets.",
            },
            {
                labelFr: "Produit IDP forkable",
                labelEn: "Forkable IDP product",
                date: "Phase 4",
                descriptionFr: "E2E Create Service documenté.",
                descriptionEn: "Documented E2E Create Service.",
            },
        ],

        scopeFr: [
            "IDP Backstage",
            "Golden Paths",
            "GitOps self-service",
            "Security/obs defaults",
            "Cost & governance",
        ],
        scopeEn: [
            "Backstage IDP",
            "Golden Paths",
            "GitOps self-service",
            "Security/obs defaults",
            "Cost & governance",
        ],
        nonGoalsFr: [
            "Remplacer le cloud public IAM",
            "PaaS multi-cloud commercial",
            "IDE cloud complet",
        ],
        nonGoalsEn: [
            "Replacing public-cloud IAM",
            "Commercial multi-cloud PaaS",
            "Full cloud IDE",
        ],

        decisions: [
            {
                titleFr: "Backstage comme façade produit",
                titleEn: "Backstage as the product façade",
                decisionFr: "Le portail orchestre ; Git reste la source de vérité.",
                decisionEn: "The portal orchestrates; Git remains source of truth.",
                rationaleFr: "Auditabilité et reprise après panne control-plane.",
                rationaleEn: "Auditability and recovery after control-plane failure.",
            },
            {
                titleFr: "Defaults sécurisés non négociables",
                titleEn: "Non-negotiable secure defaults",
                decisionFr: "OTel, NetworkPolicy, non-root, scans activés dans chaque template.",
                decisionEn: "OTel, NetworkPolicy, non-root, scans enabled in every template.",
                rationaleFr: "La plateforme encode les standards ; le ticket ops disparaît.",
                rationaleEn: "The platform encodes standards; the ops ticket disappears.",
            },
            {
                titleFr: "Lab first",
                titleEn: "Lab first",
                decisionFr: "Maîtriser Helm/Argo/Kyverno seuls avant le produit unifié.",
                decisionEn: "Master Helm/Argo/Kyverno alone before the unified product.",
                rationaleFr: "Un IDP fragile vient d'outils mal compris.",
                rationaleEn: "A fragile IDP comes from poorly understood tools.",
            },
        ],

        securityFr: [
            "Images signées + admission Kyverno",
            "Secrets externalisés",
            "PSS / non-root / NetworkPolicy",
            "RBAC least privilege",
            "Security score par service",
        ],
        securityEn: [
            "Signed images + Kyverno admission",
            "Externalized secrets",
            "PSS / non-root / NetworkPolicy",
            "Least-privilege RBAC",
            "Per-service security score",
        ],
        infraFr: [
            "Kubernetes + Argo CD",
            "Terraform modules",
            "Harbor registry",
            "Vault/Infisical + ESO",
            "cert-manager / ExternalDNS",
        ],
        infraEn: [
            "Kubernetes + Argo CD",
            "Terraform modules",
            "Harbor registry",
            "Vault/Infisical + ESO",
            "cert-manager / ExternalDNS",
        ],

        externalLinks: [
            {
                labelFr: "GitHub",
                labelEn: "GitHub",
                url: "https://github.com/barthez-kenwou/Enterprise-Internal-Developer-Platform",
            },
        ],

        testimonial: {
            quoteFr: "Je n'ai plus besoin d'un ticket pour un microservice standard : le Golden Path fait le travail.",
            quoteEn: "I no longer need a ticket for a standard microservice: the Golden Path does the work.",
            author: "Application developer",
            roleFr: "Backend",
            roleEn: "Backend",
            company: "Platform consumers",
        },

        lessonsFr: [
            "Kubernetes nu n'est pas une plateforme développeur.",
            "Un Golden Path vaut mieux que mille runbooks d'onboarding.",
            "Si Git n'est pas SoT, l'IDP devient un SPOF.",
            "La DX se mesure en minutes jusqu'au premier deploy.",
        ],
        lessonsEn: [
            "Raw Kubernetes is not a developer platform.",
            "One Golden Path beats a thousand onboarding runbooks.",
            "If Git is not SoT, the IDP becomes a SPOF.",
            "DX is measured in minutes to first deploy.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                afterSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                captionFr: "Du ticket ops Kubernetes au Create Service self-service.",
                captionEn: "From Kubernetes ops tickets to self-service Create Service.",
            },
        ],

        isFeatured: true,
    },

    {
        id: 17,
        titleFr: "Enterprise Cloud Security Platform — CloudSec, K8s & Runtime",
        titleEn: "Enterprise Cloud Security Platform — CloudSec, K8s & Runtime",

        descriptionFr: "Plateforme DevSecOps/CloudSec : CSPM/KSPM, supply chain (Trivy/SBOM/Cosign), admission Kyverno, réseau Cilium, runtime Falco, score de risque unifié — défense en profondeur code → runtime.",
        descriptionEn: "DevSecOps/CloudSec platform: CSPM/KSPM, supply chain (Trivy/SBOM/Cosign), Kyverno admission, Cilium network, Falco runtime, unified risk score — defense in depth from code to runtime.",

        fullDescriptionFr: `Je ne fais pas « du scanning dans le pipeline ». Je construis une chaîne de défense qui couvre le code, l'artifact, l'infrastructure, Kubernetes, le réseau et le runtime — une Enterprise Cloud Security Platform.

Le parcours a d'abord été un lab d'apprentissage intensif : outils isolés, labs Killercoda / cloud, cours (Udemy, DataCamp, Coursera, YouTube) et lecture de docs — puis tests locaux Docker outil par outil. La plateforme arrive en conclusion : quand chaque brique est maîtrisée, on industrialise un produit forkable.

Architecture : Git → CI (SAST/SCA/secrets) → build → Trivy/Syft/Grype/SBOM → Cosign → Harbor → Kubernetes (Kyverno + Cilium + Falco) → Security Platform → Risk Dashboard. Piliers : Identity, Kubernetes Security, Container, Supply Chain, Network, Runtime, Secrets, Vulnerability Management, Compliance, Detection & Response.

Scénarios : secret dans Git (Gitleaks bloque), image CVE critique (gate Trivy), image non signée (Kyverno refuse), attaque runtime simulée (Falco + Hubble + audit → isolation). Score de posture par cluster/namespace/workload/team. Compliance CIS/OWASP concepts. Objectif : pipeline détecte, cluster empêche, runtime détecte, réseau limite, secrets protégés, artifacts vérifiés, incidents corrélés.

Message recruteur : je construis une chaîne de défense complète — pas uniquement du DevSecOps pipeline.`,
        fullDescriptionEn: `I do not “scan in the pipeline”. I build a defense chain covering code, artifact, infrastructure, Kubernetes, network and runtime — an Enterprise Cloud Security Platform.

The journey started as an intensive learning lab: isolated tools, Killercoda / cloud labs, courses (Udemy, DataCamp, Coursera, YouTube) and docs — then local Docker tests tool by tool. The platform comes last: once every brick is mastered, industrialize a forkable product.

Architecture: Git → CI (SAST/SCA/secrets) → build → Trivy/Syft/Grype/SBOM → Cosign → Harbor → Kubernetes (Kyverno + Cilium + Falco) → Security Platform → Risk Dashboard. Pillars: Identity, Kubernetes Security, Container, Supply Chain, Network, Runtime, Secrets, Vulnerability Management, Compliance, Detection & Response.

Scenarios: secret in Git (Gitleaks blocks), critical CVE image (Trivy gate), unsigned image (Kyverno denies), simulated runtime attack (Falco + Hubble + audit → isolation). Posture score per cluster/namespace/workload/team. CIS/OWASP-oriented compliance. Goal: pipeline detects, cluster prevents, runtime detects, network limits, secrets protected, artifacts verified, incidents correlated.

Recruiter message: I build a full defense chain — not pipeline-only DevSecOps.`,

        problemFr: "La sécurité fragmentée (un scan CI ici, une NetworkPolicy là) laisse des trous entre artifact, admission et runtime. Sans plateforme, pas de posture unifiée ni de réponse corrélée.",
        problemEn: "Fragmented security (a CI scan here, a NetworkPolicy there) leaves gaps between artifact, admission and runtime. Without a platform, no unified posture or correlated response.",

        solutionFr: [
            "Supply chain : SAST/SCA/secrets + Trivy + SBOM + Cosign + Harbor",
            "Admission Kyverno : signatures, PSS, no latest, securityContext",
            "Network Cilium default-deny + Hubble visibility",
            "Runtime Falco : shell, privilege escalation, connexions anormales",
            "Secrets Vault/ESO + détection Gitleaks",
            "Security Posture Dashboard + risk scoring",
            "Compliance checks CIS Kubernetes / OWASP concepts",
            "Incident workflows et runbooks sécurité",
        ],
        solutionEn: [
            "Supply chain: SAST/SCA/secrets + Trivy + SBOM + Cosign + Harbor",
            "Kyverno admission: signatures, PSS, no latest, securityContext",
            "Cilium default-deny network + Hubble visibility",
            "Falco runtime: shell, privilege escalation, abnormal connections",
            "Vault/ESO secrets + Gitleaks detection",
            "Security Posture Dashboard + risk scoring",
            "CIS Kubernetes / OWASP-oriented compliance checks",
            "Security incident workflows and runbooks",
        ],

        challengesFr: [
            "Corréler signaux CI, admission, réseau et runtime en une timeline",
            "Fail-closed sans bloquer tout le delivery (gates graduées)",
            "Risk scoring actionnable (pas un vanity score)",
            "Attaques simulées sûres (labs) sans contamination hors lab",
            "Alignement avec le kit Supply Chain déjà en production (id:6)",
        ],
        challengesEn: [
            "Correlate CI, admission, network and runtime into one timeline",
            "Fail-closed without freezing delivery (graduated gates)",
            "Actionable risk scoring (not a vanity score)",
            "Safe simulated attacks (labs) without contaminating outside the lab",
            "Alignment with the Supply Chain kit already in production (id:6)",
        ],

        impactFr: [
            "Défense en profondeur démontrable code → runtime",
            "Aucun déploiement non signé / latest en environnement contrôlé",
            "Détection runtime avec isolation et postmortem",
            "Dashboard de posture pour prioriser le remediation",
            "Complète le Supply Chain Pipeline (id:6) côté plateforme cluster",
        ],
        impactEn: [
            "Demonstrable defense in depth code → runtime",
            "No unsigned / latest deploy in controlled environments",
            "Runtime detection with isolation and postmortem",
            "Posture dashboard to prioritize remediation",
            "Complements Supply Chain Pipeline (id:6) on the cluster platform side",
        ],

        metrics: {
            "Depth": "code → runtime",
            "Admission": "Kyverno + Cosign",
            "Network": "Cilium / Hubble",
            "Runtime": "Falco",
            "Supply chain": "Trivy + SBOM",
            "Posture": "risk score",
            "Scenarios": "4 attack drills",
            "Product": "forkable CloudSec",
        },

        techStack: {
            frontend: [
                "Security Risk Dashboard",
            ],
            backend: [
                "Security aggregation API (optional)",
            ],
            database: [],
            devops: [
                "Trivy",
                "Syft",
                "Grype",
                "Gitleaks",
                "Semgrep",
                "SonarQube",
                "Cosign / Sigstore",
                "Harbor",
                "Kyverno",
                "Cilium",
                "Hubble",
                "Falco",
                "Vault / Infisical",
                "External Secrets",
                "Kubernetes",
                "Terraform",
                "GitHub Actions",
                "Prometheus",
                "Grafana",
            ],
        },

        architecture: [
            "Git → CI scanners → build → SBOM/sign → Harbor",
            "Kubernetes admit (Kyverno) → runtime (Falco) → network (Cilium)",
            "Events → Security Platform → Risk Dashboard + alerts",
            "Secrets never in Git; rotation and audit",
            "Attack-scenario labs with containment",
        ],

        testing: [
            "Secret detection / SCA / container scan tests",
            "Policy admission tests (unsigned, privileged, latest)",
            "NetworkPolicy / Cilium path tests",
            "Falco detection drills",
            "Controlled penetration / chaos-security scenarios",
            "Compliance checklist regression",
        ],

        images: [
            "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
        ],
        preview: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
        videoDemo: "",

        category: "DevSecOps • CloudSec",
        status: "Actif",
        complexity: "Expert",
        role: "DevSecOps • Security Engineer",
        teamSize: 1,

        duration: "Lab → plateforme (2026)",
        date: "2026",

        github: "https://github.com/barthez-kenwou/Enterprise-Cloud-Security-Platform",
        demo: "",

        businessContextFr: "Troisième pilier de la suite : sécuriser Cloud/Kubernetes comme produit — complémentaire du Supply Chain Pipeline déjà en production.",
        businessContextEn: "Third pillar of the suite: secure Cloud/Kubernetes as a product — complementary to the Supply Chain Pipeline already in production.",

        confidential: false,

        responsibilitiesFr: [
            "Threat model CloudSec / KSPM",
            "Chaîne supply chain + admission + runtime",
            "Policies Kyverno et NetworkPolicies Cilium",
            "Règles Falco et corrélation incidents",
            "Risk dashboard et compliance views",
            "Attack scenarios + runbooks",
        ],
        responsibilitiesEn: [
            "CloudSec / KSPM threat model",
            "Supply chain + admission + runtime chain",
            "Kyverno policies and Cilium NetworkPolicies",
            "Falco rules and incident correlation",
            "Risk dashboard and compliance views",
            "Attack scenarios + runbooks",
        ],

        gallery: [
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                captionFr: "Captures Security Dashboard / Falco à venir",
                captionEn: "Security Dashboard / Falco screenshots coming soon", kind: "wip",
            },
        ],

        diagrams: [
            {
                id: "sec-chain",
                titleFr: "Chaîne de défense",
                titleEn: "Defense chain",
                mermaid: `flowchart TB
  GIT[Git] --> CI[CI SAST SCA Secrets]
  CI --> BLD[Build]
  BLD --> SCAN[Trivy SBOM]
  SCAN --> SIGN[Cosign]
  SIGN --> REG[Harbor]
  REG --> K8S[Kubernetes]
  K8S --> KY[Kyverno]
  K8S --> CIL[Cilium]
  K8S --> FAL[Falco]
  KY --> DASH[Risk Dashboard]
  CIL --> DASH
  FAL --> DASH`,
            },
            {
                id: "sec-runtime",
                titleFr: "Incident runtime simulé",
                titleEn: "Simulated runtime incident",
                mermaid: `sequenceDiagram
  participant Att as Compromised pod
  participant Fal as Falco
  participant Hub as Hubble
  participant Ops as Responder
  Att->>Fal: Shell exec
  Fal->>Ops: Alert
  Hub->>Ops: Network flows
  Ops->>Att: Isolate / revoke
  Ops->>Ops: Postmortem`,
            },
            {
                id: "sec-score",
                titleFr: "Posture multi-dimensions",
                titleEn: "Multi-dimension posture",
                mermaid: `flowchart LR
  ID[Identity] --> SCORE[Security score]
  NET[Network] --> SCORE
  CTR[Container] --> SCORE
  SC[Supply chain] --> SCORE
  RT[Runtime] --> SCORE
  CMP[Compliance] --> SCORE`,
            },
        ],

        resources: [
            {
                labelFr: "Repo Enterprise Cloud Security Platform",
                labelEn: "Enterprise Cloud Security Platform repo",
                url: "https://github.com/barthez-kenwou/Enterprise-Cloud-Security-Platform",
                type: "other",
            },
        ],

        milestones: [
            {
                labelFr: "Lab scanners + Cosign + Harbor",
                labelEn: "Scanners + Cosign + Harbor lab",
                date: "Phase 1",
                descriptionFr: "Maîtrise supply chain.",
                descriptionEn: "Supply chain mastery.",
            },
            {
                labelFr: "Kyverno + Cilium + Falco",
                labelEn: "Kyverno + Cilium + Falco",
                date: "Phase 2",
                descriptionFr: "Admission, réseau, runtime.",
                descriptionEn: "Admission, network, runtime.",
            },
            {
                labelFr: "Risk dashboard + drills",
                labelEn: "Risk dashboard + drills",
                date: "Phase 3",
                descriptionFr: "4 scénarios d'attaque.",
                descriptionEn: "4 attack scenarios.",
            },
            {
                labelFr: "Produit CloudSec forkable",
                labelEn: "Forkable CloudSec product",
                date: "Phase 4",
                descriptionFr: "Docs + GitOps policies.",
                descriptionEn: "Docs + GitOps policies.",
            },
        ],

        scopeFr: [
            "CloudSec plateforme",
            "Supply chain → runtime",
            "KSPM + posture score",
            "Attack scenarios",
            "Compliance views",
        ],
        scopeEn: [
            "CloudSec platform",
            "Supply chain → runtime",
            "KSPM + posture score",
            "Attack scenarios",
            "Compliance views",
        ],
        nonGoalsFr: [
            "SOC managé 24/7",
            "Remplacer un SIEM entreprise complet",
            "Pentest offensif hors lab",
        ],
        nonGoalsEn: [
            "Managed 24/7 SOC",
            "Replacing a full enterprise SIEM",
            "Offensive pentest outside the lab",
        ],

        decisions: [
            {
                titleFr: "Défense en profondeur, pas un outil unique",
                titleEn: "Defense in depth, not a single tool",
                decisionFr: "Chaque couche échoue indépendamment ; la suivante contient.",
                decisionEn: "Each layer fails independently; the next contains.",
                rationaleFr: "Un seul scanner CI ne couvre pas le runtime.",
                rationaleEn: "A single CI scanner does not cover runtime.",
            },
            {
                titleFr: "Fail-closed sur l'admission critique",
                titleEn: "Fail-closed on critical admission",
                decisionFr: "Unsigned / privileged / latest bloqués en environnements contrôlés.",
                decisionEn: "Unsigned / privileged / latest blocked in controlled environments.",
                rationaleFr: "Prévention > détection seule.",
                rationaleEn: "Prevention > detection alone.",
            },
            {
                titleFr: "Complément du kit Supply Chain",
                titleEn: "Complement to the Supply Chain kit",
                decisionFr: "Réutiliser la discipline CI déjà en prod ; étendre au cluster.",
                decisionEn: "Reuse CI discipline already in prod; extend to the cluster.",
                rationaleFr: "Cohérence suite Enterprise Labs.",
                rationaleEn: "Enterprise Labs suite coherence.",
            },
        ],

        securityFr: [
            "RBAC least privilege",
            "mTLS / TLS partout pertinent",
            "Secrets dynamiques",
            "Audit trail",
            "Image signing + verify",
        ],
        securityEn: [
            "Least-privilege RBAC",
            "mTLS / TLS where relevant",
            "Dynamic secrets",
            "Audit trail",
            "Image signing + verify",
        ],
        infraFr: [
            "Kubernetes sécurisé",
            "Harbor + Cosign",
            "Cilium CNI",
            "Vault/Infisical",
            "GitOps policies",
        ],
        infraEn: [
            "Hardened Kubernetes",
            "Harbor + Cosign",
            "Cilium CNI",
            "Vault/Infisical",
            "GitOps policies",
        ],

        externalLinks: [
            {
                labelFr: "GitHub",
                labelEn: "GitHub",
                url: "https://github.com/barthez-kenwou/Enterprise-Cloud-Security-Platform",
            },
        ],

        testimonial: {
            quoteFr: "Le pipeline bloque, le cluster refuse, le runtime alerte : enfin une chaîne cohérente.",
            quoteEn: "The pipeline blocks, the cluster denies, the runtime alerts: finally a coherent chain.",
            author: "Security peer",
            roleFr: "DevSecOps",
            roleEn: "DevSecOps",
            company: "Enterprise Platform Labs",
        },

        lessonsFr: [
            "Scanner CI ≠ plateforme CloudSec.",
            "Sans admission, les artifacts signés peuvent quand même arriver mal configurés.",
            "Le runtime est la dernière ligne — elle doit être audible et corrélée.",
            "Le score de risque doit pousser une action, pas décorer un dashboard.",
        ],
        lessonsEn: [
            "CI scanning ≠ a CloudSec platform.",
            "Without admission, signed artifacts can still land misconfigured.",
            "Runtime is the last line — it must be audible and correlated.",
            "Risk score must drive action, not decorate a dashboard.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                afterSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                captionFr: "Du scan isolé à une chaîne de défense code → runtime.",
                captionEn: "From isolated scanning to a code → runtime defense chain.",
            },
        ],

        isFeatured: true,
    },

    {
        id: 18,
        titleFr: "Enterprise Disaster Recovery & Resilience Platform",
        titleEn: "Enterprise Disaster Recovery & Resilience Platform",

        descriptionFr: "Plateforme SRE de résilience : backups 3-2-1, Velero, PostgreSQL PITR, failover, chaos/game days, RPO/RTO mesurés — prouver qu'on reconstruit, pas seulement qu'on sauvegarde.",
        descriptionEn: "SRE resilience platform: 3-2-1 backups, Velero, PostgreSQL PITR, failover, chaos/game days, measured RPO/RTO — prove you rebuild, not only that you back up.",

        fullDescriptionFr: `Je n'ai pas « configuré Velero ». J'ai construit une plateforme capable de survivre à des pannes graves et de le prouver : backup, restore, failover, chaos, RPO/RTO mesurés, reconstruction depuis Git.

Le parcours a d'abord été un lab d'apprentissage intensif : outils isolés, labs Killercoda / cloud, cours (Udemy, DataCamp, Coursera, YouTube) et lecture de docs — puis tests locaux Docker outil par outil. La plateforme arrive en conclusion : quand chaque brique est maîtrisée, on industrialise un produit forkable.

Positionnement : Business Continuity + Resilience Engineering. Stratégie 3-2-1, backups immuables chiffrés, vérification d'intégrité, Velero (namespaces/PV/cluster), PostgreSQL HA + WAL + PITR, object storage multi-site, Terraform + Argo CD pour reconstruire l'infra et les workloads. CLI drctl : backup, verify, restore, failover, status, test, report.

Game days : pod kill, node failure, PG disaster, full cluster destroy, ransomware simulation contrôlée. Recovery Score : fraîcheur backup, intégrité, succès restore, durée, perte de données, automatisation vs intervention humaine. Critère ultime : détruire → détecter → isoler → restaurer → vérifier → mesurer → documenter — sans dépendre exclusivement de connaissances manuelles.

Message recruteur : je conçois des systèmes capables de continuer et de se reconstruire après défaillance.`,
        fullDescriptionEn: `I did not “configure Velero”. I built a platform that survives severe failures and proves it: backup, restore, failover, chaos, measured RPO/RTO, rebuild from Git.

The journey started as an intensive learning lab: isolated tools, Killercoda / cloud labs, courses (Udemy, DataCamp, Coursera, YouTube) and docs — then local Docker tests tool by tool. The platform comes last: once every brick is mastered, industrialize a forkable product.

Positioning: Business Continuity + Resilience Engineering. 3-2-1 strategy, encrypted immutable backups, integrity verification, Velero (namespaces/PV/cluster), PostgreSQL HA + WAL + PITR, multi-site object storage, Terraform + Argo CD to rebuild infra and workloads. CLI drctl: backup, verify, restore, failover, status, test, report.

Game days: pod kill, node failure, PG disaster, full cluster destroy, controlled ransomware simulation. Recovery Score: backup freshness, integrity, restore success, duration, data loss, automation vs human intervention. Ultimate criterion: destroy → detect → isolate → restore → verify → measure → document — without relying exclusively on tribal knowledge.

Recruiter message: I design systems that keep running and rebuild after failure.`,

        problemFr: "Avoir des backups non testés, c'est avoir une illusion de sécurité. Sans drills, RPO/RTO sont des slides — pas des preuves.",
        problemEn: "Untested backups are an illusion of safety. Without drills, RPO/RTO are slides — not proof.",

        solutionFr: [
            "Backup 3-2-1 chiffré + immuable + vérification",
            "Velero Kubernetes + restore cross-cluster",
            "PostgreSQL HA, WAL archiving, PITR automatisé",
            "Reconstruction infra Terraform + workloads GitOps",
            "Chaos engineering + Game Days documentés",
            "RPO/RTO définis ET mesurés à chaque drill",
            "CLI drctl + DR dashboard + Recovery Score",
            "Runbooks et rapports automatiques post-drill",
        ],
        solutionEn: [
            "Encrypted 3-2-1 backup + immutable + verification",
            "Kubernetes Velero + cross-cluster restore",
            "PostgreSQL HA, WAL archiving, automated PITR",
            "Terraform infra rebuild + GitOps workloads",
            "Chaos engineering + documented Game Days",
            "RPO/RTO defined AND measured every drill",
            "drctl CLI + DR dashboard + Recovery Score",
            "Runbooks and automatic post-drill reports",
        ],

        challengesFr: [
            "Mesurer RPO/RTO réels (horodatage, data loss, disponibilité)",
            "Restore PostgreSQL cohérent avec état applicatif",
            "Full cluster disaster sans perdre la SoT Git",
            "Backups immuables vs opérations de restore fréquentes en lab",
            "Automatiser sans cacher les décisions humaines critiques",
        ],
        challengesEn: [
            "Measure real RPO/RTO (timestamps, data loss, availability)",
            "Consistent PostgreSQL restore with application state",
            "Full cluster disaster without losing Git SoT",
            "Immutable backups vs frequent lab restores",
            "Automate without hiding critical human decisions",
        ],

        impactFr: [
            "Preuves de recovery (rapports game days) plutôt que promesses",
            "RPO/RTO cibles ex. 15 min / 30 min — validés en drill",
            "Reconstruction cluster depuis Git + Velero + PG",
            "Culture resilience engineering industrialisée",
            "Produit greffable sur stacks Compose/K8s existantes",
        ],
        impactEn: [
            "Recovery evidence (game-day reports) instead of promises",
            "Target RPO/RTO e.g. 15 min / 30 min — validated in drills",
            "Cluster rebuild from Git + Velero + PG",
            "Industrialized resilience-engineering culture",
            "Graftable product onto existing Compose/K8s stacks",
        ],

        metrics: {
            "Strategy": "3-2-1 + immutable",
            "K8s backup": "Velero",
            "Database": "PG HA + PITR",
            "Targets": "RPO/RTO measured",
            "Drills": "Game Days",
            "Score": "Recovery Score",
            "CLI": "drctl",
            "Product": "forkable DR platform",
        },

        techStack: {
            frontend: [
                "DR Dashboard",
            ],
            backend: [
                "drctl CLI",
            ],
            database: [
                "PostgreSQL HA",
                "WAL archiving",
                "PITR",
            ],
            devops: [
                "Velero",
                "Terraform",
                "Argo CD",
                "Kubernetes",
                "MinIO / S3",
                "Chaos Mesh",
                "Prometheus",
                "Grafana",
                "Object storage lifecycle",
                "Backup encryption",
            ],
        },

        architecture: [
            "Production → Velero + PG Operator → Object Storage",
            "Backup region + DR region / recovery cluster",
            "Git + Terraform reconstruct control plane and data plane",
            "Chaos injectors + observability during drills",
            "Recovery Score feeds dashboard and reports",
        ],

        testing: [
            "Backup / restore / integrity tests",
            "PostgreSQL failover + PITR validation",
            "Node / pod / network / storage chaos",
            "Full cluster disaster simulation",
            "Ransomware-controlled restore drill",
            "Automated DR drill + RPO/RTO report",
        ],

        images: [
            "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
        ],
        preview: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
        videoDemo: "",

        category: "SRE • Resilience • DR",
        status: "Actif",
        complexity: "Expert",
        role: "SRE • Infrastructure Engineer",
        teamSize: 1,

        duration: "Lab → plateforme (2026)",
        date: "2026",

        github: "https://github.com/barthez-kenwou/Enterprise-Disaster-Recovery-Resilience-Platform",
        demo: "",

        businessContextFr: "Quatrième pilier : prouver la continuité d'activité — indispensable pour ERP Odoo, plateformes clients et tout runtime critique ZENORA.",
        businessContextEn: "Fourth pillar: prove business continuity — essential for Odoo ERP, client platforms and any critical ZENORA runtime.",

        confidential: false,

        responsibilitiesFr: [
            "Design RPO/RTO et criticité métier",
            "Pipelines backup Velero + PostgreSQL",
            "Automatisation restore / failover / verify",
            "Game days et chaos scenarios",
            "DR dashboard + Recovery Score",
            "Documentation et rapports de preuve",
        ],
        responsibilitiesEn: [
            "RPO/RTO design and business criticality",
            "Velero + PostgreSQL backup pipelines",
            "Restore / failover / verify automation",
            "Game days and chaos scenarios",
            "DR dashboard + Recovery Score",
            "Documentation and evidence reports",
        ],

        gallery: [
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                captionFr: "Captures DR dashboard / game days à venir",
                captionEn: "DR dashboard / game-day screenshots coming soon", kind: "wip",
            },
        ],

        diagrams: [
            {
                id: "dr-arch",
                titleFr: "Architecture backup / DR",
                titleEn: "Backup / DR architecture",
                mermaid: `flowchart TB
  PROD[Production K8s + PG] --> VEL[Velero]
  PROD --> PGB[PG WAL / PITR]
  VEL --> OBJ[(Object Storage)]
  PGB --> OBJ
  OBJ --> BR[Backup Region]
  OBJ --> DR[DR Region / Cluster]
  GIT[Git SoT] --> TF[Terraform rebuild]
  TF --> DR`,
            },
            {
                id: "dr-gameday",
                titleFr: "Game Day cluster destroy",
                titleEn: "Cluster destroy game day",
                mermaid: `flowchart LR
  X[Destroy cluster] --> TF[Terraform bootstrap]
  TF --> AC[Argo CD sync]
  AC --> VEL[Velero restore]
  VEL --> PG[PG PITR]
  PG --> VAL[Validate RPO/RTO]
  VAL --> REP[Report]`,
            },
            {
                id: "dr-score",
                titleFr: "Recovery Score",
                titleEn: "Recovery Score",
                mermaid: `flowchart TB
  F[Freshness] --> S[Recovery Score]
  I[Integrity] --> S
  R[Restore success] --> S
  D[Duration vs RTO] --> S
  L[Data loss vs RPO] --> S
  A[Automation ratio] --> S`,
            },
        ],

        resources: [
            {
                labelFr: "Repo Disaster Recovery & Resilience Platform",
                labelEn: "Disaster Recovery & Resilience Platform repo",
                url: "https://github.com/barthez-kenwou/Enterprise-Disaster-Recovery-Resilience-Platform",
                type: "other",
            },
        ],

        milestones: [
            {
                labelFr: "Lab Velero + PG backup",
                labelEn: "Velero + PG backup lab",
                date: "Phase 1",
                descriptionFr: "Backup/restore unitaires.",
                descriptionEn: "Unit backup/restore.",
            },
            {
                labelFr: "HA + PITR + verify",
                labelEn: "HA + PITR + verify",
                date: "Phase 2",
                descriptionFr: "Intégrité et failover.",
                descriptionEn: "Integrity and failover.",
            },
            {
                labelFr: "Game Days + chaos",
                labelEn: "Game Days + chaos",
                date: "Phase 3",
                descriptionFr: "Drills documentés.",
                descriptionEn: "Documented drills.",
            },
            {
                labelFr: "Produit DR + drctl",
                labelEn: "DR product + drctl",
                date: "Phase 4",
                descriptionFr: "CLI, score, GitOps rebuild.",
                descriptionEn: "CLI, score, GitOps rebuild.",
            },
        ],

        scopeFr: [
            "Backup/restore plateforme",
            "PG PITR",
            "Chaos + game days",
            "RPO/RTO mesurés",
            "Rebuild GitOps",
        ],
        scopeEn: [
            "Backup/restore platform",
            "PG PITR",
            "Chaos + game days",
            "Measured RPO/RTO",
            "GitOps rebuild",
        ],
        nonGoalsFr: [
            "Assurance cyber commerciale",
            "Multi-cloud actif-actif jour 1",
            "Remplacer un contrat DR vendor",
        ],
        nonGoalsEn: [
            "Commercial cyber insurance",
            "Active-active multi-cloud on day 1",
            "Replacing a vendor DR contract",
        ],

        decisions: [
            {
                titleFr: "Preuve avant promesse",
                titleEn: "Evidence before promises",
                decisionFr: "Chaque cible RPO/RTO a un drill et un rapport.",
                decisionEn: "Every RPO/RTO target has a drill and a report.",
                rationaleFr: "Les slides ne restaurent pas les données.",
                rationaleEn: "Slides do not restore data.",
            },
            {
                titleFr: "Git comme colonne vertébrale",
                titleEn: "Git as the backbone",
                decisionFr: "Infra et workloads déclaratifs ; backups pour l'état et les données.",
                decisionEn: "Declarative infra and workloads; backups for state and data.",
                rationaleFr: "Reconstruction rapide et auditable.",
                rationaleEn: "Fast, auditable reconstruction.",
            },
            {
                titleFr: "Chaos régulier",
                titleEn: "Regular chaos",
                decisionFr: "Game Days planifiés, pas ponctuels.",
                decisionEn: "Scheduled Game Days, not one-offs.",
                rationaleFr: "La résilience pourrit sans exercice.",
                rationaleEn: "Resilience rots without practice.",
            },
        ],

        securityFr: [
            "Backup encryption",
            "Immutable retention",
            "Accès restore least privilege",
            "Secrets restaurés hors clair Git",
            "Isolation ransomware lab",
        ],
        securityEn: [
            "Backup encryption",
            "Immutable retention",
            "Least-privilege restore access",
            "Secrets restored outside clear Git",
            "Ransomware lab isolation",
        ],
        infraFr: [
            "Velero + object storage",
            "PostgreSQL HA",
            "Terraform + Argo CD",
            "Chaos Mesh",
            "Multi-region capable design",
        ],
        infraEn: [
            "Velero + object storage",
            "PostgreSQL HA",
            "Terraform + Argo CD",
            "Chaos Mesh",
            "Multi-region capable design",
        ],

        externalLinks: [
            {
                labelFr: "GitHub",
                labelEn: "GitHub",
                url: "https://github.com/barthez-kenwou/Enterprise-Disaster-Recovery-Resilience-Platform",
            },
        ],

        testimonial: {
            quoteFr: "On a détruit le cluster en game day — et on a une preuve chiffrée du RTO, pas une anecdote.",
            quoteEn: "We destroyed the cluster on game day — and we have measured RTO evidence, not an anecdote.",
            author: "SRE peer",
            roleFr: "SRE",
            roleEn: "SRE",
            company: "Enterprise Platform Labs",
        },

        lessonsFr: [
            "Un backup non restauré n'existe pas.",
            "RPO/RTO sans mesure sont du théâtre.",
            "Git reconstruit le désir ; Velero/PG restaurent la réalité.",
            "Les game days révèlent les runbooks morts.",
        ],
        lessonsEn: [
            "An unrestored backup does not exist.",
            "Unmeasured RPO/RTO is theater.",
            "Git rebuilds desired state; Velero/PG restore reality.",
            "Game days expose dead runbooks.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                afterSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                captionFr: "Des backups non testés à une plateforme de preuve de recovery.",
                captionEn: "From untested backups to a recovery-evidence platform.",
            },
        ],

        isFeatured: true,
    },

    {
        id: 19,
        titleFr: "Enterprise Event-Driven Platform — Kafka, Saga & Resilience",
        titleEn: "Enterprise Event-Driven Platform — Kafka, Saga & Resilience",

        descriptionFr: "Plateforme event-driven (Redpanda/Kafka) : producers/consumers, outbox, saga, DLQ, idempotence, backpressure, OTel corrélé — lab systèmes distribués transformé en produit forkable.",
        descriptionEn: "Event-driven platform (Redpanda/Kafka): producers/consumers, outbox, saga, DLQ, idempotency, backpressure, correlated OTel — distributed-systems lab turned forkable product.",

        fullDescriptionFr: `Je n'ai pas « démarré Kafka ». J'ai construit une plateforme événementielle moderne pour démontrer — et réutiliser — les patterns des systèmes distribués : partitioning, replication, consumer groups, DLQ, retry, idempotence, outbox, saga, replay, versioning, backpressure, circuit breakers.

Le parcours a d'abord été un lab d'apprentissage intensif : outils isolés, labs Killercoda / cloud, cours (Udemy, DataCamp, Coursera, YouTube) et lecture de docs — puis tests locaux Docker outil par outil. La plateforme arrive en conclusion : quand chaque brique est maîtrisée, on industrialise un produit forkable.

Stack : Redpanda ou Kafka + Schema Registry, microservices producers/consumers, PostgreSQL outbox, OpenTelemetry (traces à travers le broker), Prometheus/Grafana/Loki, chaos et load testing. Architecture multi-services avec parcours métier (order → payment → notification) et échecs injectés (timeout, poison message, partition lag, broker blip).

Objectif portfolio : prouver que je comprends réellement les sémantiques de livraison, la résilience asynchrone et le troubleshooting distribué — pas seulement un docker-compose Kafka. Produit forkable : templates consumer/producer, conventions de topics, observabilité et runbooks inclus.

Message recruteur : je maîtrise les systèmes distribués événementiels et je les industrialise en plateforme.`,
        fullDescriptionEn: `I did not “start Kafka”. I built a modern event-driven platform to demonstrate — and reuse — distributed-systems patterns: partitioning, replication, consumer groups, DLQ, retry, idempotency, outbox, saga, replay, versioning, backpressure, circuit breakers.

The journey started as an intensive learning lab: isolated tools, Killercoda / cloud labs, courses (Udemy, DataCamp, Coursera, YouTube) and docs — then local Docker tests tool by tool. The platform comes last: once every brick is mastered, industrialize a forkable product.

Stack: Redpanda or Kafka + Schema Registry, producer/consumer microservices, PostgreSQL outbox, OpenTelemetry (traces across the broker), Prometheus/Grafana/Loki, chaos and load testing. Multi-service architecture with a business journey (order → payment → notification) and injected failures (timeout, poison message, partition lag, broker blip).

Portfolio goal: prove I truly understand delivery semantics, async resilience and distributed troubleshooting — not just a Kafka docker-compose. Forkable product: consumer/producer templates, topic conventions, observability and runbooks included.

Recruiter message: I master event-driven distributed systems and industrialize them as a platform.`,

        problemFr: "Les démos Kafka s'arrêtent au hello-world. En production, ce qui compte ce sont outbox, idempotence, DLQ, saga et la capacité à diagnostiquer un lag sous charge.",
        problemEn: "Kafka demos stop at hello-world. In production what matters is outbox, idempotency, DLQ, saga and diagnosing lag under load.",

        solutionFr: [
            "Broker Redpanda/Kafka + Schema Registry",
            "Patterns : outbox, saga, DLQ, retry, idempotence, replay",
            "Conventions topics / headers / correlation IDs",
            "OpenTelemetry end-to-end à travers le bus",
            "Metrics consumer lag, throughput, error rate",
            "Chaos : poison messages, broker failure, lag injection",
            "Load tests et backpressure contrôlée",
            "Templates services + docs Quick Start forkables",
        ],
        solutionEn: [
            "Redpanda/Kafka broker + Schema Registry",
            "Patterns: outbox, saga, DLQ, retry, idempotency, replay",
            "Topic / header / correlation ID conventions",
            "End-to-end OpenTelemetry across the bus",
            "Metrics: consumer lag, throughput, error rate",
            "Chaos: poison messages, broker failure, lag injection",
            "Load tests and controlled backpressure",
            "Forkable service templates + Quick Start docs",
        ],

        challengesFr: [
            "Exactly-once / at-least-once : être honnête sur les garanties",
            "Outbox transactionnel sans dual-write naïf",
            "Saga compensations testables",
            "Corrélation traces via messaging asynchrone",
            "Éviter la plateforme-usine : rester greffable et claire",
        ],
        challengesEn: [
            "Exactly-once / at-least-once: be honest about guarantees",
            "Transactional outbox without naive dual-write",
            "Testable saga compensations",
            "Trace correlation through async messaging",
            "Avoid platform-bloat: stay graftable and clear",
        ],

        impactFr: [
            "Lab distribué recruteur-ready avec incidents démontrables",
            "Patterns réutilisables sur NEXUS / futurs microservices ZENORA",
            "Observabilité event-driven alignée sur la plateforme Observability (id:8)",
            "Compréhension opérationnelle du lag et des DLQ",
            "Produit forkable pour bootstraper un bus d'événements",
        ],
        impactEn: [
            "Recruiter-ready distributed lab with demonstrable incidents",
            "Reusable patterns for NEXUS / future ZENORA microservices",
            "Event-driven observability aligned with Observability platform (id:8)",
            "Operational understanding of lag and DLQs",
            "Forkable product to bootstrap an event bus",
        ],

        metrics: {
            "Broker": "Redpanda / Kafka",
            "Patterns": "outbox + saga + DLQ",
            "Semantics": "at-least-once + idempotency",
            "Observability": "OTel across bus",
            "Resilience": "chaos + load",
            "Schema": "Schema Registry",
            "DX": "producer/consumer templates",
            "Product": "forkable EDA platform",
        },

        techStack: {
            frontend: [],
            backend: [
                "Producers / Consumers (Node / Go / Java)",
            ],
            database: [
                "PostgreSQL outbox",
            ],
            devops: [
                "Redpanda / Kafka",
                "Schema Registry",
                "OpenTelemetry",
                "Prometheus",
                "Grafana",
                "Loki",
                "Tempo",
                "Docker Compose",
                "Kubernetes",
                "k6",
                "Chaos Mesh",
            ],
        },

        architecture: [
            "Services → outbox → broker → consumer groups",
            "Schema Registry governs event evolution",
            "DLQ + retry policies per consumer",
            "Saga orchestration/choreography for multi-step flows",
            "OTel context propagation across async boundaries",
        ],

        testing: [
            "Contract / schema compatibility tests",
            "Idempotency and duplicate delivery tests",
            "Saga compensation tests",
            "Lag and backpressure load tests",
            "Broker failure / partition chaos",
            "Trace propagation across messaging tests",
        ],

        images: [
            "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
        ],
        preview: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
        videoDemo: "",

        category: "Distributed Systems • EDA",
        status: "Actif",
        complexity: "Expert",
        role: "Distributed Systems • Platform Engineer",
        teamSize: 1,

        duration: "Lab → plateforme (2026)",
        date: "2026",

        github: "https://github.com/barthez-kenwou/Enterprise-Event-Driven-Platform",
        demo: "",

        businessContextFr: "Cinquième pilier de la suite (aux côtés du Supply Chain Pipeline id:6) : maîtriser l'asynchrone distribué pour les architectures microservices modernes.",
        businessContextEn: "Fifth pillar of the suite (alongside Supply Chain Pipeline id:6): master distributed async for modern microservice architectures.",

        confidential: false,

        responsibilitiesFr: [
            "Design EDA et conventions d'événements",
            "Implémentation outbox / saga / DLQ",
            "Instrumentation OTel messaging",
            "Chaos et load scenarios",
            "Templates et documentation forkable",
            "Alignement avec Observability Platform",
        ],
        responsibilitiesEn: [
            "EDA design and event conventions",
            "Outbox / saga / DLQ implementation",
            "OTel messaging instrumentation",
            "Chaos and load scenarios",
            "Forkable templates and documentation",
            "Alignment with Observability Platform",
        ],

        gallery: [
            {
                src: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                captionFr: "Captures topics / lag / traces à venir",
                captionEn: "Topics / lag / traces screenshots coming soon", kind: "wip",
            },
        ],

        diagrams: [
            {
                id: "eda-flow",
                titleFr: "Flux order → payment → notify",
                titleEn: "Order → payment → notify flow",
                mermaid: `flowchart LR
  ORD[Order Service] -->|outbox| BUS[(Kafka / Redpanda)]
  BUS --> PAY[Payment Consumer]
  PAY -->|events| BUS
  BUS --> NOTIF[Notification Worker]
  PAY -->|DLQ| DLQ[Dead Letter Queue]`,
            },
            {
                id: "eda-outbox",
                titleFr: "Transactional outbox",
                titleEn: "Transactional outbox",
                mermaid: `sequenceDiagram
  participant API as Order API
  participant DB as PostgreSQL
  participant REL as Relay
  participant K as Broker
  API->>DB: TX order + outbox row
  REL->>DB: Poll outbox
  REL->>K: Publish event
  REL->>DB: Mark published`,
            },
            {
                id: "eda-obs",
                titleFr: "Observabilité event-driven",
                titleEn: "Event-driven observability",
                mermaid: `flowchart TB
  P[Producer span] --> B[Broker]
  B --> C[Consumer span]
  C --> M[Lag metrics]
  C --> L[Structured logs]
  C --> T[Trace continuum]`,
            },
        ],

        resources: [
            {
                labelFr: "Repo Enterprise Event-Driven Platform",
                labelEn: "Enterprise Event-Driven Platform repo",
                url: "https://github.com/barthez-kenwou/Enterprise-Event-Driven-Platform",
                type: "other",
            },
        ],

        milestones: [
            {
                labelFr: "Lab broker + consumers",
                labelEn: "Broker + consumers lab",
                date: "Phase 1",
                descriptionFr: "Basics partitioning/groups.",
                descriptionEn: "Partitioning/groups basics.",
            },
            {
                labelFr: "Outbox + saga + DLQ",
                labelEn: "Outbox + saga + DLQ",
                date: "Phase 2",
                descriptionFr: "Patterns résilience.",
                descriptionEn: "Resilience patterns.",
            },
            {
                labelFr: "OTel + chaos + load",
                labelEn: "OTel + chaos + load",
                date: "Phase 3",
                descriptionFr: "Troubleshooting distribué.",
                descriptionEn: "Distributed troubleshooting.",
            },
            {
                labelFr: "Produit EDA forkable",
                labelEn: "Forkable EDA product",
                date: "Phase 4",
                descriptionFr: "Templates + Quick Start.",
                descriptionEn: "Templates + Quick Start.",
            },
        ],

        scopeFr: [
            "Plateforme EDA",
            "Patterns distribués",
            "Observabilité async",
            "Chaos/load",
            "Templates forkables",
        ],
        scopeEn: [
            "EDA platform",
            "Distributed patterns",
            "Async observability",
            "Chaos/load",
            "Forkable templates",
        ],
        nonGoalsFr: [
            "Remplacer un iPaaS entreprise",
            "Event mesh multi-cloud jour 1",
            "Streaming analytics temps réel BI",
        ],
        nonGoalsEn: [
            "Replacing an enterprise iPaaS",
            "Multi-cloud event mesh on day 1",
            "Real-time BI streaming analytics",
        ],

        decisions: [
            {
                titleFr: "Honnêteté sur les garanties",
                titleEn: "Honesty about guarantees",
                decisionFr: "At-least-once + idempotence applicative plutôt que magie exactly-once.",
                decisionEn: "At-least-once + application idempotency rather than exactly-once magic.",
                rationaleFr: "Évite les fausses assurances en entretien et en prod.",
                rationaleEn: "Avoids false assurances in interviews and in prod.",
            },
            {
                titleFr: "Outbox obligatoire pour écritures critiques",
                titleEn: "Outbox mandatory for critical writes",
                decisionFr: "Pas de dual-write naïf DB + publish.",
                decisionEn: "No naive DB + publish dual-write.",
                rationaleFr: "Cohérence sous crash process.",
                rationaleEn: "Consistency under process crash.",
            },
            {
                titleFr: "OTel à travers le bus",
                titleEn: "OTel across the bus",
                decisionFr: "Propagation de contexte dans headers d'événements.",
                decisionEn: "Context propagation in event headers.",
                rationaleFr: "Sinon le troubleshooting async est aveugle.",
                rationaleEn: "Otherwise async troubleshooting is blind.",
            },
        ],

        securityFr: [
            "ACLs topics",
            "TLS broker",
            "Schemas validés",
            "Pas de PII brute dans events",
            "Audit consumer identities",
        ],
        securityEn: [
            "Topic ACLs",
            "Broker TLS",
            "Validated schemas",
            "No raw PII in events",
            "Consumer identity audit",
        ],
        infraFr: [
            "Compose lab + K8s path",
            "Schema Registry",
            "DLQ topics",
            "Dashboards lag",
            "GitOps optional",
        ],
        infraEn: [
            "Compose lab + K8s path",
            "Schema Registry",
            "DLQ topics",
            "Lag dashboards",
            "Optional GitOps",
        ],

        externalLinks: [
            {
                labelFr: "GitHub",
                labelEn: "GitHub",
                url: "https://github.com/barthez-kenwou/Enterprise-Event-Driven-Platform",
            },
        ],

        testimonial: {
            quoteFr: "Enfin une démo Kafka qui montre outbox, DLQ et traces — pas juste un producer console.",
            quoteEn: "Finally a Kafka demo that shows outbox, DLQ and traces — not just a console producer.",
            author: "Backend peer",
            roleFr: "Software Engineer",
            roleEn: "Software Engineer",
            company: "Enterprise Platform Labs",
        },

        lessonsFr: [
            "Kafka sans patterns de résilience n'est qu'un pipe.",
            "Le lag est un signal produit, pas une métrique cosmétique.",
            "L'outbox sauve des nuits ; le dual-write les détruit.",
            "Sans traces async, le debugger devient de la divination.",
        ],
        lessonsEn: [
            "Kafka without resilience patterns is just a pipe.",
            "Lag is a product signal, not a cosmetic metric.",
            "Outbox saves nights; dual-write destroys them.",
            "Without async traces, debugging becomes fortune-telling.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                afterSrc: "https://s3.zenora360.com/barthez-portfolio/images/placeholder-empty.png",
                captionFr: "Du hello-world Kafka à une plateforme EDA résiliente et observée.",
                captionEn: "From Kafka hello-world to a resilient, observed EDA platform.",
            },
        ],

        isFeatured: true,
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
                captionFr: "Page À propos - organigramme et structure d’équipe",
                captionEn: "About page - org chart and team structure",
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
                captionFr: "Page Services - trois pôles, une obsession de résultat",
                captionEn: "Services page - three pillars, one performance obsession",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-03-54.png",
                captionFr: "Pôle 01 - Production audiovisuelle",
                captionEn: "Pillar 01 - Audiovisual production",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-04-00.png",
                captionFr: "Pôle 02 - Diffusion & annonce publicitaire",
                captionEn: "Pillar 02 - Advertising & broadcasting",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-04-10.png",
                captionFr: "Réalisations - campagnes Frutas et Intelek BTP",
                captionEn: "Work - Frutas campaign and Intelek BTP",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-04-25.png",
                captionFr: "Réalisations - voix off studio et pilotage projet",
                captionEn: "Work - studio voice-over and project coordination",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-04-31.png",
                captionFr: "Réalisations - animation événementielle et reportage",
                captionEn: "Work - event hosting and seminar coverage",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-04-51.png",
                captionFr: "Page Contact - promesse de réponse sous 24 h",
                captionEn: "Contact page - 24h response promise",
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
                captionFr: "Résultats agrégés - KPIs de crédibilité",
                captionEn: "Aggregated results - credibility KPIs",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-05-18.png",
                captionFr: "Section Pourquoi nous - proposition de valeur",
                captionEn: "Why us section - value proposition",
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
                captionFr: "Arborescence racine - Vite, Docker, Nginx, CI",
                captionEn: "Root tree - Vite, Docker, Nginx, CI",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-06-39.png",
                captionFr: "Structure src/ - pages, composants, data, hooks",
                captionEn: "src/ structure - pages, components, data, hooks",
                kind: "ui",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-16-56.png",
                captionFr: "Pages du site - Accueil, Services, Réalisations, Contact",
                captionEn: "Site pages - Home, Services, Work, Contact",
                kind: "infra",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-17-27.png",
                captionFr: "Pipeline Deploy - Cosign, production, notification",
                captionEn: "Deploy pipeline - Cosign, production, notification",
                kind: "process",
            },
            {
                src: "https://avrsidzgyusyblblcure.supabase.co/storage/v1/object/public/barthez-assets/Screenshot%20from%202026-08-18%2012-17-52.png",
                captionFr: "Pipeline CI - quality gate, SonarQube, secret scan",
                captionEn: "CI pipeline - quality gate, SonarQube, secret scan",
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