import React from 'react';
import { IProject } from '@/entities/projets/model/project.types';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Calendar, Clock, Users, Zap, Briefcase } from 'lucide-react';

export const ProjectOverviewSection: React.FC<{ project: IProject }> = ({ project }) => {
  const { language } = useLanguageStore();
  const fullDescription = language === 'fr' ? project.fullDescriptionFr : project.fullDescriptionEn;
  const businessContext = language === 'fr' ? project.businessContextFr : project.businessContextEn;

  const stats = [
    { icon: Clock, label: language === 'fr' ? 'Durée' : 'Duration', value: project.duration },
    { icon: Calendar, label: 'Date', value: project.date },
    ...(project.teamSize ? [{ icon: Users, label: language === 'fr' ? 'Équipe' : 'Team Size', value: `${project.teamSize} person(s)` }] : []),
    { icon: Zap, label: 'Complexité', value: project.complexity },
    { icon: Briefcase, label: 'Rôle', value: project.role },
  ];

  return (
    <section className="mb-16 px-4 md:px-10 lg:px-14 animate-fade-in-up">
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

        {/* Right Column: Full Description & Context */}
        <div className="lg:col-span-2 space-y-8">
          {fullDescription && (
            <div>
              <h2 className="text-2xl font-bold mb-5 text-foreground flex items-center gap-3">
                <span className="w-6 h-1 bg-primary rounded-full"></span>
                {language === 'fr' ? 'Aperçu du projet' : 'Project Overview'}
              </h2>
              <div className="text-muted-foreground leading-relaxed text-sm md:text-base whitespace-pre-line">
                {fullDescription}
              </div>
            </div>
          )}

          {businessContext && (
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                {language === 'fr' ? 'Contexte Métier' : 'Business Context'}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base italic leading-relaxed">
                "{businessContext}"
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
