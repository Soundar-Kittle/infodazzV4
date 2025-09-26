import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      company: "Technology",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "The team delivered exactly what we envisioned and more. Our new brand identity has completely transformed how customers perceive our company. The attention to detail and creative vision exceeded all expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Marketing Director",
      company: "RetailMax",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Professional, creative, and incredibly responsive. They took our rough ideas and turned them into stunning marketing materials that have significantly boosted our sales. I couldn't be happier with the results.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Founder",
      company: "GreenEats",
      image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Working with this design team was a game-changer for our restaurant. The brochures and menu designs they created perfectly capture our farm-to-table philosophy and have helped us attract so many new customers.",
      rating: 5
    },
    {
      name: "David Thompson",
      position: "CMO",
      company: "HealthPlus",
      image: "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "The design process was smooth and collaborative. They understood our healthcare brand requirements perfectly and delivered designs that instill trust and professionalism. Highly recommend their services.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
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
  );
};

export default Testimonials;
