import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Mail, MessageCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const CTASection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="mt-8 text-center print:hidden">
      <p className="text-muted-foreground mb-4">
        {language === 'fr'
          ? 'Intéressé par mon profil ? Contactez-moi directement !'
          : 'Interested in my profile? Contact me directly!'}
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to={contactsInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-all"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </Link>

        <Link
          to={contactsInfo.email}
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-secondary text-foreground font-semibold hover:border-primary transition-all"
        >
          <Mail className="h-5 w-5" />
          Email
        </Link>
      </div>
    </section>
  );
};
