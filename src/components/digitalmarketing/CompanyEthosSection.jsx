"use client";

import React, { useState } from "react";
import { Smile, BookOpen, Repeat, AlignCenter } from "lucide-react";

const ethosCards = [
  {
    title: "Customer Obsession",
    icon: <Smile className="w-6 h-6 text-black" />,
    content:
      "You might call us crazy, but we’re obsessed with our clients and their success. We are always ready to walk that extra mile to give our clients the best outcomes.",
    circle: "bg-yellow-200 border-yellow-400",
    bg: "bg-yellow-50",
  },
  {
    title: "Openness & Learning",
    icon: <BookOpen className="w-6 h-6 text-black" />,
    content:
      "We are learners; we never call ourselves perfect but try to attain perfection in everything we do. We remain vigilant to the newer digital marketing trends and never get sick of experimentation.",
    circle: "bg-green-100 border-green-400",
    bg: "bg-white",
  },
  {
    title: "Fast, Fantastic, Faithful & Flexible",
    icon: <Repeat className="w-6 h-6 text-black" />,
    content:
      "These are the 4 characteristics of our Digital Marketing Company. We are a fantastic & faithful Digital Marketing company that delivers fast results using flexible solutions.",
    circle: "bg-purple-200 border-purple-400",
    bg: "bg-white",
  },
  {
    title: "Succinctness",
    icon: <AlignCenter className="w-6 h-6 text-black" />,
    content:
      "We believe in straightforwardness and presume clarity and conciseness to be integral factors towards an organization’s success.",
    circle: "bg-blue-100 border-blue-300",
    bg: "bg-white",
  },
];

const CompanyEthosCardSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-[#0b0b14]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ethos our Digital Marketing Company Rests Upon
        </h2>
        <p className="mt-4 text-white max-w-2xl mx-auto text-sm sm:text-base">
          Every company works on the grounds of some values and principles. We also have a set of values that helps us stay focused on our goal and deliver the best outcomes.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {ethosCards.map((card, index) => {
         

          return (
            <div
              key={index}
              onClick={() => toggleCard(index)}
              className={`relative w-full sm:w-[260px] min-h-[300px] rounded-xl ${card.bg} shadow-md cursor-pointer 
                flex flex-col items-center justify-center text-center transition-transform duration-300
                hover:-translate-y-2 group`}
            >
              {/* Icon + Title */}
              <div className="flex flex-col items-center justify-center p-6 transition-transform duration-300">
                <div className={`rounded-full border-2 ${card.circle} w-20 h-20 flex items-center justify-center mb-4`}>
                  {card.icon}
                </div>
                <h4 className="text-base font-semibold text-gray-800">{card.title}</h4>
              </div>

              {/* Paragraph */}
              <div className="px-6 pb-6">
                <p className="text-sm text-gray-600 text-justify">{card.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CompanyEthosCardSection;
