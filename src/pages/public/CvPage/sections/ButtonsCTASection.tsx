import { MdWhatsapp } from 'react-icons/md';
import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { DownloadIcon } from 'lucide-react';
import React, { useState } from 'react';
import { CVPreviewModal } from './CVPreviewModal';
import { DualCtaButtons } from '@/shared/ui/DualCtaButtons';

export const ButtonsCTASection: React.FC = () => {
  const { language } = useLanguageStore();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section>
      <div className="mb-8 print:hidden">
        <DualCtaButtons
          primary={{
            label: language === 'fr' ? 'Télécharger maintenant' : 'Download Now',
            onClick: () => setIsPreviewOpen(true),
            icon: <DownloadIcon className="h-4 w-4" />,
          }}
          secondary={{
            label: 'WhatsApp',
            to: contactsInfo.whatsappLink,
            external: true,
            icon: <MdWhatsapp className="h-4 w-4" />,
          }}
        />
      </div>

      <CVPreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </section>
  );
};
