import React from "react";
import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Film, Palette, Eye, Play } from "lucide-react";

export default function VFXShowcase() {
  const vfxItems = [
    {
      title: "Particle Systems",
      icon: Sparkles,
      description: "Dynamic particle effects and simulations",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Energy Effects",
      icon: Zap,
      description: "Electric and magical energy visualizations",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "Cinematic Sequences",
      icon: Film,
      description: "Film-quality visual storytelling",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Motion Graphics",
      icon: Palette,
      description: "Animated logos and brand elements",
      gradient: "from-green-400 to-teal-500",
    },
    {
      title: "3D Environments",
      icon: Eye,
      description: "Immersive 3D worlds and landscapes",
      gradient: "from-red-400 to-pink-500",
    },
    {
      title: "Character Animation",
      icon: Play,
      description: "Lifelike character performances",
      gradient: "from-indigo-400 to-purple-500",
    },
  ];

  return (
    <section className="relative z-10 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-[#fadd35]">
          Visual Effects Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vfxItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                className="group bg-slate-800/50 border border-slate-700 hover:border-yellow-400 
                           transition-transform duration-300 ease-in-out transform 
                           hover:scale-[1.05] hover:shadow-xl hover:shadow-yellow-400/20 
                           rounded-xl backdrop-blur-md overflow-hidden relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-6 relative">
                  {/* <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div> */}
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 text-[#131e37]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#131e37] group-hover:text-yellow-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[#131e37] group-hover:text-[#131e37] transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
