'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// Importing the new images you uploaded
import Model from "../../../../public/images/phtography/model2.jpg";
import Nature from "../../../../public/images/phtography/nature2.jpg";
import Event from "../../../../public/images/phtography/events.jpg";
import Headshot from "../../../../public/images/phtography/headshot.jpg";
import Personal from "../../../../public/images/phtography/personal.jpg";
import Landscape from "../../../../public/images/phtography/landscape.jpg";
import Product from "../../../../public/images/phtography/product2.jpg";

const categorydata = [
  { title: "Wedding", image: Personal },
  { title: "Event", image: Event },
  { title: "Product", image: Product },
  { title: "Modelling", image: Model },
  { title: "Nature", image: Nature },
  { title: "Landscape", image: Landscape },
  { title: "Portrait", image: Headshot },
];

const Category = () => {
  return (
    <section className="bg-black px-4 py-12">
      <div className="text-center text-white mb-8">
        <h3 className="text-3xl font-semibold">Our Diligences</h3>
      </div>

      <div className="container mx-auto">
        <Swiper
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          slidesPerGroupSkip={1}
          pagination={{ clickable: true }}
          spaceBetween={20} // Add consistent spacing between slides
          breakpoints={{
            100: { slidesPerView: 1, spaceBetween: 10 },
            440: { slidesPerView: 2, spaceBetween: 15 },
            576: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper pb-12" // Add padding for pagination dots
        >
          {categorydata.map((cat, idx) => (
            <SwiperSlide key={idx} className="h-[350px] flex items-center justify-center">
              <div className="relative w-full h-full overflow-hidden group rounded-md">
                <Image
                  src={cat.image}
                  alt={`category-${cat.title}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  style={{ height: '100%', objectFit: 'cover' }} // Ensuring height consistency and cover
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0"></div>
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded z-20 text-center text-sm md:text-base">
                  {cat.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
