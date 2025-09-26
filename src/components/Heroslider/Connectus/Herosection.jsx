"use client";

import React from "react";
import { motion } from "framer-motion";
import Heroimg from "../../../../public/images/mail1.webp";
import Image from "next/image";

const Herosection = () => {
  return (
 <section className="bg-[#fff89c] py-10">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Contact <span className="text-black">Us</span>
          </h1>
          <p className="mt-4 text-gray-700 text-base max-w-xl">
            Reach out to us for inquiries, assistance, or just to say hello. We're here for you!
          </p>
        </motion.div>

        {/* Right Illustration */}
        <div
          className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Image
            src="/images/contactus.png"
            alt="Support Illustration"
            width={450}
            height={350}
            className="w-full h-auto max-h-[350px] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
