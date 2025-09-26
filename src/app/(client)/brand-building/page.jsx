
import Hero from '@/components/digitalmarketing/brandbuilding/Hero'
import BrandingServices from '@/components/digitalmarketing/brandbuilding/BrandingServices'
import OurApproach from '@/components/digitalmarketing/brandbuilding/OurApproach'
import OurValues from '@/components/digitalmarketing/brandbuilding/OurValues'
import WhyRebranding from '@/components/digitalmarketing/brandbuilding/WhyRebranding'
import WhyUS from '@/components/digitalmarketing/brandbuilding/WhyUS';
import Ctasectionbtm from '@/components/cta/landingpage/Ctasectionbtm'
import React from 'react'

export default function page() {
  return (
    <>
    <Hero/>
    <WhyUS/>
    <OurApproach/>
    <OurValues/>
    <WhyRebranding/>
    <BrandingServices/>
    <Ctasectionbtm/>
    </>
  )
}
