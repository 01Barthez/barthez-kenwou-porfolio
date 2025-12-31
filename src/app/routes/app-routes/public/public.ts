import { RouteConfig } from '@/app/routes/types/RouteTypes';
import { lazyPage } from '@/app/routes/utils/utils';

export const publicRoutes: RouteConfig[] = [
  {
    path: '/',
    component: lazyPage(() => import('@/pages/public/HomePage/home'), 'HomePage'),
    meta: {
      title: 'Accueil',
      layout: 'public',
    },
  },

  {
    path: '/about',
    component: lazyPage(() => import('@/pages/public/AboutPage/About'), 'AboutPage'),
    meta: {
      title: 'À propos',
      layout: 'public',
    },
  },

  {
    path: '/skills',
    component: lazyPage(() => import('@/pages/public/SkillPage/skill'), 'SkillPage'),
    meta: {
      title: 'Compétences',
      layout: 'public',
    },
  },

  {
    path: '/projects',
    component: lazyPage(() => import('@/pages/public/ProjectPage/project'), 'ProjectPage'),
    meta: {
      title: 'Projets',
      layout: 'public',
    },
  },

  {
    path: '/projects/:projectID',
    component: lazyPage(
      () => import('@/pages/public/ProjectPage/projectDetails'),
      'ProjectDetailPage',
    ),
    meta: {
      title: 'Projet Détails',
      layout: 'public',
    },
  },

  {
    path: '/services',
    component: lazyPage(() => import('@/pages/public/ServicePage/service'), 'ServicePage'),
    meta: {
      title: 'Services',
      layout: 'public',
    },
  },

  {
    path: '/blog',
    component: lazyPage(() => import('@/pages/public/BlogPage/blog'), 'BlogPage'),
    meta: {
      title: 'blog',
      layout: 'public',
    },
  },

  {
    path: '/blog/:blogID',
    component: lazyPage(() => import('@/pages/public/BlogPage/blogDetails'), 'BlogDetailPage'),
    meta: {
      title: 'Blog Details',
      layout: 'public',
    },
  },

  {
    path: '/contact',
    component: lazyPage(() => import('@/pages/public/Contact/contact'), 'ContactPage'),
    meta: {
      title: 'Contact',
      layout: 'public',
    },
  },

  {
    path: '/cv',
    component: lazyPage(() => import('@/pages/public/CvPage/cv'), 'CvPage'),
    meta: {
      title: 'CV',
      layout: 'public',
    },
  },

  // Server Error
  {
    path: '/server-error',
    component: lazyPage(() => import('@/pages/Errors/InternalErrorPage/InternalError'), 'NotFoundPage'),
    meta: {
      title: 'Page non trouvée',
      layout: 'public',
    },
  },

  // Catch-all 404 route (should be last)
  {
    path: '*',
    component: lazyPage(() => import('@/pages/Errors/NotFoundPage/NotFound'), 'NotFoundPage'),
    meta: {
      title: 'Page non trouvée',
      layout: 'public',
    },
  },
];
