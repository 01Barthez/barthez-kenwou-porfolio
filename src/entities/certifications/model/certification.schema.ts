import z from "zod";

export const CertificationSchema = z.object({
    name: z.string().min(1),
    issuer: z.string().min(1),
    year: z.string().min(1),
    link: z.string().optional(),
});

export type CertificationInput = z.infer<typeof CertificationSchema>;
