import { Navbar } from '@/widgets/Navbar';
import React from 'react';

export const HomePage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen max-w-screen mx-auto">
        <div className="container">
          <Navbar />
          Home page
        </div>
      </div>
    </>
  );
};
