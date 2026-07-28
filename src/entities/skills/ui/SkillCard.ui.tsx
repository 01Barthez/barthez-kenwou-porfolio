import {
  Brain,
  Clock3,
  Lightbulb,
  MessageCircle,
  RefreshCw,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { ISkill } from '../model/Skill.types';
import { cn } from '@/shared/lib/utils';

const SOFT_SKILL_ICONS: Record<string, LucideIcon> = {
  Communication: MessageCircle,
  'Problem Solving': Lightbulb,
  'Team Leadership': Users,
  Adaptability: RefreshCw,
  'Time Management': Clock3,
  'Critical Thinking': Brain,
};

export const SkillCard: React.FC<{ Skill: ISkill }> = ({ Skill }) => {
  const { name, category, level, icon } = Skill;
  const SoftIcon = category === 'softSkills' ? SOFT_SKILL_ICONS[name] : undefined;
  const hasImage = Boolean(icon?.startsWith('http'));

  return (
    <div
      className={cn(
        'group relative isolate flex h-full cursor-default flex-col overflow-hidden rounded-sm border border-border/50 bg-transparent p-1.5 transition-all duration-500',
        'hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-primary/15',
      )}
    >
      <div className="pointer-events-none absolute -top-20 -right-20 -z-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-transform duration-700 group-hover:scale-150" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
      <div className="absolute inset-0 -z-10 bg-card/40 backdrop-blur-sm" />

      <div className="mb-1.5 flex w-full shrink-0 items-start justify-center">
        <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-sm border border-white/5 bg-secondary/80 shadow-inner transition-transform duration-500 group-hover:scale-90 sm:h-10 sm:w-10">
          {SoftIcon ? (
            <SoftIcon
              className="h-5 w-5 text-primary/90 drop-shadow-sm sm:h-6 sm:w-6"
              strokeWidth={1.75}
              aria-hidden
            />
          ) : hasImage ? (
            <img
              src={icon}
              alt=""
              decoding="async"
              crossOrigin="anonymous"
              className="h-6 w-6 object-contain drop-shadow-sm transition-transform duration-500 sm:h-7 sm:w-7"
            />
          ) : (
            <span
              aria-hidden
              className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground/70"
            >
              {name.slice(0, 2)}
            </span>
          )}
        </div>
      </div>

      <div className="z-10 text-center">
        <h3 className="mb-0.5 line-clamp-2 min-h-[2.1rem] text-[12px] leading-tight font-bold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-[13px]">
          {name}
        </h3>
        <p className="text-[10px] font-semibold capitalize text-muted-foreground sm:text-[11px]">
          {category === 'softSkills' ? 'Soft Skills' : category}
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-1.5 w-12">
        <div className="relative h-[2px] overflow-hidden rounded-full bg-black/50">
          <div
            className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-1000 ease-out"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
};
