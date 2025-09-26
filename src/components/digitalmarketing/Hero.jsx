// import React from "react";
// import Image from "next/image";
// import SeoImage from "../../../public/images/digitalmarketing/hdf34.webp";

// const Hero = () => {
//   return (
//     <section className="bg-[#0b0b14] w-full py-16">
//     <div className="container mx-auto px-4">
//       <div className="flex flex-col-reverse md:flex-row items-center gap-10">
//         <div className="w-full md:w-1/2" data-aos="fade-left">
//           <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug mb-6">
//             Elevate with Digital Marketing Mastery.
//           </h1>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             Our proficiency in SMM establishes an ongoing bond between your business and your audience
//             while our SEO prowess increases visibility.
//           </p>
//         </div>
//         <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-right">
//           <Image
//             src={SeoImage}
//             alt="Digital Marketing"
//             className="rounded-lg"
//             width={600}
//             height={400}
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   </section>
//   );
// };

// export default Hero;

"use client";

"use client";

import React from "react";
import Image from "next/image";
import { Send, Phone } from "lucide-react";
import SeoImage from "../../../public/images/digitalmarketing/hdf34.webp";

const Hero = () => {
  return (
    <section className="bg-[#0b0b14] w-full min-h-[70vh] flex items-center py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-left">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-snug mb-4">
              Award Winning Digital Marketing Company in India
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
              Top Rated Digital Marketing Agency For Best Online Marketing Services.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start items-center gap-4">
              <button className="bg-[#7ab927] hover:bg-[#6aa11f] text-white px-6 py-3 rounded shadow flex items-center gap-2 transition-all duration-300 cursor-pointer">
                <Send className="w-4 h-4" />
                Request Proposal
              </button>
              <button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded shadow flex items-center gap-2 transition-all duration-300 cursor-pointer">
                <Phone className="w-4 h-4" />
                Contact Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-right">
            <Image
              src={SeoImage}
              alt="Digital Marketing"
              className="rounded-lg w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
