"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does Infodazz offer?",
    answer: "Infodazz offers SEO, SEM, social media marketing, web design, branding, and content strategy services tailored to your business.",
  },
  {
    question: "How can I contact Infodazz?",
    answer: "You can reach us via our contact form, email, WhatsApp, or call directly through the information on our Contact page.",
  },
  {
    question: "Does Infodazz offer customized digital marketing packages?",
    answer: "Yes, we create flexible packages based on your goals, target audience, and budget.",
  },
  {
    question: "What industries does Infodazz serve?",
    answer: "We serve a wide range of industries including healthcare, e-commerce, real estate, education, and technology.",
  },
  {
    question: "How experienced is the team at Infodazz?",
    answer: "Our team consists of seasoned professionals with years of experience in strategy, analytics, creative content, and digital campaigns.",
  },
  {
    question: "Are there any career opportunities at Infodazz?",
    answer: "Yes, we’re always looking for talented marketers, designers, and developers. Visit our Careers page for current openings.",
  },
  {
    question: "How does Infodazz ensure the quality of its services?",
    answer: "We follow strict internal processes, continuous monitoring, client feedback loops, and measurable KPIs.",
  },
  {
    question: "Can Infodazz handle international projects?",
    answer: "Absolutely. We have global clients and manage campaigns in various languages and locations.",
  },
  {
    question: "What sets Infodazz apart from other digital marketing companies?",
    answer: "Infodazz is driven by a client-centric approach, personalized strategy, measurable outcomes, and transparent communication.",
  },
];

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);


    const toggle = (index) => {

    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
          FAQs On Our Digital Marketing Services
        </h2>

        <div className="border border-gray-200 rounded-lg divide-y">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-gray-100 transition"
                onClick={() => toggle(index)}
              >
                <span className="font-semibold text-gray-800 text-sm sm:text-base cursor-pointer">{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Plus className="w-5 h-5 text-yellow-500" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-5 pb-5 text-gray-700 text-sm sm:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
