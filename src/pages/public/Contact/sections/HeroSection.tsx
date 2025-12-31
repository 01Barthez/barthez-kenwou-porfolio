import React from 'react';
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="text-center mb-12 animate-fade-in">
      <h1 className="section-title">
        <span className="gradient-text">{t('contact.title')}</span>
      </h1>
      <p className="section-subtitle">{t('contact.subtitle')}</p>
    </section>
  );
};
