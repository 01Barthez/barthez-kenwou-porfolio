import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t w-full py-4">
      <div className="container flex items-center justify-between text-foreground/50 text-sm">
        <div className="">
          &copy;&nbsp;copyrights {new Date().getFullYear()}. All rights reserved.
        </div>

        <div className="">Barthez Kenwou | DevOps Engineer & Fullstack Developer</div>
      </div>
    </footer>
  );
};
