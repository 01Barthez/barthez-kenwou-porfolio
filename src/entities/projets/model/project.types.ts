import { ID } from '@/shared/types';

export type ProjectStatus = 'Production' | 'En cours' | 'MVP' | 'Archivé';

export type ProjectRole =
  | 'Lead Developer'
  | 'Full Stack Developer'
  | 'DevOps Engineer'
  | 'Frontend Developer'
  | 'Backend Developer'
  | 'Scrum Master'
  | 'Full Stack JS Developer';

export type ProjectComplexity = 'Débutant' | 'Intermédiaire' | 'Avancé';

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
  images: string[]; // For carousel
  tags: string[];
  category: string;
  github: string;
  demo: string;
  date: string;
  duration: string;
  durationEn: string;
  complexity: ProjectComplexity;
  teamSize: number;
  impactFr: string[];
  impactEn: string[];
  techStack: ITechStack;
  status?: ProjectStatus;
  role?: ProjectRole;
  isFeatured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
