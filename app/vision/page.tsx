import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white relative">
      <Navbar />

      {/* FIXED BACKGROUND - Bleibt beim Scrollen stehen */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/vision-bg.png"
          alt="Saudi Vision Background"
          fill
          className="object-cover object-center opacity-40" // Leicht abgedunkelt für Lesbarkeit
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/80 via-[#0a0f1c]/90 to-[#0a0f1c]" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        
        {/* HERO SECTION (Vision Style) */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-20">
          {/* Das klare Bild nur im Hero-Bereich nochmal als "Hologramm" oder Fokus */}
          <div className="absolute inset-0 z-[-1] overflow-hidden">
             <Image
              src="/vision-bg.png"
              alt="Hero Background"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Verlauf nach unten ins Schwarz */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0a0f1c]" />
          </div>

          <div className="text-center max-w-4xl mx-auto mt-auto mb-32 space-y-8">
             <Button asChild className="bg-emerald-600/90 hover:bg-emerald-600 text-white rounded-full px-8 py-6 text-lg shadow-[0_0_30px_rgba(16,185,129,0.4)] backdrop-blur-sm border border-white/10 transition-all hover:scale-105">
              <Link href="/check">Start Your Journey</Link>
            </Button>
          </div>
        </section>

        {/* RESTLICHE INHALTE (Transparenter Hintergrund) */}
        <div className="bg-[#0a0f1c]/95 backdrop-blur-xl border-t border-white/5">
          <Services />
          <About />
          <Contact />
          <Footer />
        </div>

      </div>
    </main>
  );
}
