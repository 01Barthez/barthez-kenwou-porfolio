import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Share2 } from 'lucide-react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const ShareSection: React.FC = () => {
  const { language } = useLanguageStore();
  const { id } = useParams();

  const post = blogPostsData.find((p) => p.id === id) || { titleFr: '', titleEn: '' };

  return (
    <div className="flex items-center gap-4 p-6 rounded-2xl bg-secondary/30 mb-12">
      <Share2 className="h-5 w-5 text-primary" />
      <span className="text-foreground font-medium">
        {language === 'fr' ? 'Partager cet article' : 'Share this article'}
      </span>

      <div className="flex gap-2 ml-auto">
        <Link
          to={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            language === 'fr' ? post.titleFr : post.titleEn,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Twitter
        </Link>

        <Link
          to={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            window.location.href,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          LinkedIn
        </Link>
      </div>
    </div>
  );
};
