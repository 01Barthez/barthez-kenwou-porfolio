import { CTASection } from './sections/CTASection';
import { HeroSection } from './sections/HeroSection';
import { FilterSection } from './sections/FilterSection';
import { GridProject } from './sections/GridProject';
import { SEO } from '@/shared/ui/SEO/SEO';

export const ProjectPage = () => {
  return (
    <>
      <SEO
        title="Projets - Barthez Kenwou | Passionate DevOps & Full-Stack JS Developer"
        description="Réalisations récentes - Passionné par le développement web et le cloud computing depuis plus de 3 ans, je me spécialise dans la création d'applications web modernes, performantes et évolutives. Toujours à la recherche de nouveaux défis, je m'investis continuellement dans l'apprentissage de nouvelles technologies et les meilleures pratiques du secteur."
      />
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <HeroSection />

          {/* Filters */}
          <FilterSection />

          {/* Projects Grid */}
          <GridProject />
        </div>

        {/* CTA */}
        <CTASection />
      </div>
    </>
  );
};
