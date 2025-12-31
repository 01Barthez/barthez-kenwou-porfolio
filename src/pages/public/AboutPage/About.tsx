import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { ProfileCard } from '@/entities/userProfile/ui/ProfileCard.ui';
import { BioSection } from './sections/BioSection';
import { EducationSection } from './sections/EducationSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { SEO } from '@/shared/ui/SEO/SEO';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About - Barthez Kenwou | Passionate DevOps & Full-Stack JS Developer"
        description="Mon expertise couvre l'ensemble du cycle de développement, de la conception à la mise en production, en passant par l'optimisation des performances et la sécurité. Je maîtrise les technologies AWS et les pratiques DevOps pour garantir des déploiements fiables et automatisés."
      />

      <div className="min-h-screen max-w-screen mx-auto">
        <div className="min-h-screen py-20 px-6">
          <div className="max-w-6xl mx-auto py-12">
            {/* Header */}
            <HeroSection />

            {/* Profile Section */}
            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              {/* Profile Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 glass rounded-2xl p-6 border border-border">
                  <ProfileCard />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Bio */}
                <BioSection />

                {/* Experience */}
                <ExperienceSection />

                {/* Education */}
                <EducationSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
