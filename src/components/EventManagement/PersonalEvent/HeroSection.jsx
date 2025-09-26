"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const carousal = [
  {
    file: "/images/events/personal/photo1.jpg",
    title: "Whimsical Wedding Tales",
    tagline:
      "Entwined love, sealed promises—our lens captures festive moments, painting the essence of a wedding celebration.",
  },
  {
    file: "/images/events/personal/photo2.jpg",
    title: "Exploring the World Through the Lens",
    tagline:
      "Explore the Uncharted, Conquer the Unknown, and Ignite Your Passion for Discovery with us for a visual journey.",
  },
  {
    file: "/images/events/personal/photo3.jpg",
    title: "The Art of Candid Photography",
    tagline:
      "Unexpected moments catch emotions, tell unique tales, and capture life's true essence. We shape it for marvelous.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carousal.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {carousal.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.file}
            alt={`carousel-${index}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
            <h3 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg">
              {slide.title}
            </h3>
            <p className="mt-4 text-white max-w-2xl text-base sm:text-lg">
              {slide.tagline}
            </p>
          </div>
        </div>
      ))}
      {/* Dot Indicators */}
<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
  {carousal.map((_, idx) => (
    <button
      key={idx}
      onClick={() => setCurrentIndex(idx)}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        idx === currentIndex ? "bg-yellow-400 w-5" : "bg-gray-400"
      }`}
    />
  ))}
</div>
    </section>
  );
};

export default HeroSection;
