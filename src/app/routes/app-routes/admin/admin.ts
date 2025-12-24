import { RouteConfig } from '@/app/routes/types/RouteTypes';
import { lazyPage } from '@/app/routes/utils/utils';

export const adminRoutes: RouteConfig[] = [
  {
    path: '/admin',
    component: lazyPage(() => import('@/pages/app/Admin/DashboardPage'), 'AdminDashboardPage'),
    meta: {
      title: 'Administration',
      requiresAuth: true,
      roles: ['admin'],
      layout: 'admin',
    },
  },
];
