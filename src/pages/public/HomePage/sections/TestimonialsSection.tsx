import { TestimonialCard } from '@/entities/testimonies';
import { profilePhotos } from '@/shared/assets/images/profilePhotos';
import { testimonials } from '@/shared/mocks/testimonials.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Image } from '@/shared/ui/Image';
import { Marquee } from '@/shared/ui/marquee';
import React from 'react';

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

      <div className="border grid md:grid-cols-5 gap-5">
        <div className="col-span-4 relative flex h-110 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
          <div
            className="flex flex-row items-center gap-4"
            style={{
              transform:
                'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(12deg) rotateY(-12deg) rotateZ(20deg)',
            }}
          >
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
        <div className="relative border col-span-1 w-full h-full flex items-center justify-center">
          {/* Animated Shape bloc part */}
          <div className="absolute z-10 bottom-0 left-0">
            <div className="magicpattern"></div>
          </div>


          {/* Profile picture part */}
          <div className="relative z-30 w-full h-full">
            <Image
              src={profilePhotos[2]}
              alt="Barthez Kenwou"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
