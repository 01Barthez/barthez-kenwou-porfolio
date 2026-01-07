import { filters } from '@/shared/constants/filter.const';
import { skillsData } from '@/entities/skills/api/mocks/skillsData.mocks';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SkillCard } from '@/entities/skills/ui/SkillCard.ui';

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredSkills =
    activeFilter === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);
  const { t } = useTranslation();

  return (
    <section>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-primary text-primary-foreground glow-primary'
                : 'bg-secondary text-muted-foreground hover:text-foreground'
            }`}
          >
            {t(filter.labelKey)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
        {filteredSkills.map((skill) => (
          <SkillCard 
          key={skill.name} 
          Skill={skill} 
          />
        ))}
      </div>
    </section>
  );
};
