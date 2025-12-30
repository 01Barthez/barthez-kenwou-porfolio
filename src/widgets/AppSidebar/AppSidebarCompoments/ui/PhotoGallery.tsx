import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/shared/ui/dialog';
import { Image } from '@/shared/ui/Image';
import { PhotoGalleryProps } from '../types/type';

export const PhotoGallery = ({ photos, isOpen, onClose, initialIndex = 0 }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-7xl w-full h-[80vh] p-0 bg-background/95 backdrop-blur-2xl border-border"
        onKeyDown={handleKeyDown}
        showCloseButton={false}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-secondary/80 text-foreground hover:bg-secondary transition-colors"
          aria-label="Close"
          title="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative h-full flex items-center justify-center p-8">
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 z-40 p-3 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            aria-label="Previous"
            title="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={photos[currentIndex]}
              alt={`Photo ${currentIndex + 1}`}
              priority
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-scale-in"
            />
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 z-40 p-3 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            aria-label="Next"
            title="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary w-6'
                  : 'bg-muted-foreground/50 hover:bg-muted-foreground'
              }`}
              aria-label={`Go to photo ${index + 1}`}
              title={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
