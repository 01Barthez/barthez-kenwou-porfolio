import { blogPostsData } from '@/shared/mocks/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Calendar, Clock } from 'lucide-react';
import React, { useState } from 'react';

export const PostsGrid: React.FC = () => {
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {filteredPosts.slice(1).map((post) => (
        <article
          key={post.id}
          className="group overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
        >
          <div className="relative overflow-hidden">
            <img
              src={post.image}
              alt={language === 'fr' ? post.titleFr : post.titleEn}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                {post.category}
              </span>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {language === 'fr' ? post.titleFr : post.titleEn}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {language === 'fr' ? post.excerptFr : post.excerptEn}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-secondary text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
