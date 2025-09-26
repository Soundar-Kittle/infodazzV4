"use client";

import React from "react";
import Image from "next/image";

import Engage from "../../../../public/images/digitalmarketing/creativedesign/engage.png";
import Return from "../../../../public/images/digitalmarketing/creativedesign/return.png";
import Trend from "../../../../public/images/digitalmarketing/creativedesign/trend.png";
import Emotion from "../../../../public/images/digitalmarketing/creativedesign/emotion.png";
import Differentiation from "../../../../public/images/digitalmarketing/creativedesign/differentiation.png";
import Platforms from "../../../../public/images/digitalmarketing/creativedesign/platforms.png";
import Satisfation from "../../../../public/images/digitalmarketing/creativedesign/satisfaction.png";
import Conversion from "../../../../public/images/digitalmarketing/creativedesign/conversion.png";
import Communication from "../../../../public/images/digitalmarketing/creativedesign/communication.png";
import Brand from "../../../../public/images/digitalmarketing/creativedesign/brandbw.png";

const serviceData = [
  {
    title: "Engage & Captivate",
    content: "A visually pleasing design draws consumers in and promotes interaction and discovery.",
    icon: Engage,
    color: "#ffb5a7",
  },
  {
    title: "Build Brand Identity",
    content: "Consistent design combined with creativity creates a brand identity that promotes familiarity and trust.",
    icon: Brand,
    color: "#e6ccb2",
  },
  {
    title: "Powerful Communication Tool",
    content: "Design is an excellent means of communicating brand stories and values.",
    icon: Communication,
    color: "#56cfe1",
  },
  {
    title: "Enhance User Satisfaction",
    content: "Satisfaction is increased by intuitive UI/UX, which offers a smooth and delightful encounter.",
    icon: Satisfation,
    color: "#d3d3d3",
  },
  {
    title: "Impact Conversion Rates",
    content: "Effective design influences conversion rates and motivates users to take action on social media and websites.",
    icon: Conversion,
    color: "#b5e48c",
  },
  {
    title: "Adaptable Across Platforms",
    content: "Platform flexibility is ensured by design, providing a constant and pleasurable user experience.",
    icon: Platforms,
    color: "#c77dff",
  },
  {
    title: "Digital Brand Differentiation",
    content: "In a congested digital landscape, creative design distinguishes brands from competitors.",
    icon: Differentiation,
    color: "#ffd861",
  },
  {
    title: "Evoking an Emotional Bond",
    content: "Creative design uses eye-catching layouts and images to arouse feelings and build connections.",
    icon: Emotion,
    color: "#b8f9d3",
  },
  {
    title: "Adapt to Trends",
    content: "Trends drive design, which keeps digital presence current and presents firms as progressive.",
    icon: Trend,
    color: "#ceb2fc",
  },
  {
    title: "Measurable Return on Investment",
    content: "Increased traffic, remarkable brand impressions, and higher conversion rates are quantifiable results of creative design.",
    icon: Return,
    color: "#dce9ff",
  },
];

const Service2 = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-down">
          <p className="text-green-600 text-sm font-medium uppercase">Need for Creative Design</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why your brand <span className="text-green-500">needs</span> a creative design?...
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((item, idx) => (
            <div
              key={idx}
              data-aos={idx % 2 === 0 ? "flip-right" : "flip-left"}
              className="relative p-6 bg-white border border-gray-200 shadow-md rounded-md hover:shadow-lg transition"
            >
              {/* Circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                style={{ backgroundColor: item.color }}
              >
                <Image src={item.icon} alt={item.title} width={32} height={32} />
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold text-gray-800 text-center mb-2">
                {item.title}
              </h4>

              {/* Content */}
              <p className="text-sm text-gray-600 text-center">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service2;

