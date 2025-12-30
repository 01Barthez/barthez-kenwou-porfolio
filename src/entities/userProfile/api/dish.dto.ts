// Raw DTOs from API for Dish
export interface DishDTO {
  id: string;
  name: string;
  description?: string;
  price_cents: number;
  available?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface PaginatedDishDTO {
  data: DishDTO[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
