import { RouteConfig } from '@/app/routes/types/RouteTypes';
import { lazyPage } from '@/app/routes/utils/utils';

export const publicRoutes: RouteConfig[] = [
  {
    path: '/',
    component: lazyPage(() => import('@/pages/public/HomePage'), 'HomePage'),
    meta: {
      title: 'Accueil',
      layout: 'public',
    },
  },
  {
    path: '/menu',
    component: lazyPage(() => import('@/pages/public/MenuPage'), 'MenuPage'),
    meta: {
      title: 'Menu',
      layout: 'public',
    },
  },
  // Catch-all 404 route (should be last)
  {
    path: '*',
    component: lazyPage(() => import('@/pages/public/Errors/NotFoundPage'), 'NotFoundPage'),
    meta: {
      title: 'Page non trouvée',
      layout: 'public',
    },
  },
];
