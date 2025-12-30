import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';
import { LanguageToggle } from '@/shared/ui/LanguageToggle';
import { socialLinks } from '@/shared/constants/socialLink.const';
import { CvButton } from '@/shared/ui/CvButton/CvButton';

export const SidebarFooterSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  return (
    <div className="p-4 border-t flex flex-col gap-4">
      <div className={`flex flex-col gap-2 px-3 ${isExpanded ? 'w-full' : ''}`}>
        {/* Social Links */}
        <div className={`flex gap-2 ${isExpanded ? 'justify-center' : 'flex-col'}`}>
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

        {/* Theme & Language toggles */}
        <div className={`flex gap-2 ${isExpanded ? 'justify-center' : 'flex-col'}`}>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>

      {/* CV Button */}
      <CvButton />
    </div>
  );
};
