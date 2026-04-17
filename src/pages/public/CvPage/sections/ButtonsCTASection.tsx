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
          className="flex items-center gap-2 px-4 py-1.5 text-sm cursor-pointer rounded-sm bg-primary text-primary-foreground font-medium hover:glow-primary"
        >
          <DownloadIcon className="h-4 w-4" />
          {language === 'fr' ? 'Télécharger maintenant' : 'Download Now'}
        </button>

        <Link
          to={contactsInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-1.5 text-sm cursor-pointer rounded-sm bg-green-600 text-white font-medium hover:bg-green-700"
        >
          <MdWhatsapp className="h-4 w-4" />
          WhatsApp
        </Link>
      </div>

      <CVPreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </section>
  );
};
