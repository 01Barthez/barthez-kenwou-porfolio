import { useLanguageStore } from "@/shared/state/useLanguageStore";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { IEducation } from "../model/education.types";


export const EducationCard: React.FC<{ Education: IEducation }> = ({ Education }) => {
  const { language } = useLanguageStore();

  const { degreeFr, degreeEn, link, school, period } = Education;

  return (
    <div
      className="flex items-start justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
    >
      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-foreground">
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

        <p className="text-sm text-muted-foreground">{school}</p>
      </div>

      <span className="text-sm text-primary font-mono">{period}</span>
    </div>
  )
}

