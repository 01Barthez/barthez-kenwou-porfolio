import { useCallback, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

import { cn } from '@/shared/lib/utils';


const MorphingIcon = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className="relative w-5 h-5">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        {/* Moon (dark mode) - Properly oriented crescent */}
        <g
          style={{
            transformOrigin: '12px 12px',
            transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.3)',
            opacity: isDark ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* Moon crescent - correctly oriented */}
          <path
            d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
            fill="currentColor"
          />
          <path
            d="M14 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"
            fill="var(--background)"
          />
          
          {/* Moon craters for realism */}
          <circle cx="13" cy="10" r="0.8" fill="var(--background)" opacity="0.4" />
          <circle cx="14.5" cy="13" r="0.6" fill="var(--background)" opacity="0.3" />
          <circle cx="11.5" cy="13.5" r="0.5" fill="var(--background)" opacity="0.3" />
        </g>

        {/* Sun (light mode) */}
        <g
          style={{
            transformOrigin: '12px 12px',
            transform: !isDark ? 'rotate(180deg) scale(1)' : 'rotate(0deg) scale(0.3)',
            opacity: !isDark ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* Sun center circle */}
          <circle
            cx="12"
            cy="12"
            r="3.5"
            fill="currentColor"
          />

          {/* Sun rays - 8 rays with visible rotation */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const radians = (angle * Math.PI) / 180;
            const innerRadius = 5.5;
            const outerRadius = 8.5;
            const x1 = 12 + Math.cos(radians) * innerRadius;
            const y1 = 12 + Math.sin(radians) * innerRadius;
            const x2 = 12 + Math.cos(radians) * outerRadius;
            const y2 = 12 + Math.sin(radians) * outerRadius;

            return (
              <line
                key={angle}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<'button'> {
  duration?: number;
  onToggle?: () => void;
}

/**
 * AnimatedThemeToggler Component
 *
 * Professional theme toggle with:
 * - Smooth SVG morphing animation (moon ↔ sun)
 * - View Transition API for page-wide effect
 * - Circular reveal animation from click point
 * - Glow effects and hover states
 * - Accessible with ARIA labels
 *
 * @component
 */
export const AnimatedThemeToggler = ({
  className,
  duration = 700,
  onToggle,
  ...props
}: AnimatedThemeTogglerProps) => {
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current || isAnimating) return;

    setIsAnimating(true);

    // Start the icon animation immediately
    const newTheme = !isDark;

    // Use View Transition API if available
    if ('startViewTransition' in document) {
      await (document as any).startViewTransition(() => {
        flushSync(() => {
          setIsDark(newTheme);
          document.documentElement.classList.toggle('dark');
          localStorage.setItem('theme', newTheme ? 'dark' : 'light');
          onToggle?.();
        });
      }).ready;

      // Circular reveal animation from button position
      const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const maxRadius = Math.hypot(
        Math.max(left, window.innerWidth - left),
        Math.max(top, window.innerHeight - top),
      );

      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
        },
        {
          duration,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    } else {
      // Fallback for browsers without View Transition API
      setIsDark(newTheme);
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      onToggle?.();
    }

    setTimeout(() => setIsAnimating(false), duration);
  }, [isDark, duration, onToggle, isAnimating]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleTheme}
        disabled={isAnimating}
        className={cn(
          'relative inline-flex items-center justify-center',
          'w-9 h-9 rounded-lg',
          'transition-all duration-300 ease-out',
          'hover:scale-110 hover:rotate-12',
          'active:scale-95',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className,
        )}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        {...props}
      >
        {/* Ambient glow effect */}
        <div
          className={cn(
            'absolute inset-0 rounded-lg blur-lg transition-all duration-700',
            isDark
              ? 'bg-primary/30 opacity-100 scale-100'
              : 'bg-accent/30 opacity-100 scale-100',
          )}
          style={{
            animation: 'glowPulse 3s ease-in-out infinite',
          }}
        />

        {/* Icon with visible rotation */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{
            transform: isDark ? 'rotate(360deg)' : 'rotate(0deg)',
            transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <MorphingIcon isDark={isDark} />
        </div>

        <span className="sr-only">
          {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        </span>
      </button>

      {/* CSS Animations */}
      <style>{`
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
      `}</style>
    </>
  );
};
