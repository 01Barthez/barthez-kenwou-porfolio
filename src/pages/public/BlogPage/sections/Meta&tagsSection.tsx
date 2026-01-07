import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Calendar, Clock, User } from 'lucide-react';
import React from 'react';
import { useParams } from 'react-router-dom';

export const MetaTagsSection: React.FC = () => {
  const { id } = useParams();
  const { language } = useLanguageStore();

  const post = blogPostsData.find((p) => p.id === id) || {
    author: '',
    date: '',
    readTime: '',
    titleFr: '',
    titleEn: '',
    tags: [],
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <User className="h-4 w-4" />
          {post.author}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {post.readTime}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        {language === 'fr' ? post.titleFr : post.titleEn}
      </h1>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-md bg-secondary text-sm text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
