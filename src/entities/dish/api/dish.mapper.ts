import type { DishDTO, PaginatedDishDTO } from './dish.dto';
import type { Dish } from '../model/dish.types';

export const mapDishFromDTO = (dto: DishDTO): Dish => ({
  id: dto.id,
  name: dto.name,
  description: dto.description ?? '',
  price: dto.price_cents / 100,
  image: (dto as any).image ?? undefined,
  category: (dto as any).category ?? '',
  ingredients: (dto as any).ingredients ?? [],
  allergens: (dto as any).allergens ?? [],
  available: !!dto.available,
  createdAt: dto.created_at ? new Date(dto.created_at) : new Date(),
  updatedAt: dto.updated_at ? new Date(dto.updated_at) : new Date(),
});

export const mapPaginatedDishesFromDTO = (dto: PaginatedDishDTO) => ({
  data: dto.data.map(mapDishFromDTO),
  total: dto.total,
  page: dto.page,
  limit: dto.limit,
  totalPages: dto.totalPages,
});
