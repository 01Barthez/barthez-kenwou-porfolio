import { useAuth } from '@/app/providers/AuthProvider';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { LoadingPage } from '@/shared/ui/LoadingPage/LoadingPage';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRoles = [] }) => {
  const { isAuthenticated, user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingPage />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/barthez-admin/login" replace state={{ from: location.pathname }} />;
  }

  if (requiredRoles.length > 0 && user && !requiredRoles.includes(user.role)) {
    return <Navigate to="/barthez-admin/login" replace />;
  }

  return <>{children}</>;
};
