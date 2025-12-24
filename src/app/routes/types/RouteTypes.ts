export interface RouteMeta {
  title?: string;
  requiresAuth?: boolean;
  roles?: string[];
  layout?: 'public' | 'app' | 'admin';
}

export interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  meta?: RouteMeta;
}
