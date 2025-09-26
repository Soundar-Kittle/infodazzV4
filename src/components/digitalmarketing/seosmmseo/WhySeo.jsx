"use client";

import React from "react";
import Image from "next/image";

// Importing icons/images
import Ad from "../../../../public/images/digitalmarketing/seosmmseo/ad.png";
import Journey from "../../../../public/images/digitalmarketing/seosmmseo/journey.png";
import Dominance from "../../../../public/images/digitalmarketing/seosmmseo/dominance.png";
import Trend from "../../../../public/images/digitalmarketing/seosmmseo/trend.png";
import Emotion from "../../../../public/images/digitalmarketing/seosmmseo/emotion.png";
import Edge from "../../../../public/images/digitalmarketing/seosmmseo/edge.png";
import Platforms from "../../../../public/images/digitalmarketing/seosmmseo/platforms.png";
import Emotion2 from "../../../../public/images/digitalmarketing/seosmmseo/emotion2.png";
import Conversion from "../../../../public/images/digitalmarketing/seosmmseo/conversion.png";
import Impact from "../../../../public/images/digitalmarketing/seosmmseo/impact.png";

const serviceData = [
  {
    title: "Search Visibility",
    content:
      "Boost online visibility with SEO, securing top positions in search results for targeted traffic and increased brand exposure.",
    icon: Dominance,
    color: "#ffb5a7",
  },
  {
    title: "Strategic Paid Ad",
    content:
      "Master strategic SEM campaigns for prominent paid advertising, ensuring your business stands out and attracts relevant audiences.",
    icon: Ad,
    color: "#e6ccb2",
  },
  {
    title: "Social Media Presence",
    content:
      "Create impactful social media engagement through SMM, sparking conversations and building a loyal online community.",
    icon: Emotion,
    color: "#56cfe1",
  },
  {
    title: "Optimized Journeys",
    content:
      "Enhance user journeys with SEO, SEM, and SMM, providing seamless experiences from search to social interactions.",
    icon: Journey,
    color: "#d3d3d3",
  },
  {
    title: "Conversion Focus",
    content:
      "Drive conversions with strategies that guide users through the funnel, turning visitors into customers for maximum impact.",
    icon: Conversion,
    color: "#b5e48c",
  },
  {
    title: "Channel Consistency",
    content:
      "Ensure cross-channel consistency, delivering a unified brand experience across different platforms for maximum impact.",
    icon: Platforms,
    color: "#c77dff",
  },
  {
    title: "Digital Edge",
    content:
      "Gain a competitive edge in the digital realm with innovative digital marketing, capturing your target audience's attention.",
    icon: Edge,
    color: "#ffd861",
  },
  {
    title: "Emotional Connections",
    content:
      "Build emotional connections through compelling storytelling and relatable content, connecting with your audience on a deeper level.",
    icon: Emotion2,
    color: "#b8f9d3",
  },
  {
    title: "Trends Adoption",
    content:
      "Stay ahead by adopting agile trends, showcasing a forward-thinking approach in the dynamic digital landscape.",
    icon: Trend,
    color: "#ceb2fc",
  },
  {
    title: "Impactful Metrics",
    content:
      "Experience measurable impact with increased website traffic, higher conversion rates, and an enhanced brand perception.",
    icon: Impact,
    color: "#dce9ff",
  },
];

const WhySeo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-down">
          <p className="text-green-600 text-sm font-medium uppercase tracking-wide">Digital marketing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Digital <span className="text-green-500">Marketing and SEO</span> Benefits...
          </h2>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((item, idx) => (
            <div
              key={idx}
              data-aos={idx % 2 === 0 ? "flip-right" : "flip-left"}
              className="relative bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ backgroundColor: item.color }}
            >
              {/* Icon Circle */}
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="object-contain"
                  fill
                />
              </div>
              {/* Title */}
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
              {/* Content */}
              <p className="text-sm text-gray-700 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySeo;
