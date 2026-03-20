import { SidebarTrigger, useSidebar } from '@/shared/ui/sidebar';
import React from 'react';
import { MobileNavbar, Navbar } from '../Navbar';
import { cn } from '@/shared/lib/utils';

export const Header: React.FC = () => {
  const { state, isMobile } = useSidebar();
  const isExpanded = state === 'expanded';

  return (
    <>
      {/* Fixed trigger kept out of the normal flow so it doesn't scroll */}
      <div
        className={cn(
          'fixed z-50 transition-all duration-250',
          isMobile
            ? 'top-4 left-4'
            : isExpanded
            ? 'top-16 left-60'
            : 'top-10 left-14'
        )}
        aria-hidden
      >
        <SidebarTrigger className="shadow-sm bg-background/80 backdrop-blur-sm ring-1 ring-sidebar-border" />
      </div>

      {/* Header remains in place; add spacer to preserve original layout alignment */}
      <header className="w-full relative flex items-center justify-between py-10 sm:p-0 mb-0">
        <div className="w-10" aria-hidden />

        <div className="relative w-full">
          <Navbar />
          <MobileNavbar />
        </div>
      </header>
    </>
  );
};
