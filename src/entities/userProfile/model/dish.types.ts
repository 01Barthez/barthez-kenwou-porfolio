export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  available: boolean;
  ingredients: string[];
  allergens?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface DishFilters {
  category?: string;
  available?: boolean;
  priceRange?: {
    min: number;
    max: number;
  };
}
