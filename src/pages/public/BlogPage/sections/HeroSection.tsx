import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react';

export const HeroSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="text-center mb-12 animate-fade-in">
      <h1 className="section-title">
        <span className="gradient-text">Blog</span>
      </h1>
      <p className="section-subtitle max-w-2xl mx-auto">
        {language === 'fr'
          ? 'Articles, tutoriels et réflexions sur le développement, le cloud et le DevOps'
          : 'Articles, tutorials and thoughts on development, cloud and DevOps'}
      </p>
    </section>
  );
};
