import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Star } from 'lucide-react';
import { ITestimonial } from '../model/testimonial.types';

export const ServiceTestimonialCard = ({
  rating,
  textFr,
  textEn,
  nameFr,
  nameEn,
  roleFr,
  roleEn,
}: ITestimonial) => {
  const { language } = useLanguageStore();

  return (
    <article className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <blockquote className="text-muted-foreground mb-4 italic text-sm">
        "{language === 'fr' ? textFr : textEn}"
      </blockquote>
      <div>
        <p className="font-semibold text-foreground">{language === 'fr' ? nameFr : nameEn}</p>
        <p className="text-sm text-muted-foreground">{language === 'fr' ? roleFr : roleEn}</p>
      </div>
    </article>
  );
};
