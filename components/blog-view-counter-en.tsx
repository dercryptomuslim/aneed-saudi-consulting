"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface BlogViewCounterProps {
  slug: string;
}

export function BlogViewCounterEn({ slug }: BlogViewCounterProps) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Track view
    const trackView = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}/views`, {
          method: "POST",
        });
        if (response.ok) {
          const data = await response.json();
          setViews(data.views);
        }
      } catch (error) {
        console.error("Error tracking view:", error);
      }
    };

    // Get current view count
    const getViews = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}/views`);
        if (response.ok) {
          const data = await response.json();
          setViews(data.views);
        }
      } catch (error) {
        console.error("Error fetching views:", error);
      }
    };

    // First get current views, then track new view
    getViews().then(() => {
      trackView();
    });
  }, [slug]);

  if (views === null) {
    return null; // Don't show anything while loading
  }

  return (
    <span className="flex items-center gap-2">
      <Eye className="h-4 w-4" />
      {views.toLocaleString()} {views === 1 ? "view" : "views"}
    </span>
  );
}
