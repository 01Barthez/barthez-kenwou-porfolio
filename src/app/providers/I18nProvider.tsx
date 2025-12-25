import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/shared/lib/i18n';
import { useLanguageStore } from '@/shared/state/useLanguageStore';

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const { language } = useLanguageStore();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
