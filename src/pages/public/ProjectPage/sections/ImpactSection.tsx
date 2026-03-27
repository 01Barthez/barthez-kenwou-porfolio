import React from 'react';
import { IProject } from '@/entities/projets/model/project.types';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Trophy, ArrowRight, Activity, TrendingUp } from 'lucide-react';

export const ImpactSection: React.FC<{ project: IProject }> = ({ project }) => {
  const { language } = useLanguageStore();
  const impacts = language === 'fr' ? project.impactFr : project.impactEn;

  if (!impacts || impacts.length === 0) return null;

  const icons = [Trophy, TrendingUp, Activity];

  return (
    <section className="mb-16 animate-fade-in-up">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-foreground">
          {language === 'fr' ? 'Impact & Réalisations' : 'Impact & Achievements'}
        </h2>
        <div className="h-[1px] flex-grow bg-border/50"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {impacts.map((impact, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div 
              key={idx} 
              className="group p-5 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-secondary/40 transition-all duration-300 shadow-sm flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                {impact}
              </p>
              <ArrowRight className="w-4 h-4 text-primary/0 group-hover:text-primary transition-colors mt-auto self-end" />
            </div>
          );
        })}
      </div>
    </section>
  );
};
