import { SidebarTrigger } from '@/shared/ui/sidebar';
import React from 'react';
import { MobileNavbar, Navbar } from '../Navbar';

export const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between p-4 border-b">
      <SidebarTrigger />

      <div className="relative w-full">
        <Navbar />
        <MobileNavbar />
      </div>
    </header>
  );
};
