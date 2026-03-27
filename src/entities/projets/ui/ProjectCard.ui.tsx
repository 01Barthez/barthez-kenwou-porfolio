import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Trophy,
  Layout,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import { Image } from '@/shared/ui/Image';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';

import type { IProject, ProjectComplexity } from '../model/project.types';
import { ProjectStatusBadge } from './ProjectStatusBadge.ui';
import { TechBadge } from './TechBadge.ui';

// ─── Constants ──────────────────────────────────────────────────────────────────

const COMPLEXITY_CONFIG: Record<ProjectComplexity, { icon: any; color: string }> = {
  Avancé: { icon: Zap, color: 'text-orange-500' },
  Intermédiaire: { icon: Layout, color: 'text-blue-500' },
  Débutant: { icon: Shield, color: 'text-emerald-500' },
};

// ─── Props ──────────────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: IProject;
  activeTechs?: string[];
  onTechClick?: (tag: string) => void;
}

// ─── Component ──────────────────────────────────────────────────────────────────

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  activeTechs = [],
  onTechClick,
}) => {
  const { language } = useLanguageStore();
  const { t } = useTranslation();

  const title = language === 'fr' ? project.titleFr : project.titleEn;
  const description = language === 'fr' ? project.descriptionFr : project.descriptionEn;
  const impacts = language === 'fr' ? project.impactFr : project.impactEn;
  const ComplexityIcon = COMPLEXITY_CONFIG[project.complexity].icon;

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const renderMedia = (media: string, isActive: boolean) => {
    if (!media) return null;
    const isVideo = media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.ogg');
    const baseClasses = "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110";
    if (isVideo) {
      return (
        <video
          src={media}
          autoPlay={isActive}
          loop
          muted
          playsInline
          className={baseClasses}
        />
      );
    }
    return <Image src={media} alt={title} className={baseClasses} />;
  };

  return (
    <article className="group relative flex flex-col h-full rounded-lg bg-card border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
      {/* ── Image Area ────────────────────────────────────────────────────── */}
      <div className="relative h-56 w-full overflow-hidden bg-muted group/carousel">
        {project.images.length > 1 ? (
          <>
            <div 
              className="flex w-full h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {project.images.map((media, idx) => (
                <div key={idx} className="w-full h-full flex-shrink-0 relative">
                  {renderMedia(media, currentImageIndex === idx)}
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="absolute inset-y-0 left-0 flex items-center px-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-20">
              <button 
                type="button"
                onClick={handlePrevImage}
                className="p-1 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 hover:bg-black/60 hover:scale-110 transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-20">
              <button 
                type="button"
                onClick={handleNextImage}
                className="p-1 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 hover:bg-black/60 hover:scale-110 transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-2 inset-x-0 flex items-center justify-center gap-1.5 z-20">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={cn(
                    "h-1.5 rounded-full transition-all cursor-pointer shadow-[0_0_2px_rgba(0,0,0,0.5)]",
                    currentImageIndex === idx ? "bg-white w-4" : "bg-white/60 hover:bg-white/90 w-1.5"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        ) : (
          renderMedia(project.images[0] || "", true)
        )}
        
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
        
        {/* Badges Overlay */}
        <div className="absolute top-4 inset-x-4 flex justify-between items-start pointer-events-none">
          <span className="px-3 py-1 rounded-lg bg-black/50 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/10 pointer-events-auto">
            {project.category}
          </span>
          {project.status && (
            <div className="pointer-events-auto">
              <ProjectStatusBadge status={project.status} />
            </div>
          )}
        </div>

        {/* Complexity (Bottom Left Overlay) */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2 py-1 rounded-md bg-black/50 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-30 pointer-events-none">
          <ComplexityIcon className={cn("h-3 w-3", COMPLEXITY_CONFIG[project.complexity].color)} />
          <span className="text-[10px] font-bold text-white truncate shadow-sm">
            {project.complexity}
          </span>
        </div>
      </div>

      {/* ── Content Area ─────────────────────────────────────────────────── */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
              {title}
              <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </h3>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed h-10">
            {description}
          </p>
        </div>

        {/* Impact / Achievements (Simplified) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {impacts.slice(0, 2).map((impact, i) => (
            <div 
              key={i} 
              className="px-2 py-0.5 rounded-md bg-primary/5 border border-primary/10 flex items-center gap-1.5"
            >
              <Trophy className="h-2.5 w-2.5 text-primary" />
              <span className="text-[10px] font-bold text-primary/80">
                {impact}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.slice(0, 5).map((tag) => (
            <TechBadge
              key={tag}
              tag={tag}
              active={activeTechs.includes(tag)}
              onClick={onTechClick}
            />
          ))}
          {project.tags.length > 5 && (
            <span className="text-[10px] font-bold text-muted-foreground/60 py-1">
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Footer Meta & CTA */}
        <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] font-semibold text-muted-foreground/70">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{language === 'fr' ? project.duration : project.durationEn}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" />
              <span>{project.teamSize} p.</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.github && project.github !== '#' && (
              <Button variant="ghost" size="icon-sm" asChild className="rounded-lg">
                <Link to={project.github} target="_blank" title="GitHub">
                  <Github />
                </Link>
              </Button>
            )}
            {project.demo && project.demo !== '#' && (
              <Button variant="ghost" size="icon-sm" asChild className="rounded-lg">
                <Link to={project.demo} target="_blank" title="Live Demo">
                  <ExternalLink />
                </Link>
              </Button>
            )}
            <Link
              to={`/projects/${project.id}`}
              className="ml-1 p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              title="View Details"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
