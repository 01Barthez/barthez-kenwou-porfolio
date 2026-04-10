import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { GradientDots } from '@/shared/ui/gradient-dots';

export const CTASection: React.FC = () => {
  const { language } = useLanguageStore();
  const { t } = useTranslation();

  return (
    <section className="mx-4 md:mx-10 lg:mx-14  mb-6 md:mb-10 lg:mb-20 relative z-10 overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 z-0">
        <GradientDots duration={20} />
      </div>

      <div className="relative z-10 w-full mx-auto text-center overflow-hidden">
        <div className="p-5 md:p-8 rounded-lg bg-linear-to-br from-primary/20 to-accent/20 border border-primary/30">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            {language === 'fr' ? 'Prêt à Démarrer Votre Projet ?' : 'Ready to Start Your Project?'}
          </h2>
         
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-xs md:text-sm font-medium">
            {language === 'fr'
              ? 'Discutons de vos besoins et construisons ensemble une solution qui dépasse vos attentes.'
              : "Let's discuss your needs and build together a solution that exceeds your expectations."}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:glow-primary hover:scale-105"
            >
              {t('hero.cta.contact')}
              <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to={contactsInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-5 py-2 text-sm font-semibold text-foreground transition-all hover:border-primary hover:bg-secondary"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
