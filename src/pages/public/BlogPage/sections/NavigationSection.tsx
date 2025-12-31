import { blogPostsData } from '@/shared/mocks/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const NavigationSection: React.FC = () => {
  const { id } = useParams();
  const { language } = useLanguageStore();

  const currentIndex = blogPostsData.findIndex((p) => p.id === id);
  const prevPost = currentIndex > 0 ? blogPostsData[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPostsData.length - 1 ? blogPostsData[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center border-t border-border pt-8 mb-12">
      {prevPost ? (
        <Link
          to={`/blog/${prevPost.id}`}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors max-w-[45%]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" />
          <span className="text-sm truncate">
            {language === 'fr' ? prevPost.titleFr : prevPost.titleEn}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {nextPost && (
        <Link
          to={`/blog/${nextPost.id}`}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors max-w-[45%] text-right"
        >
          <span className="text-sm truncate">
            {language === 'fr' ? nextPost.titleFr : nextPost.titleEn}
          </span>
          <ArrowRight className="h-4 w-4 shrink-0" />
        </Link>
      )}
    </div>
  );
};
