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
import { TableOfContents } from './sections/TableOfContents';
import { SEO } from '@/shared/ui/SEO/SEO';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { truncateFonction } from '@/shared/ui/utils/truncateText/helpers';
import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';
import { motion } from 'framer-motion';

export const BlogDetailPage = () => {
  const { blogID } = useParams();
  const post = blogPostsData.find((p) => p.id === blogID);
  const { language } = useLanguageStore();

  if (!post) return <NotFoundPost />;

  const content = language === 'fr' ? post.contentFr : post.contentEn;

  return (
    <>
      <SEO
        path={`/blog/${blogID}`}
        title={`${language === 'fr'
          ? truncateFonction(post?.titleFr || '', 60)
          : truncateFonction(post?.titleEn || '', 60)
          }`}
        description={`${language === 'fr'
          ? truncateFonction(post?.excerptFr || post?.contentFr || '', 160)
          : truncateFonction(post?.excerptEn || post?.contentEn || '', 160)
          }`}
        openGraph={{ type: 'article' }}
      />

      <div className="min-h-screen bg-background relative overflow-x-clip">
        {/* Background Decorative Elements — contained so they never create page-level X scroll */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10" aria-hidden>
          <div className="absolute top-0 right-0 w-[min(400px,70vw)] h-[min(400px,70vw)] bg-primary/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[min(400px,70vw)] h-[min(400px,70vw)] bg-primary/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-16">
          {/* Header Area */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BackSection />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar Area - Now on the Left */}
            <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 min-w-0">
              {/* Opacity-only: transform on parent would break position:fixed TOC */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <TableOfContents content={content} />
              </motion.div>
            </aside>

            {/* Main Content Area - Now on the Right */}
            <main className="lg:col-span-8 xl:col-span-9 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Hero Section */}
                <HeroDetailSection />

                {/* Meta & Title */}
                <MetaTagsSection />

                {/* Article content */}
                <div className="mt-8 border-t border-border/40 pt-0">
                  <ArticleContentSection />
                </div>

                {/* Post Footer Actions */}
                <div className="mt-10 space-y-12">
                  <ShareSection />
                  <NavigationSection />
                  <RelatedPostsSection />
                  <CTADetailsSection />
                </div>
              </motion.div>
            </main>
          </div>


          {/* Table of Contents - Mobile version (FAB) */}
          <div className="lg:hidden">
            <TableOfContents content={content} />
          </div>
        </div>
      </div>
    </>
  );
};


