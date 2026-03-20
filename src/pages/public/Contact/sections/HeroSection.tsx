import React from 'react';
import { useTranslation } from 'react-i18next';
import { Ripple } from '@/shared/ui/ripple';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-12 md:py-16 mb-12 flex flex-col items-center justify-center animate-fade-in overflow-hidden">
      {/* Original MagicUI Ripple */}
      <Ripple />
      
      {/* Clean Text Content */}
      <div className="relative z-10 text-center px-4 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
          <span className="gradient-text drop-shadow-sm">{t('contact.title')}</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium drop-shadow-sm">
          {t('contact.subtitle')}
        </p>
      </div>
    </section>
  );
};
