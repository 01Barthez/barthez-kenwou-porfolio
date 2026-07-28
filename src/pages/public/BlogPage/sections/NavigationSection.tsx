import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { findByNumericId, getBlogPathSlug } from '@/shared/lib/entity-slug';

export const NavigationSection: React.FC = () => {
  const { blogID } = useParams();
  const { language } = useLanguageStore();

  const current = findByNumericId(blogPostsData, blogID);
  const currentIndex = current ? blogPostsData.findIndex((p) => p.id === current.id) : -1;
  const prevPost = currentIndex > 0 ? blogPostsData[currentIndex - 1] : null;
  const nextPost =
    currentIndex >= 0 && currentIndex < blogPostsData.length - 1
      ? blogPostsData[currentIndex + 1]
      : null;

  return (
    <div className="flex justify-between items-center border-t border-border/50 pt-4 mb-8">
      {prevPost ? (
        <Link
          to={`/blog/${getBlogPathSlug(prevPost)}`}
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
          to={`/blog/${getBlogPathSlug(nextPost)}`}
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
