import React from 'react';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface MenuListProps {
  items: MenuItem[];
  onItemSelect?: (item: MenuItem) => void;
}

export const MenuList: React.FC<MenuListProps> = ({ items, onItemSelect }) => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => onItemSelect?.(item)}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>${item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
