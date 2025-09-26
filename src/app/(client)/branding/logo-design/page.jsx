"use client";
import {React,useState,useEffect} from 'react';
import { ArrowRight, Palette, Zap, Award, CheckCircle, Star, Sparkles } from "lucide-react";

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake delay for UX (optional)
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-slate-300 border-t-slate-800"></div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden">
      {/* Enhanced decorative blurred shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-16 w-40 h-40 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-16 w-32 h-32 bg-gradient-to-r from-rose-100 to-orange-100 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full opacity-10 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0E1624] via-[#1a2332] to-[#0E1624] overflow-hidden">
        {/* Hero background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Palette className="w-4 h-4 text-white" />
                </div>
                <p className="uppercase tracking-widest text-sm text-amber-400 font-semibold">
                  Logo Design
                </p>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Crafting Iconic{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Logos
                </span>{' '}
                that Define Your{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Brand
                </span>
              </h1>

              <p className="text-[#B7C0D1] text-lg md:text-xl leading-relaxed">
                Your logo is the face of your identity. Our designers combine creativity and precision to build
                timeless visual marks that leave lasting impressions and elevate your brand presence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/connect-us"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-6 py-4 font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Start Your Logo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="/portfolio"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-4 font-semibold text-white/90 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/50"
                >
                  See Our Work
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center space-x-6 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <span className="text-white/80 text-sm">500+ Logos Created</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-white/80 text-sm">Award Winning</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                {/* Placeholder with enhanced styling */}
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-white/20">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-white/70 font-medium">Logo Design Showcase</span>
                    <p className="text-white/50 text-sm">Premium logo designs and mockups</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Main Content Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <p className="text-[12px] font-semibold tracking-wider uppercase text-indigo-600">
              Professional Design Services
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent leading-tight">
            Custom Logo Design Services
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Unique. Memorable. Timeless. Our creative team crafts iconic logo identities 
            that capture the heart of your brand and leave a lasting impression.
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-24"></div>
            <div className="mx-4 w-2 h-2 bg-indigo-400 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-24"></div>
          </div>

          <button className="mt-8 inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Enhanced Content Section */}
      <section className="container mx-auto px-4 pt-4 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Enhanced Image placeholder */}
          <div className="relative group">
            <div className="w-full h-80 md:h-96 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center border border-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <span className="text-slate-600 font-semibold text-lg">Logo Design Showcase</span>
                <p className="text-slate-500">Professional logo designs and brand mockups</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-indigo-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>

          {/* Enhanced Text content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
                Why a Great Logo Matters
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6"></div>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg">
              Your logo is the face of your brand — the very first thing people notice and remember.
              A well-designed logo builds instant recognition, builds trust, and sets the tone for
              every interaction to follow.
            </p>

            <p className="text-slate-600 leading-relaxed">
              From concept development to final delivery, our team works closely with you to understand
              your vision, values, and audience. We translate these into a visual identity that
              communicates your brand story with clarity and beauty.
            </p>

            {/* Enhanced feature list */}
            <div className="space-y-4 pt-4">
              <h4 className="font-semibold text-slate-900 text-lg mb-4">What You Get:</h4>
              <div className="space-y-3">
                {[
                  'Modern, timeless logo concepts tailored to your brand',
                  'Multiple design directions and iteration rounds',
                  'Delivery in all major file formats (SVG, PNG, EPS, PDF)',
                  'Brand guidelines and usage instructions',
                  'Unlimited revisions until you\'re 100% satisfied'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-6">
              <a
                href="/connect-us"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;