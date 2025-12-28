

export interface PhotoGalleryProps {
  photos: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}
