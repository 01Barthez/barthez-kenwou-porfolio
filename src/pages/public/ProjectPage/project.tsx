import { HeroSection } from './sections/HeroSection';
import { GridProject } from './sections/GridProject';
import { FeaturedProjectsMarquee } from './sections/FeaturedProjectsMarquee';
import { ProjectStatsSection } from './sections/ProjectStatsSection';
import { ProjectCTASection } from './sections/ProjectCTASection';
import { SEO } from '@/shared/ui/SEO/SEO';
import { useProjectFilters } from '@/features/projets-browse';

export const ProjectPage = () => {
  const filterState = useProjectFilters();

  return (
    <>
      <SEO
        path="/projects"
        title="Projets"
        description="Réalisations récentes - applications web, plateformes cloud et solutions DevOps conçues par Barthez Kenwou."
      />
      <div className="min-h-screen py-10 md:py-16 lg:py-20 overflow-x-clip">
        {/* Header - Centered */}
        <HeroSection />

        {/* Post-Marquee Content - Centered */}
        <div className="px-4 md:px-10 lg:px-14">
          {/* Projects Grid with Filters */}
          <GridProject filterState={filterState} />

          {/* Impact stays visible regardless of project filters */}
          <ProjectStatsSection />

          {/* Featured Projects Marquee - Full Width */}
          <FeaturedProjectsMarquee />

          {/* New Strategic CTA */}
          <ProjectCTASection />
        </div>
      </div>
    </>
  );
};
