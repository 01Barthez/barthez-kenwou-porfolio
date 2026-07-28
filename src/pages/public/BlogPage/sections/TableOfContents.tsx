import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
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
      { rootMargin: '-20% 0% -35% 0%' },
    );

    const headers = document.querySelectorAll('h2, h3');
    headers.forEach((header) => observer.observe(header));

    return () => observer.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  const NavContent = ({ mobile = false }: { mobile?: boolean }) => (
    <nav className={cn('space-y-0.5', mobile && 'px-2 py-3')}>
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
            'flex items-center gap-2 py-1.5 text-[13px] leading-snug transition-all relative group rounded-md px-2',
            item.level === 3 ? 'ml-3' : 'ml-0',
            activeId === item.id
              ? 'text-primary font-semibold bg-primary/8'
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50',
          )}
        >
          {activeId === item.id && (
            <motion.div
              layoutId={mobile ? 'active-toc-mobile' : 'active-toc-desktop'}
              className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-primary rounded-full"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <ChevronRight
            className={cn(
              'h-3 w-3 shrink-0 transition-transform',
              activeId === item.id
                ? 'opacity-100'
                : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5',
            )}
          />
          <span className="truncate">{item.text}</span>
        </a>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop TOC — sticky in aside (no fixed overlap on article) */}
      <div
        className={cn(
          'hidden lg:flex lg:flex-col sticky top-28 z-[1]',
          'w-full max-h-[calc(100vh-9rem)]',
          'rounded-md border border-border/50 bg-background/85 backdrop-blur-md',
          'shadow-[0_8px_30px_-12px_hsla(268,52%,38%,0.2)]',
          'ring-1 ring-primary/5',
        )}
      >
        <div className="shrink-0 flex items-center gap-2 text-primary border-b border-border/40 px-3 py-3">
          <span className="flex size-6 items-center justify-center rounded-md bg-primary/10">
            <List className="h-3.5 w-3.5" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
            {language === 'fr' ? 'Sommaire' : 'Contents'}
          </span>
        </div>

        <div className="premium-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-3">
          <NavContent />
        </div>

        <div className="shrink-0 border-t border-border/40 px-3 py-3">
          <p className="text-[10px] text-muted-foreground font-medium leading-relaxed italic">
            {language === 'fr'
              ? "Le courage de chercher la connaissance… focus sur l'objectif."
              : 'The courage to seek knowledge… focus on the goal.'}
          </p>
        </div>
      </div>

      {/* Mobile TOC Floating Button & Menu */}
      <div className="lg:hidden fixed bottom-28 right-4 z-[60]">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-10 right-0 w-[min(18rem,calc(100vw-2rem))] max-h-[50vh] flex flex-col overflow-hidden rounded-md bg-background/90 backdrop-blur-2xl border border-primary/20 shadow-[0_20px_50px_hsla(268,52%,20%,0.35)]"
            >
              <div className="shrink-0 sticky top-0 z-10 bg-background/95 flex items-center justify-between py-2 px-3 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    {language === 'fr' ? 'Sommaire' : 'Contents'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-secondary transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="premium-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain">
                <NavContent mobile />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'size-9 rounded-md shadow-[0_10px_30px_hsla(268,52%,38%,0.35)] flex items-center justify-center transition-all active:scale-90 relative overflow-hidden group cursor-pointer',
            isOpen ? 'bg-foreground text-background' : 'bg-primary text-primary-foreground',
          )}
          aria-label={language === 'fr' ? 'Ouvrir le sommaire' : 'Open table of contents'}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          {isOpen ? (
            <X className="h-4 w-4 relative z-10" />
          ) : (
            <List className="h-4 w-4 relative z-10" />
          )}
        </button>
      </div>
    </>
  );
};
