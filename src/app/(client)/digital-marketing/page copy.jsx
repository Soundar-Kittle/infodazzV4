import React from 'react';
import Hero from '@/components/digitalmarketing/Hero';
import ServiceCards from '@/components/digitalmarketing/ServiceCards';
import CardGrid from '@/components/digitalmarketing/CardGrid';
import OurValues from '@/components/digitalmarketing/Ourvalues';
import Ctasectionbtm from '@/components/cta/landingpage/Ctasectionbtm';
import HeroMarketingSection from '@/components/digitalmarketing/HeroMarketingSection';
import MarketingSuccessSection from '@/components/digitalmarketing/MarketingSuccessSection';
import CompanyEthosSection from '@/components/digitalmarketing/CompanyEthosSection';
import FaqSection from '@/components/digitalmarketing/FaqSection';

export default function pages() {
  return (
    <div>
      <Hero/>
      <HeroMarketingSection/>
      <ServiceCards/>
      {/* <OurValues/> */}
      <CompanyEthosSection/>
      <MarketingSuccessSection/>
      <FaqSection/>
      <Ctasectionbtm/>
    </div>
  )
}
