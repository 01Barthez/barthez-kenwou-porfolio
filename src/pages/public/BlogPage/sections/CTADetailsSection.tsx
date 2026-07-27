import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { FaWhatsapp } from 'react-icons/fa6';
import React from 'react';
import { GradientDots } from '@/shared/ui/gradient-dots';
import { DualCtaButtons } from '@/shared/ui/DualCtaButtons';

export const CTADetailsSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="text-center mt-6 sm:mt-8 py-3 sm:py-4 border-t border-border/50">
      <div className="relative z-10 overflow-hidden rounded-lg border border-primary/25 shadow-[0_0_40px_-16px_hsla(268,52%,38%,0.35)]">
        <div className="absolute inset-0 z-0">
          <GradientDots duration={20} colorCycleDuration={4} />
        </div>
        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-background/20 via-transparent to-background/35" />

        <div className="relative z-10 w-full mx-auto text-center p-5 sm:p-6">
          <div className="mx-auto max-w-xl rounded-md border border-border/40 bg-background/55 dark:bg-background/50 backdrop-blur-md px-4 py-5 sm:px-6 sm:py-6 shadow-sm">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 tracking-tight">
              {language === 'fr' ? 'Un projet en tête ?' : 'Have a project in mind?'}
            </h3>

            <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
              {language === 'fr'
                ? 'Explorons comment je peux vous aider à concrétiser vos idées avec des solutions modernes et performantes.'
                : 'Let’s explore how I can help you bring your ideas to life with modern and high-performance solutions.'}
            </p>

            <DualCtaButtons
              primary={{
                label: language === 'fr' ? 'Discutons-en' : "Let's Talk",
                to: '/contact',
              }}
              secondary={{
                label: 'WhatsApp',
                to: contactsInfo.whatsappLink,
                external: true,
                icon: <FaWhatsapp className="h-4 w-4" />,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
