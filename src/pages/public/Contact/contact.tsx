import { HeroSection } from './sections/HeroSection';
import { ContactInfoSection } from './sections/ContactInfoSection';
import { ContactFormSection } from './sections/ContactFormSection';
import { SEO } from '@/shared/ui/SEO/SEO';
import { MouseParticles } from '@/shared/ui/MouseParticles';
import { EndContact } from './sections/EndContact';

export const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact - Barthez Kenwou | Passionate DevOps & Full-Stack JS Developer"
        description="Contactez-Nous | Discutons de votre prochain projet | Barthez Kenwou, Spécialiste dans la création d'applications web modernes, performantes et évolutives. Toujours à la recherche de nouveaux défis, je m'investis continuellement dans l'apprentissage de nouvelles technologies et les meilleures pratiques du secteur pour livrer des solutions toujours robustes, ergonomique et sécurisées."
      />

      <div className="min-h-screen py-20">
        {/* Header */}
        <HeroSection />

        <div className="px-4 md:px-10 lg:px-14 grid lg:grid-cols-3 gap-4">
          {/* Contact Info */}
          <ContactInfoSection />

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactFormSection />
          </div>
        </div>

        <div className="px-4 md:px-10 lg:px-14 mt-4 md:mt-4">
            <EndContact />
        </div>

        {/* Background on contact page */}
        <MouseParticles />
      </div>
    </>
  );
};
