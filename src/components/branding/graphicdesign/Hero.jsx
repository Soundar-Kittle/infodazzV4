import React from 'react';
import { ArrowRight, Star, Award, Palette } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden" style={{backgroundColor: '#1e293b'}}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6 py-20 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Palette className="w-4 h-4" />
              LOGO DESIGN
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Crafting Iconic{' '}
              <span className="text-orange-500">Logos</span>
              <br />
              that Define Your{' '}
              <span className="text-orange-500">Brand</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Your logo is the face of your identity. Our designers combine creativity and 
              precision to build timeless visual marks that leave lasting impressions and 
              elevate your brand presence.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                Start Your Logo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-600 hover:border-orange-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-orange-500/10">
                View Our Work
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-orange-500">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-medium text-sm">500+ Logos Created</span>
              </div>
              <div className="flex items-center gap-2 text-orange-500">
                <Award className="w-5 h-5" />
                <span className="font-medium text-sm">Award Winning</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Showcase */}
          <div className="relative">
            <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Logo Design Showcase</h3>
                <p className="text-slate-400 text-sm">Premium logo designs and mockups</p>
              </div>
              
              {/* Mock Design Preview */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-6 border border-slate-600/50">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold mb-1">Modern Logo</div>
                    <div className="text-slate-400 text-xs">Clean & Professional</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-700/50 rounded p-2 text-center">
                    <div className="w-6 h-6 bg-orange-500 rounded mx-auto mb-1"></div>
                    <div className="text-xs text-slate-400">Icon</div>
                  </div>
                  <div className="bg-slate-700/50 rounded p-2 text-center">
                    <div className="w-6 h-6 bg-orange-500 rounded mx-auto mb-1"></div>
                    <div className="text-xs text-slate-400">Mark</div>
                  </div>
                  <div className="bg-slate-700/50 rounded p-2 text-center">
                    <div className="w-6 h-6 bg-orange-500 rounded mx-auto mb-1"></div>
                    <div className="text-xs text-slate-400">Type</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero