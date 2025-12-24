import { ID } from '../../../shared/types';
import { Dish } from '../../dish/model/dish.types';

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'delivered'
  | 'cancelled';

export interface OrderItem {
  dishId: ID;
  dish: Dish;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  specialInstructions?: string;
}

export interface Order {
  id: ID;
  userId: ID;
  items: OrderItem[];
  status: OrderStatus;
  totalAmount: number;
  deliveryAddress?: string;
  phoneNumber?: string;
  specialInstructions?: string;
  createdAt: Date;
  updatedAt: Date;
  estimatedDeliveryTime?: Date;
}
