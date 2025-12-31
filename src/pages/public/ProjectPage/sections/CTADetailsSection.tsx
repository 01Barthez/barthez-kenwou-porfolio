import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const CTADetailsSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="text-center">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {language === 'fr' ? 'Un projet similaire en tête ?' : 'Have a similar project in mind?'}
        </h3>
        <p className="text-muted-foreground mb-6">
          {language === 'fr'
            ? 'Discutons de vos besoins et transformons votre idée en réalité.'
            : "Let's discuss your needs and turn your idea into reality."}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all"
          >
            {language === 'fr' ? 'Me Contacter' : 'Contact Me'}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/23765564688"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
