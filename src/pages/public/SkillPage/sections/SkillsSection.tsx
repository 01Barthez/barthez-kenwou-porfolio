import { skillsByCategory, skillsData, imageIcon } from '@/entities/skills/api/mocks/skillsData.mocks';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SkillCard } from '@/entities/skills/ui/SkillCard.ui';
import { IconCloud } from '@/shared/ui/icon-cloud';

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredSkills =
    activeFilter === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);
  const { t } = useTranslation();

  const filters = [
    { id: 'all', labelKey: 'all' },
    ...Object.keys(skillsByCategory).map(category => ({
      id: category,
      labelKey: `${category}`
    }))
  ];

  return (
    <section className="relative w-full py-10 max-w-7xl mx-auto px-6">

      {/* Top Horizontal Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-3 py-1 cursor-pointer rounded-sm font-medium text-sm md:text-base transition-all duration-300 border ${activeFilter === filter.id
              ? 'bg-primary/90 border-primary text-primary-foreground shadow-[0_0_15px_rgba(59,130,246,0.5)]'
              : 'bg-secondary/50 border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50'
              }`}
          >
            {t(filter.labelKey)}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column: Progressive Filters */}
        <div className="hidden md:block w-full md:w-1/4 lg:w-1/4 flex-shrink-0">
          <div className="sticky top-28 flex flex-col gap-2 p-3 rounded-lg bg-card/30 backdrop-blur-md border border-border/50 shadow-xl overflow-hidden isolate relative">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-3xl rounded-xs -z-10" />

            <div className="flex flex-col gap-1 relative">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative px-5 py-2.5 text-left w-full rounded-sm font-medium transition-all duration-300 overflow-hidden group ${activeFilter === filter.id
                    ? 'text-primary-foreground shadow-lg scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                >
                  {/* Active Background Glow */}
                  {activeFilter === filter.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90 z-0" />
                  )}

                  <span className="relative z-10 flex items-center justify-between text-sm uppercase tracking-wider font-bold">
                    {t(filter.labelKey)}
                    {activeFilter === filter.id && (
                      <span className="w-2 h-2 rounded-full bg-white opacity-90 shadow-[0_0_10px_white] animate-pulse" />
                    )}
                  </span>

                  {/* Hover line indicator */}
                  {activeFilter !== filter.id && (
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary/50 translate-x-[-4px] group-hover:translate-x-0 transition-transform rounded-r-md" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Skill Cards Grid */}
        <div className="flex-1 pt-6 md:pt-0">
          {activeFilter === 'all' ? (
            <div className="flex justify-center items-center w-full min-h-[400px] mb-0 animate-fade-in">
              <IconCloud images={imageIcon} />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-20 animate-fade-in">
              {filteredSkills.map((skill) => (
                <SkillCard key={skill.name} Skill={skill} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
