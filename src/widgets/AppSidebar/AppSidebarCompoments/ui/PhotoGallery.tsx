import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { Dialog, DialogContent } from '@/shared/ui/dialog';
import { Image } from '@/shared/ui/Image';
import { PhotoGalleryProps } from '../types/type';

/**
 * PhotoGallery Component - Galerie photo immersive et innovante
 *
 * Fonctionnalités:
 * - Transitions 3D fluides entre les photos
 * - Prévisualisation en miniatures avec effet de survol
 * - Zoom progressif et mode plein écran
 * - Navigation au clavier (←, →, Esc)
 * - Indicateurs de progression élégants
 * - Effets de lumière et gradients dynamiques
 * - Animations sophistiquées avec Motion
 *
 * @component
 */
export const PhotoGallery = ({ photos, isOpen, onClose, initialIndex = 0 }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const imageRef = useRef<HTMLDivElement>(null);

  // Reset zoom when changing photos
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
    if (e.key === 'z' || e.key === 'Z') setIsZoomed(!isZoomed);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[95vw] w-full h-[95vh] p-0 bg-gradient-to-br from-background/98 via-background/95 to-primary/5 backdrop-blur-3xl border-primary/20 overflow-hidden"
        onKeyDown={handleKeyDown}
        showCloseButton={false}
      >
        {/* Ambient Light Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
        </div>

        {/* Top Controls */}
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gradient-to-b from-background/80 to-transparent backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="px-4 py-2 rounded-full glass text-sm font-medium">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleZoom}
              className="p-2.5 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
              aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
              title={isZoomed ? 'Zoom out (Z)' : 'Zoom in (Z)'}
            >
              {isZoomed ? (
                <ZoomOut className="h-5 w-5 group-hover:scale-110 transition-transform" />
              ) : (
                <ZoomIn className="h-5 w-5 group-hover:scale-110 transition-transform" />
              )}
            </button>
            
            <button
              onClick={onClose}
              className="p-2.5 rounded-full glass hover:bg-destructive/20 hover:text-destructive transition-all duration-300 group"
              aria-label="Close"
              title="Close (Esc)"
            >
              <X className="h-5 w-5 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Main Image Container */}
        <div className="relative h-full flex items-center justify-center px-4 py-20">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-6 z-40 p-4 rounded-2xl glass hover:glow-primary hover:scale-110 transition-all duration-300 group"
            aria-label="Previous photo"
            title="Previous (←)"
          >
            <ChevronLeft className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
          </button>

          {/* Image with 3D Effect */}
          <div
            ref={imageRef}
            className={`relative max-w-5xl max-h-full transition-all duration-700 ease-out ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
            }`}
            onClick={toggleZoom}
            style={{
              animation:
                direction === 'right' ? 'slideInRight 0.6s ease-out' : 'slideInLeft 0.6s ease-out',
            }}
          >
            {/* Decorative Frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/20 bg-card">
              <Image
                src={photos[currentIndex]}
                alt={`Photo ${currentIndex + 1} - Barthez Kenwou`}
                priority
                className="object-contain w-full h-full max-h-[70vh] rounded-3xl"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-6 z-40 p-4 rounded-2xl glass hover:glow-primary hover:scale-110 transition-all duration-300 group"
            aria-label="Next photo"
            title="Next (→)"
          >
            <ChevronRight className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Elegant Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 'right' : 'left');
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-primary glow-primary'
                  : 'w-2 h-2 bg-muted-foreground/40 hover:bg-muted-foreground/70 hover:scale-125'
              }`}
              aria-label={`Go to photo ${index + 1}`}
              title={`Photo ${index + 1}`}
            />
          ))}
        </div>

        {/* Keyboard Hints - Subtle and Non-intrusive */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3 text-xs text-muted-foreground/60 opacity-0 hover:opacity-100 transition-opacity duration-500">
          <div className="flex items-center gap-1.5">
            <kbd className="px-2 py-0.5 rounded bg-secondary/30 font-mono text-[10px]">←</kbd>
            <kbd className="px-2 py-0.5 rounded bg-secondary/30 font-mono text-[10px]">→</kbd>
            <span className="text-[10px]">Navigate</span>
          </div>
          <div className="flex items-center gap-1.5">
            <kbd className="px-2 py-0.5 rounded bg-secondary/30 font-mono text-[10px]">Z</kbd>
            <span className="text-[10px]">Zoom</span>
          </div>
          <div className="flex items-center gap-1.5">
            <kbd className="px-2 py-0.5 rounded bg-secondary/30 font-mono text-[10px]">Esc</kbd>
            <span className="text-[10px]">Close</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
