import { useEffect } from 'react';
import { ProjectNotFound } from './sections/ProjectNotFound';
import { HeroDetailSection } from './sections/HeroDetailSection';
import { ProjectOverviewSection } from './sections/ProjectOverviewSection';
import { ImpactSection } from './sections/ImpactSection';
import { TechStackSection } from './sections/TechStackSection';
import { OtherProjectSection } from './sections/OtherProjectSection';
import { CTADetailsSection } from './sections/CTADetailsSection';
import { useParams } from 'react-router-dom';
import { SEO } from '@/shared/ui/SEO/SEO';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { projectsData } from '@/entities/projets/api/mocks/projectData.mocks';
import { truncateFonction } from '@/shared/utils/truncateText/helpers';

export const ProjectDetailPage = () => {
  const { id, projectID } = useParams();
  const searchId = projectID || id;
  const project = projectsData.find((p: any) => String(p.id) === searchId);
  const { language } = useLanguageStore();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [searchId]);

  if (!project) return <ProjectNotFound />;

  return (
    <>
      <SEO
        title={`${
          language === 'fr'
            ? truncateFonction(project?.titleFr || '', 24)
            : truncateFonction(project?.titleFr || '', 24)
        } | Barthez Kenwou - Passionate DevOps & Full-Stack JS Developer `}
        description={`${
          language === 'fr'
            ? truncateFonction(project.descriptionFr || '', 160)
            : truncateFonction(project.descriptionEn || '', 160)
        } | Barthez Kenwou - Passionate DevOps & Full-Stack JS Developer `}
      />

      <div className="min-h-screen py-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image & Primary Info */}
          <HeroDetailSection project={project} />

          {/* Overview & Core details */}
          <ProjectOverviewSection project={project} />

          {/* Impact / Results */}
          <ImpactSection project={project} />

          {/* Tech Stack */}
          <TechStackSection project={project} />

          {/* Other Projects */}
          <OtherProjectSection currentProjectId={project.id} />

          {/* Strong CTA */}
          <CTADetailsSection />
        </div>
      </div>
    </>
  );
};
