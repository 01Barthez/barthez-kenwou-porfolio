import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { MessageCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const CTADetailsSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="text-center">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
        <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-2">
          {language === 'fr' ? 'Des questions sur cet article ?' : 'Questions about this article?'}
        </h3>
        <p className="text-muted-foreground mb-6">
          {language === 'fr'
            ? "N'hésitez pas à me contacter pour en discuter."
            : 'Feel free to contact me to discuss.'}
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all"
          >
            {language === 'fr' ? 'Me contacter' : 'Contact me'}
          </Link>
          <Link
            to={contactsInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-all"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
};
