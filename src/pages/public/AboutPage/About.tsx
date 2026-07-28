import React from 'react';
import { Pointer } from '@/shared/ui/pointer';
import { HeroSection } from './sections/HeroSection';
import { ProfileCard } from '@/entities/userProfile/ui/ProfileCard.ui';
import { BioSection } from './sections/BioSection';
import { EducationSection } from './sections/EducationSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { SEO } from '@/shared/ui/SEO/SEO';
import { PresentationVideo } from '@/widgets/PresentationVideo/PresentationVideo';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        path="/about"
        title="À propos"
        description="Passionné par l'innovation technologique — Mon expertise couvre l'ensemble du cycle de développement, de la conception à la mise en production. Technologies AWS, DevOps, et applications web modernes."
      />

      <div className="min-h-screen w-full mx-auto overflow-x-clip">
        <div className="min-h-screen py-20">
          <div className="mx-auto py-12">
            {/* Header */}
            <HeroSection />

            {/* Profile Section */}
            <div className="grid lg:grid-cols-3 gap-8 mb-2 px-4 md:px-10 lg:px-14">
              {/* Profile Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 glass rounded-md p-4 md:p-6 border border-border">
                  <div className="absolute inset-0 z-10 rounded-md">
                    <Pointer className="fill-primary" />
                  </div>
                  <div className="relative z-20 h-full w-full">
                    <ProfileCard />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Bio */}
                <BioSection />

                {/* Experience */}
                <ExperienceSection />

                {/* Education */}
                <EducationSection />
              </div>
            </div>

            {/* Présentation vidéo */}
            <PresentationVideo />
          </div>
        </div>
      </div>
    </>
  );
};
