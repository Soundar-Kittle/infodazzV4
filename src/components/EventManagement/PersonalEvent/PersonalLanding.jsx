import React, { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import Meta from "../../../utils/Meta";
import Loading from "../../../utils/Loading";

// Lazy load components except Meta
const HeroSection = lazy(() => import("./HeroSection"));
const Service = lazy(() => import("./Service"));
const Event = lazy(() => import("./Event"));
const Gallery = lazy(() => import("./Gallery"));

const PersonalLanding = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const location = useLocation();

  return (
    <>
      <Meta path={location.pathname} />
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <Event />
        <Service />
        {/* Uncomment the Gallery when needed */}
        <Gallery />
      </Suspense>
    </>
  );
};

export default PersonalLanding;
