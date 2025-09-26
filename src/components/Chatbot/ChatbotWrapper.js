"use client";

import ChatbotUI from "./Chatbot";

export default function ChatbotWrapper() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <ChatbotUI />
    </div>
  );
}