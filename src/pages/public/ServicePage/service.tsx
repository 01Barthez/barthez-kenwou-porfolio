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
        description="Solutions professionnelles pour transformer vos idées en réalité - Architecture Cloud AWS | DevOps & CI/CD | Développement Full Stack | Audit & Sécurité | Optimisation Performance | Consulting & Formation"
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
