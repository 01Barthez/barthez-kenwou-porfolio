import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/shared/lib';
import { GridPattern } from '@/shared/ui/grid-pattern';
import { TextAnimate } from '@/shared/ui/text-animate';
import { TypingAnimation } from '@/shared/ui/typing-animation';
import { AuroraBackground } from '@/shared/ui/aurora-background';
import { useLanguageStore } from '@/shared/state/useLanguageStore';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  const squares = React.useMemo(() => {
    const result: [number, number][] = [];
    for (let i = 0; i < 20; i += 1) {
      const a = (i * 9301 + 49297) % 233280;
      const b = (i * 233280 + 49297) % 9301;
      result.push([a % 20, b % 20]);
    }
    return result;
  }, []);

  return (
    <AuroraBackground showRadialGradient className="bg-gradient-to-t from-background/90 to-transparent overflow-hidden ">
      {/* Hero Content */}
      <section className="pt-20 w-full container relative z-30 flex flex-col items-center text-center">
        {/* Greeting badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1 md:py-1.5 mb-1 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs text-muted-foreground">{t('contact.info.available')}</span>
        </div>

        {/* Main title */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-0">
          <span className="text-foreground text-2xl font-light sm:text-2xl md:text-3xl lg:text-4xl">{t('hero.greeting')}</span>
          <br />

          <div className="inline-block mt-2">
            <TextAnimate animation="blurIn" as="span" className="inline-block mr-2" segmentClassName="gradient-text">
              Barthez
            </TextAnimate>
            &nbsp;
            <TextAnimate animation="blurIn" by="character" duration={1} className="inline-block uppercase" segmentClassName="gradient-text">
              Kenwou
            </TextAnimate>
          </div>
        </h1>

        {/* Subtitle with typing effect styling */}
        <div className="flex flex-col items-center gap-2 mb-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground gradient-accent-text">
            {language === 'fr' ? (
              <TypingAnimation
                words={["Développeur Full Stack JS ", "DevOps Engineer", "AWS Cloud Engineer"]}
                loop
                typeSpeed={60}
                duration={60}
              />
            ) : (
              <TypingAnimation
                words={["Full Stack JS Developer", "DevOps Engineer", "AWS Cloud Engineer"]}
                loop
                typeSpeed={60}
                duration={60}
              />
            )
            }
          </h2>
        </div>

        {/* Description */}
        <p className="px-4 mx-auto max-w-xl text-sm text-muted-foreground mb-8">
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          {/* Project */}
          <Link
            to="/projects"
            className="group flex items-center gap-2 rounded-sm bg-primary px-4 py-1.5 text-base font-medium text-primary-foreground transition-all hover:glow-primary"
          >
            {t('hero.cta.projects')}
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* CV */}
          <Link
            to="/cv"
            className="flex items-center gap-2 rounded-sm border border-border bg-secondary/50 px-4 py-1.5 text-base font-medium text-foreground transition-all hover:border-primary hover:bg-secondary duration-300"
          >
            {t('nav.cv')}
          </Link>
        </div>

        <GridPattern
          width={30}
          height={30}
          squares={squares}
          className={cn('[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -top-30 -left-30')}
        />
      </section >
    </AuroraBackground>
  );
};
