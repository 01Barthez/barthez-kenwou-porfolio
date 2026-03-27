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
  colorClass?: string;
}

export const ContactInfoCard: React.FC<ContactInfoProps> = ({ 
  icon: Icon, 
  label, 
  value, 
  href, 
  className,
  colorClass = "text-primary"
}) => {
  const content = (
    <div className={cn(
      "glass p-4 rounded-xl border border-border/50 hover:border-primary/40 transition-all duration-300 group flex items-center gap-4",
      className
    )}>
      <div className={cn(
        "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500"// Dynamic background adjustment
      )}>
        <Icon className={cn("h-5 w-5", colorClass)} />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-0.5">{label}</p>
        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <motion.a 
        href={href}
        target={href.startsWith('http') ? "_blank" : undefined}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        whileHover={{ x: 5 }}
        className="block cursor-pointer"
      >
        {content}
      </motion.a>
    );
  }

  return <motion.div whileHover={{ y: -2 }}>{content}</motion.div>;
};
