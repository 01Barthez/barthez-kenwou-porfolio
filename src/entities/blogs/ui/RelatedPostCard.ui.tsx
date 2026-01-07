import { useLanguageStore } from "@/shared/state/useLanguageStore";
import { IBlog } from "../model/blog.type";
import { Link } from "react-router-dom";


export const RelatedPostCard: React.FC<{ Blog: IBlog }> = ({ Blog }) => {
    const { language } = useLanguageStore();

    const { id, titleFr, titleEn, image, readTime } = Blog;

    return (
        <>
            <Link
                key={id}
                to={`/blog/${id}`}
                className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
            >
                <img
                    src={image}
                    alt={language === 'fr' ? titleFr : titleEn}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {language === 'fr' ? titleFr : titleEn}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{readTime}</p>
            </Link>
        </>
    )
}