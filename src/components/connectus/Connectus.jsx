"use client";

import React from "react";
import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Ctasectionbtm from '@/components/cta/landingpage/Ctasectionbtm';

const socialMediaicons = [
  {
    src: "/media/instagramLogo.png",
    alt: "Instagram",
    href: "https://instagram.com/infodazzphotography",
  },
  {
    src: "/media/youtubeIcon.png",
    alt: "YouTube",
    href: "https://youtube.com/@Infodazz",
  },
  {
    src: "/media/facebookLogo.png",
    alt: "Facebook",
    href: "https://facebook.com/infodazz",
  },
  {
    src: "/media/logo-black.png",
    alt: "Twitter",
    href: "https://x.com/infodazzz",
  },
  {
    src: "/media/linkedinLogo.png",
    alt: "LinkedIn",
    href: "https://linkedin.com/company/infodazz",
  },
];

const contactItems = [
  {
    label: "support@infodazz.org",
    href: "mailto:support@infodazz.org",
    icon: <HiOutlineMail className="text-white text-lg" />,
  },
  {
    label: "+91 9363462746, +91 8438072709",
    href: "tel:+919363462746",
    icon: <HiPhone className="text-white text-lg" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/infodazzphotography/",
    icon: <FaInstagram className="text-pink-500 text-lg" />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Infodazz",
    icon: <FaYoutube className="text-red-500 text-lg" />,
  },
];

export default function Connectus() {
 useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    {/* Social Media Section */}
      <section className="container mx-auto mt-8 text-center">
        <h3 className="text-3xl font-bold mb-6">
          Connect <span className="text-lime-600">With Us</span>
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center rounded-r-lg border-2 border-yellow-400 bg-[#0c1c3a] h-12">
                <div className="w-14 h-14 rounded-full bg-[#0c1c3a] m-[-14px] border-2 border-yellow-400 flex items-center justify-center text-white shrink-0">
                  {item.icon}
                </div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-6 py-2 rounded-r-lg text-sm font-medium transition hover:bg-opacity-80 whitespace-nowrap"
                >
                  {item.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="container mx-auto mt-12 px-6 mb-16">
        <h3 className="text-3xl font-bold text-center mb-10">
          Visit <span className="text-lime-600">Our Offices</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Madurai",
              address: `2nd Floor, No.118, Ramayya Thevar Street,
              Natraj Nagar, Madurai, Tamilnadu - 625016, India.`,
              map: "https://maps.app.goo.gl/VZWXmQTDmMkWgHXN7",
            },
            {
              title: "Trichy",
              address: `No.10/140, General Bazaar Street, Thennur,
              Trichy, Tamilnadu - 620017, India.`,
              map: "https://maps.app.goo.gl/6MNW5kovY7NEbpMeA",
            },
            {
              title: "Kumbakonam",
              address: `No. 16, Kambatta Viswanathar Sannadhi Street,
              Kumbakonam, Thanjavur, Tamilnadu - 612001, India.`,
              map: "https://maps.app.goo.gl/wyaLM6HamwGdCTFG8",
            },
            {
              title: "Karaikudi",
              address: `No. 19/9, Third Floor, LM Complex,
              100Ft. Road, Karaikudi, Sivaganga, Tamilnadu - 630001, India.`,
              map: "https://maps.app.goo.gl/nm7P6AZrdNaeUxMd9",
            },
          ].map((office, index) => (
            <div
              key={index}
              className="flex gap-4 items-start"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="bg-yellow-300 p-3 rounded">
                <HiLocationMarker className="text-black text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">{office.title}</h4>
                <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-line">
                  {office.address}
                </p>
                <a
                  href={office.map}
                  target="_blank"
                  className="text-blue-500 text-sm font-medium mt-2 block"
                >
                  View on Map
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Ctasectionbtm />
    </>
  );
}
