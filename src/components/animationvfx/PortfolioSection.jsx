import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export default function PortfolioSection() {
  const portfolio = [
    {
      title: "Magical Lamp Spirits",
      category: "2D Character Animation",
      image: "/images/animationvfx/magical_lamp.jpg",
      description: "Enchanted lamp creatures with glowing effects..."
    },
    {
      title: "Neon Monster Effects",
      category: "Visual Effects",
      image: "/images/animationvfx/neon_monster_effect.jpg",
      description: "Electrifying particle effects and energy beams..."
    },
    {
      title: "Glowing UI Elements",
      category: "Motion Graphics",
      image: "/images/animationvfx/glowing_ui.jpg",
      description: "Luminous interface animations with lamp-inspired glow effects."
    },
    {
      title: "Monster Combat System",
      category: "2D Animation",
      image: "/images/animationvfx/genie.jpg",
      description: "Dynamic lamp monster battle animations with light-based attacks."
    }
  ];

  return (
    <section className="relative z-10 px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Creations</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Showcasing our latest magical animation and VFX projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolio.map((item, index) => (
            <Card key={index} className="group cursor-pointer overflow-hidden bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm shadow-lg shadow-slate-900/50">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600/80 to-pink-600/80 text-white font-bold backdrop-blur-sm">
                  {item.category}
                </Badge>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Star className="w-6 h-6 text-yellow-300 animate-pulse" style={{ filter: 'drop-shadow(0 0 6px rgba(253, 224, 71, 0.6))' }} />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
