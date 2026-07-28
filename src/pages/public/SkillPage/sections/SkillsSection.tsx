import { skillsByCategory, skillsData, imageIcon } from '@/entities/skills/api/mocks/skillsData.mocks';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SkillCard } from '@/entities/skills/ui/SkillCard.ui';
import { IconCloud } from '@/shared/ui/icon-cloud';
import { DeferredMount } from '@/shared/ui/DeferredMount';

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
    <section className="relative w-full py-12 max-w-7xl mx-auto">

      {/* Top Horizontal Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-3 py-1 cursor-pointer capitalize rounded-sm font-medium text-sm md:text-base transition-all duration-300 border ${activeFilter === filter.id
              ? 'bg-primary/90 border-primary text-primary-foreground shadow-primary/20'
              : 'bg-secondary/50 border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50'
              }`}
          >
            {t(filter.labelKey)}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-10 lg:px-14">
        {/* Left Column: Progressive Filters */}
        <div className="hidden md:block w-full md:w-1/4 lg:w-1/4 flex-shrink-0">
          <div className="sticky top-28 flex flex-col gap-2 p-3 rounded-sm bg-card/30 backdrop-blur-md border border-border/50 shadow-md overflow-hidden isolate relative">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-3xl rounded-xs -z-10" />

            <div className="flex flex-col gap-1 relative">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative px-2 py-1.5 text-left w-full rounded-sm font-medium transition-all duration-300 overflow-hidden group ${activeFilter === filter.id
                    ? 'text-primary-foreground shadow-sm scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                >
                  {/* Active Background Glow */}
                  {activeFilter === filter.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 opacity-90 z-0" />
                  )}

                  <span className="relative z-10 flex items-center justify-between text-sm capitalize font-bold">
                    {t(filter.labelKey)}
                    {activeFilter === filter.id && (
                      <span className="w-2 h-2 rounded-full bg-white opacity-90 shadow-[0_0_2px_white] animate-pulse" />
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
            <div className="relative mx-auto mb-0 flex w-full max-w-[300px] items-center justify-center sm:max-w-[320px] lg:max-w-[340px] xl:max-w-[360px] min-h-[280px] sm:min-h-[300px] lg:min-h-[320px] animate-fade-in">
              {/* Soft depth haze — anchors the cloud into the frame */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl opacity-70"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl opacity-80"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_42%,hsl(var(--background)/0.55)_78%,hsl(var(--background)/0.85)_100%)]"
              />

              <DeferredMount
                className="relative z-10 w-full flex justify-center"
                timeout={700}
                fallback={<div className="aspect-square w-full" aria-hidden />}
              >
                <IconCloud images={imageIcon} size={360} className="w-full" />
              </DeferredMount>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-2 md:gap-6 mb-20 animate-fade-in">
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
