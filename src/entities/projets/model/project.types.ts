import { ID } from '@/shared/types';

export type ProjectStatus = 'Production' | 'En cours' | 'Actif' | 'MVP' | 'Archivé';

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
  frontend?: string[];
  backend?: string[];
  database?: string[];
  devops?: string[];
}

export interface IProject {
  id: ID;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  fullDescriptionFr?: string;
  fullDescriptionEn?: string;
  problemFr: string;
  problemEn: string;
  solutionFr: string[];
  solutionEn: string[];
  challengesFr?: string[];
  challengesEn?: string[];
  impactFr: string[];
  impactEn: string[];
  metrics?: Record<string, string | number>;
  techStack: ITechStack;
  architecture?: string[];
  testing?: string[];
  images: string[];
  preview: string;
  videoDemo?: string;
  category: string;
  status: ProjectStatus;
  complexity: string;
  role: string;
  teamSize?: number;
  duration: string;
  date: string;
  github?: string;
  demo?: string;
  caseStudy?: string;
  documentation?: string;
  businessContextFr?: string;
  businessContextEn?: string;
  isFeatured?: boolean;
}
