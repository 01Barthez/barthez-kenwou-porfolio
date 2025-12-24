import { z } from 'zod';

export const orderStatusSchema = z.enum([
  'pending',
  'confirmed',
  'preparing',
  'ready',
  'delivered',
  'cancelled',
]);

export const orderItemSchema = z.object({
  dishId: z.string().min(1),
  quantity: z.number().int().positive(),
  unitPrice: z.number().positive(),
  totalPrice: z.number().positive(),
  specialInstructions: z.string().optional(),
});

export const orderSchema = z.object({
  id: z.string().min(1),
  userId: z.string().min(1),
  items: z.array(orderItemSchema).min(1),
  status: orderStatusSchema,
  totalAmount: z.number().positive(),
  deliveryAddress: z.string().optional(),
  phoneNumber: z.string().optional(),
  specialInstructions: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  estimatedDeliveryTime: z.date().optional(),
});

export type OrderInput = z.infer<typeof orderSchema>;
export type OrderItemInput = z.infer<typeof orderItemSchema>;
export type OrderStatusInput = z.infer<typeof orderStatusSchema>;
