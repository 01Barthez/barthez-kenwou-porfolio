import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { Button } from '@/shared/ui/button';

export const CTADetailsSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="text-center animate-fade-in-up">
      <div className="relative p-8 md:p-12 rounded-lg bg-gradient-to-br from-primary/10 via-background to-secondary/30 border border-primary/20 overflow-hidden shadow-lg">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
            {language === 'fr' ? 'Prêt à propulser votre prochain projet ?' : 'Ready to launch your next project?'}
          </h2>
          
          <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed max-w-xl">
            {language === 'fr'
              ? 'Si vous avez aimé ce projet et que vous souhaitez des résultats similaires pour votre entreprise, parlons-en dès aujourd\'hui !'
              : "If you loved this project and want to achieve similar results for your business, let's talk today!"}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto">
            <Button size="default" className="rounded-xl shadow-lg shadow-primary/20 text-sm px-6 py-3 w-full sm:w-auto" asChild>
              <Link to="/contact">
                {language === 'fr' ? 'Me Contacter' : 'Contact Me'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button size="default" variant="outline" className="rounded-xl border-border/50 hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors text-sm px-6 py-3 w-full sm:w-auto" asChild>
              <Link to={contactsInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
