import { testimonials } from '@/shared/mocks/testimonials.mocks'
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Star } from 'lucide-react'
import React from 'react'

export const TestimonialsSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <span className="gradient-text">{language === "fr" ? "Témoignages Clients" : "Client Testimonials"}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
              <p className="text-muted-foreground mb-4 italic">
                "{language === "fr" ? testimonial.textFr : testimonial.textEn}"
              </p>
              <div>
                <p className="font-semibold text-foreground">
                  {language === "fr" ? testimonial.nameFr : testimonial.nameEn}
                </p>
                <p className="text-sm text-muted-foreground">
                  {language === "fr" ? testimonial.roleFr : testimonial.roleEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

