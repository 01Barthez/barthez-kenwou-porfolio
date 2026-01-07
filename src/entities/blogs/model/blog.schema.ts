import z from "zod";

export const BlogSchema = z.object({
    id: z.string().min(1),
    titleFr: z.string().min(4),
    titleEn: z.string().min(4),
    excerptFr: z.string().min(4),
    excerptEn: z.string().min(4),
    contentFr: z.string().min(4),
    contentEn: z.string().min(4),
    image: z.string().min(4),
    tags: z.array(z.string().min(1)),
    category: z.string().min(4),
    date: z.date(),
    readTime: z.string().min(4),
    author: z.string().min(4),
});

export type BlogInput = z.infer<typeof BlogSchema>;
