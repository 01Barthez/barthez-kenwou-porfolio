import { z } from 'zod';

export const ProjectStatusSchema = z.enum([
  'pending',
  'confirmed',
  'preparing',
  'ready',
  'delivered',
  'cancelled',
]);

export const TechStackSchema = z.object({
  frontend: z.array(z.string().min(1)),
  backend: z.array(z.string().min(1)),
  database: z.array(z.string().min(1)),
  devops: z.array(z.string().min(1)),
});

export const ProjectSchema = z.object({
  id: z.string().min(1),
  titleFr: z.string().min(4),
  titleEn: z.string().min(4),
  descriptionFr: z.string().min(4),
  descriptionEn: z.string().min(4),
  fullDescriptionFr: z.string().min(4),
  fullDescriptionEn: z.string().min(4),
  image: z.string().min(4),
  tags: z.array(z.string().min(1)),
  category: z.string().min(4),
  github: z.string().min(4),
  demo: z.string().min(4),
  date: z.date(),
  duration: z.string().min(4),
  durationEn: z.string().min(4),
  challengesFr: z.array(z.string().min(1)),
  challengesEn: z.array(z.string().min(1)),
  solutionsFr: z.array(z.string().min(1)),
  solutionsEn: z.array(z.string().min(1)),
  resultsFr: z.array(z.string().min(1)),
  resultsEn: z.string().min(1),
  techStack: z.array(TechStackSchema).min(1),
  stars: z.number().positive(),
  forks: z.number().positive(),
  ProjectStatus: ProjectStatusSchema.optional(),
  createdAt: z.date().optional(),
  updatedA: z.date().optional(),
});

export type TechStackInput = z.infer<typeof TechStackSchema>;
export type ProjectInput = z.infer<typeof ProjectSchema>;
