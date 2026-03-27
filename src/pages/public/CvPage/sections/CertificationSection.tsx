import { CVEducationCard, IEducation } from '@/entities/education';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { GraduationCap } from 'lucide-react';
import React from 'react';

interface CertificationProps {
  education: IEducation[];
}

export const CertificationSection: React.FC<CertificationProps> = ({ education }) => {
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
        {education.map((edu: IEducation, index: number) => (
          <CVEducationCard key={index} Education={edu} />
        ))}
      </div>
    </section>
  );
};
