import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react';
import { GraduationCap } from 'lucide-react';
import { education, EducationCard, IEducation } from '@/entities/education';

export const EducationSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="glass rounded-2xl p-8 border border-border animate-fade-in">
      {/* title */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-accent/10">
          <GraduationCap className="h-6 w-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          {language === 'fr' ? 'Formation' : 'Education'}
        </h3>
      </div>

      {/* content */}
      <div className="space-y-4">
        {
          education.map((edu: IEducation, index: number) => (
            <EducationCard key={index * 3} Education={edu} />
          ))
        }
      </div>
    </section>
  );
};
