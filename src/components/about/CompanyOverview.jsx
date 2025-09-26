"use client";

import { Users, Award, Briefcase, Sparkles } from 'lucide-react';

export default function CompanyOverview() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-40 blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-100 rounded-full opacity-25 blur-md"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header with icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6 group hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight">
            About Infodazz
          </h2>
          
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Infodazz empowers brands to scale through strategy, design, and technology. 
            From startups to enterprise organizations, we help teams launch faster, grow smarter, and build lasting impact in the digital space.
          </p>
        </div>

        {/* Enhanced Stats with icons and animations */}
        <div className="mt-16 grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
          <div className="group relative">
            <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                05+
              </div>
              <div className="text-slate-600 font-medium">Years in Business</div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="group relative">
            <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                100+
              </div>
              <div className="text-slate-600 font-medium">Clients Served</div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="group relative">
            <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                250+
              </div>
              <div className="text-slate-600 font-medium">Projects Delivered</div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Learn More About Us
            <Sparkles className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
