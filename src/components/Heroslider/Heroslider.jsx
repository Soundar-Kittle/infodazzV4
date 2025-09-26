// 'use client'

// import  React ,{ useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";
// import slider1 from "../../../public/background/event_management.jpg";
// import slider2 from "../../../public/background/digital_marketing.jpg";

// const slides = [
//     {
//       id: 1,
//       title: "A Digital Venture for Trendsetter Solutions",
//       subtitle: "CREATIVE & INNOVATIVE",
//       image: slider1, // Update with your image path
//       buttonText: "Contact Us",
//       buttonLink: "/connect-us",
//     },
//     {
//       id: 2,
//       title: "Empowering Brands with Digital Solutions",
//       subtitle: "MARKETING & STRATEGY",
//       image: slider2, // Update with your image path
//       buttonText: "Explore Services",
//       buttonLink: "/connect-us",
//     }
//   ];

// export default function Heroslider() {
//     const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto Slide Change every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full h-[60vh] overflow-hidden">
//       {/* Slides */}
//       <div className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-1000 ${
//               index === currentSlide ? "opacity-100 z-10" : "opacity-0"
//             }`}
//           >
//             <Image
//               src={slide.image}
//               alt="Hero Image"
//               fill
//               className="object-cover w-full h-full absolute opacity-60"
//             />
//             <div className="relative z-20 text-center px-6 sm:px-12">
//               <h4 className="text-sm sm:text-lg text-gray-300 uppercase tracking-wide mb-2">
//                 {slide.subtitle}
//               </h4>
//               <h2 className="text-3xl sm:text-5xl font-bold text-white">
//                 {slide.title}
//               </h2>
//               <Link
//                 href={slide.buttonLink}
//                 className="relative px-6 py-3 text-yellow-400 font-medium text-lg border border-yellow-400 rounded-md
//                  transition-all duration-300 hover:bg-yellow-400 hover:text-black
//                  shadow-[0_0_15px_rgba(255,223,86,0.6)]
//                  hover:shadow-[0_0_25px_rgba(255,223,86,0.9)] animate-glow mt-4 inline-block"
//               >
//                 {slide.buttonText}
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Left Arrow */}
//       <button
//   onClick={() =>
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
//   }
//   className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full transition-all text-white z-20 cursor-pointer"
// >
//   <FaChevronLeft size={20} />
// </button>

// {/* Right Arrow */}
// <button
//   onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
//   className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 p-3 rounded-full transition-all text-white z-20 cursor-pointer"
// >
//   <FaChevronRight />
// </button>

// {/* Dots Navigation */}
// <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
//   {slides.map((_, index) => (
//     <button
//       key={index}
//       onClick={() => setCurrentSlide(index)}
//       className={`w-3 h-3 rounded-full transition-all ${
//         index === currentSlide ? "bg-yellow-400 w-5" : "bg-gray-400"
//       }`}
//     ></button>
//   ))}
// </div>
//     </section>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getBanners } from "@/Services/Banner/ApiBanner";

export default function HeroSlider() {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { data } = useQuery({
    queryKey: ["banners"],
    queryFn: getBanners,
  });

  useEffect(() => {
    if (data) {
      setSlides(data.rows);
    }
  }, [data]);

  // Fetch data (You can replace this with your actual API call)
  // useEffect(() => {
  //   const fetchSlides = async () => {
  //     // Here, replace this with the actual API fetch call
  //     const response = {
  //       rows: [
  //         {
  //           id: 4,
  //           title: "Empowering Brands with Digital Solutions",
  //           image: "/api/uploads/banner/1747221662998_digital_marketing.webp",
  //           button_link: "connect-us",
  //           description: "MARKETING & STRATEGY",
  //           visibility: {
  //             show_button: 1,
  //             show_content: 1,
  //             show_description: 1,
  //           },
  //           alignment: 1, // 0 for center
  //         },
  //         {
  //           id: 3,
  //           title: "A Digital Venture for Trendsetter Solutions",
  //           image: "/api/uploads/banner/1747221592795_event_management.webp",
  //           button_link: "connect-us",
  //           description: "CREATIVE & INNOVATIVE",
  //           visibility: {
  //             show_button: 1,
  //             show_content: 1,
  //             show_description: 1,
  //           },
  //           alignment: 2, // 1 for left
  //         },
  //       ],
  //     };
  //     setSlides(response.rows);
  //   };

  //   fetchSlides();
  // }, []);

  // Auto Slide Change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  // Set the alignment class based on alignment value
  const getAlignmentClass = (alignment) => {
    switch (alignment) {
      case 1:
        return "text-left"; // Left alignment
      case 2:
        return "text-right"; // Right alignment
      default:
        return "text-center"; // Center alignment
    }
  };

  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover w-full h-full absolute opacity-60"
            />
            <div
              className={`relative z-20 px-6 sm:px-12 ${getAlignmentClass(
                slide.alignment
              )}`}
            >
              {slide.visibility.show_description == "1" && (
                <h4 className="text-sm sm:text-lg text-gray-300 uppercase tracking-wide mb-2">
                  {slide.description}
                </h4>
              )}
              {slide.visibility.show_content == "1" && (
                <h2 className="text-3xl sm:text-5xl font-bold text-white">
                  {slide.title}
                </h2>
              )}
              {slide.visibility.show_button == "1" && slide.button_link && (
                <Link
                  href={`/${slide.button_link}`}
                  className="relative px-6 py-3 text-yellow-400 font-medium text-lg border border-yellow-400 rounded-md 
                 transition-all duration-300 hover:bg-yellow-400 hover:text-black 
                 shadow-[0_0_15px_rgba(255,223,86,0.6)] 
                 hover:shadow-[0_0_25px_rgba(255,223,86,0.9)] animate-glow mt-4 inline-block"
                >
                  Explore
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full transition-all text-white z-20 cursor-pointer"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 p-3 rounded-full transition-all text-white z-20 cursor-pointer"
      >
        <FaChevronRight />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-yellow-400 w-5" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
