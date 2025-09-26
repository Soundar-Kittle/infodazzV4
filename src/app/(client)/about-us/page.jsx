"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Users2,
  Trophy,
  Handshake,
  Quote,
  Building2,
  ArrowRight,
  Briefcase,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Globe2,
  Star
} from "lucide-react";
import MissionVision from "@/components/about/MissionVision";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import CompanyOverview from "@/components/about/CompanyOverview";
import LeadershipTeamBios from "@/components/about/LeadershipTeamBios";
import Awards from "@/components/about/Awards";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";

// ---------- mock data (swap with CMS / API) ----------
const TEAM = [
  { name: "Priya Sharma", role: "Founder & CEO", img: "/images/aboutus/priya.jpg", bio: "15+ years leading brand & product transformations." },
  { name: "Arun Verma", role: "CTO", img: "/images/aboutus/priya.jpg", bio: "Architecture, AI, and scalable platforms." },
  { name: "Neha Gupta", role: "Head of Design", img: "/images/aboutus/priya.jpg", bio: "Design systems, motion, and product storytelling." },
  { name: "Rahul Iyer", role: "VP, Growth", img: "/images/aboutus/priya.jpg", bio: "Performance, ABM, and revenue ops." },
];

 const CEO = {
    name: "Priya Sharma",
    role: "Founder & CEO",
    img: "/images/aboutus/priya.jpg",
    message:
      "At Infodazz, our mission is to empower brands with innovative solutions that inspire growth and connection. We believe in blending creativity with strategy to deliver lasting impact.",
  };


const VALUES = [
  { icon: Sparkles, title: "Invent Boldly", desc: "We prototype fast, learn faster, and ship what matters." },
  { icon: HeartHandshake, title: "Obsess Over Clients", desc: "Outcomes > deliverables. We’re partners, not vendors." },
  { icon: ShieldCheck, title: "Own The Result", desc: "Accountability and craftsmanship in every pixel & query." },
  { icon: Globe2, title: "Be Inclusive", desc: "Diverse perspectives build better products and cultures." },
];

const TIMELINE = [
  { year: "2018", title: "Founded", desc: "Started as a boutique branding & web studio." },
  { year: "2020", title: "Scaled to Full-Stack", desc: "Added product engineering, growth, and RevOps." },
  { year: "2022", title: "Global Delivery", desc: "Launched multi-region squads for 24×7 velocity." },
  { year: "2025", title: "AI-First", desc: "Integrated AI/GPT across design, dev, and marketing ops." },
];

const AWARDS = [
  { title: "Awwwards – Honorable Mention", year: "2023" },
  { title: "Clutch – Top B2B Service Provider", year: "2024" },
  { title: "Google Partner – Premier Badge", year: "2024" },
];

const TESTIMONIALS = [
  { quote: "Infodazz helped us 3× our qualified pipeline in 6 months—without bloating spend.", author: "Head of Growth, B2B SaaS" },
  { quote: "Design system + headless CMS cut our launch cycles from weeks to days.", author: "Marketing Director, Ecommerce" },
];

const CLIENTS = [
  "/images/aboutus/cycle-studio.jpg",
  "/images/aboutus/cycle-studio.jpg",
  "/images/aboutus/cycle-studio.jpg",
  "/images/aboutus/cycle-studio.jpg",
  "/images/aboutus/cycle-studio.jpg",
  "/images/aboutus/cycle-studio.jpg",
];


const page = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Overview */}
      <section className="relative bg-[#0E1624] overflow-hidden">
<div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="uppercase tracking-widest text-sm text-amber-400 font-semibold">About Infodazz</p>
              <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-white">
                Elevating Brands with <span className="text-amber-400">Design</span>, <span className="text-amber-400">Tech</span> & <span className="text-amber-400">Growth</span>
              </h1>
              <p className="mt-4 text-[#B7C0D1] text-lg">
                We blend strategy, branding, web engineering, and performance marketing to help teams launch faster and grow smarter.
                From local roots to global impact, our work is measured by your outcomes.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/connect-us"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 text-slate-900 px-5 py-3 font-semibold hover:bg-amber-600 transition"
                >
                  Talk to Us <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold text-white/90 hover:bg-white/10 transition"
                >
                  See Work
                </Link>
              </div>
            </div>
            <div className="relative aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/aboutus/about-banner.jpg" alt="Infodazz team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <CompanyOverview/>

      {/* Mission & Vision */}

      <MissionVision/>

      {/* Story / History */}
     <section className="relative bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 left-16 w-32 h-32 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-20 blur-2xl"></div>
    <div className="absolute bottom-10 right-16 w-24 h-24 bg-gradient-to-r from-rose-100 to-orange-100 rounded-full opacity-20 blur-2xl"></div>
  </div>

  <div className="container mx-auto px-4 py-16 relative z-10">
    <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
      Our Story
    </h2>
    <p className="mt-2 text-slate-600">
      A quick timeline of milestones.
    </p>

    <div className="mt-12 relative">
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-200"></div>
      <ol className="space-y-12">
        {TIMELINE.map((t, i) => (
          <li key={i} className="relative md:grid md:grid-cols-2 md:gap-8">
            <div className="flex items-start gap-3 md:justify-end md:pr-8">
              <span className="mt-1 inline-flex h-6 items-center rounded-full bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 px-2 text-xs font-semibold text-indigo-700 backdrop-blur-sm shadow-sm">
                {t.year}
              </span>
            </div>
            <div className="mt-3 md:mt-0 md:pl-8">
              <div className="relative bg-white/60 backdrop-blur-sm border border-white/60 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-slate-900">{t.title}</h3>
                <p className="text-slate-600">{t.desc}</p>

                <div className="absolute -left-3 top-5 w-2 h-2 rounded-full bg-indigo-400 md:hidden"></div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </div>
</section>

<LeadershipTeamBios/>
{/* Core Values */}
<CoreValuesSection/>
      


      {/* Awards */}


<Awards/>
<TestimonialsSection/>
 

      {/* Final CTA */}
<section className="bg-[#0E1624]">
  <div className="container mx-auto px-4 py-14">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <div className="flex items-center gap-3">
          <Building2 className="w-6 h-6 text-white" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to build what’s next?</h2>
        </div>
        <p className="mt-2 opacity-90 text-white/90">
          Tell us where you want to go—brand, web, growth. We’ll chart the path.
        </p>
      </div>
      <div className="flex gap-3">
        <Link
          href="/connect-us"
          className="inline-flex items-center gap-2 rounded-xl bg-[#7ab927] text-slate-900 px-5 py-3 font-semibold hover:opacity-90 transition"
        >
          Contact Us <ArrowRight className="w-5 h-5" />
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-900/30 px-5 py-3 font-semibold hover:bg-black/10 transition text-white"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}

// ---------- tiny helper ----------
function Card({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <div className="flex items-start gap-3">
        <Icon className="w-6 h-6 text-blue-600" />
        <div>
          <div className="font-semibold text-slate-900">{title}</div>
          <p className="text-slate-600">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default page