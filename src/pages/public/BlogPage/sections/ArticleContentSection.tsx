import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react';
import { useParams } from 'react-router-dom';

export const ArticleContentSection: React.FC = () => {
  const { id } = useParams();
  const { language } = useLanguageStore();
  const post = blogPostsData.find((p) => p.id === id) || { contentFr: '', contentEn: '' };

  const content = language === 'fr' ? post.contentFr : post.contentEn;

  return (
    <article className="prose prose-sm md:prose-base dark:prose-invert max-w-none mb-10 overflow-hidden">
      <div
        className="text-muted-foreground leading-relaxed whitespace-pre-line"
        dangerouslySetInnerHTML={{
          __html: content
            .replace(/## (.*)/g, '<h2 class="text-lg md:text-xl font-extrabold text-foreground mt-10 mb-5 border-l-4 border-primary pl-4">$1</h2>')
            .replace(/### (.*)/g, '<h3 class="text-base md:text-lg font-bold text-foreground mt-8 mb-4">$1</h3>')
            .replace(/\n\n/g, '</p><p class="mb-5">')
            .replace(
              /```(\w+)?\n([\s\S]*?)```/g,
              '<div class="relative my-6 group"><div class="absolute -top-3 right-4 px-2 py-0.5 bg-secondary text-[8px] font-bold uppercase tracking-widest rounded border border-border/50 text-muted-foreground">$1</div><pre class="bg-secondary/50 p-5 rounded-xl border border-border/50 overflow-x-auto text-xs md:text-sm font-mono leading-relaxed"><code>$2</code></pre></div>',
            )
            .replace(/- (.*)/g, '<li class="ml-4 flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span>$1</span></li>'),
        }}
      />
    </article>
  );
};
