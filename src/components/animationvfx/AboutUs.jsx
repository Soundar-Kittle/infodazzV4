"use client";

import React from "react";
import Image from "next/image";
import VideoEditorImage from "../../../public/images/animationvfx/videoEditor.jpg"; // Make sure the image is inside /public or update path accordingly

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-right">
            <Image
              src={VideoEditorImage}
              alt="video production"
              className="rounded-md object-contain"
              width={500}
              height={400}
              priority
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0" data-aos="fade-left">
            <p className="text-lg text-gray-600 mb-2">Why choose us..?</p>
            <h4 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              We Help you Visualize your Aspirations
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              At Infodazz, we believe that every shot we create should not
              only be visually stunning but also serve a meaningful purpose
              within the larger narrative. Our goal is to create memorable
              imagery that resonates with audiences long after the credits
              roll. For over five years, we have been dedicated to this
              mission, delivering thousands of shots for Feature Films, Web
              Series, and Television Commercials around the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
