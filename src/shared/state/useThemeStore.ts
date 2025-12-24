import { createAppStore } from './createStore';

export type Theme = 'light' | 'dark';

export type ThemeState = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

// Use the app store factory: enable devtools in non-prod and persist the theme
export const useThemeStore = createAppStore<ThemeState>(
  (set, get) => ({
    theme: 'light',
    setTheme: (t: Theme) => set({ theme: t }),
    toggleTheme: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
  }),
  {
    name: 'frontend-starter-theme',
    enableDevtools: process.env.NODE_ENV !== 'production',
    enablePersist: true,
  },
);
