import { adminRoutes } from './app-routes/admin/admin';
import { customerRoutes } from './app-routes/customer/customer';
import { publicRoutes } from './app-routes/public/public';
import { RouteConfig } from './types/RouteTypes';

export const routes: RouteConfig[] = [
  ...publicRoutes,
  ...customerRoutes,
  ...adminRoutes,
];

