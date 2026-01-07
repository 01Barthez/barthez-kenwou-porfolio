import { cn } from '@/lib/utils';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Star } from 'lucide-react';
import { ITestimonial } from '../model/testimonial.types';

export const TestimonialCard = ({
  id,
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
    <figure
      key={id}
      className={cn(
        'max-w-sm relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors',
      )}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>

      {/* testimonial Text */}
      <blockquote className="text-muted-foreground mb-4 italic">
        "{language === 'fr' ? textFr : textEn}"
      </blockquote>

      {/* About the speaker */}
      <div>
        <p className="font-semibold text-foreground">{language === 'fr' ? nameFr : nameEn}</p>
        <p className="text-sm text-muted-foreground">{language === 'fr' ? roleFr : roleEn}</p>
      </div>
    </figure>
  );
};
