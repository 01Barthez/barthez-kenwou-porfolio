import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Link, useParams } from 'react-router-dom';
import { projectsData } from '@/shared/mocks/projectData.mocks';

export const OtherProjectSection: React.FC = () => {
  const { id } = useParams();
  const otherProjects = projectsData.filter((p) => p.id !== id).slice(0, 3);
  const { language } = useLanguageStore();

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-foreground mb-6">
        {language === 'fr' ? 'Autres Projets' : 'Other Projects'}
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {otherProjects.map((p) => (
          <Link
            key={p.id}
            to={`/projects/${p.id}`}
            className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
          >
            <img
              src={p.image}
              alt={language === 'fr' ? p.titleFr : p.titleEn}
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {language === 'fr' ? p.titleFr : p.titleEn}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{p.category}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
