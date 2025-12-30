import React from 'react'
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown, Zap } from "lucide-react";
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const stats = [
    { value: "3+", label: t("about.experience") },
    { value: "25+", label: t("about.projects") },
    { value: "5+", label: t("about.certifications") },
    { value: "99.9%", label: t("about.uptime") },
  ]
  
  return (
    <>
      {/* Background elements */}
      <div className="absolute z-0 inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4/5 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      {/* Hero Content */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <div className="max-w-4xl animate-fade-in">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-muted-foreground">{t("contact.info.available")}</span>
          </div>

          {/* Main title */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-foreground">{t("hero.greeting")}</span>
            <br />
            <span className="gradient-text">Barthez Kenwou</span>
          </h1>

          {/* Subtitle with typing effect styling */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              {t("hero.title")} <span className="gradient-accent-text">{t("hero.subtitle")}</span>
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-lg md:text-xl font-mono text-primary">{t("hero.specialization")}</span>
            </div>
          </div>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Project */}
            <Link
              to="/projects"
              className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:glow-primary hover:scale-105"
            >
              {t("hero.cta.projects")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* CV */}
            <Link
              to="/cv"
              className="flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-8 py-4 text-lg font-semibold text-foreground transition-all hover:border-primary hover:bg-secondary"
            >
              {t("nav.cv")}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-colors"
              >
                <span className="text-3xl font-bold gradient-text">{stat.value}</span>
                <span className="text-sm text-muted-foreground mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </section>
    </>
  )
}

