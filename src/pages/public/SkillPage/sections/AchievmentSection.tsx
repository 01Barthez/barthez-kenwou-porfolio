import { AchievmentCard } from '@/entities/achievment';
import { achievements } from '@/entities/achievment/api/mock/achievements.mocks';
import { Trophy } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const AchievmentSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="glass rounded-2xl p-8 border border-border">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-xl bg-accent/10">
          <Trophy className="h-6 w-6 text-accent" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">{t('skills.achievements')}</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {
          achievements.map(
            (achievement, index) => {
              <AchievmentCard key={index} Achievment={achievement} />
            }
          )
        }
      </div>
    </section>
  );
};
