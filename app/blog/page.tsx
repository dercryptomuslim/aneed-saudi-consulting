import { Metadata } from "next";
import { BlogPageClient } from "./blog-client";

export const metadata: Metadata = {
  title: "Blog | Aneed Ashraf - Einblicke aus Saudi-Arabien",
  description: "Aktuelle Einblicke zu Firmengründung, Leben und Investment in Saudi-Arabien. Echte Erfahrung aus fast einem Jahrzehnt Unternehmertum in Medina.",
  alternates: {
    canonical: "/blog",
    languages: {
      "de": "/blog",
      "en": "/en/blog",
    },
  },
  keywords: ["Blog Saudi-Arabien", "Firmengründung Saudi-Arabien", "Leben in Medina", "Investment Saudi-Arabien", "Premium Residency"],
  openGraph: {
    title: "Blog | Einblicke aus Saudi-Arabien - Aneed Ashraf",
    description: "Aktuelle Einblicke zu Firmengründung, Leben und Investment in Saudi-Arabien. Echte Erfahrung aus Medina.",
    url: "https://www.aneedashraf.de/blog",
    siteName: "Aneed Ashraf",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Einblicke aus Saudi-Arabien",
    description: "Aktuelle Einblicke zu Firmengründung, Leben und Investment in Saudi-Arabien.",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
