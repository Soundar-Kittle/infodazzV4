import React from 'react';
import { FileText, Image, Newspaper, Package, Globe, Smartphone } from 'lucide-react';

const DesignTypes = () => {
  const designTypes = [
    {
      icon: FileText,
      title: "Brochures",
      description: "Professional tri-fold and multi-page brochures",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Image,
      title: "Posters",
      description: "Eye-catching promotional and event posters",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Newspaper,
      title: "Flyers",
      description: "Compelling marketing flyers and leaflets",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Package,
      title: "Packaging",
      description: "Product packaging and label designs",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Globe,
      title: "Web Graphics",
      description: "Digital assets and web-ready designs",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Smartphone,
      title: "Social Media",
      description: "Engaging social media posts and ads",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900">
            Types of <span className="text-[#78A52B]">Designs</span> We Create
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From traditional print materials to modern digital assets, we craft
            designs that make your brand stand out across every medium.
          </p>
        </div>

        {/* Design Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designTypes.map((type, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#78A52B]/50 transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>

                {/* Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#78A52B] rounded-lg flex items-center justify-center">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{type.title}</h3>
                <p className="text-slate-600 leading-relaxed">{type.description}</p>

                {/* Hover CTA */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-[#78A52B] font-semibold hover:text-[#6f9526] transition-colors">
                    View Examples →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-6">
            Don’t see what you’re looking for? We create custom designs for any project.
          </p>
          <button className="bg-[#78A52B] hover:bg-[#6f9526] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default DesignTypes;
