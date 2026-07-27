import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Mail } from 'lucide-react';
import React from 'react';
import { MdWhatsapp } from 'react-icons/md';
import { GradientDots } from '@/shared/ui/gradient-dots';
import { DualCtaButtons } from '@/shared/ui/DualCtaButtons';

export const CTASection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="px-0 mt-10 relative print:hidden">
      <div className="relative z-10 overflow-hidden rounded-lg border border-primary/25 shadow-[0_0_40px_-16px_hsla(268,52%,38%,0.35)]">
        <div className="absolute inset-0 z-0">
          <GradientDots duration={20} colorCycleDuration={4} />
        </div>
        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-background/20 via-transparent to-background/35" />

        <div className="relative z-10 w-full mx-auto text-center p-5 sm:p-6 md:p-8">
          <div className="mx-auto max-w-2xl rounded-md border border-border/40 bg-background/55 dark:bg-background/50 backdrop-blur-md px-4 py-5 sm:px-6 sm:py-6 shadow-sm flex flex-col items-center">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
              {language === 'fr'
                ? 'Prêt à donner vie à vos idées ?'
                : 'Ready to bring your ideas to life?'}
            </h2>

            <p className="text-sm text-muted-foreground mb-6 max-w-lg leading-relaxed">
              {language === 'fr'
                ? "Mon profil vous intéresse ? N'hésitez pas à me contacter dès aujourd'hui pour échanger sur vos futurs projets tech et vos enjeux cloud."
                : "Interested in my profile? Don't hesitate to reach out today to discuss your future tech projects and cloud challenges."}
            </p>

            <DualCtaButtons
              primary={{
                label: language === 'fr' ? 'Discutons sur WhatsApp' : 'Chat on WhatsApp',
                to: contactsInfo.whatsappLink,
                external: true,
                icon: <MdWhatsapp className="h-4 w-4" />,
              }}
              secondary={{
                label: language === 'fr' ? "M'envoyer un Email" : 'Send an Email',
                to: `mailto:${contactsInfo.email}`,
                icon: <Mail className="h-4 w-4" />,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
