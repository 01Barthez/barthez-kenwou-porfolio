import { useLanguageStore } from "@/shared/state/useLanguageStore";
import { IBlog } from "../model/blog.type";
import { Calendar, Clock } from "lucide-react";



export const BlogCard: React.FC<{ Blog: IBlog }> = ({ Blog }) => {
    const { language } = useLanguageStore();

    const { titleFr, titleEn, excerptFr, excerptEn, image, category, date, readTime, tags } = Blog;

    return (
        <article
            className="group overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
        >
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={language === 'fr' ? titleFr : titleEn}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                        {category}
                    </span>
                </div>
            </div>
            <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {readTime}
                    </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {language === 'fr' ? titleFr : titleEn}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {language === 'fr' ? excerptFr : excerptEn}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-secondary text-xs text-muted-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    )
}