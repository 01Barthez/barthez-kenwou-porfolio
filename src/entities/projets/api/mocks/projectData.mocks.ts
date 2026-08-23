import { IProject } from '../../model/project.types';

export const projectsData: IProject[] = [

    {
        id: 1,
        titleFr: "NEXUS – ERP SaaS Modulaire pour la Gestion Intelligente de Restaurants",
        titleEn: "NEXUS – Modular SaaS ERP for Smart Restaurant Management",

        descriptionFr: "ERP SaaS nouvelle génération pour restaurants, basé sur une architecture modulaire activable à la demande, combinant gestion opérationnelle, analytics et expérience client dans une plateforme unifiée.",
        descriptionEn: "Next-generation SaaS ERP for restaurants, built on a modular on-demand architecture combining operations, analytics, and customer experience in a unified platform.",

        fullDescriptionFr: "NEXUS est une plateforme SaaS ambitieuse de nouvelle génération dédiée à la gestion intelligente et modulaire des restaurants. L’objectif est de fournir un système complet permettant à chaque restaurateur de construire son propre ERP sur mesure en activant uniquement les modules dont il a réellement besoin.\n\nLa plateforme repose sur une architecture monolithique modulaire (modular monolith) structurée via Turborepo, garantissant une séparation stricte des domaines métiers (Commandes, Stocks, CRM, Comptabilité, etc.) tout en conservant la simplicité opérationnelle d’un monolithe.\n\nLe produit comprend :\n- Une vitrine SaaS optimisée SEO pour acquisition client\n- Un système de souscription avec paiement multi-canaux (Mobile Money, Stripe, banque)\n- Une application principale (PWA) pour les restaurateurs\n- Des interfaces dédiées (admin, staff, cuisine)\n\nChaque restaurant peut configurer dynamiquement son environnement en activant des modules spécifiques : gestion des commandes (salle & online), menus & recettes avec calcul des coûts, gestion des stocks avec alertes, livraisons avec suivi temps réel, réservations intelligentes avec plan de salle, CRM client, facturation automatisée, reporting avancé (PDF/Excel), point de vente (POS), comptabilité, et écran cuisine.\n\nLe système intègre des capacités avancées : multi-tenant, gestion des rôles, analytics en temps réel, optimisation des performances, SEO, sécurité et scalabilité cloud-native. L’infrastructure est conçue pour AWS avec une approche DevOps complète (CI/CD, monitoring, observabilité).\n\nCe projet vise à créer une solution SaaS compétitive capable de rivaliser avec des solutions internationales, tout en étant adaptée aux réalités locales (paiements Mobile Money, flexibilité modulaire, coûts maîtrisés).",
        fullDescriptionEn: "NEXUS is a next-generation SaaS platform designed for intelligent and modular restaurant management. The goal is to provide a complete system allowing each restaurant owner to build a custom ERP by activating only the modules they need.\n\nThe platform is built on a modular monolithic architecture using Turborepo, ensuring strict separation of business domains (Orders, Inventory, CRM, Accounting, etc.) while maintaining operational simplicity.\n\nThe product includes:\n- A SEO-optimized SaaS landing platform for customer acquisition\n- Subscription system with multi-channel payments (Mobile Money, Stripe, banking)\n- Main PWA application for restaurant owners\n- Dedicated interfaces (admin, staff, kitchen)\n\nEach restaurant can dynamically configure its system by enabling modules such as: order management (in-house & online), menu & recipe costing, inventory with alerts, delivery tracking, smart reservations, CRM, invoicing, advanced analytics (PDF/Excel), POS system, accounting, and kitchen display.\n\nThe system integrates advanced capabilities: multi-tenancy, role management, real-time analytics, performance optimization, SEO, security, and cloud-native scalability. Infrastructure is designed for AWS with a full DevOps approach (CI/CD, monitoring, observability).\n\nThis project aims to build a competitive SaaS solution capable of rivaling international products while being adapted to local market realities (Mobile Money payments, modular flexibility, cost efficiency).",

        problemFr: "Les solutions existantes de gestion de restaurant sont souvent rigides, coûteuses et mal adaptées aux réalités locales, obligeant les restaurateurs à utiliser plusieurs outils fragmentés.",
        problemEn: "Existing restaurant management solutions are often rigid, expensive, and poorly adapted to local realities, forcing restaurant owners to use fragmented tools.",

        solutionFr: [
            "Architecture SaaS modulaire avec activation à la demande des fonctionnalités",
            "Système multi-tenant permettant la gestion de plusieurs restaurants",
            "Modules métiers indépendants (Commandes, Stocks, CRM, Comptabilité, etc.)",
            "Paiement intégré multi-canaux (Mobile Money, Stripe, bancaire)",
            "Application PWA performante accessible sur tous les appareils",
            "Analytics avancé et reporting (SLO business, revenus, performances)",
            "Infrastructure cloud AWS avec CI/CD, monitoring et sécurité",
        ],
        solutionEn: [
            "Modular SaaS architecture with on-demand feature activation",
            "Multi-tenant system supporting multiple restaurants",
            "Independent business modules (Orders, Inventory, CRM, Accounting, etc.)",
            "Integrated multi-channel payments (Mobile Money, Stripe, banking)",
            "High-performance PWA accessible on all devices",
            "Advanced analytics and reporting (business SLOs, revenue, performance)",
            "AWS cloud infrastructure with CI/CD, monitoring, and security",
        ],

        challengesFr: [
            "Concevoir une architecture modulaire tout en restant monolithique",
            "Gérer la complexité multi-tenant et isolation des données",
            "Optimiser les performances avec un grand nombre de modules",
            "Implémenter un système de facturation flexible par module",
            "Assurer la scalabilité et la sécurité sur AWS",
            "Maintenir une excellente UX malgré la richesse fonctionnelle",
        ],
        challengesEn: [
            "Designing a modular yet monolithic architecture",
            "Handling multi-tenant complexity and data isolation",
            "Optimizing performance with many modules",
            "Implementing flexible per-module billing system",
            "Ensuring scalability and security on AWS",
            "Maintaining excellent UX despite feature richness",
        ],

        impactFr: [
            "Digitalisation complète des opérations restaurant",
            "Réduction des coûts via modularité (payer uniquement ce qui est utilisé)",
            "Amélioration de la productivité et des marges",
            "Centralisation des opérations dans une plateforme unique",
            "Création d’un produit SaaS scalable à fort potentiel business",
        ],
        impactEn: [
            "Full digitization of restaurant operations",
            "Cost reduction via modular pricing (pay only for used features)",
            "Improved productivity and margins",
            "Centralized operations in a single platform",
            "Creation of a scalable high-value SaaS product",
        ],

        metrics: {
            "architecture": "Modular Monolith (Turborepo)",
            "multiTenant": "true",
            "modules": "10+ modules métiers",
            "scalability": "Cloud-native (AWS)",
            "status": "En développement actif",
        },

        techStack: {
            frontend: ["Next.js", "TypeScript", "Tailwind CSS", "PWA"],
            backend: ["Node.js", "API Routes / Services"],
            database: ["PostgreSQL"],
            devops: ["AWS", "Docker", "CI/CD", "Monitoring", "Observability"],
        },

        architecture: [
            "Modular Monolith avec séparation stricte des domaines",
            "Turborepo pour gestion multi-packages",
            "Multi-tenant architecture",
            "API centralisée avec modules découplés",
            "Infrastructure AWS scalable",
            "CI/CD + monitoring + observabilité",
        ],

        testing: [
            "Tests unitaires modules critiques",
            "Tests d’intégration",
            "Tests E2E (flux commandes, paiements)",
        ],

        images: [
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/167ee008-product-pic-tabesto-300x274.webp",
        ],

        preview: "",
        videoDemo: "",

        category: "SaaS • Fullstack • Cloud • DevOps",
        status: "En cours",
        complexity: "Expert",
        role: "Fullstack Developer • DevOps Engineer • Architect",
        teamSize: 3,

        duration: "Projet long terme",
        date: "2026",

        github: "",
        demo: "",

        businessContextFr: "Projet SaaS stratégique visant à créer une solution de gestion de restaurant scalable, modulaire et adaptée aux marchés locaux et internationaux.",
        businessContextEn: "Strategic SaaS project aimed at building a scalable, modular restaurant management solution for local and international markets.",

        confidential: false,

        responsibilitiesFr: [
            "Architecture modulaire (modular monolith) et découpage des bounded contexts",
            "Conception multi-tenant et modèle de facturation par module",
            "Mise en place CI/CD, observabilité et socle AWS",
            "Lead technique fullstack + cadrage produit avec l’équipe",
        ],
        responsibilitiesEn: [
            "Modular monolith architecture and bounded-context design",
            "Multi-tenant design and per-module billing model",
            "CI/CD, observability, and AWS foundation",
            "Fullstack technical lead and product framing with the team",
        ],

        gallery: [
            {
                src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/167ee008-product-pic-tabesto-300x274.webp",
                captionFr: "Aperçu UI - modules restaurant",
                captionEn: "UI preview - restaurant modules",
                kind: "ui",
            },
            {
                src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/167ee008-product-pic-tabesto-300x274.webp",
                captionFr: "Flux opérationnel cible",
                captionEn: "Target operational flow",
                kind: "process",
            },
        ],

        diagrams: [
            {
                id: "nexus-arch",
                titleFr: "Architecture modulaire",
                titleEn: "Modular architecture",
                mermaid: `flowchart TB
  Client[Client PWA] --> Gateway[API Gateway]
  Gateway --> Orders[Orders Domain]
  Gateway --> Inventory[Inventory Domain]
  Gateway --> CRM[CRM Domain]
  Gateway --> Billing[Billing Domain]
  Orders --> DB[(PostgreSQL)]
  Inventory --> DB
  CRM --> DB
  Billing --> Payments[Stripe / Mobile Money]
  subgraph AWS
    Gateway
    Orders
    Inventory
    CRM
    Billing
  end`,
            },
            {
                id: "nexus-deploy",
                titleFr: "Pipeline de déploiement",
                titleEn: "Deployment pipeline",
                mermaid: `flowchart LR
  Dev[Push] --> CI[GitHub Actions]
  CI --> Scan[Trivy / Sonar]
  Scan --> Build[Docker Build]
  Build --> Registry[GHCR]
  Registry --> Staging[Staging]
  Staging --> Prod[Production]`,
            },
        ],

        resources: [
            {
                labelFr: "Cahier des charges (extrait public)",
                labelEn: "Requirements brief (public excerpt)",
                url: "https://barthez-kenwou.dev/llms.txt",
                type: "spec",
            },
            {
                labelFr: "Étude de cas - vision produit",
                labelEn: "Case study - product vision",
                url: "https://barthez-kenwou.dev/",
                type: "case-study",
            },
        ],

        milestones: [
            {
                labelFr: "Cadrage & architecture",
                labelEn: "Framing & architecture",
                date: "2025 Q4",
                descriptionFr: "Choix modular monolith + Turborepo, cartographie des modules.",
                descriptionEn: "Chose modular monolith + Turborepo, mapped modules.",
            },
            {
                labelFr: "MVP modules cœur",
                labelEn: "Core modules MVP",
                date: "2026 Q1",
                descriptionFr: "Commandes, stocks, auth multi-tenant.",
                descriptionEn: "Orders, inventory, multi-tenant auth.",
            },
            {
                labelFr: "Paiements & analytics",
                labelEn: "Payments & analytics",
                date: "2026 Q2",
                descriptionFr: "Mobile Money / Stripe et reporting business.",
                descriptionEn: "Mobile Money / Stripe and business reporting.",
            },
        ],

        scopeFr: [
            "ERP SaaS modulaire multi-tenant",
            "PWA restaurateur + interfaces staff / cuisine",
            "Facturation par module et paiements multi-canaux",
            "Socle DevOps AWS (CI/CD, monitoring)",
        ],
        scopeEn: [
            "Modular multi-tenant SaaS ERP",
            "Restaurant PWA + staff / kitchen interfaces",
            "Per-module billing and multi-channel payments",
            "AWS DevOps foundation (CI/CD, monitoring)",
        ],
        nonGoalsFr: [
            "Marketplace de fournisseurs (phase 2)",
            "Application native mobile (PWA prioritaire)",
            "Hardware POS propriétaire",
        ],
        nonGoalsEn: [
            "Supplier marketplace (phase 2)",
            "Native mobile apps (PWA first)",
            "Proprietary POS hardware",
        ],

        decisions: [
            {
                titleFr: "Modular monolith vs microservices",
                titleEn: "Modular monolith vs microservices",
                decisionFr: "Modular monolith (Turborepo) en phase 1.",
                decisionEn: "Modular monolith (Turborepo) for phase 1.",
                rationaleFr: "Vélocité équipe, cohérence transactionnelle, extraction progressive possible.",
                rationaleEn: "Team velocity, transactional consistency, progressive extraction later.",
            },
            {
                titleFr: "Facturation par module",
                titleEn: "Per-module billing",
                decisionFr: "Activation à la demande plutôt qu’un plan unique.",
                decisionEn: "On-demand activation instead of a single plan.",
                rationaleFr: "Aligné aux budgets locaux et à l’adoption progressive.",
                rationaleEn: "Fits local budgets and progressive adoption.",
            },
        ],

        securityFr: [
            "Isolation multi-tenant au niveau données",
            "Auth JWT / OAuth avec rôles granulaires",
            "Secrets gérés hors code (vault / secrets manager)",
            "Scans SAST / SCA dans le pipeline",
        ],
        securityEn: [
            "Data-level multi-tenant isolation",
            "JWT / OAuth auth with granular roles",
            "Secrets kept out of code (vault / secrets manager)",
            "SAST / SCA scans in the pipeline",
        ],

        infraFr: [
            "Environnements Dev / Staging / Prod séparés",
            "Conteneurisation Docker + registry GHCR",
            "CI/CD GitHub Actions avec gates qualité",
            "Observabilité : logs, métriques, alertes",
        ],
        infraEn: [
            "Separated Dev / Staging / Prod environments",
            "Docker containers + GHCR registry",
            "GitHub Actions CI/CD with quality gates",
            "Observability: logs, metrics, alerts",
        ],

        externalLinks: [
            { labelFr: "Site portfolio", labelEn: "Portfolio site", url: "https://barthez-kenwou.dev" },
        ],

        testimonial: {
            quoteFr: "L’approche modulaire change la donne : on paie uniquement ce qu’on active, sans sacrifier la cohérence opérationnelle.",
            quoteEn: "The modular approach is a game changer: we only pay for what we enable, without losing operational consistency.",
            author: "Product Stakeholder",
            roleFr: "Directeur des opérations",
            roleEn: "Head of Operations",
            company: "Pilot Restaurant Group",
        },

        lessonsFr: [
            "Le découpage de domaines trop tôt complexifie inutilement le monolithe.",
            "Le pricing modulaire doit être validé tôt avec des clients pilotes.",
            "L’observabilité métier (SLO business) vaut autant que les métriques techniques.",
        ],
        lessonsEn: [
            "Splitting domains too early overcomplicates the monolith.",
            "Modular pricing must be validated early with pilot customers.",
            "Business observability (SLOs) matters as much as technical metrics.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/167ee008-product-pic-tabesto-300x274.webp",
                afterSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/167ee008-product-pic-tabesto-300x274.webp",
                captionFr: "De outils fragmentés à une plateforme unifiée (placeholder visuel).",
                captionEn: "From fragmented tools to a unified platform (visual placeholder).",
            },
        ],

        isFeatured: true,
    },

    {
        id: 12,
        titleFr: 'Plateforme Web PWA GTA IT (Corporate + Backoffice)',
        titleEn: 'GTA IT PWA Platform (Corporate + Admin System)',

        descriptionFr: 'Application web progressive complète pour l\'ESN GTA (Global Technology & Associates), avec vitrine corporate, blog, gestion de contenu et système de demande de devis',
        descriptionEn: 'Full-featured progressive web app for the IT services company GTA (Global Technology & Associates), including corporate website, blog, CMS and quote request system.',

        fullDescriptionFr: "Conception et développement d’une plateforme web complète pour GTA (ESN) afin d’améliorer sa crédibilité, sa visibilité et répondre aux exigences d’accès à certains partenaires (Microsoft, PersonVue). L’application inclut un site corporate multi-pages, un système de blog avec newsletter, un module de gestion de projets, un espace carrière, ainsi qu’un système avancé de demande de devis dynamique basé sur les services. Un backoffice complet permet la gestion autonome des contenus. L’ensemble repose sur une architecture 3-tiers conteneurisée avec CI/CD.",
        fullDescriptionEn: "Designed and developed a full-scale web platform for GTA (IT services company) to enhance credibility, visibility, and meet partner access requirements (Microsoft, PersonVue). The application includes a multi-page corporate website, blog system with newsletter, project showcase, career section, and a dynamic quote request system. A complete admin panel enables content management. Built on a containerized 3-tier architecture with CI/CD.",

        problemFr: "L'ESN manquait d'une présence en ligne performante, ce qui freinait l'acquisition de nouveaux clients et le recrutement de talents. L'ancien site était lent, non optimisé pour le mobile et manquait de fonctionnalités interactives, limitant la crédibilité de l’entreprise et l’accès à certains partenaires stratégiques..",
        problemEn: "The IT services company lacked a high-performing online presence, hindering new client acquisition and talent recruitment. The old site was slow, poorly optimized for mobile, and lacked interactive features limiting company credibility and access to strategic partners.",

        solutionFr: [
            "Développement d'une PWA avec React pour un rendu éfficace et des performances ultra-rapides.",
            "Mise en place d'un back-office sur-mesure (Node.js/Express) pour gérer les offres d'emploi, les publications et les contenu dynamiques.",
            "Optimisation avancée du SEO (Server-Side Rendering, balises meta dynamiques).",
            "Expérience hors-ligne via un service worker performant et un design 100% responsive."
        ],
        solutionEn: [
            "Developed a PWA with React for efficient rendering and lightning-fast performance.",
            "Implemented a custom back-office (Node.js/Express) to manage job postings, publications and dynamics content.",
            "Advanced SEO optimization (Server-Side Rendering, dynamic meta tags).",
            "Offline experience provided by a robust service worker and a 100% responsive design."
        ],

        challengesFr: [
            "Atteindre un score Lighthouse de 95+ sur mobile et desktop.",
            "Garantir une synchronisation parfaite des données même avec une connexion instable.",
            "Gestion dynamique de contenus via backoffice",
            "Créer des animations complexes sans impacter les performances de rendu.",
            "Mise en production sur VPS avec reverse proxy",
        ],
        challengesEn: [
            "Achieve a Lighthouse score of 95+ on both mobile and desktop.",
            "Ensure flawless data synchronization even with an unstable internet connection.",
            "Dynamic content management via admin panel",
            "Create complex animations without impacting rendering performance.",
            "Production deployment with reverse proxy",
        ],

        impactFr: [
            "+150% de trafic organique généré grâce aux optimisations SEO en 3 mois.",
            "Augmentation du taux de conversion des candidatures de 40%.",
            "Temps de chargement moyen réduit à moins de 1.2 seconde.",
            "Amélioration de la crédibilité de l’entreprise",
            "Accès facilité aux partenaires internationaux",
            "Centralisation des services et contenus",
        ],
        impactEn: [
            "+150% organic traffic generated through SEO optimizations within 3 months.",
            "Application conversion rate increased by 40%.",
            "Average load time reduced to less than 1.2 seconds.",
            "Improved company credibility",
            "Enabled access to international partners",
            "Centralized services and content",
        ],

        metrics: {
            "Performance Lighthouse": "98/100",
            "SEO Score": "100/100",
            "Conversion": "+40%",
            "pages": "15+ pages dynamiques",
            "architecture": "3-tier",
            "deployment": "CI/CD automatisé",
            "availability": "Production ready",
        },

        techStack: {
            frontend: ['React', 'Shadcn', 'Tailwind CSS', 'Framer Motion', 'PWA'],
            backend: ['Node.js', 'Express', 'Prisma', 'RESTful API'],
            database: ['MongoDB', 'Redis'],
            devops: ['Docker', 'Nginx', 'GitHub Actions', 'Vercel', 'Hostinger VPS']
        },

        architecture: [
            "Architecture Jamstack avec React.js en frontend pour le SPA.",
            "API RESTful avec Node/Express gérant la logique métier.",
            "Base de données MongoDB pour la persistance avec Prisma ORM.",
            "Mise en cache via Redis pour optimiser les requêtes lourdes.",
            "Déploiement automatique CI-CD avec github-action"
        ],

        testing: [
            "Tests unitaires (Jest/React Testing Library) sur les composants critiques.",
            "Tests E2E automatisés avec Cypress.",
        ],

        images: [
            'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Macbook-Air-gta-it.com%20(2).png',
            'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Macbook-Air-gta-it.com.png',
            'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/about-team_section.png',
            'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/iPhone-13-PRO-gta-it.com.png',
        ],
        preview: 'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Macbook-Air-gta-it.com%20(2).png',
        videoDemo: 'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Macbook-Air-gta-it.com-qjegppeqe2kxhz%20(1).webm',

        category: 'Full Stack & PWA',
        status: 'Production',
        complexity: 'Avancé',
        role: 'Fullstack Developer',
        teamSize: 1,

        duration: '4 mois',
        date: 'Octobre 2023 - Février 2024',

        github: '',
        demo: 'https://gta-it.com',
        // caseStudy: '',
        // documentation: '',

        businessContextFr: "Transformation digitale globale d'une ESN cherchant à se positionner comme leader technique sur son marché tout en attirant les meilleurs profils développeurs.",
        businessContextEn: "Global digital transformation of an IT service company aiming to position itself as a technical leader in its market while attracting top developer talent.",

        responsibilitiesFr: [
            "Conception et développement fullstack de la PWA et du backoffice",
            "Architecture 3-tiers conteneurisée et pipeline CI/CD",
            "SEO technique et performance (Lighthouse 95+)",
            "Mise en production VPS (Nginx reverse proxy)",
        ],
        responsibilitiesEn: [
            "Fullstack design and development of the PWA and admin panel",
            "Containerized 3-tier architecture and CI/CD pipeline",
            "Technical SEO and performance (Lighthouse 95+)",
            "VPS production rollout (Nginx reverse proxy)",
        ],

        videos: [
            {
                url: 'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Macbook-Air-gta-it.com-qjegppeqe2kxhz%20(1).webm',
                type: 'demo',
                titleFr: 'Démo parcours site',
                titleEn: 'Site walkthrough demo',
            },
        ],

        gallery: [
            {
                src: 'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Macbook-Air-gta-it.com%20(2).png',
                captionFr: 'Home desktop',
                captionEn: 'Desktop home',
                kind: 'ui',
            },
            {
                src: 'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/iPhone-13-PRO-gta-it.com.png',
                captionFr: 'Vue mobile',
                captionEn: 'Mobile view',
                kind: 'ui',
            },
            {
                src: 'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/about-team_section.png',
                captionFr: 'Section équipe',
                captionEn: 'Team section',
                kind: 'ui',
            },
        ],

        diagrams: [
            {
                id: 'gta-arch',
                titleFr: 'Architecture 3-tiers',
                titleEn: '3-tier architecture',
                mermaid: `flowchart LR
  Browser[Browser / PWA] --> Nginx[Nginx]
  Nginx --> React[React SPA]
  React --> API[Node / Express API]
  API --> Mongo[(MongoDB)]
  API --> Redis[(Redis Cache)]
  CI[GitHub Actions] --> Deploy[VPS Deploy]`,
            },
        ],

        resources: [
            {
                labelFr: 'Site live',
                labelEn: 'Live site',
                url: 'https://gta-it.com',
                type: 'other',
            },
        ],

        milestones: [
            {
                labelFr: 'Kickoff & design system',
                labelEn: 'Kickoff & design system',
                date: 'Oct 2023',
            },
            {
                labelFr: 'MVP corporate + blog',
                labelEn: 'Corporate + blog MVP',
                date: 'Dec 2023',
            },
            {
                labelFr: 'Backoffice + devis + prod',
                labelEn: 'Admin + quotes + prod',
                date: 'Feb 2024',
            },
        ],

        scopeFr: [
            'Site corporate multi-pages',
            'Blog + newsletter',
            'Backoffice CMS',
            'Demande de devis dynamique',
            'PWA + SEO',
        ],
        scopeEn: [
            'Multi-page corporate site',
            'Blog + newsletter',
            'CMS admin panel',
            'Dynamic quote requests',
            'PWA + SEO',
        ],
        nonGoalsFr: [
            'ERP interne complet',
            'Application mobile native',
        ],
        nonGoalsEn: [
            'Full internal ERP',
            'Native mobile apps',
        ],

        decisions: [
            {
                titleFr: 'PWA plutôt que SSR full Next',
                titleEn: 'PWA over full Next SSR',
                decisionFr: 'SPA React + optimisations SEO ciblées.',
                decisionEn: 'React SPA with targeted SEO optimizations.',
                rationaleFr: 'Contrôle total du backoffice custom et hébergement VPS simple.',
                rationaleEn: 'Full control of a custom admin and simple VPS hosting.',
            },
        ],

        securityFr: [
            'Validation stricte des entrées API',
            'Auth admin sécurisée',
            'Headers de sécurité Nginx',
            'Séparation environnements',
        ],
        securityEn: [
            'Strict API input validation',
            'Hardened admin auth',
            'Nginx security headers',
            'Separated environments',
        ],

        infraFr: [
            'Docker + Nginx reverse proxy',
            'CI/CD GitHub Actions',
            'Déploiement VPS Hostinger',
            'Cache Redis pour endpoints lourds',
        ],
        infraEn: [
            'Docker + Nginx reverse proxy',
            'GitHub Actions CI/CD',
            'Hostinger VPS deployment',
            'Redis cache for heavy endpoints',
        ],

        externalLinks: [
            { labelFr: 'Live demo', labelEn: 'Live demo', url: 'https://gta-it.com' },
        ],

        testimonial: {
            quoteFr: 'La nouvelle plateforme a immédiatement renforcé notre crédibilité auprès des partenaires et accéléré les candidatures.',
            quoteEn: 'The new platform immediately strengthened our credibility with partners and accelerated applications.',
            author: 'GTA Leadership',
            roleFr: 'Direction',
            roleEn: 'Leadership',
            company: 'GTA IT',
        },

        lessonsFr: [
            'Un score Lighthouse élevé doit être budgété dès le design, pas en fin de projet.',
            'Le devis dynamique réduit fortement la friction commerciale.',
        ],
        lessonsEn: [
            'A high Lighthouse score must be budgeted from design time, not at the end.',
            'Dynamic quoting significantly reduces commercial friction.',
        ],

        beforeAfter: [
            {
                beforeSrc: 'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Macbook-Air-gta-it.com.png',
                afterSrc: 'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Macbook-Air-gta-it.com%20(2).png',
                captionFr: 'Refonte visuelle et performance du site corporate.',
                captionEn: 'Visual and performance redesign of the corporate site.',
            },
        ],

        isFeatured: true,
    },

    {
        id: 3,
        titleFr: 'Kaza – Plateforme Immobilière Intelligente & Écosystème Conciergerie',
        titleEn: 'Kaza – Smart Real Estate Platform & Concierge Ecosystem',

        descriptionFr: "Plateforme digitale immobilière 'end-to-end' combinant marketplace, IA anti-fraude, conciergerie et mise en relation directe, avec un écosystème complet web & mobile.",
        descriptionEn: "End-to-end real estate digital platform combining marketplace, AI-powered fraud detection, concierge services, and direct connection system, with a full web & mobile ecosystem.",

        fullDescriptionFr: "Conception et développement en cours d’une plateforme immobilière nouvelle génération pour le marché africain (Cameroun), visant à résoudre les problématiques de fraude, de manque de transparence et d’inefficacité dans la recherche de logement. Le projet inclut un écosystème complet composé d’une application mobile pour les utilisateurs (locataires/bailleurs), d’un panel admin web & mobile avancé, ainsi qu’une infrastructure cloud scalable avec des pratiques DevOps modernes. La plateforme intègre un système de crédits, une IA de modération anti-fraude, un moteur de recherche avancé, un système de notation et une intégration native avec WhatsApp pour la conversion directe. L’objectif est de créer un standard de confiance et de performance sur le marché immobilier local.",
        fullDescriptionEn: "Currently designing and developing a next-generation real estate platform for the African market (Cameroon), aiming to solve fraud, lack of transparency, and inefficiencies in housing search. The project includes a full ecosystem with a mobile app for users (tenants/landlords), advanced admin panels (web & mobile), and a scalable cloud infrastructure using modern DevOps practices. The platform integrates a credit-based system, AI-powered fraud detection, advanced search engine, rating system, and native WhatsApp integration for direct conversion. The goal is to establish a new standard of trust and performance in the local real estate market.",

        problemFr: "Le marché immobilier local est fortement impacté par la fraude, le manque de transparence et l’absence de plateformes fiables, rendant la recherche de logement risquée et inefficace.",
        problemEn: "The local real estate market is heavily affected by fraud, lack of transparency, and absence of reliable platforms, making housing search risky and inefficient.",

        solutionFr: [
            "Développement d’une plateforme immobilière complète (web + mobile)",
            "Mise en place d’un système de crédits pour réguler la qualité des annonces",
            "Intégration d’une IA de détection de fraude (images, prix, comportement utilisateur)",
            "Création d’un moteur de recherche avancé avec filtres multi-dimensionnels",
            "Intégration native WhatsApp pour conversion directe",
            "Déploiement d’une architecture cloud scalable avec CI/CD et monitoring",
        ],
        solutionEn: [
            "Developing a full real estate platform (web + mobile)",
            "Implementing a credit-based system to regulate listing quality",
            "Integrating AI fraud detection (images, pricing, user behavior)",
            "Building an advanced multi-filter search engine",
            "Native WhatsApp integration for direct conversion",
            "Deploying scalable cloud architecture with CI/CD and monitoring",
        ],

        challengesFr: [
            "Conception d’une architecture scalable pour un système multi-acteurs complexe",
            "Implémentation d’une IA fiable pour la détection de fraude en temps réel",
            "Optimisation des performances sur mobile avec forte volumétrie de données",
            "Sécurisation des transactions et des données utilisateurs",
            "Orchestration complète DevOps (CI/CD, monitoring, infra cloud)",
        ],
        challengesEn: [
            "Designing a scalable architecture for a complex multi-actor system",
            "Implementing reliable real-time AI fraud detection",
            "Optimizing mobile performance with high data volume",
            "Securing transactions and user data",
            "Full DevOps orchestration (CI/CD, monitoring, cloud infra)",
        ],

        impactFr: [
            "Réduction massive des fraudes immobilières",
            "Amélioration de la transparence du marché",
            "Optimisation de la mise en relation locataire-bailleur",
            "Création d’un écosystème digital fiable pour l’immobilier local",
        ],
        impactEn: [
            "Massive reduction in real estate fraud",
            "Improved market transparency",
            "Optimized tenant-landlord matching",
            "Creation of a reliable digital real estate ecosystem",
        ],

        metrics: {
            "IA réduction fraude": "-70% coûts de modération",
            "architecture": "Cloud scalable",
            "système": "Multi-app (web + mobile + admin)",
            "status": "En développement actif",
        },

        techStack: {
            frontend: ["React", "Next.js", "React Native", "Tailwind CSS"],
            backend: ["Node.js", "Express", "GraphQL", "Rest API"],
            database: ["PostgreSQL", "Redis"],
            devops: ["Docker", "Kubernetes", "AWS", "CI/CD", "Prometheus", "Loki", "Grafana"],
        },

        architecture: [
            "Architecture microservices",
            "Frontend web + mobile apps",
            "Backend API centralisé (GraphQL/REST)",
            "IA services (fraude & scoring)",
            "Infrastructure cloud scalable (AWS/Kubernetes)",
            "CI/CD pipeline + monitoring temps réel",
        ],

        testing: [
            "Tests unitaires backend & frontend",
            "Tests E2E mobile & web",
            "Tests de sécurité automatisés",
        ],

        images: [
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2023-05-39.png",
            "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2012-02-41.png",
        ],

        preview: "",
        videoDemo: "",

        category: "Fullstack • DevOps • AI • Mobile",
        status: "En cours",
        complexity: "Expert",
        role: "Fullstack Developer • DevOps Engineer",
        teamSize: 1,

        duration: "Projet long terme",
        date: "2026",

        github: "",
        demo: "",

        businessContextFr: "Projet ambitieux visant à digitaliser et sécuriser le marché immobilier camerounais en introduisant une plateforme de confiance basée sur l’IA et des pratiques cloud modernes.",
        businessContextEn: "Ambitious project aiming to digitize and secure the Cameroonian real estate market by introducing a trust-based platform powered by AI and modern cloud practices.",

        confidential: false,

        responsibilitiesFr: [
            "Architecture microservices et API GraphQL/REST",
            "Conception mobile (React Native) + web Next.js",
            "Pipeline CI/CD AWS et observabilité",
            "Anti-fraude IA et conversion WhatsApp",
        ],
        responsibilitiesEn: [
            "Microservices architecture and GraphQL/REST APIs",
            "Mobile (React Native) + web Next.js delivery",
            "AWS CI/CD pipeline and observability",
            "AI anti-fraud and WhatsApp conversion",
        ],

        gallery: [
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2023-05-39.png", captionFr: "Recherche de biens", captionEn: "Property search", kind: "ui" },
            { src: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2012-02-41.png", captionFr: "Marketplace / listing", captionEn: "Marketplace / listing", kind: "ui" },
        ],

        diagrams: [
            {
                id: "kaza-arch",
                titleFr: "Écosystème Kaza",
                titleEn: "Kaza ecosystem",
                mermaid: `flowchart TB
  Mobile[React Native] --> API[API Gateway]
  Web[Next.js] --> API
  API --> Listings[Listings]
  API --> Credits[Credits]
  API --> Fraud[Fraud AI]
  API --> Concierge[Concierge]
  Listings --> PG[(PostgreSQL)]
  Credits --> PG
  Fraud --> Redis[(Redis)]
  Concierge --> WA[WhatsApp]`,
            },
        ],

        resources: [
            { labelFr: "Vision produit", labelEn: "Product vision", url: "https://barthez-kenwou.dev/", type: "case-study" },
        ],

        milestones: [
            { labelFr: "Cadrage domaines", labelEn: "Domain framing", date: "2025 Q4", descriptionFr: "Fraude, crédits, conciergerie, marketplace.", descriptionEn: "Fraud, credits, concierge, marketplace." },
            { labelFr: "MVP listings", labelEn: "Listings MVP", date: "2026 Q1", descriptionFr: "Parcours mobile/web de découverte.", descriptionEn: "Mobile/web discovery journeys." },
            { labelFr: "Anti-fraude & WhatsApp", labelEn: "Anti-fraud & WhatsApp", date: "2026 Q2", descriptionFr: "Modération IA et conversion directe.", descriptionEn: "AI moderation and direct conversion." },
        ],

        scopeFr: ["Marketplace web + mobile", "Crédits & notation", "Anti-fraude IA", "Conciergerie WhatsApp", "Cloud + CI/CD"],
        scopeEn: ["Web + mobile marketplace", "Credits & ratings", "AI anti-fraud", "WhatsApp concierge", "Cloud + CI/CD"],
        nonGoalsFr: ["Escrow financier complet (phase 2)", "Agence physique intégrée"],
        nonGoalsEn: ["Full financial escrow (phase 2)", "Integrated physical agency"],

        decisions: [
            {
                titleFr: "Microservices ciblés",
                titleEn: "Targeted microservices",
                decisionFr: "Isoler fraude, crédits et listings.",
                decisionEn: "Isolate fraud, credits, and listings.",
                rationaleFr: "Domaines à scalabilité et risques différents.",
                rationaleEn: "Domains with different scaling and risk profiles.",
            },
            {
                titleFr: "WhatsApp natif",
                titleEn: "Native WhatsApp",
                decisionFr: "Canal de conversion local plutôt qu'un chat custom.",
                decisionEn: "Local conversion channel over a custom chat.",
                rationaleFr: "Adoption massive et friction minimale.",
                rationaleEn: "Massive adoption and minimal friction.",
            },
        ],

        securityFr: ["Scoring anti-fraude", "JWT/RBAC multi-rôles", "Secrets cloud hors repo", "Alertes comportements anormaux"],
        securityEn: ["Fraud scoring", "Multi-role JWT/RBAC", "Cloud secrets out of repo", "Abnormal-behavior alerts"],
        infraFr: ["Docker + Kubernetes", "AWS CI/CD", "PostgreSQL + Redis", "Prometheus / Loki / Grafana"],
        infraEn: ["Docker + Kubernetes", "AWS CI/CD", "PostgreSQL + Redis", "Prometheus / Loki / Grafana"],

        externalLinks: [{ labelFr: "Portfolio", labelEn: "Portfolio", url: "https://barthez-kenwou.dev" }],

        testimonial: {
            quoteFr: "La confiance est traitée comme une feature produit, pas un afterthought.",
            quoteEn: "Trust is treated as a product feature, not an afterthought.",
            author: "Product Advisor",
            roleFr: "Conseiller marché",
            roleEn: "Market advisor",
            company: "Kaza Pilot Circle",
        },

        lessonsFr: [
            "Mesurer la confiance (signaux fraude) dès le MVP.",
            "WhatsApp bat un chat custom là où il est déjà le standard.",
            "Isoler seulement les domaines chauds - pas tout microserviciser trop tôt.",
        ],
        lessonsEn: [
            "Measure trust (fraud signals) from day one.",
            "WhatsApp beats custom chat where it is already the standard.",
            "Isolate only hot domains - don't microservice everything too early.",
        ],

        beforeAfter: [
            {
                beforeSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2012-02-41.png",
                afterSrc: "https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Screenshot%20from%202026-04-21%2023-05-39.png",
                captionFr: "De l'opacité du marché à un parcours digital structuré.",
                captionEn: "From market opacity to a structured digital journey.",
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