import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MessageSquare, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { GradientDots } from '@/shared/ui/gradient-dots';

export const ProjectCTASection: React.FC = () => {
  // const { i18n } = useTranslation();
  const { language } = useLanguageStore();
  const { t } = useTranslation();

  // const isFr = i18n.language === 'fr';

  return (
    <section className="px-0 relative z-10 overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 z-0">
        <GradientDots duration={20} />
      </div>

      <div className="relative  z-10 w-full mx-auto text-center">
        <div className="p-10 rounded-lg bg-linear-to-br from-primary/20 to-accent/20 border border-primary/30">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {language === 'fr' ? 'Tu veux un projet aussi performant ?' : 'Want a project as powerful as these?'}
          </h2>

          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {language === 'fr'
              ? 'Disponible pour missions & collaborations. Spécialisé en Cloud DevOps et Full-Stack JS.'
              : 'Available for missions & collaborations. Specialized in Cloud DevOps and Full-Stack JS.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4">
            <Link
              to={contactsInfo.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-sm bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-all hover:glow-primary hover:scale-105"
            >
              <Github className="h-5 w-5" />
              <span>
                {language === 'fr'
                  ? 'Voir plus sur GitHub' : 'More on GitHub'}
              </span>
            </Link>

            <div className="bg-background/80 py-1 px-8 rounded-lg  flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground items-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>
                  {language === 'fr'
                    ? 'Disponible immédiatement' : 'Available now'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span>
                  {language === 'fr'
                    ? 'Télétravail satisfaisant' : 'Remote Friendly'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="relative mt-24 py-16 px-8 rounded-3xl overflow-hidden group">
    //   {/* Background with glassmorphism and subtle gradient */}
    //   <div className="absolute inset-0 bg-secondary/30 backdrop-blur-md border border-border/40 transition-all duration-500 group-hover:bg-secondary/40" />
    //   <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
    //   <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

    //   <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
    //     <div className="space-y-2">
    //       <h2 className="section-title">
    //         <span className="gradient-text">
    //           {isFr 
    //             ? 'Tu veux un projet aussi performant ?' 
    //             : 'Want a project as powerful as these?'}
    //         </span>
    //       </h2>
    //       <p className="section-subtitle">
    //         {isFr 
    //           ? 'Disponible pour missions & collaborations. Spécialisé en Cloud DevOps et Full-Stack JS.'
    //           : 'Available for missions & collaborations. Specialized in Cloud DevOps and Full-Stack JS.'}
    //       </p>
    //     </div>

    //     <div className="flex flex-wrap justify-center gap-4">
    //       <Link
    //         to="/contact"
    //         className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all hover:scale-105"
    //       >
    //         <MessageSquare className="h-5 w-5" />
    //         <span>{isFr ? 'Discutons de ton projet' : "Let's discuss your project"}</span>
    //       </Link>

    //       <Link
    //         to={contactsInfo.repository}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-secondary border border-border/60 text-foreground font-bold hover:bg-secondary/80 transition-all"
    //       >
    //         <Github className="h-5 w-5" />
    //         <span>{isFr ? 'Voir plus sur GitHub' : 'More on GitHub'}</span>
    //       </Link>
    //     </div>

    //     <div className="pt-6 flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
    //       <div className="flex items-center gap-2">
    //         <span className="w-2 h-2 rounded-full bg-emerald-500" />
    //         <span>{isFr ? 'Disponible immédiatement' : 'Available now'}</span>
    //       </div>
    //       <div className="flex items-center gap-2">
    //         <span className="w-2 h-2 rounded-full bg-sky-500" />
    //         <span>{isFr ? 'Remote Friendly' : 'Remote Friendly'}</span>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};
