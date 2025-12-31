import { filters } from '@/shared/constants/filter.const';
import { skillsData } from '@/shared/mocks/skillsData.mocks';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-card group"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{skill.icon}</span>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
            </div>

            <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-linear-to-r from-primary to-accent rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            <div className="flex justify-between mt-2">
              <span className="text-xs text-muted-foreground capitalize">{skill.category}</span>
              <span className="text-xs font-mono text-primary">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
