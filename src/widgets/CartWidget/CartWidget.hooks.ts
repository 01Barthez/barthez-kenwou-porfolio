import { useState, useEffect } from 'react';

export const useCartWidget = () => {
  const [itemCount, setItemCount] = useState(0);

  // TODO: Connect to cart state management
  useEffect(() => {
    // Mock cart items count
    setItemCount(0);
  }, []);

  return {
    itemCount,
  };
};
