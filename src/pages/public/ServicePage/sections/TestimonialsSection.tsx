import { testimonials } from '@/entities/testimonies/api/mocks/testimonials.mocks';
import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { ServiceTestimonialCard } from '@/entities/testimonies';

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
          <ServiceTestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};
