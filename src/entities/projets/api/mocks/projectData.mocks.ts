import { IProject } from '../../model/project.types';

export const projectsData: IProject[] = [

    {
        id: 1,
        titleFr: "COMBO – ERP SaaS Modulaire pour la Gestion Intelligente de Restaurants",
        titleEn: "COMBO – Modular SaaS ERP for Smart Restaurant Management",

        descriptionFr: "ERP SaaS nouvelle génération pour restaurants, basé sur une architecture modulaire activable à la demande, combinant gestion opérationnelle, analytics et expérience client dans une plateforme unifiée.",
        descriptionEn: "Next-generation SaaS ERP for restaurants, built on a modular on-demand architecture combining operations, analytics, and customer experience in a unified platform.",

        fullDescriptionFr: "COMBO est une plateforme SaaS ambitieuse de nouvelle génération dédiée à la gestion intelligente et modulaire des restaurants. L’objectif est de fournir un système complet permettant à chaque restaurateur de construire son propre ERP sur mesure en activant uniquement les modules dont il a réellement besoin.\n\nLa plateforme repose sur une architecture monolithique modulaire (modular monolith) structurée via Turborepo, garantissant une séparation stricte des domaines métiers (Commandes, Stocks, CRM, Comptabilité, etc.) tout en conservant la simplicité opérationnelle d’un monolithe.\n\nLe produit comprend :\n- Une vitrine SaaS optimisée SEO pour acquisition client\n- Un système de souscription avec paiement multi-canaux (Mobile Money, Stripe, banque)\n- Une application principale (PWA) pour les restaurateurs\n- Des interfaces dédiées (admin, staff, cuisine)\n\nChaque restaurant peut configurer dynamiquement son environnement en activant des modules spécifiques : gestion des commandes (salle & online), menus & recettes avec calcul des coûts, gestion des stocks avec alertes, livraisons avec suivi temps réel, réservations intelligentes avec plan de salle, CRM client, facturation automatisée, reporting avancé (PDF/Excel), point de vente (POS), comptabilité, et écran cuisine.\n\nLe système intègre des capacités avancées : multi-tenant, gestion des rôles, analytics en temps réel, optimisation des performances, SEO, sécurité et scalabilité cloud-native. L’infrastructure est conçue pour AWS avec une approche DevOps complète (CI/CD, monitoring, observabilité).\n\nCe projet vise à créer une solution SaaS compétitive capable de rivaliser avec des solutions internationales, tout en étant adaptée aux réalités locales (paiements Mobile Money, flexibilité modulaire, coûts maîtrisés).",
        fullDescriptionEn: "COMBO is a next-generation SaaS platform designed for intelligent and modular restaurant management. The goal is to provide a complete system allowing each restaurant owner to build a custom ERP by activating only the modules they need.\n\nThe platform is built on a modular monolithic architecture using Turborepo, ensuring strict separation of business domains (Orders, Inventory, CRM, Accounting, etc.) while maintaining operational simplicity.\n\nThe product includes:\n- A SEO-optimized SaaS landing platform for customer acquisition\n- Subscription system with multi-channel payments (Mobile Money, Stripe, banking)\n- Main PWA application for restaurant owners\n- Dedicated interfaces (admin, staff, kitchen)\n\nEach restaurant can dynamically configure its system by enabling modules such as: order management (in-house & online), menu & recipe costing, inventory with alerts, delivery tracking, smart reservations, CRM, invoicing, advanced analytics (PDF/Excel), POS system, accounting, and kitchen display.\n\nThe system integrates advanced capabilities: multi-tenancy, role management, real-time analytics, performance optimization, SEO, security, and cloud-native scalability. Infrastructure is designed for AWS with a full DevOps approach (CI/CD, monitoring, observability).\n\nThis project aims to build a competitive SaaS solution capable of rivaling international products while being adapted to local market realities (Mobile Money payments, modular flexibility, cost efficiency).",

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

        isFeatured: false,
    },
];