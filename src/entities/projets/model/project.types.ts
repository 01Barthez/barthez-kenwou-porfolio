import { ID } from '@/shared/types';

export type ProjectStatus = 'Ongoing' | 'Completed' | 'preparing' | 'delivered' | 'cancelled';

export interface ITechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  devops: string[];
}

export interface IProject {
  id: ID;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  fullDescriptionFr: string;
  fullDescriptionEn: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  demo: string;
  date: string;
  duration: string;
  durationEn: string;
  challengesFr: string[];
  challengesEn: string[];
  solutionsFr: string[];
  solutionsEn: string[];
  resultsFr: string[];
  resultsEn: string[];
  techStack: ITechStack;
  stars: number;
  forks: number;
  ProjectStatus?: ProjectStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
