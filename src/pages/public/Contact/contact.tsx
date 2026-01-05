import { HeroSection } from './sections/HeroSection';
import { ContactInfoSection } from './sections/ContactInfoSection';
import { ContactFormSection } from './sections/ContactFormSection';
import { SEO } from '@/shared/ui/SEO/SEO';
import { CanvasCursor } from '@/shared/ui/canvas-cursor';

export const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact - Barthez Kenwou | Passionate DevOps & Full-Stack JS Developer"
        description="Contactez-Nous | Discutons de votre prochain projet | Barthez Kenwou, Spécialiste dans la création d'applications web modernes, performantes et évolutives. Toujours à la recherche de nouveaux défis, je m'investis continuellement dans l'apprentissage de nouvelles technologies et les meilleures pratiques du secteur pour livrer des solutions toujours robustes, ergonomique et sécurisées."
      />

      <div className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <HeroSection />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <ContactInfoSection />

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactFormSection />
            </div>
          </div>
        </div>

        {/* Background on contact page */}
        <CanvasCursor />
      </div>
    </>
  );
};
