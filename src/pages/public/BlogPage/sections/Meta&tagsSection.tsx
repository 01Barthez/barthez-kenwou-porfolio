import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { HiOutlineCalendar, HiOutlineClock, HiOutlineUser } from 'react-icons/hi2';
import React from 'react';
import { useParams } from 'react-router-dom';

export const MetaTagsSection: React.FC = () => {
  const { blogID } = useParams();
  const { language } = useLanguageStore();

  const post = blogPostsData.find((p) => p.id === blogID) || {
    author: '',
    date: '',
    readTime: '',
    titleFr: '',
    titleEn: '',
    tags: [],
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60 mb-4">
        <span className="flex items-center gap-1">
          <HiOutlineUser className="h-3.5 w-3.5" />
          {post.author}
        </span>
        <span className="flex items-center gap-1">
          <HiOutlineCalendar className="h-3.5 w-3.5" />
          {new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
        </span>
        <span className="flex items-center gap-1">
          <HiOutlineClock className="h-3.5 w-3.5" />
          {post.readTime}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-6 tracking-tight leading-tight">
        {language === 'fr' ? post.titleFr : post.titleEn}
      </h1>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-2">
        {post.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-secondary/50 text-[10px] uppercase tracking-tighter font-bold text-muted-foreground border border-border/10"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
