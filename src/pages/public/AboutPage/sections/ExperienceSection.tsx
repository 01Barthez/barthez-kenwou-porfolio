import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react';
import { Briefcase } from 'lucide-react';
import { experiences } from '@/entities/experiences/api/mocks/experiences.mocks';
import { ExperienceCard } from '@/entities/experiences/ui/ExperienceCard';


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
        {
          experiences.map((exp, index) => (
            <ExperienceCard
              key={index * 99}
              Experience={exp}
            />
          ))
        }
      </div>
    </section>
  );
};
