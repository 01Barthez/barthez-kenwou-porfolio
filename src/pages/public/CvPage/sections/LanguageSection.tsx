import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Globe } from 'lucide-react';

interface LanguageProps {
  languages: { language: string; proficiencyFr: string; proficiencyEn: string }[];
}

export const LanguageSection: React.FC<LanguageProps> = ({ languages }) => {
  const { language } = useLanguageStore();

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
            <span className="font-medium text-foreground">{lang.language}</span>
            <span className="text-muted-foreground"> - {language === 'fr' ? lang.proficiencyFr : lang.proficiencyEn}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
