import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import { IServices } from '../model/service.types';
import { motion } from 'framer-motion';
import { GlowingEffect } from '@/shared/ui/glowing-effect';

export const ServiceCard: React.FC<{ Service: IServices }> = ({ Service }) => {
  const { language } = useLanguageStore();

  const { titleFr, titleEn, icon, descFr, descEn, featuresFr, featuresEn, priceFr, priceEn } =
    Service;

  const Icon = icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col h-full bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-5 md:p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
    >
      <GlowingEffect
        spread={60}
        glow={true}
        disabled={false}
        proximity={128}
        inactiveZone={0}
        borderWidth={2}
      />

      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Icon & Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="shrink-0 p-1.5 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
            <Icon className="h-4 w-4 transition-transform group-hover:rotate-12" />
          </div>
          <h3 className="text-sm md:text-base font-bold text-foreground leading-tight pt-1">
            {language === 'fr' ? titleFr : titleEn}
          </h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-[12px] md:text-xs leading-relaxed mb-5 opacity-90 italic font-medium">
          {language === 'fr' ? descFr : descEn}
        </p>

        {/* Features List */}
        <div className="flex-1 space-y-2.5 mb-6">
          {(language === 'fr' ? featuresFr : featuresEn)
            .slice(0, 4)
            .map((feature: string, i: number) => (
              <div key={i} className="flex items-start gap-2.5 group/item">
                <HiOutlineCheckCircle className="h-3.5 w-3.5 text-primary/70 shrink-0 mt-0.5 group-hover/item:text-primary transition-colors" />
                <span className="text-[11px] md:text-[12px] text-muted-foreground/90 leading-snug">
                  {feature}
                </span>
              </div>
            ))}
        </div>

        {/* Footer: Price & Link */}
        <div className="pt-4 border-t border-border/40 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-bold mb-0.5">
              {language === 'fr' ? 'À partir de' : 'Starting at'}
            </span>
            <span className="text-sm font-bold text-primary">
              {language === 'fr' ? priceFr.replace('À partir de ', '') : priceEn.replace('Starting at ', '')}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
