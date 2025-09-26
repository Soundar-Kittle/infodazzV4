"use client";

import React from "react";
import Image from "next/image";
import bg from "../../../public/images/animationvfx/sharp.svg";

const Service2 = () => {
  return (
    <section
      className="min-h-[50vh] bg-cover bg-no-repeat bg-right py-10 flex items-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          {/* Left Text */}
          <div className="md:w-1/2 text-white text-justify">
            <h2 className="text-xl font-semibold mb-4">Our Services</h2>
            <p className="mb-4">
              A blend of the art of photography and visual effects pronounces a story. Our visual effects services, including motion graphics, compositing, 3D animation, and video editing, bring your creative visions to life. Our featured services give a hand to your emotions and thoughts to create unexceptional scenes with our dedicated team.
            </p>
            <p>
              We guarantee that your distinct idea will be turned into breathtaking visual narratives because of our dedication to quality, meticulous attention to detail, and cooperative approach.
            </p>
          </div>

          {/* Right List */}
          <div className="md:w-1/3 text-white">
            <ul className="list-disc list-inside space-y-1 text-left">
              <li>Rotoscoping</li>
              <li>Paint and Prep</li>
              <li>Cleanup</li>
              <li>Matchmove</li>
              <li>Concept Art</li>
              <li>Matte Painting</li>
              <li>Fluid Simulation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service2;
