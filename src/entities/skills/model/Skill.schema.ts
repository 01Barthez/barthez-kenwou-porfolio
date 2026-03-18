import z from 'zod';

export const SkillSchema = z.object({
  icon: z.any(),
  titleFr: z.string().min(4),
  titleEn: z.string().min(4),
  descFr: z.string().min(4),
  descEn: z.string().min(4),
  featuresFr: z.array(z.string().min(4)),
  featuresEn: z.array(z.string().min(4)),
  priceFr: z.string().min(4),
  priceEn: z.string().min(4),
});

export type SkillInput = z.infer<typeof SkillSchema>;
