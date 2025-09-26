"use client";

import React from "react";
import Image from "next/image";

const corporateService = [
  {
    image: "/images/events/attendees.jpg",
    title: "Corporate Events",
    list: [
      "Professional Conferences/seminars",
      "Team building events",
      "Business/Corporate dinners",
      "Industry-specific networking events",
      "Career fairs/trade fairs",
      "Workshops",
    ],
    icon: "👔",
  },
  {
    image: "/images/events/attendees.jpg",
    title: "Virtual Events",
    list: [
      "Virtual B2B marketplace meetup",
      "Live presentations",
      "Virtual conferences/symposiums",
      "Hybrid events",
      "Virtual job fairs",
    ],
    icon: "☁️",
  },
  {
    image: "/images/events/attendees.jpg",
    title: "Exhibitions",
    list: [
      "Solo/duo exhibitions",
      "Institutional exhibitions",
      "Art-event exhibition",
      "Online exhibitions",
      "Museum exhibitions",
    ],
    icon: "🖼️",
  },
  {
    image: "/images/events/attendees.jpg",
    title: "Educational Seminars",
    list: [
      "In-depth lectures on industry-specific topics",
      "Panel discussions with thought leaders",
      "Hands-on training and skill development sessions",
      "Educational resource distribution",
      "Networking opportunities for professionals and students",
    ],
    icon: "📖",
  },
  {
    image: "/images/events/attendees.jpg",
    title: "Sports & CSR Events",
    list: [
      "Charity events",
      "Sport persons with disabilities (PWD) & other activities",
      "Sports as development",
      "Para athletic sport events",
      "Sports day events",
    ],
    icon: "🏐",
  },
  {
    image: "/images/events/attendees.jpg",
    title: "New Product Launch",
    list: [
      "Product Sampling",
      "Product launch party",
      "Retail events",
      "Product launch event surveys",
      "Create product launch hashtags",
    ],
    icon: "🚀",
  },
];

const CorporateService2 = () => {
  return (
 <section className="bg-black py-14 px-4">
      <h2 className="text-center text-white text-3xl font-bold mb-12">
        All-encompassing Event Management Customized for Every Occasion
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {corporateService.map((service, idx) => (
          <div key={idx} className="bg-gradient-to-br from-purple-800 to-pink-900 rounded-xl overflow-hidden shadow-xl">
            {/* Top or bottom image depending on even/odd */}
            {idx % 2 === 0 && (
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="relative p-6 text-white">
              {/* Diagonal overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm clip-diagonal z-0" />
              <div className="relative z-10">
                <div className="text-4xl mb-2">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <ul className="space-y-2 text-sm">
                  {service.list.map((item, subIdx) => (
                    <li key={subIdx} className="flex gap-2 items-start">
                      <span className="text-green-400">✔</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {idx % 2 === 1 && (
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CorporateService2;
