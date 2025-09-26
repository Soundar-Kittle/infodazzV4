"use client";

import React from "react";
import Image from "next/image";
import SmmImage from "../../../../public/images/digitalmarketing/seosmmseo/Smm.svg"; // adjust if needed

const services = [
  "Facebook Marketing",
  "Instagram Marketing",
  "LinkedIn Marketing",
  "Twitter Marketing",
  "Youtube Promotions",
];

const SocialMedia = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Image */}
          <div
            className="w-full lg:w-1/2 flex justify-center items-center"
            data-aos="fade-right"
          >
            <Image
              src={SmmImage}
              alt="Social Media Marketing"
              className="w-full h-auto max-w-md"
              priority
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="mb-6">
              <p className="text-sm text-green-600 uppercase font-medium">
                Social Media Marketing
              </p>
              <h3 className="text-3xl font-bold text-gray-800">
                Strengthening Your <span className="text-green-500">Social Media</span> Presence
              </h3>
            </div>

            <div className="text-gray-700 text-sm space-y-4 leading-relaxed mb-6">
              <p>
                In the digital era, it is essential to translate thoughts into digital expressions for global communication.
                We support your brand by promoting it effectively across social platforms.
              </p>
              <p>
                Social media marketing is critical today and tomorrow. Infodazz provides end-to-end support for businesses—
                from startups to global enterprises—to establish and grow their digital footprint.
              </p>
            </div>

            <div className="text-gray-800">
              <p className="font-medium mb-2">Infodazz took part in:</p>
              <ul className="space-y-2">
                {services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-2">
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
                    <h5 className="text-sm text-gray-700">{service}</h5>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
