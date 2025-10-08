"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import type { GAParams } from "@/lib/analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GA() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_GA_ID;
    if (!id || typeof window === "undefined" || typeof window.gtag !== "function") return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    const params: GAParams = {
      page_location: window.location.href,
      page_path: url,
      send_to: id,
    };
    window.gtag("event", "page_view", params);
  }, [pathname, searchParams]);

  return null;
}
