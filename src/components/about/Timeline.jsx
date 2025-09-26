import React from 'react';
import { Calendar, Sparkles, ArrowRight, Star } from 'lucide-react';

const TIMELINE = [
  {
    year: "2019",
    title: "The Beginning",
    desc: "Founded with a vision to bridge the gap between creative design and technical excellence, starting with our first client projects.",
    icon: Star,
    color: "from-emerald-500 to-teal-500"
  },
  {
    year: "2020",
    title: "Digital Transformation",
    desc: "Pivoted to fully remote operations and expanded our digital marketing capabilities, helping clients navigate the new digital landscape.",
    icon: Sparkles,
    color: "from-blue-500 to-indigo-500"
  },
  {
    year: "2021",
    title: "Scaling Up",
    desc: "Reached 50+ clients and launched our comprehensive brand strategy services, establishing ourselves as a full-service digital agency.",
    icon: ArrowRight,
    color: "from-purple-500 to-pink-500"
  },
  {
    year: "2022",
    title: "Innovation Focus",
    desc: "Introduced cutting-edge technologies and AI-driven solutions, helping clients stay ahead of industry trends and competition.",
    icon: Calendar,
    color: "from-orange-500 to-red-500"
  },
  {
    year: "2024",
    title: "Global Expansion",
    desc: "Expanded internationally with 100+ clients across multiple continents, delivering 250+ successful projects and counting.",
    icon: Star,
    color: "from-indigo-500 to-purple-500"
  }
];

function TimelineItem({ item, index, isEven }) {
  const Icon = item.icon;

  return (
    <li className="relative group">
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-12 md:items-center">
        {/* Left side content (odd items) */}
        {!isEven && (
          <div className="md:text-right md:pr-8">
            <div className="inline-block">
              <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group-hover:scale-[1.02]">
                <div className="flex items-center justify-end gap-3 mb-3">
                  <span className={`inline-flex h-8 items-center rounded-full bg-gradient-to-r ${item.color} px-3 text-sm font-bold text-white shadow-lg`}>
                    {item.year}
                  </span>
                  <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Center timeline dot */}
        <div className="absolute left-1/2 -translate-x-1/2 z-20">
          <div className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-full shadow-lg border-4 border-white group-hover:scale-125 transition-transform duration-300`}>
            <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-20"></div>
          </div>
        </div>

        {/* Right side content (even items) */}
        {isEven && (
          <div className="md:pl-8">
            <div className="inline-block">
              <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group-hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className={`inline-flex h-8 items-center rounded-full bg-gradient-to-r ${item.color} px-3 text-sm font-bold text-white shadow-lg`}>
                    {item.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex items-start gap-4">
        <div className="flex flex-col items-center">
          <div className={`w-5 h-5 bg-gradient-to-r ${item.color} rounded-full shadow-lg border-2 border-white group-hover:scale-125 transition-transform duration-300 relative z-10`}>
            <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-20"></div>
          </div>
          {index < TIMELINE.length - 1 && (
            <div className="w-px h-16 bg-gradient-to-b from-slate-300 to-transparent mt-2"></div>
          )}
        </div>
        <div className="flex-1 pb-8">
          <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center shadow-lg`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <span className={`inline-flex h-6 items-center rounded-full bg-gradient-to-r ${item.color} px-2 text-xs font-bold text-white shadow-lg`}>
                {item.year}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {item.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Timeline() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-16 w-40 h-40 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-16 w-32 h-32 bg-gradient-to-r from-rose-100 to-orange-100 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full opacity-10 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-15 blur-lg animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <p className="text-[12px] font-semibold tracking-wider uppercase text-indigo-600">
              Our Journey
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent leading-tight">
            Our Story
          </h2>

          <p className="mt-4 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A journey of growth, innovation, and impact. Here are the key milestones that shaped who we are today.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-24"></div>
            <div className="mx-4 w-2 h-2 bg-indigo-400 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-24"></div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200"></div>

          <ol className="space-y-16 md:space-y-20">
            {TIMELINE.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </ol>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent to-slate-300 w-16"></div>
            <p className="text-sm text-slate-500 font-medium">
              Ready to be part of our story?
            </p>
            <div className="h-px bg-gradient-to-l from-transparent to-slate-300 w-16"></div>
          </div>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
