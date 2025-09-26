import React from "react";
import Image from "next/image";
import cardImg1 from "../../../public/images/digitalmarketing/image1.png"; 
import cardImg2 from "../../../public/images/digitalmarketing/image2.png";
import cardImg3 from "../../../public/images/digitalmarketing/image3.png";
import logo from "../../app/favicon.ico"; // corrected logo path



const cards = [
    { id: 1, image: cardImg1, gradient: "bg-gradient-to-r from-purple-500 to-pink-500", title: "SEO / SEM Services",description:"lorum ispam int lorum ispam int lorum ispam int lorum ispam int" },
    { id: 2, image: cardImg2, gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",title: "Creative Design", description:"lorum ispam int lorum ispam int lorum ispam int lorum ispam int" },
    { id: 3, image: cardImg3, gradient: "bg-gradient-to-r from-pink-500 to-purple-500", title: "Brand Building", description:"lorum ispam int lorum ispam int lorum ispam int lorum ispam int" },
  ];

  const SkewCard = ({ image, gradient, title, description }) => (
    <div className="relative w-[400px] h-[480px] rounded-[30px] overflow-hidden shadow-xl bg-white mx-auto my-6">
      {/* Top image */}
      <Image src={image} alt="card" className="w-full h-[60%] object-contain bg-white p-4" />
  
      {/* Gradient overlay */}
      <div
        className={`absolute top-[58%] left-0 w-full h-[45%] ${gradient} rounded-t-[30px] z-10`}
      />
  
      {/* Logo (icon) */}
      <div className="absolute top-[60%] left-6 w-10 h-10 bg-black/80 rounded-[10px] z-20 flex items-center justify-center">
        <span className="text-yellow-400 text-xl font-bold">i</span>
      </div>
  
      {/* Title + Description */}
      <div className="absolute top-[63%] left-20 right-6 text-white z-20">
        <div className="font-bold text-lg">{title}</div>
        <div className="text-sm mt-1 leading-snug">
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </div>
      </div>
  
      {/* Button */}
      <div className="absolute bottom-[10%] right-6 z-20">
        <a
          href="#"
          className="text-white border border-white px-4 py-1 text-sm rounded hover:bg-white hover:text-black transition"
        >
          Learn More
        </a>
      </div>
    </div>
  );
  

const CardGrid = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-gray-100 min-h-screen px-4">
    {cards.map((card) => (
      <SkewCard key={card.id} image={card.image} gradient={card.gradient} title={card.title} />
    ))}
  </div>
  );
};

export default CardGrid;
