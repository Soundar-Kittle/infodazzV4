import React from 'react';
import { Button } from '@/components/ui/button';
import { Lightbulb } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative z-10 px-6 lg:px-12 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-3xl p-12 border border-purple-500/30 relative overflow-hidden backdrop-blur-sm shadow-2xl shadow-purple-900/50">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-yellow-500/50">
                <Lightbulb className="w-10 h-10 text-slate-900" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Create Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Magical?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's illuminate your vision with professional animation and VFX that stands out in the gaming industry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 group relative overflow-hidden shadow-lg shadow-purple-500/25">
                <span className="relative z-10">GET IN TOUCH WITH OUR TEAM</span>
              </Button>
              <Button size="lg" variant="outline" className="border-yellow-300 text-yellow-300 hover:bg-yellow-300/10 group backdrop-blur-sm">
                <span className="group-hover:text-yellow-200 transition-colors">Schedule a Call</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
