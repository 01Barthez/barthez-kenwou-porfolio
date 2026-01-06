import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';
import { LanguageToggle } from '@/shared/ui/LanguageToggle';
import { navItems } from '@/shared/constants/navItems.const';
import { socialLinks } from '@/shared/constants/socialLink.const';
import { CvButton } from '@/shared/ui/CvButton/CvButton';
import { useNavbarPosition } from './hooks';
import { motion } from "framer-motion";

/**
 * Navbar Component - Barre de navigation principale de l'application
 *
 * Caractéristiques:
 * - Position sticky en haut de l'écran lors du scroll
 * - Centrage dynamique en fonction de l'état du sidebar (expanded/collapsed)
 * - Responsive avec masquage sur mobile (< xl breakpoint)
 * - Effets glass morphism pour un design moderne
 *
 * @component
 */
export const Navbar: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const navbarStyle = useNavbarPosition();

  return (
    <header
      className="fixed top-4 z-40 hidden xl:block transition-all duration-300 ease-in-out"
      style={navbarStyle}
    >
      <nav className="glass rounded-2xl px-6 py-3 flex items-center gap-6 shadow-lg">
        {/* Navigation Links */}
        <div className="flex items-center md:gap-4 lg:gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.id;

            return (
              <NavLink
                key={item.id}
                to={item.id}
                className={`nav-link relative overflow-visible text-nowrap ${isActive ? 'active' : ''}`}
              >
                {t(item.labelKey)}

                {/* Background follows active  link */}
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-border" />

        {/* Theme & Language toggles */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-border" />

        {/* Social Links */}
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.label}
                to={link.href}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-primary"
                aria-label={link.label}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
        </div>

        {/* CV Button */}
        <div className="transition-all hover:glow-primary hover:scale-105">
          <CvButton />
        </div>
      </nav>
    </header>
  );
};
