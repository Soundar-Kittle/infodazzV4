import Header from "@/components/header/Header";
import Heroslider from "@/components/Heroslider/Heroslider";
import Whoweare from "@/components/whoweare/whoweare";
import Services from "@/components/services/Services";
import Ctasection from "@/components/cta/landingpage/Ctasection";
import Whyus from "@/components/whyus/Whyus";
import Image from "next/image";
import Link from "next/link";
import Testimonial from "@/components/testiomonial/Testimonial";
import Ctasectionbtm from "@/components/cta/landingpage/Ctasectionbtm";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <main>
        <Heroslider />
        <Whoweare />
        <Services />
        <Ctasection />
        <Whyus />
        <Testimonial />
        <Ctasectionbtm />
        {/* <Link href={`/login`}>Login</Link> */}
      </main>
    </div>
  );
}
