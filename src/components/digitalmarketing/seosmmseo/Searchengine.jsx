"use client";

import React from "react";
import Image from "next/image";
import seo3 from "../../../../public/images/digitalmarketing/seosmmseo/seo3.svg"; // Ensure it's imported correctly or use `/public/seo3.svg`

const seoServicesLeft = [
  "Technical SEO",
  "On-Page SEO",
  "Off-Page SEO",
];

const seoServicesRight = [
  "Local SEO",
  "E-Commerce SEO",
  "SEO Audit",
];

const SearchEngine = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
          {/* Text Content */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-right"
          >
            <div className="mb-6">
              <p className="text-sm text-green-600 uppercase font-medium">Search Engine Optimization</p>
              <h3 className="text-3xl font-bold text-gray-800">
                Enhance with <span className="text-green-500">Best SEO</span> Practices
              </h3>
            </div>
            <div className="text-gray-600 space-y-4 text-sm leading-relaxed mb-6">
              <p>
                Search Engine Optimization (SEO) is one of our digital marketing services that is essential to connect with your intended online audience. Improved webpage exposure in search engines immediately adds to your company's bottom line.
              </p>
              <p>
                SEO ensures increased genuine leads and traffic, though it takes time to show results. Reaching the top of Google's SERP enhances conversions and visibility at minimal cost.
              </p>
              <p>
                Infodazz's SEO experts deliver measurable results for your brand’s growth both locally and globally. We offer reliable SEO services designed to fast-track your success.
              </p>
            </div>
            <p className="font-medium text-gray-700 mb-3">We engage with these SEO services:</p>

            {/* SEO Service Lists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                {seoServicesLeft.map((service, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="currentColor"
                      >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                      </svg>
                    </span>
                    <h5 className="text-gray-700">{service}</h5>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {seoServicesRight.map((service, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="currentColor"
                      >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                      </svg>
                    </span>
                    <h5 className="text-gray-700">{service}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="w-full lg:w-1/2 flex justify-center items-center"
            data-aos="fade-left"
          >
            <Image
              src={seo3}
              alt="Search Engine Marketing"
              className="w-full h-auto max-w-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchEngine;
