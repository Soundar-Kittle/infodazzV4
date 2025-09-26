'use client';
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Make sure to import Swiper CSS
import "swiper/css/pagination"; // Import pagination styles if you're using pagination
import Product from "../../../../public/images/phtography/product.jpg";
import Nature from "../../../../public/images/phtography/nature_photo2.jpg";
import Model from "../../../../public/images/phtography/model_photo.jpg";
import Event from "../../../../public/images/phtography/event_photo.jpg";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import parallaxBg from "../../../../public/images/phtography/parallax6.jpg"; // import actual parallax background

const heroData = [
  {
    title: "Lorem ipsum dolor sit",
    category: "Model",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, repellendus.",
    image: Model,
  },
  {
    title: "Lorem ipsum dolor sit",
    category: "Event",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, repellendus.",
    image: Event,
  },
  {
    title: "Lorem ipsum dolor sit",
    category: "Nature",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, repellendus.",
    image: Nature,
  },
  {
    title: "Lorem ipsum dolor sit",
    category: "Product",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, repellendus.",
    image: Product,
  },
];

const Parallax2 = () => {
  const sliderRef = useRef(null);

  // Autoplay will handle automatic slide change
  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  return (
    <section
      className="relative min-h-[80vh] bg-fixed bg-center bg-cover text-white px-6 py-12 overflow-hidden flex items-center"
      style={{ backgroundImage: `url(${parallaxBg.src})` }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-semibold">
            Freeze Time,
            <br />
            Preserve Moments for Eternity
          </h3>
          <p className="text-justify text-gray-300 text-sm md:text-base">
            Infodazz professionals bear the timely mission for the focused future like a bird travels through seas and oceans. Their clips save a tale of emotions, existence, and scenes where beauty sustains. The technical precision converges to immortalize the beauty of fleeting moments. Our snappers' every sight is elevated to the level of a work of art by the creative lens's vibrant tapestry of colors, textures, and compositions.
          </p>
        </div>

        {/* Right Slider */}
        <div className="bg-black/50 p-4 rounded-md">
          <h3 className="text-2xl mb-4 font-semibold">Recent Captures</h3>
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            centeredSlides
            ref={sliderRef}
            autoplay={{
              delay: 5000, // Slide changes every 3 seconds
              disableOnInteraction: false, // Keeps autoplay enabled even if the user interacts
            }}
            loop={true} // Enable looping of slides
            className="w-full"
          >
            {heroData.map((hero, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-[350px] relative overflow-hidden">
                  <img
                    src={hero.image.src}
                    alt={`hero-${idx}`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-4 flex justify-center gap-4 z-10">
            <button
              onClick={handlePrev}
              className="p-3 bg-black/50 hover:bg-black/70 rounded-full transition"
            >
              <FaAngleLeft className="text-white" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-black/50 hover:bg-black/70 rounded-full transition"
            >
              <FaAngleRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax2;
