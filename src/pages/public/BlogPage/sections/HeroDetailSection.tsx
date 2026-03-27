import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Image } from '@/shared/ui/Image';
import React from 'react';
import { useParams } from 'react-router-dom';

export const HeroDetailSection: React.FC = () => {
  const { blogID } = useParams();
  const { language } = useLanguageStore();
  const post = blogPostsData.find((p) => p.id === blogID);

  if (!post) return null;

  return (
    <section className="mb-10 animate-fade-in">
      <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-border/50 shadow-2xl shadow-primary/5">
        <Image
          src={post.image}
          alt={language === 'fr' ? post.titleFr : post.titleEn}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>
    </section>
  );
};
