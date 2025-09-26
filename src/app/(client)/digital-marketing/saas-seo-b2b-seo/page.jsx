"use client";

import React, { useState,useEffect } from 'react';
import { 
  Search, 
  BarChart3,  
  Star,
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import HeroSection from '@/components/digitalmarketing/saas-seo-b2b-seo/HeroSection';
import ServicesSection from '@/components/digitalmarketing/saas-seo-b2b-seo/ServiceSection';
import BenefitsSection from '@/components/digitalmarketing/saas-seo-b2b-seo/BenefitsSection';
import ContactSection from '@/components/digitalmarketing/saas-seo-b2b-seo/ContactSection';


const page = () => {


  return (
      <div className="min-h-screen bg-white">
      <HeroSection/>
      <ServicesSection/>
      <BenefitsSection/>
      <ContactSection/>
      </div>
  )
}

export default page