import { useState, useEffect } from 'react';
import { Play, XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Image } from '@/shared/ui/Image';

import { cn } from '@/shared/lib/utils';

type AnimationStyle =
  | 'from-bottom'
  | 'from-center'
  | 'from-top'
  | 'from-left'
  | 'from-right'
  | 'fade'
  | 'top-in-bottom-out'
  | 'left-in-right-out';

interface HeroVideoProps {
  animationStyle?: AnimationStyle;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

const animationVariants = {
  'from-bottom': {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '100%', opacity: 0 },
  },
  'from-center': {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  'from-top': {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '-100%', opacity: 0 },
  },
  'from-left': {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  },
  'from-right': {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  'top-in-bottom-out': {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '100%', opacity: 0 },
  },
  'left-in-right-out': {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
  },
};

export function HeroVideoDialog({
  animationStyle = 'from-center',
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = 'Video thumbnail',
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];

  // Detect if device is mobile for better UX
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen]);

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseVideo();
    }
  };

  return (
    <div className={cn('relative w-full', className)}>
      {/* Thumbnail Button */}
      <button
        type="button"
        aria-label="Play video"
        className="group relative w-full cursor-pointer border-0 bg-transparent p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
        onClick={() => setIsVideoOpen(true)}
      >
        <Image
          src={thumbnailSrc}
          alt={thumbnailAlt}
          width={1920}
          height={1080}
          priority
          className="w-full aspect-video object-cover bg-neutral-900 rounded-lg border border-neutral-800 shadow-lg transition-all duration-300 ease-out group-hover:brightness-75 group-active:brightness-50"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center rounded-lg transition-all duration-300">
          {/* Outer Circle */}
          <div className="absolute bg-primary/20 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full backdrop-blur-sm group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300" />
          
          {/* Inner Circle with Icon */}
          <div className="relative flex w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 items-center justify-center rounded-full bg-gradient-to-b from-primary/40 to-primary shadow-lg group-hover:scale-125 transition-transform duration-300">
            <Play
              className="w-5 sm:w-7 md:w-8 h-5 sm:h-7 md:h-8 fill-white text-white transition-transform duration-300 group-hover:scale-110"
              style={{
                filter:
                  'drop-shadow(0 4px 3px rgb(0 0 0 / 0.3)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.2))',
              }}
            />
          </div>
        </div>
      </button>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={handleBackdropClick}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                handleCloseVideo();
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-h-[90vh] aspect-video max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={handleCloseVideo}
                className={cn(
                  'absolute -top-12 sm:-top-14 right-0 z-10',
                  'flex items-center justify-center',
                  'w-10 h-10 sm:w-12 sm:h-12',
                  'rounded-full bg-white/10 hover:bg-white/20 dark:bg-black/30 dark:hover:bg-black/50',
                  'text-white transition-all duration-200',
                  'ring-1 ring-white/20 backdrop-blur-md',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-white',
                  'active:scale-95'
                )}
                aria-label="Close video modal"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <XIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              {/* Video Container */}
              <div
                className="relative isolate w-full h-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/20"
                id="video-modal"
              >
                <iframe
                  src={videoSrc}
                  title="Hero Video player"
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
