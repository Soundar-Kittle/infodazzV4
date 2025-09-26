import React from 'react';
import Link from 'next/link';
import BusinessData from '../data/businessData';
import Image from 'next/image';

const Business = () => {
  return (
    <section className="py-16 px-4 sm:px-10 bg-white">
    <div className="container mx-auto text-center">
      {/* <div className="mb-8">
      <div className="flex items-center justify-center mb-2">
    <div className="w-16 h-0.5 bg-green-500 mr-4"></div>
    <p className="text-lg font-bold uppercase tracking-wide text-[#76a527]">Services</p>
    <div className="w-16 h-0.5 bg-green-500 ml-4"></div>
  </div>
        <h3 className="text-3xl font-bold text-gray-900">
          We Offer <span className="text-green-500">Par Excellence</span> Services In
        </h3>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {BusinessData.map((service, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            data-aos="zoom-in-up"
          >
            <div className="w-16 h-16 mx-auto mb-4 transition-transform duration-700 group-hover:rotate-y-180 group-hover:[transform:rotateY(180deg)]">
              <Image
                src={service.icon}
                alt={`service icon ${idx + 1}`}
                width={64}
                height={64}
                className="rounded-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-900">
              {service.title}
            </h4>
            <p className="text-gray-600 mb-4">
              {service.content}
            </p>
            <div className="flex justify-center">
              <Link
                href={service.source}
                className="group text-gray-800 hover:text-green-500 transition duration-300 font-medium"
              >
                <span className="inline-block relative">
                  Read More
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
                </span>
                &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Business
