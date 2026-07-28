import { RetroGrid } from '@/shared/ui/retro-grid';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="text-center relative mb-16 pt-24 animate-fade-in">
      <div className="">
        <h1 className="section-title">
          <span className="gradient-text">{t('projects.title')}</span>
        </h1>

        <p className="section-subtitle">{t('projects.subtitle')}</p>
      </div>

      <RetroGrid />
    </section>

  );
};
