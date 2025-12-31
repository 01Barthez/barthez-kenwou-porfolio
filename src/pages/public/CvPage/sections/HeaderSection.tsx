import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="bg-gradient-to-r from-primary/20 to-accent/20 p-8 print:p-6">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div className="w-32 h-32 rounded-2xl bg-primary/20 border-2 border-primary flex items-center justify-center shrink-0">
          <span className="text-4xl font-bold gradient-text">BK</span>
        </div>
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {contactsInfo.name}
          </h1>
          <p className="text-xl text-primary font-semibold mb-1">
            {language === 'fr' ? contactsInfo.titleFr : contactsInfo.titleEn}
          </p>
          <p className="text-muted-foreground font-mono">
            {language === 'fr' ? contactsInfo.subtitleFr : contactsInfo.subtitleEn}
          </p>

          {/* Contact Info */}
          <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start text-sm">
            <span className="flex items-center gap-1 text-muted-foreground">
              <Mail className="h-4 w-4" />
              {contactsInfo.email}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Phone className="h-4 w-4" />
              {contactsInfo.phone}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {contactsInfo.location}
            </span>
          </div>

          <div className="mt-2 flex flex-wrap gap-4 justify-center md:justify-start text-sm">
            <Link
              to={contactsInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary hover:underline"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
            <Link
              to={contactsInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary hover:underline"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
