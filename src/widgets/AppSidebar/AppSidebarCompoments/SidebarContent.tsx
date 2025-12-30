import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SidebarMenuItem, SidebarMenuButton } from '@/shared/ui/sidebar.tsx';
import { navItems } from '@/shared/constants/navItems.const';

export const SidebarContentSection: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <nav className="flex flex-col gap-2 p-4 w-full">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.id;

        return (
          <SidebarMenuItem key={item.id} className="w-full list-none">
            <SidebarMenuButton asChild isActive={isActive}>
              <NavLink
                key={item.id}
                to={item.id}
                className={`group relative flex items-center gap-3 rounded-xl px-3 py-5 transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-primary-foreground glow-primary'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                } ${!isExpanded && 'justify-center'}`}
                aria-label={t(item.labelKey)}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {isExpanded && <span className="text-sm font-medium">{t(item.labelKey)}</span>}

                {/* Tooltip for collapsed state */}
                {!isExpanded && (
                  <span className="absolute left-full ml-3 rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap z-50">
                    {t(item.labelKey)}
                  </span>
                )}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </nav>
  );
};
