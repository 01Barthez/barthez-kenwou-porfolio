import React from 'react';
import { IProject } from '@/entities/projets/model/project.types';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Trophy, Activity, TrendingUp, AlertTriangle, ShieldAlert, BarChart3 } from 'lucide-react';

export const ImpactSection: React.FC<{ project: IProject }> = ({ project }) => {
  const { language } = useLanguageStore();
  
  const impacts = language === 'fr' ? project.impactFr : project.impactEn;
  const challenges = language === 'fr' ? project.challengesFr : project.challengesEn;
  const metrics = project.metrics;

  const hasImpacts = impacts && impacts.length > 0;
  const hasChallenges = challenges && challenges.length > 0;
  const hasMetrics = metrics && Object.keys(metrics).length > 0;

  if (!hasImpacts && !hasChallenges && !hasMetrics) return null;

  const impactIcons = [Trophy, TrendingUp, Activity];
  const challengeIcons = [AlertTriangle, ShieldAlert];

  return (
    <section className="mb-16 px-4 md:px-10 lg:px-14 animate-fade-in-up space-y-12">
      
      {/* Challenges & Impacts */}
      <div className="grid lg:grid-cols-2 gap-10">
        
        {/* Challenges */}
        {hasChallenges && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                {language === 'fr' ? 'Défis Rencontrés' : 'Challenges Faced'}
              </h2>
              <div className="h-[1px] flex-grow bg-border/50"></div>
            </div>
            <div className="space-y-3">
              {challenges.map((challenge, idx) => {
                const Icon = challengeIcons[idx % challengeIcons.length];
                return (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10 hover:border-destructive/30 transition-colors">
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-destructive/70" />
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                      {challenge}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Impacts */}
        {hasImpacts && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                {language === 'fr' ? 'Impact & Résultats' : 'Impact & Results'}
              </h2>
              <div className="h-[1px] flex-grow bg-border/50"></div>
            </div>
            <div className="space-y-3">
              {impacts.map((impact, idx) => {
                const Icon = impactIcons[idx % impactIcons.length];
                return (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors group">
                    <div className="flex-shrink-0 mt-1 p-1 bg-primary/10 rounded-full group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                      {impact}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Metrics */}
      {hasMetrics && (
        <div className="bg-secondary/20 border border-border/40 rounded-3xl p-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <BarChart3 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground text-center">
              {language === 'fr' ? 'Métriques Clés' : 'Key Metrics'}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {Object.entries(metrics).map(([key, value], idx) => (
              <div key={idx} className="flex flex-col items-center justify-center space-y-2 text-center w-32 md:w-40">
                <span className="text-3xl md:text-4xl font-black text-primary drop-shadow-sm">
                  {value}
                </span>
                <span className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {key}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
};
