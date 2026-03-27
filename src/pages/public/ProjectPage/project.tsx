import { HeroSection } from './sections/HeroSection';
import { GridProject } from './sections/GridProject';
import { ProjectStatsSection } from './sections/ProjectStatsSection';
import { ProjectCTASection } from './sections/ProjectCTASection';
import { SEO } from '@/shared/ui/SEO/SEO';
import { useProjectFilters } from '@/features/projets-browse';

export const ProjectPage = () => {
  const filterState = useProjectFilters();

  return (
    <>
      <SEO
        title="Projets - Barthez Kenwou | Passionate DevOps & Full-Stack JS Developer"
        description="Réalisations récentes - Passionné par le développement web et le cloud computing depuis plus de 3 ans, je me spécialise dans la création d'applications web modernes, performantes et évolutives. Toujours à la recherche de nouveaux défis, je m'investis continuellement dans l'apprentissage de nouvelles technologies et les meilleures pratiques du secteur."
      />
      <div className="min-h-screen py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <HeroSection />

          {/* Projects Grid with Filters */}
          <GridProject filterState={filterState} />

          {/* New Stats Section */}
          <ProjectStatsSection isVisible={filterState.filters.category === 'all'} />

          {/* New Strategic CTA */}
          <ProjectCTASection />
        </div>
      </div>
    </>
  );
};
