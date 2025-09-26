"use client";

import React from "react";

const values = [
  {
    title: "Prolonging Experience",
    content:
      "Extensive expertise binds with long-lasting goals. We contribute a profound awareness of design principles and market trends to each undertaking.",
    color: "bg-blue-500",
    direction: "right",
  },
  {
    title: "Innovative Solutions",
    content:
      "We take great satisfaction in offering creative, cutting-edge solutions that do not compromise any objective affects the future scope.",
    color: "bg-green-500",
    direction: "left",
  },
  {
    title: "Working Together",
    content:
      "We thrive on collaboration, ensuring your vision meets and surpasses expectations. Your success is our joy in every step of the design journey.",
    color: "bg-red-500",
    direction: "right",
  },
  {
    title: "Unwavering Quality",
    content:
      "We are staunch at promising quality to our clients as we pay attention to detail in all things to meet high standards.",
    color: "bg-yellow-500",
    direction: "left",
  },
  {
    title: "Inspired Creativity",
    content:
      "We believe every design should evoke emotion and connection through inspired creativity and storytelling.",
    color: "bg-purple-500",
    direction: "right",
  },
];

const OurValues = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-down">
          <p className="text-green-600 text-sm font-medium uppercase">Why Us?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why <span className="text-green-500">Pick</span> Us...?
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[2px] bg-gray-300 transform md:-translate-x-1/2 z-0" />

          {/* Timeline Items */}
          <ul className="space-y-12 relative z-10">
            {values.map((item, idx) => {
              const isLeft = item.direction === "left";
              return (
                <li
                  key={idx}
                  className={`relative flex md:items-center gap-4 pl-14 md:pl-0 ${
                    isLeft ? "md:justify-end" : "md:justify-start"
                  }`}
                  data-aos={isLeft ? "fade-left" : "fade-right"}
                >
                  {/* Badge */}
                  <span
                    className={`absolute w-10 h-10 rounded-full ${item.color} flex items-center justify-center
                    left-[-6px] md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 
                    z-20 border border-white shadow`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </span>

                  {/* Content Card */}
                  <div className="relative w-full md:w-[46%] px-6 py-6 bg-white border border-gray-200 shadow-md rounded-md">
                    {/* Arrow */}
                    <div
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent ${
                        isLeft
                          ? "left-[-15px] border-r-[15px] border-r-gray-200"
                          : "right-[-15px] border-l-[15px] border-l-gray-200"
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
      </div>
    </section>
  );
};

export default OurValues;
