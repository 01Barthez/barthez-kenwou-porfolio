'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '@/shared/state/useThemeStore';
import { cn } from '@/shared/lib';

type GradientDotsProps = React.ComponentProps<typeof motion.div> & {
  dotSize?: number;
  spacing?: number;
  duration?: number;
  colorCycleDuration?: number;
  backgroundColor?: string;
};

/**
 * Animated dotted gradient field for CTA sections.
 * Theme-aware amethyst washes — visible pulse, no rainbow hue-rotate.
 */
export function GradientDots({
  dotSize = 7,
  spacing = 11,
  duration = 22,
  colorCycleDuration = 5,
  backgroundColor,
  className,
  ...props
}: GradientDotsProps) {
  const theme = useThemeStore((s) => s.theme);
  const isDark = theme === 'dark';
  const hexSpacing = spacing * 1.732;

  const bg = backgroundColor ?? (isDark ? 'hsl(270 22% 4%)' : 'hsl(270 35% 97%)');
  const a = isDark ? '#5b3a8c' : '#8b5cf6';
  const b = isDark ? '#2a1548' : '#c4b5fd';
  const c = isDark ? '#4b2a78' : '#7c3aed';
  const d = isDark ? '#1a0f2e' : '#a78bfa';

  return (
    <motion.div
      className={cn('absolute inset-0', className)}
      style={{
        backgroundColor: bg,
        backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${bg} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${bg} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, ${a}, transparent 58%),
          radial-gradient(circle at 50% 50%, ${b}, transparent 55%),
          radial-gradient(circle at 50% 50%, ${c}, transparent 60%),
          radial-gradient(ellipse at 50% 50%, ${d}, transparent 55%)
        `,
        backgroundSize: `
          ${spacing}px ${hexSpacing}px,
          ${spacing}px ${hexSpacing}px,
          200% 200%,
          200% 200%,
          200% 200%,
          200% ${hexSpacing}px
        `,
        backgroundPosition: `
          0px 0px, ${spacing / 2}px ${hexSpacing / 2}px,
          0% 0%,
          0% 0%,
          0% 0%,
          0% 0px
        `,
      }}
      animate={{
        backgroundPosition: [
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 800% 400%, 1000% -400%, -1200% -600%, 400% ${hexSpacing}px`,
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
        ],
        opacity: [0.85, 1, 0.85],
      }}
      transition={{
        backgroundPosition: {
          duration,
          ease: 'linear',
          repeat: Number.POSITIVE_INFINITY,
        },
        opacity: {
          duration: colorCycleDuration,
          ease: 'easeInOut',
          repeat: Number.POSITIVE_INFINITY,
        },
      }}
      {...props}
    />
  );
}
