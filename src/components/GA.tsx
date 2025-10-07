"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GA() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    if (typeof window !== "undefined" && (window as any).gtag && process.env.NEXT_PUBLIC_GA_ID) {
      (window as any).gtag("event", "page_view", {
        page_location: window.location.href,
        page_path: url,
        send_to: process.env.NEXT_PUBLIC_GA_ID,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
