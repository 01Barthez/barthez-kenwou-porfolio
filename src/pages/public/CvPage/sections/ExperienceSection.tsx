import { experiences } from '@/shared/mocks/experiences.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Briefcase } from 'lucide-react';
import React from 'react';

export const ExperienceSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section>
      <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
        <div className="p-2 rounded-lg bg-primary/10">
          <Briefcase className="h-5 w-5 text-primary" />
        </div>
        {language === 'fr' ? 'Expérience Professionnelle' : 'Professional Experience'}
      </h2>

      {/* Experience content */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-primary/30 pl-4 ml-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="font-semibold text-foreground">
                {language === 'fr' ? exp.titleFr : exp.titleEn}
              </h3>
              <span className="text-sm font-mono text-primary">{exp.period}</span>
            </div>
            <p className="text-muted-foreground text-sm mb-2">
              {language === 'fr' ? exp.companyFr : exp.companyEn}
            </p>

            <ul className="list-disc list-inside space-y-1">
              {(language === 'fr' ? exp.descriptionFr : exp.descriptionEn).map((desc, i) => (
                <li key={i} className="text-sm text-muted-foreground">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
