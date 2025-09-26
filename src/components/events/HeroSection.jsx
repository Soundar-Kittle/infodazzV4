"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const heroData = [
  {
    title: "Crafting Dreams, Frame by Frame",
    category: "Event",
    description:
      "Experience top-notch VFX and animation for stunning visuals. Our team crafts captivating scenes, from mind-blowing effects to intricate characters.",
    date: "12.02.2023",
    image: "/images/events/corporate/attendees.jpg",
    video: null,
  },
  {
    title: "Visualizing Visions, Scene by Scene",
    category: "Product",
    description:
      "Experience top-tier animation and VFX services that transform your dreams into reality.",
    date: "12.02.2023",
    image: "/images/events/personal/photo2.jpg",
    video: null,
  },
  {
    title: "Weaving intricate tales, pixel by pixel",
    category: "VFX",
    description:
      "Immerse yourself in captivating stories brought to life through intricate animation and VFX. Our skilled team weaves detailed narratives, pixel by pixel, creating unforgettable visual experiences.",
    date: "12.02.2023",
    image: "/images/animationvfx/vfx_breakdown.webp",
    video: "/images/animationvfx/videos/vfx.mp4",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroData[currentIndex];

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Slides */}
      {heroData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          {slide.video ? (
            <video
              src={slide.video}
              poster={slide.image}
              className="w-full h-full object-cover absolute"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <Image
              src={slide.image}
              alt={`slide-${index}`}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
            <h4 className="text-sm sm:text-lg text-gray-300 uppercase tracking-wide mb-2">
              {slide.category}
            </h4>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              {slide.title}
            </h2>
            <p className="text-white mt-4 max-w-xl text-base md:text-lg">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={() =>
          setCurrentIndex((prev) =>
            prev === 0 ? heroData.length - 1 : prev - 1
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white z-30"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % heroData.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white z-30"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {heroData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-yellow-400 w-5" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
