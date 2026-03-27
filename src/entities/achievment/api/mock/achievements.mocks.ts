import { Trophy, Rocket, Clock, Target } from 'lucide-react';
import { IAchievement } from '../../model/achievement.type';

export const achievements: IAchievement[] = [
  {
    icon: Clock,
    value: '3+',
    labelFr: "Années d'expérience",
    labelEn: 'Years of experience',
  },
  {
    icon: Rocket,
    value: '20+',
    labelFr: 'Projets réalisés',
    labelEn: 'Completed projects',
  },

  {
    icon: Target,
    value: '99.9%',
    labelFr: 'Taux de disponibilité',
    labelEn: 'Uptime rate',
  },

  {
    icon: Trophy,
    value: '5+',
    labelFr: 'Certifications',
    labelEn: 'Certifications',
  },
];
