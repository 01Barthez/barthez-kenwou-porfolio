import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { ArrowRight, MessageCircle, Zap } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const CTASections: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="w-full text-center">
      <div className="p-10 rounded-3xl bg-linear-to-br from-primary/20 to-accent/20 border border-primary/30">
        <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {language === 'fr' ? 'Prêt à Démarrer ?' : 'Ready to Get Started?'}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          {language === 'fr'
            ? 'Contactez-moi pour discuter de votre projet. Première consultation gratuite !'
            : 'Contact me to discuss your project. First consultation is free!'}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:glow-primary hover:scale-105"
          >
            {language === 'fr' ? 'Demander un Devis' : 'Request a Quote'}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to={contactsInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-green-600 text-white px-8 py-4 text-lg font-semibold hover:bg-green-700 transition-all"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
};
