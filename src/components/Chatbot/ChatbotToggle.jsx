"use client";

import { useState } from "react";
import Image from "next/image";
import ChatbotUI from "./Chatbot";
import Logo from "../../../public/icon/favicon.ico";

export default function ChatbotToggle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ✅ Chatbot Box */}
      {open && (
        <div className="fixed bottom-[125px] right-6 z-50 shadow-xl">
          <ChatbotUI />
        </div>
      )}

      {/* ✅ Tooltip + Button wrapper */}
     <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end gap-2">
        {/* Tooltip only when closed */}
        {!open && (
          <div className="relative bg-yellow-400 text-black font-semibold text-sm px-4 py-2 rounded-md shadow-md
                          before:content-[''] before:absolute before:top-full before:right-4 before:border-8 before:border-transparent before:border-t-yellow-400">
            Talk With Dazzly
          </div>
        )}

        {/* Chatbot button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-10 h-10 bg-white border-2 border-[#25D366] flex items-center justify-center cursor-pointer animate-border-shine shadow-md"
          aria-label="Open Chatbot"
        >
          <Image
            src={Logo}
            alt="Chatbot"
            width={35}
            height={35}
            className="object-contain"
          />
        </button>
      </div>
    </>
  );
}
