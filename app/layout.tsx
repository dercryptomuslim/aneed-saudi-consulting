import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { CookieConsent } from "@/components/cookie-consent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Unternehmensgründung Saudi-Arabien | Aneed Ashraf (Medina)",
  description:
    "Unternehmensgründung in Saudi-Arabien (MISA) aus Medina: Setup, Franchise & Auswanderung. Operative Erfahrung vor Ort. Expertengespräch anfragen.",
  metadataBase: new URL("https://www.aneedashraf.de"),
  verification: {
    google: "Iq7y4tcgaH7MsFl6W9zfli0otwHUNrjTDsCqUVBhuH0",
  },
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Unternehmensgründung Saudi-Arabien",
    "Firma gründen Saudi-Arabien",
    "MISA Lizenz",
    "Franchise Saudi-Arabien",
    "Auswandern Saudi-Arabien",
    "Unternehmensberatung Saudi-Arabien",
    "Medina",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.aneedashraf.de",
    siteName: "Aneed Ashraf",
    title: "Unternehmensgründung Saudi-Arabien | Aneed Ashraf (Medina)",
    description:
      "Unternehmensgründung in Saudi-Arabien (MISA) aus Medina: Setup, Franchise & Auswanderung. Operative Erfahrung vor Ort. Expertengespräch anfragen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unternehmensgründung Saudi-Arabien | Aneed Ashraf (Medina)",
    description:
      "Unternehmensgründung in Saudi-Arabien (MISA) aus Medina: Setup, Franchise & Auswanderung. Operative Erfahrung vor Ort. Expertengespräch anfragen.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Aneed Ashraf - Oasis Gate LLC",
  "alternateName": "Oasis Gate",
  "url": "https://aneedashraf.de",
  "logo": "https://aneedashraf.de/logo.png",
  "image": "https://aneedashraf.de/aneed-1.jpg",
  "description": "Unternehmensberatung für Saudi-Arabien: Firmengründung, MISA-Lizenz, Premium Residency und Auswanderung. 9+ Jahre Erfahrung in Medina.",
  "founder": {
    "@type": "Person",
    "name": "Aneed Ashraf"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Medina",
    "addressCountry": "SA"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    {
      "@type": "Country",
      "name": "Germany"
    }
  ],
  "serviceType": [
    "Unternehmensberatung",
    "Firmengründung",
    "MISA-Lizenz",
    "Premium Residency Beratung",
    "Auswanderungsberatung"
  ],
  "sameAs": [
    "https://www.instagram.com/aneedashraf"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://aneedashraf.de/anfrage",
    "availableLanguage": ["German", "English", "Arabic"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        {/* DNS Prefetch & Preconnect for faster external resource loading */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        {/* Schema.org Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-slate-900`}
      >
        <AnalyticsProvider>{children}</AnalyticsProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
