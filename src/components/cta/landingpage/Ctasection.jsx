import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TeamImage2 from '../../../../public/images/digitalmarketing1.webp';

export default function Ctasection() {
  return (
    <section className="py-16 px-4 sm:px-10 bg-[#74a51e]">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right" className="text-white">
          <h2 className="text-4xl font-bold mb-6 text-[#0d1f2b]">Digital Marketing Company In India</h2>
          <p className="mb-4 text-yellow-200 font-medium">
            SEO <span className="text-[#0d1f2b]">|</span> Google Ads <span className="text-[#0d1f2b]">|</span> Social Media <span className="text-[#0d1f2b]">|</span> Website
          </p>
          <p className="mb-6">
            India-based digital marketing firm is renowned for its unwavering dedication to driving the growth of its clients' businesses.
          </p>
          <h4 className="text-xl font-semibold mb-6">Ready to get started...!!!</h4>
          <Link href="/contact-us">
            <button className="bg-yellow-300 text-gray-900 py-2 px-6 rounded-md hover:bg-yellow-400 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
        <div data-aos="fade-left" className="flex justify-center">
        <Image
              src={TeamImage2}
              alt="cta-image"
              width={450}
              height={450}
              className="rounded-full object-cover"
            />
        </div>
      </div>
    </div>
  </section>
  )
}
