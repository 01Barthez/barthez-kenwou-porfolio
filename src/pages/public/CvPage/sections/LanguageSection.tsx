import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Globe } from 'lucide-react';

export const LanguageSection: React.FC = () => {
  const { language } = useLanguageStore();

  const languages = [
    {
      name: language === 'fr' ? 'Français' : 'French',
      level: language === 'fr' ? 'Langue maternelle' : 'Native',
    },

    {
      name: language === 'fr' ? 'Anglais' : 'English',
      level: language === 'fr' ? 'Courant (B2/C1)' : 'Fluent (B2/C1)',
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
        <div className="p-2 rounded-lg bg-primary/10">
          <Globe className="h-5 w-5 text-primary" />
        </div>
        {language === 'fr' ? 'Langues' : 'Languages'}
      </h2>
      <div className="flex gap-4">
        {languages.map((lang, index) => (
          <div key={index} className="px-4 py-2 rounded-lg bg-secondary/30">
            <span className="font-medium text-foreground">{lang.name}</span>
            <span className="text-muted-foreground"> - {lang.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
