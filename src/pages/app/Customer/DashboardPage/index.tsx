import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { useAuth } from '@/app/providers/AuthProvider';

export const CustomerDashboardPage: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Bienvenue, {user?.email}</h1>
              <p className="text-gray-600">Tableau de bord client</p>
            </div>
            <Button onClick={logout} variant="outline">
              Se déconnecter
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Mes commandes</h3>
            <p className="text-gray-600 mb-4">Consultez vos commandes récentes</p>
            <Button>Voir mes commandes</Button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Favoris</h3>
            <p className="text-gray-600 mb-4">Vos plats préférés</p>
            <Button variant="outline">Voir les favoris</Button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Profil</h3>
            <p className="text-gray-600 mb-4">Gérez vos informations</p>
            <Button variant="outline">Modifier le profil</Button>
          </div>
        </div>

        <div className="mt-8">
          <Link to="/">
            <Button variant="ghost">← Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// named export at declaration
