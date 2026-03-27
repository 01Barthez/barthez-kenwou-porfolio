import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react';
import { Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="relative w-full py-8 lg:py-6 mb-10 md:mb-20 overflow-hidden rounded-3xl glass border border-white/10 dark:border-white/5 bg-gradient-to-b from-background/50 to-secondary/10 shadow-2xl flex flex-col items-center justify-center animate-fade-in">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Premium Badge */}
      <div className="relative z-10 flex items-center justify-center mb-6">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/30 bg-primary/5 text-primary text-xs font-semibold tracking-wide uppercase shadow-sm">
          <span>{language === 'fr' ? 'Expertise & Solutions' : 'Expertise & Solutions'}</span>
        </div>
      </div>

      {/* Main Title */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
        <h1 className="section-title mb-4 drop-shadow-sm">
          {language === 'fr' ? 'Mes ' : 'My '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-blue-500">
            Services
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="section-subtitle max-w-2xl mx-auto drop-shadow-sm">
          {language === 'fr'
            ? 'Des solutions technologiques de pointe architecturées pour transformer vos idées les plus ambitieuses en réalité.'
            : 'Cutting-edge technological solutions architected to transform your most ambitious ideas into reality.'}
        </p>
      </div>

      {/* Decorative Bottom Accent Line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};
