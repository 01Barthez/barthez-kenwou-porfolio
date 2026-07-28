import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react';
import { education, EducationCard, IEducation } from '@/entities/education';
import { AboutSectionIcon } from './AboutSectionIcon';

export const EducationSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="glass rounded-md p-4 md:p-6 border border-border animate-fade-in">
      {/* title */}
      <div className="flex items-center gap-3 mb-6">
        <AboutSectionIcon variant="education" />
        <h3 className="cursor-default text-xl font-semibold text-foreground">
          {language === 'fr' ? 'Formation' : 'Education'}
        </h3>
      </div>

      {/* content */}
      <div className="space-y-1.5">
        {education.map((edu: IEducation, index: number) => (
          <EducationCard key={index * 3} Education={edu} />
        ))}
      </div>
    </section>
  );
};
