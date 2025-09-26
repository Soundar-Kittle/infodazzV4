import React from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TESTIMONIALS = [
  {
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    quote:
      "Working with this team has been transformative for our business. Their innovative approach and attention to detail exceeded all our expectations. The results speak for themselves.",
    avatar: "SJ",
    rating: 5,
    project: "E-commerce Platform",
  },
{
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    quote:
      "Working with this team has been transformative for our business. Their innovative approach and attention to detail exceeded all our expectations. The results speak for themselves.",
    avatar: "SJ",
    rating: 5,
    project: "E-commerce Platform",
  },
  {
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    quote:
      "Working with this team has been transformative for our business. Their innovative approach and attention to detail exceeded all our expectations. The results speak for themselves.",
    avatar: "SJ",
    rating: 5,
    project: "E-commerce Platform",
  },

];

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-100/40 to-orange-100/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-yellow-100/40 to-amber-100/40 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 py-20 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
              <Quote className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-amber-800 to-slate-900 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hear what our clients say about their experience working with us
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            className="testimonial-swiper !pb-16 overflow-visible"
            modules={[Autoplay, Pagination, Navigation, A11y]}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 28 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
            }}
            loop
            loopAdditionalSlides={4}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            pagination={{
  clickable: true,
  dynamicBullets: true,
  bulletClass: 'swiper-pagination-bullet',
  bulletActiveClass: 'myBulletActive',
}}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            observer
            observeParents
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
              <SwiperSlide className="overflow-visible" key={index}>
                <article className="h-full group">
                  <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-amber-200/60 via-amber-100/30 to-transparent hover:from-amber-300/80 hover:via-amber-200/50 transition-all duration-500">
                    <div className="relative min-h-[360px] rounded-3xl overflow-visible bg-white/90 backdrop-blur-sm p-8 shadow-[0_8px_32px_rgba(2,6,23,0.08)] hover:shadow-[0_16px_48px_rgba(2,6,23,0.12)] transition-all duration-500 hover:-translate-y-2 border border-white/60">


                      {/* Decorative quote */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <Quote className="w-6 h-6 text-white" />
                      </div>

                      {/* Floating background quote */}
                      <Quote className="absolute top-4 right-4 w-16 h-16 text-amber-100/60 group-hover:text-amber-200/80 transition-colors duration-500" />

                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-500">
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-slate-900 text-lg group-hover:text-slate-800 transition-colors">
                            {testimonial.author}
                          </h3>
                          <p className="text-amber-600 font-medium text-sm">
                            {testimonial.role}
                          </p>
                          <p className="text-slate-500 text-sm">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-slate-700 text-lg leading-relaxed italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Project */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/60 text-amber-700 text-sm font-medium group-hover:bg-amber-100 group-hover:border-amber-300/60 transition-all duration-300">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        {testimonial.project}
                      </div>

                      {/* Shine */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-2">
            <button className="testimonial-prev w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="testimonial-next w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats at bottom */}
        <div className="flex items-center justify-center gap-8 mt-8 text-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
            <span className="text-slate-600 font-medium">500+ Happy Clients</span>
          </div>
          <div className="w-px h-6 bg-slate-300"></div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-slate-600 font-medium">4.9/5 Average Rating</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          transform: scale(1.2) !important;
        }
        .bg-grid-slate-100 {
          background-image: radial-gradient(circle, #f1f5f9 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </section>
  );
}
