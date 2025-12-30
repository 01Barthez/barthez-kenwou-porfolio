import React from 'react';
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-16 animate-fade-in">
      <h1 className="section-title">
        <span className="gradient-text">{t('about.title')}</span>
      </h1>

      <p className="section-subtitle">{t('about.subtitle')}</p>
    </div>
  );
};
