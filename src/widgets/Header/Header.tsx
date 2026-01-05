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
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4">
        {/* Left: Sidebar Trigger */}
        <div className="flex items-center">
          <SidebarTrigger />
        </div>

        {/* Center: Navigation (always centered) */}
        <div className="flex justify-center">
          <Navbar />
          <MobileNavbar />
        </div>

        {/* Right: Empty spacer for symmetry */}
        <div className="w-10" />
      </div>
    </header>
  );
};
