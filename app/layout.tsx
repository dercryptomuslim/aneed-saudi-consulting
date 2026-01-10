import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
  title: "Aneed Ashraf | Consulting Saudi-Arabien",
  description: "Exzellenz in Gründung, Investment und Strategie für den saudi-arabischen Markt.",
  metadataBase: new URL("https://www.aneedashraf.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.aneedashraf.de",
    siteName: "Aneed Ashraf",
    title: "Aneed Ashraf | Consulting Saudi-Arabien",
    description:
      "Exzellenz in Gründung, Investment und Strategie für den saudi-arabischen Markt.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aneed Ashraf | Consulting Saudi-Arabien",
    description:
      "Exzellenz in Gründung, Investment und Strategie für den saudi-arabischen Markt.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
