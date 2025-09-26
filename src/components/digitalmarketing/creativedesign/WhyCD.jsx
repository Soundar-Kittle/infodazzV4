"use client";

import React from "react";
import Image from "next/image";
import Branding2 from "../../../../public/images/digitalmarketing/creativedesign/cd.png"; // Adjust if needed

const WhyCD = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1" data-aos="fade-right">
            <div className="mb-6">
              <p className="text-sm text-green-600 uppercase font-medium">Creative Design</p>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                Effective Patterns <span className="text-green-500">Artfully Crafted</span> Just for You
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Infodazz Creative team desires to produce aesthetic-rich designs that are unique and tailored to each client. Our designs evolve with client needs — from branding and UI/UX to social media and email creatives. Every asset is customer-centric and crafted for impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3L182.6 406.7c-12.5 12.5-32.8 12.5-45.3 0L8 277.9c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 339.3 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </span>
                  Branding
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3L182.6 406.7c-12.5 12.5-32.8 12.5-45.3 0L8 277.9c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 339.3 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </span>
                  UI/UX Designs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3L182.6 406.7c-12.5 12.5-32.8 12.5-45.3 0L8 277.9c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 339.3 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </span>
                  Marketing Collateral
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3L182.6 406.7c-12.5 12.5-32.8 12.5-45.3 0L8 277.9c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 339.3 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </span>
                  Social Media Design
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3L182.6 406.7c-12.5 12.5-32.8 12.5-45.3 0L8 277.9c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 339.3 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </span>
                  Newsletter & Emailer
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3L182.6 406.7c-12.5 12.5-32.8 12.5-45.3 0L8 277.9c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 339.3 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </span>
                  Videos
                </li>
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center" data-aos="fade-left">
            <Image
              src={Branding2}
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

export default WhyCD;
