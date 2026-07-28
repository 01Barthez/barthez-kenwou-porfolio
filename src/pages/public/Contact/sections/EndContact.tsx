import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { cn } from '@/shared/lib/utils';

const SNAKE_SVG =
  'https://raw.githubusercontent.com/karthikmudunuri/karthikmudunuri/output/github-contribution-grid-snake-dark.svg';

export const EndContact = () => {
  const { language } = useLanguageStore();

  return (
    <div className="w-full overflow-hidden rounded-sm border border-border/50 bg-card/40 p-4 shadow-sm backdrop-blur-sm md:p-6">
      <div className="flex flex-col items-stretch gap-6 lg:flex-row">
        {/* Dark terminal chrome keeps the snake readable in light + dark mode */}
        <div className="group relative min-w-0 flex-1">
          <div className="flex items-center gap-1.5 rounded-t-sm border border-b-0 border-zinc-700/80 bg-[#0d1117] px-4 py-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
            <span className="ml-2 font-mono text-[10px] text-zinc-400 opacity-90">
              barthez-github-contribution.sh
            </span>
          </div>

          <div
            className={cn(
              'relative flex items-center justify-center overflow-hidden rounded-b-sm border border-zinc-700/80 bg-[#0d1117] p-2 transition-colors duration-500',
              'group-hover:border-primary/40',
            )}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />

            <img
              src={SNAKE_SVG}
              alt="Github snake game"
              className="relative z-10 h-auto w-full max-w-4xl select-none pointer-events-none brightness-110 contrast-110"
            />
          </div>
        </div>

        <div className="group relative flex w-full flex-col justify-center overflow-hidden rounded-sm border border-border/50 bg-background/60 p-3 backdrop-blur-sm md:p-4 lg:w-[320px]">
          <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-primary/5 blur-3xl transition-colors duration-700 group-hover:bg-primary/10" />

          <div className="relative mx-auto w-full">
            <div className="pointer-events-none absolute -top-8 -left-2 select-none font-serif text-6xl leading-none text-primary/25 transition-colors duration-500 group-hover:text-primary/40">
              "
            </div>

            <p className="relative z-10 text-center text-[14px] leading-relaxed font-medium tracking-wide text-foreground/85 italic">
              {language === 'fr'
                ? 'Notre Dieu est un grand programmeur, je suis un fils de Dieu.'
                : "Our God is a great programmer, I'm a child of God."}
            </p>

            <div className="mt-6 flex flex-col items-center gap-2">
              <div className="flex w-full items-center justify-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase whitespace-nowrap">
                  Barthez Kenwou
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
              </div>
              <span className="font-mono text-[8px] tracking-widest text-muted-foreground uppercase opacity-70">
                DevOps Engineer
              </span>
            </div>

            <div className="pointer-events-none absolute -right-4 -bottom-10 rotate-180 select-none font-serif text-6xl leading-none text-primary/25 transition-colors duration-500 group-hover:text-primary/40">
              "
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
