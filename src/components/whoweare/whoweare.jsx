import React from 'react'

export default function whoweare() {
  return (
    <section className="w-full bg-gray-900 py-16 px-6 sm:px-10 md:px-16">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">

        {/* Left Side - Heading */}
        <div className="lg:w-1/2 text-center lg:text-right" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
          <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase">
            We are a professional <br />
            <span className="text-yellow-400">Digital Marketing</span> & <br />
            <span className="text-yellow-400">Event Management</span> Firm
          </h1>
        </div>

        {/* Divider Line */}
        <div className="hidden lg:block border-l-4 border-green-500 h-40" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000"></div>

        {/* Right Side - Description */}
        <div className="lg:w-1/2 space-y-4 text-gray-200" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p>
            Infodazz welcomes you to the realm of seamless and remarkable events, where creativity and accuracy collide, and every detail is curated to perfection.
          </p>
          <p>
            Your vision will be realized through a unique and captivating experience for every guest. With our personalized event planning and digital marketing services, we desire to craft moments that each visitor may relate well. With the goal of making guests feel valued and concerned, our customized touchpoints include carefully chosen entertainment, engaging activities, and small but meaningful touches.
          </p>
        </div>

      </div>
    </div>
  </section>
  )
}
