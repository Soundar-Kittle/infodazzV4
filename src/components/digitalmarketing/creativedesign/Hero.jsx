"use client";

import React from "react";
import Image from "next/image";
import CdHero from "../../../../public/images/digitalmarketing/creativedesign/uiux2.png"; // Adjust if needed

const Hero = () => {
  return (
    <section className="w-full bg-[#0c0c1d] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1" data-aos="fade-right">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug capitalize mb-4">
              Pursuit of excellence and creativity take your brand to new heights
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover a world where design drives infinite creativity and innovation.
              Infodazz is a design firm that masters visual design and pixelated
              storytelling to create remarkable brand experiences.
            </p>
          </div>

          {/* Right Image */}
          <div
            className="w-full md:w-1/2 order-1 md:order-2 flex justify-center"
            data-aos="fade-left"
          >
            <Image
              src={CdHero}
              alt="Creative Design"
              width={500}
              height={400}
              className="object-contain rounded-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
