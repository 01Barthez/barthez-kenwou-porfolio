import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { useAuth } from '@/app/providers/AuthProvider';

export const AdminDashboardPage: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-lg shadow p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Administration</h1>
              <p className="text-gray-600">Connecté en tant que {user?.email}</p>
            </div>
            <Button onClick={logout} variant="outline">
              Se déconnecter
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Gestion des plats</h3>
            <p className="text-gray-600 mb-4">Ajouter, modifier ou supprimer des plats</p>
            <Button>Gérer les plats</Button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Commandes</h3>
            <p className="text-gray-600 mb-4">Voir et gérer toutes les commandes</p>
            <Button variant="outline">Voir les commandes</Button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Utilisateurs</h3>
            <p className="text-gray-600 mb-4">Gérer les comptes utilisateurs</p>
            <Button variant="outline">Gérer les utilisateurs</Button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Statistiques</h3>
            <p className="text-gray-600 mb-4">Voir les métriques de l'application</p>
            <Button variant="outline">Voir les stats</Button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Paramètres</h3>
            <p className="text-gray-600 mb-4">Configuration de l'application</p>
            <Button variant="outline">Paramètres</Button>
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
