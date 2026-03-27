import React from 'react';
import { ContactForm } from '@/entities/contact/ui/ContactForm.ui';

export const ContactFormSection: React.FC = () => {
  return (
    <div className="glass rounded-xl p-6 md:p-8 border border-border/50">
      <ContactForm />
    </div>
  );
};
