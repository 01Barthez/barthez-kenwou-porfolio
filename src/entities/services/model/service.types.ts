import React from 'react';
import { services } from '../api/mock/services.mocks';

export interface IServices {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  featuresFr: string[];
  featuresEn: string[];
  /** Source-of-truth amount in EUR */
  priceEur: number;
  /** When true, price is billed per hour */
  hourly: boolean;
  priceFr: string;
  priceEn: string;
}

export interface ServiceCardProps {
  service: (typeof services)[0];
  language: string;
}
