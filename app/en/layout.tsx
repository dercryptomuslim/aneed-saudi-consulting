import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Formation Saudi Arabia | Aneed Ashraf (Medina)",
  description:
    "Company formation in Saudi Arabia (MISA) from Medina: Setup, Franchise & Relocation. Operational on-site experience. Book an expert consultation.",
  alternates: {
    canonical: "/en",
  },
  keywords: [
    "Company Formation Saudi Arabia",
    "Start Business Saudi Arabia",
    "MISA License",
    "Franchise Saudi Arabia",
    "Relocation Saudi Arabia",
    "Business Consulting Saudi Arabia",
    "Medina",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aneedashraf.de/en",
    siteName: "Aneed Ashraf",
    title: "Company Formation Saudi Arabia | Aneed Ashraf (Medina)",
    description:
      "Company formation in Saudi Arabia (MISA) from Medina: Setup, Franchise & Relocation. Operational on-site experience. Book an expert consultation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Formation Saudi Arabia | Aneed Ashraf (Medina)",
    description:
      "Company formation in Saudi Arabia (MISA) from Medina: Setup, Franchise & Relocation. Operational on-site experience. Book an expert consultation.",
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
