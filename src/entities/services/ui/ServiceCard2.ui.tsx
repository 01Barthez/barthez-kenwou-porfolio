import { cn } from "@/lib/utils";
import { ServiceCardProps } from "../model/service.types";
import { GlowingEffect } from "@/shared/ui/glowing-effect";

export const ServiceCard2: React.FC<ServiceCardProps> = ({ service, language }) => {
  const Icon = service.icon;
  const isFr = language === 'fr';

  return (
    <div className={cn(
      "relative group flex items-center gap-5 p-[2px] rounded-[1.25rem] w-full max-w-[400px]",
      "shadow-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
    )}>
      {/* Magic Interactive Border Amplified */}
      <GlowingEffect
        spread={60}
        glow={true}
        disabled={false}
        proximity={128}
        inactiveZone={0}
        borderWidth={2}
      />

      {/* Card Content Surface (protects inner layout from raw background) */}
      <div className="relative flex items-center gap-5 py-2 md:py-3 px-2 md:px-4 w-full h-full rounded-[inherit] bg-card/90 backdrop-blur-md border border-border/40 z-10 transition-colors duration-300 group-hover:border-transparent">
        <div className="flex-shrink-0 p-1 rounded-sm bg-primary/10 text-primary shadow-xs transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5 md:h-6 md:w-6 drop-shadow-sm" />
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex items-center justify-between gap-4 mb-0.5">
            <h3 className="text-sm font-bold text-foreground truncate drop-shadow-sm transition-colors duration-300 group-hover:text-primary">
              {isFr ? service.titleFr : service.titleEn}
            </h3>
            <span className="text-[10px] font-bold text-primary px-2 py-0.5 rounded bg-primary/10 shadow-sm border border-primary/20 whitespace-nowrap">
              {isFr ? service.priceFr : service.priceEn}
            </span>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {isFr ? service.descFr : service.descEn}
          </p>
        </div>
      </div>
    </div>
  );
};
