import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { HeroSection } from './sections/HeroSection';
import { NewsletterCTA } from './sections/NewsletterCTA';
import { PostsGrid } from './sections/PostsGrid';
import { SEO } from '@/shared/ui/SEO/SEO';
import { categories } from '@/shared/constants/blogCategories.const';
import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';

function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function resolveCategory(param?: string): string | undefined {
  if (!param) return undefined;
  const match = categories.find((c) => c !== 'All' && slugify(c) === param);
  if (match) return match;
  // Also match categories present in data but not in filter const
  const fromData = [...new Set(blogPostsData.map((p) => p.category))].find(
    (c) => slugify(c) === param,
  );
  return fromData;
}

function resolveTag(param?: string): string | undefined {
  if (!param) return undefined;
  const tags = [...new Set(blogPostsData.flatMap((p) => p.tags || []))];
  return tags.find((t) => slugify(t) === param);
}

export const BlogPage: React.FC = () => {
  const { category: categoryParam, tag: tagParam } = useParams();

  const initialCategory = useMemo(
    () => resolveCategory(categoryParam),
    [categoryParam],
  );
  const initialTag = useMemo(() => resolveTag(tagParam), [tagParam]);

  const seoPath = categoryParam
    ? `/blog/category/${categoryParam}`
    : tagParam
      ? `/blog/tag/${tagParam}`
      : '/blog';

  const seoTitle = initialCategory
    ? `Blog — ${initialCategory}`
    : initialTag
      ? `Blog — #${initialTag}`
      : 'Blog';

  const seoDescription = initialCategory
    ? `Articles ${initialCategory} : tutoriels DevOps, cloud AWS et développement Full Stack par Barthez Kenwou.`
    : initialTag
      ? `Articles tagués « ${initialTag} » sur le blog technique de Barthez Kenwou.`
      : 'Articles et tutoriels sur le développement web, le cloud AWS, le DevOps, Kubernetes et les meilleures pratiques Full Stack.';

  return (
    <>
      <SEO path={seoPath} title={seoTitle} description={seoDescription} />

      <div className="min-h-screen overflow-x-clip">
        <HeroSection />
        <PostsGrid initialCategory={initialCategory} initialTag={initialTag} />
        <NewsletterCTA />
      </div>
    </>
  );
};
