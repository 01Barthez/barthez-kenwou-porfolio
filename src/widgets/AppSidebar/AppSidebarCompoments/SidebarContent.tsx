import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SidebarMenuItem, SidebarMenuButton, useSidebar } from '@/shared/ui/sidebar.tsx';
import { navItems } from '@/shared/constants/navItems.const';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/shared/ui/tooltip';

/**
 * SidebarContentSection Component
 *
 * Affiche les liens de navigation
 * - Mode expanded: Icône + texte
 * - Mode collapsed: Icône uniquement avec tooltip au survol
 *
 * @component
 */
export const SidebarContentSection: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { state } = useSidebar();
  const isExpanded = state === 'expanded';

  return (
    <TooltipProvider delayDuration={0}>
      <nav
        className={`flex flex-col gap-2 w-full transition-all duration-300 ${
          isExpanded ? 'p-4' : 'p-2'
        }`}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.id;

          const linkContent = (
            <NavLink
              key={item.id}
              to={item.id}
              className={`group relative flex items-center rounded-xl transition-all duration-300 ${
                isActive
                  ? 'bg-primary text-primary-foreground glow-primary'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              } ${isExpanded ? 'gap-3 px-3 py-5' : 'justify-center p-3'}`}
              aria-label={t(item.labelKey)}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {isExpanded && <span className="text-sm font-medium">{t(item.labelKey)}</span>}
            </NavLink>
          );

          return (
            <SidebarMenuItem key={item.id} className="w-full list-none">
              <SidebarMenuButton asChild isActive={isActive}>
                {!isExpanded ? (
                  <Tooltip>
                    <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                    <TooltipContent side="right" className="font-medium">
                      {t(item.labelKey)}
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  linkContent
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </nav>
    </TooltipProvider>
  );
};
