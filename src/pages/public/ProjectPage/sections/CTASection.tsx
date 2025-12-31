import { Github } from 'lucide-react';
import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';

export const CTASection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="text-center mt-12">
      <a
        href="https://github.com/01Barthez"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
      >
        <Github className="h-5 w-5" />
        <span>{language === 'fr' ? 'Voir plus sur GitHub' : 'See more on GitHub'}</span>
      </a>
    </section>
  );
};
