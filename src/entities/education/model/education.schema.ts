import z from "zod";

export const EducationSchema = z.object({
    degreeFr: z.string().min(1),
    degreeEn: z.string().min(1),
    school: z.string().min(1),
    period: z.string().min(1),
    link: z.string().optional(),
});

export type EducationInput = z.infer<typeof EducationSchema>;
