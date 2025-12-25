import React from 'react';
import { useThemeStore } from '@/shared/state/useThemeStore';
import { AnimatedThemeToggler } from '../animated-theme-toggler';

export const ThemeToggle: React.FC<{ className?: string }> = () => {
  const toggle = useThemeStore((s) => s.toggleTheme);

  return (
    <AnimatedThemeToggler
      aria-label="Toggle theme"
      onToggle={toggle}
      title="Toggle theme"
      duration={700}
    />
  );
};
