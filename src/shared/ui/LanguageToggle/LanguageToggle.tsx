import { useState } from 'react';
import { useLanguageStore } from '../../state/useLanguageStore';
import { cn } from '@/shared/lib/utils';

type LanguageToggleProps = {
  /** Sidebar collapsed: flag only, no FR/EN label */
  flagOnly?: boolean;
  className?: string;
};

/**
 * Language switcher with 3D flip (FR ↔ EN).
 * Use `flagOnly` in the collapsed sidebar; header keeps the full control.
 */
export const LanguageToggle = ({ flagOnly = false, className }: LanguageToggleProps) => {
  const { language, toggleLanguage } = useLanguageStore();
  const [isFlipping, setIsFlipping] = useState(false);

  const handleToggle = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    toggleLanguage();
    setTimeout(() => setIsFlipping(false), 600);
  };

  const isFrench = language === 'fr';

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={isFlipping}
      className={cn(
        'relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-md',
        'transition-all duration-300 ease-out',
        'hover:scale-105 hover:shadow-sm',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        'disabled:opacity-70 disabled:cursor-not-allowed',
        'group',
        flagOnly ? 'size-9' : 'h-9 w-14',
        className,
      )}
      aria-label={isFrench ? 'Switch to English' : 'Passer en français'}
      style={{ perspective: '1000px' }}
    >
      <div
        className={cn(
          'absolute inset-0 transition-all duration-500 bg-gradient-to-br',
          isFrench
            ? 'from-primary/20 via-foreground/5 to-muted/20'
            : 'from-primary/15 via-foreground/5 to-muted/15',
        )}
      />

      <div
        className={cn(
          'absolute inset-0 blur-md transition-opacity duration-300',
          'opacity-0 group-hover:opacity-100 bg-primary/25',
        )}
      />

      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFrench ? 'rotateY(0deg)' : 'rotateY(180deg)',
          transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center',
            flagOnly ? '' : 'flex-row gap-1',
          )}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
          }}
        >
          <span className={cn('leading-none', flagOnly ? 'text-xl' : 'text-lg')}>🇫🇷</span>
          {!flagOnly && (
            <span className="text-[10px] font-bold text-foreground/80 tracking-wider">FR</span>
          )}
        </div>

        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center',
            flagOnly ? '' : 'flex-row gap-0.5',
          )}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <span className={cn('leading-none', flagOnly ? 'text-xl' : 'text-lg')}>🇬🇧</span>
          {!flagOnly && (
            <span className="text-[10px] font-bold text-foreground/80 tracking-wider">EN</span>
          )}
        </div>
      </div>

      <div className="absolute inset-0 rounded-md border border-border/50 pointer-events-none" />
    </button>
  );
};
