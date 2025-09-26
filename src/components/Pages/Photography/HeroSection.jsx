'use client';
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import "swiper/css"; // Correct Swiper CSS import for basic functionality
import Image from "next/image";

import Wedding from "../../../../public/images/phtography/wedding_new.webp";
import Product from "../../../../public/images/phtography/product_new.webp";

const heroData = [
  {
    title: "Best Wedding photography Services",
    category: "Event",
    description:
      "Joy pours when a vibrant day begins. Every festivity is memorable when a take of clips keeps emotions for the future.",
    date: "12.02.2023",
    image: Wedding,
    video: null,
  },
  {
    title: "Premium Product photography Services",
    category: "Product",
    description:
      "Elevate your brand with premium product photography, showcasing your products through studio and on-location shoots.",
    date: "12.02.2023",
    image: Product,
    video: null,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slide Change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out">
        {heroData.map((slide, index) => (
          <div
            key={index} // Use index as key, which is unique for each slide in heroData
            className={`absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt="Hero Image"
              fill
              className="object-cover w-full h-full absolute opacity-60"
            />
            <div className="relative z-20 text-center px-6 sm:px-12">
              <h4 className="text-sm sm:text-lg text-gray-300 uppercase tracking-wide mb-2">
                {slide.category}
              </h4>
              <h2 className="text-3xl sm:text-5xl font-bold text-white">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-lg text-white">{slide.description}</p>
              <Link
                href="#"
                className="relative px-6 py-3 text-yellow-400 font-medium text-lg border border-yellow-400 rounded-md 
                 transition-all duration-300 hover:bg-yellow-400 hover:text-black 
                 shadow-[0_0_15px_rgba(255,223,86,0.6)] 
                 hover:shadow-[0_0_25px_rgba(255,223,86,0.9)] animate-glow mt-4 inline-block"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? heroData.length - 1 : prev - 1))
        }
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full transition-all text-white z-20 cursor-pointer"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroData.length)}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 p-3 rounded-full transition-all text-white z-20 cursor-pointer"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {heroData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-yellow-400 w-5" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
