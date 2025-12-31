import { blogPostsData } from '@/shared/mocks/blog.mocks';
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
            {relatedPosts.map((p) => (
              <Link
                key={p.id}
                to={`/blog/${p.id}`}
                className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <img
                  src={p.image}
                  alt={language === 'fr' ? p.titleFr : p.titleEn}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {language === 'fr' ? p.titleFr : p.titleEn}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{p.readTime}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
