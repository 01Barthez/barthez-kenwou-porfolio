import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DottedSurface } from './compoments/dotted-surface';
import { cn } from '@/shared/lib';
import { GridPattern } from '@/shared/ui/grid-pattern';
import { TextAnimate } from '@/shared/ui/text-animate';
import { TypingAnimation } from '@/shared/ui/typing-animation';
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
    <>
      {/* Background elements */}
      <div className="absolute z-0 inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4/5 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      {/* Hero Content */}
      <section className="relative z-30 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <div className="max-w-4xl animate-fade-in">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-muted-foreground">{t('contact.info.available')}</span>
          </div>

          {/* Main title */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-foreground">{t('hero.greeting')}</span>
            <br />
            <span className="gradient-text text-foreground">
              <TextAnimate animation="blurIn" as="h1" className="inline-block mr-2">
                Barthez
              </TextAnimate>
              <TextAnimate animation="blurInUp" by="character" duration={3} className="inline-block">
                Kenwou
              </TextAnimate>
            </span>
          </h1>

          {/* Subtitle with typing effect styling */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground gradient-accent-text">
              {language === 'fr' ? (
                <TypingAnimation
                  words={["Développeur Full Stack JS ", "DevOps", "AWS Cloud Engineer"]}
                  loop
                  typeSpeed={60}
                  duration={60}
                />
              ) : (
                <TypingAnimation
                  words={["Full Stack JS Developer", "DevOps", "AWS Cloud Engineer"]}
                  loop
                  typeSpeed={60}
                  duration={60}
                />
              )
              }
            </h2>
          </div>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Project */}
            <Link
              to="/projects"
              className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:glow-primary hover:scale-105"
            >
              {t('hero.cta.projects')}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* CV */}
            <Link
              to="/cv"
              className="flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-8 py-4 text-lg font-semibold text-foreground transition-all hover:border-primary hover:bg-secondary"
            >
              {t('nav.cv')}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>

        {/* Dotted background */}
        <DottedSurface className="size-full z-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              aria-hidden="true"
              className={cn(
                'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
                'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
                'blur-[30px]',
              )}
            />
          </div>
        </DottedSurface>

        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          squares={squares}
          className={cn('[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -top-60')}
        />
      </section>
    </>
  );
};
