import React from 'react';

export const Footer: React.FC = () => {
  return <footer className="border-t w-full py-4">
    <div className="container flex items-center justify-between text-foreground/50 text-sm">
      <div className="">
        &copy;&nbsp;copyrights {new Date().getFullYear()}
      </div>

      <div className="">
        Barthez Kenwou | DevOps Engeneer & Fullstack Developer
      </div>
    </div>
  </footer>;
};
