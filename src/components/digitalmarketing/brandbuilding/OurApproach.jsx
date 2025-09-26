"use client";

import React from "react";
import Image from "next/image";
import Branding from "../../../../public/images/digitalmarketing/brandbuilding/brandemotion2.svg"; // Ensure correct SVG import or place in /public

const OurApproach = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div
            className="w-full md:w-1/2 order-2 md:order-1"
            data-aos="fade-right"
          >
            <div className="mb-6">
              <p className="text-sm text-green-600 uppercase font-medium">Our Approach</p>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                Implement <span className="text-green-500">Data Alongside Emotions</span> to Create Profound Relationships
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              A meticulous sight broadens the client's in-depth expectations. Choosing the appropriate concept and route is crucial for product branding. This is how Infodazz lives up to its philosophy of selecting the best option for its clients. With a decade of experience as a brand strategy agency, we've consistently observed that merely being the price leader or boasting the best product doesn't ensure success. Instead, companies that establish emotional bonds with their audience, foster engagement, and effectively convey their vision emerge as market leaders and disruptors in their industries.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              We constantly assure customers that we will craft brand-loyal narratives that satisfy consumers' needs. With many years of experience, we employ a number of tactics to raise brand awareness and foster consumer trust in the intended market. Our experts respect your brand's attention to detail in order to develop web-friendly procedures and interactive companies. We engage with the target audience using creativity, tactful reasoning, and aesthetic sense, creating enduring impressions about companies and goods.
            </p>
          </div>

          {/* Right Image */}
          <div
            className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center"
            data-aos="fade-left"
          >
            <Image
              src={Branding}
              alt="Our Approach"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
