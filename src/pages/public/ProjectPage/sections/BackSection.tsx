import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BackSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <div>
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        {language === 'fr' ? 'Retour aux projets' : 'Back to projects'}
      </Link>
    </div>
  );
};
