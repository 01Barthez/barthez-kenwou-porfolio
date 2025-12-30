import React from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';

export const CTASection: React.FC = () => {
  const { language } = useLanguageStore();
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="w-full mx-auto text-center">
        <div className="p-10 rounded-3xl bg-linear-to-br from-primary/20 to-accent/20 border border-primary/30">
          <Award className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {language === 'fr' ? 'Prêt à Démarrer Votre Projet ?' : 'Ready to Start Your Project?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {language === 'fr'
              ? 'Discutons de vos besoins et construisons ensemble une solution qui dépasse vos attentes.'
              : "Let's discuss your needs and build together a solution that exceeds your expectations."}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:glow-primary hover:scale-105"
            >
              {t('hero.cta.contact')}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to={contactsInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-8 py-4 text-lg font-semibold text-foreground transition-all hover:border-primary hover:bg-secondary"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
