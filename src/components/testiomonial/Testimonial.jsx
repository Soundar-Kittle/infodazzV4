// "use client"; // Ensures it runs on the client side in Next.js
// import React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// // Temporary Testimonial Data
// const testimonials = [
//   {
//     id: 1,
//     title: "Exceeding Expectations",
//     content:
//       "Exceptional service, professional team, and a website that exceeded expectations. Highly recommend their top-notch web development expertise!",
//     file: "client1.jpg", // Ensure this image exists in the public/images folder
//   },
//   {
//     id: 2,
//     title: "Great Collaboration",
//     content:
//       "They understood our vision and delivered beyond our expectations. Their expertise and support were invaluable throughout the project!",
//     file: "client2.jpg",
//   },
//   {
//     id: 3,
//     title: "Highly Recommended",
//     content:
//       "Fantastic experience! The team was professional, communicative, and delivered a product that perfectly matched our needs.",
//     file: "client3.jpg",
//   },
// ];

// export default function Testimonial() {
//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="container mx-auto text-center">
//         {/* Section Title */}
//         <div className="mb-12">
//         <div className="flex items-center justify-center mb-2">
//     <div className="w-16 h-0.5 bg-green-500 mr-4"></div>
//     <p className="text-lg font-bold uppercase tracking-wide text-[#76a527]">Testimonials</p>
//     <div className="w-16 h-0.5 bg-green-500 ml-4"></div>
//   </div>
//           <h3 className="text-3xl font-bold">
//             What Our <span className="text-green-500">Clients</span> Say
//           </h3>
//         </div>

//         {/* Swiper Section */}
//      {/* Swiper Section */}
//      <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           autoplay={{ delay: 2500, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           modules={[Autoplay, Pagination]}
//           className="w-full max-w-6xl mx-auto flex justify-center items-center"
//         >
//           {testimonials.map((testimonial) => (
//             <SwiperSlide key={testimonial.id} className="p-6 bg-transparent rounded-lg shadow-md">
//               {/* Top SVG Quote */}
//               <div className="flex justify-start">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-gray-400">
//                   <path d="M0,8v6H7.91A6.006,6.006,0,0,1,2,19v2a8.009,8.009,0,0,0,8-8V4H4A4,4,0,0,0,0,8Z" />
//                   <path d="M18,4a4,4,0,0,0-4,4v6h7.91A6.006,6.006,0,0,1,16,19v2a8.009,8.009,0,0,0,8-8V4Z" />
//                 </svg>
//               </div>

//               {/* Testimonial Image */}
//               <div className="flex justify-center my-4">
//                 <Image
//                   src={`/images/${testimonial.file}`}
//                   alt={`client image ${testimonial.id}`}
//                   width={80}
//                   height={80}
//                   className="rounded-full border-4 border-green-500"
//                 />
//               </div>

//               {/* Testimonial Title */}
//               <h4 className="text-lg font-semibold">{testimonial.title}</h4>

//               {/* Testimonial Content */}
//               <p className="text-gray-600 text-justify mt-2">{testimonial.content}</p>

//               {/* Bottom SVG Quote */}
//               <div className="flex justify-end mt-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-gray-400">
//                   <path d="M0,8v6H7.91A6.006,6.006,0,0,1,2,19v2a8.009,8.009,0,0,0,8-8V4H4A4,4,0,0,0,0,8Z" />
//                   <path d="M18,4a4,4,0,0,0-4,4v6h7.91A6.006,6.006,0,0,1,16,19v2a8.009,8.009,0,0,0,8-8V4Z" />
//                 </svg>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

"use client"; // Ensures it runs on the client side in Next.js
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
import { getTestimonials } from "@/Services/Testimonial/ApiTestimonial";

export default function Testimonial() {
  // Fetch testimonial data dynamically
  const {
    data: testimonials,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading testimonials.</div>;
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-2">
            <div className="w-16 h-0.5 bg-green-500 mr-4"></div>
            <p className="text-lg font-bold uppercase tracking-wide text-[#76a527]">
              Testimonials
            </p>
            <div className="w-16 h-0.5 bg-green-500 ml-4"></div>
          </div>
          <h3 className="text-3xl font-bold">
            What Our <span className="text-green-500">Clients</span> Say
          </h3>
        </div>

        {/* Swiper Section */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="w-full max-w-6xl mx-auto flex justify-center items-center"
        >
          {testimonials.rows.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="p-6 bg-transparent rounded-lg shadow-md"
            >
              {/* Top SVG Quote */}
              <div className="flex justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-400"
                >
                  <path d="M0,8v6H7.91A6.006,6.006,0,0,1,2,19v2a8.009,8.009,0,0,0,8-8V4H4A4,4,0,0,0,0,8Z" />
                  <path d="M18,4a4,4,0,0,0-4,4v6h7.91A6.006,6.006,0,0,1,16,19v2a8.009,8.009,0,0,0,8-8V4Z" />
                </svg>
              </div>

              {/* Testimonial Image (Conditionally render if visibility.show_image is true) */}
              {
                <div className="flex justify-center my-4">
                  <Image
                    // src={testimonial.image}
                    src={
                      testimonial.visibility.show_image == "1"
                        ? testimonial.image
                        : "/images/no_user.jpg"
                    }
                    alt={`client image ${testimonial.id}`}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-green-500"
                  />
                </div>
              }

              {/* Testimonial Title */}
              <h4 className="text-lg font-semibold">{testimonial.name}</h4>

              {/* Testimonial Description (Conditionally render if visibility.show_description is true) */}
              {testimonial.visibility.show_description && (
                <p className="text-gray-600 text-justify mt-2">
                  {testimonial.description}
                </p>
              )}

              {/* Bottom SVG Quote */}
              <div className="flex justify-end mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-400"
                >
                  <path d="M0,8v6H7.91A6.006,6.006,0,0,1,2,19v2a8.009,8.009,0,0,0,8-8V4H4A4,4,0,0,0,0,8Z" />
                  <path d="M18,4a4,4,0,0,0-4,4v6h7.91A6.006,6.006,0,0,1,16,19v2a8.009,8.009,0,0,0,8-8V4Z" />
                </svg>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
