import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { List, X, ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export const TableOfContents: React.FC<{ content: string }> = ({ content }) => {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguageStore();

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  useEffect(() => {
    const lines = content.split('\n');
    const items: TOCItem[] = [];

    lines.forEach((line) => {
      const match = line.match(/^(#{2,3})\s+(.*)/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        items.push({
          id: slugify(text),
          text,
          level,
        });
      }
    });

    setToc(items);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -35% 0%' }
    );

    const headers = document.querySelectorAll('h2, h3');
    headers.forEach((header) => observer.observe(header));

    return () => observer.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  const NavContent = ({ mobile = false }: { mobile?: boolean }) => (
    <nav className={cn("space-y-1", mobile && "px-2 py-4")}>
      {toc.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
            if (mobile) setIsOpen(false);
          }}
          className={cn(
            "flex items-center gap-2 py-1.5 text-sm transition-all relative group rounded-sm px-1",
            item.level === 3 ? "ml-4" : "ml-0",
            activeId === item.id
              ? "text-primary font-bold bg-primary/5"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          )}
        >
          {activeId === item.id && (
            <motion.div
              layoutId={mobile ? "active-toc-mobile" : "active-toc-desktop"}
              className="absolute left-0 top-1 bottom-1 w-0.5 bg-primary rounded-full"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <ChevronRight className={cn(
            "h-3 w-3 transition-transform",
            activeId === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
          )} />
          <span className="truncate">{item.text}</span>
        </a>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop TOC */}
      <div className="hidden lg:block fixed top-26 z-[1] bg-background w-full max-w-[220px] max-h-[calc(100vh-160px)] overflow-y-auto custom-scrollbar pr-1">
        <div className="space-y-6 py-2">
          <div className="flex items-center gap-2 text-primary border-b border-border/50 pb-4">
            <List className="h-4 w-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              {language === 'fr' ? 'Sommaire' : 'Contents'}
            </span>
          </div>
          <NavContent />

          <div className="pt-6 border-t border-border/10">
            <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-[10px] text-muted-foreground font-medium leading-relaxed italic">
                {language === 'fr'
                  ? "Le courage de chercher la connaissance... focus sur l'objectif !"
                  : "The courage to seek knowledge... focus on the goal!"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile TOC Floating Button & Menu */}
      <div className="lg:hidden fixed bottom-30 right-4 z-[60]">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-8 right-0 w-72 max-h-[50vh] overflow-y-auto rounded-sm bg-background/80 backdrop-blur-2xl border border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <div className="sticky top-0 left-0 z-5 bg-background flex items-center justify-between py-1.5 px-4 border-b border-border/50 mb-0">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">Sommaire</span>
                </div>

                <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-secondary transition-colors">
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <NavContent mobile />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "h-8 w-8 rounded-sm shadow-[0_10px_30px_rgba(var(--primary),0.3)] flex items-center justify-center transition-all active:scale-90 relative overflow-hidden group",
            isOpen ? "bg-foreground text-background" : "bg-primary text-primary-foreground"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          {isOpen ? <X className="h-4 w-4 relative z-10" /> : <List className="h-4 w-4 relative z-10" />}
        </button>
      </div>

    </>
  );
};

