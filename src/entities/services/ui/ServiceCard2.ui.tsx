import { cn } from "@/lib/utils";
import { ServiceCardProps } from "../model/service.types";

export const ServiceCard2: React.FC<ServiceCardProps> = ({ service, language }) => {
  const Icon = service.icon;
  const isFr = language === 'fr';

  return (
    <div className={cn(
      "relative flex items-center gap-5 p-5 rounded-2xl w-full max-w-[400px]",
      "bg-card/40 backdrop-blur-md border border-border shadow-md",
      "hover:border-primary/50 hover:shadow-primary/10 transition-all duration-500"
    )}>
      <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex flex-col min-w-0">
        <div className="flex items-center justify-between gap-4 mb-1">
          <h3 className="text-sm font-bold text-foreground truncate">
            {isFr ? service.titleFr : service.titleEn}
          </h3>
          <span className="text-[10px] font-bold text-accent px-2 py-0.5 rounded bg-accent/10 whitespace-nowrap">
            {isFr ? service.priceFr : service.priceEn}
          </span>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {isFr ? service.descFr : service.descEn}
        </p>
      </div>
    </div>
  );
};
