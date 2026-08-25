import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/shared/ui/dialog';
import { Image } from '@/shared/ui/Image';
import { PhotoGalleryProps } from '../types/type';
import { cn } from '@/shared/lib';

/**
 * PhotoGallery - immersive profile gallery
 * Mobile: both chevrons stay inset + swipe to change photo.
 */
export const PhotoGallery = ({ photos, isOpen, onClose, initialIndex = 0 }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsZoomed(false);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') onClose();
    if (e.key === 'z' || e.key === 'Z') setIsZoomed((z) => !z);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    touchStartY.current = e.touches[0]?.clientY ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null || touchStartY.current == null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const endY = e.changedTouches[0]?.clientY ?? touchStartY.current;
    const dx = endX - touchStartX.current;
    const dy = endY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;

    // Horizontal swipe only (ignore mostly-vertical scrolls)
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
    if (dx > 0) handlePrev();
    else handleNext();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          'p-0 overflow-hidden border-primary/20',
          'w-[min(100vw-1rem,42rem)] sm:w-[min(100vw-2rem,40rem)]',
          'max-w-[calc(100vw-1rem)] sm:max-w-[calc(100vw-2rem)]',
          'h-[min(88dvh,900px)] max-h-[88dvh]',
          'bg-gradient-to-br from-background/98 via-background/95 to-primary/5 backdrop-blur-lg',
          'rounded-sm sm:rounded-md',
          'top-[50%] translate-y-[-50%]',
        )}
        onKeyDown={handleKeyDown}
        showCloseButton={false}
        aria-describedby={undefined}
      >
        <DialogTitle className="sr-only">
          Galerie photo {currentIndex + 1} / {photos.length}
        </DialogTitle>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-primary/10 rounded-full blur-[80px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-40 sm:w-72 h-40 sm:h-72 bg-primary/5 rounded-full blur-[80px] animate-pulse-slow delay-1000" />
        </div>

        {/* Top controls */}
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between gap-2 px-1.5 py-2 sm:px-3 bg-transparent">
          <div className="px-1 py-0.5 rounded-full glass text-[11px] font-medium tabular-nums">
            {currentIndex + 1} / {photos.length}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setIsZoomed((z) => !z)}
              className="cursor-pointer px-1 py-0.5 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
              aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
              title={isZoomed ? 'Zoom out (Z)' : 'Zoom in (Z)'}
            >
              {isZoomed ? (
                <ZoomOut className="h-4 w-4 sm:h-5 sm:w-4 group-hover:scale-110 transition-transform" />
              ) : (
                <ZoomIn className="h-4 w-4 sm:h-5 sm:w-4 group-hover:scale-110 transition-transform" />
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer px-1 py-0.5 rounded-full glass hover:bg-destructive/20 hover:text-destructive transition-all duration-300 group"
              aria-label="Close"
              title="Close (Esc)"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-4 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stage - image + overlaid nav (never clipped off-screen) */}
        <div
          className="relative h-full w-full min-w-0 flex items-center justify-center px-10 sm:px-12 py-10"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={cn(
              'relative w-full h-full max-w-md sm:max-w-xl transition-transform duration-500 ease-out',
              isZoomed ? 'scale-110 sm:scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in',
            )}
            onClick={() => setIsZoomed((z) => !z)}
            style={{
              animation:
                direction === 'right' ? 'slideInRight 0.5s ease-out' : 'slideInLeft 0.5s ease-out',
            }}
          >
            <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-md blur-xl opacity-50 pointer-events-none" />

            <div className="relative mx-auto w-full aspect-[5/4] h-full rounded-sm overflow-hidden shadow-sm backdrop-blur-md">
              <Image
                src={photos[currentIndex]}
                alt={`Photo ${currentIndex + 1} - Barthez Kenwou`}
                priority
                className="absolute inset-0 h-full w-full"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center 10%',
                }}
              />
            </div>
          </div>

          {/* Chevrons sit in the side gutters (px-10), above the image */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className={cn(
              'absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 z-40',
              'p-1.5 sm:p-2 rounded-full glass cursor-pointer',
              'hover:glow-primary transition-all duration-300 group',
              'touch-manipulation',
            )}
            aria-label="Previous photo"
            title="Previous (←)"
          >
            <ChevronLeft className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className={cn(
              'absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 z-40',
              'p-1.5 sm:p-2 rounded-full glass cursor-pointer',
              'hover:glow-primary transition-all duration-300 group',
              'touch-manipulation',
            )}
            aria-label="Next photo"
            title="Next (→)"
          >
            <ChevronRight className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-1 left-0 right-0 z-40 flex justify-center py-2 pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur-sm">
            {photos.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left');
                  setCurrentIndex(index);
                }}
                className={cn(
                  'cursor-pointer transition-all duration-300 rounded-full',
                  index === currentIndex
                    ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-primary glow-primary'
                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-muted-foreground/40 hover:bg-muted-foreground/70 hover:scale-125',
                )}
                aria-label={`Go to photo ${index + 1}`}
                title={`Photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
