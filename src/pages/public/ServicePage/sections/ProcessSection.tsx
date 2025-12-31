import { processSteps } from '@/shared/mocks/processSteps.mocks';
import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';

export const ProcessSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {language === 'fr' ? 'Mon Processus de Travail' : 'My Work Process'}
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="text-center p-6 rounded-2xl bg-secondary/30">
              <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {language === 'fr' ? step.titleFr : step.titleEn}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'fr' ? step.descFr : step.descEn}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
