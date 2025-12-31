import React, { useState } from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';

export const ContactFormSection: React.FC = () => {
  const { language } = useLanguageStore();
  const { t } = useTranslation();

  // const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: language === "fr" ? "Message envoyé !" : "Message sent!",
    //   description: language === "fr"
    //     ? "Je vous répondrai dans les plus brefs délais."
    //     : "I'll get back to you as soon as possible.",
    // });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-border space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            placeholder={language === 'fr' ? 'John Doe' : 'John Doe'}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          {t('contact.form.subject')}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
          placeholder={language === 'fr' ? 'Objet de votre message' : 'Subject of your message'}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
          placeholder={
            language === 'fr'
              ? 'Décrivez votre projet ou votre demande...'
              : 'Describe your project or request...'
          }
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground transition-all hover:glow-primary hover:scale-[1.02] active:scale-[0.98]"
      >
        <Send className="h-5 w-5" />
        <span>{t('contact.form.send')}</span>
      </button>
    </form>
  );
};
