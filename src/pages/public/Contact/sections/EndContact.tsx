import { useLanguageStore } from "@/shared/state/useLanguageStore";

export const EndContact = () => {
    const { language } = useLanguageStore();

    return (
        <>
            <div className="w-full p-4 md:p-6 rounded-sm glass border border-white/10 shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row items-stretch gap-6">
                    {/* Github snake game section */}
                    <div className="flex-1 min-w-0 group relative">
                        {/* Terminal Header Decoration */}
                        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-background/80 border-x border-t border-border/50 rounded-t-sm">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                            <span className="text-[10px] font-mono text-muted-foreground ml-2 opacity-70">barthez-github-contribution.sh</span>
                        </div>
                        
                        <div className="relative border border-border/50 p-2 md:p-2 rounded-b-sm flex items-center justify-center overflow-hidden bg-[#0d1117] group-hover:border-primary/30 transition-colors duration-500">
                            {/* Subtle Radial Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
                            
                            <img 
                                src="https://raw.githubusercontent.com/karthikmudunuri/karthikmudunuri/output/github-contribution-grid-snake-dark.svg" 
                                alt="Github snake game" 
                                className="w-full max-w-4xl h-auto pointer-events-none select-none relative z-10"
                            />
                        </div>
                    </div>

                    {/* Faith/Quote section */}
                    <div className="w-full lg:w-[320px] flex flex-col justify-center bg-foreground/5 backdrop-blur-sm border border-border/50 p-2 md:p-4 rounded-sm relative overflow-hidden group">
                        {/* Background Decoration */}
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
                        
                        <div className="relative w-full mx-auto">
                            <div className="absolute -top-8 -left-2 text-6xl text-primary/20 font-serif leading-none select-none group-hover:text-primary/40 transition-colors duration-500">"</div>

                            <p className="relative z-10 text-[14px] md:text-[14px] italic text-foreground/80 text-center font-medium leading-relaxed tracking-wide">
                                {language === 'fr'
                                    ? "Notre Dieu est un grand programmeur, je suis un fils de Dieu."
                                    : "Our God is a great programmer, I'm a child of God."
                                }
                            </p>

                            <div className="mt-6 flex flex-col items-center gap-2">
                                <div className="flex items-center justify-center gap-3 w-full">
                                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary/30"></div>
                                    <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase whitespace-nowrap">Barthez Kenwou</span>
                                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/30"></div>
                                </div>
                                <span className="text-[8px] text-muted-foreground font-mono tracking-widest uppercase opacity-60">DevOps Engineer</span>
                            </div>

                            <div className="absolute -bottom-10 -right-4 text-6xl text-primary/20 font-serif leading-none select-none group-hover:text-primary/40 transition-colors duration-500 rotate-180">"</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
