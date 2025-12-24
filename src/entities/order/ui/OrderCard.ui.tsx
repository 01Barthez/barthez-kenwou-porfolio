import React from 'react';
import { Order, OrderStatus } from '../model/order.types';
import { formatCurrency } from '../../../shared/lib/currency';
import { formatDateTime } from '../../../shared/lib/date';
import { Button } from '../../../shared/ui/Button';

interface OrderCardProps {
  order: Order;
  onViewDetails?: (order: Order) => void;
  onCancelOrder?: (orderId: string) => void;
}

const getStatusColor = (status: OrderStatus): string => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'confirmed':
      return 'bg-blue-100 text-blue-800';
    case 'preparing':
      return 'bg-orange-100 text-orange-800';
    case 'ready':
      return 'bg-green-100 text-green-800';
    case 'delivered':
      return 'bg-gray-100 text-gray-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusLabel = (status: OrderStatus): string => {
  switch (status) {
    case 'pending':
      return 'En attente';
    case 'confirmed':
      return 'Confirmée';
    case 'preparing':
      return 'En préparation';
    case 'ready':
      return 'Prête';
    case 'delivered':
      return 'Livrée';
    case 'cancelled':
      return 'Annulée';
    default:
      return status;
  }
};

export const OrderCard: React.FC<OrderCardProps> = ({ order, onViewDetails, onCancelOrder }) => {
  const canCancel = order.status === 'pending' || order.status === 'confirmed';

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Commande #{order.id}</h3>
          <p className="text-sm text-gray-600">{formatDateTime(order.createdAt)}</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}
        >
          {getStatusLabel(order.status)}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {order.items.map((item, index) => (
          <div key={index} className="flex justify-between items-center text-sm">
            <span className="text-gray-600">
              {item.quantity}x {item.dish.name}
            </span>
            <span className="font-medium">{formatCurrency(item.totalPrice)}</span>
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Total:</span>
          <span className="text-xl font-bold text-green-600">
            {formatCurrency(order.totalAmount)}
          </span>
        </div>

        <div className="flex space-x-2">
          {onViewDetails && (
            <Button variant="outline" size="sm" onClick={() => onViewDetails(order)}>
              Détails
            </Button>
          )}

          {canCancel && onCancelOrder && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onCancelOrder(order.id.toString())}
              className="text-red-600 border-red-300 hover:bg-red-50"
            >
              Annuler
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
