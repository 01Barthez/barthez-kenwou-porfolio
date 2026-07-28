
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
import { RetroGrid } from '@/shared/ui/retro-grid';
import { useLanguageStore } from '@/shared/state/useLanguageStore';

export const CvPage = () => {
  const { language } = useLanguageStore();

  return (
    <>
      <SEO
        path="/cv"
        title="CV"
        description="CV de Barthez Kenwou — Développeur Full Stack & Ingénieur DevOps AWS. Expérience, compétences et parcours professionnel."
      />

      <div className="min-h-screen py-18 md:py-16 lg:py-20 px-4 md:px-10 lg:px-14 overflow-x-clip">
        {/* Action Buttons */}
        <section className="text-center relative mb-10 md:mb-16 pt-12 md:pt-16 animate-fade-in">
          <h1 className="section-title">
            {language === 'fr' ? 'Mon' : 'My'}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground">
              &nbsp; CV
            </span>
          </h1>

          <div className="mt-6 mb-16 md:mb-24">
            <ButtonsCTASection />
          </div>

          <RetroGrid />
        </section>

        {/* CV Container */}
        <section className="relative z-10 max-w-4xl mx-auto mb-10 bg-card border border-border rounded-md overflow-hidden shadow-md print:shadow-none print:border-none">
          {/* Header */}
          <HeaderSection personalInfo={cvData.personalInfo} />

          {/* Content */}
          <div className="p-4 sm:p-6 md:p-8 print:p-6 space-y-6 md:space-y-8">
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
        </section>

        {/* Action Buttons */}
        <ButtonsCTASection />

        {/* Bottom CTA */}
        <CTASection />
      </div>
    </>
  );
};
