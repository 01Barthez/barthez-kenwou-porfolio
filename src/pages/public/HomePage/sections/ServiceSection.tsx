import { services } from '@/entities/services/api/mock/services.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedList } from '@/shared/ui/animated-list';
import { ServiceCard2 } from '@/entities/services';

export const ServiceSection: React.FC = () => {
  const { language } = useLanguageStore();
  const isFr = language === 'fr';

  const previewServices = services.slice(0, 5);

  return (
    <section className="w-full relative z-10 overflow-hidden">
      <div className="container py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col items-start space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="section-title !text-left">
              <span className="gradient-text">
                {isFr ? 'Mes Services' : 'My Services'}
              </span>
            </h2>
            <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
              {isFr
                ? 'Ingénieur Cloud & DevOps, je vous aide à bâtir des infrastructures solides, sécurisées et hautement performantes.'
                : 'Cloud & DevOps Engineer, I help you build solid, secure, and highly performant infrastructures.'}
            </p>
          </div>

            <div className="w-full flex flex-wrap gap-3">
              {['AWS Architecture', 'DevOps CI/CD', 'Security Audit', 'Full Stack'].map((tag) => (
                <span key={tag} className="px-4 py-1 rounded-full glass border-primary/20 text-xs font-semibold text-primary">
                  {tag}
                </span>
              ))}
          </div>

          <Link
            to="/services"
            className="group inline-flex items-center text-sm gap-3 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium border border-primary/20 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-primary/20"
          >
            {isFr ? 'Explorer tous les services' : 'Explore all services'}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right Column: Interactive Animated List */}
        <div className="relative h-[480px] w-full max-w-[450px] mx-auto lg:ml-auto overflow-hidden rounded-3xl">
          {/* Gradient Masks */}
          <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

          <AnimatedList className="px-4 py-8" delay={1800}>
            {previewServices.map((service, index) => (
              <ServiceCard2 key={index} service={service} language={language} />
            ))}
          </AnimatedList>
        </div>
      </div>
      </div>
    </section>
  );
};
