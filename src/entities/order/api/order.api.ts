import { Order, OrderStatus } from '../model/order.types';
import { apiClient } from '../../../shared/api/client';
import { PaginatedResponse } from '../../../shared/types';

export const orderApi = {
  // Récupérer les commandes de l'utilisateur connecté
  getMyOrders: async (page = 1, limit = 10): Promise<PaginatedResponse<Order>> => {
    return apiClient.get(`/orders/my-orders?page=${page}&limit=${limit}`);
  },

  // Récupérer une commande par ID
  getOrder: async (id: string): Promise<Order> => {
    return apiClient.get(`/orders/${id}`);
  },

  // Créer une nouvelle commande
  createOrder: async (
    order: Omit<Order, 'id' | 'createdAt' | 'updatedAt' | 'status'>,
  ): Promise<Order> => {
    return apiClient.post('/orders', order);
  },

  // Mettre à jour le statut d'une commande (admin seulement)
  updateOrderStatus: async (id: string, status: OrderStatus): Promise<Order> => {
    return apiClient.patch(`/orders/${id}/status`, { status });
  },

  // Annuler une commande
  cancelOrder: async (id: string): Promise<Order> => {
    return apiClient.patch(`/orders/${id}/cancel`);
  },
};
