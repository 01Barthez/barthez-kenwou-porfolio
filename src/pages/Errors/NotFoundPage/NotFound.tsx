import React from 'react';
import { Button } from '@/shared/ui/Button/Button.ui';
import { Link } from 'react-router-dom';
import { SEO } from '@/shared/ui/SEO/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Not Found - Barthez Kenwou | Passionate DevOps & Full-Stack JS Developer"
        description="Passioné par l'innovation technologique - Mon expertise couvre l'ensemble du cycle de développement, de la conception à la mise en production, en passant par l'optimisation des performances et la sécurité. Je maîtrise les technologies AWS et les pratiques DevOps pour garantir des déploiements fiables et automatisés."
      />

      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="max-w-2xl w-full p-8 rounded-lg shadow">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-6">Page non trouvée</p>
            <p className="text-gray-600 mb-8">
              Désolé, la page demandée n'existe pas ou a été déplacée.
            </p>

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
    </>
  );
};
