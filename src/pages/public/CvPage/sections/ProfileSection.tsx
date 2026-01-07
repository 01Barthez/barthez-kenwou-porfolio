import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Code2 } from 'lucide-react';

export const ProfileSection: React.FC = () => {
  const { language } = useLanguageStore();

  const profile =
    language === 'fr'
      ? "Développeur Full Stack passionné et ingénieur DevOps certifié AWS avec plus de 3 ans d'expérience dans la conception, le développement et le déploiement d'applications web modernes et d'infrastructures cloud. Expert en architecture microservices, CI/CD, et solutions serverless. Orienté résultats avec une forte capacité à transformer des idées complexes en produits fonctionnels et performants."
      : 'Passionate Full Stack Developer and AWS certified DevOps Engineer with over 3 years of experience in designing, developing, and deploying modern web applications and cloud infrastructures. Expert in microservices architecture, CI/CD, and serverless solutions. Results-oriented with a strong ability to transform complex ideas into functional and high-performance products.';

  return (
    <section>
      <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
        <div className="p-2 rounded-lg bg-primary/10">
          <Code2 className="h-5 w-5 text-primary" />
        </div>
        {language === 'fr' ? 'Profil' : 'Profile'}
      </h2>
      
      <blockquote className="text-muted-foreground leading-relaxed">{profile}</blockquote>
    </section>
  );
};
