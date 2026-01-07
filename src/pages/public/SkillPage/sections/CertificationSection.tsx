import { certifications } from '@/entities/certifications/api/mocks/certifications.mocks';
import { CertificationCard } from '@/entities/certifications/ui/certificationCard.ui';
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
        {
          certifications.map((cert, index) => (
            <CertificationCard key={index * 5} Certification={cert} />
          ))
        }
      </div>
    </section>
  );
};
