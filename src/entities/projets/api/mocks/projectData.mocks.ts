import { IProject } from '../../model/project.types';

export const projectsData: IProject[] = [
    {
        id: 1,
        titleFr: 'Application PWA pour GTA',
        titleEn: 'PWA Application for GTA',

        descriptionFr: 'Une Progressive Web App full stack conçue pour accroître la visibilité de Global Technology Action (GTA), une Entreprise de Services du Numérique (ESN).',
        descriptionEn: 'A full stack Progressive Web App designed to increase the visibility of Global Technology Action (GTA), an IT services company (ESN).',

        fullDescriptionFr: "GTA-IT est une plateforme numérique innovante pensée pour offrir une expérience utilisateur fluide sur tous les appareils. Développée comme une PWA (Progressive Web App), elle permet à GTA de présenter ses services d'ingénierie, ses offres d'emploi, et son expertise de manière performante. L'objectif principal était de moderniser l'image de l'entreprise tout en garantissant des performances SEO maximales et une accessibilité optimale.",
        fullDescriptionEn: "GTA-IT is an innovative digital platform designed to offer a seamless user experience across all devices. Developed as a PWA (Progressive Web App), it enables GTA to showcase its engineering services, job offers, and expertise efficiently. The main goal was to modernize the company's image while ensuring maximum SEO performance and optimal accessibility.",

        problemFr: "L'ESN manquait d'une présence en ligne performante, ce qui freinait l'acquisition de nouveaux clients et le recrutement de talents. L'ancien site était lent, non optimisé pour le mobile et manquait de fonctionnalités interactives.",
        problemEn: "The IT services company lacked a high-performing online presence, hindering new client acquisition and talent recruitment. The old site was slow, poorly optimized for mobile, and lacked interactive features.",

        solutionFr: [
            "Développement d'une PWA avec React et Next.js pour un rendu hybride et des performances ultra-rapides.",
            "Mise en place d'un back-office sur-mesure (Node.js/Express) pour gérer les offres d'emploi et les publications.",
            "Optimisation avancée du SEO (Server-Side Rendering, balises meta dynamiques).",
            "Expérience hors-ligne via un service worker performant et un design 100% responsive."
        ],
        solutionEn: [
            "Developed a PWA with React and Next.js for hybrid rendering and lightning-fast performance.",
            "Implemented a custom back-office (Node.js/Express) to manage job postings and publications.",
            "Advanced SEO optimization (Server-Side Rendering, dynamic meta tags).",
            "Offline experience provided by a robust service worker and a 100% responsive design."
        ],

        challengesFr: [
            "Atteindre un score Lighthouse de 95+ sur mobile et desktop.",
            "Garantir une synchronisation parfaite des données même avec une connexion instable.",
            "Créer des animations complexes sans impacter les performances de rendu."
        ],
        challengesEn: [
            "Achieve a Lighthouse score of 95+ on both mobile and desktop.",
            "Ensure flawless data synchronization even with an unstable internet connection.",
            "Create complex animations without impacting rendering performance."
        ],

        impactFr: [
            "+150% de trafic organique généré grâce aux optimisations SEO en 3 mois.",
            "Augmentation du taux de conversion des candidatures de 40%.",
            "Temps de chargement moyen réduit à moins de 1.2 seconde."
        ],
        impactEn: [
            "+150% organic traffic generated through SEO optimizations within 3 months.",
            "Application conversion rate increased by 40%.",
            "Average load time reduced to less than 1.2 seconds."
        ],

        metrics: {
            "Performance Lighthouse": "98/100",
            "SEO Score": "100/100",
            "Conversion": "+40%"
        },

        techStack: {
            frontend: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'PWA'],
            backend: ['Node.js', 'Express', 'Prisma', 'RESTful API'],
            database: ['PostgreSQL', 'Redis'],
            devops: ['Docker', 'GitHub Actions', 'Vercel', 'AWS S3']
        },

        architecture: [
            "Architecture Jamstack avec Next.js en frontend pour le SSR.",
            "API RESTful avec Node/Express gérant la logique métier.",
            "Base de données PostgreSQL pour la persistance avec Prisma ORM.",
            "Mise en cache via Redis pour optimiser les requêtes lourdes."
        ],

        testing: [
            "Tests unitaires (Jest/React Testing Library) sur les composants critiques.",
            "Tests E2E automatisés avec Cypress.",
            "Analyse de la qualité du code via SonarQube."
        ],

        images: [
            'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Macbook-Air-gta-it.com%20(2).png',
            'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/Macbook-Air-gta-it.com.png',
            'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/about-team_section.png',
            'https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Projets/iPhone-13-PRO-gta-it.com.png',
        ],
        preview: '/images/projects/gta/preview.webp',
        videoDemo: 'https://demo.gta-it.com/video',

        category: 'Full Stack & PWA',
        status: 'Production',
        complexity: 'Avancé',
        role: 'Lead Full Stack Developer',
        teamSize: 3,

        duration: '4 mois',
        date: 'Octobre 2023 - Février 2024',

        github: 'https://github.com/votre-user/gta-pwa',
        demo: 'https://gta-it.com',
        caseStudy: '/blog/gta-case-study',
        documentation: 'https://docs.gta-it.com',

        businessContextFr: "Transformation digitale globale d'une ESN cherchant à se positionner comme leader technique sur son marché tout en attirant les meilleurs profils développeurs.",
        businessContextEn: "Global digital transformation of an IT service company aiming to position itself as a technical leader in its market while attracting top developer talent.",

        isFeatured: true,
    }
];