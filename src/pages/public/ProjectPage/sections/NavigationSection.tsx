import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projectsData } from '@/entities/projets/api/mocks/projectData.mocks';

export const NavigationSection: React.FC = () => {
  const { language } = useLanguageStore();
  const { id } = useParams();
  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center border-t border-border pt-8 mb-12">
      {prevProject ? (
        <Link
          to={`/projects/${prevProject.id}`}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">
            {language === 'fr' ? prevProject.titleFr : prevProject.titleEn}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {nextProject && (
        <Link
          to={`/projects/${nextProject.id}`}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm">
            {language === 'fr' ? nextProject.titleFr : nextProject.titleEn}
          </span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
};
