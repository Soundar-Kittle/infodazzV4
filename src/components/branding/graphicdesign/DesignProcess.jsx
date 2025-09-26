import React from 'react';
import { MessageCircle, Lightbulb, Palette, RefreshCcw, CheckCircle } from 'lucide-react';

const DesignProcess = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Discovery & Consultation",
      description: "We start by understanding your brand, goals, and vision through detailed discussions.",
      duration: "1-2 Days"
    },
    {
      icon: Lightbulb,
      title: "Concept Development",
      description: "Our team brainstorms and develops initial concepts based on your requirements.",
      duration: "2-3 Days"
    },
    {
      icon: Palette,
      title: "Design Creation",
      description: "We bring the best concepts to life with detailed design work and refinements.",
      duration: "3-5 Days"
    },
    {
      icon: RefreshCcw,
      title: "Review & Revisions",
      description: "We work with you to perfect the design through collaborative feedback sessions.",
      duration: "1-2 Days"
    },
    {
      icon: CheckCircle,
      title: "Final Delivery",
      description: "Receive your completed designs in all required formats with full usage rights.",
      duration: "1 Day"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900">
            Our <span className="text-[#78A52B]">Design Process</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We follow a proven methodology that ensures every project delivers
            exceptional results while keeping you involved every step of the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#78A52B] rounded-full"></div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-2xl p-8 border border-slate-200 hover:border-[#78A52B]/50 transition-all duration-300 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-[#78A52B] rounded-lg flex items-center justify-center ${index % 2 === 0 ? 'order-last' : 'order-first'}`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-900">{step.title}</h3>
                        <span className="text-[#78A52B] font-medium">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-[#78A52B] rounded-full border-4 border-white shadow-lg"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 text-center">
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-xl p-6 border border-slate-200">
            <div className="text-3xl font-bold text-[#78A52B] mb-2">7-14 Days</div>
            <div className="text-slate-600">Average Project Timeline</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-xl p-6 border border-slate-200">
            <div className="text-3xl font-bold text-[#78A52B] mb-2">3 Rounds</div>
            <div className="text-slate-600">Included Revisions</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-xl p-6 border border-slate-200">
            <div className="text-3xl font-bold text-[#78A52B] mb-2">100%</div>
            <div className="text-slate-600">Satisfaction Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
