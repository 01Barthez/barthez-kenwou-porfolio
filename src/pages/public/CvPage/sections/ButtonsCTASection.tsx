import { MdWhatsapp } from 'react-icons/md';
import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { DownloadIcon } from 'lucide-react';
import React, { lazy, Suspense, useState } from 'react';
import { DualCtaButtons } from '@/shared/ui/DualCtaButtons';

const CVPreviewModal = lazy(() =>
  import('./CVPreviewModal').then((m) => ({ default: m.CVPreviewModal })),
);

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

      {isPreviewOpen && (
        <Suspense fallback={null}>
          <CVPreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
        </Suspense>
      )}
    </section>
  );
};
