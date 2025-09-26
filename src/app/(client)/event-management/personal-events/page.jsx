import React from 'react';
import HeorSection from "@/components/EventManagement/PersonalEvent/HeroSection";
import Event from '@/components/EventManagement/PersonalEvent/Event';
import Service from '@/components/EventManagement/PersonalEvent/Service';

const page = () => {
  return (
   <>
   <HeorSection/>
   <Event/>
   <Service/>
   </>
  )
}

export default page