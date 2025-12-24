import { RouteConfig } from '@/app/routes/types/RouteTypes';
import { lazyPage } from '@/app/routes/utils/utils';

export const customerRoutes: RouteConfig[] = [
  {
    path: '/dashboard',
    component: lazyPage(() => import('@/pages/app/Customer/DashboardPage'), 'CustomerDashboardPage'),
    meta: {
      title: 'Mon Compte',
      requiresAuth: true,
      roles: ['customer'],
      layout: 'app',
    },
  },
];
