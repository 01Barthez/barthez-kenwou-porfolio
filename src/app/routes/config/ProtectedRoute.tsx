import { useAuth } from '@/app/providers/AuthProvider';
import React from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRoles = [] }) => {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    // TODO: Afficher un spinner de chargement
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // TODO: Rediriger vers la page de connexion
    return <div>Please log in to access this page.</div>;
  }

  if (requiredRoles.length > 0 && user && !requiredRoles.includes(user.role)) {
    // TODO: Afficher une page d'accès refusé
    return <div>Access denied. Insufficient permissions.</div>;
  }

  return <>{children}</>;
};
