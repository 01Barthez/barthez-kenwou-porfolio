import React, { useState, useEffect } from 'react';

export const StarsBackground: React.FC = () => {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 150 }).map((_, i) => {
      const size = Math.random() * 2 + 1;
      return {
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: Math.random() * 0.7 + 0.3,
        boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 5}s`,
      };
    });
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none hidden dark:block bg-black">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white transition-opacity duration-1000 animate-pulse"
          style={star}
        />
      ))}
    </div>
  );
};
