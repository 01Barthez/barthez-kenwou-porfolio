import React from 'react';
import { Button } from '@/shared/ui/Button/Button.ui';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="max-w-2xl w-full p-8 rounded-lg shadow">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-6">Page non trouvée</p>
          <p className="text-gray-600 mb-8">Désolé, la page demandée n'existe pas ou a été déplacée.</p>

          <div className="flex justify-center gap-4">
            <Link to="/">
              <Button>Retour à l'accueil</Button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-700"
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
