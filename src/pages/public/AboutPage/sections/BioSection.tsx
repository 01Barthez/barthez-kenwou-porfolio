import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react';
import { User } from 'lucide-react';

export const BioSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="glass rounded-2xl p-6 border border-border animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <div className="px-2 py-1 rounded-sm bg-primary/10">
          <User className="h-4 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">Bio</h3>
      </div>
     
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <p>
          {language === 'fr'
            ? "Passionné par le développement web et le cloud computing depuis plus de 3 ans, je me spécialise dans la création d'applications web modernes, performantes et évolutives."
            : 'Passionate about web development and cloud computing for over 3 years, I specialize in creating modern, high-performance, and scalable web applications.'}
        </p>
        <p>
          {language === 'fr'
            ? "Mon expertise couvre l'ensemble du cycle de développement, de la conception à la mise en production, en passant par l'optimisation des performances et la sécurité. Je maîtrise les technologies AWS et les pratiques DevOps pour garantir des déploiements fiables et automatisés."
            : 'My expertise covers the entire development cycle, from design to production deployment, including performance optimization and security. I master AWS technologies and DevOps practices to ensure reliable and automated deployments.'}
        </p>
        <p>
          {language === 'fr'
            ? "Toujours à la recherche de nouveaux défis, je m'investis continuellement dans l'apprentissage de nouvelles technologies et les meilleures pratiques du secteur."
            : 'Always looking for new challenges, I continuously invest in learning new technologies and industry best practices.'}
        </p>
      </div>
    </section>
  );
};
