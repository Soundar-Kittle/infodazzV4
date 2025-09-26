import React from 'react';
import Ctasectionbtm from '@/components/cta/landingpage/Ctasectionbtm';
import Hero from '@/components/digitalmarketing/seosmmseo/Hero';
import Ourvalues from '@/components/digitalmarketing/seosmmseo/Ourvalues';
import Searchengine from '@/components/digitalmarketing/seosmmseo/Searchengine';

import Socialmedia from '@/components/digitalmarketing/seosmmseo/Socialmedia';
import WhySeo from '@/components/digitalmarketing/seosmmseo/WhySeo';
import WhyUs from '@/components/digitalmarketing/seosmmseo/WhyUs';




export default function page() {
  return (
    <>
    
    <Hero/>
    <Ourvalues/>
    <Searchengine/>
    <Socialmedia/>
    <WhySeo/>
    <Ctasectionbtm/>
    
    </>
  )
}
