import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { SkillsSection } from './sections/SkillsSection';
import { AchievmentSection } from './sections/AchievmentSection';
import { CertificationSection } from './sections/CertificationSection';
import { SEO } from '@/shared/ui/SEO/SEO';
import { SmoothCursor } from '@/shared/ui/smooth-cursor';

export const SkillPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Skills - Barthez Kenwou | Passionate DevOps & Full-Stack JS Developer"
        description="Technologies et outils maîtrisés - Cloud AWS | DevOps | FullStack | Web App - Passionné par le développement web et le cloud computing depuis plus de 3 ans, je me spécialise dans la création d'applications web modernes, performantes et évolutives."
      />

      <div className="min-h-screen py-20">
        {/* Hero Section */}
        <HeroSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Skills Section */}
        <CertificationSection />

        {/* Achievment Section */}
        <AchievmentSection />

        <>
          {/* Custum cursor for skill page */}
          <SmoothCursor />
        </>
      </div>
    </>
  );
};
