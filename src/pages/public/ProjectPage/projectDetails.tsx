import { ProjectNotFound } from './sections/ProjectNotFound';
import { BackSection } from './sections/BackSection';
import { HeroDetailSection } from './sections/HeroDetailSection';
import { TitleMeta } from './sections/Title&Meta';
import { ProjectDescription } from './sections/ProjectDescription';
import { ChallengesSection } from './sections/ChallengesSection';
import { SolutionSection } from './sections/SolutionSection';
import { ResultsSection } from './sections/ResultsSection';
import { TechStackSection } from './sections/TechStackSection';
import { NavigationSection } from './sections/NavigationSection';
import { OtherProjectSection } from './sections/OtherProjectSection';
import { CTADetailsSection } from './sections/CTADetailsSection';
import { useParams } from 'react-router-dom';
import { SEO } from '@/shared/ui/SEO/SEO';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { projectsData } from '@/entities/projets/api/mocks/projectData.mocks';
import { truncateFonction } from '@/shared/utils/truncateText/helpers';

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projectsData.find((p: any) => p.id === id);
  const { language } = useLanguageStore();

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
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <BackSection />

          {/* Hero Image */}
          <HeroDetailSection />

          {/* Title & Meta */}
          <TitleMeta />

          {/* Description */}
          <ProjectDescription />

          {/* Challenges & Solutions */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Challenges part */}
            <ChallengesSection />

            {/* Solutions part */}
            <SolutionSection />
          </div>

          {/* Results */}
          <ResultsSection />

          {/* Tech Stack */}
          <TechStackSection />

          {/* Navigation */}
          <NavigationSection />

          {/* Other Projects */}
          <OtherProjectSection />

          {/* CTA */}
          <CTADetailsSection />
        </div>
      </div>
    </>
  );
};
