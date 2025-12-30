import { profilePhotos } from '@/shared/assets/images/profilePhotos';
import { Image } from '@/shared/ui/Image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PhotoGallery } from './ui/PhotoGallery';
import { ArrowRight } from 'lucide-react';

export const SidebarHeaderSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="p-3 border-b">
      <Link to="/" className="flex items-center gap-3">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-3 px-4">
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="group/picture relative overflow-hidden rounded-2xl border-2 border-primary/50 hover:border-primary transition-all duration-300 hover:glow-primary"
            aria-label="View profile photos"
            title="View profile photos"
          >
            <Image
              src={profilePhotos[0]}
              alt="Barthez Kenwou"
              priority
              className={`object-cover transition-all duration-300 scale-110 group-hover/picture:scale-120 ${
                isExpanded ? 'h-full w-full' : 'h-12 w-12'
              }`}
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/picture:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-xs font-medium text-background">{t('sidebar.see_more')}</span>
              <ArrowRight size={16} color="#000000" strokeWidth={1.25} />
            </div>
          </button>

          {isExpanded && (
            <div className="text-center animate-fade-in">
              <h2 className="text-lg font-bold text-foreground">Barthez Kenwou</h2>
              <p className="text-xs text-muted-foreground font-mono">{t('sidebar.title')}</p>
              <p className="text-xs text-primary font-medium mt-1">{t('sidebar.subtitle')}</p>
            </div>
          )}
        </div>

        {/* Gallery Modal */}
        {isGalleryOpen && (
          <PhotoGallery
            photos={profilePhotos}
            isOpen={isGalleryOpen}
            onClose={() => setIsGalleryOpen(false)}
          />
        )}
      </Link>
    </div>
  );
};
