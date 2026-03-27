import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const NavigationSection: React.FC = () => {
  const { blogID } = useParams();
  const { language } = useLanguageStore();

  const currentIndex = blogPostsData.findIndex((p) => p.id === blogID);
  const prevPost = currentIndex > 0 ? blogPostsData[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPostsData.length - 1 ? blogPostsData[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center border-t border-border/50 pt-8 mb-12">
      {prevPost ? (
        <Link
          to={`/blog/${prevPost.id}`}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors max-w-[45%] group"
        >
          <HiOutlineArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium truncate">
            {language === 'fr' ? prevPost.titleFr : prevPost.titleEn}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {nextPost && (
        <Link
          to={`/blog/${nextPost.id}`}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors max-w-[45%] text-right group"
        >
          <span className="text-sm font-medium truncate">
            {language === 'fr' ? nextPost.titleFr : nextPost.titleEn}
          </span>
          <HiOutlineArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
};
