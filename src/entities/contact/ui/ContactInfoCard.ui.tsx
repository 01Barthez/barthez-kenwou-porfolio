import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { IconType } from 'react-icons';

interface ContactInfoProps {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
  className?: string;
}

export const ContactInfoCard: React.FC<ContactInfoProps> = ({
  icon: Icon,
  label,
  value,
  href,
  className,
}) => {
  const content = (
    <div
      className={cn(
        'group flex items-center gap-2 rounded-sm border border-border/50 bg-card/40 p-1.5 backdrop-blur-sm',
        'transition-[border-color,background-color,box-shadow] duration-500 ease-out',
        'hover:border-primary/25 hover:bg-card/70 hover:shadow-[0_8px_24px_-18px_hsla(268,45%,30%,0.35)]',
        className,
      )}
    >
      <div
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-sm border border-primary/15 bg-primary/8 text-foreground',
          'transition-[background-color,border-color,color,transform] duration-500 ease-out',
          'group-hover:border-primary/30 group-hover:bg-primary/15 group-hover:text-primary',
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="mb-0.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
          {label}
        </p>
        <p className="truncate text-[11px] font-semibold text-foreground transition-colors duration-500 group-hover:text-primary/90">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        whileHover={{ x: 2 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        className="block cursor-pointer"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div whileHover={{ y: -1 }} transition={{ type: 'spring', stiffness: 300, damping: 26 }}>
      {content}
    </motion.div>
  );
};
