import { certifications } from '@/entities/certifications/api/mocks/certifications.mocks';
import { CertificationCard } from '@/entities/certifications/ui/certificationCard.ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaAward } from 'react-icons/fa6';

export const CertificationSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="px-4 md:px-10 lg:px-14 mb-6 ">
      <div className='glass p-3 rounded-md border border-border'>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-sm bg-primary/10">
            <FaAward className="h-4 w-4 text-primary" />
          </div>
          <h2 className="section-title !mb-0">{t('skills.certifications')}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {certifications.map((cert, index) => (
            <CertificationCard key={index * 5} Certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};
