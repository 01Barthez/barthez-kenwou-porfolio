import React from 'react';
import { useTranslation } from 'react-i18next';
import { Ripple } from '@/shared/ui/ripple';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-10 md:py-14 mb-8 flex flex-col items-center justify-center animate-fade-in overflow-hidden">
      {/* Original MagicUI Ripple */}
      <Ripple />
      
      {/* Clean Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-4 w-full"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
          <span className="gradient-text drop-shadow-sm">{t('contact.title')}</span>
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto font-medium drop-shadow-sm opacity-80 italic">
          {t('contact.subtitle')}
        </p>
      </motion.div>
    </section>
  );
};
