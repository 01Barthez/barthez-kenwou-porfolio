import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { skillsByCategory } from '@/entities/skills/api/mocks/skillsData.mocks';
import { Cloud, Code, Database, MonitorSmartphone, Server, ToolboxIcon } from 'lucide-react';
import { SkillBadge } from '@/entities/skills/ui/SkillBadge.ui';
import { ISkill } from '@/entities/skills';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguageStore();

  const categories = [
    { key: 'cloud', label: 'AWS Cloud', icon: <Cloud className="h-4 w-4 text-primary" /> },
    { key: 'devops', label: 'DevOps', icon: <Server className="h-4 w-4 text-primary" /> },
    { key: 'backend', label: 'Backend', icon: <Code className="h-4 w-4 text-primary" /> },
    { key: 'frontend', label: 'Frontend', icon: <MonitorSmartphone className="h-4 w-4 text-primary" /> },
    { key: 'database', label: 'Database', icon: <Database className="h-4 w-4 text-primary" /> },
    { key: 'tools', label: 'Tools & Environment', icon: <ToolboxIcon className="h-4 w-4 text-primary" /> },
  ];

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
        {categories.map(({ key, label, icon }) => (
          <div key={key}>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
              {icon} {label}
            </h4>

            <div className="flex flex-wrap gap-1.5">
              {skillsByCategory[key]?.map((skill: ISkill) => (
                <SkillBadge key={skill.name} Skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
