import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { useParams } from 'react-router-dom';
import { projectsData } from '@/entities/projets/api/mocks/projectData.mocks';

export const TechStackSection: React.FC = () => {
  const { language } = useLanguageStore();

  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id) || {
    techStack: { frontend: [], backend: [], database: [], devops: [] },
  };

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-foreground mb-6">
        {language === 'fr' ? 'Stack Technique' : 'Tech Stack'}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {project.techStack.frontend.length > 0 && (
          <div className="p-4 rounded-xl bg-card border border-border">
            <h4 className="font-medium text-foreground mb-2">Frontend</h4>
            <div className="flex flex-wrap gap-1">
              {project.techStack.frontend.map((tech: string) => (
                <span key={tech} className="px-2 py-1 rounded bg-secondary text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {project.techStack.backend.length > 0 && (
          <div className="p-4 rounded-xl bg-card border border-border">
            <h4 className="font-medium text-foreground mb-2">Backend</h4>
            <div className="flex flex-wrap gap-1">
              {project.techStack.backend.map((tech: string) => (
                <span key={tech} className="px-2 py-1 rounded bg-secondary text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {project.techStack.database.length > 0 && (
          <div className="p-4 rounded-xl bg-card border border-border">
            <h4 className="font-medium text-foreground mb-2">Database</h4>
            <div className="flex flex-wrap gap-1">
              {project.techStack.database.map((tech: string) => (
                <span key={tech} className="px-2 py-1 rounded bg-secondary text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {project.techStack.devops.length > 0 && (
          <div className="p-4 rounded-xl bg-card border border-border">
            <h4 className="font-medium text-foreground mb-2">DevOps</h4>
            <div className="flex flex-wrap gap-1">
              {project.techStack.devops.map((tech: string) => (
                <span key={tech} className="px-2 py-1 rounded bg-secondary text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
