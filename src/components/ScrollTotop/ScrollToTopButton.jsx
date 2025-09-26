"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid"; // optional if you use Heroicons

export default function ScrollToTopButton({ isChatOpen }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && !isChatOpen && (
<button
  onClick={scrollToTop}
  className="fixed bottom-6 right-6 z-40 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg transition duration-300"
  aria-label="Scroll to top"
>
  <ArrowUpIcon className="w-5 h-5" />
</button>
    )
  );
}