import { AchievmentCard } from '@/entities/achievment';
import { achievements } from '@/entities/achievment/api/mock/achievements.mocks';
import { Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import React from 'react';

export const AchievmentSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="glass rounded-sm p-3 border border-border">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-3 rounded-sm bg-accent/10">
          <Trophy className="h-4 w-4 text-accent" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">{t('skills.achievements')}</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between gap-4 md:gap-6 lg:gap-10">
        {achievements.map((achievement, index) => (
          <AchievmentCard key={index} Achievment={achievement} />
        ))}
      </div>
    </section>
  );
};
