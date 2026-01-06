import z from "zod";

export const TestimonialSchema = z.object({
  id: z.string().min(1),
  rating: z.number().positive(),
  textFr: z.string().min(4),
  textEn: z.string().min(4),
  nameFr: z.string().min(20),
  nameEn: z.string().min(20),
  roleFr: z.string().min(4),
  roleEn: z.string().min(4),
});

export type TestimonialInput = z.infer<typeof TestimonialSchema>;
