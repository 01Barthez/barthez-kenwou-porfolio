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
    <AuroraBackground showRadialGradient className="bg-gradient-to-t from-background/80 to-transparent">
      {/* Hero Content */}
      <section className="relative z-30 flex min-h-screen flex-col items-center justify-center px-6 py-10 text-center overflow-hidden w-full">
        <div className="max-w-4xl animate-fade-in relative z-10 w-full mb-10 pt-20">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-muted-foreground">{t('contact.info.available')}</span>
          </div>

          {/* Main title */}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-0">
            <span className="text-foreground">{t('hero.greeting')}</span>
            <br />

            <span className="gradient-text text-foreground">
              <TextAnimate animation="blurIn" as="h1" className="inline-block mr-2">
                Barthez
              </TextAnimate>
              &nbsp;
              <TextAnimate animation="blurIn" by="character" duration={1} className="inline-block">
                Kenwou
              </TextAnimate>
            </span>
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
          <p className="mx-auto max-w-2xl text-base text-muted-foreground mb-8">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            {/* Project */}
            <Link
              to="/projects"
              className="group flex items-center gap-2 rounded-sm bg-primary px-6 py-1.5 text-base font-medium text-primary-foreground transition-all hover:glow-primary"
            >
              {t('hero.cta.projects')}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* CV */}
            <Link
              to="/cv"
              className="flex items-center gap-2 rounded-sm border border-border bg-secondary/50 px-6 py-1.5 text-base font-medium text-foreground transition-all hover:border-primary hover:bg-secondary"
            >
              {t('nav.cv')}
            </Link>
          </div>
        </div>

        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          squares={squares}
          className={cn('[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -top-60')}
        />
      </section >
    </AuroraBackground>
  );
};
