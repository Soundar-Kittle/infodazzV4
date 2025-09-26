import React from 'react';
import { Palette, Layers, Zap, Target, Users, Award } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Palette,
      title: "Creative Design",
      description: "Unique and innovative designs that capture your brand's essence"
    },
    {
      icon: Layers,
      title: "Brand Identity",
      description: "Complete brand packages from logos to style guides"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality"
    },
    {
      icon: Target,
      title: "Strategic Approach",
      description: "Data-driven designs that align with your business goals"
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description: "Work closely with our team throughout the design journey"
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized excellence in graphic design and branding"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900">
            Why Choose Our{' '}
            <span className="text-[#78A52B]">Design Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We combine artistic vision with strategic thinking to create designs that
            not only look stunning but also drive results for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-xl p-8 border border-slate-200 hover:border-[#78A52B]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#78A52B] to-[#6f9526] rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "150+", label: "Happy Clients" },
            { number: "25+", label: "Industries Served" },
            { number: "99%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#78A52B] mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
