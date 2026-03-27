import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { IBlog } from '../model/blog.type';
import { Link } from 'react-router-dom';
import { Image } from '@/shared/ui/Image';

export const RelatedPostCard: React.FC<{ Blog: IBlog }> = ({ Blog }) => {
  const { language } = useLanguageStore();

  const { id, titleFr, titleEn, image, readTime } = Blog;

  return (
    <Link
      to={`/blog/${id}`}
      className="group block p-3 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
        <Image
          src={image}
          alt={language === 'fr' ? titleFr : titleEn}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
        {language === 'fr' ? titleFr : titleEn}
      </h3>
      <div className="flex items-center justify-between mt-2">
        <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60">{readTime}</span>
        <span className="text-[10px] uppercase tracking-widest font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">Lire →</span>
      </div>
    </Link>
  );
};
