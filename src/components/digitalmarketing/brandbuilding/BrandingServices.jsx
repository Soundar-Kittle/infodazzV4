"use client";

import React from "react";
import Image from "next/image";

import Branding1 from "../../../../public/images/digitalmarketing/brandbuilding/logo2.png";
import Branding2 from "../../../../public/images/digitalmarketing/brandbuilding/messaging.png";
import Branding3 from "../../../../public/images/digitalmarketing/brandbuilding/positioning.png";
import Branding4 from "../../../../public/images/digitalmarketing/brandbuilding/voice.png";
import Branding5 from "../../../../public/images/digitalmarketing/brandbuilding/guide.png";
import Branding6 from "../../../../public/images/digitalmarketing/brandbuilding/socialmedia.png";
import Branding7 from "../../../../public/images/digitalmarketing/brandbuilding/marketing.png";
import Branding8 from "../../../../public/images/digitalmarketing/brandbuilding/rebranding.png";

const serviceData = [
  {
    title: "Logo Design",
    content:
      "Our ingenious team designs logos for specific to promote the brand that decides to live in uniquely.",
    icon: Branding1,
  },
  {
    title: "Brand Messaging",
    content:
      "We construct effective customer retention to communicate what your brand seeks and exceptions.",
    icon: Branding2,
  },
  {
    title: "Brand Positioning",
    content:
      "We unwrap your brand's virtues to make a client-centric forum to discern the clarity of your uniqueness.",
    icon: Branding3,
  },
  {
    title: "Brand Voice",
    content:
      "We define your brand character in order to maintain the brand's reliability across several channels.",
    icon: Branding4,
  },
  {
    title: "Brand Style Guide",
    content:
      "Our experts design an effective manual which contains the brand's designs, datas, vision and values.",
    icon: Branding5,
  },
  {
    title: "Social Media Branding",
    content:
      "We increase the traffic to your brand's webpage by directing the finest leads for a specific motive.",
    icon: Branding6,
  },
  {
    title: "Digital Marketing",
    content:
      "Our Digital Marketing Solutions qualify the brand items to obtain the benefits of technical advances.",
    icon: Branding7,
  },
  {
    title: "Rebranding",
    content:
      "We rebrand your ideas, logos, designs and name to produce perfect identity for future perspectives.",
    icon: Branding8,
  },
];

const BrandingServices = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <p className="text-green-600 text-sm uppercase font-medium">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Brand <span className="text-green-500">Strategy</span> Capabilities
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {serviceData.map((data, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition"
              data-aos={idx % 2 === 0 ? "flip-right" : "flip-left"}
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 mx-auto">
                <Image
                  src={data.icon}
                  alt={`service icon ${idx + 1}`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <p className="text-lg font-semibold text-center text-gray-800 mb-2">{data.title}</p>

              {/* Content */}
              <p className="text-sm text-gray-600 text-center leading-relaxed">{data.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingServices;
