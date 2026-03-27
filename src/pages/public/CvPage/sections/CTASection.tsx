import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Mail, Send, Sparkles } from 'lucide-react';
import React from 'react';
import { MdWhatsapp } from 'react-icons/md';

export const CTASection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="mt-18 relative print:hidden overflow-hidden rounded-sm p-[1px] group">
      {/* Animated Gradient Border Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 opacity-40 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
      
      {/* Inner Container */}
      <div className="relative bg-background/80 backdrop-blur-xl rounded-[calc(0.75rem-1px)] p-6 md:p-8 text-center overflow-hidden border border-white/5">
        
        {/* Decorative background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-primary/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
          {/* Premium Typography */}
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
            {language === 'fr'
              ? 'Prêt à donner vie à vos idées ?'
              : 'Ready to bring your ideas to life?'}
          </h2>
          
          <p className="text-sm text-muted-foreground mb-6 max-w-lg">
            {language === 'fr'
              ? "Mon profil vous intéresse ? N'hésitez pas à me contacter dès aujourd'hui pour échanger sur vos futurs projets tech et vos enjeux cloud."
              : "Interested in my profile? Don't hesitate to reach out today to discuss your future tech projects and cloud challenges."}
          </p>

          {/* Action Buttons Hub */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
            {/* WhatsApp Premium Button */}
            <a
              href={contactsInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm bg-green-600 text-white font-semibold text-sm hover:bg-green-500 shadow-md hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
            >
              <MdWhatsapp className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
              <span>{language === 'fr' ? 'Discutons sur WhatsApp' : 'Chat on WhatsApp'}</span>
              <Send className="h-3 w-3 opacity-70 group-hover/btn:translate-x-1 transition-transform" />
            </a>

            {/* Email Premium Button */}
            <a
              href={`mailto:${contactsInfo.email}`}
              className="group/btn flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm bg-secondary text-foreground font-semibold text-sm border border-border hover:bg-secondary/70 hover:border-primary/50 shadow-sm hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
            >
              <Mail className="h-4 w-4 group-hover/btn:scale-110 text-primary transition-transform duration-300" />
              <span>{language === 'fr' ? 'M\'envoyer un Email' : 'Send an Email'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
