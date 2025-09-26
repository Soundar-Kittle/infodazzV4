"use client";

import React from "react";
import Image from "next/image";
import HeroImage from "../../../../public/images/digitalmarketing/seosmmseo/hdf33.png"; // Update to your path

const Hero = () => {
  return (
    <section className="w-full bg-[#0c0c1d] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: SEO Content */}
          <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-snug mb-4">
              SEO & Digital Marketing Agency in India
            </h1>
            <p className="text-gray-300 text-base mb-6">
              Drive more traffic, generate quality leads, and grow your business online with our expert Search Engine Optimization (SEO), Social Media Marketing (SMM), and result-driven digital strategies. Rank higher on Google and convert visitors into loyal customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#proposal"
                className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded shadow font-medium transition"
              >
                🚀 Get Free Proposal
              </a>
              <a
                href="#contact"
                className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded border shadow font-medium transition"
              >
                📞 Talk to an Expert
              </a>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-right">
            <Image
              src={HeroImage}
              alt="SEO and Digital Marketing Illustration"
              width={500}
              height={500}
              className="object-contain max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
