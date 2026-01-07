import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPost: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          {language === 'fr' ? 'Article non trouvé' : 'Article not found'}
        </h1>
       
        <Link to="/blog" className="text-primary hover:underline">
          {language === 'fr' ? 'Retour au blog' : 'Back to blog'}
        </Link>
      </div>
    </div>
  );
};
