import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import React from 'react';
import { Link } from 'react-router-dom';

export const BackSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <div className="mb-6">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all group"
      >
        <HiOutlineArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        {language === 'fr' ? 'Retour au blog' : 'Back to blog'}
      </Link>
    </div>
  );
};
