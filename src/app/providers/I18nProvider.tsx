import React from 'react';
// TODO: Installer et configurer react-i18next
// import { I18nextProvider } from 'react-i18next';
// import i18n from '@/shared/lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  // TODO: Configurer i18next avec les langues supportées
  return (
    // <I18nextProvider i18n={i18n}>
    <>{children}</>
    // </I18nextProvider>
  );
};
