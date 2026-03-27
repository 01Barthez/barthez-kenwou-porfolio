import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa6';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/button';

export const CTADetailsSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="text-center mt-12 py-10 border-t border-border/50">
      <div className="max-w-2xl mx-auto p-6 md:p-10 rounded-xl bg-secondary/20 border border-border/30 relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mr-10 -mt-10 h-32 w-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
        
        <HiOutlineChatBubbleLeftRight className="h-10 w-10 text-primary mx-auto mb-6" />
        
        <h3 className="text-xl md:text-2xl font-extrabold text-foreground mb-3 tracking-tight">
          {language === 'fr' ? 'Un projet en tête ?' : 'Have a project in mind?'}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
          {language === 'fr'
            ? "Explorons comment je peux vous aider à concrétiser vos idées avec des solutions modernes et performantes."
            : 'Let’s explore how I can help you bring your ideas to life with modern and high-performance solutions.'}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button asChild className="rounded-lg h-11 px-8 font-bold text-sm">
            <Link to="/contact">
              {language === 'fr' ? 'Discutons-en' : "Let's Talk"}
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="rounded-lg h-11 px-8 font-bold text-sm bg-background border-border/50">
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
