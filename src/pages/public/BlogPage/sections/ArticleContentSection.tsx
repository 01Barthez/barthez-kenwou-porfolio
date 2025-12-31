import { blogPostsData } from '@/shared/mocks/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react'
import { useParams } from 'react-router-dom';

export const ArticleContentSection: React.FC = () => {
  const { id } = useParams();
  const { language } = useLanguageStore();
  const post = blogPostsData.find((p) => p.id === id) || ;

  return (
    <>
      <article className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <div
          className="text-muted-foreground leading-relaxed whitespace-pre-line"
          dangerouslySetInnerHTML={{
            __html: (language === 'fr' ? post.contentFr : post.contentEn)
              .replace(/## /g, '<h2 class="text-xl font-bold text-foreground mt-8 mb-4">')
              .replace(/### /g, '<h3 class="text-lg font-semibold text-foreground mt-6 mb-3">')
              .replace(/\n\n/g, '</p><p class="mb-4">')
              .replace(
                /```(\w+)?\n([\s\S]*?)```/g,
                '<pre class="bg-secondary p-4 rounded-xl overflow-x-auto my-4"><code>$2</code></pre>',
              )
              .replace(/- /g, '<li class="ml-4">• '),
          }}
        />
      </article>
    </>
  )
}

