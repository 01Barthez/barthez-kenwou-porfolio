import { IBlog } from '@/entities/blogs';
import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';
import { RelatedPostCard } from '@/entities/blogs/ui/RelatedPostCard.ui';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { BookOpen } from 'lucide-react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const RelatedPostsSection: React.FC = () => {
  const { id } = useParams();
  const { language } = useLanguageStore();

  const post = blogPostsData.find((p) => p.id === id);
  const relatedPosts = blogPostsData
    .filter((p) => p.id !== id && p.category === post?.category)
    .slice(0, 3);

  return (
    <>
      {relatedPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            {language === 'fr' ? 'Articles similaires' : 'Related articles'}
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {relatedPosts.map((blog: IBlog) => (
              <RelatedPostCard key={blog.id} Blog={blog} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
