import { testimonials } from '@/entities/testimonies/api/mocks/testimonials.mocks';
import { Star } from 'lucide-react';
import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';

export const TestimonialsSection: React.FC = () => {
  const { language } = useLanguageStore();
  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {language === 'fr' ? 'Ce Que Disent Mes Clients' : 'What My Clients Say'}
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 italic text-sm">
              "{language === 'fr' ? testimonial.textFr : testimonial.textEn}"
            </p>
            <div>
              <p className="font-semibold text-foreground">
                {language === 'fr' ? testimonial.nameFr : testimonial.nameEn}
              </p>
              <p className="text-sm text-muted-foreground">
                {language === 'fr' ? testimonial.roleFr : testimonial.roleEn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
