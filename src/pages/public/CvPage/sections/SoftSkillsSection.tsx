import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { HeartHandshake } from 'lucide-react';
import { ISkill } from '@/entities/skills';

interface SoftSkillsProps {
  softSkills: ISkill[];
}

export const SoftSkillsSection: React.FC<SoftSkillsProps> = ({ softSkills }) => {
  const { language } = useLanguageStore();

  if (!softSkills || softSkills.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
        <div className="p-2 rounded-lg bg-green-500/10">
          <HeartHandshake className="h-5 w-5 text-green-500" />
        </div>
        {language === 'fr' ? 'Compétences Comportementales' : 'Soft Skills'}
      </h2>

      <div className="flex flex-wrap gap-2">
        {softSkills.map((skill) => (
          <div
            key={skill.name}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border shadow-sm"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};
