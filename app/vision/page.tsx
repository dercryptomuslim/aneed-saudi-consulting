import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";

export default function VisionPage() {
  return (
    <div className="bg-[#0f172a] text-white selection:bg-blue-500/30 vision-theme">
      {/* CSS Override für Kind-Komponenten, damit sie blau statt schwarz sind */}
      <style jsx global>{`
        .vision-theme section {
          background-color: transparent !important;
          border-color: rgba(59, 130, 246, 0.1) !important;
        }
        .vision-theme .bg-black, 
        .vision-theme .bg-neutral-950 {
          background-color: #0f172a !important; /* Passt sich dem blauen Hintergrund an */
        }
        .vision-theme .border-neutral-800 {
          border-color: rgba(59, 130, 246, 0.2) !important;
        }
      `}</style>

      <Navbar />
      
      {/* HERO SECTION - Mit Vision Background */}
      <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden !bg-transparent">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/vision-bg.png"
            alt="Saudi Vision Background"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          {/* Overlay für Lesbarkeit & Übergang ins Blaue */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 via-[#0f172a]/60 to-[#0f172a]" />
        </div>

        {/* Spotlight Effect (angepasst auf Blau/Weiß) */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 opacity-50"
          fill="white"
        />
        
        <div className="relative z-10 w-full max-w-7xl px-4 md:px-6 text-center pt-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-block rounded-full border border-blue-400/30 bg-blue-900/30 px-3 py-1 text-sm text-blue-200 backdrop-blur-md">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              Die Zukunft beginnt in Riad
            </div>
            
            <h1 className="bg-gradient-to-b from-white to-blue-200 bg-clip-text text-5xl font-bold text-transparent md:text-7xl lg:text-8xl drop-shadow-xl">
              Ihr Tor zum Erfolg in <br />
              <span className="text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Saudi-Arabien</span>
            </h1>
            
            <p className="mx-auto mt-8 max-w-2xl text-lg text-blue-100/90 md:text-xl leading-relaxed drop-shadow-md">
              9 Jahre Expertise vor Ort. Wir navigieren Sie sicher durch Gründung, Investment und Auswanderung. Werden Sie Teil der Vision 2030.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-full bg-emerald-600 px-8 text-lg font-semibold text-white hover:bg-emerald-700 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300 border border-white/10 backdrop-blur-sm">
                <Link href="/check">
                  Expertengespräch anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 rounded-full border-blue-300/30 bg-blue-900/20 px-8 text-lg text-white hover:bg-blue-900/40 hover:text-white backdrop-blur-md hover:border-blue-400/50">
                <Link href="#leistungen">
                  Unsere Leistungen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services, About, Contact - Überschrieben durch CSS */}
      <div className="relative z-10 bg-[#0f172a]">
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
