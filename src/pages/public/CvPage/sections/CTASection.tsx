import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { DownloadIcon } from 'lucide-react';
import React, { lazy, Suspense, useState } from 'react';
import { MdWhatsapp } from 'react-icons/md';
import { GradientDots } from '@/shared/ui/gradient-dots';
import { DualCtaButtons } from '@/shared/ui/DualCtaButtons';

const CVPreviewModal = lazy(() =>
  import('./CVPreviewModal').then((m) => ({ default: m.CVPreviewModal })),
);

export const CTASection: React.FC = () => {
  const { language } = useLanguageStore();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section className="relative mt-8 px-0 print:hidden sm:mt-10">
      <div className="relative z-10 overflow-hidden rounded-lg border border-primary/25 shadow-[0_0_40px_-16px_hsla(268,52%,38%,0.35)]">
        <div className="absolute inset-0 z-0">
          <GradientDots duration={20} colorCycleDuration={4} />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/20 via-transparent to-background/35" />

        <div className="relative z-10 mx-auto w-full p-4 text-center sm:p-6 md:p-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center rounded-md border border-border/40 bg-background/55 px-4 py-5 shadow-sm backdrop-blur-md dark:bg-background/50 sm:px-6 sm:py-6">
            <h2 className="mb-2 text-lg font-bold leading-tight text-foreground sm:mb-3 sm:text-xl md:text-2xl">
              {language === 'fr'
                ? 'Téléchargez mon CV et parlons de votre projet'
                : 'Download my CV and let’s talk about your project'}
            </h2>

            <p className="mb-5 max-w-lg text-xs leading-relaxed text-muted-foreground sm:mb-6 sm:text-sm">
              {language === 'fr'
                ? 'Un profil clair, des résultats concrets. Récupérez mon CV maintenant, ou écrivez-moi directement sur WhatsApp pour avancer sans attendre.'
                : 'A clear profile, concrete results. Grab my CV now, or message me on WhatsApp to move forward right away.'}
            </p>

            <DualCtaButtons
              primary={{
                label:
                  language === 'fr'
                    ? 'Télécharger le CV maintenant'
                    : 'Download CV now',
                onClick: () => setIsPreviewOpen(true),
                icon: <DownloadIcon className="h-4 w-4" />,
              }}
              secondary={{
                label:
                  language === 'fr' ? 'Discutons sur WhatsApp' : 'Chat on WhatsApp',
                to: contactsInfo.whatsappLink,
                external: true,
                icon: <MdWhatsapp className="h-4 w-4" />,
              }}
            />
          </div>
        </div>
      </div>

      {isPreviewOpen && (
        <Suspense fallback={null}>
          <CVPreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
        </Suspense>
      )}
    </section>
  );
};
