import { FaMicroblog } from "react-icons/fa"; 
import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from '@/shared/ui/code-block';
import { Info, Lightbulb, ChevronRight, Hash } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ArticleContentSection: React.FC = () => {
  const { blogID } = useParams();
  const { language } = useLanguageStore();
  const [activeId, setActiveId] = useState<string>('');
  
  const post = blogPostsData.find((p) => p.id === blogID) || { contentFr: '', contentEn: '' };
  const content = language === 'fr' ? post.contentFr : post.contentEn;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Function to slugify text for anchors
  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

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
  }, [content]);

  return (
    <article className="relative max-w-none">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="prose prose-sm md:prose-base dark:prose-invert max-w-none 
          prose-headings:scroll-mt-32 prose-headings:font-bold prose-headings:tracking-tight
          prose-p:text-muted-foreground/80 prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
          prose-strong:text-foreground prose-strong:font-bold
          prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-1 prose-blockquote:px-5 prose-blockquote:rounded-r-lg prose-blockquote:italic
          prose-img:rounded-sm prose-img:border prose-img:border-border/50
          prose-ul:list-none prose-ul:pl-0
          prose-ol:pl-5 marker:text-primary marker:font-bold
          mb-16"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // Header 2
            h2: ({ children }) => {
              const id = slugify(React.Children.toArray(children).join(''));
              return (
                <h2 id={id} className="group relative mt-12 mb-6 flex items-center gap-3 text-lg md:text-xl font-bold text-foreground">
                  <a href={`#${id}`} className="absolute -left-6 hidden items-center opacity-0 transition-all group-hover:flex group-hover:opacity-100 text-primary">
                    <Hash className="h-5 w-5" />
                  </a>
                  <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary/10 text-primary text-xs font-mono">
                    <FaMicroblog className="h-3.5 w-3.5" />
                  </span>
                  {children}
                </h2>
              );
            },
            // Header 3
            h3: ({ children }) => {
              const id = slugify(React.Children.toArray(children).join(''));
              return (
                <h3 id={id} className="group flex items-center gap-2 mt-10 mb-4 text-base md:text-lg font-bold text-foreground/90">
                  <ChevronRight className="h-4 w-4 text-primary/50 transition-transform group-hover:translate-x-1" />
                  {children}
                </h3>
              );
            },
            // Paragraph & Strategic Blocks
            p: ({ children }) => {
              const textContent = React.Children.toArray(children).join('');
              
              if (textContent.startsWith('Astuce') || textContent.startsWith('Pro tip')) {
                return (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="my-8 overflow-hidden relative rounded-sm border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-3 md:p-4"
                  >
                    <div className="absolute top-0 right-0 p-3 opacity-5">
                      <Lightbulb className="h-16 w-16 text-primary" />
                    </div>
                    <div className="relative flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/20 text-primary">
                        <Lightbulb className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1.5 block">
                          {language === 'fr' ? 'Astuce de Pro' : 'Pro Tip'}
                        </span>
                        <div className="text-foreground/90 text-sm md:text-sm leading-relaxed italic">{children}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              if (textContent.startsWith('Important') || textContent.startsWith('Attention')) {
                return (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="my-8 overflow-hidden relative rounded-sm border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-5 md:p-6"
                  >
                    <div className="absolute top-0 right-0 p-3 opacity-5">
                      <Info className="h-16 w-16 text-orange-500" />
                    </div>
                    <div className="relative flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-orange-500/20 text-orange-500">
                        <Info className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-1.5 block">
                          {language === 'fr' ? 'Attention' : 'Important'}
                        </span>
                        <div className="text-foreground/90 text-sm md:text-sm leading-relaxed font-medium">{children}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              return <p className="mb-6 leading-relaxed text-muted-foreground/90 text-sm md:text-sm">{children}</p>;
            },
            // Custom Code Blocks
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || '');
              const languageCode = match ? match[1] : '';
              
              return !inline ? (
                <CodeBlock 
                  language={languageCode} 
                  value={String(children).replace(/\n$/, '')} 
                  className="my-8 shadow-lg shadow-primary/5 border-primary/10"
                />
              ) : (
                <code className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[0.8em] font-bold text-primary border border-primary/20" {...props}>
                  {children}
                </code>
              );
            },
            // Lists
            li: ({ children }) => (
              <li className="flex items-start gap-2 mb-0 group">
                <span className="mt-2 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40 transition-all group-hover:scale-150 group-hover:bg-primary shadow-[0_0_6px_rgba(var(--primary),0.3)]" />
                <span className="text-muted-foreground/90 leading-relaxed text-sm">{children}</span>
              </li>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </motion.div>
    </article>
  );
};


