"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function AuthWatcher() {
  const { status } = useSession();
  const router = useRouter();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (status === "unauthenticated" && !hasShownToast.current) {
      toast.error("Your session has expired. Please log in again.");
      hasShownToast.current = true;
      // router.replace("/login");
    }
  }, [status, router]);

  return null;
}
