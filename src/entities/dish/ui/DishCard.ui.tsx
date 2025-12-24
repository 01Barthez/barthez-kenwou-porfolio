import React from 'react';
import { Dish } from '../model/dish.types';
import { formatCurrency } from '../../../shared/lib/currency';
import { Button } from '../../../shared/ui/Button';

interface DishCardProps {
  dish: Dish;
  onAddToCart?: (dish: Dish) => void;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {dish.image && <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />}

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{dish.name}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {dish.category}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{dish.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">{formatCurrency(dish.price)}</span>

          {onAddToCart && (
            <Button onClick={() => onAddToCart(dish)} disabled={!dish.available} size="sm">
              {dish.available ? 'Ajouter' : 'Indisponible'}
            </Button>
          )}
        </div>

        {dish.ingredients.length > 0 && (
          <div className="mt-3">
            <p className="text-xs text-gray-500">Ingrédients: {dish.ingredients.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};
