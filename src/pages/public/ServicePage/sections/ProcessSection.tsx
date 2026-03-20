import { processSteps } from '@/shared/mocks/processSteps.mocks';
import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { cn } from '@/lib/utils';

export const ProcessSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="mb-20 relative">
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2 tracking-tight">
          {language === 'fr' ? 'Mon Processus ' : 'My Work '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            {language === 'fr' ? 'de Travail' : 'Process'}
          </span>
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm max-w-2xl mx-auto font-medium">
          {language === 'fr' 
            ? "Une méthodologie rigoureuse garantissant l'excellence et la fiabilité à chaque étape." 
            : "A rigorous methodology ensuring excellence and reliability at every stage."}
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        {/* Glow Line (Desktop/Tablet) */}
        <div className="absolute left-[2.25rem] md:left-1/2 top-0 bottom-0 w-[1px] bg-border md:-translate-x-1/2" />

        <div className="space-y-8 md:space-y-12 relative z-10">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative flex flex-col md:flex-row items-center justify-between group">
                
                {/* Mobile fallback line (Only pure mobile < sm) */}
                <div className="absolute left-6 top-8 bottom-[-2rem] w-[1px] bg-border sm:hidden z-0" />

                {/* Left Side Content Container */}
                <div className={cn(
                  "w-full md:w-[45%] flex z-10",
                  isEven ? "md:justify-end" : "md:justify-start order-last md:order-first"
                )}>
                  <div className={cn(
                    "glass p-4 md:p-5 rounded-xl border border-border shadow-sm transition-all duration-300 hover:border-primary/50 relative group/card ml-14 sm:ml-16 md:ml-0 w-full",
                    isEven ? "text-left md:text-right" : "text-left"
                  )}>
                    <div className="relative z-10 block">
                      <div className={cn(
                        "text-primary font-mono text-[10px] font-bold uppercase mb-1.5 opacity-80 flex items-center md:inline-flex tracking-wider",
                        isEven ? "md:flex-row-reverse" : "md:flex-row"
                      )}>
                        <span className="mr-2 md:hidden">0{index + 1}.</span> 
                        {language === 'fr' ? 'Étape' : 'Step'} 0{index + 1}
                      </div>
                      <h3 className="text-sm md:text-base font-semibold text-foreground mb-1.5">
                        {language === 'fr' ? step.titleFr : step.titleEn}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {language === 'fr' ? step.descFr : step.descEn}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Node Icon */}
                <div className="absolute left-6 sm:left-[2.25rem] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-background border border-primary/50 shadow-sm flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105 group-hover:border-primary">
                    <Icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
                  </div>
                </div>

                {/* Right Side Spacer for alternate layout */}
                <div className={cn("w-full md:w-[45%] hidden md:block", isEven ? "order-last" : "")} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
