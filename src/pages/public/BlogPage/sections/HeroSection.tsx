import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { RetroGrid } from '@/shared/ui/retro-grid';
import React from 'react';

export const HeroSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="text-center relative z-0 mb-24 pt-36 animate-fade-in">
      <div className="mb-10">
        <h1 className="section-title">
          <span className="gradient-text">
            Blog
          </span>
        </h1>

        <p className="section-subtitle">
          {language === 'fr'
            ? 'Articles, tutoriels et réflexions sur le développement, le cloud et le DevOps'
            : 'Articles, tutorials and thoughts on development, cloud and DevOps'}
        </p>
      </div>

      <RetroGrid className='md:-mt-16 -mt-20' />
    </section>

  );
};
