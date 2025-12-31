import React from 'react';
import { Mail, MapPin, Clock, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';

export const ContactInfoSection: React.FC = () => {
  const { language } = useLanguageStore();
  const { t } = useTranslation();

  return (
    <section className="space-y-6">
      {/* Info Cards */}
      <div className="glass rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{t('contact.info.email')}</h3>
            <Link
              to={`mailto:${contactsInfo.email}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              contact@barthezkenwou.dev
            </Link>
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
            <MapPin className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{t('contact.info.location')}</h3>
            <p className="text-sm text-muted-foreground">Cameroun</p>
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
            <Clock className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{t('contact.info.availability')}</h3>
            <p className="text-sm text-green-500">{t('contact.info.available')}</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="glass rounded-2xl p-6 border border-border">
        <h3 className="font-semibold text-foreground mb-4">
          {language === 'fr' ? 'Réseaux sociaux' : 'Social Networks'}
        </h3>
        <div className="space-y-3">
          <Link
            to={contactsInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
          >
            <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
            <span className="text-sm text-muted-foreground group-hover:text-foreground">
              GitHub
            </span>
            <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
          </Link>
          <Link
            to={contactsInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
            <span className="text-sm text-muted-foreground group-hover:text-foreground">
              LinkedIn
            </span>
            <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
          </Link>
        </div>
      </div>

      {/* Certification highlight */}
      <div className="glass rounded-2xl p-6 border border-primary/30 bg-primary/5">
        <h3 className="font-semibold text-foreground mb-2">
          {language === 'fr' ? 'Certification vérifiée' : 'Verified Certification'}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          Full Stack Development - OpenClassrooms
        </p>
        <Link
          to="https://credsverse.com/credentials/cc4d79b0-24b1-4270-bb66-f106886acba3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          {language === 'fr' ? 'Voir le certificat' : 'View certificate'}
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};
