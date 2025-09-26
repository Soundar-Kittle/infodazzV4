import React from 'react';
import { 
  Building2, ShoppingBag, Stethoscope, GraduationCap, Car, 
  Home, Utensils, Dumbbell, Briefcase, Heart, Gamepad2, Plane 
} from 'lucide-react';

const Industries = () => {
  const industries = [
    { icon: Building2, name: "Technology", projects: "120+ Projects" },
    { icon: ShoppingBag, name: "E-commerce", projects: "85+ Projects" },
    { icon: Stethoscope, name: "Healthcare", projects: "65+ Projects" },
    { icon: GraduationCap, name: "Education", projects: "50+ Projects" },
    { icon: Car, name: "Automotive", projects: "40+ Projects" },
    { icon: Home, name: "Real Estate", projects: "75+ Projects" },
    { icon: Utensils, name: "Food & Beverage", projects: "90+ Projects" },
    { icon: Dumbbell, name: "Fitness", projects: "35+ Projects" },
    { icon: Briefcase, name: "Professional Services", projects: "60+ Projects" },
    { icon: Heart, name: "Non-Profit", projects: "25+ Projects" },
    { icon: Gamepad2, name: "Entertainment", projects: "30+ Projects" },
    { icon: Plane, name: "Travel & Tourism", projects: "45+ Projects" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900">
            Industries We <span className="text-[#78A52B]">Serve</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse portfolio spans across multiple industries, giving us the
            expertise to understand your market and create designs that resonate
            with your target audience.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-xl p-6 border border-slate-200 hover:border-[#78A52B]/50 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{industry.name}</h3>
              <p className="text-sm text-slate-600">{industry.projects}</p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Don’t See Your Industry?
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              We've worked with businesses of all sizes across countless industries.
              Our adaptable approach means we can understand and serve any market.
            </p>
            <button className="bg-[#78A52B] hover:bg-[#6f9526] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Discuss Your Industry Needs
            </button>
          </div>
        </div>

        {/* Industry Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "25+", label: "Industries Served" },
            { number: "500+", label: "Projects Delivered" },
            { number: "150+", label: "Satisfied Clients" },
            { number: "5+", label: "Years Experience" }
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

export default Industries;
