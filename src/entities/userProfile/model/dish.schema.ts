import { z } from 'zod';

export const dishSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1).max(100),
  description: z.string().min(1).max(500),
  price: z.number().positive(),
  image: z.string().url().optional(),
  category: z.string().min(1),
  available: z.boolean(),
  ingredients: z.array(z.string()),
  allergens: z.array(z.string()).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const dishFiltersSchema = z.object({
  category: z.string().optional(),
  available: z.boolean().optional(),
  priceRange: z
    .object({
      min: z.number().min(0),
      max: z.number().min(0),
    })
    .optional(),
});

export type DishInput = z.infer<typeof dishSchema>;
export type DishFiltersInput = z.infer<typeof dishFiltersSchema>;
