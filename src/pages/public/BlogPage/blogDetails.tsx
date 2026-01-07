import { useParams } from 'react-router-dom';
import { NotFoundPost } from './sections/NotFoundPost';
import { BackSection } from './sections/BackSection';
import { HeroDetailSection } from './sections/HeroDetailSection';
import { MetaTagsSection } from './sections/Meta&tagsSection';
import { CTADetailsSection } from './sections/CTADetailsSection';
import { RelatedPostsSection } from './sections/RelatedPostsSection';
import { NavigationSection } from './sections/NavigationSection';
import { ShareSection } from './sections/ShareSection';
import { ArticleContentSection } from './sections/ArticleContentSection';
import { SEO } from '@/shared/ui/SEO/SEO';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { truncateFonction } from '@/shared/utils/truncateText/helpers';
import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';

export const BlogDetailPage = () => {
  const { id } = useParams();
  const post = blogPostsData.find((p) => p.id === id);
  const { language } = useLanguageStore();

  if (!post) <NotFoundPost />;

  return (
    <>
      <SEO
        title={`${
          language === 'fr'
            ? truncateFonction(post?.titleFr || '', 24)
            : truncateFonction(post?.titleFr || '', 24)
        } | Barthez Kenwou - Passionate DevOps & Full-Stack JS Developer `}
        description={`${
          language === 'fr'
            ? truncateFonction(post?.contentFr || '', 160)
            : truncateFonction(post?.contentEn || '', 160)
        } | Barthez Kenwou - Passionate DevOps & Full-Stack JS Developer `}
      />

      <div className="min-h-screen py-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <BackSection />

          {/* Hero Image */}
          <HeroDetailSection />

          {/* Meta - Title & Tags */}
          <MetaTagsSection />

          {/* Article Content */}
          <ArticleContentSection />

          {/* Share section */}
          <ShareSection />

          {/* Navigation Section */}
          <NavigationSection />

          {/* Related Posts */}
          <RelatedPostsSection />

          {/* CTA */}
          <CTADetailsSection />
        </div>
      </div>
    </>
  );
};
