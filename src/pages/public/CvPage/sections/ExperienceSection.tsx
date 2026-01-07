import { CVExperienceCard, IExperience } from '@/entities/experiences';
import { experiences } from '@/entities/experiences/api/mocks/experiences.mocks';
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
        {experiences.map((experience: IExperience, index: number) => (
          <CVExperienceCard
            key={index + experience.titleFr}
            Experience={experience}
          />
        ))}
      </div>
    </section>
  );
};
