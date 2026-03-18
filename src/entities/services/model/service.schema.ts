import z from 'zod';

export const ServiceSchema = z.object({
  name: z.string().min(4),
  category: z.string().min(4),
  level: z.number().positive().min(20),
  icon: z.any(),
});

export type ServiceInput = z.infer<typeof ServiceSchema>;
