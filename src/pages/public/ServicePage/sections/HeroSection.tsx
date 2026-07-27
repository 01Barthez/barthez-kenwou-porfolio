import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { RetroGrid } from '@/shared/ui/retro-grid';
import React from 'react';

export const HeroSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="text-center relative mb-12 md:mb-16 pt-32 lg:pt-40 animate-fade-in px-4 md:px-10 lg:px-14">
      <h1 className="section-title">
        {language === 'fr' ? 'Mes ' : 'My '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground">
          Services
        </span>
      </h1>

      <p className="section-subtitle">
        {language === 'fr'
          ? 'Des solutions technologiques de pointe architecturées pour transformer vos idées les plus ambitieuses en réalité.'
          : 'Cutting-edge technological solutions architected to transform your most ambitious ideas into reality.'}
      </p>

      <RetroGrid className='md:-mt-16 -mt-20' />
    </section>
  );
};
