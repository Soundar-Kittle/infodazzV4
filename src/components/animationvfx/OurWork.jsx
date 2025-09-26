"use client";

import React from "react";
import Image from "next/image";

// Ensure these images exist under /public/images/animationvfx/
import Poster1 from "../../../public/images/animationvfx/image1.jpg";
import Poster2 from "../../../public/images/animationvfx/image2.jpg";
import Poster3 from "../../../public/images/animationvfx/image3.jpg";
import Poster4 from "../../../public/images/animationvfx/image4.jpg";
import Poster5 from "../../../public/images/animationvfx/image5.jpg";
import Poster6 from "../../../public/images/animationvfx/image6.jpg";

const workData = [
  { poster: Poster1 },
  { poster: Poster2 },
  { poster: Poster3 },
  { poster: Poster4 },
  { poster: Poster5 },
  { poster: Poster6 },
];

const OurWork = () => {
  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
        Latest Work
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {workData.map((work, idx) => (
          <div
            key={idx}
            className="relative group rounded-lg shadow-lg overflow-hidden aspect-video"
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <Image
              src={work.poster}
              alt={`Work ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
