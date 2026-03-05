"use client";

import { useEffect, useState } from "react";

interface BlogViewCounterProps {
  slug: string;
  initialViews: number;
  /** e.g. "Aufrufe" (DE) or "views" (EN) */
  label?: string;
  className?: string;
  /** If true, increment count on mount (one count per page visit). */
  incrementOnMount?: boolean;
}

export function BlogViewCounter({
  slug,
  initialViews,
  label = "views",
  className = "",
  incrementOnMount = true,
}: BlogViewCounterProps) {
  const [views, setViews] = useState(initialViews);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted && incrementOnMount) {
      setMounted(true);
      fetch(`/api/blog/${encodeURIComponent(slug)}/views`, { method: "POST" })
        .then((res) => res.json())
        .then((data) => typeof data.views === "number" && setViews(data.views))
        .catch(() => {});
    }
  }, [slug, incrementOnMount, mounted]);

  return (
    <span className={className}>
      {views} {label}
    </span>
  );
}
