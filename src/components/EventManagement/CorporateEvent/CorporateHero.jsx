"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CorpHero = [
  {
    title: "Captivating Corporate Gatherings",
    content:
      "A meticulous crafting of unique and innovative event concepts that leave a lasting impression.",
    image: "/images/events/corporateservice1.jpg",
  },
  {
    title: "Precision, Planning, Seamless Execution",
    content:
      "Experience the future with our tech-savvy approach seamlessly integrates the latest technologies for immersive experiences.",
    image: "/images/events/corporateservice2.jpg",
  },
  {
    title: "Unforgettable Corporate Gatherings",
    content:
      "We collaborate closely to understand your goals, ensuring a flawlessly executed corporate experience.",
    image: "/images/events/corporateservice3.jpg",
  },
];

const CorporateHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CorpHero.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {CorpHero.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={`corporate-slide-${index}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              {slide.title}
            </h2>
            <p className="text-white max-w-2xl text-base md:text-lg">
              {slide.content}
            </p>
          </div>
        </div>
      ))}

      <button
        onClick={() =>
          setCurrentIndex((prev) =>
            prev === 0 ? CorpHero.length - 1 : prev - 1
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white z-30"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % CorpHero.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white z-30"
      >
        <FaChevronRight />
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {CorpHero.map((_, index) => (
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

export default CorporateHero;
