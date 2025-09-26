"use client";
import AuthWatcher from "@/components/Auth/AuthWatcher";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <AuthWatcher />
      {children}
    </SessionProvider>
  );
}
