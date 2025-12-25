import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from './Navbar.mocks';
import { FileDown, Github, Linkedin } from 'lucide-react';
import { LanguageToggle } from '@/shared/ui/LanguageToggle/LanguageToggle';
import { ThemeToggle } from '@/shared/ui/ThemeToggle/ThemeToggle.ui';

export interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <header className="fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 lg:block lg:left-[calc(50%+8rem)]">
      <nav className="glass rounded-2xl px-6 py-3 flex items-center gap-6">
        {/* Navigation Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.id;
            return (
              <Link key={item.id} to={item.id} className={`nav-link ${isActive ? 'active' : ''}`}>
                {t(item.labelKey)}
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-border" />

        {/* Theme & Language toggles */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-border" />

        {/* Social Links */}
        <div className="flex items-center gap-2">
          <Link
            to="https://github.com/01Barthez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            to="https://cm.linkedin.com/in/barthez-kenwou"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>

        {/* CV Button */}
        <Link
          to="/cv"
          className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:glow-primary hover:scale-105"
        >
          <FileDown className="h-4 w-4" />
          <span>{t('nav.cv')}</span>
        </Link>
      </nav>
    </header>
  );
};
