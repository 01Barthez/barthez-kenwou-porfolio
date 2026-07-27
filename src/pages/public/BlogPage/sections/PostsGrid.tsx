import { BlogCard, IBlog } from '@/entities/blogs';
import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';
import { EmptyBlogCard } from '@/entities/blogs/ui/EmptyBlogCard.ui';
import { categories } from '@/shared/constants/blogCategories.const';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type PostsGridProps = {
  initialCategory?: string;
  initialTag?: string;
};

export const PostsGrid: React.FC<PostsGridProps> = ({
  initialCategory,
  initialTag,
}) => {
  const { language } = useLanguageStore();
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'All');
  const [activeTag, setActiveTag] = useState<string | undefined>(initialTag);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setActiveCategory(initialCategory || 'All');
    setActiveTag(initialTag);
  }, [initialCategory, initialTag]);

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory;
    const matchesTag = !activeTag || post.tags.some((t) => t === activeTag);
    const title = language === 'fr' ? post.titleFr : post.titleEn;
    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesTag && matchesSearch;
  });

  return (
    <>
      <div className="relative z-20 bg-background py-4 px-4 md:px-10 lg:px-14">
        {activeTag && (
          <p className="mb-3 text-sm text-muted-foreground">
            {language === 'fr' ? 'Filtre tag :' : 'Tag filter:'}{' '}
            <strong className="text-foreground">#{activeTag}</strong>{' '}
            <Link to="/blog" className="text-primary underline-offset-2 hover:underline">
              {language === 'fr' ? 'Effacer' : 'Clear'}
            </Link>
          </p>
        )}

        <section className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

            <input
              type="text"
              placeholder={language === 'fr' ? 'Rechercher un article...' : 'Search articles...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-md bg-secondary/50 border border-border/50 focus:border-primary/50 focus:outline-none transition-colors text-sm text-foreground placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category}
                to={category === 'All' ? '/blog' : `/blog/category/${category.toLowerCase()}`}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveTag(undefined);
                }}
                className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all border ${activeCategory === category && !activeTag
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-secondary/30 text-muted-foreground hover:text-foreground border-border/50'
                  }`}
              >
                {category === 'All' ? (language === 'fr' ? 'Tous' : 'All') : category}
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4 md:space-y-8">
          {filteredPosts.length > 0 && activeCategory === 'All' && !activeTag && searchQuery === '' && (
            <div className="">
              <BlogCard Blog={filteredPosts[0]} isFeatured />
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {(activeCategory === 'All' && !activeTag && searchQuery === ''
              ? filteredPosts.slice(1)
              : filteredPosts
            ).map((blog: IBlog) => (
              <BlogCard key={blog.id} Blog={blog} />
            ))}
          </div>

          {filteredPosts.length === 0 && <EmptyBlogCard />}
        </section>
      </div>
    </>
  );
};
