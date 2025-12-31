import React from 'react'
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { useParams } from 'react-router-dom';
import { projectsData } from '@/shared/mocks/projectData.mocks';

export const ProjectDescription: React.FC = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id) || ;

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
  )
}

