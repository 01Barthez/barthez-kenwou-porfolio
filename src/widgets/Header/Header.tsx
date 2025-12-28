import { LanguageToggle } from '@/shared/ui/LanguageToggle';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';
import { SidebarTrigger } from '@/shared/ui/sidebar';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <SidebarTrigger />

      <div className="flex items-center gap-4">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
};
