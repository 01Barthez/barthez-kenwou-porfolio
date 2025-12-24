import React from 'react';

export interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={className}>
      {/* TODO: Implement navbar component */}
      <div>Navbar Component</div>
    </nav>
  );
};
