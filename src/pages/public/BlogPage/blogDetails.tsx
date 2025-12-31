import { useParams } from 'react-router-dom';
import { blogPostsData } from '@/shared/mocks/blog.mocks';
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

export const BlogDetailPage = () => {
  const { id } = useParams();
  const post = blogPostsData.find((p) => p.id === id);
  const { language } = useLanguageStore();

  if (!post) <NotFoundPost />;

  return (
    <>
      <SEO
        title={`${
          language === 'fr' ? post?.titleFr : post?.titleEn
        } | Barthez Kenwou - Passionate DevOps & Full-Stack JS Developer `}
        description="Passionné par le développement web et le cloud computing depuis plus de 3 ans, je me spécialise dans la création d'applications web modernes, performantes et évolutives. Toujours à la recherche de nouveaux défis, je m'investis continuellement dans l'apprentissage de nouvelles technologies et les meilleures pratiques du secteur."
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
