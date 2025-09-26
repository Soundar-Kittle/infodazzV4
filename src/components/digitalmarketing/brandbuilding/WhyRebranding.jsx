"use client";

import React from "react";
import Image from "next/image";
import Branding3 from "../../../../public/images/digitalmarketing/brandbuilding/rebranding.svg"; // Ensure this SVG is importable or use /public path

const WhyRebranding = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div
            className="w-full md:w-1/2 flex justify-center items-center"
            data-aos="fade-right"
          >
            <Image
              src={Branding3}
              alt="Rebranding"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className="mb-6">
              <p className="text-sm text-green-600 uppercase font-semibold">Rebranding</p>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                Why do you <span className="text-green-500">need</span> Rebranding?...
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              We answer this question for your brand&apos;s upliftment. Infodazz is
              broadening the brand&apos;s visibility for its survival and supremacy. It
              deepens the core values, broadens the target audience, and strengthens
              the new identity for its new path. We make the brand&apos;s online presence
              and its adaptation to digital platforms; rebranding is strategic when it
              aligns with broader business objectives, addresses emerging challenges,
              and enhances the overall positioning and perception of the brand.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Hope you say YES to Infodazz to rebrand to make your brand situate in
              all possible ways. Our professionals are energetic and enthusiastic
              about providing enough effort to lift the brand&apos;s life to the upcoming
              scenarios. To step up the strategic shift, it is a must to rebrand at
              the right time and in the right way. Call us for all your queries and
              commitments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRebranding;
