import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Calendar, Clock, ExternalLink, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projectsData } from '@/entities/projets/api/mocks/projectData.mocks';

export const TitleMeta: React.FC = () => {
  const { language } = useLanguageStore();
  const { id } = useParams();

  const project = projectsData.find((p) => p.id === id) || {
    titleFr: '',
    titleEn: '',
    date: '',
    duration: '',
    durationEn: '',
    tags: [],
    github: '',
    demo: '',
  };

  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {language === 'fr' ? project.titleFr : project.titleEn}
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {project.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {language === 'fr' ? project.duration : project.durationEn}
        </span>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-md bg-secondary text-sm text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <Link
          to={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
        >
          <Github className="h-4 w-4" />
          {language === 'fr' ? 'Code Source' : 'Source Code'}
        </Link>
        <Link
          to={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:glow-primary transition-all"
        >
          <ExternalLink className="h-4 w-4" />
          {language === 'fr' ? 'Voir la Démo' : 'View Demo'}
        </Link>
      </div>
    </div>
  );
};
