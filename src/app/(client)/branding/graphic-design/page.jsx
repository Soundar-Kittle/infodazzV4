"use client";
import {React, useState, useEffect} from 'react';
import dynamic from 'next/dynamic';
// import Hero from '@/components/branding/graphicdesign/Hero';
// import ServicesOverview from '@/components/branding/graphicdesign/ServicesOverview';
// import DesignTypes from '@/components/branding/graphicdesign/DesignTypes';
// import Portfolio from '@/components/branding/graphicdesign/Portfolio';
// import DesignProcess from '@/components/branding/graphicdesign/DesignProcess';
// import Industries from '@/components/branding/graphicdesign/Industries';
// import Testimonials from '@/components/branding/graphicdesign/Testimonials';
// import FAQ from '@/components/branding/graphicdesign/FAQ';
// import CallToAction from '@/components/branding/graphicdesign/CallToAction';
const Hero = dynamic(() => import("@/components/branding/graphicdesign/Hero"));
const ServicesOverview = dynamic(() => import("@/components/branding/graphicdesign/ServicesOverview"));
const DesignTypes = dynamic(() => import("@/components/branding/graphicdesign/DesignTypes"));
const Portfolio = dynamic(() => import("@/components/branding/graphicdesign/Portfolio"));
const DesignProcess = dynamic(() => import("@/components/branding/graphicdesign/DesignProcess"));
const Industries = dynamic(() => import("@/components/branding/graphicdesign/Industries"));
const Testimonials = dynamic(() => import("@/components/branding/graphicdesign/Testimonials"));
const FAQ = dynamic(() => import("@/components/branding/graphicdesign/FAQ"));
const CallToAction = dynamic(() => import("@/components/branding/graphicdesign/CallToAction"));


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
    <>
    <Hero />
      <ServicesOverview />
      <DesignTypes />
      <Portfolio />
      <DesignProcess />
      <Industries />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </>
  )
}

export default page