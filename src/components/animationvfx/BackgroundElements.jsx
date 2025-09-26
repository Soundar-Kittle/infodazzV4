'use client';

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

export default function BackgroundElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingStars, setFloatingStars] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const stars = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 8,
      delay: Math.random() * 8,
      speed: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
    }));

    setFloatingStars(stars);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
    
      <div className="fixed inset-0 pointer-events-none z-0">
        {floatingStars.map((star) => (
          <div
            key={star.id}
            className="absolute"
            style={{
              left: `${star.x}px`,
              top: `${star.y}px`,
              opacity: star.opacity,
              animation: `float-star ${3 + star.speed}s ease-in-out infinite, twinkle ${2 + star.delay}s ease-in-out infinite alternate`,
              animationDelay: `${star.delay}s`,
              filter: 'drop-shadow(0 0 8px rgba(253, 224, 71, 0.6))',
            }}
          >
            <Star
              className="text-yellow-300 animate-pulse"
              style={{ width: star.size, height: star.size }}
            />
          </div>
        ))}

        {/* Animated Background Orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x / 15}px`,
            top: `${mousePosition.y / 15}px`,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Custom Keyframes */}
      <style jsx global>{`
        @keyframes float-star {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes twinkle {
          0% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </>
  );
}
