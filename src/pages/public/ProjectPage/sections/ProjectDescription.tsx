import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { useParams } from 'react-router-dom';
import { projectsData } from '@/entities/projets/api/mocks/projectData.mocks';
import { findByNumericId } from '@/shared/lib/entity-slug';

export const ProjectDescription: React.FC = () => {
  const { id, projectID } = useParams();
  const project = findByNumericId(projectsData, projectID || id) || {
    fullDescriptionFr: '',
    fullDescriptionEn: '',
  };

  const { language } = useLanguageStore();
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-foreground mb-4">
        {language === 'fr' ? 'À propos du projet' : 'About the project'}
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        {language === 'fr' ? project.fullDescriptionFr : project.fullDescriptionEn}
      </p>
    </section>
  );
};
