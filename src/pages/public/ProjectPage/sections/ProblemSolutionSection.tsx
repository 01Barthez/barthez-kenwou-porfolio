import React from 'react';
import { IProject } from '@/entities/projets/model/project.types';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { AlertCircle, CheckCircle2, Target } from 'lucide-react';

export const ProblemSolutionSection: React.FC<{ project: IProject }> = ({ project }) => {
  const { language } = useLanguageStore();
  const problem = language === 'fr' ? project.problemFr : project.problemEn;
  const solutions = language === 'fr' ? project.solutionFr : project.solutionEn;

  if (!problem && (!solutions || solutions.length === 0)) return null;

  return (
    <section className="mb-16 px-4 md:px-10 lg:px-14 animate-fade-in-up">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Problem */}
        {problem && (
          <div className="bg-destructive/5 border border-destructive/20 p-6 md:p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <AlertCircle className="w-32 h-32 text-destructive" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <div className="p-2 rounded-xl bg-destructive/10 text-destructive">
                  <Target className="w-6 h-6" />
                </div>
                {language === 'fr' ? 'Le Problème' : 'The Problem'}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {problem}
              </p>
            </div>
          </div>
        )}

        {/* Solution */}
        {solutions && solutions.length > 0 && (
          <div className="bg-primary/5 border border-primary/20 p-6 md:p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <CheckCircle2 className="w-32 h-32 text-primary" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                {language === 'fr' ? 'La Solution' : 'The Solution'}
              </h2>
              <ul className="space-y-4">
                {solutions.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-muted-foreground leading-relaxed">
                      {sol}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
