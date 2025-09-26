"use client";

import React from "react";
import Image from "next/image";
import BrandingImage from "../../../../public/images/digitalmarketing/brandbuilding/hdf33.png"; // Make sure this is correctly imported via next/image

const Hero = () => {
  return (
    <section className="w-full bg-[#0c0c1d] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div
            className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left"
            data-aos="fade-right"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white capitalize leading-snug mb-4">
              Create a legacy for your brand now.
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
              Boost your brand&apos;s visibility with creative designs, gripping
              narratives, and a distinctive look that has a significant impact.
            </p>
          </div>

          {/* Right Image */}
          <div
            className="w-full md:w-1/2 order-1 md:order-2 flex justify-center"
            data-aos="fade-left"
          >
            <Image
              src={BrandingImage}
              alt="Branding"
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
