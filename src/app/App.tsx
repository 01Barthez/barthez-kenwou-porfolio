import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { adminChildRoutes } from './routes/app-routes/admin/admin';
import { RouteFallback } from '@/shared/ui/RouteFallback/RouteFallback';
import { ProtectedRoute } from './routes/config/ProtectedRoute';
import { PublicLayout } from '@/pages/public/Layout';
import { ScrollToTop } from '@/shared/ui/ScrollToTop/ScrollToTop';
import { AdminLayout } from '@/widgets/AdminShell';
import { lazyPage } from './routes/utils/utils';

const AdminLoginPage = lazyPage(() => import('@/pages/app/Admin/LoginPage'), 'AdminLoginPage');

export const App: React.FC = () => {
  React.useEffect(() => {
    import('./routes/prefetch').then((m) => m.prefetchRoutes()).catch(() => {});
  }, []);

  const publicRoutes = routes.filter((route) => route.meta?.layout === 'public');

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route element={<PublicLayout />}>
            {publicRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.component />} />
            ))}
          </Route>

          <Route
            path="/barthez-admin/login"
            element={
              <Suspense fallback={<RouteFallback fullScreen />}>
                <AdminLoginPage />
              </Suspense>
            }
          />

          <Route
            path="/barthez-admin"
            element={
              <ProtectedRoute requiredRoles={['admin']}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            {adminChildRoutes.map((route) => (
              <Route
                key={route.path || 'index'}
                index={route.path === ''}
                path={route.path === '' ? undefined : route.path}
                element={
                  <Suspense fallback={<RouteFallback />}>
                    <route.component />
                  </Suspense>
                }
              />
            ))}
          </Route>
        </Routes>
      </div>
    </Router>
  );
};
