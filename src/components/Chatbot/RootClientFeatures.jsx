"use client";

import { useState } from "react";
import ScrollToTopButton from "@/components/ScrollTotop/ScrollToTopButton";
import ChatbotToggle from "@/components/Chatbot/ChatbotToggle";

export default function RootClientFeatures() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <ChatbotToggle setIsChatOpen={setIsChatOpen} />
      <ScrollToTopButton isChatOpen={isChatOpen} />
 
    </>
  );
}
