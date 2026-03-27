import { BlogCard, IBlog } from '@/entities/blogs';
import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';
import { EmptyBlogCard } from '@/entities/blogs/ui/EmptyBlogCard.ui';
import { categories } from '@/shared/constants/blogCategories.const';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
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
      <section className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

          <input
            type="text"
            placeholder={language === 'fr' ? 'Rechercher un article...' : 'Search articles...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-secondary/50 border border-border/50 focus:border-primary/50 focus:outline-none transition-colors text-sm text-foreground placeholder:text-muted-foreground/50"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-secondary/30 text-muted-foreground hover:text-foreground border-border/50'
              }`}
            >
              {category === 'All' ? (language === 'fr' ? 'Tous' : 'All') : category}
            </button>
          ))}
        </div>
      </section>

      <section>
        {/* Featured Post */}
        {filteredPosts.length > 0 && activeCategory === 'All' && searchQuery === '' && (
          <div className="mb-8">
            <BlogCard Blog={filteredPosts[0]} isFeatured />
          </div>
        )}

        {/* Grid post */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {(activeCategory === 'All' && searchQuery === '' ? filteredPosts.slice(1) : filteredPosts).map((blog: IBlog) => (
            <BlogCard key={blog.id} Blog={blog} />
          ))}
        </div>

        {/* Empty Blog section */}
        {filteredPosts.length === 0 && <EmptyBlogCard />}
      </section>
    </>
  );
};
