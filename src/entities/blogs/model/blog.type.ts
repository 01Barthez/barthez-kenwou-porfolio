export interface IBlog {
  id: string;
  slug?: string;
  titleFr: string;
  titleEn: string;
  excerptFr: string;
  excerptEn: string;
  contentFr: string;
  contentEn: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  /** When false, hidden from the public blog listing. */
  isPublished?: boolean;
}
