import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';
import { LanguageToggle } from '@/shared/ui/LanguageToggle';
import { socialLinks } from '@/shared/constants/socialLink.const';
import { CvButton } from '@/shared/ui/CvButton/CvButton';
import { useSidebar } from '@/shared/ui/sidebar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/shared/ui/tooltip';

/**
 * SidebarFooterSection Component
 *
 * Affiche les liens sociaux, toggles et bouton CV
 * - Mode expanded: Layout horizontal centré
 * - Mode collapsed: Layout vertical avec icônes et tooltips
 *
 * @component
 */
export const SidebarFooterSection: React.FC = () => {
  const { state } = useSidebar();
  const isExpanded = state === 'expanded';

  return (
    <TooltipProvider delayDuration={0}>
      <div
        className={`border-t flex flex-col gap-4 transition-all duration-300 ${
          isExpanded ? 'p-4' : 'p-2'
        }`}
      >
        <div className={`flex flex-col gap-2 ${isExpanded ? 'px-3' : 'px-0'}`}>
          {/* Social Links */}
          <div className={`flex gap-2 ${isExpanded ? 'justify-center' : 'flex-col items-center'}`}>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const socialLink = (
                <Link
                  key={link.label}
                  to={link.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-primary"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );

              return !isExpanded ? (
                <Tooltip key={link.label}>
                  <TooltipTrigger asChild>{socialLink}</TooltipTrigger>
                  <TooltipContent side="right" className="font-medium">
                    {link.label}
                  </TooltipContent>
                </Tooltip>
              ) : (
                socialLink
              );
            })}
          </div>

          {/* Theme & Language toggles */}
          <div className={`flex gap-2 ${isExpanded ? 'justify-center' : 'flex-col items-center'}`}>
            {!isExpanded ? (
              <>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <ThemeToggle />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="font-medium">
                    Toggle theme
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <LanguageToggle />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="font-medium">
                    Change language
                  </TooltipContent>
                </Tooltip>
              </>
            ) : (
              <>
                <ThemeToggle />
                <LanguageToggle />
              </>
            )}
          </div>
        </div>

        {/* CV Button */}
        {isExpanded && <CvButton />}
      </div>
    </TooltipProvider>
  );
};
