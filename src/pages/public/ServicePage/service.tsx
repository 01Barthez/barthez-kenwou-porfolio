import { TestimonialsSection } from './sections/TestimonialsSection';
import { ProcessSection } from './sections/ProcessSection';
import { ServicesSection } from './sections/ServicesSection';
import { HeroSection } from './sections/HeroSection';
import { SEO } from '@/shared/ui/SEO/SEO';
import { CTASection } from '../HomePage/sections/CTASection';

export const ServicePage: React.FC = () => {
  return (
    <>
      <SEO
        path="/services"
        title="Services"
        description="Solutions professionnelles — Architecture Cloud AWS, DevOps & CI/CD, développement Full Stack, audit sécurité, optimisation performance et consulting."
      />

      <div className="min-h-screen overflow-x-clip py-16 md:py-16 lg:py-20">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
};
