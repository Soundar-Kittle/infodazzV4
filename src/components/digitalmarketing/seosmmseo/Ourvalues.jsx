"use client";

import React from "react";

const values = [
  {
    title: "Industry Expertise",
    content:
      "Our industry experience and deep understanding of SEO, SMM, and SEM guarantee your digital marketing plans will work harmoniously with the everchanging online environment.",
    color: "bg-yellow-300",
  },
  {
    title: "Enhanced Visibility",
    content:
      "Our solutions are intended to increase your brand's online visibility by ensuring it shines out on social media and search engine results pages, ultimately boosting website traffic.",
    color: "bg-green-300",
  },
  {
    title: "Data-Driven Approach",
    content:
      "Using cutting-edge analytics, we take a data-driven approach to fine-tune and maximize your ROI through SEO, SMM, and SEM strategy optimization.",
    color: "bg-blue-300",
  },
  {
    title: "Audience Engagement",
    content:
      "We develop social media campaigns and content that foster genuine relationships with your audience, building lasting brand loyalty.",
    color: "bg-purple-300",
  },
  {
    title: "Customized Solutions",
    content:
      "We offer specialized SEO, SMM, and SEM solutions tailored to your objectives and target audience to ensure optimal performance.",
    color: "bg-orange-300",
  },
];

const OurValues = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12 px-4">
        <p className="text-green-600 text-sm font-semibold uppercase tracking-wide">
          Why Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why <span className="text-green-500">Choose</span> Us...?
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Timeline Line */}
        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[2px] bg-gray-300 transform md:-translate-x-1/2 z-0" />

        <ul className="space-y-12 relative z-10">
          {values.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <li
                key={idx}
                className={`relative flex md:items-center gap-4 pl-14 md:pl-0 ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
                data-aos={isLeft ? "fade-right" : "fade-left"}
              >
                {/* Badge */}
                <span
                  className={`absolute w-10 h-10 rounded-full ${item.color} flex items-center justify-center
                  left-[-6px] md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 
                  z-20 border border-white shadow-md`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-black/50"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </span>

                {/* Card */}
                <div className="relative w-full md:w-[46%] px-6 py-6 bg-white border border-gray-300 shadow rounded-md">
                  {/* Pointer Arrow */}
                  <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent ${
                      isLeft
                        ? "right-[-15px] border-l-[15px] border-l-gray-300"
                        : "left-[-15px] border-r-[15px] border-r-gray-300"
                    }`}
                  />
                  <h5 className="font-semibold text-lg mb-2 text-gray-800">
                    {item.title}
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default OurValues;
