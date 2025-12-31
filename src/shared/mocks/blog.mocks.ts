export const blogPostsData = [
  // Blog 1
  {
    id: '1',
    titleFr: 'Guide Complet : Déployer une Application React sur AWS',
    titleEn: 'Complete Guide: Deploying a React Application on AWS',
    excerptFr:
      'Apprenez à déployer votre application React sur AWS en utilisant S3, CloudFront et Route 53 pour une performance optimale.',
    excerptEn:
      'Learn how to deploy your React application on AWS using S3, CloudFront and Route 53 for optimal performance.',
    contentFr: `
## Introduction

Déployer une application React sur AWS peut sembler intimidant au premier abord, mais avec les bons outils et une approche structurée, c'est en fait assez simple. Dans ce guide, nous allons voir comment utiliser S3, CloudFront et Route 53 pour créer un déploiement professionnel.

## Prérequis

Avant de commencer, assurez-vous d'avoir :
- Un compte AWS actif
- AWS CLI configuré sur votre machine
- Une application React prête à être déployée
- Un nom de domaine (optionnel mais recommandé)

## Étape 1 : Créer un bucket S3

Le bucket S3 servira à héberger les fichiers statiques de votre application React.

\`\`\`bash
aws s3 mb s3://mon-app-react --region eu-west-1
\`\`\`

Configurez ensuite le bucket pour l'hébergement de site web statique.

## Étape 2 : Configurer CloudFront

CloudFront est le CDN d'AWS qui permettra de distribuer votre application à travers le monde avec des temps de chargement optimaux.

## Étape 3 : Configurer Route 53

Si vous avez un nom de domaine, Route 53 vous permettra de l'associer à votre distribution CloudFront.

## Conclusion

Vous avez maintenant une application React déployée sur AWS avec une architecture professionnelle et performante.
    `,
    contentEn: `
## Introduction

Deploying a React application on AWS may seem intimidating at first, but with the right tools and a structured approach, it's actually quite simple. In this guide, we'll see how to use S3, CloudFront and Route 53 to create a professional deployment.

## Prerequisites

Before starting, make sure you have:
- An active AWS account
- AWS CLI configured on your machine
- A React application ready to deploy
- A domain name (optional but recommended)

## Step 1: Create an S3 bucket

The S3 bucket will host the static files of your React application.

\`\`\`bash
aws s3 mb s3://my-react-app --region eu-west-1
\`\`\`

Then configure the bucket for static website hosting.

## Step 2: Configure CloudFront

CloudFront is AWS's CDN that will distribute your application worldwide with optimal load times.

## Step 3: Configure Route 53

If you have a domain name, Route 53 will allow you to associate it with your CloudFront distribution.

## Conclusion

You now have a React application deployed on AWS with a professional and performant architecture.
    `,
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&h=600&fit=crop',
    category: 'AWS',
    date: '2024-01-15',
    readTime: '8 min',
    author: 'Barthez Kenwou',
    tags: ['AWS', 'React', 'CloudFront', 'S3'],
  },

  // Blog 2
  {
    id: '2',
    titleFr: 'CI/CD avec GitHub Actions : De Zéro à Expert',
    titleEn: 'CI/CD with GitHub Actions: From Zero to Expert',
    excerptFr:
      'Maîtrisez GitHub Actions pour automatiser vos tests, builds et déploiements. Un guide pratique avec des exemples concrets.',
    excerptEn:
      'Master GitHub Actions to automate your tests, builds and deployments. A practical guide with concrete examples.',
    contentFr: `
## Introduction

GitHub Actions est devenu l'un des outils de CI/CD les plus populaires. Dans ce guide, nous allons explorer comment l'utiliser efficacement.

## Concepts de base

### Workflows
Un workflow est un processus automatisé configurable que vous pouvez ajouter à votre repository.

### Jobs
Un job est un ensemble d'étapes qui s'exécutent sur le même runner.

### Steps
Les steps sont des tâches individuelles qui peuvent exécuter des commandes ou des actions.

## Exemple pratique

\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run build
\`\`\`

## Conclusion

GitHub Actions offre une flexibilité incroyable pour automatiser vos workflows de développement.
    `,
    contentEn: `
## Introduction

GitHub Actions has become one of the most popular CI/CD tools. In this guide, we'll explore how to use it effectively.

## Basic Concepts

### Workflows
A workflow is a configurable automated process that you can add to your repository.

### Jobs
A job is a set of steps that execute on the same runner.

### Steps
Steps are individual tasks that can run commands or actions.

## Practical Example

\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run build
\`\`\`

## Conclusion

GitHub Actions offers incredible flexibility for automating your development workflows.
    `,
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&h=600&fit=crop',
    category: 'DevOps',
    date: '2024-01-10',
    readTime: '12 min',
    author: 'Barthez Kenwou',
    tags: ['GitHub Actions', 'CI/CD', 'DevOps', 'Automation'],
  },

  // Blog 3
  {
    id: '3',
    titleFr: 'Architecture Microservices avec Docker et Kubernetes',
    titleEn: 'Microservices Architecture with Docker and Kubernetes',
    excerptFr:
      'Découvrez comment concevoir et déployer une architecture microservices scalable avec Docker et Kubernetes sur AWS EKS.',
    excerptEn:
      'Discover how to design and deploy a scalable microservices architecture with Docker and Kubernetes on AWS EKS.',
    contentFr: `
## Introduction

L'architecture microservices est devenue le standard pour les applications modernes à grande échelle.

## Pourquoi les Microservices ?

- Scalabilité indépendante
- Déploiement continu
- Résilience
- Technologie agnostique

## Docker : Les bases

Docker permet de containeriser vos applications pour un déploiement cohérent.

## Kubernetes : Orchestration

Kubernetes orchestre vos containers pour une haute disponibilité.

## Conclusion

L'architecture microservices avec Docker et Kubernetes offre une solution robuste pour les applications modernes.
    `,
    contentEn: `
## Introduction

Microservices architecture has become the standard for modern large-scale applications.

## Why Microservices?

- Independent scalability
- Continuous deployment
- Resilience
- Technology agnostic

## Docker: The Basics

Docker allows you to containerize your applications for consistent deployment.

## Kubernetes: Orchestration

Kubernetes orchestrates your containers for high availability.

## Conclusion

Microservices architecture with Docker and Kubernetes offers a robust solution for modern applications.
    `,
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&h=600&fit=crop',
    category: 'DevOps',
    date: '2024-01-05',
    readTime: '15 min',
    author: 'Barthez Kenwou',
    tags: ['Docker', 'Kubernetes', 'Microservices', 'AWS EKS'],
  },

  // Blog 4
  {
    id: '4',
    titleFr: 'Optimiser les Performances de votre Application Node.js',
    titleEn: 'Optimizing Your Node.js Application Performance',
    excerptFr:
      'Techniques avancées pour améliorer les performances de vos APIs Node.js : caching, pooling, profiling et plus encore.',
    excerptEn:
      'Advanced techniques to improve your Node.js API performance: caching, pooling, profiling and more.',
    contentFr: `
## Introduction

Les performances sont cruciales pour l'expérience utilisateur et les coûts d'infrastructure.

## Techniques d'optimisation

### 1. Caching
Utilisez Redis pour mettre en cache les données fréquemment accédées.

### 2. Connection Pooling
Réutilisez les connexions de base de données.

### 3. Profiling
Identifiez les goulots d'étranglement avec des outils de profiling.

## Conclusion

Ces techniques peuvent améliorer significativement les performances de votre application.
    `,
    contentEn: `
## Introduction

Performance is crucial for user experience and infrastructure costs.

## Optimization Techniques

### 1. Caching
Use Redis to cache frequently accessed data.

### 2. Connection Pooling
Reuse database connections.

### 3. Profiling
Identify bottlenecks with profiling tools.

## Conclusion

These techniques can significantly improve your application's performance.
    `,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=600&fit=crop',
    category: 'Backend',
    date: '2023-12-28',
    readTime: '10 min',
    author: 'Barthez Kenwou',
    tags: ['Node.js', 'Performance', 'Backend', 'Optimization'],
  },

  // Blog 5
  {
    id: '5',
    titleFr: 'Sécurité AWS : Les Meilleures Pratiques IAM',
    titleEn: 'AWS Security: IAM Best Practices',
    excerptFr:
      'Guide complet sur la sécurisation de votre compte AWS avec IAM : politiques, rôles, MFA et principes du moindre privilège.',
    excerptEn:
      'Complete guide to securing your AWS account with IAM: policies, roles, MFA and least privilege principles.',
    contentFr: `
## Introduction

La sécurité AWS commence par une bonne gestion des identités et des accès (IAM).

## Principes fondamentaux

### 1. Moindre privilège
Accordez uniquement les permissions nécessaires.

### 2. MFA obligatoire
Activez l'authentification multi-facteurs pour tous les utilisateurs.

### 3. Rotation des clés
Changez régulièrement les clés d'accès.

## Conclusion

Une bonne stratégie IAM est la base d'une infrastructure AWS sécurisée.
    `,
    contentEn: `
## Introduction

AWS security starts with good Identity and Access Management (IAM).

## Fundamental Principles

### 1. Least Privilege
Grant only the necessary permissions.

### 2. Mandatory MFA
Enable multi-factor authentication for all users.

### 3. Key Rotation
Regularly change access keys.

## Conclusion

A good IAM strategy is the foundation of a secure AWS infrastructure.
    `,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop',
    category: 'AWS',
    date: '2023-12-20',
    readTime: '11 min',
    author: 'Barthez Kenwou',
    tags: ['AWS', 'IAM', 'Security', 'Best Practices'],
  },

  // Blog 6
  {
    id: '6',
    titleFr: 'React 18 : Les Nouvelles Fonctionnalités Expliquées',
    titleEn: 'React 18: New Features Explained',
    excerptFr:
      'Explorez les nouvelles fonctionnalités de React 18 : Concurrent Mode, Suspense, useTransition et bien plus.',
    excerptEn:
      "Explore React 18's new features: Concurrent Mode, Suspense, useTransition and more.",
    contentFr: `
## Introduction

React 18 apporte des changements majeurs avec le Concurrent Mode.

## Nouvelles fonctionnalités

### 1. Concurrent Mode
Le rendu concurrent permet à React de préparer plusieurs versions de l'UI.

### 2. useTransition
Marquez certaines mises à jour comme non urgentes.

### 3. Suspense amélioré
Suspense fonctionne maintenant avec le rendu serveur.

## Conclusion

React 18 améliore significativement l'expérience utilisateur avec ces nouvelles fonctionnalités.
    `,
    contentEn: `
## Introduction

React 18 brings major changes with Concurrent Mode.

## New Features

### 1. Concurrent Mode
Concurrent rendering allows React to prepare multiple versions of the UI.

### 2. useTransition
Mark certain updates as non-urgent.

### 3. Improved Suspense
Suspense now works with server rendering.

## Conclusion

React 18 significantly improves user experience with these new features.
    `,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop',
    category: 'Frontend',
    date: '2023-12-15',
    readTime: '9 min',
    author: 'Barthez Kenwou',
    tags: ['React', 'Frontend', 'JavaScript', 'TypeScript'],
  },
];
