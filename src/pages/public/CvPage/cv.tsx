import { CTASection } from './sections/CTASection';
import { LanguageSection } from './sections/LanguageSection';
import { CertificationSection } from './sections/CertificationSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProfileSection } from './sections/ProfileSection';
import { HeaderSection } from './sections/HeaderSection';
import { ButtonsCTASection } from './sections/ButtonsCTASection';
import { SEO } from '@/shared/ui/SEO/SEO';

export const CvPage = () => {
  return (
    <>
      <SEO
        title="CV - Barthez Kenwou | Passionate DevOps & Full-Stack JS Developer"
        description="Développeur Full Stack passionné et ingénieur DevOps certifié AWS avec plus de 3 ans d'expérience dans la conception, le développement et le déploiement d'applications web modernes et d'infrastructures cloud. Expert en architecture microservices, CI/CD, et solutions serverless. Orienté résultats avec une forte capacité à transformer des idées complexes en produits fonctionnels et performants."
      />

      <div className="min-h-screen py-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Action Buttons */}
          <ButtonsCTASection />

          {/* CV Container */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl print:shadow-none print:border-none">
            {/* Header */}
            <HeaderSection />

            {/* Content */}
            <div className="p-8 print:p-6 space-y-8">
              {/* Profile Section*/}
              <ProfileSection />

              {/* Experience Section */}
              <ExperienceSection />

              {/* Skills Section */}
              <SkillsSection />

              {/* Certifications Section */}
              <CertificationSection />

              {/* Languages Section*/}
              <LanguageSection />
            </div>
          </div>

          {/* Bottom CTA */}
          <CTASection />
        </div>
      </div>
    </>
  );
};
