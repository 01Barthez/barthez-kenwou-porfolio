import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { LoadingSpinner } from '@/shared/ui/Spinner/Spinner.ui';
import { ProtectedRoute } from './routes/config/ProtectedRoute';

export const App: React.FC = () => {
  React.useEffect(() => {
    // Prefetch important routes on idle to improve perceived navigation speed
    import('./routes/prefetch').then((m) => m.prefetchRoutes()).catch(() => {});
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  route.meta?.requiresAuth ? (
                    <ProtectedRoute requiredRoles={route.meta.roles}>
                      <route.component />
                    </ProtectedRoute>
                  ) : (
                    <route.component />
                  )
                }
              />
            ))}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};
