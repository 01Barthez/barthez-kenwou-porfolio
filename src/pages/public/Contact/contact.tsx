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

      <div className="min-h-screen overflow-x-clip py-10 md:py-16 lg:py-20">
        <HeroSection />

        <div className="grid items-stretch gap-4 px-4 md:px-10 lg:-mt-6 lg:grid-cols-3 lg:px-14">
          <ContactInfoSection />

          <div className="min-h-0 lg:col-span-2">
            <ContactFormSection />
          </div>
        </div>

        <div className="mt-4 px-4 md:mt-4 md:px-10 lg:px-14">
          <EndContact />
        </div>

        <div className="mt-4 px-4 md:mt-4 md:px-10 lg:px-14">
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
