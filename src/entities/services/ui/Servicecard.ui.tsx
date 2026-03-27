import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { CheckCircle2 } from 'lucide-react';
import { IServices } from '../model/service.types';

export const ServiceCard: React.FC<{ Service: IServices }> = ({ Service }) => {
  const { language } = useLanguageStore();

  const { titleFr, titleEn, icon, descFr, descEn, featuresFr, featuresEn, priceFr, priceEn } =
    Service;

  const Icon = icon;
  return (
    <div className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary flex flex-col">
      <div className="p-2.5 rounded-lg bg-primary/10 w-fit mb-3.5 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-1.5">
        {language === 'fr' ? titleFr : titleEn}
      </h3>
      <p className="text-muted-foreground text-[13px] mb-3.5 leading-relaxed">{language === 'fr' ? descFr : descEn}</p>
      <ul className="space-y-1.5 mb-4 flex-1">
        {(language === 'fr' ? featuresFr : featuresEn)
          .slice(0, 4)
          .map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-[13px] text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
      </ul>

      <div className="pt-3 border-t border-border">
        <span className="text-base font-bold gradient-text">
          {language === 'fr' ? priceFr : priceEn}
        </span>
      </div>
    </div>
  );
};
