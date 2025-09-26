import React, { useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import { useLocation } from "react-router-dom";
import Meta from "../../../utils/Meta";
import Loading from "../../../utils/Loading";

// Lazy load components except Meta
const CorporateHero = lazy(() => import("./CorporateHero"));
const HowWeDo = lazy(() => import("./HowWeDo"));
const CorporateService2 = lazy(() => import("./CorporateService2"));

const CorporateLanding = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Meta path={location.pathname} />
      <Suspense fallback={<Loading />}>
        <CorporateHero />
        <CorporateService2 />
        <HowWeDo />
      </Suspense>
    </>
  );
};

export default CorporateLanding;
