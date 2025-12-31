import { services } from '@/shared/mocks/services.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const ServiceSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <span className="gradient-text">
              {language === 'fr' ? 'Mes Services' : 'My Services'}
            </span>
          </h2>
          <p className="section-subtitle">
            {language === 'fr'
              ? 'Des solutions sur mesure pour vos projets'
              : 'Tailored solutions for your projects'}
          </p>
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {language === 'fr' ? service.titleFr : service.titleEn}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'fr' ? service.descFr : service.descEn}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            {language === 'fr' ? 'Voir tous les services' : 'View all services'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
