import React from 'react';

export interface IAchievement {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: string;
  labelFr: string;
  labelEn: string;
}
