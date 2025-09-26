import React from "react";
import {
  Heart,
  Shield,
  Zap,
  Users,
  Target,
  Lightbulb,
  Award,
  Compass,
} from "lucide-react";

const VALUES = [
  {
    title: "Innovation",
    description:
      "We constantly push boundaries and embrace cutting-edge technologies to deliver groundbreaking solutions that drive progress.",
    icon: Lightbulb,
    gradient: "from-purple-400 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50",
  },
  {
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we do, ensuring exceptional quality and attention to detail in every project.",
    icon: Award,
    gradient: "from-yellow-400 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50",
  },
  {
    title: "Integrity",
    description:
      "We build trust through transparency, honesty, and ethical practices in all our relationships and business dealings.",
    icon: Shield,
    gradient: "from-green-400 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and foster an environment where diverse perspectives create stronger solutions.",
    icon: Users,
    gradient: "from-blue-400 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    title: "Passion",
    description:
      "We approach every challenge with enthusiasm and dedication, fueling our commitment to extraordinary results.",
    icon: Heart,
    gradient: "from-pink-400 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50",
  },
  {
    title: "Agility",
    description:
      "We adapt quickly to change and embrace flexibility, ensuring we stay ahead in an ever-evolving landscape.",
    icon: Zap,
    gradient: "from-amber-400 to-yellow-500",
    bgGradient: "from-amber-50 to-yellow-50",
  },
  {
    title: "Focus",
    description:
      "We maintain laser-sharp focus on our goals and priorities, delivering targeted solutions that create real impact.",
    icon: Target,
    gradient: "from-red-400 to-pink-500",
    bgGradient: "from-red-50 to-pink-50",
  },
  {
    title: "Vision",
    description:
      "We think strategically about the future, anticipating trends and opportunities to guide our clients toward success.",
    icon: Compass,
    gradient: "from-teal-400 to-blue-500",
    bgGradient: "from-teal-50 to-blue-50",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-purple-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-100/30 to-teal-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 py-20 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-800 shadow-lg">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Core Values
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The fundamental principles that guide our decisions, shape our
            culture, and drive our success
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-3xl border border-slate-200/60 bg-gradient-to-br ${value.bgGradient} backdrop-blur-sm p-8 overflow-hidden shadow-[0_8px_32px_rgba(2,6,23,0.08)] hover:shadow-[0_20px_48px_rgba(2,6,23,0.15)] hover:border-slate-300/60 transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Floating icon background */}
                <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <IconComponent className="w-24 h-24" />
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg group-hover:shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {value.description}
                  </p>
                </div>

                {/* Decorative bottom stripe */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
                ></div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Corner dot */}
                <div
                  className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br ${value.gradient} opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-lg">
            <div className="flex -space-x-1">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
            </div>
            <span className="text-slate-600 font-medium">
              Values that drive excellence
            </span>
          </div>
        </div>
      </div>

      {/* Inline style for grid background */}
      <style jsx>{`
        .bg-grid-slate-100 {
          background-image: radial-gradient(circle, #f1f5f9 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </section>
  );
}
