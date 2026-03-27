import React from 'react';
import { 
  HiOutlineEnvelope, 
  HiOutlineMapPin, 
  HiOutlineClock 
} from 'react-icons/hi2';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { useTranslation } from 'react-i18next';
import { contactsInfo } from '@/shared/mocks/constContactInfo.mocks';
import { ContactInfoCard } from '@/entities/contact/ui/ContactInfoCard.ui';

export const ContactInfoSection: React.FC = () => {
  const { language } = useLanguageStore();
  const { t } = useTranslation();

  return (
    <section className="space-y-4">
      <ContactInfoCard 
        icon={HiOutlineEnvelope}
        label={t('contact.info.email')}
        value={contactsInfo.email}
        href={`mailto:${contactsInfo.email}`}
      />

      <ContactInfoCard 
        icon={HiOutlineMapPin}
        label={t('contact.info.location')}
        value="Yaoundé, Cameroun"
        colorClass="text-accent"
      />

      <ContactInfoCard 
        icon={HiOutlineClock}
        label={t('contact.info.availability')}
        value={t('contact.info.available')}
        colorClass="text-green-500"
      />

      {/* Social Links */}
      <div className="glass rounded-xl p-5 border border-border/50 transition-colors">
        <h3 className="text-xs uppercase tracking-widest font-bold text-foreground/70 mb-5">
          {language === 'fr' ? 'Réseaux sociaux' : 'Social Networks'}
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <ContactInfoCard 
            icon={FaGithub}
            label="GitHub"
            value="01Barthez"
            href={contactsInfo.github}
            className="flex-col items-start !p-3"
          />
          <ContactInfoCard 
            icon={FaLinkedin}
            label="LinkedIn"
            value="Barthez Kenwou"
            href={contactsInfo.linkedin}
            className="flex-col items-start !p-3"
            colorClass="text-blue-500"
          />
        </div>
      </div>
    </section>
  );
};
