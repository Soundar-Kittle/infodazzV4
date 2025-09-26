"use client";

import React from "react";
import Image from "next/image";
import Branding2 from "../../../../public/images/digitalmarketing/brandbuilding/branding4.svg"; // Ensure proper path and loader config for SVG

const WhyUS = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div
            className="w-full md:w-1/2 flex justify-center items-center"
            data-aos="fade-right"
          >
            <Image
              src={Branding2}
              alt="Branding Image"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className="mb-6">
              <p className="text-sm text-green-600 uppercase font-medium">Branding</p>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                Strive for <span className="text-green-500">Excellence</span>. Then Keep Growing...
              </h3>
            </div>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              Infodazz excels in creating impactful first impressions, positioning your brand uniquely for commercial triumph. We are dedicated to constructing authentic narratives that resonate with consumer desires and stay true to your brand identity. With years of experience, we use a variety of tactics to increase trust and brand recognition.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Infodazz leaves a lasting and indelible mark in every connection by skillfully fusing creativity, strategic thought, and aesthetic sensitivity. This all-encompassing strategy establishes strong bonds that significantly impact brand perceptions. A smooth integration into interactive business solutions is ensured by our painstaking attention to detail. Together, we can create a memorable brand narrative to improve your company's visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUS;
