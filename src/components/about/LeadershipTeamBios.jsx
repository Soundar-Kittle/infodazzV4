import React from 'react'
import Image from 'next/image';

 const CEO = {
    name: "Priya Sharma",
    role: "Founder & CEO",
    img: "/images/aboutus/priya.jpg",
    message:
      "At Infodazz, our mission is to empower brands with innovative solutions that inspire growth and connection. We believe in blending creativity with strategy to deliver lasting impact.",
  };


const LeadershipTeamBios = () => {
  return (
 <section className="bg-[#1B2431] text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Left side - Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">CEO's Message</h2>
          <p className="text-lg leading-relaxed">{CEO.message}</p>
          <div className="mt-6">
            <p className="font-semibold">{CEO.name}</p>
            <p className="text-sm opacity-80">{CEO.role}</p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white p-2 rounded-lg shadow-lg">
            <Image
              src={CEO.img}
              alt={CEO.name}
              width={300}
              height={350}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadershipTeamBios