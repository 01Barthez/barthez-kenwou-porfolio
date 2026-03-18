import React from 'react';

export interface IServices {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  featuresFr: string[];
  featuresEn: string[];
  priceFr: string;
  priceEn: string;
}
