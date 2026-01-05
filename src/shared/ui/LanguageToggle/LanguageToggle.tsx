import { useState } from 'react';
import { useLanguageStore } from '../../state/useLanguageStore';
import { cn } from '@/shared/lib/utils';

/**
 * LanguageToggle Component - Professional language switcher with 3D flip animation
 *
 * Features:
 * - 3D flip animation between FR and EN
 * - Stylized flag icons (🇫🇷 / 🇬🇧)
 * - Smooth rotation with perspective
 * - Glow effect on hover
 * - Professional glass morphism design
 *
 * @component
 */
export const LanguageToggle = () => {
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
    <>
      <button
        onClick={handleToggle}
        disabled={isFlipping}
        className={cn(
          'relative inline-flex items-center justify-center',
          'w-14 h-9 rounded-lg overflow-hidden',
          'transition-all duration-300 ease-out',
          'hover:scale-105 hover:shadow-lg',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          'disabled:opacity-70 disabled:cursor-not-allowed',
          'group',
        )}
        aria-label={isFrench ? 'Switch to English' : 'Passer en français'}
        title={isFrench ? 'Switch to English' : 'Passer en français'}
        style={{
          perspective: '1000px',
        }}
      >
        {/* Background with gradient */}
        <div
          className={cn(
            'absolute inset-0 transition-all duration-500',
            'bg-gradient-to-br',
            isFrench
              ? 'from-blue-500/20 via-white/10 to-red-500/20'
              : 'from-blue-600/20 via-white/10 to-red-600/20',
          )}
        />

        {/* Glow effect */}
        <div
          className={cn(
            'absolute inset-0 blur-md transition-opacity duration-300',
            'opacity-0 group-hover:opacity-100',
            isFrench ? 'bg-blue-500/30' : 'bg-blue-600/30',
          )}
        />

        {/* Flip container */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFrench ? 'rotateY(0deg)' : 'rotateY(180deg)',
            transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* FR Side */}
          <div
            className="absolute inset-0 flex flex-row items-center justify-center gap-1"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(0deg)',
            }}
          >
            <span className="text-lg leading-none">🇫🇷</span>
            <span className="text-[10px] font-bold text-foreground/80 tracking-wider">FR</span>
          </div>

          {/* EN Side */}
          <div
            className="absolute inset-0 flex flex-row items-center justify-center gap-0.5"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <span className="text-lg leading-none">🇬🇧</span>
            <span className="text-[10px] font-bold text-foreground/80 tracking-wider">EN</span>
          </div>
        </div>

        {/* Border overlay */}
        <div className="absolute inset-0 rounded-lg border border-border/50 pointer-events-none" />
      </button>

      {/* CSS for smooth animations */}
      <style>{`
        @keyframes flagWave {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(5deg);
          }
        }
      `}</style>
    </>
  );
};
