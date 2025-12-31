import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react';
import { Briefcase } from 'lucide-react';
import { experiences } from '@/shared/mocks/experiences.mocks';

export const ExperienceSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="glass rounded-2xl p-8 border border-border animate-fade-in">
      {/* title */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary/10">
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          {language === 'fr' ? 'Expérience Professionnelle' : 'Professional Experience'}
        </h3>
      </div>

      {/* content */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-6 pb-6 border-l-2 border-border nth-[2n-1]:pb-0 nth-[2n-1]:border-l-primary pr-6 border-r-2 nth-[2n]:border-r-primary"
          >
            <div className="absolute -left-2.25 top-0 h-4 w-4 rounded-full bg-primary" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h4 className="font-semibold text-foreground">
                {language === 'fr' ? exp.titleFr : exp.titleEn}
              </h4>
              <span className="text-sm text-primary font-mono">{exp.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              {language === 'fr' ? exp.companyFr : exp.companyEn}
            </p>
            <p className="text-muted-foreground">
              {language === 'fr' ? exp.descriptionFr : exp.descriptionEn}
            </p>

            <div className="absolute -right-2 -top-1.5 h-4 w-4 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </section>
  );
};
