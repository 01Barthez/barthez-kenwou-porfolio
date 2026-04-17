import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { RetroGrid } from '@/shared/ui/retro-grid';
import React from 'react';

export const HeroSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="text-center relative mb-16 pt-40 animate-fade-in">
      {/* Premium Badge */}
      <div className="relative z-10 flex items-center justify-center mb-2">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/30 bg-primary/5 text-primary text-xs font-semibold tracking-wide uppercase shadow-sm">
          <span>{language === 'fr' ? 'Expertise & Solutions' : 'Expertise & Solutions'}</span>
        </div>
      </div>

      <h1 className="section-title">
        {language === 'fr' ? 'Mes ' : 'My '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-blue-500">
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
