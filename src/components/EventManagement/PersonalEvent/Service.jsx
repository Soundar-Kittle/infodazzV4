"use client";

import React from "react";
import Image from "next/image";
import serviceData from "./serviceData";
import banner from "../../../../public/images/events/banner_gold.svg";


const Service = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl text-center font-bold text-gray-800 mb-2">
          Our Services
        </h3>
        <div className="flex justify-center mb-8">
          <Image src={banner} alt="decorative banner" width={160} height={20} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {serviceData.map((service, idx) => (
            <div key={idx} className="w-full group perspective">
              <div tabIndex="0" className="relative w-full h-64 transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180 focus:rotate-y-180">
                {/* Front */}
                <div
                  className="absolute w-full h-full bg-cover bg-center rounded-lg backface-hidden flex items-center justify-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <h4 className="text-white text-lg font-bold drop-shadow">{service.title}</h4>
                </div>

                {/* Back */}
                <div
                  className="absolute w-full h-full bg-cover bg-center rounded-lg backface-hidden rotate-y-180 flex items-center justify-center p-4 text-white text-sm bg-black/70"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <p className="text-center">{service.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
