import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { IBlog } from '../model/blog.type';
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi2';
import { Image } from '@/shared/ui/Image';
import { Link } from 'react-router-dom';
import { cn } from '@/shared/lib/utils';

export const BlogCard: React.FC<{ Blog: IBlog; isFeatured?: boolean }> = ({ Blog, isFeatured }) => {
  const { language } = useLanguageStore();

  const { id, titleFr, titleEn, excerptFr, excerptEn, image, category, date, readTime, tags } = Blog;

  return (
    <Link to={`/blog/${id}`} className="block group">
      <article className={cn(
        "relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300",
        isFeatured && "md:grid md:grid-cols-2 lg:grid-cols-5 md:gap-6"
      )}>
        <div className={cn(
          "relative overflow-hidden aspect-video md:aspect-auto",
          isFeatured ? "lg:col-span-3 h-full min-h-[250px]" : "h-40"
        )}>
          <Image
            src={image}
            alt={language === 'fr' ? titleFr : titleEn}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2 py-0.5 rounded-md bg-background/80 backdrop-blur-md text-foreground text-[10px] font-bold uppercase tracking-wider border border-border/50">
              {category}
            </span>
          </div>
        </div>
        
        <div className={cn(
          "p-4 flex flex-col justify-center",
          isFeatured ? "md:p-8 lg:col-span-2" : "p-4"
        )}>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider font-bold text-muted-foreground/60 mb-3">
            <span className="flex items-center gap-1">
              <HiOutlineCalendar className="h-3.5 w-3.5" />
              {new Date(date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <HiOutlineClock className="h-3.5 w-3.5" />
              {readTime}
            </span>
          </div>
          
          <h3 className={cn(
            "font-extrabold text-foreground group-hover:text-primary transition-colors leading-tight mb-2",
            isFeatured ? "text-xl md:text-2xl" : "text-base line-clamp-2"
          )}>
            {language === 'fr' ? titleFr : titleEn}
          </h3>
          
          <p className={cn(
            "text-muted-foreground line-clamp-2",
            isFeatured ? "text-sm md:text-base mb-6" : "text-xs mb-4"
          )}>
            {language === 'fr' ? excerptFr : excerptEn}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-secondary/50 text-[9px] uppercase tracking-tighter font-bold text-muted-foreground border border-border/10"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};
