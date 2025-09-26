import React from 'react';
import { Target, Eye, Sparkles, ArrowRight } from 'lucide-react';

function Card({ icon: Icon, letter, title, desc, tint, delay = "0ms" }) {
  return (
    <div
      className="group relative overflow-hidden"
      style={{ animationDelay: delay }}
    >
      <div className={`relative bg-gradient-to-br ${tint} border border-white/60 rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm`}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-current"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-current"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-slate-700" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform duration-300">
                <span className="text-white font-bold text-sm">{letter}</span>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
            {desc}
          </p>

          <div className="absolute bottom-4 right-4 w-2 h-2 bg-slate-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      </div>
    </div>
  );
}

export default function MissionVision() {
  return (
    
    <section className="relative bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-rose-100 to-orange-100 rounded-full opacity-25 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full opacity-15 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <p className="text-[12px] font-semibold tracking-wider uppercase text-indigo-600">
              Our Mission & Vision
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent leading-tight">
            Our values guide our actions
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            If you know what we're made of, you'll know what we're capable of.
            We plan, build, and grow through the lens of our mission & vision.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-24"></div>
            <div className="mx-4 w-2 h-2 bg-indigo-400 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-24"></div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card
            icon={Target}
            letter="M"
            title="Mission"
            desc="Empower brands to scale through thoughtful design, robust engineering, and performance marketing that drives measurable growth and lasting impact."
            tint="from-rose-50/80 via-rose-50/60 to-orange-50/80"
            delay="100ms"
          />
          <Card
            icon={Eye}
            letter="V"
            title="Vision"
            desc="A world where every company can launch, communicate, and grow with clarity, craft, and measurable impact that transforms industries and communities."
            tint="from-indigo-50/80 via-blue-50/60 to-purple-50/80"
            delay="200ms"
          />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent to-slate-300 w-16"></div>
            <p className="text-sm text-slate-500 font-medium">
              Ready to work with us?
            </p>
            <div className="h-px bg-gradient-to-l from-transparent to-slate-300 w-16"></div>
          </div>
         
        </div>
      </div>
    </section>
  );
}
