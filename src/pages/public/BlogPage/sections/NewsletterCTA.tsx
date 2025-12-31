import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react';

export const NewsletterCTA: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="mt-12">
      <div className="p-8 rounded-2xl bg-linear-to-br from-primary/10 to-accent/10 border border-primary/20 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {language === 'fr' ? 'Restez Informé' : 'Stay Informed'}
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          {language === 'fr'
            ? 'Recevez les derniers articles et actualités directement dans votre boîte mail.'
            : 'Receive the latest articles and news directly in your inbox.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
          />
          <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all">
            {language === 'fr' ? "S'abonner" : 'Subscribe'}
          </button>
        </div>
      </div>
    </section>
  );
};
