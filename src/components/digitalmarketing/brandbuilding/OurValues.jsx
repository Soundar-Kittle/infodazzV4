"use client";

import React from "react";

const values = [
  {
    title: "We are strategic",
    description:
      "As strategic partners, we assist you traverse the digital terrain by establishing deliberate objectives that mesh together seamlessly.",
    color: "bg-blue-500",
  },
  {
    title: "We are consistent",
    description:
      "To consistently improve your brand, we establish a unified tone and brand voice that permeates all messages, media, and material.",
    color: "bg-green-500",
  },
  {
    title: "We are perceptive",
    description:
      "To make your brand's position high, we focus on some strategic analysis to provide brand's potential in its unique features.",
    color: "bg-red-500",
  },
  {
    title: "We impress influencers",
    description:
      "We forge strong connections with influential figures in the business and on social media who are a great fit for your company.",
    color: "bg-yellow-500",
  },
  {
    title: "We are adaptable",
    description:
      "We constantly optimize and adjust to ensure your brand maintains its trajectory for growth and market dominance.",
    color: "bg-indigo-500",
  },
];

const OurValues = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12" data-aos="fade-down">
          <p className="text-sm text-green-600 uppercase font-semibold">Our Values</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Our Customers <span className="text-green-500">Love</span> Us?
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 w-[2px] bg-gray-300 top-0 bottom-0 z-0 transform md:-translate-x-1/2"></div>

          <ul className="relative space-y-12 z-10">
            {values.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <li
                  key={idx}
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                  className={`relative flex md:items-center gap-4 pl-14 md:pl-0 ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Badge */}
                  <span
                    className={`absolute w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white text-sm font-bold
                      left-[-6px] md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 z-20 shadow`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </span>

                  {/* Card */}
                  <div className="relative w-full md:w-[46%] bg-white border border-gray-200 p-6 rounded shadow">
                    {/* Arrow */}
                    <div
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent ${
                        isLeft
                          ? "right-[-15px] border-l-[15px] border-l-gray-200"
                          : "left-[-15px] border-r-[15px] border-r-gray-200"
                      }`}
                    ></div>

                    <h5 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
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
    