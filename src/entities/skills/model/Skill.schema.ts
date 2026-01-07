import z from "zod";

export const SkillSchema = z.object({
  name: z.string().min(4),
  category: z.string().min(4),
  level: z.number().positive().min(20),
  icon: z.string(),
});

export type SkillInput = z.infer<typeof SkillSchema>;
