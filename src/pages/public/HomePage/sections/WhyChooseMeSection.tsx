import { whyMe } from '@/shared/mocks/whyMe.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react'

export const WhyChooseMeSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section className="py-20 px-6 bg-secondary/30 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <span className="gradient-text">{language === "fr" ? "Pourquoi Me Choisir ?" : "Why Choose Me?"}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {whyMe.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground">
                  {language === "fr" ? item.textFr : item.textEn}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>)
}

