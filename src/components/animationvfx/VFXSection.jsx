"use client";

import React from "react";
import Image from "next/image";
import visualeffects from "../../../public/images/animationvfx/clapperboard.png";
import animate from "../../../public/images/animationvfx/animate.png";
import concept from "../../../public/images/animationvfx/concept.png";
import supervision from "../../../public/images/animationvfx/supervision.png";

const servicesData = [
  {
    icon: visualeffects,
    title: "Visual Effects",
    description:
      "Turn your imagination into reality with our cutting-edge visual effects services. Whether you need to enhance existing footage or create entirely new worlds, our team of experts can bring your vision to life.",
  },
  {
    icon: animate,
    title: "Animation",
    description:
      "Bring your stories to life with our animation services. From simple 2D animations to complex 3D productions, we have the skills and experience to deliver stunning results.",
  },
  {
    icon: concept,
    title: "Concept Art",
    description:
      "Need help visualizing your characters, creatures, or environments? Our talented concept artists can create detailed designs that capture the essence of your story.",
  },
  {
    icon: supervision,
    title: "VFX Supervision",
    description:
      "Ensure a smooth and efficient VFX production with our supervision services. Our experienced supervisors will guide you through every step of the process, from pre-production planning to post-production delivery.",
  },
];

const VFXSection = () => {
  return (
    <section id="services" className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center transition-transform duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 text-justify">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VFXSection;
