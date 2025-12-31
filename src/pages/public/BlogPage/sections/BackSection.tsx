import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const BackSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <div>
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        {language === 'fr' ? 'Retour au blog' : 'Back to blog'}
      </Link>
    </div>
  );
};
