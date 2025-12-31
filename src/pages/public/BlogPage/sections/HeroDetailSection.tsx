import { blogPostsData } from '@/shared/mocks/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React from 'react'
import { useParams } from 'react-router-dom';

export const HeroDetailSection: React.FC = () => {
  const { id } = useParams();
  const { language } = useLanguageStore();

  const post = blogPostsData.find((p) => p.id === id) || ;

  return (
    <div className="relative rounded-2xl overflow-hidden mb-8">
      <img
        src={post.image}
        alt={language === 'fr' ? post.titleFr : post.titleEn}
        className="w-full h-64 md:h-96 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      <div className="absolute bottom-6 left-6">
        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
          {post.category}
        </span>
      </div>
    </div>)
}

