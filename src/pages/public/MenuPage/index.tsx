import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';

export const MenuPage: React.FC = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              ← Retour à l'accueil
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Notre Menu</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* TODO: Afficher les plats depuis l'entité dish */}
          <div className="bg-foreground/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Plat 1</h3>
            <p className="text-gray-600 mb-4">Description du plat</p>
            <p className="text-lg font-bold text-green-600">€15.99</p>
          </div>

          <div className="bg-foreground/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Plat 2</h3>
            <p className="text-gray-600 mb-4">Description du plat</p>
            <p className="text-lg font-bold text-green-600">€12.99</p>
          </div>

          <div className="bg-foreground/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Plat 3</h3>
            <p className="text-gray-600 mb-4">Description du plat</p>
            <p className="text-lg font-bold text-green-600">€18.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// named export above
