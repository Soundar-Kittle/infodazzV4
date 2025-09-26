'use client';

import React, { lazy, Suspense } from "react";
import { usePathname } from "next/navigation";
// import Meta from "../../../utils/Meta";
// import Loading from "../../../utils/Loading";
import HeroSection from "./HeroSection";
import Ctasectionbtm from "@/components/cta/landingpage/Ctasectionbtm";


const Category = lazy(() => import("./Category"));
const Parallax1 = lazy(() => import("./Parallax1"));
const Parallax2 = lazy(() => import("./Parallax2"));
const Gallery = lazy(() => import("../../../components/photography/Gallery"));

const PhotographyLanding = () => {
  const pathname = usePathname();

  return (
    <>
      {/* <Meta path={pathname} /> */}
      
       
          <HeroSection />
          <Parallax1 />
          <Category />
          <Parallax2 />

          <div id="portfolio" className="mt-6">
            <h3 className="text-center text-white text-2xl md:text-3xl font-semibold pb-4">
              Our Latest Work
            </h3>
          </div>

          <Gallery />
          <Ctasectionbtm/>
       
     
    </>
  );
};

export default PhotographyLanding;
