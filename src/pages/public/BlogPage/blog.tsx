import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { SearchFilter } from './sections/Search&Filter';
import { FeaturedPost } from './sections/FeaturedPost';
import { NewsletterCTA } from './sections/NewsletterCTA';
import { EmptyPost } from './sections/EmptyPost';
import { PostsGrid } from './sections/PostsGrid';
import { SEO } from '@/shared/ui/SEO/SEO';

export const BlogPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Blog - Barthez Kenwou | Passionate DevOps & Full-Stack JS Developer"
        description="Articles, tutoriels et réflexions sur le développement, le cloud et le DevOps | Passionné par le développement web et le cloud computing depuis plus de 3 ans, je me spécialise dans la création d'applications web modernes, performantes et évolutives."
      />

      <div className="min-h-screen max-w-6xl mx-auto py-20 px-6">
        {/* Hero Section */}
        <HeroSection />

        {/* Search & Filter Section*/}
        <SearchFilter />

        {/* Featured Post */}
        <FeaturedPost />

        {/* Posts Grid */}
        <PostsGrid />

        {/* Empty State */}
        <EmptyPost />

        {/* Newsletter CTA */}
        <NewsletterCTA />
      </div>
    </>
  );
};
