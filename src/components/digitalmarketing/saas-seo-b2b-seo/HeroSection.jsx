import React from 'react'

const HeroSection = () => {
  return (
    <section class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6 overflow-hidden">
  <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2384CC16%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
  <div class="max-w-7xl mx-auto text-center relative z-10">
    <div class="inline-flex items-center gap-2 bg-lime-500/10 text-lime-400 px-4 py-2 rounded-full mb-8 border border-lime-500/20">
     
      <span class="text-sm font-medium">⚡ Transform Your Digital Experience</span>
    </div>
    <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
      Exceptional <span class="text-lime-500">UI/UX Design</span> That Drives Results
    </h1>
    <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
      We create intuitive, beautiful, and conversion-focused digital experiences that your users will love. 
      From concept to launch, we deliver designs that make a lasting impact.
    </p>
    <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
      <button class="bg-lime-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-400 transition-all duration-300 flex items-center gap-2 text-lg">
        Start Your Project →
      </button>
      <button class="border border-lime-500 text-lime-500 px-8 py-4 rounded-lg font-semibold hover:bg-lime-500 hover:text-slate-900 transition-all duration-300 text-lg">
        View Our Work
      </button>
    </div>
    <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-3xl font-bold text-lime-500">150+</div>
        <div class="text-gray-400">Projects Completed</div>
      </div>
      <div>
        <div class="text-3xl font-bold text-lime-500">98%</div>
        <div class="text-gray-400">Client Satisfaction</div>
      </div>
      <div>
        <div class="text-3xl font-bold text-lime-500">5+</div>
        <div class="text-gray-400">Years Experience</div>
      </div>
      <div>
        <div class="text-3xl font-bold text-lime-500">40+</div>
        <div class="text-gray-400">Happy Clients</div>
      </div>
    </div>
  </div>
</section>

  )
}

export default HeroSection