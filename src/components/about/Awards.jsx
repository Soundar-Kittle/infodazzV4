"use client";

import React from 'react';
import { Trophy, Star, Medal, Award, Crown, Zap } from 'lucide-react';

const AWARDS = [
  {
    title: "Best Innovation Award",
    year: "2024",
    organization: "Tech Excellence Awards",
    icon: Trophy,
    gradient: "from-yellow-400 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50"
  },
  {
    title: "Outstanding Performance",
    year: "2023",
    organization: "Industry Leaders Summit",
    icon: Star,
    gradient: "from-blue-400 to-purple-500",
    bgGradient: "from-blue-50 to-purple-50"
  },
  {
    title: "Excellence in Design",
    year: "2023",
    organization: "Design Masters Guild",
    icon: Medal,
    gradient: "from-green-400 to-teal-500",
    bgGradient: "from-green-50 to-teal-50"
  },
  {
    title: "Rising Star Award",
    year: "2022",
    organization: "Future Innovators",
    icon: Award,
    gradient: "from-pink-400 to-red-500",
    bgGradient: "from-pink-50 to-red-50"
  },
  {
    title: "Leadership Excellence",
    year: "2022",
    organization: "Professional Development",
    icon: Crown,
    gradient: "from-purple-400 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50"
  },
  {
    title: "Innovation Champion",
    year: "2021",
    organization: "Creative Solutions Awards",
    icon: Zap,
    gradient: "from-cyan-400 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50"
  }
];

export default function Awards() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-100/50 to-orange-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 py-20 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Awards & Achievements
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Recognition for excellence, innovation, and outstanding contributions to the industry
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {AWARDS.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div
                key={index}
                className={`
                  group relative rounded-3xl border border-slate-200/60
                  bg-gradient-to-br ${award.bgGradient} backdrop-blur-sm
                  p-8 text-center overflow-hidden
                  shadow-[0_8px_32px_rgba(2,6,23,0.08)]
                  hover:shadow-[0_16px_48px_rgba(2,6,23,0.12)]
                  hover:border-slate-300/60
                  transform hover:-translate-y-2
                  transition-all duration-500 ease-out
                  cursor-pointer
                `}
              >
                {/* Gradient overlay on hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${award.gradient} opacity-0 
                  group-hover:opacity-5 transition-opacity duration-500
                `}></div>
                
                {/* Floating icon background */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <IconComponent className="w-16 h-16" />
                </div>
                
                {/* Icon */}
                <div className={`
                  inline-flex items-center justify-center w-16 h-16 mb-6
                  rounded-2xl bg-gradient-to-br ${award.gradient} 
                  shadow-lg group-hover:shadow-xl
                  transform group-hover:scale-110 group-hover:rotate-3
                  transition-all duration-500
                  relative z-10
                `}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                    {award.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {award.organization}
                  </p>
                  
                  <div className={`
                    inline-flex items-center gap-2 px-4 py-2 rounded-full
                    bg-white/80 backdrop-blur-sm border border-slate-200/60
                    text-sm font-semibold text-slate-700
                    group-hover:bg-white group-hover:border-slate-300/60
                    transition-all duration-300
                  `}>
                    <Star className="w-4 h-4" />
                    {award.year}
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-600 font-medium">
            <Zap className="w-5 h-5" />
            More achievements coming soon
          </div>
        </div>
      </div>
    </section>
  );
}
