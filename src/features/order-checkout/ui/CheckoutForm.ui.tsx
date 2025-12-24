import React from 'react';

export interface CheckoutItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CheckoutFormProps {
  items: CheckoutItem[];
  total: number;
  onSubmit: (paymentInfo: { cardNumber: string; expiry: string; cvv: string }) => void;
  isLoading?: boolean;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({
  items,
  total,
  onSubmit,
  isLoading,
}) => {
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiry, setExpiry] = React.useState('');
  const [cvv, setCvv] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ cardNumber, expiry, cvv });
  };

  return (
    <div>
      <h2>Checkout</h2>

      <div>
        <h3>Order Summary</h3>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} x{item.quantity} - ${(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
        <div>Total: ${total.toFixed(2)}</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            id="cardNumber"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="expiry">Expiry (MM/YY)</label>
          <input
            id="expiry"
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            id="cvv"
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Complete Order'}
        </button>
      </form>
    </div>
  );
};
