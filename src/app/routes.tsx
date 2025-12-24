import { routes as modularRoutes } from './routes/index';
import type { RouteConfig } from './routes/types/RouteTypes';

// Routes are composed from modular files under `src/app/routes/*`.
// Add new sections (public, admin, customer, ...) as separate files
// and include them in `src/app/routes/index.ts` to keep this file tiny.
export const routes: RouteConfig[] = modularRoutes;

