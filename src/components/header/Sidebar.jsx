"use client";

import { useEffect } from "react";
import Link from "next/link";
import MobileMenus from "./Mobilemenu";
import Image from "next/image";
import LogoBlue from "../../../public/logo/logo_blue.png";
import NavPatternTop from "../../../public/background/nav-pattern-top.png";
import NavPatternBottom from "../../../public/background/nav-pattern-bottom.png";


const Sidebar = ({ isActive, setIsActive }) => {
    useEffect(() => {
      if (isActive) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }, [isActive]);
  
    return (
      <>
        {/* Sidebar Offcanvas (Right Side) */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
            isActive ? "translate-x-0" : "translate-x-full"
          } flex flex-col`}
        >
          {/* Background Pattern - Top */}
          <div className="absolute top-0 left-0 w-full opacity-80">
            <Image src={NavPatternTop} alt="Top Pattern" className="w-full h-auto" />
          </div>
  
          {/* Logo Section */}
          <div className="relative flex flex-col items-center py-6 border-b">
            {/* Close Button */}
            <button
              onClick={() => setIsActive(false)}
              className="absolute top-4 right-4 text-gray-600 text-2xl"
            >
              &times;
            </button>
  
            {/* Logo */}
            <div className="mt-2">
              <Link href="/">
                <Image src={LogoBlue} alt="Logo" width={180} height={50} />
              </Link>
            </div>
          </div>
  
          {/* Mobile Menu */}
          <div className="flex-1 z-50 overflow-y-auto px-6 mt-6">
            <MobileMenus menuOpen={() => setIsActive(false)} />
          </div>
  
          {/* Background Pattern - Bottom */}
          <div className="absolute bottom-0 left-0 w-full opacity-80">
            <Image src={NavPatternBottom} alt="Bottom Pattern" className="w-full h-auto" />
          </div>
        </div>
  
        {/* Transparent Clickable Overlay */}
        {isActive && (
          <div
            className="fixed inset-0 bg-transparent pointer-events-auto z-40"
            onClick={() => setIsActive(false)}
          ></div>
        )}
      </>
    );
  };
  
  export default Sidebar;