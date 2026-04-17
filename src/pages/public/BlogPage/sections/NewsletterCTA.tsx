import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Button } from '@/shared/ui/button';
import React from 'react';

export const NewsletterCTA: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="px-4 md:px-10 lg:px-14 mb-8">
      <div className="p-4 rounded-lg bg-linear-to-br from-primary/10 to-accent/10 border border-primary/20 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {language === 'fr' ? 'Restez Informé' : 'Stay Informed'}
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          {language === 'fr'
            ? 'Recevez les derniers articles et actualités directement dans votre boîte mail.'
            : 'Receive the latest articles and news directly in your inbox.'}
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email"
            required
            className="flex-1 px-2 py-1.5 rounded-sm bg-background border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
          />
          <Button
            className="px-4 py-1.5 rounded-sm bg-primary text-primary-foreground font-medium hover:glow-primary transition-all"
            type='submit'
          >
            {language === 'fr' ? "S'abonner" : 'Subscribe'}
          </Button>
        </form>
      </div>
    </section>
  );
};
