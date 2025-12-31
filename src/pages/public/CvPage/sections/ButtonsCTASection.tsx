import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Download, MessageCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const handleDownload = () => {
  window.print();
};

export const ButtonsCTASection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section>
      <div className="flex flex-wrap gap-4 mb-8 justify-center print:hidden">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all"
        >
          <Download className="h-5 w-5" />
          {language === 'fr' ? 'Télécharger le CV' : 'Download CV'}
        </button>

        <Link
          to={contactsInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-all"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </Link>
      </div>
    </section>
  );
};
