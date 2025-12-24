import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '../Button/Button.ui';
import { useThemeStore } from '../../state/useThemeStore';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const theme = useThemeStore((s) => s.theme);
  const toggle = useThemeStore((s) => s.toggleTheme);

  return (
    <div className={className}>
      <Button
        size="icon"
        variant="ghost"
        aria-label="Toggle theme"
        onClick={() => toggle()}
        title="Toggle theme"
      >
        {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </Button>
    </div>
  );
};

export default ThemeToggle;
