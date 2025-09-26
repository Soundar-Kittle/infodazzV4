"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import eventData from "./eventData";
import banner from "../../../../public/images/events/banner_gold.svg";
import "aos/dist/aos.css";
import AOS from "aos";

const cornerColors = [
  "bg-yellow-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-purple-600",
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Event Categories
      </h2>
      <div className="flex justify-center mb-10">
        <Image src={banner} alt="decorative banner" width={160} height={20} />
      </div>

<div className="max-w-6xl mx-auto space-y-10 px-4">
  {eventData.map((evnt, idx) => {
    const isOdd = idx % 2 === 1;
    const dotColor = cornerColors[idx % cornerColors.length];

    return (
      <div
        key={idx}
        className={`group relative bg-white rounded-lg flex flex-col md:flex-row ${
          isOdd ? "md:flex-row-reverse ml-auto" : "mr-auto"
        } overflow-hidden transition duration-300 h-[220px] max-w-2xl w-full shadow-lg hover:shadow-2xl`}
        data-aos="fade-up"
      >
        {/* Animated background fill */}
        <div
          className={`absolute top-0 left-0 w-full h-full z-0 transition-transform duration-500 origin-top-left scale-0 group-hover:scale-100 ${dotColor} opacity-20`}
        />

        {/* Corner dot */}
        <div
          className={`absolute top-0 ${
            isOdd ? "right-0 rounded-bl-lg" : "left-0 rounded-br-lg"
          } w-4 h-4 z-10 ${dotColor}`}
        />

        {/* Image */}
        <div className="relative w-full md:w-[35%] h-full z-10">
          <Image
            src={evnt.image}
            alt={evnt.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div
          className={`w-full md:w-[65%] p-5 flex flex-col justify-center z-10 ${
            isOdd ? "text-right items-end" : "text-left"
          }`}
        >
          <h4 className="text-xl font-semibold text-gray-800 mb-1">
            {evnt.title}
          </h4>
          <p className="text-sm text-gray-600 max-w-xl">{evnt.content}</p>
        </div>
      </div>
    );
  })}
</div>



    </section>
  );
};

export default Service;
