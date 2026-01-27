import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ConsultingFunnel } from "@/components/funnel/funnel-system";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anfrage | Unternehmensgründung Saudi-Arabien - Aneed Ashraf",
  description: "Prüfe jetzt deine Möglichkeiten für eine Unternehmensgründung oder Beratung in Saudi-Arabien. In 2 Minuten herausfinden, welche Optionen für dich möglich sind.",
  alternates: {
    canonical: "/anfrage",
  },
  keywords: ["Anfrage Saudi-Arabien", "Beratung Saudi-Arabien", "Unternehmensgründung Anfrage", "MISA Lizenz Anfrage"],
  openGraph: {
    title: "Anfrage | Unternehmensgründung Saudi-Arabien",
    description: "Prüfe jetzt deine Möglichkeiten für eine Unternehmensgründung oder Beratung in Saudi-Arabien.",
    url: "https://www.aneedashraf.de/anfrage",
    siteName: "Aneed Ashraf",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anfrage | Unternehmensgründung Saudi-Arabien",
    description: "Prüfe jetzt deine Möglichkeiten für eine Unternehmensgründung oder Beratung in Saudi-Arabien.",
  },
};

export default function CheckPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      
      <section className="relative flex-1 flex flex-col items-center justify-center pt-28 pb-12 md:py-24 overflow-hidden min-h-[85dvh] bg-slate-50">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Dein Weg nach Saudi-Arabien
            </h1>
            <p className="text-lg text-slate-600">
              Finde in 2 Minuten heraus, welche Optionen für dich möglich sind.
            </p>
          </div>

          <ConsultingFunnel />
        </div>
      </section>

      <Footer />
    </main>
  );
}
