import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Lightbulb, Eye, Star } from 'lucide-react';

const CTASection2 = () => {
  return (
     <section className="relative z-10 px-6 lg:px-12 pt-20 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <Badge className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-yellow-300 border-yellow-300/30 animate-pulse backdrop-blur-sm px-4 py-2">
            ✨ Magical Animation & VFX Services
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Illuminate Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-purple-400 to-pink-400 animate-pulse relative">
              Games
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-300/20 to-purple-400/20 blur-xl rounded-full animate-pulse"></div>
            </span>
            <br />
            with Magical Animation
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Professional lamp monster animations, mystical VFX, and enchanted motion graphics that bring your gaming worlds to life with supernatural glow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group font-bold relative overflow-hidden shadow-lg shadow-purple-500/25">
              <span className="relative z-10 flex items-center">
                View Our Magical Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-300 text-yellow-300 hover:bg-yellow-300/10 group backdrop-blur-sm">
              <Play className="mr-2 w-5 h-5 group-hover:text-yellow-200 transition-colors" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Enhanced Central Animation */}
        <div className="mt-20 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full animate-bounce flex items-center justify-center relative shadow-lg shadow-purple-500/50">
              <Lightbulb className="w-16 h-16 text-yellow-300 animate-pulse" style={{ filter: 'drop-shadow(0 0 10px rgba(253, 224, 71, 0.8))' }} />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/30 to-purple-500/30 rounded-full animate-ping"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-300/20 to-pink-500/20 rounded-full animate-pulse"></div>
            </div>
            {/* Enhanced Floating Elements */}
            {Array.from({ length: 6 }, (_, i) => (
              <div 
                key={i}
                className="absolute"
                style={{
                  top: `${-20 + Math.sin((i * 60) * Math.PI / 180) * 60}px`,
                  left: `${-20 + Math.cos((i * 60) * Math.PI / 180) * 60}px`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                <Star className="w-4 h-4 text-yellow-300 animate-pulse" style={{ 
                  filter: 'drop-shadow(0 0 4px rgba(253, 224, 71, 0.6))',
                  animation: `orbit ${4 + i}s linear infinite, twinkle 2s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.5}s`,
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection2