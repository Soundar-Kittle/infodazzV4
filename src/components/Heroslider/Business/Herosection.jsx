'use client'

import React from 'react';
import {motion}  from 'framer-motion';
import Heroimg from '../../../../public/images/hero-img.png';
import Image from 'next/image';



const Herosection = () => {

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24">
        
 {/* Left Content - Slide In */}
 <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
  Powering Growth Through <br /> Multiple Business Verticals <br />
  <span className="text-pink-600">Digital, Visual & Strategic Excellence</span>
</h1>

<p className="mt-6 text-gray-600 text-lg max-w-xl">
  At Infodazz, we are not just a service provider — we are a multi-domain powerhouse. 
  From high-end software solutions and performance-driven digital marketing to
  impactful photo/videography, animations, and event management, our platforms
  turn vision into value. We connect brands with purpose, creativity, and results.
</p>
        </motion.div>

        {/* Right Illustration with motion */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Image
            src={Heroimg} // replace with your business-oriented illustration
            alt="Grow Your Business"
            width={500}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;