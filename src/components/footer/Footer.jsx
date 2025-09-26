import React from "react";
import Image from "next/image";
import Link from "next/link";

// Importing Assets
import Logo from "../../../public/logo/logo_blue.png";
import Instagram from "../../../public/images/instagramLogo.png";
import Youtube from "../../../public/images/youtubeIcon.png";
import Facebook from "../../../public/images/facebookLogo.png";
import Twitter from "../../../public/images/logo-black.png";
import LinkedIn from "../../../public/images/linkedinLogo.png";

import ScrollToTopButton from "../ScrollTotop/ScrollToTopButton";

const linkData = {
  service: [
    { title: "Photo & Videography", source: "/photography" },
    { title: "Animation & VFX", source: "/video-production" },
    { title: "Event Management", source: "/corporate-events" },
    { title: "Digital Marketing", source: "/sem-smm-seo" },
    { title: "Digital Solutions", source: "/software-development" },
  ],
  media: [
    {
      icon: Instagram,
      source: "https://www.instagram.com/infodazzphotography/",
    },
    { icon: Youtube, source: "https://www.youtube.com/@Infodazz" },
    { icon: Facebook, source: "https://www.facebook.com/infodazz" },
    { icon: Twitter, source: "https://x.com/infodazzz" },
    { icon: LinkedIn, source: "https://www.linkedin.com/company/infodazz/" },
  ],
};

export default function Footer() {
  return (
    <>
        {/* <ScrollToTopButton/>
        */}
    <footer className="bg-white text-gray-800 pt-10 pb-6">
      <div className="container mx-auto px-4 text-center">
        {/* Logo & Social Media */}
        <div className="flex flex-col items-center justify-center">
          <Link href="/">
            <Image src={Logo} alt="Infodazz Logo" width={200} height={50} />
          </Link>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 justify-center">
            {linkData.media.map((media, idx) => (
              <Link key={idx} href={media.source} target="_blank">
                <Image
                  src={media.icon}
                  alt="Social Media"
                  width={35}
                  height={35}
                  className="mb-6 mr-6 hover:scale-110 hover:rotate-y-180 transition-transform duration-500"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Services Links */}
        <div className="mt-6 text-center text-sm font-medium">
          {linkData.service.map((service, idx) => (
            <span
              key={idx}
              className="inline-block hover:text-[#131f38]-700"
            >
              <Link className="font-[700] text-[18px]" href={service.source}>
                {service.title}
              </Link>
              {idx < linkData.service.length - 1 && (
                <span className="text-[#131f38]-700">&nbsp;|&nbsp;</span>
              )}
            </span>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-2 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-[#131f38]">
            <path d="M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5v13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1V200.5c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2V456c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V276.2zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5V456c0 30.9 25.1 56 56 56H456c30.9 0 56-25.1 56-56V200.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z" />
          </svg>
          <Link href="mailto:support@infodazz.org" className="text-[18px]">support@infodazz.org</Link>
        </div>
         
          <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-[#131f38]">
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          <Link href="tel:+919363462746" className="text-[18px]">+91 9363462746</Link>
        </div>
         
          <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-[#131f38]">
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          <Link href="tel:+918438072709" className="text-[18px]">+91 8438072709</Link>
        </div>
        </div>

        {/* Locations */}
        <div className="mt-2 text-center text-sm font-medium">
              <Link className="font-[700] text-[18px]" href={"/connect-us"}>Madurai</Link>
              <span className="text-[#131f38]-700">&nbsp;|&nbsp;</span>
              <Link className="font-[700] text-[18px]" href={"/connect-us"}>Trichy</Link>
              <span className="text-[#131f38]-700">&nbsp;|&nbsp;</span>
              <Link className="font-[700] text-[18px]" href={"/connect-us"}>Kumbakonam</Link>
              <span className="text-[#131f38]-700">&nbsp;|&nbsp;</span>
              <Link className="font-[700] text-[18px]" href={"/connect-us"}>Karaikudi</Link>
        </div>
      </div>
      <div className="container-fluid mx-auto px-4 text-center">
        {/* Full-width HR */}
        <hr className="mt-6 border-gray-400 w-full" />
        {/* Copyright & Credits */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p className="font-[700] text-[18px]">
          Copyrights © {new Date().getFullYear()} <Link href="/" className="font-[700] text-[18px] text-[#131f38]">Infodazz</Link>. All
            Rights Reserved. Designed by{" "}
            <Link
              href="https://infodazz.org/"
              target="_blank"
              className="font-[700] text-[18px] text-[#131f38]"
            >
              Infodazz.
            </Link>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
