import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5H0KZ4V7QH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5H0KZ4V7QH');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
