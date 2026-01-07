import { BlogCard, IBlog } from '@/entities/blogs';
import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';
import { EmptyBlogCard } from '@/entities/blogs/ui/EmptyBlogCard.ui';
import { categories } from '@/shared/constants/blogCategories.const';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Search } from 'lucide-react';
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
    <>
      <section className="flex flex-col md:flex-row gap-4 mb-12">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />

          <input
            type="text"
            placeholder={language === 'fr' ? 'Rechercher un article...' : 'Search articles...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {
            categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
              >
                {category === 'All' ? (language === 'fr' ? 'Tous' : 'All') : category}
              </button>
            ))
          }
        </div>
      </section>

      <section>
        {/* Featured Post */}
        {
          filteredPosts.length > 0 && (
            <div className="mb-12">
              <BlogCard Blog={filteredPosts[0]} />
            </div>
          )
        }

        {/* Grid post */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.slice(1).map((blog: IBlog) => (
            <BlogCard key={blog.id} Blog={blog} />
          ))}
        </div>

        {/* Empty Blog section */}
        {filteredPosts.length === 0 && (
          <EmptyBlogCard />
        )}

      </section>
    </>
  );
};
