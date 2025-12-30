import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react';
import { GraduationCap, ExternalLink } from 'lucide-react';
import { education } from '@/shared/mocks/education.mocks';
import { Link } from 'react-router-dom';

export const EducationSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <div className="glass rounded-2xl p-8 border border-border animate-fade-in">
      {/* title */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-accent/10">
          <GraduationCap className="h-6 w-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          {language === 'fr' ? 'Formation' : 'Education'}
        </h3>
      </div>

      {/* content */}
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex items-start justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-foreground">
                  {language === 'fr' ? edu.degreeFr : edu.degreeEn}
                </h4>

                {edu.link && (
                  <Link
                    to={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </div>

              <p className="text-sm text-muted-foreground">{edu.school}</p>
            </div>

            <span className="text-sm text-primary font-mono">{edu.period}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
