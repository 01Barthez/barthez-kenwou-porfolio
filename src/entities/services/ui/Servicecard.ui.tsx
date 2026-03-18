import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { CheckCircle2 } from 'lucide-react';
import { IServices } from '../model/service.types';

export const ServiceCard: React.FC<{ Service: IServices }> = ({ Service }) => {
  const { language } = useLanguageStore();

  const { titleFr, titleEn, icon, descFr, descEn, featuresFr, featuresEn, priceFr, priceEn } =
    Service;

  const Icon = icon;
  return (
    <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary flex flex-col">
      <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">
        {language === 'fr' ? titleFr : titleEn}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">{language === 'fr' ? descFr : descEn}</p>
      <ul className="space-y-2 mb-4 flex-1">
        {(language === 'fr' ? featuresFr : featuresEn)
          .slice(0, 4)
          .map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
      </ul>

      <div className="pt-4 border-t border-border">
        <span className="text-lg font-bold gradient-text">
          {language === 'fr' ? priceFr : priceEn}
        </span>
      </div>
    </div>
  );
};
