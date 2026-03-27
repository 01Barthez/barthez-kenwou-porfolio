import { AiOutlineDownload } from "react-icons/ai"; 
import { navItems } from '@/shared/constants/navItems.const';
import { Button } from '@/shared/ui/Button';
import { LanguageToggle } from '@/shared/ui/LanguageToggle';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';
import { SidebarTrigger } from '@/shared/ui/sidebar';
import { FileDown } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const MobileNavbar: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const IconBlog = navItems[5].icon;
  const textBlog = navItems[5].labelKey;

  return (
    <div className="xl:hidden">
      {/* Top bar with toggles */}
      <nav className="fixed top-6 left-0 right-0 z-50 w-full flex items-center justify-between gap-2 px-3 sm:px-6 py-1 backdrop-blur-sm border-b border-border/10">
        <div className="flex items-center gap-1.5">
          <SidebarTrigger className="h-6 w-6 shadow-sm bg-background/80 backdrop-blur-sm ring-1 ring-sidebar-border" />

          <div className="h-6 w-px bg-border/50 mx-.5" />

          <Button variant={'outline'} asChild className="px-2 h-8">
            <Link to="/blog">
              <IconBlog className={`h-2 w-2`} />
              <span className="text-xs">{t(textBlog)}</span>
            </Link>
          </Button>

          <Button asChild className="w-fit px-2 h-8">
            <Link to="/cv">
              <AiOutlineDownload className="mr-.5 h-2 w-2" />
              <span className="text-xs">{t('nav.cv')}</span>
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-0 md:gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-xl">
        {/* Navigation items */}
        <div className="flex items-center justify-around px-1 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.id;

            if (item.id != '/blog')
              return (
                <NavLink
                  key={item.id}
                  to={item.id}
                  className={`relative flex flex-col items-center gap-1 px-2 py-2 rounded-xl transition-all duration-300 
                ${
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'scale-110' : ''}`} />
                  <span className="text-xs text-nowrap font-medium">{t(item.labelKey)}</span>
                  {isActive && (
                    <span className="absolute -top-0.5 h-0.5 w-8 rounded-full bg-primary" />
                  )}
                </NavLink>
              );
          })}
        </div>
      </nav>
    </div>
  );
};
