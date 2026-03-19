import { HeroVideoDialog } from '@/shared/ui/hero-video-dialog';
import React from 'react';

export const PresentationVideo: React.FC = () => {
  return (
    <div className="py-10 max-h-[600px] border-2 rounded-xl  flex justify-center">
      <HeroVideoDialog
        className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg *:ring-2 ring-offset-4 ring-offset-white dark:ring-offset-gray-900 ring-primary-500 hover:ring-primary-600 transition"
        animationStyle="from-center"
        videoSrc="https://player.vimeo.com/video/1174973749?autoplay=1"
        thumbnailSrc="https://lh3.googleusercontent.com/d/1QBE-jSS2LqJ3pHAY3iLHSlWnwAr_R-0X"
        thumbnailAlt="Barthez Kenwou Présentation"
      />
    </div>
  );
};
