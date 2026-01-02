import { useState, useEffect } from 'react';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export const useMenuBrowse = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMenu = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // TODO: Implement actual menu fetching
      // Mock data
      const mockItems: MenuItem[] = [
        {
          id: '1',
          name: 'Burger',
          price: 12.99,
          description: 'Delicious burger',
        },
        { id: '2', name: 'Pizza', price: 15.99, description: 'Cheesy pizza' },
      ];

      setItems(mockItems);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch menu';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return {
    items,
    isLoading,
    error,
    refetch: fetchMenu,
  };
};
