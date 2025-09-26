import React from 'react';
import { ArrowRight, CheckCircle, Phone, Mail, MessageCircle } from 'lucide-react';

const CallToAction = () => {
  const benefits = [
    "Free initial consultation",
    "Custom design concepts",
    "Unlimited revisions included",
    "Fast turnaround times",
    "100% satisfaction guarantee"
  ];

  return (
<section className="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent"></div>
  <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl"></div>

  <div className="relative container mx-auto px-6 lg:px-8">
    {/* Main CTA */}
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900">
        Ready to Transform Your{' '}
        <span className="text-[#78A52B]">Brand?</span>
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
        Let’s create stunning designs that capture your vision and drive results.
        Start your project today with a free consultation.
      </p>

      {/* Benefits List */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {[
          "Free initial consultation",
          "Custom design concepts",
          "Unlimited revisions included",
          "Fast turnaround times",
          "100% satisfaction guarantee"
        ].map((benefit, index) => (
          <div key={index} className="flex items-center gap-2 text-slate-600">
            <CheckCircle className="w-5 h-5 text-[#78A52B]" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <button className="bg-[#78A52B] hover:bg-[#6f9526] text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Start Your Project Now
          <ArrowRight className="w-5 h-5" />
        </button>
        <button className="border border-slate-300 hover:border-[#78A52B] text-slate-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#78A52B]/10">
          View Portfolio
        </button>
      </div>
    </div>

    {/* Contact Options */}
    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {/* Phone */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-xl p-6 border border-slate-200 hover:border-[#78A52B]/50 transition-all duration-300 text-center shadow-sm">
        <div className="w-16 h-16 bg-[#78A52B] rounded-lg flex items-center justify-center mx-auto mb-4">
          <Phone className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Call Us</h3>
        <p className="text-slate-600 mb-4">Speak directly with our design team</p>
        <div className="text-[#78A52B] font-semibold">(555) 123-4567</div>
      </div>

      {/* Email */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-xl p-6 border border-slate-200 hover:border-[#78A52B]/50 transition-all duration-300 text-center shadow-sm">
        <div className="w-16 h-16 bg-[#78A52B] rounded-lg flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Email Us</h3>
        <p className="text-slate-600 mb-4">Send us your project details</p>
        <div className="text-[#78A52B] font-semibold">hello@designstudio.com</div>
      </div>

      {/* Chat */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-xl p-6 border border-slate-200 hover:border-[#78A52B]/50 transition-all duration-300 text-center shadow-sm">
        <div className="w-16 h-16 bg-[#78A52B] rounded-lg flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Live Chat</h3>
        <p className="text-slate-600 mb-4">Get instant answers to your questions</p>
        <div className="text-[#78A52B] font-semibold">Start Chat</div>
      </div>
    </div>
  </div>
</section>


  );
};

export default CallToAction;