import { TestimonialCard } from '@/entities/testimonies';
import { testimonials } from '@/entities/testimonies/api/mocks/testimonials.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Image } from '@/shared/ui/Image';
import { AnimatedBlob } from '@/shared/ui/animated-blob';
import { Marquee } from '@/shared/ui/marquee';
import React from 'react';
import { Lens } from '@/shared/ui/lens';

export const TestimonialsSection: React.FC = () => {
  const { language } = useLanguageStore();

  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);
  const thirdRow = testimonials.slice(0, testimonials.length / 2);

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="text-center mb-16">
        {/* Title */}
        <h2 className="section-title">
          <span className="gradient-text">
            {language === 'fr' ? 'Témoignages Clients' : 'Client Testimonials'}
          </span>
        </h2>
      </div>

      <div className="flex flex-col-reverse md:grid md:grid-cols-5 gap-12 md:gap-2">
        <style>{`
          .testimonials-3d {
            transform: translateX(-20px) translateY(0px) translateZ(-50px) rotateX(5deg) rotateY(-10deg) rotateZ(10deg) scale(0.8);
          }
          @media (min-width: 768px) {
            .testimonials-3d {
              transform: translateX(-100px) translateY(0px) translateZ(-100px) rotateX(12deg) rotateY(-12deg) rotateZ(20deg) scale(1);
            }
          }
        `}</style>

        {/* Testimonials Marquee */}
        <div className="md:col-span-4 relative flex h-[450px] md:h-110 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px] mb-8 md:mb-0">
          <div className="flex flex-row items-center gap-4 testimonials-3d transition-transform duration-500">
            <Marquee pauseOnHover vertical className="[--duration:20s] scale-90">
              {firstRow.map((review) => (
                <TestimonialCard key={review.id} {...review} />
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:20s] scale-110" vertical>
              {secondRow.map((review) => (
                <TestimonialCard key={review.id} {...review} />
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
              {thirdRow.map((review) => (
                <TestimonialCard key={review.id} {...review} />
              ))}
            </Marquee>
          </div>

          {/* Over */}
          <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
          <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>

        {/* My beautiful and personalise profile picture smiling and the animate shape behind */}
        <div className="relative md:col-span-1 w-full h-full flex flex-col items-center justify-center gap-6 md:gap-0 mt-4 md:-mt-10">
          <div className="relative w-full flex items-center justify-center min-h-[240px] md:min-h-[350px]">
            {/* Animated Shape bloc part */}
            <AnimatedBlob />

            {/* Profile picture part */}
            <div className="relative z-30 w-[160px] sm:w-[180px] md:w-full max-w-[280px] aspect-square p-2 drop-shadow-2xl overflow-hidden rounded-full md:rounded-[4rem] border-4 border-primary/20 bg-background/50 backdrop-blur-sm">
              <Lens
                zoomFactor={1.3}
                lensSize={110}
                isStatic={false}
                ariaLabel="Zoom Area"
              >
                <Image src={"images/barthez-kenwou-profil-assis.png"} alt="Barthez Kenwou" priority className="object-cover w-full h-full rounded-full md:rounded-[3.5rem] scale-120" />
              </Lens>
            </div>
          </div>

          {/* Mark Twain Quote Section */}
          <div className="relative w-full max-w-[320px] mx-auto opacity-90 hover:opacity-100 transition-opacity duration-500 px-6 md:px-0">
            <div className="absolute -top-6 -left-2 md:-left-4 text-5xl md:text-6xl text-primary/30 font-serif leading-none select-none">"</div>
            <p className="relative z-10 text-sm md:text-[15px] italic text-muted-foreground text-center font-medium leading-relaxed">
              {language === 'fr'
                ? "Les deux jours les plus importants de votre vie sont le jour où vous êtes né et le jour où vous en découvrez la raison."
                : "The two most important days in your life are the day you are born and the day you find out why."
              }
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="w-10 h-[2px] bg-gradient-to-r from-transparent to-primary/50"></div>
              <span className="text-[10px] md:text-xs font-bold text-center text-foreground tracking-widest uppercase">Mark Twain</span>
              <div className="w-10 h-[2px] bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
