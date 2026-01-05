import { SidebarTrigger } from '@/shared/ui/sidebar';
import React from 'react';
import { MobileNavbar, Navbar } from '../Navbar';

/**
 * Header Component - Sticky header with sidebar trigger
 *
 * Features:
 * - Sticky positioning (stays visible on scroll)
 * - Glass morphism background
 * - Contains sidebar trigger and navigation
 * - Responsive design
 *
 * @component
 */
export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between p-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      {/* Sidebar Trigger - Always visible */}
      <div className="flex-shrink-0">
        <SidebarTrigger />
      </div>

      {/* Navigation */}
      <div className="relative w-full">
        <Navbar />
        <MobileNavbar />
      </div>
    </header>
  );
};
