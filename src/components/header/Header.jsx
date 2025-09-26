"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./nav-menu";
import Sidebar from "./Sidebar";
import Logo from "../../../public/logo/logo_blue.png";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-white shadow-md z-50 h-24 flex items-center">
        <div className="container relative px-4 mx-auto">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center z-20">
              <Image
                src={Logo}
                alt="Infodazz Logo"
                width={250}
                height={90}
                className="px-3"
                priority
              />
            </Link>

            {/* Mobile Button */}
            <button
              onClick={() => setIsActive((s) => !s)}
              aria-label="Toggle Mobile Menu"
              className="xl:hidden w-10 h-10 bg-[#fef76f] rounded-full shadow-md flex flex-col items-start justify-center pl-3 group z-20"
            >
              <span className="w-3 group-hover:w-5 h-[3px] bg-black mb-[3px] transition-all duration-300"></span>
              <span className="w-5 group-hover:w-3 h-[2px] bg-black transition-all duration-300"></span>
            </button>
          </div>

          {/* Centered Desktop Nav (no wrapping) */}
         {/* Centered Desktop Nav (single line, no scrollbar) */}
<nav className="hidden xl:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[calc(100%-260px)] max-w-[1180px] px-2">
  <div className="flex flex-nowrap items-center justify-center gap-5 2xl:gap-7 whitespace-nowrap text-[13px] 2xl:text-[14.5px]">
    <NavMenu />
  </div>
</nav>

        </div>
      </header>

      {/* Mobile Sidebar */}
      {isActive && (
        <div className="fixed inset-0 bg-black/30 xl:hidden z-[9999]">
          <div className="absolute top-0 right-0 w-72 h-full bg-white shadow-lg p-5">
            <button
              onClick={() => setIsActive(false)}
              className="text-gray-600 text-2xl absolute top-5 right-5"
            >
              &times;
            </button>
            <Sidebar isActive={isActive} setIsActive={setIsActive} />
          </div>
        </div>
      )}
    </>
  );
}
