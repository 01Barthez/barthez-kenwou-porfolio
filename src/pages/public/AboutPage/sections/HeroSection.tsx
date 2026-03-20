import { RetroGrid } from '@/shared/ui/retro-grid';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="text-center relative mb-16 animate-fade-in">
      <div className="">
        <h1 className="section-title">
          <span className="gradient-text">{t('about.title')}</span>
        </h1>

        <p className="section-subtitle">{t('about.subtitle')}</p>
      </div>

      <RetroGrid className='md:-mt-16 -mt-24' />
    </section>
  );
};
