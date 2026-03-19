import { ISkill } from '../model/Skill.types';

export const SkillCard: React.FC<{ Skill: ISkill }> = ({ Skill }) => {
  const { name, category, level, icon } = Skill;

  return (
    <div className="group relative flex flex-col p-3 rounded-lg bg-transparent border border-border/50 hover:border-primary/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] isolate cursor-pointer">
      
      {/* Animated blob effect inside the card */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none -z-10" />

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-card/40 backdrop-blur-sm -z-10" />

      <div className="flex items-start justify-center w-full mb-3">
        <div className="relative w-12 h-12 rounded-sm bg-secondary/80 flex items-center justify-center border border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-80 z-10">
          {/* We now expect the icon to be an SVG URL */}
          <img src={icon} alt={`${name} logo`} className="w-8 h-8 object-contain drop-shadow-md transition-transform duration-500" />
        </div>
      </div>

      <div className="z-10">
        <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
          {category}
        </p>
      </div>

      {/* Progress Bar (Glow line style) */}
      <div className="mt-3 relative w-full h-[3px] bg-secondary/50 rounded-full overflow-hidden z-10">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          style={{ width: `${level}%` }}
        >
          {/* Animated shiny tip */}
          <div className="absolute top-0 right-0 w-2 h-full bg-white blur-[1px] opacity-70" />
        </div>
      </div>
    </div>
  );
};
