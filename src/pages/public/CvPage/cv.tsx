
import { CTASection } from './sections/CTASection';
import { LanguageSection } from './sections/LanguageSection';
import { CertificationSection } from './sections/CertificationSection';
import { SkillsSection } from './sections/SkillsSection';
import { SoftSkillsSection } from './sections/SoftSkillsSection';
import { ReferencesSection } from './sections/ReferencesSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { FeaturedProjectsSection } from './sections/FeaturedProjectsSection';
import { ProfileSection } from './sections/ProfileSection';
import { HeaderSection } from './sections/HeaderSection';
import { ButtonsCTASection } from './sections/ButtonsCTASection';
import { SEO } from '@/shared/ui/SEO/SEO';
import { cvData } from '@/entities/cv/api/mock/cv-data';

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
          <div className="mb-10 bg-card border border-border rounded-2xl overflow-hidden shadow-xl print:shadow-none print:border-none">
            {/* Header */}
            <HeaderSection personalInfo={cvData.personalInfo} />

            {/* Content */}
            <div className="p-8 print:p-6 space-y-8">
              {/* Profile Section*/}
              <ProfileSection />

              {/* Experience Section */}
              <ExperienceSection experiences={cvData.experiences} />

              {/* Featured Projects Section */}
              <FeaturedProjectsSection projects={cvData.featuredProjects} />

              {/* Skills Section */}
              <SkillsSection skills={cvData.skills} />

              {/* Soft Skills Section */}
              <SoftSkillsSection softSkills={(cvData.skills as any)?.softSkills} />

              {/* Certifications Section */}
              <CertificationSection education={cvData.education} />

              {/* Languages Section*/}
              <LanguageSection languages={cvData.languages} />

              {/* References Section */}
              <ReferencesSection references={(cvData as any)?.references} />
            </div>
          </div>

          {/* Action Buttons */}
          <ButtonsCTASection />

          {/* Bottom CTA */}
          <CTASection />
        </div>
      </div>
    </>
  );
};
