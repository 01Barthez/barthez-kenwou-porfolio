import React from 'react';
import { SEO } from '@/shared/ui/SEO/SEO';
import { HeroSection } from './sections/HeroSection';
import { ServiceSection } from './sections/ServiceSection';
import { WhyChooseMeSection } from './sections/WhyChooseMeSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { CTASection } from './sections/CTASection';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Barthez Kenwou | Passionate DevOps & Full-Stack JS Developer"
        description="Passionné par le développement web et le cloud computing depuis plus de 3 ans, je me spécialise dans la création d'applications web modernes, performantes et évolutives. Toujours à la recherche de nouveaux défis, je m'investis continuellement dans l'apprentissage de nouvelles technologies et les meilleures pratiques du secteur."
      />

      <div className="min-h-screen relative overflow-hidden">
        <HeroSection />

        {/* Services Section */}
        <ServiceSection />

        {/* Why Choose Me Section */}
        <WhyChooseMeSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  );
};
