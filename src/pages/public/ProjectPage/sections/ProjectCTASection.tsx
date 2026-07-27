import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { GradientDots } from '@/shared/ui/gradient-dots';

export const ProjectCTASection: React.FC = () => {
  const { language } = useLanguageStore();
  useTranslation();

  return (
    <section className="relative z-10 overflow-hidden rounded-lg border border-primary/25 shadow-[0_0_40px_-16px_hsla(268,52%,38%,0.35)]">
      <div className="absolute inset-0 z-0">
        <GradientDots duration={20} colorCycleDuration={4} />
      </div>
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-background/20 via-transparent to-background/35" />

      <div className="relative z-10 w-full mx-auto text-center p-5 sm:p-6 md:p-8">
        <div className="mx-auto max-w-xl rounded-md border border-border/40 bg-background/55 dark:bg-background/50 backdrop-blur-md px-4 py-5 sm:px-6 sm:py-6 shadow-sm">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3">
            {language === 'fr' ? 'Tu veux un projet aussi performant ?' : 'Want a project as powerful as these?'}
          </h2>

          <p className="text-muted-foreground mb-5 sm:mb-6 text-xs sm:text-sm leading-relaxed">
            {language === 'fr'
              ? 'Disponible pour missions & collaborations. Spécialisé en Cloud DevOps et Full-Stack JS.'
              : 'Available for missions & collaborations. Specialized in Cloud DevOps and Full-Stack JS.'}
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <Link
              to={contactsInfo.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:glow-primary"
            >
              <Github className="h-4 w-4" />
              <span>{language === 'fr' ? 'Voir plus sur GitHub' : 'More on GitHub'}</span>
            </Link>

            <div className="bg-card/80 border border-border/50 py-1.5 px-4 sm:px-6 rounded-md flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-muted-foreground items-center">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>{language === 'fr' ? 'Disponible immédiatement' : 'Available now'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                <span>{language === 'fr' ? 'Télétravail satisfaisant' : 'Remote Friendly'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
