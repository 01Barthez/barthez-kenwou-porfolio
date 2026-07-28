import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { IEducation } from '../model/education.types';

export const EducationCard: React.FC<{ Education: IEducation }> = ({ Education }) => {
  const { language } = useLanguageStore();

  const { degreeFr, degreeEn, link, school, period } = Education;

  return (
    <div className="cursor-default flex items-start justify-between px-4 py-2 rounded-md bg-secondary/70 hover:bg-secondary/10 transition-colors border border-transparent hover:border hover:border-primary/10 duration-300 transition-all">
      <div>
        <div className="flex items-center gap-2">
          <h4 className="cursor-default font-semibold text-sm text-foreground">
            {language === 'fr' ? degreeFr : degreeEn}
          </h4>

          {link && (
            <Link
              to={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
        </div>

        <p className="cursor-default text-sm text-muted-foreground">{school}</p>
      </div>

      <span className="cursor-default text-xs text-primary font-mono">{period}</span>
    </div>
  );
};
