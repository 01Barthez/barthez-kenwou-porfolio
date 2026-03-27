import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { projectsData } from '@/entities/projets/api/mocks/projectData.mocks';
import { ProjectCard } from '@/entities/projets';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/button';

export const OtherProjectSection: React.FC<{ currentProjectId: string | number }> = ({ currentProjectId }) => {
  const { language } = useLanguageStore();
  
  const relatedProjects = projectsData
    .filter(p => p.id !== currentProjectId)
    .slice(0, 3); // Get 3 other projects

  if (relatedProjects.length === 0) return null;

  return (
    <section className="mb-16 animate-fade-in-up">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-1">
            {language === 'fr' ? 'Projets Similaires' : 'Related Projects'}
          </h2>
          <p className="text-sm text-muted-foreground">
            {language === 'fr' ? 'Découvrez d\'autres réalisations qui pourraient vous intéresser.' : 'Discover other projects that might interest you.'}
          </p>
        </div>
        <Button variant="ghost" className="hidden md:flex text-primary hover:text-primary hover:bg-primary/10" asChild>
          <Link to="/projects">
            {language === 'fr' ? 'Voir tous les projets' : 'View all projects'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedProjects.map(project => (
          <ProjectCard key={project.id} project={project as any} />
        ))}
      </div>
      
      <Button variant="outline" className="w-full mt-8 md:hidden border-border/50 text-foreground" asChild>
        <Link to="/projects">
          {language === 'fr' ? 'Voir tous les projets' : 'View all projects'}
        </Link>
      </Button>
    </section>
  );
};
