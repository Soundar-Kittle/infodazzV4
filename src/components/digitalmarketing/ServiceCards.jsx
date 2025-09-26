"use client";

import React from "react";
import Link from "next/link";
import { Globe, Gem, Rocket } from "lucide-react";

const services = [
  {
    title: "SEO, SEM & SMM",
    icon: <Globe className="w-20 h-20 text-[#3c2846]" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis numquam, alias laborum eaque natus dolor totam perspiciatis adipisci ipsum rem amet nobis commodi placeat!",
    gradient: "bg-gradient-to-b from-pink-500 to-indigo-500",
    href: "/sem-smm-seo",
  },
  {
    title: "Creative Design",
    icon: <Gem className="w-20 h-20 text-[#3c2846]" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis numquam, alias laborum eaque natus dolor totam perspiciatis adipisci ipsum rem amet nobis commodi placeat!",
    gradient: "bg-gradient-to-b from-yellow-300 to-pink-500",
    href: "/creative-design",
  },
  {
    title: "Brand Building",
    icon: <Rocket className="w-20 h-20 text-[#3c2846]" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis numquam, alias laborum eaque natus dolor totam perspiciatis adipisci ipsum rem amet nobis commodi placeat!",
    gradient: "bg-gradient-to-b from-green-400 to-purple-500",
    href: "/brand-building",
  },
];

const ServiceCards = () => {
  return (
    <section className="relative pt-3 pb-16 bg-[#ffff] overflow-hidden">
      {/* Animated doodles in background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <span className="absolute w-80 h-80 bg-pink-300 opacity-20 rounded-full blur-3xl animate-pulse top-0 -left-10"></span>
        <span className="absolute w-72 h-72 bg-indigo-300 opacity-20 rounded-full blur-2xl animate-[wiggle_6s_ease-in-out_infinite] bottom-10 right-0"></span>
        <span className="absolute w-64 h-64 bg-purple-400 opacity-10 rounded-full blur-3xl animate-bounce left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4 py-6 relative z-10">
        {services.map((service, idx) => (
          <Link key={idx} href={service.href}>
            <div
              className={`cursor-pointer relative w-80 h-[450px] rounded-t-[20px] rounded-b-[180px] ${service.gradient} shadow-[0_15px_0_#3c2846,inset_0_-15px_0_rgba(255,255,255,0.24),0_45px_0_rgba(0,0,0,0.15)] overflow-hidden flex flex-col items-center`}
            >
              {/* Top Icon Holder */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[120px] bg-[#ffff] rounded-b-[100px] shadow-[0_15px_0_rgba(0,0,0,0.1),inset_0_-8px_0_#3c2846] z-20 flex justify-center items-start">
                {service.icon}
                <div className="absolute top-0 -left-[50px] w-[50px] h-[50px] rounded-tr-[50px] shadow-[15px_-15px_0_15px_#ffff] bg-transparent" />
                <div className="absolute top-0 -right-[50px] w-[50px] h-[50px] rounded-tl-[50px] shadow-[-15px_-15px_0_15px_#ffff] bg-transparent" />
              </div>

              {/* Shine effect */}
              <div className="absolute -top-[140px] -left-[40%] w-full h-[120%] bg-gradient-to-r from-transparent to-white/20 rotate-[35deg] blur-[5px] pointer-events-none z-10" />

              {/* Content */}
              <div className="pt-[150px] px-6 text-center z-30">
                <h2 className="text-white text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-white text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
