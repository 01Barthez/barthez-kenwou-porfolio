import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { cn } from '@/shared/lib/utils';
import { IProject } from '../model/project.types';

interface FeaturedProjectCardProps {
  project: IProject;
  className?: string;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project, className }) => {
  const { language } = useLanguageStore();
  const { t } = useTranslation();

  const title = language === 'fr' ? project.titleFr : project.titleEn;
  const description = language === 'fr' ? project.descriptionFr : project.descriptionEn;

  return (
    <div
      className={cn(
        'group relative flex flex-col md:flex-row w-[320px] md:w-[550px] h-auto md:h-[210px] bg-secondary/10 backdrop-blur-xl border border-border/40 rounded-lg overflow-hidden hover:border-primary/40 hover:bg-secondary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5',
        className,
      )}
    >
      {/* ── Left: Image Section ────────────────────────────────────────────── */}
      <div className="w-full md:w-[45%] h-48 md:h-full relative overflow-hidden">
        <img
          src={project.images[0]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest border border-border/50 text-foreground/80">
            {project.category}
          </span>
        </div>
      </div>

      {/* ── Right: Content Section ─────────────────────────────────────────── */}
      <div className="w-full md:w-[55%] p-6 flex flex-col justify-between relative">
        <div className="space-y-3">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-bold uppercase tracking-wide text-primary/80 bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-lg  font-black text-foreground tracking-tight line-clamp-1 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2 font-medium">
            {description}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-1 border-t border-border/30 mt-auto">
          <div className="flex items-center gap-2">
            {project.github && project.github !== '#' && (
              <Link
                to={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300 border border-border/50"
                title={t('projects.code')}
              >
                <Github size={14} strokeWidth={2.5} />
              </Link>
            )}
            {project.demo && project.demo !== '#' && (
              <Link
                to={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300 border border-border/50"
                title={t('projects.demo')}
              >
                <ExternalLink size={14} strokeWidth={2.5} />
              </Link>
            )}
          </div>

          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary/80 transition-all group/btn"
          >
            {t('projects.details')}
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
              strokeWidth={3}
            />
          </Link>
        </div>
      </div>
      
      {/* Subtle Glow Effect on Hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
    </div>
  );
};
