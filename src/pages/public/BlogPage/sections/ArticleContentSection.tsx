import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from '@/shared/ui/code-block';
import { Info, Lightbulb, Zap, Rocket, CheckCircle2 } from 'lucide-react';

export const ArticleContentSection: React.FC = () => {
  const { blogID } = useParams();
  const { language } = useLanguageStore();
  const post = blogPostsData.find((p) => p.id === blogID) || { contentFr: '', contentEn: '' };

  const content = language === 'fr' ? post.contentFr : post.contentEn;

  return (
    <article className="prose prose-sm md:prose-base dark:prose-invert max-w-none mb-20">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Header 1
          h1: ({ children }) => (
            <h1 className="group relative mt-16 mb-8 flex items-center gap-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              <span className="absolute -left-4 h-full w-1 rounded-full bg-gradient-to-b from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                {children}
              </span>
            </h1>
          ),
          // Header 2
          h2: ({ children }) => (
            <h2 className="mt-14 mb-6 border-b border-border/50 pb-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              <span className="mr-3 text-primary/40">#</span>
              {children}
            </h2>
          ),
          // Header 3
          h3: ({ children }) => (
            <h3 className="mt-10 mb-4 text-xl font-bold text-foreground/90 md:text-2xl flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent animate-pulse-slow" />
              {children}
            </h3>
          ),
          // Paragraph & Strategic Blocks (Astuce, Important, etc.)
          p: ({ children }) => {
            const textContent = React.Children.toArray(children).join('');
            
            // Strategic Callout: Astuce / Pro Tip
            if (textContent.startsWith('Astuce') || textContent.startsWith('Pro tip')) {
              return (
                <div className="my-8 flex items-start gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5 md:p-6 shadow-sm overflow-hidden relative group">
                  <div className="absolute top-0 right-0 p-1 bg-primary/10 rounded-bl-xl border-l border-b border-primary/10">
                    <Lightbulb className="h-4 w-4 text-primary animate-pulse" />
                  </div>
                  <div className="rounded-xl bg-primary/10 p-2.5">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-bold uppercase tracking-wider text-primary mb-1 block">
                      {language === 'fr' ? '💡 Astuce de Pro' : '💡 Pro Tip'}
                    </span>
                    <div className="text-foreground/80 leading-relaxed italic">{children}</div>
                  </div>
                </div>
              );
            }

            // Strategic Callout: Important
            if (textContent.startsWith('Important')) {
              return (
                <div className="my-8 flex items-start gap-4 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5 md:p-6 shadow-sm">
                  <div className="rounded-xl bg-orange-500/10 p-2.5">
                    <Info className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-bold uppercase tracking-wider text-orange-500 mb-1 block">
                      ⚠️ {language === 'fr' ? 'Attention' : 'Important'}
                    </span>
                    <div className="text-foreground/80 leading-relaxed font-medium">{children}</div>
                  </div>
                </div>
              );
            }

            return <p className="mb-6 leading-relaxed text-muted-foreground/90">{children}</p>;
          },
          // Custom Code Blocks with Shiki
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            const languageCode = match ? match[1] : '';
            
            return !inline ? (
              <CodeBlock 
                language={languageCode} 
                value={String(children).replace(/\n$/, '')} 
                className="my-8"
              />
            ) : (
              <code className="rounded-md bg-secondary/50 px-1.5 py-0.5 font-mono text-[0.85em] font-semibold text-primary/80 border border-border/40" {...props}>
                {children}
              </code>
            );
          },
          // Lists
          ul: ({ children }) => <ul className="my-6 space-y-3 list-none p-0">{children}</ul>,
          ol: ({ children }) => <ol className="my-6 space-y-4 list-decimal pl-6 marker:text-primary marker:font-bold">{children}</ol>,
          li: ({ children }) => (
            <li className="flex items-start gap-3 group">
              <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60 transition-all group-hover:scale-150 group-hover:bg-primary" />
              <span className="text-muted-foreground/90 leading-relaxed">{children}</span>
            </li>
          ),
          // Blockquote
          blockquote: ({ children }) => (
            <blockquote className="my-8 border-l-4 border-primary/30 bg-secondary/20 py-4 pl-6 pr-4 rounded-r-xl italic text-foreground/80 relative">
              <div className="absolute -left-1 top-0 h-full w-1 bg-primary rounded-full shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
              {children}
            </blockquote>
          ),
          // Links
          a: ({ href, children }) => (
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-primary transition-all hover:text-accent underline decoration-primary/30 underline-offset-4 hover:decoration-accent"
            >
              {children}
            </a>
          ),
          // Strong
          strong: ({ children }) => (
            <strong className="font-bold text-foreground decoration-accent/30 decoration-2">{children}</strong>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
      
      {/* Article Footer / Call to Action */}
      <div className="mt-20 rounded-3xl bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8 border border-border/50 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
        <Rocket className="h-10 w-10 text-primary mx-auto mb-4 animate-float" />
        <h3 className="text-2xl font-bold mb-2">{language === 'fr' ? 'Prêt à passer au niveau supérieur ?' : 'Ready to level up?'}</h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          {language === 'fr' 
            ? 'Si vous avez aimé cet article, partagez-le ou laissez un commentaire ! Votre feedback m’aide énormément.' 
            : 'If you liked this article, share it or leave a comment! Your feedback means a lot to me.'}
        </p>
        <div className="flex justify-center gap-4">
          <CheckCircle2 className="h-6 w-6 text-green-500" />
          <span className="text-sm font-medium tracking-tight">2026 Content Verified</span>
        </div>
      </div>
    </article>
  );
};
