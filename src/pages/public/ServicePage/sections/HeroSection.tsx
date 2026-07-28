import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { RetroGrid } from '@/shared/ui/retro-grid';
import React from 'react';

export const HeroSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="relative mb-16 animate-fade-in pt-16 text-center">
      <div>
        <h1 className="section-title">
          {language === 'fr' ? 'Mes ' : 'My '}
          <span className="gradient-text">Services</span>
        </h1>

        <p className="section-subtitle">
          {language === 'fr'
            ? 'Des solutions technologiques de pointe architecturées pour transformer vos idées les plus ambitieuses en réalité.'
            : 'Cutting-edge technological solutions architected to transform your most ambitious ideas into reality.'}
        </p>
      </div>

      <RetroGrid />
    </section>
  );
};
