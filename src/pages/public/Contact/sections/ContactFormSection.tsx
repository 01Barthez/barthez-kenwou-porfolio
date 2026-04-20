import React from 'react';
import { ContactForm } from '@/entities/contact/ui/ContactForm.ui';

export const ContactFormSection: React.FC = () => {
  return (
    <div className="glass rounded-sm p-2 md:p-4 border border-border/50">
      <ContactForm />
    </div>
  );
};
