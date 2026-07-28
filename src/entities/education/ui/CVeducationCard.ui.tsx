import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { IEducation } from '../model/education.types';

export const CVEducationCard: React.FC<{ Education: IEducation }> = ({ Education }) => {
  const { language } = useLanguageStore();

  const { degreeFr, degreeEn, link, school, period } = Education;

  return (
    <div className="flex items-start justify-between gap-2 rounded-md bg-secondary/30 px-2.5 py-2 transition-colors hover:bg-secondary/50 sm:gap-3 sm:px-4 sm:py-3.5">
      <div className="min-w-0 flex-1">
        <div className="flex items-start gap-1.5">
          <h4 className="text-[13px] font-semibold leading-snug text-foreground sm:text-base">
            {language === 'fr' ? degreeFr : degreeEn}
          </h4>
          {link && (
            <Link
              to={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 shrink-0 text-primary hover:text-primary/80"
            >
              <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
          )}
        </div>
        <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground sm:text-sm">{school}</p>
      </div>

      <span className="shrink-0 pt-0.5 text-[11px] font-medium text-primary sm:text-sm sm:font-mono">
        {period}
      </span>
    </div>
  );
};
