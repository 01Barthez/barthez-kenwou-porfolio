import { certifications } from '@/shared/mocks/certifications.mocks';
import { Award } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const CertificationSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="glass rounded-2xl p-8 border border-border mb-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-xl bg-primary/10">
          <Award className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">{t('skills.certifications')}</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors border border-transparent hover:border-primary/30"
          >
            <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            <span className="text-xs font-mono text-primary">{cert.year}</span>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-xs text-primary hover:underline"
              >
                Voir le certificat
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
