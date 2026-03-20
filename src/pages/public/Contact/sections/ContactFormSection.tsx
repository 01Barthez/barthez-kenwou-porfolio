import React, { useState } from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = "237655646688"; 

export const ContactFormSection: React.FC = () => {
  const { language } = useLanguageStore();
  const { t } = useTranslation();

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Affichage du Toast de succès
    const successText = language === "fr" 
      ? "Message validé ! Ouverture de WhatsApp..." 
      : "Message ready! Opening WhatsApp...";
    setToastMessage(successText);
    
    setTimeout(() => setToastMessage(null), 5000);

    // 2. Formatage structuré du message
    const formattedMessage = `*Nouveau message de contact (Portfolio)*\n\n*Nom:* ${formData.name}\n*Email:* ${formData.email}\n*Sujet:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
    
    // 3. Redirection WhatsApp avec message encodé
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;
    
    // Léger délai pour laisser le temps de voir le toast
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);

    // Reset du formulaire
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-lg shadow-2xl animate-bounce" style={{ animationIterationCount: 1 }}>
          <CheckCircle2 className="h-5 w-5" />
          <p className="font-semibold text-sm">{toastMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="glass rounded-sm p-8 border border-border space-y-6">
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
              className="w-full rounded-sm border border-border bg-secondary/30 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
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
              className="w-full rounded-sm border border-border bg-secondary/30 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
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
            className="w-full rounded-sm border border-border bg-secondary/30 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
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
            className="w-full rounded-sm border border-border bg-secondary/30 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
            placeholder={
              language === 'fr'
                ? 'Décrivez votre projet ou votre demande...'
                : 'Describe your project or request...'
            }
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-2 font-medium text-primary-foreground transition-all hover:glow-primary hover:scale-[1.02] active:scale-[0.98]"
        >
          <Send className="h-4 w-4" />
          <span>{t('contact.form.send')}</span>
        </button>
      </form>
    </>
  );
};
