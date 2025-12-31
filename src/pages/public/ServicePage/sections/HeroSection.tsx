import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react';

export const HeroSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <div className="text-center mb-16 animate-fade-in">
      <h1 className="section-title">
        <span className="gradient-text">{language === 'fr' ? 'Mes Services' : 'My Services'}</span>
      </h1>
      <p className="section-subtitle max-w-2xl mx-auto">
        {language === 'fr'
          ? 'Des solutions professionnelles pour transformer vos idées en réalité'
          : 'Professional solutions to transform your ideas into reality'}
      </p>
    </div>
  );
};
