import { education } from '@/shared/mocks/education.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Award, GraduationCap } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const CertificationSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section>
      {/* Title */}
      <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
        <div className="p-2 rounded-lg bg-primary/10">
          <GraduationCap className="h-5 w-5 text-primary" />
        </div>
        {language === 'fr' ? 'Formation & Certifications' : 'Education & Certifications'}
      </h2>

      {/* certification content */}
      <div className="space-y-3">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center md:justify-between p-3 rounded-lg bg-secondary/30"
          >
            <div>
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                {language === 'fr' ? edu.degreeFr : edu.degreeEn}
              </h3>
              <p className="text-sm text-muted-foreground">{edu.school}</p>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <span className="text-sm font-mono text-primary">{edu.period}</span>
              {edu.link && (
                <Link
                  to={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  {language === 'fr' ? 'Voir' : 'View'}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
