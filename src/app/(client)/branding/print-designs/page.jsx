"use client";
import {React, useState, useEffect} from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';



  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      company: "Technology",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920",
      text: "The team delivered exactly what we envisioned and more. Our new brand identity has completely transformed how customers perceive our company. The attention to detail and creative vision exceeded all expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Marketing Director",
      company: "RetailMax",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920",
      text: "Professional, creative, and incredibly responsive. They took our rough ideas and turned them into stunning marketing materials that have significantly boosted our sales. I couldn't be happier with the results.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Founder",
      company: "GreenEats",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920",
      text: "Working with this design team was a game-changer for our restaurant. The brochures and menu designs they created perfectly capture our farm-to-table philosophy and have helped us attract so many new customers.",
      rating: 5
    },
    {
      name: "David Thompson",
      position: "CMO",
      company: "HealthPlus",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920",
      text: "The design process was smooth and collaborative. They understood our healthcare brand requirements perfectly and delivered designs that instill trust and professionalism. Highly recommend their services.",
      rating: 5
    }
  ];



const page = () => {
      const [currentTestimonial, setCurrentTestimonial] = useState(0);
      const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake delay for UX (optional)
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-slate-300 border-t-slate-800"></div>
      </div>
    );
  }


        const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <>
    {/* --- Hero Section (Printing Designs) --- */}
<section className="relative bg-[#0E1624] overflow-hidden">
  <div className="container mx-auto px-4 py-16 md:py-24">
    <div className="grid gap-10 md:grid-cols-2 md:items-center">
      <div>
        <p className="uppercase tracking-widest text-sm text-[#78A52B] font-semibold">
          Printing Designs
        </p>
        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-white">
          Custom <span className="text-[#78A52B]">Flyer & Print</span> Design Services
        </h1>
        <p className="mt-4 text-[#B7C0D1] text-lg">
          From eye-catching promotional flyers to professional corporate materials,
          we design high-impact printed collateral that elevates your brand and attracts
          the right audience.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="/connect-us"
            className="inline-flex items-center gap-2 rounded-xl bg-[#78A52B] text-white px-5 py-3 font-semibold hover:bg-[#6f9526] transition"
          >
            Start Your Project
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold text-white/90 hover:bg-white/10 transition"
          >
            View Samples
          </a>
        </div>
      </div>

      <div className="relative aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
        {/* Replace with a flyer design mockup */}
        <img
          src="/images/printing-designs/hero-banner.jpg"
          alt="Flyer design showcase"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
</section>
{/* --- Flyer Design Overview --- */}
<section className="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
        Impactful <span className="text-[#78A52B]">Flyer Designs</span> That Get Noticed
      </h2>
      <p className="text-xl text-slate-600 leading-relaxed">
        Whether you’re promoting an event, launching a product, or offering a special
        promotion, our custom-designed flyers help you grab attention and connect with
        your audience — both in print and online.
      </p>
    </div>
  </div>
