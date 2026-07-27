import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-2 bg-background border-t w-full pt-1 md:pt-1 pb-21 md:pb-24 px-4 md:px-10 lg:px-14 xl:pb-1">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-foreground/50 text-[11px] md:text-xs gap-4 md:gap-0">
        <div className="hidden md:block text-center md:text-left">
          &copy;&nbsp;copyrights {new Date().getFullYear()}. All rights reserved.
        </div>

        <div className="text-center md:text-right font-medium text-balance px-2">
          Barthez Kenwou <span className="text-border mx-1">|</span>{' '}
          <span className="inline">DevOps Engineer & Fullstack Developer</span>
        </div>
      </div>
    </footer>
  );
};
