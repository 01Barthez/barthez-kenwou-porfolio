import { blogPostsData } from '@/shared/mocks/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import React, { useState } from 'react';

export const EmptyPost: React.FC = () => {
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
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {language === 'fr' ? 'Aucun article trouvé.' : 'No articles found.'}
          </p>
        </div>
      )}
    </>
  );
};
