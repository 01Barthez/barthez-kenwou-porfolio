import { services } from '@/entities/services/api/mock/services.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { CheckCircle2 } from 'lucide-react';
import React from 'react';

export const ServicesSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary flex flex-col"
          >
            <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {language === 'fr' ? service.titleFr : service.titleEn}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {language === 'fr' ? service.descFr : service.descEn}
            </p>
            <ul className="space-y-2 mb-4 flex-1">
              {(language === 'fr' ? service.featuresFr : service.featuresEn)
                .slice(0, 4)
                .map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
            </ul>
            <div className="pt-4 border-t border-border">
              <span className="text-lg font-bold gradient-text">
                {language === 'fr' ? service.priceFr : service.priceEn}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
