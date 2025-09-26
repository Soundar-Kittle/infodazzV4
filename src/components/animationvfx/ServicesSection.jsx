import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Wand2, Eye, Flame } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "2D Environment Animation",
      description: "Our team creates dynamic backgrounds that set the perfect tone for your content...",
      icon: <Wand2 className="w-8 h-8" />,
      features: ["Dynamic Backgrounds", "Environmental Effects", "Atmospheric Animation", "Scene Transitions"],
      number: "01"
    },
    {
      title: "2D Spine Animation",
      description: "We utilize advanced Spine animation techniques for efficient character rigging...",
      icon: <Eye className="w-8 h-8" />,
      features: ["Character Rigging", "Skeletal Animation", "Smooth Movement", "High-Quality Production"],
      number: "02"
    },
    {
      title: "2D Frame Animation",
      description: "We craft frame-by-frame animations for maximum creative control and expression...",
      icon: <Flame className="w-8 h-8" />,
      features: ["Frame-by-Frame", "Creative Control", "Fluid Motion", "Detailed Sequences"],
      number: "03"
    }
  ];

  return (
    <section className="relative z-10 px-6 lg:px-12 py-20 bg-gradient-to-r from-slate-900/80 to-purple-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Mystical Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Enchanted animation and VFX services tailored for magical gaming experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-yellow-300/50 transition-all duration-300 group hover:scale-105 relative overflow-hidden backdrop-blur-sm shadow-lg shadow-slate-900/50">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-4 right-4 text-6xl font-bold text-slate-700/30 group-hover:text-slate-600/40 transition-colors">
                {service.number}
              </div>
              <CardContent className="p-8 relative z-10">
                <div className="text-[#131e37] mb-6 group-hover:scale-110 transition-transform" style={{ filter: 'drop-shadow(0 0 6px rgba(253, 224, 71, 0.4))' }}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#131e37] group-hover:text-[#131e37] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#131e37] mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[#131e37] group-hover:text-[#131e37] transition-colors">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
