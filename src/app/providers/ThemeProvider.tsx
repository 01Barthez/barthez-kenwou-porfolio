import React, { createContext, useContext, useEffect } from 'react';
import { useThemeStore } from '../../shared/state/useThemeStore';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const setTheme = useThemeStore((s) => s.setTheme);

  // On first mount, prefer persisted theme, otherwise use browser preference.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storageKey = 'frontend-starter-theme';
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        // Zustand persist stores a serialized state object by default.
        const parsed = JSON.parse(raw);
        // parsed may be the state object { theme: 'dark' }
        if (parsed && typeof parsed === 'object' && 'theme' in parsed) {
          const t = parsed.theme as Theme;
          setTheme(t);
          document.documentElement.classList.toggle('dark', t === 'dark');
          return;
        }
      }
    } catch (e) {
      // ignore parse errors and fall back to media query
    }

    // fallback: use browser preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = prefersDark ? 'dark' : 'light';
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep document class in sync with store changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const value: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