</section>
{/* --- Types of Flyers --- */}
<section className="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
        Types of <span className="text-[#78A52B]">Flyers</span> We Design
      </h2>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto">
        Tailored flyer designs to suit every business, purpose, and occasion.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {[
        { title: "Event Flyers", desc: "Promote concerts, festivals, meetups, and other events." },
        { title: "Corporate Flyers", desc: "Professional flyers for company profiles and services." },
        { title: "Promotional Flyers", desc: "Advertise your offers, launches or special deals." },
        { title: "Product / Menu Flyers", desc: "Perfect for products, menus and in-store promotions." },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-xl p-6 border border-slate-200 text-center hover:border-[#78A52B]/50 transition"
        >
          <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
          <p className="text-slate-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* --- Portfolio / Samples --- */}
<section className="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
        Recent <span className="text-[#78A52B]">Flyer Design</span> Work
      </h2>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto">
        A few examples of the impactful flyers we've recently designed for brands like yours.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920",
      ].map((image, index) => (
        <div
          key={index}
          className="group relative bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#78A52B]/50 transition-all duration-300 hover:scale-105"
        >
          <img src={image} className="object-cover w-full h-64" alt="Flyer Design Sample"/>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/40 backdrop-blur-sm">
            <a
              href="/portfolio"
              className="bg-[#78A52B] hover:bg-[#6f9526] text-white px-4 py-3 rounded-lg font-medium transition"
            >
              View Full Portfolio
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* --- Design & Order Process --- */}
<section className="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
        Our <span className="text-[#78A52B]">Design & Order Process</span>
      </h2>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto">
        A smooth, hassle-free process from concept to print-ready files.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {[
        { title: "1. Share Requirements", desc: "Tell us about your flyer goals, audience and content."},
        { title: "2. Concept & Design", desc: "We create initial concepts and refine based on your feedback."},
        { title: "3. Final Approval", desc: "Approve the final design for printing and distribution."},
        { title: "4. File Delivery", desc: "Receive print-ready & digital versions in various formats."}
      ].map((step, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-xl p-6 border border-slate-200 hover:border-[#78A52B]/50 transition text-center"
        >
          <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
          <p className="text-slate-600 leading-relaxed">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  <section className="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900">
            Client <span className="text-[#78A52B]">Testimonials</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don’t just take our word for it. Here’s what our satisfied clients
            have to say about our design services and results.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-2xl p-8 md:p-12 border border-slate-200 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-400/30" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6 justify-center">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#78A52B] fill-current" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-xl md:text-2xl text-slate-800 leading-relaxed text-center mb-8 font-light">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#78A52B]"
                />
                <div className="text-center">
                  <div className="font-semibold text-slate-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-slate-600">{testimonials[currentTestimonial].position}</div>
                  <div className="text-[#78A52B] text-sm">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#78A52B] transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#78A52B] transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial
                    ? 'bg-[#78A52B]'
                    : 'bg-slate-400 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* --- Frequently Asked Questions (Printing Designs) --- */}
<section className="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900">
        <span className="text-[#78A52B]">Printing Design</span> FAQs
      </h2>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto">
        Answers to the most common questions about our flyer & print design services.
      </p>
    </div>

    {/* FAQ List */}
    <div className="max-w-4xl mx-auto space-y-4">
      {[
        {
          q: "Can you prepare print-ready files for my printer?",
          a: "Absolutely. We’ll deliver high-resolution, print-ready PDFs with correct bleeds, color profiles, and crop marks, tailored to your printer’s specifications."
        },
        {
          q: "Do you offer printing services as well?",
          a: "While we do not print in-house, we work with trusted print partners and can coordinate printing for you, or provide files compatible with any professional printer."
        },
        {
          q: "Can I use the design for both print and digital promotion?",
          a: "Yes. In addition to the print version, we also supply optimized digital versions of your flyer for email, social media or web use."
        },
        {
          q: "What if I need changes after the design is delivered?",
          a: "We include 2–3 revision rounds by default. If you need updates later (e.g. new dates or offers), we’re happy to update the design at a minimal fee."
        }
      ].map((item, idx) => (
        <details
          key={idx}
          className="group bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-xl border border-slate-200 hover:border-[#78A52B]/50 transition"
        >
          <summary className="p-5 cursor-pointer flex justify-between items-center text-slate-900 font-medium">
            {item.q}
            <span className="text-[#78A52B] transform group-open:rotate-180 transition">+</span>
          </summary>
          <div className="px-5 pb-5 text-slate-600 leading-relaxed">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  </div>
</section>
{/* --- Call To Action (Printing Designs) --- */}
<section className="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
  {/* Decorative Background Elements */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#78A52B]/10 to-transparent" />
  <div className="absolute top-16 right-16 w-56 h-56 bg-[#78A52B]/20 rounded-full blur-3xl" />

  <div className="container mx-auto px-6 lg:px-8 relative z-10">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
        Ready to Bring Your <span className="text-[#78A52B]">Flyer Ideas</span> to Life?
      </h2>
      <p className="text-lg text-slate-600 mb-8">
        Let our design team create eye-catching printed materials that get your brand seen and remembered.
        Start your printing design project today with a free consultation.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="/connect-us"
          className="bg-[#78A52B] hover:bg-[#6f9526] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Start Your Printing Project
        </a>
        <a
          href="/portfolio"
          className="border border-slate-300 hover:border-[#78A52B] text-slate-800 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-[#78A52B]/10"
        >
          View More Samples
        </a>
      </div>
    </div>
  </div>
</section>



    </>
  )
}

export default page