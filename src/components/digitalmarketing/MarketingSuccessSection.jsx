"use client";

import {
  UserCheck,
  Calendar,
  Handshake,
  Users,
} from "lucide-react";
import React from "react";

const stats = [
  {
    icon: <UserCheck className="w-10 h-10 text-yellow-500" />,
    value: "500+",
    label: "Verified Reviews",
  },
  {
    icon: <Calendar className="w-10 h-10 text-yellow-500" />,
    value: "10 Long",
    label: "Years of Experience",
  },
  {
    icon: <Handshake className="w-10 h-10 text-yellow-500" />,
    value: "500+",
    label: "Happy Clients",
  },
  {
    icon: <Users className="w-10 h-10 text-yellow-500" />,
    value: "20+",
    label: "Team Members & Growing",
  },
];

const MarketingSuccessSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <p className="text-yellow-500 font-semibold text-base sm:text-lg">
          Best And Affordable Digital Marketing Solutions for All Types of Businesses
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Adding a Success Quotient to Your Digital Marketing Campaign
        </h2>
        <div className="text-gray-700 mt-6 space-y-4 text-sm sm:text-base">
          <p>
            Recover lost sales, retain customers, increase revenue and get optimum results for your Digital Marketing campaign with us!
          </p>
          <p>
            We may not be the only Digital Marketing Agency in India, but we can bet our Digital Marketing solutions will drive your outcomes like none other.
          </p>
          <p>
            Our Digital Marketing Professionals are not just a team of experts who are well-versed with the intricacies of Digital Marketing,
            but a group of “restless doers” who are ready to take on any challenge and are on the forefront to go above and beyond to keep the best on the table.
          </p>
        </div>

        {/* Stat cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{item.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingSuccessSection;
