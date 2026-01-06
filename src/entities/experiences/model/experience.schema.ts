import z from "zod";

export const ExperienceSchema = z.object({
  titleFr: z.string().min(4),
  titleEn: z.string().min(4),
  descriptionFr: z.array(z.string().min(4)),
  descriptionEn: z.array(z.string().min(4)),
  companyFr: z.string().min(4),
  companyEn: z.string().min(4),
  period: z.string().min(4),
});

export type ExperienceInput = z.infer<typeof ExperienceSchema>;
