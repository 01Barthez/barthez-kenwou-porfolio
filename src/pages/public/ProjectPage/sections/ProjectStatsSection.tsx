import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Zap, Cloud, GitBranch } from 'lucide-react';

import { IconCloud } from '@/shared/ui/icon-cloud';
import { imageIcon } from '@/entities/skills/api/mocks/skillsData.mocks';

// ─── Metric Item ────────────────────────────────────────────────────────────────

interface MetricProps {
  icon: React.ElementType;
  value: string;
  label: string;
  delay?: number;
}

const Metric: React.FC<MetricProps> = ({ icon: Icon, value, label, delay = 0 }) => (
  <div 
    className="flex flex-col items-center p-2 rounded-lg bg-secondary/20 border border-border/40 backdrop-blur-sm animate-in fade-in zoom-in duration-700 fill-mode-backwards"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="p-2 rounded-sm bg-primary/10 text-primary mb-2">
      <Icon className="h-4 w-4" />
    </div>

    <span className="text-lg font-bold text-foreground tracking-tight">{value}</span>
    
    <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-[0.15em] mt-1 text-center">
      {label}
    </span>
  </div>
);

// ─── Component ──────────────────────────────────────────────────────────────────

interface ProjectStatsSectionProps {
  isVisible: boolean;
}

export const ProjectStatsSection: React.FC<ProjectStatsSectionProps> = ({ isVisible }) => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  if (!isVisible) return null;

  const metrics = [
    {
      icon: Users,
      value: '+1,000',
      label: isFr ? 'Utilisateurs' : 'Users',
      delay: 100,
    },
    {
      icon: Zap,
      value: '+15%',
      label: isFr ? 'Performance' : 'Performance',
      delay: 200,
    },
    {
      icon: Cloud,
      value: '10+',
      label: isFr ? 'Projets Cloud' : 'Cloud Projects',
      delay: 300,
    },
    {
      icon: GitBranch,
      value: '10+',
      label: isFr ? 'Pipelines CI/CD' : 'CI/CD Pipelines',
      delay: 400,
    },
  ];

  return (
    <section className="grid lg:grid-cols-2 gap-12 items-center py-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Left: Global Stack (IconCloud) */}
      <div className="relative group">
        <div className="absolute -inset-4 bg-primary/5 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="relative flex justify-center items-center w-full min-h-[400px]">
          <IconCloud images={imageIcon} />
        </div>
      </div>

      {/* Right: Metrics Grid */}
      <div className="space-y-6">
        <div className="space-y-2 text-center lg:text-left">
          <h2 className="section-title">
            <span className="gradient-text text-2xl md:text-3xl">
              {isFr ? 'Impact & Expertise Globale' : 'Global Impact & Expertise'}
            </span>
          </h2>
          <p className="section-subtitle !mb-0">
            {isFr 
              ? "Des solutions robustes déployées à l'échelle, alliant performance et automatisation."
              : "Robust solutions deployed at scale, combining performance and automation."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric) => (
            <Metric key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
};
