import { useEffect } from 'react';
import { ProjectNotFound } from './sections/ProjectNotFound';
import { HeroDetailSection } from './sections/HeroDetailSection';
import { ProjectOverviewSection } from './sections/ProjectOverviewSection';
import { ProblemSolutionSection } from './sections/ProblemSolutionSection';
import { ArchitectureTestingSection } from './sections/ArchitectureTestingSection';
import { ImpactSection } from './sections/ImpactSection';
import { TechStackSection } from './sections/TechStackSection';
import { OtherProjectSection } from './sections/OtherProjectSection';
import { CTADetailsSection } from './sections/CTADetailsSection';
import { useParams } from 'react-router-dom';
import { SEO } from '@/shared/ui/SEO/SEO';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { projectsData } from '@/entities/projets/api/mocks/projectData.mocks';
import { truncateFonction } from '@/shared/ui/utils/truncateText/helpers';

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
        path={`/projects/${searchId}`}
        title={`${language === 'fr'
            ? truncateFonction(project?.titleFr || '', 60)
            : truncateFonction(project?.titleEn || '', 60)
          }`}
        description={`${language === 'fr'
            ? truncateFonction(project.descriptionFr || '', 160)
            : truncateFonction(project.descriptionEn || '', 160)
          }`}
        openGraph={{
          type: 'article',
          image: project.images?.[0] || project.preview,
          imageAlt: language === 'fr' ? project.titleFr : project.titleEn,
        }}
        jsonLd={{
          '@type': 'CreativeWork',
          name: language === 'fr' ? project.titleFr : project.titleEn,
          alternateName: language === 'fr' ? project.titleEn : project.titleFr,
          description: language === 'fr' ? project.descriptionFr : project.descriptionEn,
          image: project.images?.[0] || project.preview,
          url: `https://barthez-kenwou.dev/projects/${searchId}`,
          author: {
            '@type': 'Person',
            name: 'Barthez Kenwou',
            url: 'https://barthez-kenwou.dev',
          },
          keywords: [
            ...(project.techStack?.frontend || []),
            ...(project.techStack?.backend || []),
            ...(project.techStack?.devops || []),
          ].join(', '),
        }}
      />

      <div className="min-h-screen overflow-x-clip">
        {/* Hero Image & Primary Info */}
        <HeroDetailSection project={project} />

        {/* Overview & Core details */}
        <ProjectOverviewSection project={project} />

        {/* Problem and Solution */}
        <ProblemSolutionSection project={project} />

        {/* Tech Stack */}
        <TechStackSection project={project} />

        {/* Architecture & Testing */}
        <ArchitectureTestingSection project={project} />

        {/* Impact / Results / Metrics / Challenges */}
        <ImpactSection project={project} />

        {/* Other Projects */}
        <OtherProjectSection currentProjectId={project.id} />

        {/* Strong CTA */}
        <CTADetailsSection />
      </div>
    </>
  );
};

