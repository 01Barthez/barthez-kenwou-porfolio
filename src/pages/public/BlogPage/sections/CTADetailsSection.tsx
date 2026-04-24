import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { FaWhatsapp } from 'react-icons/fa6';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/button';

export const CTADetailsSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="text-center mt-8 py-4 border-t border-border/50">
      <div className="max-w-4xl mx-auto w-full p-4 md:p-4 rounded-sm bg-secondary/20 border border-border/30 relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mr-10 -mt-10 h-32 w-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                
        <h3 className="text-xl md:text-xl font-extrabold text-foreground mb-3 tracking-tight">
          {language === 'fr' ? 'Un projet en tête ?' : 'Have a project in mind?'}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
          {language === 'fr'
            ? "Explorons comment je peux vous aider à concrétiser vos idées avec des solutions modernes et performantes."
            : 'Let’s explore how I can help you bring your ideas to life with modern and high-performance solutions.'}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button asChild className="rounded-sm px-4 font-medium text-xs ">
            <Link to="/contact">
              {language === 'fr' ? 'Discutons-en' : "Let's Talk"}
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="rounded-sm px-4 font-medium text-xs bg-background border-border/50">
            <Link to={contactsInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaWhatsapp className="h-4 w-4 text-green-500" />
              WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
