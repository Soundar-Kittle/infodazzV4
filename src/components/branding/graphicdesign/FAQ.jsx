import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What's included in your design packages?",
      answer:
        "Our design packages include initial concepts, unlimited revisions during the design phase, final files in multiple formats (AI, EPS, PDF, PNG, JPG), usage rights, and a brand guidelines document. We also provide ongoing support for any questions after delivery.",
    },
    {
      question: "How long does a typical design project take?",
      answer:
        "Most projects are completed within 7-14 business days. Simple designs like logos or flyers may take 3-7 days, while complex projects like complete brand identities or multi-page brochures may take 2-3 weeks. We'll provide a detailed timeline during the initial consultation.",
    },
    {
      question: "Do you offer unlimited revisions?",
      answer:
        "We include 3 rounds of revisions in all our packages. This covers most client needs and ensures the design meets your expectations. Additional revisions beyond the included rounds can be added at an hourly rate if needed.",
    },
    {
      question: "What file formats will I receive?",
      answer:
        "You'll receive your designs in multiple formats suitable for both print and digital use: vector files (AI, EPS), high-resolution rasters (PNG, JPG), and print-ready PDFs. We ensure you have everything needed for any application.",
    },
    {
      question: "Can you work with my existing brand guidelines?",
      answer:
        "Absolutely! We can work within your existing brand guidelines or help you develop new ones. If you have established colors, fonts, and style preferences, we'll incorporate them into the new designs while maintaining consistency with your brand identity.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#78A52B]/10 text-[#78A52B] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900">
            Got <span className="text-[#78A52B]">Questions?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our design process,
            deliverables, and how we can help bring your vision to life.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-xl border border-slate-200 overflow-hidden hover:border-[#78A52B]/50 transition-colors duration-300"
            >
              {/* Question */}
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-[#78A52B]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-500" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-slate-200">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              We're here to help! Schedule a free consultation to discuss your
              project and get personalized answers to all your questions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-[#78A52B] hover:bg-[#6f9526] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule Consultation
              </button>
              <button className="border border-slate-300 hover:border-[#78A52B] text-slate-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#78A52B]/10">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
