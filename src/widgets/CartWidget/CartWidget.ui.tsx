import React from 'react';

export interface CartWidgetProps {
  className?: string;
  itemCount?: number;
}

export const CartWidget: React.FC<CartWidgetProps> = ({ className, itemCount = 0 }) => {
  return (
    <div className={className}>
      {/* TODO: Implement cart widget component */}
      <div>Cart ({itemCount})</div>
    </div>
  );
};
