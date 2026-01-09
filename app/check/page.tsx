import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Spotlight } from "@/components/ui/spotlight";
import { ConsultingFunnel } from "@/components/funnel/funnel-system";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saudi-Check | Aneed Ashraf",
  description: "Prüfe jetzt deine Möglichkeiten für eine Unternehmensgründung oder Beratung in Saudi-Arabien.",
};

export default function CheckPage() {
  return (
    <main className="min-h-screen bg-black text-foreground flex flex-col">
      <Navbar />
      
      <section className="relative flex-1 flex flex-col items-center justify-center py-20 overflow-hidden min-h-[90vh]">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-4">
              Dein Weg nach Saudi-Arabien
            </h1>
            <p className="text-lg text-neutral-400">
              Finde in 2 Minuten heraus, welche Optionen für dich möglich sind.
            </p>
          </div>

          <ConsultingFunnel />
        </div>

        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </section>

      <Footer />
    </main>
  );
}

