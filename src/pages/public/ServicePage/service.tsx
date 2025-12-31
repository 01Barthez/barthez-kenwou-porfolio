import { CTASections } from './sections/CTASections';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ProcessSection } from './sections/ProcessSection';
import { ServicesSection } from './sections/ServicesSection';
import { HeroSection } from './sections/HeroSection';
import { SEO } from '@/shared/ui/SEO/SEO';

export const ServicePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Services - Barthez Kenwou | Passionate DevOps & Full-Stack JS Developer"
        description="Passionné par le développement web et le cloud computing depuis plus de 3 ans, je me spécialise dans la création d'applications web modernes, performantes et évolutives. Toujours à la recherche de nouveaux défis, je m'investis continuellement dans l'apprentissage de nouvelles technologies et les meilleures pratiques du secteur."
      />

      <div className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <HeroSection />

          {/* Services Grid */}
          <ServicesSection />

          {/* Process Section */}
          <ProcessSection />

          {/* Testimonials */}
          <TestimonialsSection />

          {/* CTA Section */}
          <CTASections />
        </div>
      </div>
    </>
  );
};
