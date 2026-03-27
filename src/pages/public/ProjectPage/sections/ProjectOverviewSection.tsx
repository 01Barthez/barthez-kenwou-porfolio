import React from 'react';
import { IProject } from '@/entities/projets/model/project.types';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Calendar, Clock, Users, Zap } from 'lucide-react';

export const ProjectOverviewSection: React.FC<{ project: IProject }> = ({ project }) => {
  const { language } = useLanguageStore();
  const fullDescription = language === 'fr' ? project.fullDescriptionFr : project.fullDescriptionEn;
  const duration = language === 'fr' ? project.duration : project.durationEn;

  const stats = [
    { icon: Clock, label: language === 'fr' ? 'Durée' : 'Duration', value: duration },
    { icon: Calendar, label: 'Date', value: project.date },
    { icon: Users, label: language === 'fr' ? 'Équipe' : 'Team Size', value: `${project.teamSize} person(s)` },
    { icon: Zap, label: 'Complexité', value: project.complexity },
  ];

  return (
    <section className="mb-16 animate-fade-in-up">
      <div className="grid lg:grid-cols-3 gap-12 items-start">
        
        {/* Left Column: Stats */}
        <div className="lg:col-span-1 bg-secondary/30 p-6 rounded-2xl border border-border/50 backdrop-blur-sm shadow-md">
          <h3 className="text-lg font-bold mb-5 text-foreground">
            {language === 'fr' ? 'Détails du projet' : 'Project Details'}
          </h3>
          <div className="flex flex-col gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <stat.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mb-0.5">{stat.label}</p>
                  <p className="text-xs font-bold text-foreground">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Full Description */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-5 text-foreground flex items-center gap-3">
            <span className="w-6 h-1 bg-primary rounded-full"></span>
            {language === 'fr' ? 'Aperçu du projet' : 'Project Overview'}
          </h2>
          <div className="text-muted-foreground leading-relaxed text-sm md:text-base whitespace-pre-line">
            {fullDescription}
          </div>
        </div>

      </div>
    </section>
  );
};
