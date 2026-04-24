import { blogPostsData } from '@/entities/blogs/api/mock/blog.mocks';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { HiOutlineCalendar, HiOutlineClock, HiOutlineUser } from 'react-icons/hi2';
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export const MetaTagsSection: React.FC = () => {
  const { blogID } = useParams();
  const { language } = useLanguageStore();

  const post = blogPostsData.find((p) => p.id === blogID) || {
    author: 'Barthez Kenwou',
    date: new Date().toISOString(),
    readTime: '5 min',
    titleFr: '',
    titleEn: '',
    tags: [],
  };

  const formattedDate = new Date(post.date).toLocaleDateString(
    language === 'fr' ? 'fr-FR' : 'en-US', 
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Metadata Badges */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 text-muted-foreground/80 group">
          <div className="p-1 rounded-sm bg-secondary/40 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <HiOutlineUser className="h-3.5 w-3.5" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest">{post.author}</span>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground/80 group">
          <div className="p-1 rounded-sm bg-secondary/40 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <HiOutlineCalendar className="h-3.5 w-3.5" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest">{formattedDate}</span>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground/80 group">
          <div className="p-1 rounded-sm bg-secondary/40 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <HiOutlineClock className="h-3.5 w-3.5" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest">{post.readTime}</span>
        </div>
      </div>

      {/* Main Title with Gradient Effect */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-foreground tracking-tight leading-[1.2]">
        <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
          {language === 'fr' ? post.titleFr : post.titleEn}
        </span>
      </h1>

      {/* Categories / Tags */}
      <div className="flex flex-wrap gap-1 pt-1">
        {post.tags.map((tag: string, index: number) => (
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            key={tag}
            className="px-2 py-.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all cursor-default shadow-sm"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
};


