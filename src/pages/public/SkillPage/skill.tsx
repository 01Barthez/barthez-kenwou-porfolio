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
        path="/skills"
        title="Compétences"
        description="Technologies et outils maîtrisés — Cloud AWS, DevOps, Full Stack JS, React, Node.js, Kubernetes, Terraform et CI/CD."
      />

      <div className="min-h-screen py-16 md:py-16 lg:py-20 overflow-x-clip">
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
