"use client";

import { useEffect } from "react";
import { initScrollTracking } from "@/lib/analytics";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize scroll depth tracking on mount
    initScrollTracking();
  }, []);

  return <>{children}</>;
}
