import React from 'react'
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { useParams } from 'react-router-dom';
import { projectsData } from '@/shared/mocks/projectData.mocks';

export const ResultsSection: React.FC = () => {
  const { language } = useLanguageStore();
    const { id } = useParams();  
    const project = projectsData.find((p) => p.id === id) || ;
  
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-foreground mb-6">
        {language === 'fr' ? 'Résultats' : 'Results'}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {(language === 'fr' ? project.resultsFr : project.resultsEn).map((result: string, i:number) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-center"
          >
            <span className="text-lg font-bold gradient-text">{result}</span>
          </div>
        ))}
      </div>
    </section>)
}

