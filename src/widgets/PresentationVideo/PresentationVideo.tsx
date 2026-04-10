import { HeroVideoDialog } from '@/shared/ui/hero-video-dialog';
import React from 'react';

export const PresentationVideo: React.FC = () => {
  return (
    <div className="px-4 md:px-10 lg:px-14 py-0 relative z-10">
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://player.vimeo.com/video/1174973749?autoplay=1"
        thumbnailSrc="https://lh3.googleusercontent.com/d/1QBE-jSS2LqJ3pHAY3iLHSlWnwAr_R-0X"
        thumbnailAlt="Barthez Kenwou Présentation"
      />
    </div>
  );
};
