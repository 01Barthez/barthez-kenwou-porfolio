import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { skills } from '@/shared/mocks/skillsData.mocks';
import { Cloud, Server } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <section>
      {/* Title */}
      <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
        <div className="p-2 rounded-lg bg-primary/10">
          <Server className="h-5 w-5 text-primary" />
        </div>
        {language === 'fr' ? 'Compétences Techniques' : 'Technical Skills'}
      </h2>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* AWS Skills */}
        <div>
          <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
            <Cloud className="h-4 w-4 text-primary" />
            AWS Cloud
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {skills.cloud.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 rounded-md bg-primary/10 text-xs text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Devops Skills */}
        <div>
          <h4 className="font-medium text-foreground mb-2">DevOps</h4>
          <div className="flex flex-wrap gap-1.5">
            {skills.devops.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 rounded-md bg-accent/10 text-xs text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div>
          <h4 className="font-medium text-foreground mb-2">Backend</h4>
          <div className="flex flex-wrap gap-1.5">
            {skills.backend.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 rounded-md bg-secondary text-xs text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Frondend Skills */}
        <div>
          <h4 className="font-medium text-foreground mb-2">Frontend</h4>
          <div className="flex flex-wrap gap-1.5">
            {[...skills.frontend].map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 rounded-md bg-secondary text-xs text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Database Skills */}
        <div>
          <h4 className="font-medium text-foreground mb-2">Database</h4>
          <div className="flex flex-wrap gap-1.5">
            {[...skills.database].map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 rounded-md bg-secondary text-xs text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Environement */}
        <div>
          <h4 className="font-medium text-foreground mb-2">Tools & Environement</h4>
          <div className="flex flex-wrap gap-1.5">
            {[...skills.Others].map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 rounded-md bg-secondary text-xs text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
