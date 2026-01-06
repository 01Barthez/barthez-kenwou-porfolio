import { ID } from '@/shared/types';

export interface ITestimonial {
  id: ID;
  rating: number;
  textFr: string;
  textEn: string;
  nameFr: string;
  nameEn: string;
  roleFr: string;
  roleEn: string;
}
