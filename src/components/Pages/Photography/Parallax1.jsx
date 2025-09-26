'use client';
import React from "react";
import sonyImage from "../../../../public/images/phtography/sony.jpg"; // or use a direct URL
// import sonyImage from "../../../../public/images/phtography/white_camera.jpg"

const Parallax1 = () => {
  return (
    <section
      className="relative min-h-[80vh] bg-fixed bg-center bg-cover text-white flex flex-col items-end justify-center px-12 py-12"
      style={{ backgroundImage: `url(${sonyImage.src})` }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="relative z-10 w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl md:text-3xl text-right font-semibold">
          The Poetry Unveiled, <br /> in Every Click
        </h3>
        <p className="text-justify text-gray-300 text-sm md:text-base">
          A click of the moment picks up the beauty of nature that is injected into objects.
          Our photography unfolds the actual colors of beauty and grace in the midst of changing times.
          A visual treat is sure for the eyes to expect elegance in the modest shots that transfer ordinary to extraordinary.
        </p>
      </div>
    </section>
  );
};

export default Parallax1;
