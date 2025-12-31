import { achievements } from '@/shared/mocks/achievements.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Trophy } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const AchievmentSection: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  return (
    <section className="glass rounded-2xl p-8 border border-border">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-xl bg-accent/10">
          <Trophy className="h-6 w-6 text-accent" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">{t('skills.achievements')}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-linear-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-3">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className="block text-2xl font-bold gradient-text mb-1">
                {achievement.value}
              </span>
              <span className="text-xs text-muted-foreground">
                {language === 'fr' ? achievement.labelFr : achievement.labelEn}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
