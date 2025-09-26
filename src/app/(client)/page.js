import Heroslider from "@/components/Heroslider/Heroslider";
import Whoweare from "@/components/whoweare/whoweare";
import Services from "@/components/services/Services";
import Ctasection from "@/components/cta/landingpage/Ctasection";
import WhyUs from "@/components/digitalmarketing/Whyus";
import Testimonial from "@/components/testiomonial/Testimonial";
import Ctasectionbtm from "@/components/cta/landingpage/Ctasectionbtm";

// import Home from "@/Views/Home/Home";

const page = () => {
  return (
    <>
      <Heroslider />
      <Whoweare />
      <Services />
      <Ctasection />
      <WhyUs />
      <Testimonial />
      <Ctasectionbtm />
    </>

  );
};

export default page;
