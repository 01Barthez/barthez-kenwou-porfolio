import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Button } from '@/shared/ui/button';
import { GradientDots } from '@/shared/ui/gradient-dots';
import React from 'react';

export const NewsletterCTA: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="px-4 md:px-10 lg:px-14 mb-8 md:mb-10">
      <div className="relative z-10 overflow-hidden rounded-lg border border-primary/25 shadow-[0_0_40px_-16px_hsla(268,52%,38%,0.35)]">
        <div className="absolute inset-0 z-0">
          <GradientDots duration={20} colorCycleDuration={4} />
        </div>
        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-background/20 via-transparent to-background/35" />

        <div className="relative z-10 w-full mx-auto text-center p-5 sm:p-6 md:p-8">
          <div className="mx-auto max-w-xl rounded-md border border-border/40 bg-background/55 dark:bg-background/50 backdrop-blur-md px-4 py-5 sm:px-6 sm:py-6 shadow-sm">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2">
              {language === 'fr' ? 'Restez Informé' : 'Stay Informed'}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-5 leading-relaxed">
              {language === 'fr'
                ? 'Recevez les derniers articles et actualités directement dans votre boîte mail.'
                : 'Receive the latest articles and news directly in your inbox.'}
            </p>

            <form className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email"
                required
                className="flex-1 min-w-0 px-3 py-2 rounded-md bg-background/90 border border-border focus:border-primary focus:outline-none transition-colors text-foreground text-sm"
              />
              <Button
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:glow-primary transition-all text-sm shrink-0"
                type="submit"
              >
                {language === 'fr' ? "S'abonner" : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
