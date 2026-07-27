import { testimonials } from '@/entities/testimonies/api/mocks/testimonials.mocks';
import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Marquee } from '@/shared/ui/marquee';
import { TestimonialCard } from '@/entities/testimonies';
import { AnimatedBlob } from '@/shared/ui/animated-blob';
import { Lens } from '@/shared/ui/lens';
import { Image } from '@/shared/ui/Image';

export const TestimonialsSection: React.FC = () => {
  const { language } = useLanguageStore();

  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);
  const thirdRow = testimonials.slice(0, testimonials.length / 2);

  return (
    <section className="mb-20 px-4 md:px-10 lg:px-14 overflow-x-clip">
      <div className="text-center mb-12">
        <h2 className="section-title">
          <span className="gradient-text">
            {language === 'fr' ? 'Ce Que Disent Mes Clients' : 'What My Clients Say'}
          </span>
        </h2>
      </div>

      <div className="flex flex-col-reverse md:grid md:grid-cols-5 gap-12 md:gap-2">
        <style>{`
          .service-testimonials-3d {
            transform: translateX(0) translateY(0) translateZ(0) rotateX(2deg) rotateY(-4deg) rotateZ(3deg) scale(0.92);
          }
          @media (min-width: 768px) {
            .service-testimonials-3d {
              transform: translateX(-24px) translateY(0) translateZ(-60px) rotateX(8deg) rotateY(-8deg) rotateZ(8deg) scale(0.94);
            }
          }
        `}</style>

        <div className="relative z-5 md:col-span-1 w-full min-w-0 h-full flex flex-col items-center justify-center gap-6 md:gap-0 mt-4 md:-mt-10 overflow-x-clip">
          <div className="relative w-full flex items-center justify-center min-h-[240px] md:min-h-[350px]">
            <AnimatedBlob />

            <div className="relative z-30 w-[160px] sm:w-[180px] md:w-full max-w-[280px] aspect-square p-1.5 drop-shadow-lg overflow-hidden !rounded-full md:rounded-md border-4 border-primary/20 bg-background/50 backdrop-blur-sm">
              <Lens zoomFactor={1.3} lensSize={110} isStatic={false} ariaLabel="Zoom Area">
                <Image
                  src={'images/profile.jpeg'}
                  alt="Barthez Kenwou"
                  priority
                  className="object-cover w-full h-full !rounded-full md:rounded-md scale-110 md:scale-120"
                />
              </Lens>
            </div>
          </div>

          <div className="relative w-full max-w-[320px] mx-auto opacity-90 hover:opacity-100 transition-opacity duration-500 px-6 md:px-0">
            <div className="absolute -top-4 left-2 md:left-0 text-3xl md:text-4xl text-primary/30 font-serif leading-none select-none">
              "
            </div>
            <p className="relative z-10 text-[11px] md:text-xs italic text-muted-foreground text-center font-medium leading-relaxed">
              {language === 'fr'
                ? "Les deux jours les plus importants de votre vie sont le jour où vous êtes né et le jour où vous en découvrez la raison."
                : "The two most important days in your life are the day you are born and the day you find out why."
              }
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="w-10 h-[2px] bg-gradient-to-r from-transparent to-primary/50"></div>
              <span className="text-[10px] md:text-xs font-bold text-center text-foreground tracking-widest uppercase">
                Mark Twain
              </span>
              <div className="w-10 h-[2px] bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 relative flex h-[450px] md:h-110 w-full min-w-0 flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px] mb-8 md:mb-0">
          <div className="flex flex-row items-center gap-4 service-testimonials-3d transition-transform duration-500">
            <Marquee pauseOnHover vertical className="[--duration:20s] scale-90">
              {firstRow.map((review) => (
                <TestimonialCard key={review.id} {...review} />
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:20s] md:scale-105 scale-95" vertical>
              {secondRow.map((review) => (
                <TestimonialCard key={review.id} {...review} />
              ))}
            </Marquee>

            {/* Mobile: 2 colonnes (desktop: 3 streams) */}
            <div className="hidden md:block">
              <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
                {thirdRow.map((review) => (
                  <TestimonialCard key={review.id} {...review} />
                ))}
              </Marquee>
            </div>
          </div>

          <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
          <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </div>
    </section>
  );
};
