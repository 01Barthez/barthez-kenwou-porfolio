import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Icertifications } from '../model/certification.types';
import { Link } from 'react-router-dom';

export const CertificationCard: React.FC<{ Certification: Icertifications }> = ({
  Certification,
}) => {
  const { language } = useLanguageStore();

  const { name, issuer, year, link } = Certification;

  return (
    <div className="p-2 rounded-sm bg-secondary/30 hover:bg-secondary/50 transition-colors border border-border hover:border-primary/30">
      <h3 className="font-medium text-foreground mb-1 text-sm">{name}</h3>
      <p className="text-xs text-muted-foreground">{issuer}</p>
      <span className="text-xs font-mono text-primary">{year}</span>
      {link && (
        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-xs text-primary hover:underline"
        >
          {language == 'fr' ? 'Voir le certificat' : 'View Certificate'}
        </Link>
      )}
    </div>
  );
};
