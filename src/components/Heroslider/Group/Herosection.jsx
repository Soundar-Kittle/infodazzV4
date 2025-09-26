'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Herosection = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b to-blue-50">
      {/* Background Globe */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-cover lg:bg-cover sm:bg-left bg-right"
        style={{
          backgroundImage: "url('/images/globe.jpg')",
          backgroundSize: 'cover', // Ensure the image fully covers the section
          backgroundPosition: 'center', // Center the image
        }}
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 relative z-10">

        {/* Left Content (Text) */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 text-center lg:text-left mb-8 lg:mb-0"
        >
          <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Powering Growth Through <br /> Multiple Business Verticals <br />
            <span className="text-pink-600">Digital, Visual & Strategic Excellence</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
            At Infodazz, we are not just a service provider — we are a multi-domain powerhouse.
            From high-end software solutions and performance-driven digital marketing to impactful
            photo/videography, animations, and event management, our platforms turn vision into value.
            We connect brands with purpose, creativity, and results.
          </p>
        </motion.div>

        {/* Right Side (empty on mobile or any other content you'd like to add) */}
        <div className="flex-1 hidden lg:block">
          {/* You can add any other content here or leave it empty */}
        </div>
      </div>
    </section>
  );
};

export default Herosection;
