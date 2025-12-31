import { blogPostsData } from '@/shared/mocks/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import React, { useState } from 'react';

export const FeaturedPost: React.FC = () => {
  const { language } = useLanguageStore();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const title = language === 'fr' ? post.titleFr : post.titleEn;
    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {filteredPosts.length > 0 && (
        <div className="mb-12">
          <article className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative overflow-hidden">
                <img
                  src={filteredPosts[0].image}
                  alt={language === 'fr' ? filteredPosts[0].titleFr : filteredPosts[0].titleEn}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    {filteredPosts[0].category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(filteredPosts[0].date).toLocaleDateString(
                      language === 'fr' ? 'fr-FR' : 'en-US',
                    )}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {filteredPosts[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {language === 'fr' ? filteredPosts[0].titleFr : filteredPosts[0].titleEn}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {language === 'fr' ? filteredPosts[0].excerptFr : filteredPosts[0].excerptEn}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {filteredPosts[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all w-fit">
                  {language === 'fr' ? "Lire l'article" : 'Read article'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
};
