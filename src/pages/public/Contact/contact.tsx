import { HeroSection } from './sections/HeroSection';
import { ContactInfoSection } from './sections/ContactInfoSection';
import { ContactFormSection } from './sections/ContactFormSection';
import { SEO } from '@/shared/ui/SEO/SEO';
import { EndContact } from './sections/EndContact';
import { WaContact } from './sections/WaContact';
import { lazy, Suspense } from 'react';
import { DeferredMount } from '@/shared/ui/DeferredMount';

const MouseParticles = lazy(() =>
  import('@/shared/ui/MouseParticles').then((m) => ({ default: m.MouseParticles })),
);

export const ContactPage = () => {
  return (
    <>
      <SEO
        path="/contact"
        title="Contact"
        description="Contactez Barthez Kenwou — discutons de votre prochain projet web, cloud ou DevOps. Réponse rapide et solutions sur mesure."
      />

      <div className="min-h-screen py-10 md:py-16 lg:py-20 overflow-x-clip">
        <HeroSection />

        <div className="px-4 md:px-10 lg:px-14 grid lg:grid-cols-3 gap-4 -mt-6">
          <ContactInfoSection />

          <div className="lg:col-span-2">
            <ContactFormSection />
          </div>
        </div>

        <div className="px-4 md:px-10 lg:px-14 mt-4 md:mt-4">
          <EndContact />
        </div>

        <div className="px-4 md:px-10 lg:px-14 mt-4 md:mt-4">
          <WaContact />
        </div>

        <DeferredMount whenVisible={false} timeout={1200} fallback={null}>
          <Suspense fallback={null}>
            <MouseParticles />
          </Suspense>
        </DeferredMount>
      </div>
    </>
  );
};
