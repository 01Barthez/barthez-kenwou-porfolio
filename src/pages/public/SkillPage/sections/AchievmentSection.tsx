import { AchievmentCard } from '@/entities/achievment';
import { achievements } from '@/entities/achievment/api/mock/achievements.mocks';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { AiFillTrophy } from 'react-icons/ai';

export const AchievmentSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="px-4 md:px-10 lg:px-14">
      <div className='glass rounded-sm p-3 border border-border'>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-sm bg-primary/10">
            <AiFillTrophy className="h-4 w-4 text-primary" />
          </div>
          <h2 className="section-title !mb-0">{t('skills.achievements')}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-3 md:gap-4 lg:gap-6">
          {achievements.map((achievement, index) => (
            <AchievmentCard key={index} Achievment={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};
