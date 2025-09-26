import Business from '@/components/business/Business';
import Herosection from '@/components/Heroslider/Business/Herosection';
import Ctasectionbtm from '@/components/cta/landingpage/Ctasectionbtm';
import React from 'react';

export default function page() {
  return (
    <div>
      <Herosection/>
         <Business/>
         <Ctasectionbtm/>
    </div>
  )
}
