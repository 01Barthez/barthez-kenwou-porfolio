import React from 'react';
import { IProject } from '@/entities/projets/model/project.types';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { ProjectSectionShell } from './ProjectSectionShell';
import { Quote } from 'lucide-react';

export const ProjectTestimonialSection: React.FC<{ project: IProject }> = ({ project }) => {
  const { language } = useLanguageStore();
  const isFr = language === 'fr';
  const t = project.testimonial;

  if (!t) return null;

  const quote = isFr ? t.quoteFr : t.quoteEn;
  const role = isFr ? t.roleFr : t.roleEn;

  return (
    <ProjectSectionShell title={isFr ? 'Témoignage' : 'Testimonial'} centered>
      <blockquote className="mx-auto max-w-3xl rounded-md border border-primary/20 bg-primary/5 p-6 md:p-8 text-center">
        <Quote className="w-6 h-6 text-primary/50 mx-auto mb-4" />
        <p className="text-sm md:text-base text-foreground/90 leading-relaxed italic mb-5">
          “{quote}”
        </p>
        <footer className="text-sm">
          <cite className="not-italic font-semibold text-foreground">{t.author}</cite>
          {(role || t.company) && (
            <p className="text-muted-foreground mt-1">
              {[role, t.company].filter(Boolean).join(' · ')}
            </p>
          )}
        </footer>
      </blockquote>
    </ProjectSectionShell>
  );
};
