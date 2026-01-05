import { useCallback, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

import { cn } from '@/shared/lib/utils';

/**
 * MorphingIcon Component - Advanced SVG morphing animation
 *
 * Creates a smooth, professional transition between moon and sun icons
 * - Moon → Sun: Crescent morphs and rotates, rays appear sequentially
 * - Sun → Moon: Rays retract, shape morphs back to crescent
 * - Uses CSS animations for performance
 * - Includes glow effects and rotation
 *
 * @component
 */
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
        {/* Main morphing shape */}
        <g
          className={cn('transition-all duration-700 ease-out origin-center')}
          style={{
            transform: isDark ? 'rotate(360deg)' : 'rotate(0deg)',
          }}
        >
          {/* Moon crescent (dark mode) */}
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            fill="currentColor"
            className={cn(
              'transition-all duration-700 ease-out origin-center',
              isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-50',
            )}
            style={{
              transformOrigin: 'center',
            }}
          />

          {/* Sun circle (light mode) */}
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="currentColor"
            className={cn(
              'transition-all duration-700 ease-out origin-center',
              !isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-50',
            )}
          />

          {/* Sun rays (light mode) - 8 rays with staggered animation */}
          {!isDark &&
            [0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
              const radians = (angle * Math.PI) / 180;
              const innerRadius = 6;
              const outerRadius = 9;
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="origin-center"
                  style={{
                    transformOrigin: `${x1}px ${y1}px`,
                    animation: `rayExpand 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.04}s both`,
                  }}
                />
              );
            })}
        </g>

        {/* Moon crater/shadow effect */}
        {isDark && (
          <g
            className="origin-center"
            style={{
              animation: 'craterAppear 0.8s ease-out 0.3s both',
            }}
          >
            <circle cx="15" cy="10" r="1.5" fill="currentColor" opacity="0.3" />
            <circle cx="13" cy="14" r="1" fill="currentColor" opacity="0.2" />
          </g>
        )}
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

        {/* Icon with rotation container */}
        <div
          className={cn(
            'relative z-10 flex items-center justify-center',
            'transition-transform duration-700 ease-out',
          )}
          style={{
            transform: isDark ? 'rotate(180deg)' : 'rotate(0deg)',
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
        @keyframes rayExpand {
          0% {
            opacity: 0;
            stroke-dasharray: 0 10;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            stroke-dasharray: 10 0;
            transform: scale(1.3);
          }
          100% {
            opacity: 1;
            stroke-dasharray: 10 0;
            transform: scale(1);
          }
        }

        @keyframes craterAppear {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
      `}</style>
    </>
  );
};
