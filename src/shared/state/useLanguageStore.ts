import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'fr' | 'en';

type LanguageState = {
  language: Language;
  toggleLanguage: () => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'fr',
      toggleLanguage: () => set((state) => ({ language: state.language === 'fr' ? 'en' : 'fr' })),
    }),
    {
      name: 'language-storage',
    },
  ),
);
