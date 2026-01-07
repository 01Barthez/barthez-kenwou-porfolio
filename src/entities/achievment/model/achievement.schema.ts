import z from "zod";

export const AchievementSchema = z.object({
    icon: z.string().min(1),
    value: z.string().min(4),
    labelFr: z.string().min(4),
    labelEn: z.string().min(4),
});

export type AchievementInput = z.infer<typeof AchievementSchema>;
