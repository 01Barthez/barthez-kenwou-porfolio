import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Link } from 'react-router-dom';

export const ProjectNotFound: React.FC = () => {
  const { language } = useLanguageStore();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          {language === 'fr' ? 'Projet non trouvé' : 'Project not found'}
        </h1>
        <Link to="/projects" className="text-primary hover:underline">
          {language === 'fr' ? 'Retour aux projets' : 'Back to projects'}
        </Link>
      </div>
    </div>
  );
};
