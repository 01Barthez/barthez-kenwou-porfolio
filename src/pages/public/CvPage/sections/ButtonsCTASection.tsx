import { MdWhatsapp } from "react-icons/md"; 
import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { DownloadIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CVPreviewModal } from './CVPreviewModal';

export const ButtonsCTASection: React.FC = () => {
  const { language } = useLanguageStore();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section>
      <div className="flex flex-wrap gap-4 mb-8 justify-center print:hidden">
        <button
          onClick={() => setIsPreviewOpen(true)}
          className="flex items-center gap-2 px-6 py-2.5 text-sm cursor-pointer rounded-sm bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
        >
          <DownloadIcon className="h-5 w-5" />
          {language === 'fr' ? 'Téléchargement' : 'Download'}
        </button>

        <Link
          to={contactsInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2.5 text-sm cursor-pointer rounded-sm bg-green-600 text-white font-semibold hover:bg-green-700 transition-all"
        >
          <MdWhatsapp className="h-5 w-5" />
          WhatsApp
        </Link>
      </div>

      <CVPreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </section>
  );
};
