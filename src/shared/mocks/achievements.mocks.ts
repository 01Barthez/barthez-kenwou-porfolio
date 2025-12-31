import { Trophy, Rocket, Users, Clock, Target, TrendingUp } from 'lucide-react';

export const achievements = [
  { icon: Clock, value: '3+', labelFr: "Années d'expérience", labelEn: 'Years of experience' },
  { icon: Rocket, value: '25+', labelFr: 'Projets réalisés', labelEn: 'Completed projects' },
  { icon: Users, value: '15+', labelFr: 'Clients satisfaits', labelEn: 'Happy clients' },
  { icon: Target, value: '99.9%', labelFr: 'Taux de disponibilité', labelEn: 'Uptime rate' },
  {
    icon: TrendingUp,
    value: '35%',
    labelFr: 'Réduction coûts cloud',
    labelEn: 'Cloud cost reduction',
  },
  { icon: Trophy, value: '5+', labelFr: 'Certifications', labelEn: 'Certifications' },
];
